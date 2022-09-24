from django.http import HttpRequest
from fbv.decorators import render_html

from .models import Entry


@render_html("blog/index.html")
def index(request: HttpRequest):
    return {"posts": Entry.posts.all()}


@render_html("blog/snippets.html")
def snippets(request: HttpRequest):
    return {"snippets": Entry.snippets.all()}
