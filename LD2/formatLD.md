## 1 JSON-LD & SVG-LD

JSON-LD — это полноценный инструмент Linked Data, а SVG поддерживает встраивание семантических метаданных через RDF и RDFa.  
Покажу, как в каждой из них подключается онтология.

## JSON-LD: прямая работа с онтологиями

JSON-LD создан именно для связи данных с онтологиями. Через `@context` вы указываете, к каким онтологиям относятся термины, а через `@type` — к какому классу онтологии принадлежит объект.

```json
{
  "@context": [
    "https://schema.org",
    {
      "foaf": "http://xmlns.com/foaf/0.1/",
      "dcterms": "http://purl.org/dc/terms/"
    }
  ],
  "@type": "Person",
  "@id": "https://example.com/people/ivan",
  "foaf:name": "Иван Петров",
  "foaf:knows": {
    "@type": "Person",
    "foaf:name": "Анна Смирнова"
  },
  "dcterms:created": "2026-09-16",
  "jobTitle": "Инженер"
}
```

Здесь одновременно используются три онтологии:
- **Schema.org** (`Person`, `jobTitle`) — через прямой URL в `@context`
- **FOAF** (`foaf:name`, `foaf:knows`) — через префикс
- **Dublin Core Terms** (`dcterms:created`) — через префикс

Каждый ключ однозначно ссылается на URI из онтологии, поэтому машина понимает, что `foaf:name` — это не просто строка «имя», а конкретное свойство из онтологии FOAF.

## SVG: встраивание онтологий через metadata и RDFa

SVG не является форматом Linked Data сам по себе, но в спецификации SVG 1.1 предусмотрены элементы `<metadata>` и `<title>`/`<desc>`, а в SVG 2 добавлена поддержка RDFa. Через них можно подключать онтологии.

### Через элемент `<metadata>` с RDF/XML

```xml
<svg xmlns="http://www.w3.org/2000/svg"
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#"
     xmlns:foaf="http://xmlns.com/foaf/0.1/"
     xmlns:dcterms="http://purl.org/dc/terms/"
     viewBox="0 0 200 200">

  <metadata>
    <rdf:RDF>
      <rdf:Description rdf:about="https://example.com/artworks/logo">
        <rdf:type rdf:resource="http://xmlns.com/foaf/0.1/Image"/>
        <dcterms:title>Логотип компании</dcterms:title>
        <dcterms:creator rdf:resource="https://example.com/people/ivan"/>
        <dcterms:created>2026-09-16</dcterms:created>
      </rdf:Description>
    </rdf:RDF>
  </metadata>

  <circle cx="100" cy="100" r="50" fill="steelblue"/>
</svg>
```

Элемент `<metadata>` может содержать любой RDF-документ. Здесь графический объект описывается с использованием онтологий FOAF и Dublin Core, и любой RDF-парсер извлечёт триплеты из SVG-файла.

### Через RDFa-атрибуты (SVG 2)

SVG 2 поддерживает RDFa-атрибуты (`vocab`, `typeof`, `property`, `resource`), как и HTML5:

```xml
<svg xmlns="http://www.w3.org/2000/svg"
     vocab="https://schema.org/"
     viewBox="0 0 200 200">

  <g typeof="ImageObject"
     resource="https://example.com/artworks/logo">
    <title property="name">Логотип компании</title>
    <desc property="description">Векторный логотип для веб-сайта</desc>
    <circle cx="100" cy="100" r="50" fill="steelblue"/>
  </g>
</svg>
```

Здесь `typeof="ImageObject"` указывает класс из Schema.org, а `property="name"` и `property="description"` — свойства из той же онтологии, привязанные к семантическим элементам `<title>` и `<desc>`.

## В чём реальное сходство

| Аспект | JSON-LD | SVG |
|---|---|---|
| **Связь с онтологиями** | Через `@context` — нативно | Через `<metadata>` + RDF или RDFa-атрибуты |
| **Формат сериализации RDF** | JSON-LD — один из форматов RDF | RDF/XML или RDFa внутри `<metadata>` |
| **Используемые онтологии** | Schema.org, FOAF, Dublin Core и любые другие | Те же — через RDF-встраивание |
| **Цель** | Описание данных для машин | Описание графики + метаданные для машин |

Сходство — **оба позволяют связать контент с онтологиями через RDF**, но JSON-LD делает это как основная задача, а SVG — как дополнительная возможность через встраивание метаданных.
