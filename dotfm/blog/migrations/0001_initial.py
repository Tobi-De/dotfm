# Generated by Django 4.0.5 on 2022-06-19 20:31

import django.utils.timezone
import django_extensions.db.fields
import django_lifecycle.mixins
import model_utils.fields
import taggit.managers
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("taggit", "0005_auto_20220424_2025"),
    ]

    operations = [
        migrations.CreateModel(
            name="Post",
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
                ("title", models.CharField(db_index=True, max_length=255, unique=True)),
                ("overview", models.TextField()),
                ("content", models.TextField()),
                (
                    "slug",
                    django_extensions.db.fields.AutoSlugField(
                        blank=True,
                        editable=False,
                        max_length=120,
                        populate_from=("title",),
                    ),
                ),
                (
                    "status",
                    models.CharField(
                        choices=[("DRAFT", "Draft"), ("PUBLISHED", "Published")],
                        default="DRAFT",
                        max_length=30,
                    ),
                ),
                ("featured", models.BooleanField(default=False)),
                (
                    "published_at",
                    model_utils.fields.MonitorField(
                        default=django.utils.timezone.now,
                        monitor="status",
                        when={"PUBLISHED"},
                    ),
                ),
                ("auto_publishing_date", models.DateTimeField(blank=True, null=True)),
                (
                    "private_key",
                    model_utils.fields.UrlsafeTokenField(
                        editable=False,
                        factory=None,
                        help_text="Use to privately share a draft post",
                        max_length=128,
                    ),
                ),
                (
                    "is_active",
                    models.BooleanField(
                        default=True,
                        help_text="Set to False when an instance is deleted",
                    ),
                ),
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
