from django.http import HttpRequest
from django.shortcuts import render

from .models import Project


def index(request: HttpRequest):
    return render(
        request,
        "projects/index.html",
        {"projects": Project.objects.filter(active=True).values()},
    )
