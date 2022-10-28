---
share: True
title: Bootstraping a new django project
slug: bootstraping-a-new-django-project
tags:
 - python
 - django
description:
publish_date:
upload_path: posts/2022
---

Through this guide we will see how to start a new django project using a [cookiecutter](https://github.com/cookiecutter/cookiecutter), this guide is intended for beginners who already have experience with django, and who wants to know how to start a project following the best web standards. We will be using the [cookiecutter-django](https://github.com/pydanny/cookiecutter-django), like it is said on the official github page, it is a framework for jumpstarting production-ready Django projects quickly.

### what is cookiecutter ?

The [cookiecutter](https://github.com/cookiecutter/cookiecutter)  project was initiated by  https://github.com/audreyfeldroy, the co-author of the excellent  [Two Scoops of Django](https://www.feldroy.com/collections/everything/products/two-scoops-of-django-3-x).  It is a command-line utility that creates projects from cookiecutters (project templates). There are a multitude of cookiecutters for various frameworks, django, flask, etc ..., you can consult the list of cookiecutters available [here](https://cookiecutter.readthedocs.io/en/1.7.2/README.html#available-cookiecutters). In this guide I will present the [cookiecutter-django](https://github.com/pydanny/cookiecutter-django).

### why should you use the cookiecutter-django ?

The cookiecutter-django was created by https://github.com/pydanny , the second co-author of the excellent [Two Scoops of Django](https://www.feldroy.com/collections/everything/products/two-scoops-of-django-3-x). The official github page of the project already did a great job at listing the features provided by this cookiecutter, check [here](https://github.com/pydanny/cookiecutter-django#features). However I advise you to have experience with using the django-admin command to create your projects, using this cookiecutter should not be your first experience of creating a django project, otherwise you will feel overwhelmed for sure.

### Starting a new project using the cookiecutter-django

The default values are in brackets, if you see a blank line, then I've used the default value by pressing the **Enter** key. Through this guide I linked many external reference to other page to help you understand what I can't detail here but do not feel obligated to follow each link each time otherwise you might feel tired before you finish the guide. I advise you to read the entire article at least once, then to reread the article by visiting the links that are relevant to you.

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
A source code license is a legal text that tells people what they may do with the source code, for example, edit it, use it, give it away to others. More information about software licences [here](https://en.wikipedia.org/wiki/Software_license).

```c
timezone [UTC]: US/Pacific
```
This is a random location I choosed. You can get the list of timezones [here](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) or open your python shell (you can use the default one but I recommend you try [bpython](https://bpython-interpreter.org/)) and type this code:

```python
from pytz import all_timezones
for tz in all_timezones:
      print(tz)
```

```c
windows [n]:
use_pycharm [n]: y
```
If you are using [pycharm](https://www.jetbrains.com/pycharm/), the cookiecutter will create **runserver**, **migrate** and more  run configurations automatically for you.

```c
use_docker [n]: n
```
Docker is an open source platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. Choosing **y**, the cookiecutter will automatically create docker and docker-compose files to help you run your project locally and even deploy it with less efforts, it really give you a great configurations to help you deploy your project easily, but I think it is necessary to have a minimum of experience with docker before you choose **y**. If you want more information about docker, check [here](https://www.docker.com/).

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
If you are not a frontend dev then your answer is probably the default one.

```c
Select cloud_provider:
1 - AWS
2 - GCP
3 - None
Choose from 1, 2, 3 [1]:
```
This option concerns the management of static files (html, css, static images like background images) and media files (file upload by you or your users like profile picture for example). If you choose **AWS** (amazon web service) or **GCP** (google cloud provider), your project will be configured, based on your choice, to handle static and media files in production. If you choose **None** then media files will not work in production and static files will works only if you choose  **y** on the option **use_whitenoise**. If you want to see step by step how to configure static and media files serving using **AWS** watch [this](https://www.youtube.com/watch?v=kt3ZtW9MXhw&list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p&index=16).

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
You can use any option you want, I find [amazon SES](https://aws.amazon.com/ses/) the most easy to setup, that's why I'm using it but you can use the provider of your choose.
```c
use_async [n]:
```
Indicates whether the project should use web sockets with Uvicorn + Gunicorn. This statement is from the [cookiecutter-django official documentation](https://cookiecutter-django.readthedocs.io/en/latest/project-generation-options.html). If  you are not sure what it means, I recommend you read [this](https://dev.to/alexoleshkevich/websockets-in-django-3-1-532o) article on websocket in django.
```c  
use_drf [n]: 
```
If you are building an API or planning on developing an internal  api to your project then choose **y**. More info on Dango Rest framework [here](https://www.django-rest-framework.org/). Drf is the go-to framework to build rest apis with django.

```c
custom_bootstrap_compilation [n]: 
```
Indicates whether the project should support Bootstrap recompilation via the selected JavaScript task runner’s task. This can be useful for real-time Bootstrap variable alteration (Official Doc description). If like me you are not sure you understood, then choose the default answer.

```c
use_compressor [n]: 
```
Add and setup [django-compressor] for your project. This package compresses JavaScript and CSS into a single cached file. More informations on the official github page (link above).

```c	
use_celery [n]: 
```
[Celery](https://github.com/celery/celery) is an open source asynchronous task queue or job queue which is based on distributed message passing. While it supports scheduling, its focus is on operations in real time. That was wikipedia definition :smile:. Celery is used to handle asynchronous task (background task) and scheduled task. For example if you have a payment page on you Ushopify app and you need to make an external api call to process the payment, you can't leave the page loading and the user waiting while all this is happening, you need to make that api call a background task. If you need to send daily message to your users, you won't be able to achieve that just with django, that where celery comes into play. But celery is know to be really painful to setup for beginners, if you choose **y**, your project will be already configure  to use celery. Isn't that great ?. You still need to understand and know how to use it, but most of the job is already done for you. I recommend you  still read the official [installation and configuration guide](https://docs.celeryproject.org/en/stable/django/first-steps-with-django.html) to know how things are put together and if you need help on how to use it the official [documentation](https://docs.celeryproject.org/en/stable/index.html) has all the informations you need. If you want a more simple to setup alternative to  celery you can try [django_q](https://github.com/Koed00/django-q), it help you accomplish the same things as celery but it is more simple to [setup and configure](https://django-q.readthedocs.io/en/latest/), and and unlike celery, it was created only to work with django. It is the one I generally use for my projects. I recommend you start with django_q but the choice is your, both of them are great.

```c
use_mailhog [n]: y
```
[MailHog](https://github.com/mailhog/MailHog) is an email testing tool for developers. You can still use the console backend for email if you choose **n** but mailhog offer you a nice gui when testing locally your email sending and like it is said in the [zen of python](https://www.python.org/dev/peps/pep-0020/#id2) :
>Beautiful is better than ugly.

```c
use_sentry [n]: y
```
[sentry](https://github.com/getsentry/sentry) is an error monitoring and tracking system. I recommend you always choose **y** if you know your app is going in production, it will avoid you the hassle of always switching your **DEBUG** environnement variable to see errors when they happened. It is very easy to setup, just follow the [official guide](https://docs.sentry.io/platforms/python/guides/django/) If you want to configure it manually or just known how it is done. If you choose **y** the only thing you need is a **Sentry DSN** key that you can get by creating a django app on the official [web platform](https://sentry.io).

```c
use_whitenoise [n]:
```
[whitenoise](https://github.com/evansd/whitenoise) help you simplifies static file serving on production. I usually choose **n** because I usually use boto3 and amazon S3 bucket for static files and media files, but if you don't need media files in your app  (that mean that your users or yourself won't be able to upload any kind of files to your app) then choose **y**, it will save you from having to pay for an amazon  S3 bucket.

```c 
use_heroku [n]: y
```
heroku is a hosting platform for web applications. If you read my guide on how to [deploy your django project using dokku on DigitalOcean](https://www.tobidegnon.com/blog/post-detail/host-your-django-project-on-digital-ocean-with-dok/), you known it is one of the option's available if you decide to deploy your project. The cookiecutter will automatically create a Procfile and add a requirements.txt file, even if you are planning on using dokku, enter **y**.

```c
Select ci_tool:
1 - None
2 - Travis
3 - Gitlab
4 - Github
Choose from 1, 2, 3, 4 [1]: 
```
Select an option other than the default  if you are planning to setup a CI/CD pipeline for your project. More info on how to setup  CI/CD for a django project [here](https://buddy.works/docs/quickstart/django). I'm planning on writing a guide on this myself.

```c
keep_local_envs_in_vcs [y]: 
```
If you choose **y** on the **use_docker** or **use_heroku** option than your project will have an **.envs** folder with **.local** and **.production** sub directories, if you choose **n**, both folder will be kept out of your version control system (VCS), if you choose the default value your **.local** will be tracked by your vcs.

```c
debug [n]: 
```
this option is only for Cookiecutter Django developers only, choose the default value.

If all went well you will get this message.
```c
 [SUCCESS]: Project initialized, keep up the good work!
```

### Structures of the project

Let's take a quick tour of the generated project. The generated  project should look something like this:

```c
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

**Note**:  For size concerns, this is not the entire structure of the directory :upside_down_face:


At the root of your project you should have these directories:

- **config** : store all your project settings and configurations. In the **settings** subdirectory you have a **base.py** setting file for common settings, a **local.py** and a **production.py** file respectively for development and production specific settings. In the root of this directory you have your classic **url.py** (your project level urls configurations) and your **wsgi.py** file.
- **docs** : if you need to write a documentation for your project, it is configured to use [sphinx](https://www.sphinx-doc.org/en/master/index.html) documentation generator
- **locale**: this folder is there to store [translations](https://docs.djangoproject.com/en/3.1/topics/i18n/translation/)
- **requirements**: this folder contains all your projects requirements, the **base.txt** file contains all requirements common to your dev and prod environments, the **local.txt** file for your development environment and **production.txt** for your production environnement.
 - **ushopify**: this folder contains all your templates and statics files, it also contains a users app created by the cookiecutter. This users app use the excellent [allauth](https://github.com/pennersr/django-allauth) package to offers your project full users management system, login, logout, reset password, change password, change email, email verification and much more. The users app contains a **tests** directory with test files structured like this: **test_{module}.py**. This test structure is the one defined in the **ushopify/conftest.py** file. Follow it when writing your tests or update the **conftest.py** file to match your needs. In this folder you also have a **utils** subdirectory that contains a **storages.py** that defines some [S3boto3Storage](https://django-storages.readthedocs.io/en/latest/backends/amazon-S3.html) configurations and a **context_processors.py** file. Read this short [article](https://dev.to/harveyhalwin/using-context-processor-in-django-to-create-dynamic-footer-45k4) for more informations on context_processors.
- **utility**: this folder contains some bash scripts that help  you install system and project requirements, useful only if you are planning on deploying on  a linux server and setup the server yourself.

Beside those directories, you have the classic **manage.py** file to run your commands, a **Procfile** if you choose to deploy using heroku, a **pytest.ini** file because the project is configured to use [pytest](https://docs.pytest.org/en/stable/) for testing.


## Run your project

Running your project works like for any other django project, you create a virtual environnement, you install the requirements, create a database, then run your migrations, for more details read [this](https://cookiecutter-django.readthedocs.io/en/latest/developing-locally.html).

---
In this guide we have seen how you can start a new django project using the cookiecutter-django. I hope it taught you something new, feel free to give me your feedback in the comments section below and subscribe for more posts.