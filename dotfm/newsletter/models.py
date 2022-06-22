from django.db import models
from django_lifecycle import AFTER_CREATE, AFTER_UPDATE, LifecycleModel, hook
from model_utils.fields import UrlsafeTokenField
from model_utils.models import TimeStampedModel


class Subscriber(TimeStampedModel, LifecycleModel):
    full_name = models.CharField(max_length=255, blank=True)
    email = models.EmailField(unique=True)
    code = UrlsafeTokenField(editable=False)
    confirmed = models.BooleanField(default=False)

    def __str__(self):
        return self.email

    @hook(AFTER_CREATE)
    def send_verification_email(self):
        pass

    @hook(AFTER_UPDATE)
    def send_welcome_email(self):
        if not self.confirmed:
            return
