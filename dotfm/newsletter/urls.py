from django.urls import path

from . import views

app_name = "newsletter"

urlpatterns = [
    path("subscribe-hxpost/", views.subscribe_hxpost, name="subscribe_hxpost"),
    path(
        "<str:secret>/confim-subscription/",
        views.confirm_subscription,
        name="confirm_subscription",
    ),
    path(
        "<str:secret>/confirm-subscription-hxpost/",
        views.confirm_subscription_hxpost,
        name="confirm_subscription_hxpost",
    ),
    path("<str:secret>/unsubscribe/", views.unsubscribe, name="unsubscribe"),
    path(
        "<str:secret>/unsubscribe-hxpost/",
        views.unsubscribe_hxpost,
        name="unsubscribe_hxpost",
    ),
]
