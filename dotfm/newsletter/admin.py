from django.contrib import admin

from .models import Subscriber


@admin.register(Subscriber)
class SubscriberAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "friendly_name",
        "email",
        "secret",
        "confirmed_at",
        "unsubscribe_at",
        "created",
        "modified",
    )
    search_fields = (
        "friendly_name",
        "email",
    )
    list_filter = ("created", "modified", "confirmed_at", "unsubscribe_at")
