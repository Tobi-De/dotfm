from django.urls import path

from . import views

app_name = "blog"
urlpatterns = [
    path("", views.post_list, name="post_list"),
    path("post-detail/<slug:slug>", views.post_detail, name="post_detail"),
    path(
        "private-post-detail/<str:private_key>",
        views.private_post_detail,
        name="private_post_detail",
    ),
]
