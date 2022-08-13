from django.contrib import admin

from .models import Post


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "overview",
        "status",
        "published_at",
        "auto_publishing_date",
        "created",
        "modified",
    )
    list_filter = (
        "created",
        "modified",
        "featured",
        "published_at",
        "auto_publishing_date",
        "status",
    )
    raw_id_fields = ("tags",)
    search_fields = ("title", "description", "overview")
