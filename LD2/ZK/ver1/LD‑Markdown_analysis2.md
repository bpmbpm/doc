настоящий PIM  
Где находимся. Есть Enterprise базы знаний (SMW, semantic EA, etc) и semantic web.  
Есть домашний сектор, ZettelKasten.  

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
