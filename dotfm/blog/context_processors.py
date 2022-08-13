from django.conf import settings


def author_infos(_) -> dict:
    return {
        "AUTHOR_EMAIL": settings.AUTHOR_EMAIL,
        "AUTHOR_TWITTER": settings.AUTHOR_TWITTER,
        "AUTHOR_GITHUB": settings.AUTHOR_GITHUB,
        "AUTHOR_DEVTO": settings.AUTHOR_DEVTO,
        "AUTHOR_HASHNODE": settings.AUTHOR_HASHNODE,
        "AUTHOR_POLYWORK": settings.AUTHOR_HASHNODE,
        "AUTHOR_SPOTIFY": settings.AUTHOR_SPOTIFY,
    }
