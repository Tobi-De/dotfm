from pathlib import Path

import environ

env = environ.Env()

ROOT_DIR = Path(__file__).resolve(strict=True).parent.parent

APPS_DIR = ROOT_DIR / "dotfm"

# Only used by coltrane to find the content directory
BASE_DIR = ROOT_DIR

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
    "django.contrib.humanize",
]

THIRD_PARTY_APPS = [
    "django_htmx",
    "django_extensions",
    "django_browser_reload",
    "coltrane",
    "pgclone",
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
    "fbv.middleware.RequestMethodMiddleware",
    "django_browser_reload.middleware.BrowserReloadMiddleware",
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

COLTRANE = {
    "SITE": env("COLTRANE_SITE"),
    # fixme: the line below cause an error, due to coltrane
    # "VIEW_CACHE": {"SECONDS": 60 * 60 * 24 * 7},  # 24 hours
}

if not DEBUG:
    CSRF_TRUSTED_ORIGINS = env.list("DJANGO_CSRF_TRUSTED_ORIGINS")

    # Security
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

    # skip host checking for healthcheck URLs
    MIDDLEWARE.insert(0, "django_alive.middleware.healthcheck_bypass_host_check")

    import sentry_sdk
    from sentry_sdk.integrations.django import DjangoIntegration

    sentry_sdk.init(
        dsn=env("SENTRY_DSN"),
        integrations=[DjangoIntegration()],
        auto_session_tracking=False,
        traces_sample_rate=0.01,
        release="1.0.0",
        environment="production",
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
