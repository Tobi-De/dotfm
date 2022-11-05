from coltrane import views as coltrane_views
from coltrane.feeds import ContentFeed
from django.urls import path, re_path

app_name = "blog"

urlpatterns = [
    path("rss.xml", ContentFeed()),
    re_path(r"^(?P<slug>(\w|-|\/)*)", coltrane_views.content, name="content"),
]
