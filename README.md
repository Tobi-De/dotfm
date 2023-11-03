# dotfm

> [!NOTE]
> moved to https://github.com/tobi-de/pw

Code source for my [personal website](https://oluwatobi.dev).

[![fuzzy-couscous](https://img.shields.io/badge/built%20with-fuzzy--couscous-success)](https://github.com/Tobi-De/fuzzy-couscous)
[![Code style: black](https://img.shields.io/badge/code%20style-black-000000.svg)](https://github.com/psf/black)
[![Code style: djlint](https://img.shields.io/badge/html%20style-djlint-blue.svg)](https://www.djlint.com)
[![linting: pylint](https://img.shields.io/badge/linting-pylint-yellowgreen)](https://github.com/PyCQA/pylint)

## Prerequisites

- `Python 3.10+`
- `Poetry 1.2+`
- `Postgresql 10+`

## Development

### Create a new virtual environment

```shell
poetry shell
```
### Install dependencies

```shell
poetry install
```

### Install pre-commit

```shell
pre-commit install
```

### Run the django development server

```
poe r
```

### Compile tailwind in watch mode

Open a new terminal and run

```shell
poe t
```

### Generate css for code syntax highlighting

```shell
pygmentize -S github-dark -f html -a .codehilite > dotfm/static/css/code.css
```

[poethepoet](https://github.com/nat-n/poethepoet) is the task runner used here. To see all available commands read
 the `[tool.poe.tasks]`section of the `pyproject.toml` file or run `poe -h` to see the help page.
