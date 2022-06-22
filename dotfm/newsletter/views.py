from crispy_forms.templatetags.crispy_forms_tags import as_crispy_form
from django.http import HttpRequest
from django.utils.html import format_html
from fbv.decorators import render_html

from .forms import SubscriberForm


def subscribe(request: HttpRequest):
    form = SubscriberForm(request.POST or None)
    if request.is_post and form.is_valid():
        form.save()
        return format_html("<p>Check your email for the confirmation email<p>")
    return format_html(as_crispy_form(form))


@render_html("newsletter/confirmed_subscription.html")
def confirmed_subscription(request: HttpRequest):
    return {}


@render_html("newsletter/unsubscribe.html")
def unsubscribe(request: HttpRequest):
    return {}
