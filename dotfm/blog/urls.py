from django.urls import path, re_path

from .feed import AtomFeed, RssFeed
from .views import content

app_name = "blog"

urlpatterns = [
    path("rss.xml/", RssFeed(), name="rss_feed"),
    path("atom.xml/", AtomFeed(), name="atom_feed"),
    re_path(r"^(?P<slug>(\w|-|\/)*)/", content, name="content"),
]
