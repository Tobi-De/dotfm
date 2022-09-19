from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

urlpatterns = [
    path("", TemplateView.as_view(template_name="home.html"), name="home"),
    path("blog/", include("dotfm.blog.urls", namespace="blog")),
    path("blog/", include("coltrane.urls", namespace="coltrane")),
    path("newsletter/", include("dotfm.newsletter.urls", namespace="newsletter")),
    path(settings.ADMIN_URL, admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += [
        path("__reload__/", include("django_browser_reload.urls")),
    ]
