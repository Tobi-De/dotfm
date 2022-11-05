from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.views.decorators.cache import cache_page
from django.views.generic import TemplateView

from dotfm.core import views as core_views
from dotfm.projects.views import index as projects_index

ONE_WEEK = 60 * 60 * 24 * 7

urlpatterns = [
    path("-/", include("django_alive.urls")),
    path(
        "",
        cache_page(ONE_WEEK)(TemplateView.as_view(template_name="home.html")),
        name="home",
    ),
    path("projects/", cache_page(ONE_WEEK)(projects_index), name="projects"),
    path(
        "colophon/",
        cache_page(ONE_WEEK)(TemplateView.as_view(template_name="colophon.html")),
        name="colophon",
    ),
    path("blog/", include("dotfm.blog.urls", namespace="blog")),
    path("newsletter/", include("dotfm.newsletter.urls", namespace="newsletter")),
    path(settings.ADMIN_URL, admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += [
        path("__reload__/", include("django_browser_reload.urls")),
    ]

# favicon
urlpatterns += [
    path("android-chrome-192x192.png", core_views.favicon_file),
    path("android-chrome-512x512.png", core_views.favicon_file),
    path("apple-touch-icon.png", core_views.favicon_file),
    path("favicon-16x16.png", core_views.favicon_file),
    path("favicon-32x32.png", core_views.favicon_file),
    path("favicon.ico", core_views.favicon_file),
    path("site.webmanifest", core_views.favicon_file),
]
