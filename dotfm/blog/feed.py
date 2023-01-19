import datetime as dt

import pendulum
from coltrane.feeds import ContentFeed as ColtraneContentFeed
from coltrane.retriever import ContentItem
from coltrane.retriever import get_content_items
from django.urls import reverse_lazy
from django.utils.feedgenerator import Atom1Feed


class ContentFeed(ColtraneContentFeed):
    feed_url = reverse_lazy("blog:rss_feed")
    author_name = "Tobi DEGNON"
    author_email = "tobidegnon@proton.me"

    def item_pubdate(self, item: ContentItem) -> dt.datetime:
        date = item.metadata["publish_date"]
        return pendulum.datetime(
            date.year, date.month, date.day, tz="Africa/Porto-Novo"
        )

    def items(self):
        # skip index pages
        items_ = [item for item in get_content_items() if item.path.stem != "index"]
        items_.sort(key=lambda item: item.metadata["publish_date"], reverse=True)
        return items_


class RssFeed(ContentFeed):
    pass


class AtomFeed(ContentFeed):
    feed_type = Atom1Feed
