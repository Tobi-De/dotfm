from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

from dotfm.portfolio.views import project_list

urlpatterns = [
    path("", TemplateView.as_view(template_name="pages/home.html"), name="home"),
    path("projects/", project_list, name="projects"),
    path(settings.ADMIN_URL, admin.site.urls),
]

if settings.DEBUG:
    urlpatterns += [
        path("__reload__/", include("django_browser_reload.urls")),
    ]
