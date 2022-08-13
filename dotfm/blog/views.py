from django.http import HttpRequest
from django.shortcuts import get_object_or_404, redirect
from fbv.decorators import render_html

from .models import Post


@render_html("blog/index.html")
def index(request: HttpRequest):
    return {"posts": Post.public.all()}


@render_html("blog/detail.html")
def detail(request: HttpRequest, slug: str):
    return {"post": get_object_or_404(Post.public.all(), slug=slug)}


@render_html("blog/detail.html")
def private(request: HttpRequest, key: str):
    post = get_object_or_404(Post.objects.all(), private_key=key)
    if post.is_published:
        return redirect(post.get_absolute_url())
    return {"post": post}
