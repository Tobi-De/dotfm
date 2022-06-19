import pgtrigger
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


@pgtrigger.register(pgtrigger.SoftDelete(name="soft_delete", field="is_active"))
class Post(LifecycleModel, TimeStampedModel):
    class Status(models.TextChoices):
        DRAFT = "DRAFT", "Draft"
        PUBLISHED = "PUBLISHED", "Published"

    title = models.CharField(max_length=255, unique=True, db_index=True)
    overview = models.TextField()
    content = models.TextField()
    slug = AutoSlugField(populate_from=("title",), max_length=120)
    status = models.CharField(
        max_length=30, choices=Status.choices, default=Status.DRAFT
    )
    featured = models.BooleanField(default=False)
    published_at = MonitorField(monitor="status", when=(Status.PUBLISHED,))
    auto_publishing_date = models.DateTimeField(null=True, blank=True)
    private_key = UrlsafeTokenField(
        editable=False, help_text="Use to privately share a draft post"
    )
    is_active = models.BooleanField(
        default=True, help_text="Set to False when an instance is deleted"
    )

    objects = models.Manager()
    public = QueryManager(status=Status.PUBLISHED, is_active=True).order_by("-created")
    tags = TaggableManager()

    class Meta:
        ordering = ("-created",)

    def __str__(self):
        return self.title

    def get_absolute_url(self) -> str:
        return reverse("blog:post_detail", kwargs={"slug": self.slug})

    @property
    def sharable_url(self):
        url = self.get_absolute_url()
        if self.status == self.Status.DRAFT:
            url = reverse(
                "blog:private_post_detail", kwargs={"private_key": self.private_key}
            )
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
    def html_content(self) -> str:
        """render the post content to html"""
        return markdown(self.content, extras=MARKDOWN_EXTRAS)

    @property
    def html_metadata(self) -> str:
        # TODO
        return ""

    @property
    def menu_items(self) -> dict[str, str]:
        """build a menu from content into a dictionary with menu name as key  and the url for value."""
        return {}

    def _create_auto_publishing_task(self):
        if not self.auto_publishing_date:
            return
        # TODO

    @hook(AFTER_CREATE, when="auto_publishing_date", was_not=None)
    def create_auto_publishing_task(self):
        self._create_auto_publishing_task()

    @hook(AFTER_UPDATE, when="auto_publishing_date", has_changed=True)
    def create_auto_publishing_task_(self):
        self._create_auto_publishing_task()

    def publish(self) -> None:
        self.status = self.Status.PUBLISHED
        self.save()
