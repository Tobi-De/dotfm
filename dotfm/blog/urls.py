from coltrane.feeds import ContentFeed
from django.urls import path, re_path

from .views import content

app_name = "blog"

urlpatterns = [
    path("feed/", ContentFeed()),
    path("rss.xml", ContentFeed()),
    re_path(r"^(?P<slug>(\w|-|\/)*)", content, name="content"),
]
