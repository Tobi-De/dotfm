---
title: Htmx django widgets tweaks
draft: true
tags:
 - python
 - django
 - htmx
 - forms
description: >
    Template tags that add htmx attributes to forms fields using widgets-tweaks
publish_date: 29/09/2022
---


```python
from django.urls import reverse
from widget_tweaks.templatetags.widget_tweaks import append_attr

register = Library()


@register.filter("hx_get")
def hx_get(field: forms.Field, view_name: str):
    url = reverse(view_name)
    return append_attr(field, f"hx-get:{url}")

```
