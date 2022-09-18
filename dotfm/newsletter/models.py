from django.core.mail import send_mail
from django.db import models
from django.http import HttpRequest
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils import timezone
from django.utils.html import strip_tags
from django_lifecycle import LifecycleModel
from model_utils.fields import UrlsafeTokenField
from model_utils.models import QueryManager, TimeStampedModel


class Subscriber(TimeStampedModel):
    full_name = models.CharField(max_length=255, blank=True, db_index=True)
    email = models.EmailField(unique=True)
    secret = UrlsafeTokenField(editable=False, db_index=True)
    confirmed_at = models.DateTimeField(blank=True, null=True)
    unsubscribe_at = models.DateTimeField(blank=True, null=True)

    objects = models.Manager()
    unconfirmed = QueryManager(confirmed_at__isnull=True)

    def __str__(self):
        return self.email

    def send_confirmation_email(self, request: HttpRequest) -> None:
        if self.confirmed_at:
            return

        confirmation_link = request.build_absolute_uri(
            reverse("newsletter:confirm_subscription", kwargs={"secret": self.secret})
        )
        body = get_template("newsletter/emails/confirmation.html").render(
            context=Context(
                {"confirmation_link": confirmation_link, "subscriber": self}
            )
        )
        send_mail(
            subject="Subscription Confirmation",
            from_email=None,
            recipient_list=(self.email,),
            message=strip_tags(body),
            html_message=body,
        )

    def send_welcome_email(self, request: HttpRequest) -> None:
        blog_link = request.build_absolute_uri(reverse("blog:index"))
        body = render_to_string(
            "newsletter/emails/welcome.html",
            request=request,
            context={"blog_link": blog_link, "subscriber": self},
        )
        send_mail(
            subject="Welcome to my newsletter",
            from_email=None,
            recipient_list=(self.email,),
            message=strip_tags(body),
            html_message=body,
        )

    def subscribe(self, request: HttpRequest) -> None:
        if self.confirmed_at:
            return
        self.confirmed_at = timezone.now()
        self.save()
        self.send_welcome_email(request)

    def unsubscribe(self) -> None:
        if self.unsubscribe_at:
            return
        self.unsubscribe_at = timezone.now()
        self.save()
