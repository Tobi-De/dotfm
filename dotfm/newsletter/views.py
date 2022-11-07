from django.http import HttpRequest, HttpResponse
from django.shortcuts import get_object_or_404, redirect
from django.template.response import TemplateResponse
from django.utils.safestring import mark_safe
from django.views.decorators.http import require_POST

from .forms import SubscriberForm
from .models import Newsletter, Subscriber


@require_POST
def subscribe_hxpost(request: HttpRequest):
    form = SubscriberForm(request.POST)
    assert form.is_valid()
    new = Newsletter.new_subscription(
        request=request,
        friendly_name=form.cleaned_data["friendly_name"],
        email=form.cleaned_data["email"],
    )
    if new:
        message = "<p class='text-teal-400 text-sm w-full'>Check your email for a confirmation email<p>"
    else:
        message = (
            "<p class='text-zinc-400 text-sm w-full'>You are already subscribed</p>"
        )
    return HttpResponse(mark_safe(message))


def confirm_subscription(request: HttpRequest, secret: str):
    subscriber = get_object_or_404(Subscriber.unconfirmed.all(), secret=secret)
    return TemplateResponse(
        request, "newsletter/confirm_subscription.html", {"subscriber": subscriber}
    )


@require_POST
def confirm_subscription_hxpost(request: HttpRequest, secret: str):
    subscriber = get_object_or_404(Subscriber.unconfirmed.all(), secret=secret)
    Newsletter.confirm_subscription(request=request, subscriber=subscriber)
    return TemplateResponse(request, "newsletter/partials/subscribed.html", {})


def unsubscribe(request: HttpRequest, secret: str):
    subscriber = get_object_or_404(Subscriber.objects.all(), secret=secret)
    return TemplateResponse(
        request, "newsletter/unsubscribe.html", {"subscriber": subscriber}
    )


@require_POST
def unsubscribe_hxpost(request: HttpRequest, secret: str):
    subscriber = get_object_or_404(Subscriber.objects.all(), secret=secret)
    Newsletter.remove_subscriber(subscriber=subscriber)
    return redirect("home")
