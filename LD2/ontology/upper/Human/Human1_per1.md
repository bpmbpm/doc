## 1
Приведи примеры 10 онтологий верхнего уровня, в которых можно задать: Алиса есть человек (персона) и ей 10 лет.

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


---

## 2
Разморим пример, который позволит утверждение «Алиса – человек». Или Персона, т.е. термин, который придает социальный характер, но нам это не важно, главное подчеркнуть, что это не собака и не кошка, а человек (персона).  
Проведи анализ этих терминов Человек или Персона. Фокус на то, что "Алиса – человек" и при этом не нужно делать сложные изыскания, а не про социальный ли характер речь и т.п.   
Задача использование онтологии "простым человеком", а не сложные изыскания.

Для простой онтологии лучше использовать термин **«Человек»** (`Human`), а не «Персона» (`Person`). Он прямо исключает собаку и кошку и не требует решать философский вопрос о социальном статусе, правах или агентности.

## Рекомендуемый вариант

```turtle
@prefix ex: <http://example.org/> .

ex:Алиса a ex:Человек .
```

Или в более привычной OWL/RDF-нотации:

```turtle
ex:Alice a ex:Human .
```

Если нужен возраст:

```turtle
ex:Alice a ex:Human ;
    ex:возраст 10 .
```

## Почему «Человек»

| Критерий | Человек / `Human` | Персона / `Person` |
|---|---|---|
| Основной смысл | Биологический вид: Homo sapiens | Субъект, который может действовать, иметь права, роль, идентичность |
| Исключает собаку и кошку | Да, прямо | Обычно да, но через более абстрактное понятие «агент» |
| Понятно простому пользователю | Да | Не всегда: «персона» может звучать как юридический или социальный термин |
| Подходит для простого примера | Да | Да, но с лишней неоднозначностью |
| Риск неверной интерпретации | Низкий | Средний |

«Человек» — это наиболее прямое утверждение: Алиса принадлежит к людям, а не к собакам, кошкам или другим животным. «Персона» добавляет оттенок «субъекта», «носителя роли» или «участника социальных отношений», что для вашей задачи не нужно.

## Простая иерархия

Для задачи «не собака и не кошка» достаточно такой минимальной схемы:

```text
Существо
├── Человек
├── Собака
└── Кошка
```

Формально:

```turtle
ex:Существо a owl:Class .
ex:Человек a owl:Class ;
    rdfs:subClassOf ex:Существо .

ex:Собака a owl:Class ;
    rdfs:subClassOf ex:Существо .

ex:Кошка a owl:Class ;
    rdfs:subClassOf ex:Существо .

ex:Алиса a ex:Человек .
```

Если нужно явно запретить, чтобы Алиса была одновременно собакой или кошкой, добавляют disjointness:

```turtle
ex:Человек owl:disjointWith ex:Собака , ex:Кошка .
```

Но для базового примера это обычно избыточно: если Алиса уже объявлена `Человек`, а классы правильно устроены, она не должна одновременно быть `Собака` или `Кошка`.

## Когда всё же «Персона»

Термин `Person` уместен, если вы используете готовую онтологию, где он уже является стандартным именем класса:

- `schema:Person` — для веб-данных и описания людей в интернете.
- `foaf:Person` — для социальных связей и профилей.
- `ptop:Person` в PROTON.
- `dul:Person` в DOLCE/DUL.

В этих случаях не стоит изобретать собственный `Human`, если весь остальной словарь уже построен вокруг `Person`. Но семантически это по-прежнему «человек», просто под более абстрактным названием.

## Практическое правило

Для вашего случая:

```text
Алиса — Человек.
Алисе 10 лет.
```

Лучше записать так:

```turtle
ex:Alice a ex:Human ;
    ex:age 10 .
```

А если вы работаете с schema.org, FOAF или другой готовой онтологией, где уже есть `Person`, используйте её термин:

```turtle
ex:Alice a schema:Person ;
    schema:age 10 .
```

То есть: **для самостоятельной простой онтологии — `Человек` / `Human`; для совместимости с популярными веб-онтологиями — `Person`**. В обоих случаях смысл «Алиса не собака и не кошка, а человек» передаётся корректно.

## 2

Не нужно самостоятельной. Задача взять имеющиеся upper онтологии и в них задать очень простое утверждение.  
Также в SUMO есть два Human (т.е. дубликат, что вроде в онтологии - как иерархии быть не должно). Покажи все основные upper онтологии и если в них есть дубликаты - покажи (или одновременно Human и Person или аналогичный класс для выражения Алиса — человек, персона). Может есть другие схожие классы. Также рассмотри как это в wikidata и других семантических wiki.  
Сделай описание проблемы, постановку проблемы и причины сбоя при решении такой простой задачи с помощью популярных  upper онтологий.  

Да: для простого утверждения **«Алиса — человек»** лучше всего использовать уже существующий класс **`Human`** в SUMO, **`Human` (Q5)** в Wikidata или **`Person`** в schema.org/FOAF. Проблема не в том, что онтологии «не умеют» это выразить, а в том, что они по-разному понимают слова *human* и *person* и часто дают несколько близких, но не идентичных классов.

## Постановка задачи

Нужно в готовой верхней онтологии записать минимальный факт:

```text
Алиса — человек.
Алиса — не собака и не кошка.
```

Идеальная запись должна быть:

- простой: одна строка или два тройных утверждения;
- однозначной: без необходимости выбирать между `Human`, `Person`, `Agent`, `Individual` и т. п.;
- совместимой: без создания собственного класса `Human` или `Person`;
- достаточной: прямо исключать животных вроде собаки и кошки.

На практике это часто не получается без выбора конкретной онтологии и понимания её терминологии.

## Главный выбор: Human или Person

| Термин | Что обычно означает | Подходит для «Алиса — человек»? |
|---|---|---|
| `Human` | Биологический представитель вида Homo sapiens | **Да, наиболее прямо** |
| `Person` | Персона, субъект, носитель прав/ролей; в некоторых онтологиях включает вымышленных персонажей | Да, но менее прямо |
| `Agent` | Тот, кто может действовать | Слишком широко: организация тоже агент |
| `Individual` | Отдельная сущность | Слишком широко: собака тоже individual |
| `Animal` | Животное | Слишком широко |
| `Organism` | Живой организм | Слишком широко |

В SUMO `Human` определяется как «современный человек, единственный сохранившийся вид рода Homo», а `Human` одновременно является подклассом `Hominid` и `CognitiveAgent`.  Это не дубликат в смысле двух независимых классов с одним именем: это **множественное наследование**, то есть человек одновременно классифицируется по биологической линии и по линии разумных агентов. [ontologyportal](https://www.ontologyportal.org/SUMOhistory/SUMO1.46.txt)

## Как записать в SUMO

SUMO использует SUO-KIF. [ontologyportal](https://www.ontologyportal.org/)

```lisp
(instance Alice Human)
```

Это уже означает: Алиса — человек, а не собака и не кошка.

Возраст в SUMO лучше выражать через измеримую величину:

```lisp
(instance Alice Human)
(age Alice (MeasureFn 10 YearDuration))
```

Иерархия SUMO вокруг человека:

```text
Entity
└── Physical
    └── Object
        ├── Agent
        │   └── CognitiveAgent
        │       └── Human
        └── OrganicObject
            └── Organism
                └── Animal
                    └── Hominid
                        └── Human
```

То есть в SUMO `Human` имеет **два непосредственных родителя**: `Hominid` и `CognitiveAgent`. Это не ошибка иерархии и не дубликат класса; это осознанная мультиаксиальная классификация. [ontologyportal](https://ontologyportal.org/pubs/Sevcenko.pdf)

## Где возникают «дубликаты»

Настоящая проблема возникает не внутри SUMO, а при сопоставлении разных онтологий и словарей:

| Онтология / словарь | Основной класс | Похожесть |
|---|---|---|
| SUMO | `Human` | Биологический человек |
| BFO-ориентированные онтологии | `Human` или `Person` | Зависит от доменного слоя |
| DOLCE / DUL | `Person` | Персона как агентивный физический объект |
| GFO | `Person` или `Human` | Зависит от версии и модуля |
| UFO | `Person` | Персона как тип агента |
| PROTON | `Person` | Персона как агент |
| schema.org | `Person` | Человек, в том числе исторический или вымышленный |
| FOAF | `Person` | Человек как агент |
| Wikidata | `human` (Q5) | Биологический человек |
| Wikidata | `person` (Q215627) | Более общее понятие персоны |

В Wikidata это различие сделано явно: `human` (Q5) — «любой отдельный представитель Homo sapiens», а `person` (Q215627) — более общее понятие «существа, обладающего personhood»; документация прямо рекомендует для конкретных людей использовать `Q5` через `P31`, а не `Q215627`. [wikidata](https://www.wikidata.org/wiki/Q5)

## Wikidata и семантические вики

В Wikidata правильная минимальная запись:

```sparql
wd:Алиса wdt:P31 wd:Q5 .
```

Или в человекочитаемом виде:

```text
Алиса — instance of — human (Q5)
```

Иерархия:

```text
entity
└── ...
    └── person (Q215627)
        └── human (Q5)
```

Wikidata также связывает `human` (Q5) с `schema:Person` и FOAF `Person` как эквивалентными или близкими классами. [wikidata](https://www.wikidata.org/wiki/Q5)

Но здесь есть известная ловушка: `schema:Person` шире, чем биологический `human`, потому что может включать вымышленных персонажей; поэтому прямое отождествление `Q5 = schema:Person` не вполне корректно. Это отражено в обсуждениях совместимости Wikidata и schema.org. [wikidata](https://www.wikidata.org/wiki/Wikidata:Requests_for_comment/Wikidata_and_schema.org_are_incompatible)

В семантических вики типа Semantic MediaWiki обычно ситуация проще: создают собственный класс `Человек` или `Person` и пишут:

```text
[[Категория:Человек]]
```

или:

```turtle
ex:Алиса a ex:Человек .
```

Но это уже не верхняя онтология, а локальная предметная модель.

## Сводная таблица

| Онтология | Рекомендуемый класс | Запись «Алиса — человек» | Комментарий |
|---|---|---|---|
| SUMO | `Human` | `(instance Alice Human)` | Самый прямой вариант |
| BFO-слой | `Human` или `Person` | `Alice a :Human` | Зависит от конкретной BFO-расширения |
| DOLCE / DUL | `Person` | `Alice a dul:Person` | Персона как агентивный объект |
| GFO | `Person` / `Human` | `Alice a gfo:Person` | Терминология зависит от модуля |
| UFO | `Person` | `Alice a ufo:Person` | Персона как тип агента |
| PROTON | `Person` | `Alice a ptop:Person` | Персона как агент |
| Cyc | `Person` | `(isa Alice Person)` | Персона в широком смысле |
| schema.org | `Person` | `Alice a schema:Person` | Практичный веб-стандарт |
| FOAF | `Person` | `Alice a foaf:Person` | Персона как агент |
| Wikidata | `human` Q5 | `Алиса P31 Q5` | Биологический человек |

## Почему возникает сбой

Причина не в отсутствии онтологий, а в том, что **одна бытовая фраза скрывает несколько разных онтологических решений**.

### Причина 1: «человек» и «персона» — не синонимы

- `Human` — биологическая категория.
- `Person` — категория субъекта, агента, носителя прав или роли.
- `Agent` — ещё более общая категория: может включать организации, ИИ-агентов, группы.

Поэтому фраза «Алиса — человек» в SUMO лучше всего выражается через `Human`, а в DOLCE, FOAF, schema.org — через `Person`. Это не противоречие, а различие в точке зрения.

### Причина 2: верхние онтологии слишком абстрактны

Верхняя онтология должна описывать очень общие категории: сущность, объект, процесс, качество, агент, континуант.  Поэтому она не обязана иметь удобный «бытовой» класс `Человек` в том виде, в каком его ожидает обычный пользователь. [cw.fel.cvut](https://cw.fel.cvut.cz/old/_media/courses/osw/lecture-08matching-h.pdf)

В результате пользователь ищет `Человек`, а находит:

```text
Human
Person
Agent
CognitiveAgent
Individual
Organism
Animal
```

и вынужден выбирать.

### Причина 3: разные онтологии используют разные термины

Одно и то же слово может означать разное:

| Слово | В SUMO | В DOLCE / FOAF | В Wikidata |
|---|---|---|---|
| Human | Биологический человек | Иногда не основной термин | `Q5` |
| Person | Не всегда основной термин | Основной термин | `Q215627`, более общее понятие |
| Agent | Разумный или действующий субъект | Действующий субъект | Более широкий класс |

Из-за этого перенос утверждения из одной онтологии в другую не является механической заменой `Human → Person`.

### Причина 4: множественное наследование выглядит как дублирование

В SUMO `Human` наследуется и от `Hominid`, и от `CognitiveAgent`.  Неподготовленному пользователю это кажется дубликатом: [ontologyportal](https://ontologyportal.org/pubs/Sevcenko.pdf)

```text
Human
├── Hominid
└── CognitiveAgent
```

Но на самом деле это две разные оси классификации:

- биологическая: человек — гоминид;
- когнитивная: человек — разумный агент.

Это не два класса `Human`, а один класс с двумя родителями.

### Причина 5: Wikidata смешивает онтологию и энциклопедию

Wikidata — не классическая строгая верхняя онтология, а семантическая база знаний. Классы там являются обычными элементами, а связи `instance of` и `subclass of` могут сосуществовать с ошибками моделирования, дублированием и историческими компромиссами. [arxiv](https://arxiv.org/html/2411.15550v1)

Например, `human` (Q5) формально является подклассом `person` (Q215627), но для конкретных людей рекомендуется использовать именно `Q5`, а не `Q215627`.  Это правильное решение, но оно неочевидно новичку. [wikidata](https://www.wikidata.org/wiki/Q215627)

## Практический вывод

Если цель — **просто и корректно сказать «Алиса — человек»**, то лучший выбор зависит от системы:

- В **SUMO**: `(instance Alice Human)`.
- В **Wikidata**: `Алиса P31 Q5`.
- В **schema.org / FOAF / DOLCE / PROTON**: `Alice a Person`.
- Не использовать `Agent`, `Individual`, `Organism` или `Animal` как основной класс для Алисы.

Самая понятная модель для неподготовленного пользователя:

```text
Человек
├── Алиса
├── Собака
└── Кошка
```

Но в реальных верхних онтологиях она превращается в:

```text
Human / Person
├── биологическая линия
├── агентная линия
├── социальная линия
└── правовая линия
```

Именно это расхождение между бытовым словом и формальной онтологической терминологией является основной причиной того, что «простая» задача оказывается не такой простой.

## 2.1

По таблице: Одно и то же слово может означать разное:  
В ней же по SUMO должно быть два разных Human.  
В SUMO есть Person? 

Вы правы: в предыдущей таблице я неточно представил SUMO и неполно отразил Cyc и BFO. Ниже — исправленная версия с уточнением: **в базовом SUMO (`Merge.kif`) есть `Human`, но нет отдельного класса `Person`**; «два Human» — скорее всего, путаница с двумя родительскими ветками `Human` либо с классом в дополнительном модуле, а не дубликат одного и того же класса. [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)

## SUMO: Human, а не Person

В текущем `Merge.kif` SUMO определение человека выглядит так: [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)

```lisp
(subclass Human Hominid)
(subclass Human CognitiveAgent)

(documentation Human
  EnglishWrittenLanguage
  "Modern man, the only remaining species of the Homo genus.")
```

То есть `Human` имеет **два непосредственных родителя**:

```text
Entity
└── Physical
    └── Object
        ├── Agent
        │   └── CognitiveAgent
        │       └── Human
        └── OrganicObject
            └── Organism
                └── Animal
                    └── Hominid
                        └── Human
```

Это не два класса `Human`, а **один класс с двумя родительскими осями**: биологической (`Hominid`) и когнитивно-агентной (`CognitiveAgent`). SUMO явно разрешает классу иметь несколько надклассов. [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)

### Полный путь к Human

```text
Entity
└── Physical
    └── Object
        └── SelfConnectedObject
            └── OrganicObject
                └── Organism
                    └── Animal
                        └── Hominid
                            └── Human
```

Параллельный путь:

```text
Entity
└── Physical
    └── Object
        └── Agent
            └── CognitiveAgent
                └── Human
```

### Прямые подклассы Human

Из `Merge.kif` следуют как минимум: [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)

```text
Human
├── Man
├── Woman
└── HumanChild
```

В SUMO `Man` и `Woman` определены через атрибуты пола и являются подклассами `Human`; `HumanChild` также встречается как самостоятельный класс. [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)

### Есть ли Person в SUMO?

В базовом `Merge.kif` класса `Person` нет; документация SUMO использует `Human` как канонический термин. Например, в формализациях на базе SUMO встречается `(instance ?PERSON Human)`, а не `(instance ?PERSON Person)`. [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)

Поэтому для SUMO правильная запись:

```lisp
(instance Alice Human)
```

А не:

```lisp
(instance Alice Person)
```

Если в каком-то инструменте, экспорте или стороннем модуле SUMO видны и `Human`, и `Person`, это, вероятнее всего, результат маппинга, импорта из другой онтологии или использования domain-модуля, а не наличие двух одноимённых классов в ядре SUMO.

## Исправленная таблица

| Онтология | Класс для «Алиса — человек» | Есть ли `Human`? | Есть ли `Person`? | Как записать | Комментарий |
|---|---|---:|---:|---|---|
| **SUMO** | `Human` | Да | Нет в `Merge.kif` | `(instance Alice Human)` | Человек = биологический вид + когнитивный агент |
| **BFO** | Обычно `Human` или `Person` в доменном слое | Иногда | Иногда | `Alice a :Human` | Сам BFO не обязан определять `Person`; он задаёт верхние категории |
| **DOLCE / DUL** | `Person` | Обычно нет | Да | `Alice a dul:Person` | Персона как агентивный физический объект |
| **GFO** | `Person` или `Human` | Зависит от модуля | Да | `Alice a gfo:Person` | Терминология зависит от версии |
| **UFO** | `Person` | Обычно нет | Да | `Alice a ufo:Person` | Персона как тип агента |
| **Cyc** | `Person` | Обычно нет | Да | `(isa Alice Person)` | Персона в широком смысле |
| **PROTON** | `Person` | Обычно нет | Да | `Alice a ptop:Person` | Персона как агент |
| **schema.org** | `Person` | Нет | Да | `Alice a schema:Person` | Практичный веб-словарь |
| **FOAF** | `Person` | Нет | Да | `Alice a foaf:Person` | Персона как агент |
| **Wikidata** | `human` Q5 | Да | Да, `person` Q215627 | `Алиса P31 Q5` | Для конкретного человека — Q5, не Q215627 |

## Почему Cyc и BFO не были в таблице

Это была моя ошибка в предыдущем ответе: я упомянул Cyc и BFO в тексте, но не включил их в сводную таблицу как отдельные строки с корректной терминологией.

- **Cyc** следует включить: его основной термин — `Person`, а не `Human`; запись `(isa Alice Person)` является естественной для CycL.
- **BFO** следует включить с оговоркой: BFO — это действительно верхняя онтология, но она обычно не фиксирует `Person` как собственный верхний класс; `Person` появляется в прикладных или среднеуровневых онтологиях, построенных на BFO. В IOF/BFO-ориентированных спецификациях `person` является подклассом `bfo:object`. 
- **DOLCE, GFO, UFO, PROTON** также следовало показать отдельно, поскольку в них чаще используется `Person`, а не `Human`.

## Почему Human и Person различаются

`Human` и `Person` не обязательно эквивалентны.

```text
Human  = биологический человек, Homo sapiens
Person = персона, субъект, носитель роли или агент
```

В OWL их можно объявить эквивалентными только отдельной аксиомой:

```turtle
:Person owl:equivalentClass :Human .
```

Это означает одновременно:

```turtle
:Person rdfs:subClassOf :Human .
:Human  rdfs:subClassOf :Person .
```

Но без такой аксиомы система не вправе считать `Person` и `Human` синонимами. [w3](https://www.w3.org/TR/owl2-primer/)

## Почему возникает «сбой»

Проблема не в том, что онтологии не могут выразить факт «Алиса — человек». Они могут. Проблема в том, что **разные онтологии выбирают разные основные термины и разные оси классификации**.

| Причина | Что происходит |
|---|---|
| Разные основные термины | SUMO выбирает `Human`, DOLCE/FOAF/schema.org — `Person` |
| Разные оси классификации | SUMO делит человека на биологическую и когнитивную линии |
| Множественное наследование | `Human` имеет двух родителей: `Hominid` и `CognitiveAgent` |
| Разная глубина онтологии | BFO остаётся на уровне `Object`, а `Person` добавляет доменный слой |
| Разные цели | SUMO — формальная логика, Cyc — контекстные рассуждения, schema.org — веб-данные |
| Неявная семантика слов | «Человек» и «персона» в быту кажутся синонимами, в онтологии — нет |

## Практический вывод

Для вашей задачи:

- В **SUMO** пишите: `(instance Alice Human)`.
- В **Cyc** пишите: `(isa Alice Person)`.
- В **DOLCE / FOAF / schema.org / PROTON** пишите: `Alice a Person`.
- В **Wikidata** пишите: `Алиса P31 Q5`, то есть `instance of human`.
- Не используйте `Agent`, `Individual`, `Organism` или `Animal` как основной класс для Алисы.

Главный вывод: **`Human` — наиболее прямой термин для биологического человека; `Person` — наиболее распространённый термин для персоны/агента.** SUMO использует `Human`, большинство практических веб-онтологий — `Person`, а Wikidata разделяет оба понятия явно. [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)

## 3
"Wikidata разделяет оба понятия явно" - Какие онтологии также их разделяют? 
Может быть один из Human в SUMO также следовало бы назвать Person? Какой?

Да. **Явно разделяют `Human` и `Person` немногие онтологии**; чаще используется только один из этих терминов. В SUMO разделяются не два класса `Human`, а **две родительские оси одного класса `Human`**: биологическая и когнитивно-агентная. Если вводить `Person`, то он логичнее всего соответствовал бы именно **когнитивно-агентной** стороне, а не биологической. [nature](https://www.nature.com/articles/s41599-026-09198-1?error=cookies_not_supported&code=2f78cc39-f3e9-4d33-9d15-f0249842e267)

## Кто разделяет Human и Person

| Онтология / словарь | `Human` | `Person` | Разделяет ли явно? | Смысл разделения |
|---|---|---|---|---|
| **Wikidata** | `human` Q5 | `person` Q215627 | **Да** | Q5 — биологический Homo sapiens; Q215627 — более общая персона/personhood |
| **SUMO** | `Human` | Нет в `Merge.kif` | Нет | Есть только `Human`; различие выражено через два родителя |
| **BFO-ориентированные онтологии** | Часто `Homo sapiens` / `human being` | Иногда `Person` | Иногда, на уровне домена | Биологический организм vs носитель ролей, прав, агентности |
| **DOLCE / DUL** | Обычно нет | `Person` | Нет | Используется только `Person` |
| **Cyc** | Обычно нет как отдельного базового класса | `Person` | Нет | Основной термин — `Person` |
| **schema.org** | Нет | `Person` | Нет | Один термин `Person` |
| **FOAF** | Нет | `Person` | Нет | Один термин `Person` |
| **PROTON** | Обычно нет | `Person` | Нет | Один термин `Person` |

Wikidata — наиболее ясный пример разделения: `human (Q5)` определён как «любой отдельный представитель Homo sapiens», а `person (Q215627)` — как существо, обладающее признаками personhood; для конкретного человека Wikidata рекомендует `P31 Q5`, а не `P31 Q215627`. 

## Что в SUMO следовало бы назвать Person

В SUMO нет двух классов `Human`. Есть один `Human` с двумя непосредственными родителями: 

```lisp
(subclass Human Hominid)
(subclass Human CognitiveAgent)
```

То есть структура такая:

```text
                Human
              /      \
        Hominid    CognitiveAgent
           |             |
      биологическая  агентная /
      классификация  когнитивная классификация
```

Если бы в SUMO вводили отдельный `Person`, то он соответствовал бы **не `Hominid`**, а **`CognitiveAgent`**.

### Почему именно CognitiveAgent

`CognitiveAgent` — это агент, обладающий когнитивными способностями; это ближайшая к идее персоны ветка SUMO. `Hominid` — биологическая ветка: человек как вид и организм.

```text
Hominid
└── Human            ← биологический человек

CognitiveAgent
└── Human            ← человек как разумный агент
```

Но важно: `CognitiveAgent` **не равен** `Person`. Он шире: в него могут попадать не только люди, но и другие разумные агенты, если такая моделизация принята. Поэтому корректнее было бы не переименовать `CognitiveAgent` в `Person`, а добавить `Person` как более узкий класс:

```lisp
(subclass Person CognitiveAgent)
(subclass Person Human)
```

И тогда:

```text
CognitiveAgent
└── Person
    └── Human
```

Но в текущей SUMO это избыточно, поскольку `Human` уже является подклассом `CognitiveAgent`. Фактически SUMO выражает идею так:

```text
Human = биологический гоминид + когнитивный агент
```

а не:

```text
Human = биологический человек
Person = персона / носитель personhood
```

## Как выглядела бы «правильная» раздельная модель

Если цель — явно отделить биологическую принадлежность от персоны, модель могла бы быть такой:

```text
Organism
└── Homo sapiens / HumanBeing
        └── HumanPerson
                └── Person
```

Или более нейтрально:

```text
HumanBeing
└── Person
```

Где:

- `HumanBeing` — биологический факт: Алиса принадлежит к Homo sapiens.
- `Person` — статус/роль/агентность: Алиса — субъект, носитель прав, участник отношений.
- `HumanPerson` — пересечение обоих понятий.

Но это уже не текущая SUMO, а проект возможного расширения.

## Почему это важно для Алисы

Для вашего простого утверждения «Алиса — человек, а не собака и не кошка» достаточно:

```lisp
(instance Alice Human)
```

Это уже исключает собаку и кошку, потому что `Human` находится в биологической ветке `Hominid`, а не в ветке собак или кошек. 

Если же вы хотите подчеркнуть не биологию, а **персональность** — что Алиса является субъектом, а не просто организмом, — тогда семантически ближе было бы:

```lisp
(instance Alice CognitiveAgent)
```

Но это менее точно для бытового смысла «человек», поскольку `CognitiveAgent` шире, чем `Human`.

## Практическое правило

- Если нужно сказать **«Алиса — биологический человек»**: используйте `Human` (SUMO) или `Q5` (Wikidata).
- Если нужно сказать **«Алиса — персона / субъект»**: используйте `Person` (DOLCE, FOAF, schema.org, PROTON, Cyc) или `Q215627` (Wikidata).
- Если нужна максимальная простота и совместимость с SUMO: `(instance Alice Human)`.
- Если нужна максимальная простота и совместимость с веб-онтологиями: `Alice a schema:Person` или `Alice a foaf:Person`.

Главный вывод: **в SUMO не нужно переименовывать один из `Human`; нужно понимать, что `Human` уже объединяет биологическую и агентную линии.** Если вводить `Person`, он должен быть связан с `CognitiveAgent`, а не с `Hominid`. [nature](https://www.nature.com/articles/s41599-026-09198-1?error=cookies_not_supported&code=2f78cc39-f3e9-4d33-9d15-f0249842e267)



