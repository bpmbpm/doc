## 1

Предложи вариант семантической Wiki на Github pages и с хранением как файлов markdown так и quadstore (полученных из markdown) или гибридный markdown со встроенной семантикой.

Да, можно построить семантическую вики на GitHub Pages, которая хранит контент как в виде Markdown-файлов, так и в виде quadstore (RDF-графа), полученного из этих Markdown-файлов. Такой гибридный подход позволяет, с одной стороны, сохранить привычный способ написания заметок в Markdown, а с другой — получить полноценный RDF-граф, к которому можно выполнять SPARQL-запросы прямо в браузере пользователя, без серверной части.

## 🏗️ Архитектура решения

```
Markdown-файлы (с frontmatter)
        │
        ▼
  Генератор статического сайта (во время сборки)
        │
        ├──► HTML-страницы (визуализация вики)
        │
        └──► RDF-граф (сериализованный в .ttl / .rete / .nq)
                │
                ▼
        GitHub Pages (статика)
                │
                ▼
        Браузер пользователя
                │
                ├──► HTML-страницы (просмотр)
                │
                └──► Клиентский SPARQL-движок (Oxigraph WASM / Comunica)
                        │
                        ▼
                SPARQL-запросы к RDF-графу
```

Ключевая идея: **во время сборки** (GitHub Actions) Markdown-файлы компилируются в RDF-граф, который сериализуется в один или несколько файлов и кладётся в статику. **В браузере** пользователь может выполнять SPARQL-запросы к этому графу через WebAssembly-движок, без обращения к серверу.

## 🛠️ Инструменты для реализации

### Geoff (рекомендуемый)

**Geoff** — это генератор статических сайтов, который изначально построен на парадигме «linked data как основа публикации». Он превращает Markdown-файлы с TOML-frontmatter в статический HTML со встроенным JSON-LD, backed by запрашиваемый RDF-граф. Ключевая особенность: **клиентский SPARQL-поиск через Oxigraph WASM в браузере**, который запрашивает тот же граф, что построил сайт.

Это именно то, что нужно: Markdown-файлы остаются источником истины, а RDF-граф генерируется автоматически и доступен для клиентских SPARQL-запросов.

### Quadstore + Comunica

**Quadstore** — это LevelDB-backed RDF graph database для JavaScript-сред (браузер, Node.js, Deno), которая поддерживает quads, RDF/JS-интерфейсы и SPARQL-запросы через `quadstore-comunica`. **Comunica** — это модульный фреймворк для выполнения SPARQL-запросов, который может работать как в Node.js, так и в браузере.

Комбинация Quadstore + Comunica позволяет построить в браузере полноценный quadstore, загрузить в него RDF-данные и выполнять SPARQL-запросы. Однако для этого потребуется написать собственный генератор статического сайта, который будет конвертировать Markdown в RDF.

### wazootech/wiki (с оговоркой)

`wazootech/wiki` — это CLI-инструмент, который встраивает SPARQL-блоки в Markdown и генерирует статический HTML. Однако его SPARQL-запросы выполняются **во время сборки**, а не в браузере. Для клиентских запросов потребуется дополнительный слой (например, экспорт графа в файл и загрузка его в Oxigraph WASM на клиенте).

## 📋 Пошаговая инструкция для проекта на Geoff

### Шаг 1. Установка Geoff

```bash
# Через Cargo (Rust)
cargo install chapeaux-geoff

# Или через npm
npm install -g @chapeaux/geoff
```

### Шаг 2. Создание сайта

```bash
geoff init my-semantic-wiki --template blog
cd my-semantic-wiki
```

Это создаст готовый сайт с шаблонами, примерным контентом и онтологическими маппингами.

### Шаг 3. Тестовые Markdown-файлы

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

`content/sparql-note.md`:

```markdown
+++
title = "SPARQL на GitHub Pages"
date = 2026-04-11
type = "Blog Post"
author = "Bob"
tags = ["sparql", "rdf"]
+++

# SPARQL без сервера

Как выполнять SPARQL-запросы к RDF-графу прямо в браузере.
```

### Шаг 4. Настройка онтологических маппингов

В `ontology/mappings.toml` (создаётся автоматически):

```toml
[types]
"Blog Post" = "schema:BlogPosting"

[fields]
author = "schema:author"
date = "schema:datePublished"
tags = "schema:keywords"
```

### Шаг 5. Клиентский SPARQL-поиск

Geoff автоматически предоставляет **клиентский SPARQL-поиск через Oxigraph WASM**. Чтобы добавить интерфейс для запросов, создайте страницу `content/sparql.md`:

```markdown
+++
title = "SPARQL-консоль"
type = "Page"
+++

# SPARQL-консоль

Введите запрос к графу знаний:

<textarea id="query" rows="10" cols="80">
SELECT ?title ?author WHERE {
  ?post a schema:BlogPosting ;
        schema:name ?title ;
        schema:author ?author .
}
</textarea>
<button onclick="runQuery()">Выполнить</button>
<pre id="results"></pre>

<script type="module">
  import { init } from '@chapeaux/geoff-client';

  const engine = await init();

  window.runQuery = async () => {
    const query = document.getElementById('query').value;
    const results = await engine.query(query);
    document.getElementById('results').textContent = JSON.stringify(results, null, 2);
  };
</script>
```

### Шаг 6. Сборка и деплой

```bash
geoff build --output _site
```

Во время сборки Geoff:
1. Парсит Markdown-файлы и TOML-frontmatter.
2. Строит RDF-граф.
3. Генерирует HTML-страницы со встроенным JSON-LD.
4. Сериализует RDF-граф в файл (например, `graph.nq` или `graph.ttl`) и кладёт его в статику.
5. Копирует WASM-модуль Oxigraph для клиентского SPARQL.

Деплой на GitHub Pages — через GitHub Actions (аналогично примеру с Jekyll RDF).

### Шаг 7. GitHub Actions

`.github/workflows/deploy.yml`:

```yaml
name: Deploy Semantic Wiki

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm install -g @chapeaux/geoff
      - run: geoff build --output _site
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./_site
```

## 🔄 Альтернативный вариант: Quadstore + Comunica вручную

Если Geoff не подходит, можно собрать решение вручную:

1. **Сборка RDF-графа**: использовать Jekyll RDF или `wazootech/wiki` для генерации RDF из Markdown.
2. **Сериализация**: сохранить граф в `.nq` (N-Quads) или `.trig` (TriG).
3. **Клиентский движок**: загрузить `quadstore` и `quadstore-comunica` через CDN, создать in-memory quadstore, загрузить в него RDF-данные и выполнять SPARQL-запросы.

Пример клиентского кода:

```html
<script type="module">
  import { Quadstore } from 'https://cdn.jsdelivr.net/npm/quadstore/+esm';
  import { Engine } from 'https://cdn.jsdelivr.net/npm/quadstore-comunica/+esm';

  const store = new Quadstore({ backend: new (await import('https://cdn.jsdelivr.net/npm/quadstore/+esm')).MemoryLevel() });
  const engine = new Engine(store);

  // Загружаем RDF-данные
  const response = await fetch('./graph.nq');
  const data = await response.text();

  // Парсим N-Quads и добавляем в store
  // (требуется парсер, например, N3.js)
  // ...

  // Выполняем SPARQL
  const result = await engine.query('SELECT * WHERE { ?s ?p ?o } LIMIT 10');
</script>
```

## 💎 Итог

| Подход | Инструменты | Сложность | Клиентский SPARQL |
|---|---|---|---|
| **Geoff** | `chapeaux-geoff` + Oxigraph WASM | Низкая | Да, из коробки |
| **Quadstore + Comunica** | `quadstore`, `quadstore-comunica` | Средняя | Да, требуется настройка |
| **wazootech/wiki + Oxigraph** | `wazootech-wiki`, Oxigraph WASM | Средняя | Да, требуется экспорт графа |

**Рекомендация**: для быстрого старта используйте **Geoff** — он изначально построен для семантической публикации и уже включает клиентский SPARQL через Oxigraph WASM. Markdown-файлы остаются источником истины, а RDF-граф генерируется автоматически и доступен для запросов в браузере.

## 🔗 Ссылки

- Geoff (crates.io) — https://crates.io/crates/chapeaux-geoff
- Geoff (GitHub) — https://github.com/chapeaux/geoff
- Oxigraph (RDF store с WASM) — https://github.com/oxigraph/oxigraph
- Quadstore — https://github.com/beautifulinteractions/node-quadstore
- quadstore-comunica — https://github.com/beautifulinteractions/node-quadstore
- Comunica — https://github.com/comunica/comunica
- wazootech/wiki — https://github.com/wazootech/wiki
- Jekyll RDF — https://github.com/AKSW/jekyll-rdf
- SPARQL 1.1 (W3C) — https://www.w3.org/TR/sparql11-query/
