# Generated by Django 4.1.2 on 2022-10-28 12:19

import django.utils.timezone
import model_utils.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Subscriber",
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
                    "friendly_name",
                    models.CharField(blank=True, db_index=True, max_length=255),
                ),
                ("email", models.EmailField(max_length=254, unique=True)),
                (
                    "secret",
                    model_utils.fields.UrlsafeTokenField(
                        db_index=True, editable=False, factory=None, max_length=128
                    ),
                ),
                ("confirmed_at", models.DateTimeField(blank=True, null=True)),
                ("unsubscribe_at", models.DateTimeField(blank=True, null=True)),
            ],
            options={
                "abstract": False,
            },
        ),
    ]
