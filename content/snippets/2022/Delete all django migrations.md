---
share: true
title: Delete all django migrations
tags:
 - python
 - django
description:
publish_date:
upload_path: snippets/2022
---

```sh
touch rm_migrations.py
```

Copy the code below to your newly created `run_migrations.py`

```python
from pathlib import Path  
  
  
def main():  
    apps_dir = Path() / "django_apps"  
    excludes = ["__init__.py"]  
    apps = set()  
    for folder in apps_dir.iterdir():  
        migration_dir = folder / "migrations"  
        if not migration_dir.exists():  
            continue        for file in migration_dir.iterdir():  
            if file.suffix == ".py" and file.name not in excludes:  
                file.unlink()  
                apps.add(str(folder))  
                print(f"{str(file)} deleted")  
    res = "\n".join(apps)  
    print(f"\nRemoved migration files for apps: \n{res}")  
  
  
if __name__ == "__main__":  
    main()
```

**Never push this file to production, add this line to your`.gitignore` file:**

```text
rm_migrations.py
```

Run the script with:

```shell
python rm_migrations.py
```

In development stage it's common to frequently delete the migrations files since database models often changes and conflicts happens, at least that's the case for me 😅. This is a simple script to delete all migrations from all your django applications.
The script assume your django apps live in a folder named `django_apps`, change that name to match yours. Never push this script to production, accident happens but you don't want them to happen on your production code.
