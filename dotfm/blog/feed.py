from coltrane.feeds import ContentFeed
from django.utils.feedgenerator import Atom1Feed


class RssFeed(ContentFeed):
    pass


class AtomFeed(ContentFeed):
    feed_type = Atom1Feed
