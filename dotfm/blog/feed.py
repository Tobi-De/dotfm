import datetime as dt

import dateparser
from coltrane.feeds import ContentFeed as ColtraneContentFeed
from coltrane.retriever import ContentItem, get_content_items
from django.urls import reverse_lazy
from django.utils.feedgenerator import Atom1Feed


def _get_publish_date(item: ContentItem) -> dt.date:
    return dateparser.parse(item.metadata["publish_date"])


class ContentFeed(ColtraneContentFeed):
    feed_url = reverse_lazy("blog:rss_feed")
    author_name = "Tobi DEGNON"
    author_email = "tobidegnon@proton.me"

    def item_pubdate(self, item: ContentItem) -> dt.date:
        return _get_publish_date(item)

    def items(self):
        # skip index pages
        items_ = [item for item in get_content_items() if item.path.stem != "index"]
        items_.sort(key=_get_publish_date, reverse=True)
        return items_


class RssFeed(ContentFeed):
    pass


class AtomFeed(ContentFeed):
    feed_type = Atom1Feed
