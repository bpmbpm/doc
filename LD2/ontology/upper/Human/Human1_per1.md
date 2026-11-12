## 1

Ниже — 10 верхнеуровневых онтологий и то, как в каждой естественно записать факт **«Алиса — человек (персона), ей 10 лет»**. Важно: верхняя онтология обычно фиксирует *категориальный каркас* (`Entity → Continuant → Object → Person`), а конкретное свойство `age` часто добавляют в прикладном слое; это одна из причин видимой «нестандартизации» простой задачи. [cs.ubc](https://www.cs.ubc.ca/~poole/aibook/2e/html2e/ArtInt2e.Ch14.S3.SS3.html)

## Сводная таблица

| Онтология | Типичная нотация | Утверждение об Алисе | Путь к `Person` / `Human` |
|---|---|---|---|
| **SUMO** | SUO-KIF | `(instance Alice Human)` и `(age Alice (MeasureFn 10 YearDuration))` | `Entity → Physical → Object → Agent → SentientAgent → Human` |
| **BFO** | OWL 2 / RDF | `:Alice rdf:type :Person ; :hasAge 10` | `Entity → Continuant → Independent Continuant → Material Entity → Object → Person` |
| **DOLCE / DUL** | OWL / RDF | `:Alice rdf:type dul:Person ; :hasAge 10` | `Entity → Endurant → PhysicalEndurant → PhysicalObject → AgentivePhysicalObject → Person` |
| **GFO** | OWL / RDF | `:Alice rdf:type gfo:Person ; :hasAge 10` | `Entity → Individual → MaterialObject → Person` |
| **UFO** | OWL / RDF | `:Alice rdf:type ufo:Person ; :hasAge 10` | `Endurant → Substantial → Object → Agent → Person` |
| **Cyc** | CycL | `(isa Alice Person)` и `(holdsIn ?Interval (age Alice (YearsDuration 10)))` | `Thing → PartiallyTangible → Agent-Generic → Person` |
| **PROTON** | OWL / RDF | `:Alice rdf:type ptop:Person ; :age 10` | `Entity → Object → Agent → Person` |
| **WordNet** | Лексико-семантическая сеть | `Alice instance_of synset(person.n.01)`; возраст — атрибут приложения | `entity → physical_entity → object → living_thing → person` |
| **schema.org** | RDFa / JSON-LD / Turtle | `ex:Alice a schema:Person ; schema:age 10 .` | `Thing → Person` |
| **FOAF** | RDF / Turtle | `ex:Alice a foaf:Person ; foaf:age 10 .` | `foaf:Agent → foaf:Person` |

В SUMO возраст — не просто число, а измеримая величина с единицей измерения; в Cyc возраст принципиально контекстно-временной, поэтому корректная запись требует интервала времени. [publications.lib.chalmers](https://publications.lib.chalmers.se/records/fulltext/116606.pdf)

## 1. SUMO

SUMO использует SUO-KIF; человек обычно моделируется классом `Human`, а возраст — отношением `age` с единицей `YearDuration`. [publications.lib.chalmers](https://publications.lib.chalmers.se/records/fulltext/116606.pdf)

```lisp
(instance Alice Human)

(age Alice (MeasureFn 10 YearDuration))
```

Иерархия (упрощённо):

```text
Entity
└── Physical
    └── Object
        └── Agent
            └── SentientAgent
                └── Human
```

Комментарий: `Human` здесь — биологический и агентивный класс; «персона» как юридический или социальный субъект — отдельная, более узкая концептуализация.

## 2. BFO

BFO — строгая верхняя онтология: `Person` является `Object` в ветке материальных независимых континуантов. [cs.ubc](https://www.cs.ubc.ca/~poole/aibook/2e/html2e/ArtInt2e.Ch14.S3.SS3.html)

```turtle
@prefix bfo: <http://purl.obolibrary.org/obo/> .
@prefix ex:  <http://example.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ex:Alice a bfo:Person ;
    ex:hasAge "10"^^xsd:integer .
```

Иерархия:

```text
Entity
└── Continuant
    └── Independent Continuant
        └── Material Entity
            └── Object
                └── Person
```

Комментарий: в самом BFO нет обязательного свойства `hasAge`; возраст как качество или измерение обычно добавляют в доменной онтологии, потому что BFO намеренно не навязывает прикладные атрибуты. [cs.ubc](https://www.cs.ubc.ca/~poole/aibook/2e/html2e/ArtInt2e.Ch14.S3.SS3.html)

## 3. DOLCE / DUL

DOLCE — философски нагруженная верхняя онтология; в её OWL-реализации DUL `Person` наследуется от агентивного физического объекта. [arxiv](https://arxiv.org/pdf/2308.01597.pdf)

```turtle
@prefix dul: <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#> .
@prefix ex:  <http://example.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ex:Alice a dul:Person ;
    ex:hasAge "10"^^xsd:integer .
```

Иерархия:

```text
Entity
└── Endurant
    └── PhysicalEndurant
        └── PhysicalObject
            └── AgentivePhysicalObject
                └── Person
```

Комментарий: DOLCE различает эндуранты (сохраняют тождество во времени) и пердуранты (процессы/события); человек — эндурант, а его взросление — процесс.

## 4. GFO

General Formal Ontology делает акцент на общих категориях объектов, процессов, качеств и ролей; для практической записи обычно используют OWL-сериализацию.

```turtle
@prefix gfo: <http://www.onto-med.de/ontologies/gfo.owl#> .
@prefix ex:  <http://example.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ex:Alice a gfo:Person ;
    ex:hasAge "10"^^xsd:integer .
```

Иерархия:

```text
Entity
└── Individual
    └── MaterialObject
        └── Person
```

Комментарий: GFO позволяет моделировать возраст и как качество, и как результат процесса старения; выбор зависит от того, нужен ли рассуждающей системе исторический аспект.

## 5. UFO

Unified Foundational Ontology ориентирована на концептуальное моделирование и основана на теории типов; `Person` — тип объекта-агента.

```turtle
@prefix ufo: <http://www.ontologydesignpatterns.org/ont/ufo/ufo.owl#> .
@prefix ex:  <http://example.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ex:Alice a ufo:Person ;
    ex:hasAge "10"^^xsd:integer .
```

Иерархия:

```text
Endurant
└── Substantial
    └── Object
        └── Agent
            └── Person
```

Комментарий: UFO хорошо подходит, когда важны роли, состояния и события: «Алиса — ребёнок» может быть ролью или состоянием, а не неизменным типом.

## 6. Cyc

Cyc использует CycL и требует временного контекста для возраста: утверждение «Алисе 10» истинно лишь в некотором интервале. [cs.auckland.ac](https://www.cs.auckland.ac.nz/courses/compsci367s2c/archive/2008/resources/cyc.pdf)

```lisp
(isa Alice Person)

(holdsIn
  (IntervalFn "2026-01-01" "2026-12-31")
  (age Alice (YearsDuration 10)))
```

Иерархия:

```text
Thing
└── PartiallyTangible
    └── Agent-Generic
        └── Person
```

Комментарий: Cyc не позволяет «навсегда» приписать возраст, поскольку тот меняется; это более точная семантика, но и более тяжёлая для интеграции.

## 7. PROTON

PROTON — лёгкая верхняя онтология для семантических приложений; `Person` наследует от `Agent`. [ontotext](https://www.ontotext.com/documents/proton/Proton-Ver3.0B.pdf)

```turtle
@prefix ptop: <http://www.ontotext.com/proton/protontop#> .
@prefix ex:   <http://example.org/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

ex:Alice a ptop:Person ;
    ex:age "10"^^xsd:integer .
```

Иерархия:

```text
Entity
└── Object
    └── Agent
        └── Person
            ├── Fictional Character
            ├── Man
            ├── Saint
            └── Woman
```

Комментарий: PROTON компактнее философских онтологий, но уже фиксирует социальные/гендерные подклассы, что может быть неудобно для универсальной модели. [ontotext](https://www.ontotext.com/documents/proton/proton-doc.htm)

## 8. WordNet

WordNet — не онтология в строгом OWL-смысле, а лексико-семантическая сеть; для факта об Алисе обычно комбинируют её с RDF/OWL-слоем.

```turtle
@prefix wn: <https://wordnet.princeton.edu/> .
@prefix ex: <http://example.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

ex:Alice a wn:person ;
    ex:hasAge "10"^^xsd:integer .
```

Иерархия:

```text
entity
└── physical_entity
    └── object
        └── living_thing
            └── person
```

Комментарий: WordNet силён для языковой нормализации («человек», «person», «human»), но слаб для строгих аксиом о времени, тождестве и измерениях.

## 9. schema.org

schema.org — практическая веб-онтология, а не полноценная верхняя онтология; nevertheless её часто используют как самый простой стандарт для людей и возраста.

```json-ld
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Алиса",
  "age": 10
}
```

Иерархия:

```text
Thing
└── Person
```

Комментарий: это минимальная, но очень interoperable модель; она не различает биологического человека, правовую персону и агента.

## 10. FOAF

FOAF моделирует людей как агентов и имеет свойство `foaf:age`; оно определено как функциональное datatype-свойство. [github](https://github.com/ozekik/markdown-ld/blob/master/examples/foaf.md)

```turtle
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix ex:   <http://example.org/> .
@prefix xsd:  <http://www.w3.org/2001/XMLSchema#> .

ex:Alice a foaf:Person ;
    foaf:age "10"^^xsd:integer .
```

Иерархия:

```text
foaf:Agent
└── foaf:Person
```

Комментарий: FOAF намеренно узкая онтология для социальных веб-данных; она не претендует описывать материю, процессы, качества или роли.

## Почему нет единого стандарта

Задача «Алиса — человек, ей 10 лет» кажется типовой, но она скрывает несколько разных решений:

- **Что такое «человек»:** биологический `Human`, социальная `Person`, агент `Agent`, правовой субъект или персонаж.
- **Что такое возраст:** число, качество, измерение, временной интервал, отношение к дате рождения или производная величина.
- **Когда возраст истинен:** в BFO/DOLCE возраст можно привязать к моменту или интервалу; в Cyc это почти обязательно; в schema.org и FOAF его часто упрощают до целого числа. [cs.ubc](https://www.cs.ubc.ca/~poole/aibook/2e/html2e/ArtInt2e.Ch14.S3.SS3.html)
- **Какая цель онтологии:** BFO оптимизирован для научных и биомедицинских доменов, DOLCE — для формальной философской семантики, Cyc — для рассуждений с контекстами, PROTON/schema.org/FOAF — для практических семантических веб-приложений. [ontotext](https://www.ontotext.com/documents/proton/Proton-Ver3.0B.pdf)

Поэтому верхние онтологии стандартизируют *категориальную основу* — например, BFO разделяет `Entity` на `Continuant` и `Occurrent`, а человека относит к материальным объектам, — но оставляют прикладные свойства вроде `hasAge` доменным слоям.  Практически это не дефект, а разделение ответственности: верхняя онтология задаёт «что вообще есть», а доменная — «как измерять возраст и какие ограничения на него накладывать». [cs.ubc](https://www.cs.ubc.ca/~poole/aibook/2e/html2e/ArtInt2e.Ch14.S3.SS3.html)
