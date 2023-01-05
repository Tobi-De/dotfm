from urllib.parse import urlparse

from django.db import models
from model_utils.models import TimeStampedModel


class Project(TimeStampedModel):
    name = models.CharField(unique=True, max_length=255)
    description = models.TextField()
    stack = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    web_url = models.URLField(blank=True)
    github_url = models.URLField(blank=True)
    featured = models.BooleanField(default=False)
    active = models.BooleanField(default=True)

    class Meta:
        ordering = ("-featured", "-created", "-modified")

    def __str__(self):
        return self.name

    def get_absolute_url(self) -> str:
        return self.web_url if self.web_url else self.github_url

    @property
    def visit_on_display(self) -> str:
        if self.web_url:
            val = urlparse(self.web_url).netloc
        else:
            val = urlparse(self.github_url).path[1:]
        return val
