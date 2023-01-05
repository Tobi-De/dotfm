#!/bin/sh

tailwindcss -i dotfm/static/css/style.css -o dotfm/static/css/output.css --minify
python manage.py collectstatic --noinput
python manage.py migrate
python manage.py clear_cache
gunicorn config.wsgi --config="docker/gunicorn.conf.py"