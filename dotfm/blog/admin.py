from django.contrib import admin
from solo.admin import SingletonModelAdmin

from .models import Author, Post

admin.site.register(Author, SingletonModelAdmin)


@admin.register(Post)
class PostAdmin(admin.ModelAdmin):
    list_display = (
        "slug",
        "title",
        "overview",
        "featured",
        "created",
        "modified",
    )
    list_filter = (
        "created",
        "modified",
        "featured",
    )
    raw_id_fields = ("tags",)
    search_fields = ("slug",)

    @classmethod
    def title(cls, obj: Post):
        return obj.title

    @classmethod
    def overview(cls, obj: Post):
        return obj.overview
