from django.urls import path, re_path, reverse

from .feed import AtomFeed, RssFeed
from .views import content
from django.views.generic import RedirectView

app_name = "blog"

urlpatterns = [
    path("", RedirectView.as_view(url="/blog/posts"), name="index"),
    path("rss.xml/", RssFeed(), name="rss_feed"),
    path("atom.xml/", AtomFeed(), name="atom_feed"),
    re_path(r"^(?P<slug>(\w|-|\/)*)/", content, name="content"),
]
