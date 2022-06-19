from django.contrib.postgres.fields import ArrayField
from django.db import models
from django_extensions.db.fields import AutoSlugField
from model_utils.fields import MonitorField
from model_utils.models import TimeStampedModel


class Project(TimeStampedModel):
    class Status(models.TextChoices):
        WIP = "WIP", "Work in progress"
        PRODUCTION = "PRODUCTION", "Production"

    title = models.CharField(max_length=255, unique=True)
    description = models.TextField()
    slug = AutoSlugField(populate_from=("title",))
    status = models.CharField(max_length=30, choices=Status.choices, default=Status.WIP)
    status_changed = MonitorField(monitor="status")
    tech_stack = ArrayField(models.CharField(max_length=30), default=["python", "django"])
    github_url = models.URLField(blank=True)
    website_url = models.URLField(blank=True)

    def get_absolute_url(self) -> str | None:
        return self.website_url or self.github_url
