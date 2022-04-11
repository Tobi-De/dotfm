from django.conf import settings
from django.contrib import admin
from django.urls import path, include

from dotfm.core.views import home

urlpatterns = [
    path("", home, name="home"),
    path(settings.ADMIN_URL, admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += [
        path("__reload__/", include("django_browser_reload.urls")),
    ]
