---
share: True
featured: True
title: Bootstraping a production-ready django project
slug: bootstraping-a-production-ready-django-project
tags:
 - django
 - cookiecuter
 - project-starter
description: >
 If you have some experience with django and feel that the django django-admin startproject command is too light for you, then cookiecuter-django might be just what you are looking for. 
publish_date: 2022-10-30
upload_path: posts/2022
---

Through this guide, we will see how to start a new django project using a [cookiecutter](https://github.com/cookiecutter/cookiecutter). This guide is intended for beginners and intermediate level devs who already have experience with django and want a ready to use production grade setup for their django projects.
I'm promoting [cookiecutter-django](https://github.com/pydanny/cookiecutter-django) here, but it's not the only one available in town, a quick search for django cookiecutter on the [django packages](https://djangopackages.org/grids/g/cookiecutters/) website or [GitHub](https://github.com/search?q=django+cookiecutter) will give you a ton of options.

If you are wondering what I mean by **production-ready**, here is a non-exhaustive list of what I expect :

- settings oriented towards the highest level of security
- basic deployment requirements included
- logging and monitoring set up
- postgresql requirements included
- linters and formatters already set up
- pytest set up
- etc

And for convenience, **cookiecuter-django** makes it easy to set up via the prompt common django packages that solve common issues such as :

- Task queue manager (celery)
- Mail services (amazon SES, Sendgrid, etc.) etc.
- CI / CD pipeline (github, gitlab, etc)

If you are already convinced at this point, just run the two commands below, and you are done 😀.

```sh
pip install "cookiecutter>=1.7.0"
cookiecutter https://github.com/cookiecutter/cookiecutter-django
```

Read on for a closer look at all the options available and why you might want to ignore some of them to simplify the initial project generated a bit.

## So what is a cookiecutter anyway ?

The [cookiecutter](https://github.com/cookiecutter/cookiecutter) project was initiated by [Audrey Feldroy](https://github.com/audreyfeldroy), the co-author of the excellent [Two Scoops of Django](https://www.feldroy.com/collections/everything/products/two-scoops-of-django-3-x).  It is a command-line utility that creates projects from cookiecutters (project templates). There are a multitude of cookiecutters for various frameworks, django, flask, etc.

## Starting a new project using cookiecutter-django

The default values are in brackets, if you see a blank line, then I've used the default value by pressing the **Enter** key. Through this guide I linked many external references to other page to help you understand what I can't detail here, but do not feel obligated to follow each link each time, otherwise you might feel exhausted before the end. I suggest you read the entire article at least once, then reread it by visiting the links that you find interesting.

```c
pip install cookiecutter
cookiecutter https://github.com/pydanny/cookiecutter-django
project_name [My Awesome Project]: Ushopify
project_slug [ushopify]:
description [Behold My Awesome Project!]: My amazing ecommerce platform.
author_name [Daniel Roy Greenfeld]: John Doe
domain_name [example.com]: ushopify.com
email [john-doe@example.com]: doe@ushopify.com
version [0.1.0]: 
Select open_source_license:
1 - MIT
2 - BSD
3 - GPLv3
4 - Apache Software License 2.0
5 - Not open source
Choose from 1, 2, 3, 4, 5 [1]: 1
```

A source code license is a legal text that tells people what they may do with the source code, for example, edit it, use it, share it with others freely, etc. More information about software licensing [here](https://en.wikipedia.org/wiki/Software_license).

```c
timezone [UTC]: US/Pacific
```

I chose a completely random location. You can get the list of timezones [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) or open your python shell (ever heard of [bpython](https://bpython-interpreter.org/)?) and type this code:

```python
from pytz import all_timezones
for tz in all_timezones:
      print(tz)
```

```c
windows [n]:
use_pycharm [n]: y
```

If you are using [pycharm](https://www.jetbrains.com/pycharm/), the cookiecutter will create **runserver**, **migrate** and more run configurations automatically for you, neat 😎.

```c
use_docker [n]: n
```

Docker is an open source platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure , so you can deliver software quickly. Choosing **y**, the cookiecutter will automatically create docker and docker-compose files to help you run your project locally and even deploy it with less effort, it's a great start to help you deploy your project easily, but I think it is necessary to have a minimum of experience with docker before you choose **y**. If you want more information about docker, check [here](https://www.docker.com/).

```c
Select postgresql_version:
1 - 12.3
2 - 11.8
3 - 10.8
4 - 9.6
5 - 9.5
Choose from 1, 2, 3, 4, 5 [1]:
Select js_task_runner:
1 - None
2 - Gulp
Choose from 1, 2 [1]:
```

I always choose the default option for the postgresql version, it's usually the latest.
If you don't have much experience with front-end development, your answer for the **js_task_runner** option is probably the default one (None).

```c
Select cloud_provider:
1 - AWS
2 - GCP
3 - None
Choose from 1, 2, 3 [1]:
```

This option concerns the management of static files (HTML, CSS, static images like background images) and media files (file upload by you or your users like profile picture for example). If you choose **AWS** (amazon web service) or **GCP** (google cloud provider), your project will be configured for these providers to handle static and media files in production. If you choose **None**, then media files will not work by default (you will have to set it up yourself) in production and static files will work only if you choose **y** on the option **use_whitenoise**. For a step-by-step guide on how to configure static and media files serving yourself using **AWS**, watch [this](https://www.youtube.com/watch?v=kt3ZtW9MXhw&list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p&index=16).

```c
Select mail_service:
1 - Mailgun
2 - Amazon SES
3 - Mailjet
4 - Mandrill
5 - Postmark
6 - Sendgrid
7 - SendinBlue
8 - SparkPost
9 - Other SMTP
Choose from 1, 2, 3, 4, 5, 6, 7, 8, 9 [1]: 2
```

I usually go with [amazon SES](https://aws.amazon.com/ses/) because it is the easiest to set up for me, but do what you want based on your experience. For a simple setup based on [SMTP](https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol) settings, choose **9**.

```c
use_async [n]:
```

> Indicates whether the project should use web sockets with Uvicorn + Gunicorn.
 
This statement is from the [cookiecutter-django official documentation](https://cookiecutter-django.readthedocs.io/en/latest/project-generation-options.html).
If you are not sure what it means, there is a high chance you don't need it, skip it.
If you want to know more about websocket in django, read [this](https://dev.to/alexoleshkevich/websockets-in-django-3-1-532o). 

```c  
use_drf [n]: 
```

In case you are building a json based API, then choose **y**. 
More info on Dango Rest framework [here](https://www.django-rest-framework.org/).  DRF is the go-to framework to build json-based APIs with django. What I call a json-based API here most people would call it a REST API, but [here's why](https://htmx.org/essays/how-did-rest-come-to-mean-the-opposite-of-rest/) they're wrong.

```c
custom_bootstrap_compilation [n]: 
```

Indicates whether the project should support Bootstrap recompilation via the selected JavaScript task runner’s task. This can be useful for real-time Bootstrap variable alteration (Official Doc description). If, like me, you are not sure that you understood, then choose the default answer.

```c
use_compressor [n]: 
```

Add and setup [django-compressor](https://github.com/django-compressor/django-compressor) for your project.

>Django Compressor processes, combines and minifies linked and inline Javascript or CSS in a Django template into cacheable static files.

**The official django-compressor documentation**

Personally, I haven't tried it yet, but if I ever do, I'll probably write an article about it and update this section. 

```c	
use_celery [n]: 
```

[Celery](https://github.com/celery/celery) is an open source asynchronous task queue or job queue which is based on distributed message passing. While it supports scheduling, its focus is on operations in real time. That was the wikipedia definition 😅. 
Celery is used to handle asynchronous tasks (background tasks) and scheduled tasks (things that should happen in the future). 
I don't use celery that much, I find it a bit too complex for most of my use cases. 
You can read my article on [[Handling background tasks in django]] to see how I handle this kind of stuff in my projects.

```c
use_mailhog [n]: y
```

[MailHog](https://github.com/mailhog/MailHog) is an email testing tool for developers. The [django console backend](https://docs.djangoproject.com/en/4.1/topics/email/#console-backend) is set up for local development if you choose **n** but mailhog gives you a nice graphical user interface (GUI) when you test your email delivery locally.

```c
use_sentry [n]: y
```

[Sentry](https://github.com/getsentry/sentry) is an error monitoring and tracking system. I recommend you always choose **y** if you know your app is going in production, it will avoid you the hassle of always switching your **DEBUG** environment variable value to see errors when they happened in production. It is very easy to set up, just follow the [official guide](https://docs.sentry.io/platforms/python/guides/django/) If you want to configure it manually. If you choose **y** the only thing you need is a **Sentry DSN** key that you can get by creating a django app on the official [web platform](https://sentry.io).

```c
use_whitenoise [n]:
```

[Whitenoise](https://github.com/evansd/whitenoise) serves your static files in production and [locally](http://whitenoise.evans.io/en/stable/django.html#using-whitenoise-in-development) if you want it to.  I usually choose **y** because having the same setup for production and local development can help mitigate surprises on your production environment.

```c 
use_heroku [n]: y
```

Heroku is a hosting platform for web applications. The cookiecutter will add the necessary requirements for your project to work on heroku, these requirements being:
- A requirements.txt file with all your project production requirements
- A [Procfile](https://devcenter.heroku.com/articles/procfile)
If you are using a similar deployment method based on a procfile like [[Host your Django project on DigitalOcean using dokku|dokku]] type *y* if not then *n*.

```c
Select ci_tool:
1 - None
2 - Travis
3 - Gitlab
4 - Github
Choose from 1, 2, 3, 4 [1]: 
```

Select an option other than the default if you are planning to set up a CI/CD pipeline for your project. More info on how to set up CI/CD for a django project [here](https://buddy.works/docs/quickstart/django).

```c
keep_local_envs_in_vcs [y]: 
```

If you typed **y** on the **use_docker** or **use_heroku** option, then your project will have a `.envs` folder with `.local` and `.production` subdirectories.
If on the current option you type **n**, both folder will be kept out of your version control system (VCS), if you choose the default value your `.local will be tracked by your VCS.

```c
debug [n]: 
```

This option is only for Cookiecutter Django developers only, choose the default value.

If all went well you will get this message.
```c
 [SUCCESS]: Project initialized, keep up the good work!
```

## Structures of the project

Let's take a quick tour of the generated project. The generated  project should look something like this:

```shell
├── config
│   ├── __init__.py
│   ├── settings
│   ├── urls.py
│   └── wsgi.py
├── CONTRIBUTORS.txt
├── docs
│   ├── conf.py
│   ├── __init__.py
│   ├── make.bat
│   ├── Makefile
│   └── _source
├── LICENSE
├── locale
│   └── README.rst
├── manage.py
├── merge_production_dotenvs_in_dotenv.py
├── Procfile
├── pytest.ini
├── README.rst
├── requirements
│   ├── base.txt
│   ├── local.txt
│   └── production.txt
├── requirements.txt
├── runtime.txt
├── setup.cfg
├── ushopify
│   ├── conftest.py
│   ├── contrib
│   ├── __init__.py
│   ├── static
│   ├── templates
│   ├── users
│   └── utils
└── utility
    ├── install_os_dependencies.sh
    ├── install_python_dependencies.sh
    ├── requirements-bionic.apt
    ├── requirements-buster.apt
    ├── requirements-jessie.apt
    ├── requirements-stretch.apt
    ├── requirements-trusty.apt
    └── requirements-xenial.apt
```

**Note**: This is not the entire structure of the directory, that would be too long 🙃


At the root of your project should have these directories:

- `config` : store all your project settings and configurations. In the `settings` subdirectory you have a `base.py` setting file for common settings, a **local.py** and a `production.py` file respectively for development and production specific settings. In the root of this directory, you have your classic **url.py** (your project level urls configurations) and your **wsgi.py** file.
- `docs` : if you need to write a documentation for your project, it is configured to use [sphinx](https://www.sphinx-doc.org/en/master/index.html) documentation generator
- `locale`: this folder is there to store [translations](https://docs.djangoproject.com/en/3.1/topics/i18n/translation/)
- `requirements`: this folder contains all your project's requirements, the **base.txt** file contains all requirements common to your dev and prod environments, the **local.txt** file for your development environment and **production.txt** for your production environment.
- `ushopify` : this folder contains all your templates and statics files, it also contains a `users` app created by the cookiecutter. This app use the excellent [allauth](https://github.com/pennersr/django-allauth) package to offers your project full user management system, login, logout, reset password, change password, change email, email verification and much more. The `users` app contains a `tests` directory with test files structured like this: `test_{module}.py`. This test structure is the one defined in the `ushopify/conftest.py` file. Follow it when writing your tests or update the `conftest.py` file to match your needs. In this folder, you also have a `utils` subdirectory that contains a `context_processors.py` file. Read this short [article](https://dev.to/harveyhalwin/using-context-processor-in-django-to-create-dynamic-footer-45k4) for more information on context processors.
- `Utility` : this folder contains some bash scripts that help you install system and project requirements, useful only if you are planning on deploying on a linux server and set up the server yourself.

Beside those directories, you have the classic `manage.py` file to run your commands, a `Procfile` if you choose to deploy using Heroku, a `pytest.ini` file because the project is configured to use [pytest](https://docs.pytest.org/en/stable/) for testing.


## Run your project

Running your project works like for any other django project, you create a virtual environment, you install the requirements, create a database, then run your migrations.
You can find detailed instructions [here](https://cookiecutter-django.readthedocs.io/en/latest/developing-locally.html).

---
I know it was a lot to digest and the project generated can seem very complex the first time, but you get used to it with time. If you feel like some of the generated defaults don't work for you, want to use [poetry](https://python-poetry.org/) instead of a virtualenv, don't like the exact folder structure, etc, I encourage you to [build your own cookiecutter](https://cookiecutter.readthedocs.io/en/stable/tutorials/tutorial2.html) or create a simpler version with the [django project template system](https://www.valentinog.com/blog/django-project/).
If you have any comments, feel free to leave them in the comment section below and subscribe to keep up with my findings 😃.