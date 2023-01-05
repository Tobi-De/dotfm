from django.contrib import admin

from .models import Project


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = (
        "name",
        "description",
        "stack",
        "company",
        "web_url",
        "github_url",
        "created",
        "modified",
    )
    search_fields = ("name",)
    list_filter = ("created", "modified", "featured")
