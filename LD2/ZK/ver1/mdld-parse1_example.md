##1 
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

## 2

[alice] <tag:alice@example.com,2026:>

# Заметки о встрече {=alice:meeting-2026-01-15 .alice:Meeting label}

Участники:
- **Alice** {+alice:alice ?alice:attendee .alice:Person label}
- **Bob** {+alice:bob ?alice:attendee .alice:Person label}

Задачи:
- **Проверить предложение** {+alice:task-1 ?alice:actionItem .alice:Task label}
