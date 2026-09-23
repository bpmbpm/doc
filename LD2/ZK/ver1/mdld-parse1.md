начало см. https://github.com/bpmbpm/doc/blob/main/LD2/ZK/ver1/OxigraphWASM.md

MD-LD (Markdown-Linked Data)
- https://github.com/hubgit/md-ld
- https://www.skypack.dev/view/markdownld

## 1

Да, для базы из десятков заметок можно собрать **полностью клиентский вариант**: браузер сам загружает Markdown-файлы, парсит их в RDF и выполняет SPARQL-запросы. Никакого GitHub Actions, никакой сборки, никакого CLI — только статические файлы на GitHub Pages.

## 🏗️ Архитектура полностью клиентского решения

```
GitHub Pages (статика)
        │
        ├── index.html          ← HTML-страница с JS-кодом
        ├── notes/              ← Markdown-файлы с MD-LD аннотациями
        │   ├── note1.md
        │   └── note2.md
        │
        ▼
Браузер пользователя
        │
        ├── 1. fetch() загружает все .md файлы
        ├── 2. mdld-parse парсит их в RDF/JS quads
        ├── 3. Oxigraph WASM загружает quads в store
        └── 4. store.query() выполняет SPARQL
```

Ключевой момент: **mdld-parse** (или `vault-triplifier`) работает в браузере и выдаёт RDF/JS-совместимые quads, которые можно напрямую скормить Oxigraph WASM. Oxigraph, в свою очередь, предоставляет API `store.load()` и `store.query()` для загрузки RDF и выполнения SPARQL.

## 📋 Пошаговая инструкция для репозитория `bpmbpm/semantic_wiki_client`

### Шаг 1. Создание репозитория

1.  Зайдите на GitHub под своим аккаунтом.
2.  Нажмите **New repository**.
3.  Имя репозитория: `semantic_wiki_client`.
4.  Поставьте галочку **Public**.
5.  Нажмите **Create repository**.

### Шаг 2. Структура проекта

```
semantic_wiki_client/
├── index.html              ← Главная страница (вся логика в JS)
├── notes/
│   ├── note1.md            ← MD-LD заметка о Zettelkasten
│   └── note2.md            ← MD-LD заметка о SPARQL
└── README.md               ← Описание проекта
```

Все файлы создаются через **Add file → Create new file**.

### Шаг 3. Создание MD-LD заметок

MD-LD (Markdown-Linked Data) — это формат, который расширяет Markdown семантическими аннотациями в фигурных скобках. Синтаксис прост: `[текст] {предикат}` создаёт триплет, а `{=субъект .тип label}` задаёт субъект и его тип.

**`notes/note1.md`** — заметка о Zettelkasten:

```markdown
[ex] <tag:example.org,2026:>
[note1] <ex:note1>

# Семантический Zettelkasten {=note1 .schema:CreativeWork name}

Это заметка о построении Zettelkasten на RDF.

[Alice] {schema:author}
[2026-04-10] {schema:dateCreated ^^xsd:date}
[semantic] {schema:keywords}
[zettelkasten] {schema:keywords}
```

Здесь:
- `[note1] <ex:note1>` — объявляет субъект `ex:note1`.
- `{=note1 .schema:CreativeWork name}` — привязывает заголовок к субъекту с типом `schema:CreativeWork` и предикатом `schema:name`.
- `[Alice] {schema:author}` — создаёт триплет `ex:note1 schema:author "Alice"`.

**`notes/note2.md`** — заметка о SPARQL:

```markdown
[ex] <tag:example.org,2026:>
[note2] <ex:note2>

# SPARQL в браузере {=note2 .schema:CreativeWork name}

Как выполнять SPARQL-запросы без сервера.

[Bob] {schema:author}
[2026-04-11] {schema:dateCreated ^^xsd:date}
[sparql] {schema:keywords}
[rdf] {schema:keywords}
```

Обе заметки используют префикс `ex`, который указывает на `tag:example.org,2026:` — самоопределяемый URI через RFC 4151.

### Шаг 4. Создание `index.html`

Это единственный файл, который содержит всю логику. Он загружает `mdld-parse` и `oxigraph` через CDN, парсит заметки и выполняет SPARQL.

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Клиентский семантический Zettelkasten</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 900px; margin: 2rem auto; padding: 0 1rem; }
    h1 { color: #2c3e50; }
    .note { border-left: 3px solid #3498db; padding: 0.5rem 1rem; margin: 1rem 0; background: #f8f9fa; }
    .note strong { color: #3498db; }
    textarea { width: 100%; font-family: monospace; font-size: 0.9rem; }
    button { padding: 0.5rem 1rem; cursor: pointer; }
    pre { background: #f4f4f4; padding: 1rem; overflow-x: auto; }
    #status { color: #888; font-style: italic; }
    #error { color: #c0392b; }
  </style>
</head>
<body>
  <h1>📚 Клиентский семантический Zettelkasten</h1>
  <p id="status">Загрузка графа знаний…</p>
  <div id="error"></div>

  <h2>Все заметки</h2>
  <div id="all-notes"></div>

  <h2>SPARQL-консоль</h2>
  <p>Введите запрос к графу:</p>
  <textarea id="query" rows="8">PREFIX schema: <http://schema.org/>
SELECT ?title ?author WHERE {
  ?note a schema:CreativeWork ;
        schema:name ?title ;
        schema:author ?author .
}
ORDER BY ?title</textarea>
  <br>
  <button onclick="runQuery()">Выполнить</button>
  <pre id="results"></pre>

  <script type="module">
    // 1. Импортируем парсер MD-LD и Oxigraph через CDN
    import { parse } from 'https://cdn.jsdelivr.net/npm/mdld-parse/+esm';
    import init, * as oxigraph from 'https://cdn.jsdelivr.net/npm/oxigraph@latest/web.js';

    const statusEl = document.getElementById('status');
    const errorEl = document.getElementById('error');
    const allNotesEl = document.getElementById('all-notes');
    const resultsEl = document.getElementById('results');

    // 2. Инициализируем Oxigraph WASM
    await init();
    const store = new oxigraph.Store();

    // 3. Загружаем все Markdown-файлы из папки notes/
    const noteFiles = ['note1.md', 'note2.md'];
    let loadedCount = 0;

    for (const file of noteFiles) {
      try {
        const response = await fetch(`./notes/${file}`);
        if (!response.ok) throw new Error(`Не удалось загрузить ${file}`);
        const mdText = await response.text();

        // 4. Парсим MD-LD в RDF/JS quads
        const result = parse({ text: mdText });

        // 5. Добавляем quads в Oxigraph store
        for (const quad of result.quads) {
          store.add(quad);
        }
        loadedCount++;
      } catch (err) {
        errorEl.textContent += `Ошибка при загрузке ${file}: ${err.message}\n`;
      }
    }

    statusEl.textContent = `Загружено ${loadedCount} заметок, ${store.size} триплетов.`;

    // 6. Выполняем начальный SPARQL-запрос для отображения всех заметок
    async function renderAllNotes() {
      const query = `
        PREFIX schema: <http://schema.org/>
        SELECT ?title ?author ?date WHERE {
          ?note a schema:CreativeWork ;
                schema:name ?title .
          OPTIONAL { ?note schema:author ?author }
          OPTIONAL { ?note schema:dateCreated ?date }
        }
        ORDER BY ?title
      `;

      try {
        const results = store.query(query);
        let html = '';
        for (const binding of results) {
          const title = binding.get('title')?.value || 'Без названия';
          const author = binding.get('author')?.value || '—';
          const date = binding.get('date')?.value || '—';
          html += `
            <div class="note">
              <strong>${title}</strong>
              <p>Автор: ${author} · Дата: ${date}</p>
            </div>
          `;
        }
        allNotesEl.innerHTML = html || '<p>Заметок пока нет.</p>';
      } catch (err) {
        allNotesEl.innerHTML = `<p style="color:red">Ошибка: ${err.message}</p>`;
      }
    }

    await renderAllNotes();

    // 7. Функция для выполнения произвольного SPARQL-запроса
    window.runQuery = async () => {
      const query = document.getElementById('query').value;
      try {
        const results = store.query(query);
        const rows = [];
        for (const binding of results) {
          const row = {};
          for (const [key, value] of binding) {
            row[key] = value.value;
          }
          rows.push(row);
        }
        resultsEl.textContent = JSON.stringify(rows, null, 2);
      } catch (err) {
        resultsEl.textContent = `Ошибка: ${err.message}`;
      }
    };
  </script>
</body>
</html>
```

**Что здесь происходит:**

1.  **`mdld-parse`** загружается через jsDelivr как ES-модуль. Он парсит MD-LD в массив quads, совместимых с RDF/JS.
2.  **`oxigraph`** загружается через jsDelivr. После `await init()` создаётся `Store`, в который добавляются quads через `store.add()`.
3.  **`fetch()`** загружает все `.md` файлы из папки `notes/`. Поскольку база маленькая (десятки заметок), загрузка всех файлов не создаёт проблем.
4.  **SPARQL-запросы** выполняются через `store.query()`. Результаты — это binding-объекты, которые можно итерировать.

### Шаг 5. README.md

```markdown
# semantic_wiki_client — клиентский семантический Zettelkasten

Демонстрационный проект, показывающий, как построить семантическую вики на GitHub Pages **без сборки и без CLI**. Браузер сам загружает Markdown-файлы, парсит их в RDF и выполняет SPARQL-запросы.

## Как это работает

1. **Markdown-файлы** с MD-LD аннотациями лежат в папке `notes/`.
2. **`mdld-parse`** парсит их в RDF/JS quads прямо в браузере.
3. **Oxigraph WASM** загружает quads в in-memory store.
4. **SPARQL-запросы** выполняются через `store.query()`.

## Структура

- `index.html` — вся логика в одном файле.
- `notes/note1.md`, `notes/note2.md` — тестовые MD-LD заметки.

## Как воспроизвести

1. Форкните или клонируйте репозиторий.
2. Включите GitHub Pages: **Settings → Pages → Source: Deploy from a branch → main / (root)**.
3. Откройте `https://bpmbpm.github.io/semantic_wiki_client/`.

## Синтаксис MD-LD

- `[текст] {предикат}` — создаёт триплет с литералом.
- `[текст] {=субъект .тип label}` — задаёт субъект, его тип и заголовок.
- `{?предикат}` — создаёт триплет с объектом (IRI).
- `{^^xsd:date}` — задаёт тип литерала.

## Ссылки

- MD-LD (спецификация) — https://mdld.js.org/
- mdld-parse (npm) — https://www.npmjs.com/package/mdld-parse
- Oxigraph (npm) — https://www.npmjs.com/package/oxigraph
- Oxigraph (GitHub) — https://github.com/oxigraph/oxigraph
- SPARQL 1.1 (W3C) — https://www.w3.org/TR/sparql11-query/
```

### Шаг 6. Включение GitHub Pages

1.  Перейдите в **Settings → Pages**.
2.  В разделе **Source** выберите **Deploy from a branch**.
3.  Ветка: `main`, папка: `/ (root)`.
4.  Нажмите **Save**.

Через 1–2 минуты сайт будет доступен по адресу `https://bpmbpm.github.io/semantic_wiki_client/`.

## 🔄 Альтернативный парсер: vault-triplifier

Если MD-LD покажется слишком сложным, можно использовать **vault-triplifier** — он использует более естественный синтаксис:

```markdown
# Team Directory

## Alice Johnson
schema:jobTitle :: Product Manager
schema:email :: alice@company.com
manages :: [[#Bob Smith]]
```

Vault-triplifier парсит такие файлы в RDF/Turtle и также может работать в браузере. Однако его API отличается: `triplify()` возвращает не quads, а dataset, который нужно сериализовать в Turtle, а затем загрузить в Oxigraph через `store.load()`.

## ⚠️ Ограничения клиентского подхода

| Ограничение | Пояснение |
|---|---|
| **Все файлы загружаются** | Браузер скачивает все `.md` файлы, даже если запрос касается только одной заметки |
| **Нет кэширования RDF** | Граф строится заново при каждой загрузке страницы |
| **Парсинг при каждом открытии** | Для 10–50 заметок это незаметно, для 500+ — уже ощутимо |
| **Нет внешних источников** | Нельзя дополнить граф данными из Wikidata без CORS-проблем |

Для базы из **десятков заметок** эти ограничения несущественны. Для сотен и тысяч — лучше вернуться к варианту со сборкой в GitHub Actions.

## 🔗 Ссылки

- MD-LD (официальный сайт) — https://mdld.js.org/
- mdld-parse (npm) — https://www.npmjs.com/package/mdld-parse
- mdld-parse (документация) — https://github.com/davay42/mdld-parse/blob/HEAD/docs/index.md
- vault-triplifier (npm) — https://www.npmjs.com/package/vault-triplifier
- vault-triplifier (GitHub) — https://github.com/cristianvasquez/vault-triplifier
- Oxigraph (npm) — https://www.npmjs.com/package/oxigraph
- Oxigraph (GitHub) — https://github.com/oxigraph/oxigraph
- Oxigraph WASM на jsDelivr — https://cdn.jsdelivr.net/npm/oxigraph
- SPARQL 1.1 (W3C) — https://www.w3.org/TR/sparql11-query/

## 2

Да, вы понимаете всё верно. MD-LD (Markdown-Linked Data) — это именно **надстройка над классическим Markdown**, а не его замена. Вы можете писать обычный Markdown, и при необходимости добавлять семантические аннотации в фигурных скобках `{...}`. GitHub отобразит такой файл как обычный Markdown, потому что аннотации `{...}` не являются частью стандартного синтаксиса и будут просто проигнорированы рендерером. Это ключевое преимущество MD-LD: «Уберите все блоки `{...}` — и останется чистый Markdown».

Ниже — расширенный пример, который демонстрирует, как семантика добавляется в привычный текст.

### 📝 Расширенный пример MD-LD

Этот пример показывает документ, который читается как обычный Markdown, но при этом генерирует богатый RDF-граф.

```markdown
[ex] <tag:example.org,2026:>

# Заметки о проекте {=ex:project-alpha .schema:Project name}

Этот проект посвящён семантическому аннотированию Markdown.

## Участники

[Alice] {+ex:alice ?schema:member .schema:Person name}
[Bob] {+ex:bob ?schema:member .schema:Person name}

## Задачи

- **Спроектировать схему** {+ex:task1 ?schema:hasTask .schema:Task name}
- **Реализовать парсер** {+ex:task2 ?schema:hasTask .schema:Task name}
- **Написать документацию** {+ex:task3 ?schema:hasTask .schema:Task name}

## Ссылки

[Документация MD-LD](https://mdld.js.org/) {?schema:url}
[Спецификация](https://github.com/davay42/mdld-parse/blob/HEAD/spec/index.md) {?schema:citation}
```

### 🔍 Что здесь происходит

| Фрагмент | Семантическое значение |
|---|---|
| `[ex] <tag:example.org,2026:>` | Объявляет префикс `ex` для самоопределяемого URI (RFC 4151) |
| `# Заметки о проекте {=ex:project-alpha .schema:Project name}` | Создаёт субъект `ex:project-alpha` типа `schema:Project` с заголовком из текста |
| `[Alice] {+ex:alice ?schema:member .schema:Person name}` | Создаёт объект `ex:alice` типа `schema:Person`, связывает его с проектом через `schema:member`, и добавляет `name` из текста |
| `- **Спроектировать схему** {+ex:task1 ?schema:hasTask .schema:Task name}` | Аналогично создаёт задачу и связывает её с проектом |
| `[Документация MD-LD](https://mdld.js.org/) {?schema:url}` | Создаёт триплет `ex:project-alpha schema:url <https://mdld.js.org/>` |

### 🖥️ Как это выглядит на GitHub

GitHub **не понимает** семантику `{...}` и отобразит файл так:

> **Заметки о проекте** {=ex:project-alpha .schema:Project name}
>
> Этот проект посвящён семантическому аннотированию Markdown.
>
> **Участники**
>
> Alice {+ex:alice ?schema:member .schema:Person name}
> Bob {+ex:bob ?schema:member .schema:Person name}

Фигурные скобки останутся видны как обычный текст. Это не ошибка, а ожидаемое поведение: GitHub рендерит **стандартный CommonMark**, а MD-LD — это расширение, которое понимает только парсер `mdld-parse`.

### 🎯 Зачем это нужно

Вы получаете **двойную природу документа**:

1.  **Для людей** (и GitHub): читаемый Markdown с небольшими визуальными вставками `{...}`, которые не мешают восприятию.
2.  **Для машин**: полноценный RDF-граф, который можно загрузить в Oxigraph WASM и запрашивать через SPARQL.

Парсер `mdld-parse` возвращает не только quads, но и «чистый» Markdown без аннотаций — свойство `result.md`. Это позволяет, например, отображать пользователю обычный текст, а семантику использовать для запросов.

### 📋 Более сложный пример: встреча и задачи

Вот пример из документации MD-LD, который показывает, как один документ описывает встречу, участников и задачи:

```markdown
[alice] <tag:alice@example.com,2026:>

# Заметки о встрече {=alice:meeting-2026-01-15 .alice:Meeting label}

Участники:
- **Alice** {+alice:alice ?alice:attendee .alice:Person label}
- **Bob** {+alice:bob ?alice:attendee .alice:Person label}

Задачи:
- **Проверить предложение** {+alice:task-1 ?alice:actionItem .alice:Task label}
```

Этот текст генерирует граф, где встреча связана с участниками и задачами. При этом сам текст остаётся понятным человеку.

### 💎 Итог

Да, вы можете писать обычный Markdown и добавлять семантику только там, где это нужно. GitHub отобразит файл корректно, просто проигнорировав аннотации. Для извлечения RDF-графа используется парсер `mdld-parse`, который можно запустить в браузере. Это делает MD-LD удобным форматом для семантического Zettelkasten, где заметки остаются читаемыми, но при этом становятся частью графа знаний.

### 🔗 Ссылки

- MD-LD (официальный сайт) — https://mdld.js.org/
- mdld-parse (npm) — https://www.npmjs.com/package/mdld-parse
- Спецификация MD-LD — https://github.com/davay42/mdld-parse/blob/HEAD/spec/index.md
- Примеры использования — https://github.com/alan8373/mdld-py/blob/main/docs/Use-Cases.md
- Руководство MD-LD — https://github.com/alan8373/mdld-py/blob/main/docs/Guide.md

  
