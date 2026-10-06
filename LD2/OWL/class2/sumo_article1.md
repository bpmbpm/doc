## 1

Напиши статью для Чайников, под названием "SUMO & Plato", в которой бы на простых примерах показывалась бы теория миров Платона на онтологии SUMO.  При этом нужно давать вкрапления теории про семантический триплет, RDF (выделять RDF-объект - чтобы не путать его с "объект" в других интерпретациях).  Расказать какие еще есть онтологии и почему выбрали SUMO. В статье должно быть много ссылок (пруфов). 
Основные посылы (положения, постулаты) должны быть написаны в двух вариантах: первый - "для чайников" (простым языком) и ниже второй - на инженерном языке (для знакомых с Linked Data).

- https://github.com/bpmbpm/doc/blob/main/LD2/OWL/class2/all_for_plato1.md
- https://www.perplexity.ai/search/78cb006c-319f-4501-8b8f-ec5dd22b7913
- https://github.com/ontologyportal/sumo


# SUMO & Plato

## Онтология миров простыми словами

Эта статья показывает, как идею Платона о различии **мира идей** и **мира вещей** можно выразить с помощью верхнеуровневой онтологии SUMO и RDF-графа.

Важно сразу оговориться:

> SUMO не является «онтологией Платона» и не утверждает буквально существование двух платоновских миров. Но её верхняя иерархия даёт удобный технический каркас для такого моделирования.

SUMO начинается с корневой категории `Entity`, которая делится на `Physical` и `Abstract`. `Physical` включает `Object` и `Process`, а `Abstract` — среди прочего, классы, отношения, атрибуты и другие абстрактные сущности. [ontology.nps](https://ontology.nps.edu/sigma/TreeView.jsp?lang=EnglishLanguage&flang=SUO-KIF&kb=SUMO&file=Mid-level-ontology.kif&line=4279)

***

# 1. Идея статьи

## Для чайников

У Платона можно выделить две стороны реальности:

```text
мир идей:
    Person, Book, Student, Reading

мир вещей:
    Алиса, Боб, конкретная книга,
    конкретное чтение с 12:00 до 14:00
```

Идея `Person` — не конкретный человек.

Конкретная Алиса — не сама идея `Person`.

Алиса может соответствовать идее человека:

```text
Алиса относится к категории Person.
```

Проще говоря:

```text
идея — это образ или форма;
вещь — конкретное проявление этой формы.
```

## Для инженеров Linked Data

O2P выделяет два функциональных уровня:

```text
Category — категория или универсальная форма;
Instance — конкретная сущность, соответствующая категории.
```

Основные отношения:

```text
o2p:isInstance: Instance → Category
o2p:isSubClass: Category → Category
```

В терминах множеств:

```text
o2p:isInstance ⊆ ΔInstance × ΔCategory

o2p:isSubClass ⊆ ΔCategory × ΔCategory
```

SUMO используется как верхнеонтологическая основа:

```text
Category  → SUMO Class / SetOrClass
Object    → SUMO Object
Process   → SUMO Process
Predicate  → SUMO Relation
```

***

# 2. Платон: идеи и вещи

## Для чайников

Представьте идею «книга».

Идея `Book` — это не одна книга на полке. Это общий образ, по которому мы понимаем, что разные предметы являются книгами.

Например:

```text
Book — идея или категория
book123 — конкретная книга
book456 — другая конкретная книга
```

Обе книги могут быть разными по цвету, размеру и содержанию, но относиться к одной категории:

```text
book123 → Book
book456 → Book
```

## Для инженеров Linked Data

В платоновской терминологии можно провести такое приближённое соответствие:

| Платоновское понятие | O2P | SUMO |
|---|---|---|
| Форма или идея | Category | Class / SetOrClass |
| Чувственная вещь | Instance/Object | Object |
| Происходящее изменение | Instance/Process | Process |
| Участие вещи в форме | `o2p:isInstance` | `instance` |
| Отношение между формами | `o2p:isSubClass` | `subclass` |

Платон противопоставлял неизменные Формы изменяющимся материальным частностям. Формы описываются как нематериальные, внепространственные и вневременные, а частности — как материальные, пространственные и изменяющиеся. [plato.stanford](https://plato.stanford.edu/archives/spr2019/entries/plato-metaphysics/)

Важно: это философская аналогия, а не утверждение, что SUMO формально доказывает платоновскую метафизику.

***

# 3. Что такое SUMO

## Для чайников

SUMO — это большая формальная «карта понятий», которая пытается ответить на вопросы:

```text
Что вообще существует в модели?
Какие бывают виды сущностей?
Что является физическим?
Что является абстрактным?
Что такое объект?
Что такое процесс?
Что такое отношение?
```

SUMO использует корень:

```text
Entity
```

От него идут две главные ветви:

```text
Entity
├── Physical
└── Abstract
```

## Для инженеров Linked Data

SUMO — Suggested Upper Merged Ontology, формальная верхнеуровневая онтология. Она записывается в SUO-KIF и также доступна через OWL-представления и инструменты Sigma. [ontologyportal](https://www.ontologyportal.org/)

Упрощённая структура:

```text
Entity
├── Physical
│   ├── Object
│   └── Process
│
└── Abstract
    ├── SetOrClass
    │   └── Class
    ├── Relation
    ├── Attribute
    ├── Quantity
    └── Proposition
```

Прямые источники SUMO:

- [Официальный портал SUMO](https://www.ontologyportal.org/). [ontologyportal](https://www.ontologyportal.org/)
- [Репозиторий SUMO на GitHub](https://github.com/ontologyportal/sumo). [github](https://github.com/ontologyportal/sumo/blob/master/Merge.kif)
- [SUMO в браузере Sigma](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO). [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO)
- [Описание `Entity`](https://ontology.nps.edu/sigma/TreeView.jsp?lang=EnglishLanguage&flang=SUO-KIF&kb=SUMO&file=Mid-level-ontology.kif&line=4279). [ontology.nps](https://ontology.nps.edu/sigma/TreeView.jsp?lang=EnglishLanguage&flang=SUO-KIF&kb=SUMO&file=Mid-level-ontology.kif&line=4279)
- [Описание `Physical`](https://sigma.ontologyportal.org:8443/sigma/Browse.jsp?lang=en&kb=SUMO&term=Physical). [sigma.ontologyportal](https://sigma.ontologyportal.org:8443/sigma/Browse.jsp?lang=en&kb=SUMO&term=Physical)
- [Описание `Process`](https://ontology.nps.edu/sigma/Browse.jsp?lang=EnglishLanguage&flang=KIF&kb=SUMO&term=Process). [ontology.nps](https://ontology.nps.edu/sigma/Browse.jsp?lang=EnglishLanguage&flang=KIF&kb=SUMO&term=Process)
- [Описание `instance`](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&term=instance). [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&term=instance)
- [Файл `Merge.kif`](https://github.com/ontologyportal/sumo/blob/master/Merge.kif). [github](https://github.com/ontologyportal/sumo/blob/master/Merge.kif)

***

# 4. `Entity`: корень SUMO

## Для чайников

`Entity` — это самый общий класс SUMO.

Он включает и физические, и абстрактные сущности:

```text
книга — Entity
чтение — Entity
число — Entity
класс — Entity
отношение — Entity
```

## Для инженеров Linked Data

В SUMO `Entity` описывается как универсальный класс индивидов и корневой узел онтологии. [ontology.nps](https://ontology.nps.edu/sigma/TreeView.jsp?lang=EnglishLanguage&flang=SUO-KIF&kb=SUMO&file=Mid-level-ontology.kif&line=4279)

Формально:

```text
Physical ⊆ Entity
Abstract ⊆ Entity
```

В терминах O2P:

```text
o2p:Category ⊆ Entity
o2p:Instance ⊆ Entity
o2p:Predicate ⊆ Entity
```

Но O2P не следует считать прямой заменой SUMO. O2P вводит собственные роли поверх SUMO.

***

# 5. `Physical`: мир вещей и процессов

## Для чайников

`Physical` — это всё, что существует в пространстве и времени или происходит в пространстве и времени.

В него входят:

```text
вещи;
люди;
книги;
здания;
движения;
чтение;
строительство;
разговоры.
```

Поэтому «мир вещей» в O2P лучше понимать широко:

```text
мир вещей и происходящего.
```

## Для инженеров Linked Data

SUMO определяет `Physical` через наличие положения в пространстве-времени. В этой ветви различаются:

```text
Object
Process
```

Прямая ссылка: [SUMO Physical в Sigma](https://sigma.ontologyportal.org:8443/sigma/Browse.jsp?lang=en&kb=SUMO&term=Physical). [sigma.ontologyportal](https://sigma.ontologyportal.org:8443/sigma/Browse.jsp?lang=en&kb=SUMO&term=Physical)

O2P отображает:

```text
SUMO Object  → устойчивый экземпляр;
SUMO Process → динамический экземпляр.
```

Таким образом:

```text
мир экземпляров O2P не ограничивается Object;
он включает также Process.
```

***

# 6. `Object`: конкретная вещь

## Для чайников

`Object` — это конкретная относительно устойчивая вещь:

```text
Алиса;
Боб;
книга;
здание;
автомобиль.
```

## Для инженеров Linked Data

В O2P:

```turtle
ex:alice
ex:bob
ex:book123
```

могут обозначать экземпляры SUMO `Object`.

Пример:

```turtle
@prefix o2p: <https://github.com/bpmbpm/ontology/o2p#> .
@prefix ex:  <https://example.org/> .
@prefix sumo: <http://www.ontologyportal.org/SUMO.owl#> .

ex:alice
    o2p:isInstance sumo:Object .

ex:book123
    o2p:isInstance sumo:Object .
```

Это запись O2P, а не стандартная SUMO-запись. В самом SUMO отношение было бы концептуально ближе к:

```lisp
(instance alice Object)
(instance book123 Object)
```

***

# 7. `Process`: динамическая вещь

## Для чайников

Процесс — это не просто «свойство вещи». Это происходящее событие:

```text
Алиса читает книгу;
автомобиль едет;
машина производит деталь;
студент сдаёт экзамен.
```

У процесса есть:

```text
начало;
конец;
участники;
объект действия;
состояния или этапы.
```

## Для инженеров Linked Data

В SUMO `Process` является частью `Physical`, но отличается от `Object` тем, что происходит во времени и имеет стадии или временные части. [ontology.nps](https://ontology.nps.edu/sigma/Browse.jsp?lang=EnglishLanguage&flang=KIF&kb=SUMO&term=Process)

В O2P:

```text
o2p:ReadingProcess — категория процесса;
ex:reading_20261006 — экземпляр процесса.
```

Пример:

```turtle
@prefix o2p: <https://github.com/bpmbpm/ontology/o2p#> .
@prefix ex:  <https://example.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

o2p:ReadingProcess
    o2p:isSubClass sumo:Process ;
    o2p:hasProperty o2p:hasParticipant ;
    o2p:hasProperty o2p:hasObject ;
    o2p:hasProperty o2p:startsAt ;
    o2p:hasProperty o2p:endsAt .

ex:reading_20261006
    o2p:isInstance o2p:ReadingProcess ;
    o2p:hasParticipant ex:alice ;
    o2p:hasObject ex:book123 ;
    o2p:startsAt
        "2026-10-06T12:00:00+03:00"^^xsd:dateTime ;
    o2p:endsAt
        "2026-10-06T14:00:00+03:00"^^xsd:dateTime .
```

Читается так:

```text
o2p:ReadingProcess — образ или категория процесса чтения.

ex:reading_20261006 — конкретное чтение,
начавшееся в 12:00 и завершившееся в 14:00.
```

***

# 8. `Abstract`: мир идей и абстракций

## Для чайников

`Abstract` — это то, что нельзя положить на стол как физическую вещь:

```text
категория Person;
отношение isInstance;
число 5;
цвет как понятие;
правило;
высказывание.
```

Это ближе всего к «миру идей», но не полностью совпадает с ним.

## Для инженеров Linked Data

В SUMO:

```text
Abstract ⊆ Entity
```

В ветви `Abstract` находятся разные виды нематериальных сущностей:

```text
Class
Relation
Attribute
Quantity
Proposition
```

Поэтому O2P должен использовать не весь `Abstract`, а отдельные его части:

```text
O2P Category ⊆ SUMO Class
O2P Property  ⊆ SUMO Relation
O2P Attribute ⊆ SUMO Attribute
O2P Quantity  ⊆ SUMO Quantity
```

Именно поэтому корректнее писать:

```text
мир категорий O2P — часть SUMO Abstract
```

а не:

```text
мир категорий O2P = весь SUMO Abstract
```

***

# 9. Категория как «образ»

## Для чайников

Категория — это общий образ, по которому мы объединяем разные вещи.

Например:

```text
Person
```

объединяет Алису и Боба.

```text
Book
```

объединяет разные книги.

```text
ReadingProcess
```

объединяет разные случаи чтения.

## Для инженеров Linked Data

O2P использует:

```text
Category ⊆ SUMO Class / SetOrClass
```

Категория имеет множество соответствующих экземпляров:

```text
ext(Person)
ext(Book)
ext(ReadingProcess)
```

Пример:

```text
ex:alice ∈ ext(o2p:Person)
ex:bob ∈ ext(o2p:Person)
ex:reading_20261006 ∈ ext(o2p:ReadingProcess)
```

Связь выражается предикатом:

```turtle
ex:alice o2p:isInstance o2p:Person .
```

В SUMO ближайший прототип:

```lisp
(instance alice Person)
```

Описание отношения `instance` есть в [Sigma SUMO](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&term=instance). [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&term=instance)

***

# 10. RDF: как записываются утверждения

## Для чайников

RDF записывает факт в виде трёх частей:

```text
кто — что делает или имеет — с чем
```

Например:

```turtle
ex:alice foaf:name "Алиса"@ru .
```

Это означает:

```text
Алиса имеет имя «Алиса».
```

## Для инженеров Linked Data

RDF-тройка имеет форму:

```text
<subject> <predicate> <object>
```

Например:

```turtle
ex:alice foaf:name "Алиса"@ru .
```

| RDF-компонент | Значение |
|---|---|
| subject | `ex:alice` |
| predicate | `foaf:name` |
| object | `"Алиса"@ru` |

RDF Primer прямо определяет утверждение как отношение между субъектом и объектом, связанное предикатом. Три компонента образуют RDF-тройку. [w3](https://www.w3.org/TR/rdf11-primer/)

RDF Turtle описывает граф как множество таких троек. [w3](https://www.w3.org/TR/turtle/)

## Важное различие: RDF-объект

Термин **RDF-объект** означает только третий элемент RDF-тройки.

Например:

```turtle
ex:book123 o2p:hasAuthor ex:alice .
```

Здесь:

```text
ex:book123 — RDF subject;
o2p:hasAuthor — RDF predicate;
ex:alice — RDF object.
```

Но RDF-объект может быть литералом:

```turtle
ex:alice foaf:name "Алиса"@ru .
```

Здесь `"Алиса"` — RDF object, но не SUMO `Object`.

Поэтому:

```text
RDF object ≠ SUMO Object
```

Это принципиально разные употребления слова «объект».

- **RDF object** — позиция в тройке.
- **SUMO Object** — онтологическая категория физической сущности.
- **O2P Instance** — конкретная сущность, соответствующая категории.

RDF-спецификация отдельно различает RDF-термы: субъект должен быть IRI или blank node, предикат — IRI, объект — IRI, blank node или literal. [w3](https://www.w3.org/TR/turtle/)

***

# 11. Три типа утверждений O2P

## Для чайников

В O2P есть три вида фактов:

```text
1. Категория связана с категорией.
2. Конкретная вещь связана с другой вещью или значением.
3. Конкретная вещь относится к категории.
```

Примеры:

```turtle
o2p:Student o2p:isSubClass o2p:Person .
ex:book123 o2p:hasAuthor ex:alice .
ex:alice o2p:isInstance o2p:Person .
```

## Для инженеров Linked Data

Вводятся три класса предикатов:

```text
IdeaAssertionProperty
ThingAssertionProperty
BridgeProperty
```

### Тип I: внутри мира категорий

```text
<Category> <IdeaAssertionProperty> <Category or Property>
```

Примеры:

```turtle
o2p:Student o2p:isSubClass o2p:Person .
o2p:Person o2p:hasProperty foaf:name .
```

Сигнатуры:

```text
o2p:isSubClass: Category × Category
o2p:hasProperty: Category × Property
```

### Тип II: внутри мира экземпляров

```text
<Instance> <ThingAssertionProperty> <Instance or Literal>
```

Примеры:

```turtle
ex:book123 o2p:hasAuthor ex:alice .
ex:alice foaf:name "Алиса"@ru .
ex:reading_20261006 o2p:hasParticipant ex:alice .
```

Сигнатуры:

```text
o2p:hasAuthor: Instance × Instance
foaf:name: Instance × Data
o2p:hasParticipant: ProcessInstance × ObjectInstance
```

### Тип III: связь категории и экземпляра

```text
<Instance> <BridgeProperty> <Category>
```

Примеры:

```turtle
ex:alice o2p:isInstance o2p:Person .
ex:reading_20261006 o2p:isInstance o2p:ReadingProcess .
```

Сигнатура:

```text
o2p:isInstance: Instance × Category
```

***

# 12. Полный пример

```turtle
@prefix o2p: <https://github.com/bpmbpm/ontology/o2p#> .
@prefix ex:  <https://example.org/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix sumo: <http://www.ontologyportal.org/SUMO.owl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

#################################################################
# Тип I. Утверждения внутри мира категорий
#################################################################

o2p:Student
    o2p:isSubClass o2p:Person .

o2p:Person
    o2p:hasProperty foaf:name ;
    o2p:hasProperty foaf:familyName .

o2p:ReadingProcess
    o2p:isSubClass sumo:Process ;
    o2p:hasProperty o2p:hasParticipant ;
    o2p:hasProperty o2p:hasObject ;
    o2p:hasProperty o2p:startsAt ;
    o2p:hasProperty o2p:endsAt .

#################################################################
# Тип III. Связи экземпляров с категориями
#################################################################

ex:alice
    o2p:isInstance o2p:Student .

ex:bob
    o2p:isInstance o2p:Person .

ex:book123
    o2p:isInstance sumo:Object .

ex:reading_20261006
    o2p:isInstance o2p:ReadingProcess .

#################################################################
# Тип II. Утверждения внутри мира экземпляров
#################################################################

ex:alice
    foaf:name "Алиса"@ru ;
    foaf:familyName "Петрова"@ru ;
    o2p:knows ex:bob .

ex:bob
    foaf:name "Боб"@ru ;
    foaf:familyName "Смит"@ru ;
    o2p:knows ex:alice .

ex:book123
    o2p:hasAuthor ex:alice .

ex:reading_20261006
    o2p:hasParticipant ex:alice ;
    o2p:hasObject ex:book123 ;
    o2p:startsAt
        "2026-10-06T12:00:00+03:00"^^xsd:dateTime ;
    o2p:endsAt
        "2026-10-06T14:00:00+03:00"^^xsd:dateTime .
```

***

# 13. Как предикат показывает тип триплета

## Для чайников

Мы заранее договорились, что разные предикаты используются для разных целей:

```text
isSubClass — для категорий;
hasProperty — для описания категорий;
hasAuthor — для конкретных объектов;
isInstance — для связи объекта с категорией.
```

Поэтому, увидев предикат, можно понять роль тройки.

## Для инженеров Linked Data

Предикаты сами должны иметь метаописания:

```turtle
o2p:isSubClass
    o2p:assertionType o2p:IdeaAssertionProperty ;
    o2p:sourceKind o2p:Category ;
    o2p:targetKind o2p:Category .

o2p:hasProperty
    o2p:assertionType o2p:IdeaAssertionProperty ;
    o2p:sourceKind o2p:Category ;
    o2p:targetKind o2p:Property .

o2p:hasAuthor
    o2p:assertionType o2p:ThingAssertionProperty ;
    o2p:sourceKind o2p:Instance ;
    o2p:targetKind o2p:Instance .

o2p:isInstance
    o2p:assertionType o2p:BridgeProperty ;
    o2p:sourceKind o2p:Instance ;
    o2p:targetKind o2p:Category .
```

Схема:

```text
o2p:isSubClass
    Category → Category

o2p:hasProperty
    Category → Property

o2p:hasAuthor
    Instance → Instance

o2p:isInstance
    Instance → Category
```

Это не является встроенной семантикой RDF. Это метамодель O2P, которую можно проверять через SHACL или специальный reasoner.

SHACL предназначен для проверки RDF-графов по заданным условиям и ограничениям. [w3](https://www.w3.org/TR/shacl/)

***

# 14. IRI: что это такое

## Для чайников

IRI — это глобальное имя.

Например:

```turtle
o2p:Person
ex:alice
o2p:isInstance
```

Это не сами вещи, категории или отношения, а имена, по которым их можно однозначно обозначить.

## Для инженеров Linked Data

IRI — Internationalized Resource Identifier.

В RDF IRI может обозначать ресурс и использоваться:

```text
как субъект;
как предикат;
как объект.
```

Но синтаксическая позиция RDF не определяет онтологическую роль SUMO.

Пример:

```turtle
ex:alice o2p:isInstance o2p:Person .
```

Синтаксически:

```text
ex:alice — RDF subject;
o2p:isInstance — RDF predicate;
o2p:Person — RDF object.
```

Семантически O2P/SUMO:

```text
ex:alice — SUMO Object или Process, то есть Instance;
o2p:isInstance — SUMO Relation;
o2p:Person — SUMO Class, то есть Category.
```

Таблица:

| IRI | O2P-роль | SUMO-роль |
|---|---|---|
| `o2p:Person` | категория | `Class` / `SetOrClass` |
| `o2p:Student` | категория | `Class` |
| `ex:alice` | экземпляр | `Object` |
| `ex:book123` | экземпляр | `Object` |
| `ex:reading_20261006` | экземпляр процесса | `Process` |
| `o2p:isInstance` | предикат-мост | `Relation` |
| `o2p:isSubClass` | предикат категорий | `Relation` |
| `foaf:name` | свойство | `Relation` |
| `"Алиса"` | значение | RDF literal / data value |

***

# 15. Почему выбрана SUMO

## Для чайников

Можно было выбрать только OWL, но OWL плохо показывает разницу между:

```text
категорией;
вещью;
процессом;
отношением;
свойством;
абстрактной сущностью.
```

SUMO сразу предлагает более содержательную картину:

```text
Entity
├── Physical
│   ├── Object
│   └── Process
└── Abstract
    ├── Class
    ├── Relation
    ├── Attribute
    └── Quantity
```

Это удобно для идеи:

```text
категория чтения
конкретное чтение
```

## Для инженеров Linked Data

SUMO выбрана как базовая верхняя онтология по следующим причинам:

| Требование O2P | SUMO |
|---|---|
| Корневой класс сущностей | `Entity` |
| Различение физического и абстрактного | `Physical` / `Abstract` |
| Различение объектов и процессов | `Object` / `Process` |
| Явное представление классов | `Class` / `SetOrClass` |
| Явное представление отношений | `Relation` |
| Отношение экземпляр–класс | `instance` |
| Отношение подкласс–класс | `subclass` |
| Возможность широкого доменного покрытия | Высокая |
| Формальная аксиоматизация | SUO-KIF и OWL-представление |

SUMO создавалась как формальная верхняя онтология и является открытой крупной онтологией с доменными расширениями. [ontologyportal](https://ontologyportal.com/)

***

# 16. Какие ещё есть онтологии

## Для чайников

Есть несколько семейств онтологий.

```text
BFO, DOLCE, GFO — фундаментальные онтологии;

CIDOC CRM — культурное наследие;

SKOS — словари и классификации;

BORO и ISO 15926 — инженерные данные и жизненный цикл;

SUMO — широкая верхняя онтология.
```

## Для инженеров Linked Data

| Онтология | Сильная сторона | Почему не выбрана как единственная база |
|---|---|---|
| OWL 2 DL | строгий reasoning | нет отдельного платоновского домена категорий |
| OWL 2 Full | свободное метамоделирование | слабее вычислимость и контроль |
| BFO | строгие continuant/occurrent | ориентирована на научные домены, особенно биомедицину |
| DOLCE | объекты, процессы, качества, абстракции | не задаёт именно O2P-дихотомию |
| GFO | универсалии, объекты, процессы | сложнее практическая реализация |
| CIDOC CRM | типы и экземпляры, события | ориентирована на культурное наследие |
| SKOS | понятия и иерархии | не описывает физические экземпляры и процессы |
| BORO | 4D-сущности и жизненный цикл | ориентирована на enterprise |
| ISO 15926 | промышленный lifecycle | узкая инженерная специализация |
| SUMO | широкий верхний каркас | требует O2P-слоя для точной двухуровневости |

CIDOC CRM официально предназначена для интеграции данных культурного наследия и содержит формальную структуру сущностей и отношений. [cidoc-crm](https://cidoc-crm.org/)

BFO фокусируется на фундаментальной онтологии для научных предметных областей и намеренно не содержит конкретных терминов отдельных наук. [ontology.buffalo](https://ontology.buffalo.edu/bfo/)

***

# 17. Платон, SUMO и O2P

## Для чайников

Платон говорит:

```text
существуют неизменные идеи;
конкретные вещи изменяются;
вещи можно понимать через идеи.
```

SUMO предлагает технические категории:

```text
Class — образ или категория;
Object — вещь;
Process — происходящее;
instance — связь вещи с категорией.
```

O2P соединяет их:

```turtle
ex:alice o2p:isInstance o2p:Person .
```

То есть:

```text
Алиса — конкретное проявление категории Person.
```

## Для инженеров Linked Data

Платоновская аналогия:

```text
Platonic Form ≈ SUMO Class / O2P Category
Platonic Particular ≈ SUMO Object / O2P Instance
Platonic Event ≈ SUMO Process / O2P ProcessInstance
Participation ≈ o2p:isInstance
```

Платон противопоставлял неизменные Формы изменяющимся материальным частностям. Формы являются объектами знания, а частности — объектами чувственного восприятия и мнения. [plato.stanford](https://plato.stanford.edu/archives/spr2019/entries/plato-metaphysics/)

Но SUMO не является платоновской онтологией:

```text
SUMO Abstract шире мира Форм;
SUMO Physical включает процессы;
SUMO не вводит отношения эманации или участия;
SUMO не утверждает метафизический реализм.
```

Поэтому правильная формулировка:

```text
SUMO — технический каркас;
O2P — философско-семантическая интерпретация;
Plato — источник метафорики и постановки задачи.
```

***

# 18. Неоплатонизм

## Для чайников

Неоплатоники представляли реальность как иерархию:

```text
Единое
  ↓
Ум
  ↓
Мировая Душа
  ↓
чувственный мир
```

В этой схеме идеи находятся не просто рядом с вещами, а выступают основаниями их существования и порядка.

## Для инженеров Linked Data

У неоплатоников реальность возникает по ступеням: высший принцип порождает Ум, затем Душу, через которую оформляется чувственный мир. Stanford Encyclopedia of Philosophy описывает `One`, `Nous` и `Soul` как ключевые элементы неоплатонической структуры реальности. [plato.stanford](https://plato.stanford.edu/entries/neoplatonism/)

Для O2P можно было бы добавить:

```text
o2p:emanatesFrom
o2p:grounds
o2p:manifests
o2p:participatesIn
o2p:realizes
```

Но эти отношения не следует смешивать с `o2p:isInstance`.

```text
o2p:isInstance
    — формальная классификация;

o2p:participatesIn
    — философское участие;

o2p:realizes
    — реализация формы;

o2p:grounds
    — отношение основания.
```

SUMO не содержит готовой неоплатонической иерархии, но её `Abstract`, `Physical`, `Class`, `Object` и `Process` могут быть использованы как технический каркас для такого расширения.

***

# 19. Гегель и критика простого разделения миров

## Для чайников

Гегель считал недостаточным представление, будто идеи находятся в одном мире, а вещи — в другом, никак с ним не связанном.

Для него важно, что общее проявляется в конкретном:

```text
общее → особенное → единичное
```

Например:

```text
Person → Student → Alice
```

## Для инженеров Linked Data

Гегелевская интерпретация Платона подчёркивает, что Формы являются универсальными рациональными понятиями, через которые вещи получают определения. Stanford Encyclopedia of Philosophy прямо описывает эту связь Форм, универсальности и конкретных вещей. [plato.stanford](https://plato.stanford.edu/archives/sum2016/entries/hegel-dialectics/)

Для O2P:

```text
o2p:Person
    — универсальная категория;

o2p:Student
    — более специальная категория;

ex:alice
    — единичный экземпляр.
```

Триплеты:

```turtle
o2p:Student o2p:isSubClass o2p:Person .
ex:alice o2p:isInstance o2p:Student .
```

Это не только разнесение по двум «местам», но и цепочка определения:

```text
Person → Student → Alice
```

У Гегеля универсальность, особенность и единичность образуют связанные моменты понятия; Stanford Encyclopedia of Philosophy отдельно отмечает эту триаду. [plato.stanford](https://plato.stanford.edu/entries/hegel/)

***

# 20. Краткие постулаты O2P

## Постулат 1. Категория и экземпляр различны

### Для чайников

`Person` — не человек, а общий образ человека.

`Alice` — конкретный человек.

### Для инженеров Linked Data

```text
o2p:Person ∈ Category
ex:alice ∈ Instance
ex:alice o2p:isInstance o2p:Person
```

SUMO-соответствие:

```text
o2p:Person — Class / SetOrClass
ex:alice — Object
```

## Постулат 2. Процесс тоже может быть экземпляром

### Для чайников

Чтение — это не только идея действия, но и конкретное событие:

```text
чтение книги с 12:00 до 14:00.
```

### Для инженеров Linked Data

```text
o2p:ReadingProcess — ProcessCategory
ex:reading_20261006 — ProcessInstance
```

```turtle
ex:reading_20261006
    o2p:isInstance o2p:ReadingProcess .
```

SUMO:

```text
o2p:ReadingProcess ⊆ Process
ex:reading_20261006 ∈ Process
```

## Постулат 3. RDF-объект не равен SUMO Object

### Для чайников

В RDF слово «объект» означает место в предложении, а в SUMO — вид сущности.

### Для инженеров Linked Data

```text
RDF triple = Subject × Predicate × Object
```

Но:

```text
RDF Object ≠ SUMO Object
```

Пример:

```turtle
ex:alice foaf:name "Алиса"@ru .
```

`"Алиса"` — RDF object, но не SUMO Object.

## Постулат 4. Предикат задаёт тип утверждения

### Для чайников

По предикату можно понять:

```text
говорим ли мы о категориях;
говорим ли мы о конкретных вещах;
связываем ли категорию с экземпляром.
```

### Для инженеров Linked Data

```text
o2p:isSubClass
    Category → Category

o2p:hasProperty
    Category → Property

o2p:hasAuthor
    Instance → Instance

o2p:isInstance
    Instance → Category
```

## Постулат 5. IRI — это имя

### Для чайников

IRI — это адрес или имя, а не сама сущность.

### Для инженеров Linked Data

```text
IRI — идентификатор ресурса;
SUMO Class/Object/Process/Relation — онтологические роли обозначаемых сущностей.
```

***

# 21. Итоговая модель SUMO + O2P

```text
SUMO Entity
├── Physical
│   ├── Object
│   │   ├── ex:alice
│   │   ├── ex:bob
│   │   └── ex:book123
│   │
│   └── Process
│       └── ex:reading_20261006
│
└── Abstract
    ├── Class / SetOrClass
    │   ├── o2p:Person
    │   ├── o2p:Student
    │   └── o2p:ReadingProcess
    │
    └── Relation
        ├── o2p:isInstance
        ├── o2p:isSubClass
        ├── o2p:hasProperty
        └── o2p:hasAuthor
```

Три типа триплетов:

```text
1. Мир категорий:

   o2p:Student o2p:isSubClass o2p:Person .

2. Мир экземпляров:

   ex:book123 o2p:hasAuthor ex:alice .

3. Связь миров:

   ex:alice o2p:isInstance o2p:Person .
```

Финальное соответствие:

```text
SUMO Entity       — корень иерархии;
SUMO Physical     — мир пространственно-временных сущностей;
SUMO Object       — устойчивые вещи;
SUMO Process      — динамические вещи и события;
SUMO Abstract     — абстрактные сущности;
SUMO Class        — категории;
SUMO Relation     — предикаты;
O2P isSubClass    — отношение между категориями;
O2P hasProperty   — свойство категории;
O2P isInstance    — связь конкретного экземпляра с категорией.
```

Главная идея статьи:

```text
SUMO даёт карту сущностей.
RDF даёт форму тройки.
O2P даёт разделение ролей.
Платон даёт философскую интерпретацию.
```

Или ещё короче:

```text
SUMO говорит, что существует.
RDF говорит, как это записать.
O2P говорит, как отличить категорию от экземпляра.
Платон объясняет, зачем различать образ и вещь.
```
