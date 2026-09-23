## 1
info:  
- Встроенный RDFa в Markdown https://github.com/chapeaux/geoff#inline-rdfa-in-markdown
  - Written by [John Doe](rdfa:author) at [Acme Corp](rdfa:publisher).


### Вариант geoff без CLI для Hello world 

`geoff` — это инструмент командной строки (CLI), и запустить его «без CLI» на компьютере не получится.  
Однако это ограничение можно обойти: **всю работу CLI можно переложить на GitHub Actions**. Вы создаёте файлы прямо в веб-интерфейсе GitHub, а сборка и деплой происходят автоматически в облаке. Для вас это будет полностью «без CLI».

Ниже — пошаговая инструкция для репозитория `bpmbpm/geoff_test`.

---

## Шаг 1. Создание репозитория

---

## Шаг 2. Структура проекта

В репозитории `bpmbpm/geoff_test` создайте следующую структуру файлов и папок. Все файлы создаются через **Add file → Create new file** (для папок просто указывайте полный путь, например `content/index.md`, и GitHub создаст папку автоматически).

```
geoff_test/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions для сборки и деплоя
├── content/
│   ├── index.md                # Главная страница
│   └── hello.md                # Тестовая семантическая заметка
├── ontology/
│   └── mappings.toml           # Маппинг frontmatter → RDF-свойства
├── geoff.toml                  # Основная конфигурация Geoff
└── README.md                   # Описание проекта
```

---

## Шаг 3. Основная конфигурация: `geoff.toml`

Создайте в корне репозитория файл `geoff.toml`:

```toml
# geoff.toml — основная конфигурация статического сайта
title = "Мой семантический Zettelkasten"
base_url = "/geoff_test"
content_dir = "content"
output_dir = "dist"

# Шаблон, который будет использоваться по умолчанию
default_template = "blog-page.html"

# Включаем клиентский SPARQL-поиск через Oxigraph WASM
[search]
enabled = true
engine = "oxigraph-wasm"
```

Эта конфигурация указывает Geoff, где лежат Markdown-файлы, куда собирать сайт, и включает клиентский SPARQL-поиск.

---

## Шаг 4. Маппинг онтологии: `ontology/mappings.toml`

Создайте файл `ontology/mappings.toml`. Этот файл определяет, как поля из TOML-frontmatter заметок превращаются в RDF-триплеты. Без него семантика не будет работать.

```toml
# ontology/mappings.toml — маппинг frontmatter → RDF

[types]
"Note" = "http://schema.org/CreativeWork"
"Person" = "http://schema.org/Person"

[fields]
title = "http://schema.org/name"
date = "http://schema.org/datePublished"
author = "http://schema.org/author"
tags = "http://schema.org/keywords"
related = "http://schema.org/mentions"
```

Теперь, если в frontmatter заметки написано `author = "Alice"`, Geoff автоматически создаст триплет `?note schema:author "Alice"`.

---

## Шаг 5. Тестовый набор данных

### `content/index.md` — главная страница

```markdown
+++
title = "Главная"
type = "Note"
+++

# Мой семантический Zettelkasten

Это тестовая семантическая вики, собранная с помощью Geoff.

## Все заметки

<div id="sparql-results">Загрузка...</div>

<script type="module">
  import { init } from '@chapeaux/geoff-client';

  const engine = await init();

  const results = await engine.query(`
    PREFIX schema: <http://schema.org/>
    SELECT ?title ?author WHERE {
      ?note a schema:CreativeWork ;
            schema:name ?title ;
            schema:author ?author .
    }
    ORDER BY ?title
  `);

  document.getElementById('sparql-results').innerHTML = results
    .map(r => `<div><strong>${r.title.value}</strong> — ${r.author.value}</div>`)
    .join('');
</script>
```

Этот блок выполняет **SPARQL-запрос прямо в браузере** к RDF-графу, который Geoff построил из ваших Markdown-файлов.

### `content/hello.md` — тестовая заметка

```markdown
+++
title = "Hello Semantic World"
type = "Note"
date = 2026-04-10
author = "Alice"
tags = ["semantic", "hello-world"]
related = "content/index.md"
+++

# Hello Semantic World

Это моя первая семантическая заметка.

Она автоматически превращается в RDF-триплеты:

- `title` → `schema:name`
- `author` → `schema:author`
- `date` → `schema:datePublished`
- `tags` → `schema:keywords`

Все эти данные доступны для SPARQL-запросов в браузере.
```

### `content/bob.md` — вторая заметка

```markdown
+++
title = "Заметка Боба"
type = "Note"
date = 2026-04-11
author = "Bob"
tags = ["sparql", "rdf"]
related = "content/hello.md"
+++

# Заметка Боба

Боб тоже пишет заметки. Его заметка связана с заметкой Алисы через `related`.
```

---

## Шаг 6. GitHub Actions для сборки и деплоя

Создайте файл `.github/workflows/deploy.yml`:

```yaml
name: Deploy Geoff Semantic Wiki

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
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install Geoff
        run: npm install -g @chapeaux/geoff

      - name: Build Site
        run: geoff build --output-dir dist

      - name: Upload Pages Artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: "dist"

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

Этот workflow:
1.  Устанавливает Node.js.
2.  Устанавливает Geoff через `npm`.
3.  Запускает сборку: `geoff build`. Geoff парсит Markdown-файлы, строит RDF-граф, генерирует HTML с встроенным JSON-LD и сериализует граф для клиентского SPARQL.
4.  Публикует результат на GitHub Pages.

---

## Шаг 7. README.md для репозитория

Создайте файл `README.md`:

```markdown
# geoff_test — семантический Zettelkasten на GitHub Pages

Демонстрационный проект, показывающий, как развернуть семантическую вики на GitHub Pages с использованием [Geoff](https://github.com/chapeaux/geoff) — статического генератора сайтов, построенного на linked data.

## Что это?

Geoff превращает Markdown-файлы с TOML-frontmatter в статический HTML со встроенным JSON-LD, backed by запрашиваемый RDF-граф. Каждая заметка становится набором RDF-триплетов, а в браузере можно выполнять SPARQL-запросы через Oxigraph WASM.

## Как это работает

1. **Markdown + TOML frontmatter** — вы пишете заметки в Markdown, а метаданные описываете в TOML.
2. **Маппинг онтологии** — поля frontmatter автоматически превращаются в RDF-свойства согласно `ontology/mappings.toml`.
3. **Сборка** — GitHub Actions запускает `geoff build`, который генерирует HTML и RDF-граф.
4. **Клиентский SPARQL** — в браузере пользователя работает Oxigraph WASM, который выполняет SPARQL-запросы к графу.

## Структура

- `geoff.toml` — основная конфигурация.
- `ontology/mappings.toml` — маппинг frontmatter → RDF.
- `content/` — Markdown-заметки.
- `.github/workflows/deploy.yml` — сборка и деплой.

## Тестовые данные

В `content/` лежат три заметки: `index.md`, `hello.md` и `bob.md`. Они связаны через `related` и содержат метаданные `author`, `date`, `tags`.

## Как воспроизвести

1. Форкните или клонируйте этот репозиторий.
2. Включите GitHub Pages: **Settings → Pages → Source: GitHub Actions**.
3. Сделайте пуш в `main` — Actions соберёт и опубликует сайт.
4. Откройте `https://bpmbpm.github.io/geoff_test/`.

## Ссылки

- [Geoff (GitHub)](https://github.com/chapeaux/geoff)
- [chapeaux-geoff (crates.io)](https://crates.io/crates/chapeaux-geoff)
- [@chapeaux/geoff (npm)](https://www.npmjs.com/package/@chapeaux/geoff)
- [Oxigraph (RDF store с WASM)](https://github.com/oxigraph/oxigraph)
- [SPARQL 1.1 Query Language (W3C)](https://www.w3.org/TR/sparql11-query/)
```

---

## Шаг 8. Включение GitHub Pages

1.  Перейдите в **Settings** репозитория.
2.  В левом меню выберите **Pages**.
3.  В разделе **Source** выберите **GitHub Actions** (не «Deploy from a branch»).
4.  Нажмите **Save**.

---

## Шаг 9. Запуск сборки

1.  Убедитесь, что все файлы закоммичены в ветку `main`.
2.  После пуша GitHub Actions автоматически запустится. Это можно увидеть на вкладке **Actions**.
3.  Через 1–2 минуты сайт будет доступен по адресу:  
    **`https://bpmbpm.github.io/geoff_test/`**

---

## Что вы увидите

На главной странице `index.md` скрипт выполнит SPARQL-запрос к RDF-графу, который Geoff построил из ваших заметок. На экране появятся две заметки с заголовками и авторами. **Весь SPARQL выполняется в браузере** — никакого сервера, никакой базы данных.

---

## Ссылки на использованные инструменты

- Geoff (GitHub) — https://github.com/chapeaux/geoff
- chapeaux-geoff (crates.io) — https://crates.io/crates/chapeaux-geoff
- @chapeaux/geoff (npm) — https://www.npmjs.com/package/@chapeaux/geoff
- Oxigraph — https://github.com/oxigraph/oxigraph
- SPARQL 1.1 (W3C) — https://www.w3.org/TR/sparql11-query/
- SHACL (W3C) — https://www.w3.org/TR/shacl/

## 1.1 node

Вы задали очень точный вопрос. Давайте разберём его по частям.

### 🤔 Node.js в браузере vs. Node.js в GitHub Actions

Вы правы в том, что **в браузере** JavaScript может выполнять SPARQL-запросы (например, через Oxigraph WASM, как в примере с Rete или Geoff). Это работает, потому что браузер — это среда выполнения JavaScript, которая предоставляет доступ к DOM, `fetch` и WebAssembly.

Однако **Node.js — это принципиально другая среда выполнения**. Это не браузер, а отдельная программа, которая позволяет запускать JavaScript **вне браузера** — на сервере, в командной строке, в облаке. Ключевое отличие: Node.js имеет доступ к файловой системе, может запускать процессы, работать с сетью на низком уровне, но **не имеет доступа к DOM**.

### 🎯 Зачем Node.js нужен в GitHub Actions?

В вашем workflow команда `npm install -g @chapeaux/geoff` устанавливает **CLI-инструмент Geoff**, который написан на JavaScript и требует **среды выполнения Node.js** для запуска. Затем `geoff build` — это **команда, которая запускается в терминале**, а не в браузере.

Вот ключевая разница между двумя подходами:

| | **Сборка (build time)** | **Выполнение (runtime)** |
|---|---|---|
| **Где происходит** | На сервере GitHub Actions | В браузере пользователя |
| **Что нужно** | Node.js (среда выполнения) | Браузер (среда выполнения) |
| **Что делает** | Парсит Markdown, строит RDF-граф, генерирует HTML | Выполняет SPARQL-запросы к готовому графу |
| **Инструмент** | `geoff build` (CLI-команда) | Oxigraph WASM (JS-библиотека) |

**Браузерный JavaScript не может заменить Node.js на этапе сборки**, потому что:
- Браузер не имеет доступа к файловой системе репозитория.
- Браузер не может запустить `geoff build` как команду.
- Браузер не может записать сгенерированные HTML-файлы обратно в репозиторий.

Именно поэтому GitHub Actions использует **виртуальную машину** (runner) с установленным Node.js, чтобы выполнить сборку, а затем публикует готовые файлы на GitHub Pages.

### 📦 Устанавливается ли Node.js для всех репозиториев?

**Нет, не для всех.** `setup-node` — это **шаг внутри конкретного workflow**, который выполняется только для того репозитория, где он прописан. Он не устанавливает Node.js глобально на все ваши репозитории.

Более того, **стандартные GitHub-hosted runners (ubuntu-*, windows-*) уже имеют предустановленный Node.js**. Однако `setup-node` используется, чтобы:
1. **Гарантировать конкретную версию** (например, `node-version: '20'`), независимо от того, что предустановлено на runner.
2. **Обеспечить кэширование зависимостей** (`npm`, `yarn`, `pnpm`) для ускорения сборки.
3. **Добавить Node.js в `PATH`** для всех последующих шагов workflow.

Если вы не укажете `setup-node`, workflow может использовать предустановленную версию Node.js, но она может отличаться от той, что вам нужна.

### 🔍 Как проверить версию Node.js в workflow?

Вы можете добавить шаг, который выводит версию Node.js в лог:

```yaml
- name: Print Node.js version
  run: node --version
```

Или более детально:

```yaml
- name: Print versions
  run: |
    echo "Node.js: $(node --version)"
    echo "npm: $(npm --version)"
    echo "npx: $(npx --version)"
```

Этот шаг покажет точную версию Node.js, которая используется в вашем workflow.

### 💎 Итог

| Вопрос | Ответ |
|---|---|
| **Зачем Node.js в workflow?** | Чтобы запустить CLI-инструмент `geoff` для сборки сайта |
| **Можно ли обойтись браузерным JS?** | Нет, на этапе сборки — нельзя. Браузерный JS работает только после сборки |
| **Устанавливается ли для всех репозиториев?** | Нет, только внутри конкретного workflow |
| **Как проверить версию?** | Добавить шаг `run: node --version` |

Таким образом, Node.js в GitHub Actions и браузерный JavaScript решают **разные задачи**: первый собирает сайт, второй выполняет запросы к уже собранному сайту.

### 🔗 Ссылки

- GitHub Actions: сборка и тестирование Node.js — https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs
- setup-node — https://github.com/actions/setup-node
- Node.js vs браузер — https://javarush.com/quests/lectures/ru.javarush.web.angular.lecture.level13.lecture01
- Build time vs runtime — https://v2.gatsbyjs.com/docs/overview-of-the-gatsby-build-process/
  
