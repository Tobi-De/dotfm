import os
from pathlib import Path

import environ

BASE_DIR = Path(__file__).resolve().parent.parent
APPS_DIR = BASE_DIR / "dotfm"

env = environ.Env()
environ.Env.read_env(BASE_DIR / ".env")

DJANGO_ENV = env.str("DJANGO_ENV", "dev")
SECRET_KEY = env("DJANGO_SECRET_KEY")
DEBUG = env("DJANGO_DEBUG", default=False)
ALLOWED_HOSTS = env.list("DJANGO_ALLOWED_HOSTS")

LANGUAGE_CODE = "en-us"
TIME_ZONE = "UTC"
USE_I18N = False
USE_TZ = True

DJANGO_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
    "django.contrib.humanize",
]

THIRD_PARTY_APPS = [
    "django_extensions",
    "django_htmx",
    "coltrane",
    "pgclone",
    "anymail",
]

if DEBUG:
    THIRD_PARTY_APPS += [
        "django_browser_reload",
        "debug_toolbar",
        "django_fastdev",
    ]

LOCAL_APPS = [
    "dotfm.blog",
    "dotfm.projects",
    "dotfm.newsletter",
    "dotfm.core",
]

INSTALLED_APPS = DJANGO_APPS + THIRD_PARTY_APPS + LOCAL_APPS

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
]

if DEBUG:
    MIDDLEWARE += [
        "debug_toolbar.middleware.DebugToolbarMiddleware",
        "django_browser_reload.middleware.BrowserReloadMiddleware",
    ]

INTERNAL_IPS = ["127.0.0.1", "10.0.2.2"]

DEBUG_TOOLBAR_CONFIG = {
    "DISABLE_PANELS": ["debug_toolbar.panels.redirects.RedirectsPanel"],
    "SHOW_TEMPLATE_CONTEXT": True,
}

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
            ],
        },
    },
]

WSGI_APPLICATION = "config.wsgi.application"

DATABASES = {"default": env.db("DATABASE_URL", default="postgres:///dotfm")}
DATABASES["default"]["ATOMIC_REQUESTS"] = True
DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

STATIC_URL = "/static/"
STATIC_ROOT = BASE_DIR / "staticfiles"
STATICFILES_DIRS = [APPS_DIR / "static"]
STATICFILES_FINDERS = [
    "django.contrib.staticfiles.finders.FileSystemFinder",
    "django.contrib.staticfiles.finders.AppDirectoriesFinder",
]
STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

MEDIA_ROOT = str(APPS_DIR / "media")
MEDIA_URL = "/media/"

ADMIN_URL = env("ADMIN_URL", default="admin/")

EMAIL_BACKEND = env(
    "DJANGO_EMAIL_BACKEND", default="django.core.mail.backends.console.EmailBackend"
)

COLTRANE = {
    "SITE_URL": env("COLTRANE_SITE"),
    "MARKDOWN_RENDERER": "mistune"
    # fixme: the line below cause an error, due to coltrane
    # "VIEW_CACHE": {"SECONDS": 60 * 60 * 24 * 7},  # 24 hours
}

CACHES = {
    "default": {
        "BACKEND": "django.core.cache.backends.dummy.DummyCache",
    }
}

if DJANGO_ENV == "production":
    import sentry_sdk
    from sentry_sdk.integrations.django import DjangoIntegration

    # Load cache from CACHE_URL or REDIS_URL
    if "CACHE_URL" in os.environ:
        CACHES = {"default": env.cache("CACHE_URL")}
    elif "REDIS_URL" in os.environ:
        CACHES = {"default": env.cache("REDIS_URL")}

    # Security
    CSRF_TRUSTED_ORIGINS = env.list("DJANGO_CSRF_TRUSTED_ORIGINS")
    CSRF_COOKIE_SECURE = True
    SESSION_COOKIE_SECURE = True
    SECURE_BROWSER_XSS_FILTER = True
    SECURE_CONTENT_TYPE_NOSNIFF = True

    # HTTPS only behind a proxy that terminates SSL/TLS
    SECURE_SSL_REDIRECT = True
    SECURE_REDIRECT_EXEMPT = [r"^-/"]
    SECURE_PROXY_SSL_HEADER = ("HTTP_X_FORWARDED_PROTO", "https")
    SECURE_HSTS_SECONDS = 31536000
    SECURE_HSTS_PRELOAD = True
    # Only set this to True if you are certain that all subdomains of your domain should be served exclusively via SSL.
    SECURE_HSTS_INCLUDE_SUBDOMAINS = env.bool(
        "SECURE_HSTS_INCLUDE_SUBDOMAINS", default=False
    )

    AWS_BUCKET_NAME = env("DJANGO_AWS_STORAGE_BUCKET_NAME")
    PGCLONE_CONFIGS = {
        "prod": {
            "storage_location": f"s3://{AWS_BUCKET_NAME}",
            "reversible": True,
            "instance": "prod",
        }
    }
    PGCLONE_S3_CONFIG = {
        "AWS_ACCESS_KEY_ID": env("DJANGO_AWS_ACCESS_KEY_ID"),
        "AWS_SECRET_ACCESS_KEY": env("DJANGO_AWS_SECRET_ACCESS_KEY"),
        "AWS_DEFAULT_REGION": env("DJANGO_AWS_S3_REGION_NAME"),
    }

    EMAIL_BACKEND = "anymail.backends.amazon_ses.EmailBackend"
    ANYMAIL = {
        "AMAZON_SES_CLIENT_PARAMS": {
            "aws_access_key_id": env("DJANGO_AWS_ACCESS_KEY_ID"),
            "aws_secret_access_key": env("DJANGO_AWS_SECRET_ACCESS_KEY"),
            "region_name": env("DJANGO_AWS_S3_REGION_NAME"),
        },
    }

    # sentry
    sentry_sdk.init(
        dsn=env("SENTRY_DSN"),
        integrations=[DjangoIntegration()],
        auto_session_tracking=False,
        traces_sample_rate=0.01,
        release="1.0.0",
        environment="production",
    )
