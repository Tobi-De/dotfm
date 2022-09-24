# Generated by Django 4.1.1 on 2022-09-23 15:49

import django.utils.timezone
import django_lifecycle.mixins
import model_utils.fields
import taggit.managers
from django.db import migrations, models

import dotfm.blog.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("taggit", "0005_auto_20220424_2025"),
    ]

    operations = [
        migrations.CreateModel(
            name="Author",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("name", models.CharField(max_length=255)),
                ("email", models.EmailField(max_length=254)),
                ("twitter", models.URLField(blank=True)),
                ("github", models.URLField(blank=True)),
                ("devto", models.URLField(blank=True)),
                ("hashnode", models.URLField(blank=True)),
                ("polywork", models.URLField(blank=True)),
                ("spotify", models.URLField(blank=True)),
            ],
            options={
                "abstract": False,
            },
        ),
        migrations.CreateModel(
            name="Entry",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "created",
                    model_utils.fields.AutoCreatedField(
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="created",
                    ),
                ),
                (
                    "modified",
                    model_utils.fields.AutoLastModifiedField(
                        default=django.utils.timezone.now,
                        editable=False,
                        verbose_name="modified",
                    ),
                ),
                (
                    "slug",
                    models.SlugField(
                        max_length=255,
                        unique=True,
                        validators=[dotfm.blog.models._check_if_content_file_exists],
                    ),
                ),
                (
                    "type",
                    models.CharField(
                        choices=[("POST", "Post"), ("SNIPPET", "Snippet")],
                        default="POST",
                        max_length=8,
                    ),
                ),
                ("featured", models.BooleanField(default=False)),
                (
                    "tags",
                    taggit.managers.TaggableManager(
                        help_text="A comma-separated list of tags.",
                        through="taggit.TaggedItem",
                        to="taggit.Tag",
                        verbose_name="Tags",
                    ),
                ),
            ],
            options={
                "ordering": ("-created",),
            },
            bases=(django_lifecycle.mixins.LifecycleModelMixin, models.Model),
        ),
    ]
