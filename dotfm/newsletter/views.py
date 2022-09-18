from django.http import HttpRequest, HttpResponse
from django.shortcuts import get_object_or_404
from django.views.decorators.http import require_POST
from fbv.decorators import render_html

from .forms import SubscriberForm
from .models import Subscriber


def index(request: HttpRequest):
    return HttpResponse(SubscriberForm().render())


@require_POST
def subscribe_hxpost(request: HttpRequest):
    form = SubscriberForm(request.POST)
    if not form.is_valid():
        return HttpResponse(form.render())
    instance: Subscriber = form.save()
    instance.send_confirmation_email(request)
    return HttpResponse("<p>Check your email for the confirmation email<p>")


@render_html("newsletter/confirm_subscription.html")
def confirm_subscription(request: HttpRequest, code: str):
    subscriber = get_object_or_404(Subscriber.unconfirmed.all(), code=code)
    return {"subscriber": subscriber}


@require_POST
@render_html("newsletter/partials/subscribed.html")
def confirm_subscription_hxpost(request: HttpRequest, code):
    subscriber = get_object_or_404(Subscriber.unconfirmed.all(), code=code)
    subscriber.confirm_subscription()
    return {}


@render_html("newsletter/unsubscribe.html")
def unsubscribe(request: HttpRequest, code: str):
    subscriber = get_object_or_404(Subscriber.objects.all(), code=code)
    return {"subscriber": subscriber}


@require_POST
def unsubscribe_hxpost(request: HttpRequest, code: str):
    subscriber = get_object_or_404(Subscriber.objects.all(), code=code)
    subscriber.unsubscribe()
    return {}
