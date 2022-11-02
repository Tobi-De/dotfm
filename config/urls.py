from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

from dotfm.core import views as core_views
from dotfm.projects.views import index as projects_index

urlpatterns = [
    path("-/", include("django_alive.urls")),
    path("", TemplateView.as_view(template_name="home.html"), name="home"),
    path("projects/", projects_index, name="projects"),
    path(
        "colophon/",
        TemplateView.as_view(template_name="colophon.html"),
        name="colophon",
    ),
    path("blog/", include("coltrane.urls", namespace="coltrane")),
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
