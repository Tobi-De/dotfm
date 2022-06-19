from django.http import HttpRequest
from django.shortcuts import get_object_or_404, redirect
from fbv.decorators import render_html

from .models import Post


@render_html("blog/post_list.html")
def post_list(request: HttpRequest):
    return {"posts": Post.public.all()}


@render_html("blog/post_detail.html")
def post_detail(request: HttpRequest, slug: str):
    return {"post": get_object_or_404(Post.public.all(), slug=slug)}


@render_html("blog/post_detail.html")
def private_post_detail(request: HttpRequest, private_key: str):
    post = get_object_or_404(Post.objects.all(), private_key=private_key)
    if post.is_published:
        return redirect(post.get_absolute_url())
    return {"post": post}
