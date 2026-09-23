## 1
Инструмент `wazootech/wiki` — это CLI-утилита (на Python), поэтому работать с ней напрямую через веб-интерфейс GitHub, как в примере с Rete, не получится. Однако её можно запускать **автоматически в GitHub Actions** при каждом коммите — это полностью заменяет ручной запуск в терминале и не требует установки чего-либо на вашем компьютере.

Ниже — пошаговая инструкция для репозитория `bpmbpm/wiki_test` (или любого вашего репозитория), где создаётся семантическая вики с SPARQL-запросами и публикацией на GitHub Pages.

---

## Шаг 1. Создание репозитория

---

## Шаг 2. Структура проекта

В репозитории нужно создать следующую структуру файлов и папок:

```
wiki_test/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions для сборки и деплоя
├── wiki/
│   ├── index.md                # Главная страница вики
│   ├── Alice.md                # Тестовая заметка о персоне
│   └── Bob.md                  # Тестовая заметка о персоне
├── wiki.yaml                   # Конфигурация вики
└── README.md                   # Описание проекта
```

Все файлы создаются через веб-интерфейс GitHub: **Add file → Create new file**.

---

## Шаг 3. Конфигурация вики: `wiki.yaml`

Создайте в корне репозитория файл `wiki.yaml`:

```yaml
# wiki.yaml — конфигурация семантической вики
id: bpmbpm-wiki-test

site:
  title: "Моя семантическая вики"
  base_url: /wiki_test
  layout: layouts/wikipedia.html

wiki:
  inputs:
    - wiki
  assets:
    - assets

sparql_service:
  enabled: true          # Включает встроенный SPARQL-эндпоинт при локальном запуске

# Маппинг frontmatter-полей на RDF-свойства
frontmatter_mappings:
  givenName: "http://schema.org/givenName"
  familyName: "http://schema.org/familyName"
  email: "http://schema.org/email"
  knows: "http://xmlns.com/foaf/0.1/knows"
```

Этот файл определяет:
- Где лежат Markdown-файлы (`wiki/`).
- Базовый URL для GitHub Pages (`/wiki_test`).
- Как поля из frontmatter заметок превращаются в RDF-триплеты.

---

## Шаг 4. Тестовый набор данных

### `wiki/index.md` — главная страница с SPARQL-запросом

```markdown
# Моя семантическая вики

Это тестовая вики, где данные хранятся в RDF, а запросы выполняются через SPARQL.

## Все персоны

<!-- sparql:start -->
```sparql
PREFIX schema: <http://schema.org/>
PREFIX foaf: <http://xmlns.com/foaf/0.1/>

SELECT ?given ?family ?email WHERE {
  ?person a schema:Person ;
          schema:givenName ?given ;
          schema:familyName ?family ;
          schema:email ?email .
}
```
<!-- sparql:end -->
```

Когда вики будет собрана, блок `<!-- sparql:start -->` заменится на таблицу с результатами запроса.

### `wiki/Alice.md` — заметка о персоне

```markdown
---
id: wiki:Alice
type: schema:Person
givenName: Alice
familyName: Smith
email: alice@example.com
knows: wiki:Bob
---

# Alice Smith

Алиса — тестовая персона в этой семантической вики.
```

### `wiki/Bob.md` — заметка о персоне

```markdown
---
id: wiki:Bob
type: schema:Person
givenName: Bob
familyName: Jones
email: bob@example.com
---

# Bob Jones

Боб — ещё одна тестовая персона. Алиса его знает (`foaf:knows`).
```

Поля из frontmatter (`type`, `givenName`, `familyName`, `email`, `knows`) автоматически компилируются в RDF-триплеты на основе маппингов из `wiki.yaml`.

---

## Шаг 5. GitHub Actions для сборки и деплоя

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy Wiki to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repository
        uses: actions/checkout@v4

      - name: Set up Python 3.12
        uses: actions/setup-python@v5
        with:
          python-version: "3.12"

      - name: Set up uv
        uses: astral-sh/setup-uv@v5
        with:
          enable-cache: true

      - name: Install Dependencies
        run: uv sync

      - name: Run Wiki Integrity Audits
        run: uv run wiki -c wiki.yaml check --strict -v

      - name: Run Wiki Convention Audits
        run: uv run wiki -c wiki.yaml lint --strict -v

      - name: Build Static Site
        run: uv run wiki -c wiki.yaml build --output-dir _site --site-base-url /wiki_test

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "_site/wiki_test"

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Этот workflow:
1. Устанавливает Python и `uv` (менеджер зависимостей).
2. Запускает проверки целостности (`check`) и стиля (`lint`).
3. Собирает статический HTML-сайт с выполненными SPARQL-запросами.
4. Публикует результат на GitHub Pages.

---

## Шаг 6. Включение GitHub Pages

1. В репозитории перейдите в **Settings → Pages**.
2. В разделе **Source** выберите **GitHub Actions** (не «Deploy from a branch»).
3. Нажмите **Save**.

---

## Шаг 7. Первый коммит и запуск

1. Убедитесь, что все файлы созданы и закоммичены в ветку `main`.
2. После пуша GitHub Actions автоматически запустится. Это можно увидеть на вкладке **Actions**.
3. Через 1–2 минуты сайт будет доступен по адресу:  
   **`https://bpmbpm.github.io/wiki_test/wiki/`**

---

## Что вы увидите

На главной странице `index.md` вместо блока `<!-- sparql:start -->` появится **таблица с результатами SPARQL-запроса**:

| given | family | email |
|-------|--------|-------|
| Alice | Smith  | alice@example.com |
| Bob   | Jones  | bob@example.com |

Каждая страница вики также имеет вкладку **Metadata**, где можно посмотреть RDF-представление в разных форматах (JSON-LD, Turtle, RDF/XML и др.).

---

## README.md для репозитория

Создайте файл `README.md`:

```markdown
# wiki_test — семантическая вики на GitHub Pages

Демонстрационный проект, показывающий, как развернуть **семантическую вики** на GitHub Pages с использованием [wazootech/wiki](https://github.com/wazootech/wiki) — CLI-инструмента для Markdown-вики с поддержкой RDF, SHACL, OWL и SPARQL.

## Что это?

Вики хранит данные в Markdown-файлах с YAML-frontmatter. При сборке:
1. Frontmatter компилируется в RDF-граф.
2. Встроенные SPARQL-блоки выполняются, и результаты вставляются в HTML.
3. Статический сайт публикуется на GitHub Pages.

## Структура

- `wiki.yaml` — конфигурация вики.
- `wiki/` — Markdown-файлы с заметками.
- `.github/workflows/deploy.yml` — GitHub Actions для сборки и деплоя.

## Как это работает

- **RDF из Markdown**: поля `type`, `givenName`, `familyName`, `email`, `knows` в frontmatter автоматически превращаются в RDF-триплеты.
- **SPARQL в Markdown**: блоки `<!-- sparql:start -->` … `<!-- sparql:end -->` выполняются при сборке, результаты вставляются в итоговый HTML.
- **GitHub Pages**: собранный сайт публикуется автоматически.

## Тестовые данные

В `wiki/` лежат две заметки: `Alice.md` и `Bob.md`. Они связаны через `foaf:knows`.

## Как воспроизвести

1. Форкните или клонируйте этот репозиторий.
2. Включите GitHub Pages: **Settings → Pages → Source: GitHub Actions**.
3. Сделайте пуш в `main` — Actions соберёт и опубликует сайт.

## Ссылки

- [wazootech/wiki на GitHub](https://github.com/wazootech/wiki)
- [wazootech-wiki на PyPI](https://pypi.org/project/wazootech-wiki/)
- [SPARQL 1.1 Query Language (W3C)](https://www.w3.org/TR/sparql11-query/)
- [SHACL (W3C)](https://www.w3.org/TR/shacl/)
```

---

## Ссылки на использованные инструменты

- wazootech/wiki — https://github.com/wazootech/wiki
- wazootech-wiki на PyPI — https://pypi.org/project/wazootech-wiki/
- SPARQL 1.1 (W3C) — https://www.w3.org/TR/sparql11-query/
- SHACL (W3C) — https://www.w3.org/TR/shacl/

Если вам нужно, чтобы SPARQL-запросы выполнялись не при сборке, а **в браузере пользователя** (как в примере с Rete), `wazootech/wiki` этого не умеет — его SPARQL-блоки рендерятся статически во время сборки. Для клиентских запросов потребуется другой подход.
