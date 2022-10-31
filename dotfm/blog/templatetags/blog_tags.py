import re
from itertools import chain

import dateparser
from coltrane.renderer import StaticRequest, render_markdown
from coltrane.retriever import get_content_items
from coltrane.templatetags.coltrane_tags import directory_contents
from django import template
from django.urls import reverse
from django.utils.html import strip_tags
from django.utils.safestring import mark_safe
from django.utils.text import slugify

register = template.Library()


@register.filter(name="reading_time")
def reading_time(value: str) -> str:
    word_count = len(strip_tags(value).split())
    #  this is based on the generally understood statistic that most adults
    #  read at about 200 words per minute
    value = word_count / 200
    minutes, decimal_points = divmod(value, 1)
    seconds = decimal_points * 0.60
    res = round(minutes if seconds < 30 else (minutes + 1))
    return f"{res} min read" if res > 0 else "Less than a minute"


@register.filter(name="readtime_from_post")
def readtime_from_post(metadata: dict):
    _, context = render_markdown(slug=metadata.get("slug"), request=StaticRequest("/"))
    return reading_time(context["content"])


def parse_publish_date(metadata: dict):
    # todo: change this later, add in coltrane maybe, parse date when calling directory_contents
    dt = dateparser.parse(metadata["publish_date"])
    metadata.update({"publish_date": dt})
    return metadata


def sort_by_publish_date(content_list: list[dict]) -> list[dict]:
    content_list.sort(key=lambda p: p.get("publish_date"), reverse=True)
    return content_list


@register.simple_tag(name="get_posts", takes_context=True)
def get_posts(context) -> list[dict[str, str]]:
    posts: list[dict] = directory_contents(context=context, directory="posts")  # noqa
    return sort_by_publish_date([parse_publish_date(post) for post in posts])


@register.simple_tag(name="featured_posts", takes_context=True)
def featured_posts(context) -> list[dict]:
    posts = get_posts(context)
    return [post for post in posts if post.get("featured")][:3]


# todo: search for snippets table maybe
@register.simple_tag(name="get_snippets", takes_context=True)
def get_snippets(context) -> list[dict[str, str]]:
    snippets: list[dict] = directory_contents(  # noqa
        context=context, directory="snippets"
    )
    return sort_by_publish_date([parse_publish_date(snippet) for snippet in snippets])


def get_content_items_with_tags():
    # cache here
    return [
        item
        for item in get_content_items(skip_draft=False)
        if item.metadata.get("tags") and not str(item.path).endswith("index.md")
    ]


@register.simple_tag(name="all_unique_tags")
def all_unique_tags() -> set[str]:
    tags = chain(*[item.metadata.get("tags") for item in get_content_items_with_tags()])
    return {tag.strip().lower() for tag in tags}


@register.filter(name="obsidian_links")
def convert_obsidian_outgoing_links(content: str) -> str:
    """Takes in a blog post content and transform obsidian note links to
    normal html links.
    The obsidian note links look like this:
    [[Handling background tasks in django]]
    [[Host your Django project on DigitalOcean using dokku|dokku]]
    """
    regex = r"(\[\[)(.+)(]])"
    # regex = "p"
    # x = re.match(regex, content)
    result = re.findall(regex, content)

    # fixme this is a hack and it will only for posts, a better option could be to search for the element with the title
    #   and retrieve it metadata
    def get_anchor_tag(text: str) -> str:
        if "|" in text:
            title, alias = text.split("|")
        else:
            alias = None
            title = text
        url = reverse("coltrane:content", args=("posts/" + slugify(title),))
        return f"<a href={url}>{alias or text}</a>"

    for match in result:
        _, text, _ = match
        content = content.replace("".join(match), get_anchor_tag(text))
    return mark_safe(content)
