from django.urls import include, path

urlpatterns = [
    path("", include("coltrane.urls")),
]
