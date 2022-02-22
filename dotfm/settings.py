import os
from pathlib import Path

import environ

env = environ.Env()

BASE_DIR = Path(__file__).resolve().parent.parent

environ.Env.read_env(str(BASE_DIR / ".env"))

ALLOWED_HOSTS = env.list("DJANGO_ALLOWED_HOST")

SECRET_KEY = env("DJANGO_SECRET_KEY")

DEBUG = env.bool("DJANGO_DEBUG", False)

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

INSTALLED_APPS = [
    "coltrane",
]

ROOT_URLCONF = "dotfm.urls"

USE_TZ = True

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [(BASE_DIR / "dotfm/templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
            ],
        },
    },
]

# LOGGING = {
#     "version": 1,
#     "disable_existing_loggers": False,
#     "formatters": {
#         "verbose": {
#             "format": (
#                 "%(asctime)s [%(process)d] [%(levelname)s] "
#                 + "pathname=%(pathname)s lineno=%(lineno)s "
#                 + "funcname=%(funcName)s %(message)s"
#             ),
#         },
#     },
#     "handlers": {
#         "console": {
#             "level": "DEBUG",
#             "class": "logging.StreamHandler",
#             "formatter": "verbose",
#         },
#     },
#     "loggers": {
#         "": {"handlers": ["console"], "level": "DEBUG", "propagate": False},
#         "django.server": {"handlers": ["console"], "level": "DEBUG"},
#         "django.request": {"handlers": ["console"], "level": "DEBUG"},
#     },
# }
