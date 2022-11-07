from django.core.mail import send_mail
from django.db import models
from django.http import HttpRequest
from django.template.loader import render_to_string
from django.urls import reverse
from django.utils import timezone
from django.utils.html import strip_tags
from model_utils.fields import UrlsafeTokenField
from model_utils.models import QueryManager, TimeStampedModel


class Subscriber(TimeStampedModel):
    friendly_name = models.CharField(max_length=255, blank=True, db_index=True)
    email = models.EmailField(unique=True)
    secret = UrlsafeTokenField(editable=False, db_index=True)
    confirmed_at = models.DateTimeField(blank=True, null=True)
    unsubscribe_at = models.DateTimeField(blank=True, null=True)

    objects = models.Manager()
    unconfirmed = QueryManager(confirmed_at__isnull=True)

    def __str__(self):
        return self.email

    def subscribe(self) -> None:
        if self.confirmed_at:
            return
        self.confirmed_at = timezone.now()
        self.save()

    def unsubscribe(self) -> None:
        if self.unsubscribe_at:
            return
        self.unsubscribe_at = timezone.now()
        self.save()


class Newsletter:
    @classmethod
    def get_blog_url(cls, request: HttpRequest) -> str:
        return request.build_absolute_uri(reverse("blog:content", args=("posts",)))

    @classmethod
    def new_subscription(
        cls, request: HttpRequest, friendly_name: str, email: str
    ) -> bool:
        sub, _ = Subscriber.objects.get_or_create(
            email=email, defaults={"friendly_name": friendly_name}
        )
        if sub.confirmed_at:
            return False
        confirmation_link = request.build_absolute_uri(
            reverse("newsletter:confirm_subscription", kwargs={"secret": sub.secret})
        )
        message = render_to_string(
            "newsletter/emails/confirmation.html",
            request=request,
            context={
                "confirmation_link": confirmation_link,
                "friendly_name": friendly_name,
                "blog_url": cls.get_blog_url(request),
            },
        )
        send_mail(
            subject="Subscription Confirmation",
            from_email=None,
            recipient_list=(email,),
            message=strip_tags(message),
            html_message=message,
        )
        return True

    @classmethod
    def confirm_subscription(cls, request: HttpRequest, subscriber: Subscriber) -> None:
        subscriber.subscribe()
        cls.send_welcome_email(request=request, subscriber=subscriber)

    @classmethod
    def send_welcome_email(cls, request: HttpRequest, subscriber: "Subscriber"):
        message = render_to_string(
            "newsletter/emails/welcome.html",
            request=request,
            context={"blog_url": cls.get_blog_url(request), "subscriber": subscriber},
        )
        send_mail(
            subject="Welcome to my newsletter",
            from_email=None,
            recipient_list=(subscriber.email,),
            message=strip_tags(message),
            html_message=message,
        )

    @classmethod
    def remove_subscriber(cls, subscriber: Subscriber) -> None:
        subscriber.unsubscribe()
        # todo send unsubscribe email
