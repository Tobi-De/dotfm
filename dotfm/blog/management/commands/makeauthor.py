from django.conf import settings
from django.contrib.auth.models import User
from django.core.management.base import BaseCommand
from django.db import IntegrityError


class Command(BaseCommand):
    """Create the blog's author"""

    def handle(self, *args, **options):
        try:
            User.objects.create_superuser(
                settings.AUTHOR_USERNAME,
                settings.AUTHOR_EMAIL,
                settings.AUTHOR_PASSWORD,
            )
            self.stdout.write(self.style.SUCCESS("The blog's author was created"))
        except IntegrityError:
            self.stdout.write(self.style.SUCCESS("The blog's author already exists"))
