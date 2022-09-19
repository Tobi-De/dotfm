# Generated by Django 4.1.1 on 2022-09-19 15:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("blog", "0002_remove_post_auto_publishing_date_remove_post_content_and_more"),
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
        migrations.RemoveField(
            model_name="post",
            name="overview",
        ),
    ]
