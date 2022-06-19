from django.contrib import admin

from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "description",
        "slug",
        "status",
        "status_changed",
        "tech_stack",
        "github_url",
        "website_url",
        "created",
        "modified",
    )
    list_filter = ("created", "modified", "status", "status_changed")
    search_fields = ("title", "description")
