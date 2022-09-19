from django.http import HttpRequest
from fbv.decorators import render_html

from .models import Post


@render_html("blog/index.html")
def index(request: HttpRequest):
    return {"posts": Post.objects.all()}
