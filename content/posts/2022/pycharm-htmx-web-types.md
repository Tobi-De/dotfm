---
title: Htmx autocomplete in pycharm
tags:
 - htmx
 - pycharm
draft: true
description: >
    Setting up htmx attributes autocomplete in pycharm using JetBrains web-types.
publish_date:
---

This post was inspired by [this tweet](https://twitter.com/sponsfreixes/status/1573725414643535872).

Read more on JetBrains web-types [here](https://github.com/JetBrains/web-types#web-types).

Create a **package.json** file in the root of your project directory:


```sh
yarn init -y
```
or
```sh
npm init -y
```

then create a new file and copy paste the htmx [web-types source](https://github.com/bigskysoftware/htmx/blob/master/editors/jetbrains/htmx.web-types):

```sh
touch htmx-web-types.json
```

and finally add a new entry to your **package.json** file:

```json
{
  "web-types": "./htmx-web-types.json"
}
```

With that you should autocompletion for htmx attribute in your html, enjoy ;)
