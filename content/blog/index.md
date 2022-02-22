---
lang: en
title: This is a good title
template: blog.html
---
{% load coltrane_tags %}
{% directory_contents as directory_contents %}

{% for content in directory_contents %}

- [{{ content.slug }}](/{{ content.slug }})

{% endfor %}
