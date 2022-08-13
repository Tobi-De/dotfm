from django.urls import path

from . import views

app_name = "newsletter"

urlpatterns = [
    path("", views.index, name="index"),
    path("subscribe-hxpost/", views.subscribe_hxpost, name="subscribe_hxpost"),
    path(
        "<str:code>/confim-subscription/",
        views.confirm_subscription,
        name="confirm_subscription",
    ),
    path(
        "<str:code>/confirm-subscription-hxpost/",
        views.confirm_subscription_hxpost,
        name="confirm_subscription_hxpost",
    ),
    path("<str:code>/unsubscribe/", views.unsubscribe, name="unsubscribe"),
    path(
        "<str:code>/unsubscribe-hxpost/",
        views.unsubscribe_hxpost,
        name="unsubscribe_hxpost",
    ),
]
