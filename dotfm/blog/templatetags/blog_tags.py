from coltrane.templatetags.coltrane_tags import directory_contents
from django import template
from django.conf import settings
from django.utils.html import strip_tags

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
    return f"{res} minutes" if res > 0 else "less than a minute"


def _is_not_draft(metadata: dict) -> bool:
    if settings.DEBUG:
        return True
    return not metadata.get("draft", True)


@register.simple_tag(name="get_posts", takes_context=True)
def get_posts(context) -> list[dict[str, str]]:
    posts: list[dict] = directory_contents(  # noqa
        context=context, directory="posts/2022"
    )
    return [post for post in posts if _is_not_draft(post)]


@register.simple_tag(name="get_snippets", takes_context=True)
def get_snippets(context) -> list[dict[str, str]]:
    snippets: list[dict] = directory_contents(  # noqa
        context=context, directory="snippets/2022"
    )
    return [snippet for snippet in snippets if _is_not_draft(snippet)]
