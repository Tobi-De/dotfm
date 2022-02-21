import os
from pathlib import Path

# 1. Django Core Settings

# Dangerous: disable host header validation
ALLOWED_HOSTS = ["*"]

SECRET_KEY = "77563d6d7f54e54fede0eafe0f94635c53dc1f73fa4c1f6c2d4249a30f094dca"


BASE_DIR = Path(__file__).resolve().parent.parent

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": "db.sqlite3",
    },
}

DEBUG = os.environ.get("DEBUG", "") == "1"

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

INSTALLED_APPS = [
    "coltrane",
    "dotfm.core",
]

ROOT_URLCONF = "dotfm.urls"

USE_TZ = True
