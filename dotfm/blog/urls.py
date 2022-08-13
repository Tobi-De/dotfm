from django.urls import path

from . import views

app_name = "blog"
urlpatterns = [
    path("", views.index, name="index"),
    path("<slug:slug>/detail/", views.detail, name="detail"),
    path("<str:key>/private/", views.private, name="private"),
]
