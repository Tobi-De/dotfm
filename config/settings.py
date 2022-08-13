from pathlib import Path

import environ

env = environ.Env()

ROOT_DIR = Path(__file__).resolve(strict=True).parent.parent

APPS_DIR = ROOT_DIR / "dotfm"

READ_DOT_ENV_FILE = env.bool("DJANGO_READ_DOT_ENV_FILE", default=False)

if READ_DOT_ENV_FILE:
    env.read_env(str(ROOT_DIR / ".env"))

SECRET_KEY = env("DJANGO_SECRET_KEY")

DEBUG = env("DJANGO_DEBUG", default=False)

ALLOWED_HOSTS = env.list("DJANGO_ALLOWED_HOSTS")

TAGGIT_CASE_INSENSITIVE = True

INTERNAL_IPS = [
    "127.0.0.1",
]

DJANGO_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "whitenoise.runserver_nostatic",
    "django.contrib.staticfiles",
]

THIRD_PARTY_APPS = [
    "taggit",
    "crispy_forms",
    "crispy_tailwind",
    "django_htmx",
    "tailwind",
    "django_extensions",
    "django_q",
    "django_browser_reload",
]

LOCAL_APPS = [
    "dotfm.blog",
    "dotfm.newsletter",
    "dotfm.theme",
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

TAILWIND_APP_NAME = "dotfm.theme"

MIDDLEWARE = [
    "django.middleware.security.SecurityMiddleware",
    "whitenoise.middleware.WhiteNoiseMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
    "django_htmx.middleware.HtmxMiddleware",
    "fbv.middleware.RequestMethodMiddleware",
]

ROOT_URLCONF = "config.urls"

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [str(APPS_DIR / "templates")],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
                "dotfm.blog.context_processors.author_infos",
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

DATABASES = {
    "default": env.db(
        "DATABASE_URL",
        default="postgres:///dotfm",
    ),
}

DATABASES["default"]["ATOMIC_REQUESTS"] = True
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

AUTH_PASSWORD_VALIDATORS = [
    {
        "NAME": "django.contrib.auth.password_validation.UserAttributeSimilarityValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.MinimumLengthValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.CommonPasswordValidator",
    },
    {
        "NAME": "django.contrib.auth.password_validation.NumericPasswordValidator",
    },
]

LANGUAGE_CODE = "en-us"

TIME_ZONE = "UTC"

USE_I18N = False

USE_L10N = True

USE_TZ = True

STATIC_URL = "/static/"

STATIC_ROOT = str(ROOT_DIR / "staticfiles")

STATICFILES_DIRS = [str(APPS_DIR / "static")]

STATICFILES_FINDERS = [
    "django.contrib.staticfiles.finders.FileSystemFinder",
    "django.contrib.staticfiles.finders.AppDirectoriesFinder",
]

STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

ADMIN_URL = env("ADMIN_URL", default="admin/")

ADMINS = [("""Tobi DEGNON""", "tobidegnon@protom.me")]

MANAGERS = ADMINS

LOGGING = {
    "version": 1,
    "disable_existing_loggers": False,
    "formatters": {
        "verbose": {
            "format": "%(levelname)s %(asctime)s %(module)s "
            "%(process)d %(thread)d %(message)s"
        }
    },
    "handlers": {
        "console": {
            "level": "DEBUG",
            "class": "logging.StreamHandler",
            "formatter": "verbose",
        }
    },
    "root": {"level": "INFO", "handlers": ["console"]},
}

AUTHOR_USERNAME = env("AUTHOR_USERNAME", default="tobi")

AUTHOR_EMAIL = env("AUTHOR_EMAIL", default="tobidegnon@proton.me")

AUTHOR_PASSWORD = env("AUTHOR_PASSWORD")

AUTHOR_TWITTER = env.url("AUTHOR_TWITTER", default="https://twitter.com/tobidegnon")

AUTHOR_GITHUB = env.url("AUTHOR_GIHUB", default="https://github.com/Tobi-De")

AUTHOR_DEVTO = env.url("AUTHOR_DEVTO", default="https://dev.to/tobi")

AUTHOR_HASHNODE = env.url("AUTHOR_HASHNODE", default="https://tobidegnon.hashnode.dev/")

AUTHOR_POLYWORK = env.url(
    "AUTHOR_POLYWORK", default="https://www.polywork.com/tobidegnon"
)

AUTHOR_SPOTIFY = env.url(
    "AUTHOR_SPOTIFY",
    default="https://open.spotify.com/user/16nkjfi9016vplwwuohlk9t5n?si=32da9f7b741f4ef4",
)

Q_CLUSTER = {
    "name": "Django-ORM",
    "workers": 4,
    "timeout": 90,
    "retry": 120,
    "queue_limit": 50,
    "bulk": 10,
    "orm": "default",
}

CRISPY_ALLOWED_TEMPLATE_PACKS = "tailwind"

CRISPY_TEMPLATE_PACK = "tailwind"
