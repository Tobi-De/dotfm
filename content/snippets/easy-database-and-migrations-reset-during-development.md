---
share: true
title: Easy database and migrations reset during development
slug: easy-database-and-migrations-reset-during-development
tags:
 - django
 - python
description: Remove all your django migrations files with one commmand.
publish_date: 2022-10-30
upload_path: snippets
---

```sh
touch rm_migrations.py
```

Copy the code below to your newly created `rm_migrations.py`

```python
from pathlib import Path  
  
  
def main():  
    apps_dir = Path() / "django_apps"  
    excludes = ["__init__.py"]  
    apps = set()  
    for folder in apps_dir.iterdir():  
        migration_dir = folder / "migrations"  
        if not migration_dir.exists():  
            continue        
        for file in migration_dir.iterdir():  
            if file.suffix == ".py" and file.name not in excludes:  
                file.unlink()  
                apps.add(str(folder))  
                print(f"{str(file)} deleted")  
    res = "\n".join(apps)  
    print(f"\nRemoved migration files for apps: \n{res}")  
  
  
if __name__ == "__main__":  
    main()
```

Don't forget to update `django_apps` in the script to the folder where your django applications are placed. The value you put should be a string representing the path of your django applications folder relative to the folder where the script is placed. I suggest placing the script in the root of your project.

An example:

```shell
├── my_projects
│   ├── my_apps
│   ├── manage.py
│   ├── rm_migrations.py
```

With the setup describe above, you need to replace `django_apps` by `my_apps`.

**Never push this file to production**, accident happens, but you don't want them to happen on your production code / data.
Add this line to your`.gitignore` file:

```text
rm_migrations.py
```

Run the script with:

```shell
python rm_migrations.py
```

In the development phase, when the project idea is not fully formed or the product requirements are continually changing, it is common to completely rewrite or modify (in a non-migratable way) your django models, which requires cleaning up and recreating all your migration files. If your project consists of more than a few applications, deleting the files by hand is quite annoying. 
With the above script, you can easily in one command delete all your migration files 😎.

To reset my database (drop and recreate) I use the command below provided by the [django-extensions](https://django-extensions.readthedocs.io/en/latest/reset_db.html) package.

```sh
python manage.py reset_db --noinput
```

