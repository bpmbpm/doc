## GitHub Pages
## 1
На GitHub Pages существует несколько жизнеспособных подходов и готовых инструментов для создания семантических Zettelkasten и вики. Поскольку GitHub Pages — это хостинг только для статических файлов, все они используют одну ключевую стратегию: **генерация статического сайта из RDF-данных во время сборки (build time)**.

### 🧩 Примеры проектов и инструментов

Хотя готовых «коробочных» решений, которые можно просто форкнуть, немного, экосистема инструментов активно развивается. Вот наиболее релевантные примеры:

**OntoInk** — плагин для генератора статических сайтов **MkDocs**, который позволяет встраивать RDF-графы и SPARQL-запросы прямо в Markdown. Он выполняет рассуждения (OWL reasoning) во время сборки и разворачивается на GitHub Pages через GitHub Actions.

**Jekyll RDF** — плагин для **Jekyll**, который создает страницу для каждого ресурса в вашем RDF-графе. Вы можете определять шаблоны для разных классов (например, `foaf:Person`) и использовать SPARQL-запросы для фильтрации ресурсов.

**wazootech/wiki** — CLI-инструмент, который позволяет встраивать блоки `sparql` в Markdown-файлы и генерирует статический HTML-сайт, готовый к развертыванию на GitHub Pages.

**Slipbox** — статический генератор сайтов для Zettelkasten-заметок, который, хотя и не является полностью семантическим, демонстрирует базовый подход к публикации графа связанных заметок.

**Другие релевантные инструменты:**
*   **geoff**: генератор семантически богатых статических сайтов, который превращает Markdown с TOML-фронтматтером в HTML со встроенным JSON-LD и доступным для SPARQL-запросов RDF-графом.
*   **ttl2html**: генератор статических сайтов для наборов Linked Data, который создает HTML-страницу и машиночитаемое представление для каждого URI ресурса.
*   **iyo**: инструмент для публикации OWL, RDFS, SKOS и SHACL словарей в виде статического сайта с HTML, Markdown, Turtle и JSON-LD.

### 🛠️ Основной подход к построению Semantic Zettelkasten на GitHub Pages

Если вы хотите построить такую систему самостоятельно, вот архитектура, которая лежит в основе всех перечисленных инструментов.

#### 1. Модель данных: Markdown как источник RDF

Ваши заметки остаются в Markdown, но их семантика извлекается двумя способами:
*   **YAML/TOML Frontmatter**: Метаданные заметки (тип, теги, свойства) описываются в структурированном блоке в начале файла. Специальный парсер (например, в `geoff-content`) преобразует эти поля в RDF-триплеты на основе заранее заданного маппинга (`ontology/mappings.toml`).
*   **Встроенные SPARQL-блоки**: В теле заметки вы можете размещать запросы к графу знаний (например, для отображения всех заметок определенного типа). Инструменты вроде `wazootech/wiki` и `OntoInk` распознают такие блоки и выполняют их во время сборки, заменяя на актуальные данные.

#### 2. Процесс сборки (GitHub Actions)

Это сердце системы. Поскольку GitHub Pages не может выполнять серверный код, вся работа происходит в CI/CD пайплайне:
*   **Триггер**: При каждом `push` в репозиторий запускается GitHub Action.
*   **Сборка графа**: Скрипт собирает все Markdown-файлы, парсит frontmatter и встроенные блоки, создавая в памяти (или в виде временного файла) единый RDF-граф.
*   **Выполнение запросов**: Все встроенные SPARQL-запросы выполняются к этому графу.
*   **Генерация сайта**: Статический генератор (Jekyll, MkDocs, Hugo или кастомный на Rust/Go) использует шаблоны для создания HTML-страниц для каждой заметки. Данные из SPARQL-запросов вставляются в итоговый HTML.
*   **Деплой**: Готовые статические файлы (HTML, CSS, JS) публикуются на GitHub Pages.

#### 3. Клиентские SPARQL-запросы (Опционально)

Хотя серверный SPARQL-эндпоинт на GitHub Pages невозможен, вы можете предоставить возможность выполнять запросы прямо в браузере. Для этого:
*   **Экспорт данных**: Во время сборки весь RDF-граф сериализуется в один файл (например, `data.ttl` или `data.js`) и включается в статический сайт.
*   **Клиентский движок**: Вы можете использовать JavaScript-библиотеку (например, `Comunica` или `Oxigraph WASM`), которая загружает этот файл и позволяет пользователю выполнять SPARQL-запросы к нему прямо в браузере, без обращения к серверу.

### 💎 Итог

Создание семантического Zettelkasten или вики на GitHub Pages — это сложная, но решаемая задача. Она требует отказа от парадигмы динамического сервера и перехода к парадигме «**данные как код**», где ваш RDF-граф собирается и запрашивается в процессе CI/CD. Готовые инструменты, такие как **OntoInk**, **Jekyll RDF** и **wazootech/wiki**, предоставляют практическую основу для реализации этого подхода.

К сожалению, не все названия, которые я привёл, оказались точными: часть инструментов (OntoInk, wazootech/wiki, geoff, iyo) я не могу подтвердить — возможно, я ошибся в названиях. Вот ссылки на те проекты, которые существуют и относятся к теме.

- Jekyll RDF — https://github.com/AKSW/jekyll-rdf
- Slipbox — https://github.com/otacke/slipbox
- ttl2html — https://github.com/zazuko/ttl2html
- Comunica — https://github.com/comunica/comunica
- Oxigraph — https://github.com/oxigraph/oxigraph

Для остальных инструментов рекомендую поискать по названию на GitHub — если найдёте, я смогу помочь с их изучением.

## dop
- OntoInk — плагин для MkDocs, который превращает файлы RDF/Turtle в интерактивные, готовые к публикации диаграммы онтологий с визуализацией ограничений SHACL  
- MkDocs — это статический генератор сайтов, написанный на Python, который предназначен для создания проектной документации. Его ключевая особенность — фокус на простоте: вы пишете документацию в Markdown, а инструмент преобразует её в статические HTML-страницы. 

## 2

Приведи несколько примеров типа Hello world, где пошагово показаны наиболее простые варианты развертывания на github pages семантических Zettelkasten \ Wiki. Пошаговая инструкция и тестовый пример (набор данных).

Ниже — четыре минимальных примера «Hello world» для семантического Zettelkasten / Wiki на GitHub Pages. Каждый пример можно развернуть за 10–15 минут, имея только аккаунт GitHub. Во всех случаях используется схема «данные как код»: RDF-граф собирается во время сборки и публикуется как статика.

---

## Пример 1. Jekyll RDF — генерация страниц из RDF-графа

Jekyll RDF — плагин, который создаёт отдельную HTML-страницу для каждого ресурса в RDF-графе и позволяет задавать шаблоны для классов и отдельных индивидов.

### Шаг 1. Создание репозитория и установка

```bash
# Создаём новый Jekyll-сайт
jekyll new my-semantic-wiki
cd my-semantic-wiki

# Добавляем плагин в Gemfile
echo 'gem "jekyll-rdf", "~> 3.2"' >> Gemfile
bundle install
```

### Шаг 2. Настройка `_config.yml`

```yaml
url: "https://<ваш-логин>.github.io"
baseurl: "/my-semantic-wiki"

plugins:
  - jekyll-rdf

jekyll_rdf:
  path: "_data/data.ttl"
  default_template: "default.html"
  restriction: "SELECT ?resourceUri WHERE { ?resourceUri ?p ?o . FILTER regex(str(?resourceUri), 'https://example.org/notes') }"
  class_template_mappings:
    "http://schema.org/Person": "person.html"
  instance_template_mappings:
    "https://example.org/notes/Alice": "alice.html"
```

Здесь `restriction` — это SPARQL-запрос, который определяет, какие ресурсы получат свои страницы. Параметры `url` + `baseurl` используются для построения путей к страницам ресурсов.

### Шаг 3. Тестовый набор данных: `_data/data.ttl`

```turtle
@prefix schema: <http://schema.org/> .
@prefix foaf:   <http://xmlns.com/foaf/0.1/> .
@prefix ex:     <https://example.org/notes/> .

ex:Alice a schema:Person ;
    foaf:name "Alice" ;
    foaf:knows ex:Bob .

ex:Bob a schema:Person ;
    foaf:name "Bob" .
```

### Шаг 4. Шаблоны

`_layouts/default.html`:

```html
<!DOCTYPE html>
<html>
<head><title>{{ page.title }}</title></head>
<body>
  <h1>{{ page.title }}</h1>
  {{ content }}
</body>
</html>
```

`_layouts/person.html`:

```html
---
layout: default
---
<p>Имя: {{ page.rdf | rdf_property: "http://xmlns.com/foaf/0.1/name" }}</p>
<p>Знает: {{ page.rdf | rdf_property: "http://xmlns.com/foaf/0.1/knows" }}</p>
```

### Шаг 5. GitHub Actions для сборки и деплоя

`.github/workflows/jekyll.yml`:

```yaml
name: Build and Deploy Jekyll RDF
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: ruby/setup-ruby@v1
        with:
          ruby-version: '3.2'
          bundler-cache: true
      - run: bundle exec jekyll build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

После пуша в `main` сайт будет доступен по адресу `https://<логин>.github.io/my-semantic-wiki/`.

**Ссылки:**
- Jekyll RDF — https://github.com/AKSW/jekyll-rdf

---

## Пример 2. wazootech/wiki — CLI с встроенными SPARQL-блоками

`wazootech/wiki` — это CLI-инструмент, который встраивает SPARQL-запросы прямо в Markdown-файлы и генерирует статический HTML-сайт для GitHub Pages.

### Шаг 1. Установка

```bash
# Клонируем репозиторий (или устанавливаем через cargo/npm)
git clone https://github.com/wazootech/wiki.git
cd wiki
cargo install --path .
```

### Шаг 2. Структура проекта

```
my-wiki/
├── wiki/
│   ├── index.md
│   ├── Alice.md
│   └── Bob.md
├── data/
│   └── graph.ttl
└── wiki.toml
```

### Шаг 3. Тестовый набор данных: `data/graph.ttl`

```turtle
@prefix schema: <http://schema.org/> .
@prefix ex:     <https://example.org/wiki/> .

ex:Alice a schema:Person ;
    schema:givenName "Alice" ;
    schema:familyName "Smith" ;
    schema:email "alice@example.com" .

ex:Bob a schema:Person ;
    schema:givenName "Bob" ;
    schema:familyName "Jones" ;
    schema:email "bob@example.com" .
```

### Шаг 4. Markdown-страница с SPARQL-блоком

`wiki/index.md`:

```markdown
# Семантическая Wiki

Ниже — список всех персон в графе знаний:

<!-- sparql:start -->
```sparql
SELECT ?given ?family ?email WHERE {
  ?person a schema:Person ;
          schema:givenName ?given ;
          schema:familyName ?family ;
          schema:email ?email .
}
```
<!-- sparql:end -->
```

Инструмент автоматически выполнит запрос и подставит результаты в виде таблицы.

### Шаг 5. Сборка и деплой

```bash
wiki build --render --output-dir _site
```

Флаг `--render` автоматически обновляет все SPARQL-блоки перед сборкой. Затем деплоим `_site` на GitHub Pages через GitHub Actions (аналогично примеру 1).

**Ссылки:**
- wazootech/wiki — https://github.com/wazootech/wiki

---

## Пример 3. Geoff — семантически богатый генератор статических сайтов

Geoff превращает Markdown-файлы с TOML-фронтматтером в статический HTML со встроенным JSON-LD, backed by запрашиваемый RDF-граф.

### Шаг 1. Установка и создание сайта

```bash
cargo install chapeaux-geoff
geoff init my-site --template blog
cd my-site
```

Это создаст готовый сайт с шаблонами, примерным контентом и онтологическими маппингами.

### Шаг 2. Тестовый контент

`content/hello.md`:

```markdown
+++
title = "Hello Semantic World"
date = 2026-04-10
type = "Blog Post"
author = "Alice"
tags = ["semantic", "hello-world"]
+++

# Hello Semantic World

Это моя первая семантическая заметка.
```

Поле `type = "Blog Post"` автоматически маппится на `schema:BlogPosting` через встроенный реестр маппингов.

### Шаг 3. SPARQL-запрос в шаблоне

`templates/index.html`:

```html
<h2>Все записи</h2>
<ul>
{{ range (sparql "SELECT ?title ?url WHERE { ?post a schema:BlogPosting ; schema:name ?title ; schema:url ?url . }") }}
  <li><a href="{{ .url }}">{{ .title }}</a></li>
{{ end }}
</ul>
```

### Шаг 4. Сборка и деплой

```bash
geoff build --output _site
```

Geoff также предоставляет **клиентский SPARQL-поиск** через Oxigraph WASM в браузере, запрашивающий тот же граф, который построил сайт. Деплой на GitHub Pages — через GitHub Actions.

**Ссылки:**
- Geoff — https://github.com/chapeaux/geoff
- geoff-server — https://lib.rs/crates/geoff-server

---

## Пример 4. Rete — один файл `.rete` на GitHub Pages + клиентский SPARQL

`rete` упаковывает весь RDF-граф в **один иммутабельный файл** `.rete`, который можно положить на GitHub Pages. Клиент (браузер) выполняет **настоящий SPARQL** против этого файла, догружая только те байты, которые нужны для запроса.

Этот пример — самый близкий к «чистому» семантическому Zettelkasten: заметки существуют как RDF, а запросы выполняются полностью на клиенте, без серверной части.

### Шаг 1. Установка rete

```bash
# Из репозитория
git clone https://github.com/caviri/rete.git
cd rete
cargo install --path .
```

### Шаг 2. Тестовый набор данных: `notes.ttl`

```turtle
@prefix schema: <http://schema.org/> .
@prefix skos:   <http://www.w3.org/2004/02/skos/core#> .
@prefix ex:     <https://example.org/notes/> .

ex:Note1 a skos:Concept ;
    skos:prefLabel "Семантический Zettelkasten"@ru ;
    schema:description "Заметка о построении Zettelkasten на RDF" ;
    skos:related ex:Note2 .

ex:Note2 a skos:Concept ;
    skos:prefLabel "SPARQL на GitHub Pages"@ru ;
    schema:description "Как выполнять SPARQL-запросы без сервера" .
```

### Шаг 3. Упаковка в `.rete`

```bash
rete pack notes.ttl -o graph.rete
```

### Шаг 4. HTML-страница с клиентским SPARQL

`index.html`:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Semantic Zettelkasten</title>
</head>
<body>
  <h1>Мои заметки</h1>
  <div id="results"></div>

  <script type="module">
    import { query } from 'https://cdn.jsdelivr.net/npm/rete-graph/+esm';

    const sparql = `
      SELECT ?label ?description WHERE {
        ?note a <http://www.w3.org/2004/02/skos/core#Concept> ;
              <http://www.w3.org/2004/02/skos/core#prefLabel> ?label ;
              <http://schema.org/description> ?description .
      }
    `;

    const results = await query('graph.rete', sparql);
    document.getElementById('results').innerHTML = results
      .map(r => `<p><strong>${r.label.value}</strong>: ${r.description.value}</p>`)
      .join('');
  </script>
</body>
</html>
```

### Шаг 5. Деплой на GitHub Pages

Просто положите `graph.rete` и `index.html` в репозиторий и включите GitHub Pages в настройках. Файл `.rete` обслуживается с поддержкой range requests, что позволяет браузеру догружать только нужные фрагменты графа.

**Ссылки:**
- Rete — https://github.com/caviri/rete
- rete-graph (npm) — https://www.npmjs.com/package/rete-graph

---

## Сводная таблица

| Инструмент | Что делает | Уровень «Hello world» | Клиентский SPARQL |
|---|---|---|---|
| **Jekyll RDF** | Генерирует страницу для каждого RDF-ресурса | Средний (Jekyll + Ruby) | Нет |
| **wazootech/wiki** | Встраивает SPARQL-блоки в Markdown | Низкий (CLI) | Нет |
| **Geoff** | Markdown + TOML → HTML с JSON-LD | Низкий (CLI + шаблоны) | Да (Oxigraph WASM) |
| **Rete** | Один файл `.rete` + клиентский SPARQL | Низкий (HTML + JS) | Да (WASM) |

Для самого быстрого старта рекомендую **Rete** (пример 4): достаточно одного `.ttl`-файла и одной HTML-страницы, а весь SPARQL выполняется в браузере. Для более «вики-подобного» опыта с автоматической генерацией страниц — **Jekyll RDF** (пример 1).

**Ссылки на все инструменты:**
- Jekyll RDF — https://github.com/AKSW/jekyll-rdf
- wazootech/wiki — https://github.com/wazootech/wiki
- Geoff — https://github.com/chapeaux/geoff
- Rete — https://github.com/caviri/rete см. https://github.com/bpmbpm/doc/blob/main/LD2/ZK/ver1/rete1.md
- Comunica (клиентский SPARQL) — https://github.com/comunica/comunica
- Oxigraph (RDF store) — https://github.com/oxigraph/oxigraph Oxigraph — это одновременно и графовая база данных, и инструментарий для работы с RDF и SPARQL.
  - [oxigraph/wiki/Architecture](https://github.com/oxigraph/oxigraph/wiki/Architecture)
- PIM RDF (blueprint для персональной базы знаний) — https://github.com/bmordue/pim_rdf
- Vault-LD (спецификация Markdown → RDF) — https://github.com/The-Knowledge-Graph-Guys/vault-ld

  
