---
title: Host your Django project on DigitalOcean using dokku blah blah blah blah blah
draft: true
tags:
 - deployment
 - django
 - python
 - dokku
description: >
    Setting up a server to deploy your new django project could be a really daunting task but tools like
    dokku can really make thing more easy and straightforward.
publish_date:
---

Some things to change

- put the script right after the first place I talk about requirements
- precise where some command are not needed when the user is using cookiecutter, for example to avoid using pip freeze.
- do not tied this to digital ocean, it can work on any vps, next time I'm using linode for this

{{ description }}

In this post we are going to see how you can easily deploy your awesome Django project on a linux server( Virtual Private Server a.k.a vps ). In this tutorial I will be using [DigitalOcean](https://m.do.co/c/507efee95715), a well know cloud provider that offers you a full control on your server, I also choose [DigitalOcean](https://m.do.co/c/507efee95715) because they have a 1-click app [Dokku](http://dokku.viewdocs.io/dokku/) droplet to get you up and running quickly.

### What is Dokku ?

Dokku is an herokuish (give similar environment to [heroku](https://heroku.com)) platform that help  you deploy quite easily any web based application like a Django app. It is an open source and free [PaaS](https://fr.wikipedia.org/wiki/Platform_as_a_service) built on [Docker](https://docs.docker.com/).  If you already own a vps, installing Dokku is very easy, you can follow  the [installation guide](http://dokku.viewdocs.io/dokku/getting-started/installation/).
This is not the only way to deploy your Django project, you can get away with the basic nginx + gunicorn + postgresql manual setup, but I find this option more easy  to setup and manage, I don't like the hassle that comes with managing a linux server, I want to focus on building solutions not managing servers and I think Dokku help with that. If you are Interested by other ways to deploy your django applications, I've linked some useful resources at the end of this guide to help you.

### Prerequisites

What you need to be able to follow this guide.

- A DigitalOcean account, you can create one [here](https://m.do.co/c/507efee95715) (following this link you will get $100 free credits to be able to test the plaform)
- A droplet (DigitalOcean term to represent a linux server) with Dokku installed on it, fortunately for us, DigitalOcean got us covered, you can create one with Dokku already installed on it [here](https://do.co/2PQDQPz)
- A domain name, you can get one for cheap at [namecheap](https://www.namecheap.com/) or [GoDaddy](https://www.godaddy.com/en-an), use the provider of your choice, I'm using namecheap in this guide.
- A Django project obviously :laughing:
- [git](https://git-scm.com/) installed on you computer
<br><br>

### Setup your VPS

At this step I presume you have already a droplet (or a vps) with linux installed on it, in my case ubuntu 18.04 LTS. Dokku should already be installed also, if you use the DigitalOcean 1-click Dokku droplet app then you are ready to go. After the server is launched you should wait few minutes for dokku to be ready. Meanwhile follow these steps to get your server ready.

##### Connect to your server with ssh then search for update

If you are using DigitalOcean, go to your dashboard then click on Droplets, select your droplet, then click on your ipv4 address to copy it and run this command

~~~~{.c}
ssh root@your_ip_address
~~~~

When you were setting up your droplet,  you added a root password, you need it here to run sudo commands.

~~~~{.c}
sudo apt update
sudo apt upgrade
~~~~

##### add a limited user

```c
adduser your_user_name
adduser your_user_name sudo
```

Now you can close your session with the **exit** command and connect back with

```c
ssh your_user_name@your_ip_address
```

##### setup ssh server on local

If you find it painful to type your ip address each time, you can just add an alias to your system or even better, add this code to your local ~/.ssh/config file.

```c
Host a_server_name
    ForwardAgent yes
    Hostname your_ip_address
    Port 22
    ServerAliveInterval 60
    ServerAliveCountMax 60
```

Now to connect to your server, you can type

```c
ssh your_user_name@a_server_name
```

- create an ssh public key

You will need an ssh key to configure your dokku instance, if you already have one then you can skip this step. If you are on linux, run this command to generate the ssh key. The command will ask for the path to create the ssh key and a passphrase. You can leave the default path for the key directory, and for the passphrase you can leave it blank but you will have to remember it if you set one.

```c
ssh-keygen -b 4096
```

If you are on windows then you can follow this [link](https://docs.joyent.com/public-cloud/getting-started/ssh-keys/generating-an-ssh-key-manually/manually-generating-your-ssh-key-in-windows) to help you create your ssh key.

### Setup your domain name

This is very simple, just create an A record with the value of your server ip address, example :

Type : _A Record_
Host : _*._
Value : _XXX.XXX.XXX.XX (your ip address)_

### Configure Dokku

At this step, your Dokku instance should be ready. Visit http://your_ip_address to configure the dokku instance. You should see a Dokku Setup page with a form, the only field you need to worry about is the **Public ssh key** field. If you generate the key with the command above and leave the path as the default one (it should be something like this ~/.ssh/id_rsa.pub) , then open the **id_rsa.pub** file with a text editor and copy the content inside the **Public ssh Key** field, then click **finish setup** and now your dokku instance is configured.
To test it, connect to your server and type **dokku**  (try with **sudo dokku** if you have permissions issue), if you see the help menu then you are good to go, if not you can always ask a question in the comment section bellow or check if you miss a step above.

Now that our dokku instance is ready, we can deploy our django project, but before that we need to install some plugins and create the app.

### create an App

```c
dokku apps:create your_app_name
```

### Install postgres plugin ###

This is the command you need to install the postgres plugin to your dokku instance :

```c
sudo dokku plugin:install https://github.com/dokku/dokku-postgres.git
```

Create a new postgres database instance and link it to your app by running the commands below, linking the database to your app will automatically create a **DATABASE_URL** environment variable that connect your app to your database instance.

```c
sudo dokku postgres:create your_app_name_db
dokku postgres:link your_app_name_db your_app_name
```

_SideNote_ : if you need a redis instance, just replace "postgres" by "redis". For any other plugins refer to the offcial [dokku documentation plugin page](http://dokku.viewdocs.io/dokku/community/plugins/). To setup database backups on an aws S3 bucket check [here](https://github.com/dokku/dokku-postgres#backups)


### Add a domain to your app

```c
dokku domains:add your_app_name your_domain
dokku domains:set your_app_name you_domain
```
you_domain: something like www.mydomain.com


### Set environment variables

You need to set the environment variables before pushing your app to dokku, if not the deployment will fail. To set an environment variable, type:

```c
dokku config:set your_app_name env_name=env_value
```

**Example**

```c
dokku config:set my_app PYTHONHASHSEED=random
dokku config:set my_app WEB_CONCURRENCY=4
dokku config:set my_app DJANGO_DEBUG=False
dokku config:set my_app DJANGO_SETTINGS_MODULE=config.settings.production
dokku config:set my_app DJANGO_SECRET_KEY="$(openssl rand -base64 64)"
dokku config:set my_app DJANGO_ADMIN_URL="$(openssl rand -base64 4096 | tr -dc 'A-HJ-NP-Za-km-z2-9' | head -c 32)/"
```

### Deploy your app

##### Create a Procfile

In the root of your project create a file name _Procfile_ and inside that file copy this code

```c
web: gunicorn wsgi_file_path:application
release: python manage.py migrate
```
In my project the wsgi.py file is in the _config_ folder, a folder in the root of my project, you need to find your _wsgi_ file and replace the **wsgi_file_path** by your path, usually it is in a folder named base on your project name, In my case the first line give this:

```c
web: gunicorn config.wsgi:application
```

##### Requirements file

You also need a requirements.txt or Pipfile so Dokku can install  all dependencies when deploying. If you are using a virtual environment (you better be using one) just type (in a terminal) from the root of your project :

```c
pip freeze > requirements.txt
```

Add the dokku remote repository to your project with git :

```c
git remote add dokku dokku@your_server_ip_address:your_app_name
```

You can now deploy your app with :

```c
git push dokku master
```

when you are done, you can check your deployment setup like this

```c
dokku run your_app_name bash
python manage.py check --deploy
```

**Sidenote** : Using dokku clients

Using a dokku client you can create new apps, add plugins easily from your local machine, check the available clients [here](http://dokku.viewdocs.io/dokku/community/clients). When a dokku client is installed and  the dokku remote repository is added to your project with git using the above command, you can easily manage your app from your local machine.  To set environment variable normally, you should type (assuming you install the [dokku-toolbelt](http://dokku.viewdocs.io/dokku/community/clients/#nodejs-dokku-toolbelt))  from the root of your project on your local machine :

```c
dt config:set env_name=env_value
```

But if you have fifteen or more environment variables to set, it will take you decades to set them all. If you want a more efficient way to proceed, you can use this little python [script](https://github.com/Tobi-De/dokku-envs) I wrote to set easily and quickly your environment variables on dokku. Read through it and adjust it to your need. The script can be run from the local or the remote machine.


### Setup ssl certificate

Install and configure letsencrypt plugin for secure connection through https.

```c
dokku plugin:install https://github.com/dokku/dokku-letsencrypt.git
dokku config:set --no-restart --global DOKKU_LETSENCRYPT_EMAIL=hello@youdomain.com
```

You can use your personal email if you want, it must be a valid email address.

Add a certificate to your app

```c
dokku letsencrypt your_app_name
```

Setup a cron task to renew ssl certificate

```c
dokku letsencrypt:cron-job --add
```

---

In this guide we have seen how you can deploy your django project on a vps using dokku. If you need more deployment options, you can check out the ones below.

- [Deploy your django project with heroku](https://www.youtube.com/watch?v=6DI_7Zja8Zc), if you try this option, you will realize that deployment with heroku is more simple, but in the long run heroku is much more expensive, for example the $25 offer from heroku is roughly equivalent to the $5 droplet from digital ocean.
- [Deploy django using nginx + gunicorn + postgres](https://www.youtube.com/watch?v=BrVHwQ-SJUA&t=12s), manual setup
- [Deploy django on a linux server using apache](https://www.youtube.com/watch?v=Sa_kQheCnds)
- [Deploy django using docker](https://testdriven.io/blog/dockerizing-django-with-postgres-gunicorn-and-nginx/)
- [Deploy django using kubernetes](https://devspace.cloud/blog/2019/10/18/deploy-django-to-kubernetes)

Obviously this list is not exhaustive, you can check on google for more options.
Thank you for reading this post, I hope it taught you something, feel free to give me your feedback in the comments section below and subscribe for more posts. :smile:
