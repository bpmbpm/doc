## 1

"Oxigraph WASM — подключается через CDN, загружает .ttl файл и выполняет SPARQL-запросы в браузере. Никакой сборки, никакого CLI"  

Задача: собрать wiki в markdown, далее файлы markdown уметь парсить в RDF. Как это делать? Хотя бы с частичной потерей информации.

Вы правы, это ключевой вопрос. Задача действительно распадается на две части: **как из Markdown получить RDF** и **как выполнить SPARQL в браузере**. Хорошая новость в том, что обе части можно решить без CLI на вашем компьютере — либо целиком в браузере, либо с помощью GitHub Actions.

## 🧩 Два подхода к парсингу Markdown в RDF

Существует два принципиально разных способа извлечь семантику из Markdown:

| Подход | Как работает | Потеря информации | Сложность |
|---|---|---|---|
| **Структурный парсинг** | Из YAML-frontmatter и специальных аннотаций в тексте извлекаются триплеты по заранее заданным правилам | Частичная (только размеченные поля) | Низкая |
| **LLM-извлечение** | LLM читает текст и сам выделяет сущности и связи | Минимальная, но возможны ошибки | Высокая |

## 🔧 Вариант 1: Структурный парсинг в браузере (без сборки)

Это самый простой путь. Вы можете использовать JavaScript-библиотеки, которые работают **прямо в браузере** и преобразуют Markdown в RDF-квады.

### Инструмент: `mdld-parse`

**MD-LD (Markdown-Linked Data)** — это формат, который расширяет CommonMark явными семантическими аннотациями в фигурных скобках. Библиотека `mdld-parse` парсит такие файлы в RDF-квады, совместимые с `n3.js`, `rdflib` и любыми RDF/JS-библиотеками.

**Пример MD-LD:**

```markdown
[ex] <tag:ame@example.com,2026:> # Alice {=ex:alice .prov:Person label}
[Alice Smith] {ex:fullName}
[alice@example.com] {ex:email}
```

Этот текст генерирует RDF-квады, которые можно загрузить в Oxigraph WASM.

**Установка и использование (в браузере):**

```html
<script type="module">
  import { parse } from 'https://cdn.jsdelivr.net/npm/mdld-parse/+esm';

  const mdldString = `
    [ex] <tag:example.org,2026:> # Заметка о Zettelkasten {=ex:note1 .schema:CreativeWork}
    [Семантический Zettelkasten] {schema:name}
    [Alice] {schema:author}
  `;

  const result = parse({ text: mdldString });
  console.log(result.quads); // RDF/JS quads
</script>
```

### Инструмент: `vault-triplifier`

**vault-triplifier** — это npm-пакет, который конвертирует Markdown-файлы (и канвасы Obsidian) в RDF/Turtle с богатыми семантическими связями. Он использует простой синтаксис:

```markdown
# Team Directory

## Alice Johnson
schema:jobTitle :: Product Manager
schema:email :: alice@company.com
manages :: [[#Bob Smith]], [[Charlie Brown]]

## Bob Smith
schema:jobTitle :: Senior Developer
reports to :: [[#Alice Johnson]]
```

Этот текст превращается в RDF-триплеты с автоматическим созданием URI для каждой сущности.

**Использование в браузере:**

```html
<script type="module">
  import { triplify } from 'https://cdn.jsdelivr.net/npm/vault-triplifier/+esm';

  const content = `
    # Team Directory
    ## Alice Johnson
    schema:jobTitle :: Product Manager
    manages :: [[#Bob Smith]]
  `;

  const { dataset } = triplify("./team.md", content);
  // dataset — это RDF/JS Dataset, совместимый с Oxigraph
</script>
```

## 🏗️ Вариант 2: Сборка RDF в GitHub Actions + клиентский SPARQL

Этот подход разделяет сборку и выполнение:

1. **GitHub Actions** конвертирует все Markdown-файлы в один RDF-файл (`.ttl` или `.nq`).
2. **В браузере** Oxigraph WASM загружает этот файл и выполняет SPARQL-запросы.

### Инструмент: `vault-triplifier` в GitHub Actions

Создайте workflow, который устанавливает Node.js, запускает `vault-triplifier` для всех `.md` файлов и сохраняет результат в `graph.ttl`:

```yaml
name: Build RDF Graph

on:
  push:
    branches: ["main"]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '24'

      - name: Install vault-triplifier
        run: npm install vault-triplifier

      - name: Convert Markdown to RDF
        run: |
          node -e "
            const { triplify } = require('vault-triplifier');
            const fs = require('fs');
            const path = require('path');

            const files = fs.readdirSync('./content').filter(f => f.endsWith('.md'));
            let allTurtle = '';

            for (const file of files) {
              const content = fs.readFileSync(path.join('./content', file), 'utf8');
              const { dataset } = triplify('./content/' + file, content);
              // Сериализуем dataset в Turtle и добавляем к общему графу
              // (требуется N3.js или аналогичная библиотека)
            }

            fs.writeFileSync('./graph.ttl', allTurtle);
          "

      - name: Upload artifact
        uses: actions/upload-artifact@v4
        with:
          name: rdf-graph
          path: graph.ttl
```

### Клиентский SPARQL с Oxigraph WASM

После того как `graph.ttl` сгенерирован, создайте HTML-страницу, которая загружает Oxigraph WASM и выполняет запросы:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Semantic Wiki</title>
</head>
<body>
  <h1>Мои заметки</h1>
  <div id="results">Загрузка...</div>

  <script type="module">
    import oxigraph from 'https://cdn.jsdelivr.net/npm/oxigraph@latest/web.js';

    const store = new oxigraph.Store();

    // Загружаем RDF-граф, сгенерированный в GitHub Actions
    const response = await fetch('./graph.ttl');
    const ttl = await response.text();
    store.load(ttl, { format: 'text/turtle' });

    // Выполняем SPARQL
    const results = store.query(`
      PREFIX schema: <http://schema.org/>
      SELECT ?title ?author WHERE {
        ?note a schema:CreativeWork ;
              schema:name ?title ;
              schema:author ?author .
      }
    `);

    document.getElementById('results').innerHTML = [...results]
      .map(r => `<div><strong>${r.get('title').value}</strong> — ${r.get('author').value}</div>`)
      .join('');
  </script>
</body>
</html>
```

## 🧠 Вариант 3: LLM-извлечение (минимальная потеря информации)

Если вы хотите извлекать семантику из **обычного текста** без специальной разметки, можно использовать LLM-пайплайн в GitHub Actions. Проект **markdown-ld-kb** делает именно это: человекочитаемые Markdown-статьи обрабатываются LLM (GitHub Models), который извлекает Linked Data в формате RDF/JSON-LD.

**Архитектура:**

```
content/*.md → GitHub Actions → LLM (GitHub Models) → graph/*.jsonld + *.ttl
```

В frontmatter можно указывать подсказки для LLM:

```yaml
---
title: "Your Article Title"
entity_hints:
  - label: "RDF"
    type: "schema:Thing"
    sameAs: "https://www.wikidata.org/entity/Q54872"
---
```

Затем LLM анализирует текст и извлекает сущности и связи, формируя RDF-граф. Этот подход требует настройки GitHub Models и более сложен, но он извлекает семантику из **обычного текста**, а не только из размеченных полей.

## 💎 Рекомендация

Для вашей задачи (семантическая вики на GitHub Pages с клиентским SPARQL) я рекомендую **Вариант 2**:

1. **Храните заметки в Markdown** с YAML-frontmatter (title, author, tags) и, возможно, с простыми аннотациями типа `vault-triplifier`.
2. **В GitHub Actions** запускайте конвертер (`vault-triplifier` или `mdld-parse`) для генерации единого `graph.ttl`.
3. **В браузере** загружайте этот `graph.ttl` в Oxigraph WASM и выполняйте SPARQL-запросы.

Это даёт вам:
- **Нет CLI на вашем компьютере** — вся конвертация в GitHub Actions.
- **Клиентский SPARQL** — работает в браузере без сервера.
- **Частичная потеря информации** — только размеченные поля попадают в граф, но это контролируемо.

Если вы хотите **минимальную потерю информации**, добавьте LLM-шаг (Вариант 3), но это усложнит пайплайн и потребует настройки GitHub Models.

## 🔗 Ссылки

- mdld-parse (npm) — https://www.npmjs.com/package/mdld-parse
- vault-triplifier (npm) — https://www.npmjs.com/package/vault-triplifier
- vault-triplifier (GitHub) — https://github.com/cristianvasquez/vault-triplifier
- markdown-ld-kb (GitHub) — https://github.com/lqdev/markdown-ld-kb
- Oxigraph (npm) — https://www.npmjs.com/package/oxigraph
- Oxigraph (GitHub) — https://github.com/oxigraph/oxigraph
- yurtle-rdflib (Python/RDFlib) — https://pypi.org/project/yurtle-rdflib/
- rdf-from-markdown (SHACL) — https://github.com/zazuko/rdf-from-markdown

## 2
Делай все в браузере: 
- GitHub Actions конвертирует все Markdown-файлы в один RDF-файл (.ttl или .nq).
- В браузере Oxigraph WASM загружает этот файл и выполняет SPARQL-запросы.

Это очень точный и важный вопрос. Разделение сборки (в GitHub Actions) и выполнения (в браузере) — не единственно возможная архитектура, но она решает несколько фундаментальных проблем, которые неизбежно возникают при попытке делать всё на клиенте. Давайте разберём их по порядку.

### 🧩 Что технически возможно в браузере сегодня

Сразу стоит отметить: **парсинг Markdown в RDF в браузере уже возможен**. Существуют рабочие инструменты:
- **`mdld-parse`** — парсер MD-LD, который заявляет о поддержке браузеров и имеет размер всего ~15 КБ.
- **`vault-triplifier`** — конвертирует Markdown в RDF/Turtle и также может работать в браузере.

Теоретически можно представить себе полностью клиентское приложение: браузер загружает все `.md` файлы, парсит их в RDF, строит граф и выполняет SPARQL. Однако на практике это упирается в ряд ограничений.

### ⚠️ Почему полный клиентский подход проблематичен

**1. Производительность при росте базы**

Парсинг одного файла Markdown быстр: `mdld-parse` обрабатывает 1 МБ за ~100 мс. Но если у вас сотни или тысячи заметок, браузеру придётся:
- Загрузить **все** `.md` файлы по сети (даже те, которые не нужны для текущего запроса).
- Распарсить каждый из них в RDF.
- Построить общий граф в памяти.

Для Zettelkasten, который растёт годами, это означает, что при каждом открытии страницы браузер будет выполнять работу, которую можно было сделать **один раз** при сборке. При 1000 заметок по 10 КБ это уже 10 МБ Markdown, которые нужно скачать и обработать.

**2. Отсутствие контроля над версиями данных**

Если парсинг происходит только в браузере, то **нет единого зафиксированного RDF-графа**. Каждый пользователь строит граф из тех версий файлов, которые он загрузил в данный момент. Это затрудняет:
- Кэширование (нельзя положить готовый `.ttl` в CDN).
- Воспроизводимость (непонятно, какой именно граф был у пользователя вчера).
- Отладку (ошибка в парсинге может зависеть от порядка загрузки файлов).

**3. Сложность с внешними источниками**

Если вы хотите дополнить свои заметки данными из внешних RDF-источников (например, Wikidata), то клиентский парсинг потребует от браузера обращаться к этим источникам напрямую. Это порождает проблемы с CORS, лимитами API и задержками.

**4. Ограничения парсеров**

Не все парсеры Markdown→RDF одинаково хорошо работают в браузере. Например, `markdown-ld` — это **компилятор**, который обычно запускается как CLI или плагин к `remark`. Хотя его можно использовать в браузере, он не оптимизирован для этого так, как `mdld-parse`.

### ✅ Что даёт разделение сборки и выполнения

Именно поэтому разделение на два этапа становится прагматичным выбором:

| Этап | Где выполняется | Что делает | Преимущество |
|---|---|---|---|
| **Сборка** | GitHub Actions (Node.js) | Парсит все `.md` → генерирует единый `.ttl` | Работа делается **один раз**, результат кэшируется |
| **Выполнение** | Браузер (Oxigraph WASM) | Загружает готовый `.ttl` и выполняет SPARQL | Пользователь получает **мгновенный** доступ к графу |

Это не «усложнение ради усложнения», а **стандартный паттерн** для статических сайтов с данными: точно так же работают генераторы вроде Jekyll (Markdown → HTML), Hugo, Eleventy. Они компилируют контент заранее, а браузер получает готовый результат.

### 🔄 Гибридный вариант: частичный парсинг на клиенте

Если вы всё же хотите избежать полной сборки в CI, возможен **гибридный подход**:
- **Основной граф** (например, все заметки с frontmatter) генерируется в GitHub Actions.
- **Динамические дополнения** (например, результаты поиска по тексту) парсятся в браузере из загруженных `.md` файлов.

Но даже в этом случае базовый граф лучше строить заранее — это снимает нагрузку с браузера и делает поведение сайта предсказуемым.

### 💎 Итог

Полный клиентский парсинг Markdown→RDF **технически возможен**, но он плохо масштабируется, не даёт воспроизводимости и перекладывает на браузер работу, которую эффективнее сделать один раз. Разделение на сборку (GitHub Actions) и выполнение (Oxigraph WASM) — это компромисс, который сохраняет **клиентский SPARQL** (то, что вы хотели), но избавляет от необходимости каждый раз парсить всю базу заново. Если ваша база небольшая (десятки заметок), можно попробовать и полностью клиентский вариант — но для растущего Zettelkasten сборка в CI остаётся более надёжным решением.

### 🔗 Ссылки

- mdld-parse (npm) — https://www.npmjs.com/package/mdld-parse
- vault-triplifier (npm) — https://www.npmjs.com/package/vault-triplifier
- Markdown-LD (GitHub) — https://github.com/ozekik/markdown-ld
- Oxigraph (npm) — https://www.npmjs.com/package/oxigraph

Продолжение см. https://github.com/bpmbpm/doc/blob/main/LD2/ZK/ver1/mdld-parse1.md 
