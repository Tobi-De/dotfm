---
share: True
featured: True
title: Fuzzy-Couscous - The CLI for a better django development experience
slug: fuzzy_couscous_the_cli_for_a_better_django_development_experience
tags:
 - python
 - django
 - projectstarter 
 - cookiecutter
 - opensource
description: >
 A cli tool to bootstrap your django projects and enhance your development experience.
publish_date: 2023-02-27
upload_path: posts
---

Hello everyone!  
  
I'm excited to introduce you to [fuzzy-couscous](https://github.com/Tobi-De/fuzzy-couscous), my latest project designed to enhance your django development experience with Django.  

![showcase gif](https://raw.githubusercontent.com/Tobi-De/fuzzy-couscous/main/docs/assets/cuzzy_demo.gif)
  
I've spent the last few months working on this command line tool, and I'm excited to share it with you and get your feedback.   
The primary feature of fuzzy-couscous is to generate a django project using a project template that I've built, inspired heavily by the popular [cookiecutter-django](https://github.com/cookiecutter/cookiecutter-django)   
project template. I simplified their template as much as I could while adding some of my favorite tools like [htmx](https://htmx.org/) and [poetry](https://python-poetry.org/).  
  
With fuzzy-couscous, you can quickly create a new Django project using the built-in template, which includes support for either [Bootstrap](https://getbootstrap.com/) or [Tailwind](https://tailwindcss.com/).   
It also comes with a variety of convenient commands, such as launching multiple processes at once including the Django dev server, a Redis server, a worker process, and more (although I'm currently working on improving this feature),   
as well as a command to easily download the latest version of htmx. I have some exciting ideas for potential new commands, including one to generate [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) code ([#27](https://github.com/Tobi-De/fuzzy-couscous/issues/27))  and another to ensure that projects   
created with fuzzy-couscous can easily get updates from the base template ([#22]( https://github.com/Tobi-De/fuzzy-couscous/issues/22)).  
I'm always looking for new ideas and suggestions, so please feel free to open a [GitHub discussion](https://github.com/Tobi-De/fuzzy-couscous/discussions) or an [issue](https://github.com/Tobi-De/fuzzy-couscous/issues/new).  
  
This project is nothing revolutionary, but it's useful for me and I think it could be useful for other django developers out there.  
If you're interested, you can find fuzzy-couscous on GitHub at https://github.com/Tobi-De/fuzzy-couscous.  
I hope you'll give it a try and let me know what you think. Thanks for your time!
