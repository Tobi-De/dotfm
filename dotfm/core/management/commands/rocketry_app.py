import subprocess

from django.core.management.base import BaseCommand
from rocketry import Rocketry

app = Rocketry(config={"task_execution": "main"})


@app.task("monthly")
def backup_database():
    subprocess.run(["python", "manage.py", "pgclone", "dump", "-c", "prod"])


class Command(BaseCommand):
    help = "Run the rocketry worker"

    def handle(self, *args, **options):
        app.run()
