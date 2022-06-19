from django.http import HttpRequest
from fbv.views import render_html

from .models import Project


@render_html("portfolio/projects.html")
def project_list(request: HttpRequest):
    return {"projects": Project.objects.order_by("-created")}
