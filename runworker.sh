#!/bin/sh

export DJANGO_SETTINGS_MODULE=config.settings
procrastinate --app=config.procrastinate.app worker