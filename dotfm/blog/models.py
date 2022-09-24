from collections import Counter
from itertools import chain

from coltrane.renderer import StaticRequest, render_markdown
from django.core.exceptions import ValidationError
from django.db import models
from django.urls import reverse
from django.utils.functional import cached_property
from django.utils.html import strip_tags
from django_lifecycle import LifecycleModel
from model_utils.managers import QueryManager
from model_utils.models import TimeStampedModel
from solo.models import SingletonModel
from taggit.managers import TaggableManager


class Author(SingletonModel):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    twitter = models.URLField(blank=True)
    github = models.URLField(blank=True)
    devto = models.URLField(blank=True)
    hashnode = models.URLField(blank=True)
    polywork = models.URLField(blank=True)
    spotify = models.URLField(blank=True)

    def __str__(self):
        return self.name


def _check_if_content_file_exists(slug: str):
    try:
        render_markdown(slug=slug, request=StaticRequest("/"))
    except FileNotFoundError:
        raise ValidationError(f"File {slug}.md not found")


class Entry(LifecycleModel, TimeStampedModel):
    class Type(models.TextChoices):
        POST = "POST", "Post"
        SNIPPET = "SNIPPET", "Snippet"

    slug = models.SlugField(
        unique=True,
        max_length=255,
        db_index=True,
        validators=(_check_if_content_file_exists,),
    )
    type = models.CharField(max_length=8, choices=Type.choices, default=Type.POST)
    featured = models.BooleanField(default=False)

    objects = models.Manager()
    tags = TaggableManager()
    snippets = QueryManager(type=Type.SNIPPET)
    posts = QueryManager(type=Type.POST)

    class Meta:
        ordering = ("-created",)

    def __str__(self):
        return self.title

    def get_absolute_url(self) -> str:
        prefix = "posts" if self.type == self.Type.POST else "snippets"
        return reverse("coltrane:content", args=[f"{prefix}/{self.slug}"])

    @cached_property
    def coltrane_context(self) -> dict:
        _, context = render_markdown(slug=self.slug, request=StaticRequest("/"))
        return context

    @property
    def title(self) -> str:
        return self.coltrane_context.get("title")

    @property
    def overview(self) -> str:
        return self.coltrane_context.get("overview", "")

    @property
    def reading_time_minutes(self) -> int:
        content = self.coltrane_context.get("content")
        word_count = len(strip_tags(content).split())
        #  this is based on the generally understood statistic that most adults
        #  read at about 200 words per minute
        value = word_count / 200
        minutes, decimal_points = divmod(value, 1)
        seconds = decimal_points * 0.60
        return round(minutes if seconds < 30 else (minutes + 1))

    @classmethod
    def top_tags(cls, max_nbr: int = 10) -> list[str]:
        all_tags = [post.tags.names() for post in Post.objects.all()]
        all_tags = chain(*all_tags)
        return list(Counter(all_tags).keys())[:max_nbr]
