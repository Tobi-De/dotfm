from coltrane import views as coltrane_views
from django.http import HttpRequest
from django.views.decorators.cache import cache_page

ONE_WEEK = 60 * 60 * 24 * 7


@cache_page(ONE_WEEK)
def content(request: HttpRequest, slug: str = "index"):
    response = coltrane_views.content(request, slug)
    return response
