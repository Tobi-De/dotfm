from django.contrib import admin

from .models import Subscriber


@admin.register(Subscriber)
class SubscriberAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "full_name",
        "email",
        "code",
        "confirmed",
        "created",
        "modified",
    )
    list_filter = ("created", "modified", "confirmed")
