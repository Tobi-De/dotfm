from django.db import models
from model_utils.fields import UrlsafeTokenField
from model_utils.models import TimeStampedModel


class Subscriber(TimeStampedModel):
    full_name = models.CharField(max_length=255, blank=True)
    email = models.EmailField(unique=True)
    code = UrlsafeTokenField(editable=False)
    confirmed = models.BooleanField(default=False)

    def __str__(self):
        return self.email
