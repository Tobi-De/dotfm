---
share: true
featured: true
title: htmx support in pycharm
slug: htmx-support-in-pycharm
tags:
 - django
 - htmx
 - pycharm
description: Throughout this quick guide, we will see how to add htmx support (documentation and autocompletion) in pycharm.
publish_date: 2022-11-05
upload_path: posts
---

## Intro

If you're here, I assume you already know htmx, if not I recommend you check out this excellent introduction to [htmx + django](https://www.youtube.com/watch?v=Ula0c_rZ6gk) by [BugBytes](https://www.bugbytes.io/).
[htmx](https://htmx.org/) is my front-end tool of choice for building web applications and [pycharm from JetBrains](https://www.jetbrains.com/pycharm/) my daily code editor / IDE. By default, pycharm doesn't recognize htmx attributes when you use them in your templates, you get an ugly warning line telling you that these attributes are not allowed 🙁. You can right-click on the warning and choose the `Add <attribue_name> to custom html attribute` option, this will remove the warning and autocomplete the next time you type the same attribute and that's it. It's not particularly useful, but don't worry friend, there's a better way.
There is a simple way to add autocompletion and documentation of htmx attributes in your JetBrains editors, and that is via [web-types](https://github.com/JetBrains/web-types#web-types). Web-types is a json based format (written in json) that provides tools like IDEs with metadata information about the content of web component libraries like htmx.
I got this tip via this [tweet](https://twitter.com/sponsfreixes/status/1573725414643535872), so thanks to the author for sharing.
  

## Setup

First we need to create a `package.json` file, this is the central configuration file for every [nodejs](https://nodejs.org/en/) based application. We are not building a nodejs package here but as far as I know, this is the only way to reference our web-types in our project in pycharm.
You can easily create this file using a [nodejs](https://nodejs.org/en/) package manager. You must have nodejs installed on your computer for this to work. If you don't have it installed on your computer, I recommend using [nvm](https://github.com/nvm-sh/nvm) to install it. After installing nodejs, you can use `npm` (included with all nodejs installations) or `yarn` (must be [installed](https://yarnpkg.com/getting-started/install) separately) to initialize a nodejs project, which will create the `package.json` file.
I personally use yarn, but it doesn't really matter which one I use.
  
```sh  
yarn init -y  
```  

Or 

```sh  
npm init -y  
```  
  
Create a new file with the name `htmx.web-types.json` and copy and paste the htmx [web-types source](https://github.com/bigskysoftware/htmx/blob/master/editors/jetbrains/htmx.web-types.json) into your newly created file:  
  
```sh  
touch htmx.web-types.json
```  
  
Finally, add a new entry to your `package.json` using *web-types* as the key and the path to your `htmx-web-types.json` file as the value. 
Example:
  
```json  
{  
  "web-types": "./htmx.web-types.json"
}  
```  
  
Now go to one of your HTML templates and try typing an htmx attribute like `hx-get`, you should get autocompletion and documentation directly accessible in the IDE, neat 😎.
