from django.db import models
from django_lifecycle import LifecycleModel
from model_utils.models import TimeStampedModel
from solo.models import SingletonModel


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
