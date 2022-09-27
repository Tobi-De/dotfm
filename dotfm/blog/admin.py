from django.contrib import admin
from solo.admin import SingletonModelAdmin

from .models import Author

admin.site.register(Author, SingletonModelAdmin)
