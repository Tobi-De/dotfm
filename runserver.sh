#!/bin/sh

python manage.py collectstatic --noinput
python manage.py migrate
python manage.py clear_cache
gunicorn config.wsgi --config=gunicorn.conf.py
