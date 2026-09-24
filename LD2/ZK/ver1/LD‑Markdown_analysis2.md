настоящий PIM  
Где находимся. Есть Enterprise базы знаний (SMW, semantic EA, etc) и semantic web.  
Есть домашний сектор, ZettelKasten.  
Как из PIM = Personal Information Manager (management) сделать Personal knowledge management (Manager), PKM   
https://habr.com/ru/articles/754286/

Не про такое: https://soware.ru/categories/personal-information-managers/administrations
управление задачами \ планирование - это всего лишь часть

## deepseek
Markdown – формат ручной разметки, который позволяет оформлять тексты (статьи).
К нему нужно добавить возможность разметки знаний. Основной вариант Linked Data, но рассмотри и другие технологии. 
Сделай полную классификацию (иерархическую), где  
1 встроенный – встраивание информации в файл Markdown  
1.1 кодовые блоки – без дублирования, т.е. знаниевый формат непосредственно  
1.1.1 знаниевый формат максимально понятный человеку   
1.1.2 знаниевый формат сложный, т.е. не очень понятный человеку  
1.2 кодовые блоки –дублируют содержание Markdown  
2 Внешний файл: через парсинг Markdown формируется отдельный файл   
3 другое   
Рассмотри известные подходы, включи в обзор markdown – LD (ozekik), mdld-parse, vauil-ld, json-ld- markdown.  
Кроме универсальных технологий рассмотри семантические плагины к различным Markdown - системам (Wiki, ZettelKasten) – отдельной частью обзора.   
Указывай примеры Markdown и встроенных элементов знаниевой разметки, снабжай комментариями – пояснениями и преимуществами \ недостатками.    

## 1

Ниже представлена полная иерархическая классификация подходов к добавлению семантической (знаниевой) разметки в Markdown. В основе обзора — Linked Data (RDF), но также рассмотрены альтернативные технологии (RDFa, LLM-извлечение). Для каждого подхода приведены примеры, комментарии, преимущества и недостатки.

---

## 1. Встроенная семантика (In-band)

Семантические аннотации находятся **внутри самого Markdown-файла**. Читатель видит обычный текст, а парсер извлекает RDF.

### 1.1. Кодовые блоки и инлайн-аннотации без дублирования содержания

Знаниевый формат **непосредственно** встраивается в текст. Markdown остаётся источником истины, а семантика — его неотъемлемой частью.

#### 1.1.1. Форматы, максимально понятные человеку

Эти форматы используют естественный синтаксис, близкий к обычному тексту. Человек читает заметку и одновременно видит семантические связи.

**MD-LD (Markdown-Linked Data)**

MD-LD — это расширение CommonMark, которое добавляет аннотации в фигурных скобках `{...}`. Спецификация явно подчёркивает принцип: «Уберите все блоки `{...}` — и останется чистый Markdown».

```markdown
[ex] <tag:example.org,2026:>

# Заметки о проекте {=ex:project-alpha .schema:Project name}

[Alice] {+ex:alice ?schema:member .schema:Person name}
[Bob] {+ex:bob ?schema:member .schema:Person name}

- **Спроектировать схему** {+ex:task1 ?schema:hasTask .schema:Task name}
```

**Комментарий:** `[ex] <tag:...>` объявляет префикс через самоопределяемый URI (RFC 4151). `{=ex:project-alpha .schema:Project name}` создаёт субъект `ex:project-alpha` типа `schema:Project` с заголовком из текста. `{+ex:alice ?schema:member ...}` создаёт объект и связывает его с проектом.

**Преимущества:**
- Читается как обычный Markdown, аннотации не мешают восприятию.
- Парсится в RDF-квады, совместимые с RDF/JS (n3.js, rdflib).
- Поддерживает round-trip: `generate()` восстанавливает MD-LD из квадов.
- Работает в браузере (парсер `mdld-parse` имеет размер ~15 КБ).

**Недостатки:**
- Фигурные скобки видны в GitHub-рендеринге как обычный текст.
- Требует дисциплины: все аннотации должны быть явными, «магии» нет.

**Ссылка:** https://www.npmjs.com/package/mdld-parse

**Vault-LD**

Vault-LD использует YAML-LD frontmatter и общий `@context` для превращения всего vault (набора Markdown-файлов) в RDF-граф. Философия: «проза для людей и LLM, триплеты для машин».

```markdown
---
"@context": "https://schema.org/"
"@id": "#hummus"
"@type": "Recipe"
name: "Hummus"
recipeIngredient:
  - "Chickpeas"
  - "Tahini"
---

# Hummus

Классический рецепт хумуса.
```

**Комментарий:** Весь frontmatter — это YAML-LD, который после разрешения контекста становится RDF-триплетами. `@id` задаёт субъект, `@type` — класс, остальные поля — свойства.

**Преимущества:**
- Frontmatter — привычный формат для Obsidian, Jekyll, Hugo.
- Round-trip: RDF → vault → RDF без потерь.
- Естественная интеграция с существующими онтологиями.

**Недостатки:**
- Семантика сосредоточена только в frontmatter, тело заметки не аннотируется.
- Требуется общий `@context.jsonld` в корне vault.

**Ссылка:** https://github.com/The-Knowledge-Graph-Guys/vault-ld

**JSON-LD-Markdown (Extended Schema.org Markdown)**

Расширение Markdown, которое добавляет инлайн-аннотации вида `[текст]@{Type,property=value}`.

```markdown
@context: https://schema.org

# Статья о [RDF](https://www.w3.org/RDF/)@{SoftwareApplication,name=RDF Framework}

Автор: [John Doe]@{Person,givenName=John,familyName=Doe}
```

**Комментарий:** `@{...}` — это аннотация, которая превращается в JSON-LD. Обычные Markdown-рендереры игнорируют её, отображая текст как есть.

**Преимущества:**
- Минимальное расширение синтаксиса Markdown.
- Полная совместимость с обычными рендерерами.
- Целевая аудитория — AI-приложения и SEO.

**Недостатки:**
- Пока не имеет широкой поддержки в сообществе.
- Требует написания собственного парсера.

**Ссылка:** https://github.com/iunera/json-ld-markdown

#### 1.1.2. Форматы, сложные для человеческого восприятия

Семантика встраивается в виде **кодовых блоков**, которые содержат RDF/Turtle напрямую. Человеку такой текст читать трудно, но он остаётся в одном файле с Markdown.

**Markdown-LD (ozekik)**

Этот подход использует **ссылочные ссылки** и кодовые блоки для встраивания RDF. Например, FOAF-онтология может быть описана прямо в Markdown.

```markdown
# FOAF Example

`<http://example.com/>`

## Alice

`<#Alice>`

### Knows

`foaf:knows`

* Bob `<#Bob>`
```

**Комментарий:** Парсер `markdownld` извлекает из этого текста триплет `<#Alice> foaf:knows <#Bob>`. Это «literate programming для Turtle» — RDF живёт внутри Markdown, но в виде, понятном только после компиляции.

**Преимущества:**
- Позволяет публиковать RDF-данные вместе с документацией.
- Поддерживает компиляцию в Turtle и JSON-LD.

**Недостатки:**
- Человеку сложно читать: RDF-фрагменты выглядят как код.
- Требует установки CLI (`npm install -g markdownld`).

**Ссылка:** https://github.com/ozekik/markdown-ld

**Yurtle (yurtle-rdflib)**

Yurtle — это формат, который комбинирует Markdown-контент с Turtle или YAML frontmatter. Каждый `.md` файл становится одновременно и документом, и узлом в графе знаний.

```markdown
@prefix yurtle: <https://yurtle.dev/schema/> .
@prefix pm: <https://yurtle.dev/pm/> .

<urn:task:F-048> a yurtle:WorkItem ;
    pm:status "in-progress" ;
    pm:priority 2 ;
    yurtle:title "Production Hardening" .

# F-048: Production Hardening

Human-readable content here...
```

**Комментарий:** Turtle-блок в начале файла описывает RDF-триплеты, а остальной Markdown — это человекочитаемое описание. Плагин `yurtle-rdflib` позволяет парсить такие файлы через `rdflib` и выполнять SPARQL-запросы.

**Преимущества:**
- Полноценный RDF-граф из Markdown-файлов.
- Двунаправленная синхронизация (graph ↔ filesystem).

**Недостатки:**
- Turtle-блоки не читаются человеком без знания RDF.
- Требует Python и `rdflib`.

**Ссылка:** https://pypi.org/project/yurtle-rdflib/

### 1.2. Кодовые блоки, дублирующие содержание Markdown

Семантика существует **отдельно** от текста, часто в виде JSON-LD или Turtle-блока, который дублирует информацию из frontmatter или тела заметки.

**JSON-LD в `<script>` теге**

Некоторые генераторы (например, Geoff) встраивают JSON-LD прямо в HTML-страницы, а не в Markdown. Но существуют подходы, где JSON-LD-блок добавляется в конец Markdown-файла.

```markdown
# Моя заметка

Это текст заметки о семантическом Zettelkasten.

<!--
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Моя заметка",
  "author": "Alice"
}
-->
```

**Комментарий:** HTML-комментарий скрыт от рендеринга, но может быть извлечён парсером. Семантика дублирует заголовок и автора, которые уже есть в тексте или frontmatter.

**Преимущества:**
- Скрыто от читателя, не нарушает восприятие.
- Полная совместимость с любым Markdown-рендерером.

**Недостатки:**
- Дублирование информации (риск рассинхронизации).
- Нет стандарта для извлечения таких блоков.

---

## 2. Внешняя семантика (Out-of-band)

Markdown-файлы **не содержат** семантических аннотаций. RDF-граф формируется **отдельно**, путём парсинга Markdown или ручного описания.

### 2.1. Парсинг Markdown → RDF

Инструмент читает Markdown, анализирует его структуру (заголовки, ссылки, frontmatter) и генерирует RDF-файл.

**vault-triplifier**

Конвертирует Markdown-файлы и канвасы Obsidian в RDF/Turtle. Использует простой синтаксис с `::` и `[[...]]`.

```markdown
# Team Directory

## Alice Johnson

schema:jobTitle :: Product Manager
schema:email :: alice@company.com
manages :: [[#Bob Smith]]
```

**Комментарий:** После парсинга создаётся RDF-граф с URI для каждой сущности. `[[#Bob Smith]]` преобразуется в ссылку на другой узел.

**Преимущества:**
- Работает с существующими Obsidian-заметками.
- Не требует изменения синтаксиса Markdown.

**Недостатки:**
- Семантика извлекается только из размеченных полей.
- Требует запуска отдельного инструмента.

**Ссылка:** https://github.com/cristianvasquez/vault-triplifier

**Exocortex (Obsidian Plugin)**

Exocortex — это полноценная семантическая система, которая компилирует весь Obsidian-vault (заметки, frontmatter, теги, wikilinks) в RDF-граф. Каждая заметка становится «Asset» с UUID, классом и свойствами.

**Преимущества:**
- Встроен в Obsidian (плагин).
- Поддерживает SPARQL-запросы и онтологии.

**Недостатки:**
- Сложная система, требует изучения.
- Привязан к Obsidian.

**Ссылка:** https://github.com/kitelev/exocortex

**Open Ontologies (Obsidian Plugin)**

Компилирует vault в RDF-граф, поддерживает SHACL-валидацию, вывод (RDFS, OWL 2 DL) и SPARQL-консоль.

**Ссылка:** https://github.com/fabio-rovai/obsidian-open-ontologies

### 2.2. Ручное описание RDF отдельно от Markdown

Вы пишете `.ttl` файл вручную, а Markdown-файлы используются только для документации.

```turtle
@prefix schema: <http://schema.org/> .
@prefix ex: <https://example.org/notes/> .

ex:Note1 a schema:CreativeWork ;
    schema:name "Семантический Zettelkasten" ;
    schema:author "Alice" .
```

**Преимущества:**
- Полный контроль над графом.
- Нет зависимости от парсеров.

**Недостатки:**
- Дублирование информации.
- Ручная синхронизация.

---

## 3. Другие подходы

### 3.1. RDFa в Markdown (через расширения)

Некоторые Python-Markdown расширения позволяют встраивать RDFa Lite прямо в Markdown, который затем рендерится в HTML с семантическими атрибутами.

```markdown
<div vocab="https://schema.org/" typeof="Person">
  <span property="name">Alice</span>
</div>
```

**Преимущества:**
- Работает в HTML-рендеринге.
- Не требует отдельного RDF-файла.

**Недостатки:**
- Привязан к HTML, не к Markdown.
- Плохо переносится между системами.

**Ссылка:** https://github.com/tetherless-world/markdown-rdfa

### 3.2. LLM-извлечение семантики

Markdown-файлы обрабатываются LLM (например, в CI-пайплайне), который автоматически извлекает сущности и связи, формируя RDF/JSON-LD.

```yaml
---
title: "Your Article Title"
entity_hints:
  - label: "RDF"
    type: "schema:Thing"
    sameAs: "https://www.wikidata.org/entity/Q54872"
---
```

**Комментарий:** LLM анализирует текст и генерирует RDF на основе подсказок в frontmatter.

**Преимущества:**
- Минимальная потеря информации (извлекается из обычного текста).
- Не требует ручной разметки.

**Недостатки:**
- Зависимость от LLM (стоимость, недетерминированность).
- Требует настройки пайплайна.

**Ссылка:** https://github.com/lqdev/markdown-ld-kb

---

## 4. Семантические плагины для Markdown-систем (Wiki, Zettelkasten)

| Система | Плагин/инструмент | Что делает | Ссылка |
|---|---|---|---|
| **Obsidian** | Exocortex | RDF-граф, SPARQL, онтологии | https://github.com/kitelev/exocortex |
| **Obsidian** | Open Ontologies | RDF-граф, SHACL, OWL 2 DL | https://github.com/fabio-rovai/obsidian-open-ontologies |
| **Obsidian** | vault-triplifier | Markdown → RDF/Turtle | https://github.com/cristianvasquez/vault-triplifier |
| **Obsidian** | dot-triples-plugin | SPARQL-запросы к заметкам | https://github.com/cristianvasquez/dot-triples-plugin |
| **Logseq** | rdf-export (GitHub Action) | Экспорт графа Logseq в RDF | https://github.com/logseq/rdf-export |
| **Jekyll** | jekyll-rdf | RDF-граф для статических сайтов | https://github.com/AKSW/jekyll-rdf |
| **Wiki.js** | — | (нет специализированных RDF-плагинов) | — |
| **Foam / Dendron** | — | (нет специализированных RDF-плагинов) | — |

**Semantic MediaWiki** (не Markdown, но эталон семантической вики): https://www.semantic-mediawiki.org/

**Cotechnoe SMW** (Semantic MediaWiki для EA): https://www.cotechnoe.com/

**OntoWiki** (семантическая вики-платформа): https://ontowiki.net/

---

## 5. Сводная таблица

| Подход | Уровень | Читаемость | RDF-совместимость | Сложность | Пример |
|---|---|---|---|---|---|
| MD-LD (mdld-parse) | 1.1.1 | Высокая | RDF/JS | Низкая | `{=ex:alice .prov:Person label}` |
| Vault-LD | 1.1.1 | Высокая | YAML-LD | Низкая | YAML frontmatter + @context |
| JSON-LD-Markdown | 1.1.1 | Средняя | JSON-LD | Средняя | `[text]@{Type,prop=val}` |
| Markdown-LD (ozekik) | 1.1.2 | Низкая | Turtle | Средняя | `` `<#Alice>` `` |
| Yurtle | 1.1.2 | Низкая | Turtle | Средняя | Turtle frontmatter |
| JSON-LD в HTML-комментарии | 1.2 | Скрытая | JSON-LD | Низкая | `<!-- {...} -->` |
| vault-triplifier | 2.1 | Высокая | RDF/Turtle | Низкая | `schema:jobTitle :: PM` |
| Exocortex | 2.1 | Высокая | RDF/SPARQL | Высокая | Obsidian plugin |
| LLM-извлечение | 3.2 | Высокая | RDF/JSON-LD | Высокая | CI + GitHub Models |
| RDFa | 3.1 | Средняя | RDFa | Средняя | `<div vocab=...>` |

---

## 6. Заключение

Для семантического Zettelkasten на Markdown наиболее перспективными выглядят:

1. **MD-LD (mdld-parse)** — если нужен человекочитаемый синтаксис, работающий в браузере.
2. **Vault-LD** — если вы уже используете YAML frontmatter и хотите добавить RDF без изменения синтаксиса.
3. **Exocortex / Open Ontologies** — если вы работаете в Obsidian и готовы к более сложной системе.
4. **vault-triplifier** — если нужен простой способ конвертировать существующие заметки в RDF.

Полностью клиентский вариант (без сборки) возможен с **mdld-parse + Oxigraph WASM**. Для больших баз лучше использовать **GitHub Actions** для предварительной сборки RDF-графа.

## 2a

Почему MD-LD (Markdown-Linked Data) считается более понятным (человекочитаемый синтаксис), чем turtle RDF. Откуда такое мнение? Сделай таблицу mapping MD-LD -> turtle RDF.  
Покажи какие есть инструменты как использования MD-LD собственными инструментами, так и его преобразования в turtle RDF.

Вы правы, это ключевой момент для понимания. Утверждение о том, что MD-LD более человекочитаем, чем Turtle, исходит от **авторов и сообщества MD-LD**, и оно основано на конкретных принципах дизайна, а не на субъективном мнении. Суть в том, что **MD-LD встраивает семантику в естественный текст, а Turtle — это формальный язык для описания данных**.

### 🧐 Почему MD-LD считается более читаемым?

Turtle — это **формальный язык сериализации RDF**. Он эффективен для машин, но его синтаксис (точки, скобки, префиксы) не предназначен для чтения человеком как обычный текст. Как отмечается в одном из источников, "человеческое чтение не может напрямую ощутить сеть отношений, и его читаемость плохая".

MD-LD, напротив, следует принципу "literate programming для Turtle/TriG". Его создатели явно позиционируют его как "единственный формат RDF, который одновременно доступен для записи человеком и для парсинга машиной в одном документе. В отличие от Turtle (только для записи), JSON-LD (только для машин) и RDFa (только для встраивания в HTML), аннотации MD-LD сливаются с естественным текстом Markdown". Ключевая идея: "Уберите все блоки `{...}` — и останется чистый Markdown". Это позволяет читать заметку как обычный текст, не отвлекаясь на формальный код.

### 📊 Таблица соответствия: MD-LD → Turtle

| MD-LD (Markdown-Linked Data) | Turtle (RDF) | Пояснение |
| :--- | :--- | :--- |
| `[ex] <tag:ame@example.com,2026:>` | `@prefix ex: <tag:ame@example.com,2026:> .` | Объявление префикса. `[ex]` в MD-LD — это просто объявление, которое не отображается в тексте. |
| `# Alice {=ex:alice .prov:Person label}` | `ex:alice a prov:Person ; rdfs:label "Alice" .` | Заголовок первого уровня становится субъектом (`ex:alice`) с типом `prov:Person` и меткой "Alice". |
| `[Alice Smith] {ex:fullName}` | `ex:alice ex:fullName "Alice Smith" .` | Инлайн-текст в квадратных скобках становится литералом для указанного предиката. |
| `[alice@example.com] {ex:email}` | `ex:alice ex:email "alice@example.com" .` | Аналогично, создаётся триплет с литеральным объектом. |
| `[Bob] {+ex:bob ?ex:knows}` | `ex:alice ex:knows ex:bob .` | `{+ex:bob}` создаёт объект (IRI) `ex:bob`, а `?ex:knows` — предикат, связывающий текущий субъект (`ex:alice`) с этим объектом. |
| `**Review proposal** {+alice:task-1 ?alice:actionItem label}` | `alice:task-1 a alice:Task ; rdfs:label "Review proposal" ; alice:actionItem ex:alice:meeting-2024-01-15 .` | Создаётся новая сущность `task-1`, которая связывается с текущим субъектом (встречей) через `actionItem`. |
| `[2024] {published ^^xsd:gYear}` | `ex:alice ex:published "2024"^^xsd:gYear .` | Указывает тип данных литерала (`^^`). |
| `[Delicious bread] {description @en}` | `ex:alice ex:description "Delicious bread"@en .` | Указывает язык литерала (`@`). |

### 🛠️ Инструменты для работы с MD-LD

Существует несколько инструментов, которые позволяют работать с MD-LD как напрямую, так и конвертировать его в другие форматы.

#### 1. `mdld-parse` (парсер)
Это основной инструмент для работы с MD-LD. Он предоставляет API для парсинга, генерации и объединения MD-LD документов.

*   **Установка**: `npm install mdld-parse`
*   **Использование**: Позволяет получить RDF-квады из MD-LD текста, сгенерировать MD-LD обратно из квадов или объединить несколько документов.
    ```javascript
    import { parse, generate, merge } from 'mdld-parse';

    const result = parse({ text: mdldString });
    console.log(result.quads); // RDF/JS quads
    ```
*   **Ссылка**: https://www.npmjs.com/package/mdld-parse

#### 2. `mdld-convert` (конвертер)
Этот инструмент, как следует из названия, служит шлюзом для преобразования между MD-LD и стандартными RDF-форматами (Turtle, JSON-LD, N-Triples и др.).

*   **Установка**: `npm install mdld-convert`
*   **Использование (CLI)**:
    ```bash
    # MD-LD → Turtle
    cat data.mdld | mdld-convert --to turtle
    # Turtle → MD-LD
    cat data.ttl | mdld-convert turtle mdld-convert
    ```
*   **Ссылка**: https://www.npmjs.com/package/mdld-convert

#### 3. `markdownld` (компилятор)
Этот пакет (от проекта `ozekik/markdown-ld`) предоставляет CLI и плагин для `unified`/`remark` для компиляции Markdown-LD в Turtle и JSON-LD.

*   **Установка**: `npm install -g markdownld`
*   **Использование (CLI)**:
    ```bash
    markdownld input.md -o output.ttl
    ```
*   **Ссылка**: https://npm.io/package/markdownld

### 💎 Итог

MD-LD — это не просто "ещё один синтаксис RDF", а **осознанная попытка сделать RDF доступным для людей**, встраивая его в привычный и читаемый Markdown. Это достигается за счёт использования `{...}` аннотаций, которые не нарушают поток текста. Инструменты вроде `mdld-parse` и `mdld-convert` позволяют легко использовать MD-LD в браузере или конвертировать его в стандартные форматы для дальнейшей обработки.

Если у вас есть другие вопросы по этим инструментам или вы хотите рассмотреть другие подходы, дайте знать.

## 2b

Правильно я понимаю: при указании "Заголовок первого уровня становится субъектом" до "{" становится субъектом (Alice) и все (утверждения, триплеты) в этом разделе относятся именно к этому субъекту (Alice), т.е. он как бы по умолчанию?   
Тогда в "Таблица соответствия:"  тебе нужно было привести комбинированную запись, когда в триплете указывается один раз субъект, а потом через ";" перечисляются только комбинация предикат - объект.  
Непонятно тогда как в этом же разделе указать что-то (утверждение), где Alice не является субъектом (а например, объектом).  
Приведи фрагмент текста с MD-LD, из нескольких разделов и его аналог в turtle RDF.  

Ваше понимание верно: `{=IRI}` устанавливает «текущий субъект», который сохраняется до следующей декларации или сброса `{=}`. Все последующие аннотации без явного нового субъекта будут относиться к нему. Однако MD-LD предоставляет несколько механизмов для работы с утверждениями, где текущий субъект не является подлежащим.

### 🔄 Как указать, что текущий субъект не является подлежащим?

Есть три основных способа:

*   **Обратный предикат (`!p`)**: Меняет направление связи. Если `{?p}` создаёт триплет `S → O`, то `{!p}` создаёт `O → S`. Это ключевой инструмент для ситуаций, когда текущий субъект должен стать **объектом** утверждения.
*   **Явная смена субъекта (`{=IRI}`)**: Просто объявите новый субъект перед нужным утверждением.
*   **Временный объект (`{+IRI}`)**: Создаёт объект, не меняя текущий субъект, что удобно для цепочек связей.

### 📝 Пример: Несколько разделов и их аналог в Turtle

Рассмотрим документ с тремя разделами, демонстрирующими разные сценарии.

#### Исходный текст в MD-LD

```markdown
[ex] <tag:example.org,2026:>

# Проект «Альфа» {=ex:project-alpha .schema:Project name}

[Alice] {+ex:alice ?schema:member .schema:Person name}
[Bob] {+ex:bob ?schema:member .schema:Person name}

# Задача «Дизайн» {=ex:task-design .schema:Task name}

[Проект «Альфа»](tag:example.org,2026:project-alpha) {!schema:hasTask}

# Комментарий {=ex:comment-1 .schema:Comment text}

Автор: [Alice] {+ex:alice !schema:author}
```

#### Сгенерированный RDF (Turtle)

```turtle
@prefix ex: <tag:example.org,2026:> .
@prefix schema: <http://schema.org/> .

ex:project-alpha a schema:Project ;
    schema:name "Проект «Альфа»" ;
    schema:member ex:alice, ex:bob .

ex:alice a schema:Person ;
    schema:name "Alice" .

ex:bob a schema:Person ;
    schema:name "Bob" .

ex:task-design a schema:Task ;
    schema:name "Задача «Дизайн»" ;
    schema:hasTask ex:project-alpha . # Связь установлена через !schema:hasTask

ex:comment-1 a schema:Comment ;
    schema:text "Комментарий" ;
    schema:author ex:alice . # Связь установлена через !schema:author
```

#### Пояснения к примеру

*   **Раздел 1**: `{=ex:project-alpha .schema:Project name}` устанавливает субъект `ex:project-alpha`. Строки `[Alice] {+ex:alice ?schema:member .schema:Person name}` добавляют к нему участников.
*   **Раздел 2**: `{=ex:task-design .schema:Task name}` меняет субъект на `ex:task-design`. Утверждение `[Проект «Альфа»](...) {!schema:hasTask}` **инвертирует** связь: не задача принадлежит проекту, а проект имеет задачу. В Turtle это даёт `ex:task-design schema:hasTask ex:project-alpha`.
*   **Раздел 3**: `{=ex:comment-1 .schema:Comment text}` устанавливает субъект `ex:comment-1`. Утверждение `Автор: [Alice] {+ex:alice !schema:author}` через обратный предикат `!schema:author` создаёт триплет `ex:alice schema:author ex:comment-1`, где комментарий является **объектом**, а Алиса — **субъектом**.

### 💎 Итог

MD-LD остаётся человекочитаемым, поскольку все аннотации локализованы и явны. Обратные предикаты (`!p`) и временные объекты (`{+IRI}`) позволяют гибко описывать связи, не нарушая поток текста.

Если потребуется разобрать другие примеры или синтаксические конструкции, дайте знать.

## 2c
```
[Bob] {+ex:bob ?ex:knows}
```
Разве это не указывает, что кроме ex:alice ex:knows ex:bob .   
Для ex:bob также указан label Bob?


Да, вы поняли всё верно. Аннотация `[Bob] {+ex:bob ?ex:knows}` создаёт **два** следствия: во-первых, она добавляет триплет `ex:alice ex:knows ex:bob` (при условии, что текущим субъектом является `ex:alice`), а во-вторых, она создаёт для `ex:bob` метку (label) со значением `"Bob"`.

### 🔍 Почему так происходит: логика MD-LD

В MD-LD значение для метки (`label`) не берётся из «магии» — оно извлекается из **текста, к которому привязана аннотация**. В вашем примере `[Bob]` — это Markdown-ссылка, которая служит «носителем значения» (value carrier). Согласно спецификации, конструкция `[text] {...}` захватывает текст в квадратных скобках как литерал (`L`).

Когда в аннотации присутствует токен `label` (без префикса), парсер понимает, что этот литерал нужно использовать как объект для предиката `rdfs:label`. Поэтому:

*   `[Bob]` предоставляет литерал `"Bob"`.
*   Токен `label` указывает, что этот литерал становится меткой для того субъекта, к которому относится аннотация.

### 🧩 Как это работает в контексте аннотации

Аннотация `{+ex:bob ?ex:knows}` содержит два элемента:

*   **`+ex:bob`** — это «мягкий объект» (soft object). Согласно синтаксису, `{+IRI}` объявляет **временный объект** для предикатов `?p` или `!p` в рамках данной аннотации. Он становится объектом триплета, но **не меняет текущий субъект** (в отличие от `{=IRI}`).
*   **`?ex:knows`** — это объектный предикат. Он создаёт триплет вида `S → O`, где `S` — текущий субъект (в вашем случае `ex:alice`), а `O` — мягкий объект (`ex:bob`).

Токен `label` в этой же аннотации применяется к **мягкому объекту** (`ex:bob`), потому что именно он является «локальным» субъектом для данной аннотации. Это соответствует общей логике: если в аннотации есть и `{=IRI}`, и `{+IRI}`, то для предикатов типа `p` (литеральных) приоритет отдаётся `{=IRI}`, а для объектных (`?p`) — `{+IRI}`. Здесь же `{=IRI}` отсутствует, поэтому `label` «прилипает» к `ex:bob`.

### 📝 Пример в MD-LD и его аналог в Turtle

**Исходный MD-LD (фрагмент):**

```markdown
# Алиса {=ex:alice .schema:Person name}

[Bob] {+ex:bob ?schema:knows .schema:Person label}
```

**Сгенерированный RDF (Turtle):**

```turtle
@prefix ex: <tag:example.org,2026:> .
@prefix schema: <http://schema.org/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

ex:alice a schema:Person ;
    schema:name "Алиса" ;
    schema:knows ex:bob .          # Триплет из ?schema:knows

ex:bob a schema:Person ;           # Тип из .schema:Person
    rdfs:label "Bob" .             # Метка из токена label + [Bob]
```

### 💎 Итог

Да, ваше предположение абсолютно верно. Аннотация `[Bob] {+ex:bob ?ex:knows}` одновременно:
1.  Создаёт триплет `ex:alice ex:knows ex:bob` (связь).
2.  Создаёт триплет `ex:bob rdfs:label "Bob"` (метка для объекта).
3.  Добавляет `ex:bob` тип `schema:Person` (из `.schema:Person`).

Это соответствует принципу MD-LD: **вся семантика извлекается только из явных аннотаций**, и каждый элемент аннотации (`[Bob]`, `+ex:bob`, `?schema:knows`, `.schema:Person`, `label`) вносит свой вклад в итоговый граф.
