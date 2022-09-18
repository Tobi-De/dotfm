from collections import Counter
from itertools import chain

from django.db import models
from django.urls import reverse
from django.utils.html import strip_tags
from django_extensions.db.fields import AutoSlugField
from django_lifecycle import AFTER_CREATE, AFTER_UPDATE, LifecycleModel, hook
from markdown2 import markdown
from model_utils.fields import MonitorField, UrlsafeTokenField
from model_utils.models import QueryManager, TimeStampedModel
from taggit.managers import TaggableManager

# List of all available extras: https://github.com/trentm/python-markdown2/wiki/Extras
MARKDOWN_EXTRAS = [
    "fenced-code-blocks",
    "header-ids",
    "metadata",
    "strike",
    "tables",
    "task_list",
    "nofollow",
    "code-friendly",
    "footnotes",
    "numbering",
    "strike",
    "toc",
]


class Post(LifecycleModel, TimeStampedModel):
    class Status(models.TextChoices):
        DRAFT = "DRAFT", "Draft"
        PUBLISHED = "PUBLISHED", "Published"

    title = models.CharField(max_length=255, unique=True, db_index=True)
    overview = models.TextField()
    content = models.TextField()
    content_changed = MonitorField(monitor="content")
    slug = AutoSlugField(populate_from=("title",), max_length=120)
    status = models.CharField(
        max_length=30, choices=Status.choices, default=Status.DRAFT
    )
    published_at = MonitorField(monitor="status", when=(Status.PUBLISHED,))
    featured = models.BooleanField(default=False)
    auto_publishing_date = models.DateTimeField(null=True, blank=True)
    private_key = UrlsafeTokenField(
        editable=False, help_text="Use to privately share a draft version of the post."
    )

    objects = models.Manager()
    public = QueryManager(status=Status.PUBLISHED, is_active=True).order_by("-created")
    tags = TaggableManager()

    class Meta:
        ordering = ("-created",)

    def __str__(self):
        return self.title

    def get_absolute_url(self) -> str:
        return reverse("blog:detail", kwargs={"slug": self.slug})

    @property
    def sharable_url(self):
        url = self.get_absolute_url()
        if self.status == self.Status.DRAFT:
            url = reverse("blog:private", kwargs={"key": self.private_key})
        return url

    @property
    def is_published(self):
        return self.status == self.Status.PUBLISHED

    @property
    def reading_time(self):
        word_count = len(strip_tags(markdown(self.content)).split())
        minutes = int(str(word_count / 200).split(".")[0])
        seconds = round(int(str(word_count / 200).split(".")[1]) * 0.60)
        return minutes if seconds < 30 else (minutes + 1)

    @property
    def html_overview(self) -> str:
        """render the post overview to html"""
        return markdown(self.overview, extras=MARKDOWN_EXTRAS)

    @property
    def html_content(self) -> str:
        """render the post content to html"""
        return markdown(self.content, extras=MARKDOWN_EXTRAS)

    @property
    def html_metadata(self) -> str:
        # TODO the idea is generating meta tags
        return ""

    def _create_auto_publishing_task(self):
        if not self.auto_publishing_date:
            return
        # schedule("dotfm.blog.tasks.publish_post", self.id)

    @hook(AFTER_CREATE, when="auto_publishing_date", is_not=None)
    def create_auto_publishing_task(self):
        self._create_auto_publishing_task()

    @hook(AFTER_UPDATE, when="auto_publishing_date", has_changed=True)
    def create_auto_publishing_task_(self):
        self._create_auto_publishing_task()

    def publish(self) -> None:
        self.status = self.Status.PUBLISHED
        self.save()
        # publish to all channels
        # TODO publishing to all channels

    @classmethod
    def top_tags(cls, max_nbr: int = 10) -> list[str]:
        all_tags = [post.tags.names() for post in Post.objects.all()]
        all_tags = chain(*all_tags)
        return list(Counter(all_tags).keys())[:max_nbr]
