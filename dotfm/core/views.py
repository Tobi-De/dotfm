from django.http import HttpRequest
from django.shortcuts import render
from django_htmx.middleware import HtmxMiddleware
from fbv.decorators import render_html


@render_html("core/home.html")
def home(request:HttpRequest):
    return {}
