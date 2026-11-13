## 1
https://www.perplexity.ai/session/12428c3d-b8d0-4ee3-83ee-1965e156082b

Составь рассказ о том, что простой человек решил использовать онтологии. И первый же его шаг: задать  "Алиса — человек" столкнулся с проблемой,  в некоторых нет Human и нужно использовать что-то иное (Person), в других - два Human, в третьих есть и Human и Person. Вроде как онтологии должны помочь, но они они оказались очень сложными и совсем разными, для выражения простого  "Алиса — человек". Снабди рассказ ссылками на источники - онтологии, где это сразу можно увидеть. Если что-то подобное (сложность онтологии для решения простых задач или "Алиса — человек" - в разных онтологиях) обсуждалось - дай ссылки.

# Рассказ: «Алиса — человек»

Простой человек решил, что наконец-то пора навести порядок в своих знаниях. У него была обычная задача:

```text
Алиса — человек.
Алисе 10 лет.
```

Он открыл первую попавшуюся «верхнюю онтологию» — ведь именно они, как ему объяснили, должны задавать самые общие категории: сущность, объект, агент, процесс, качество. Верхние онтологии действительно предназначены для описания наиболее общих понятий, независимых от конкретной предметной области. [cw.fel.cvut](https://cw.fel.cvut.cz/old/_media/courses/osw/lecture-08matching-h.pdf)

Он открыл SUMO и с облегчением нашёл слово `Human`.

```lisp
(instance Alice Human)
```

«Отлично, — подумал он, — всё просто».

Но потом заметил, что `Human` в SUMO имеет сразу два родителя: `Hominid` и `CognitiveAgent`.  То есть человек одновременно классифицируется и как биологический гоминид, и как когнитивный агент. Это не два разных класса `Human`, а одна категория с двумя линиями наследования. [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)

Он немного растерялся, но решил: «Ладно, значит `Human` — это человек».

Потом он открыл DOLCE / DUL и не нашёл `Human` в привычном виде. Там был `Person`.

```turtle
ex:Alice a dul:Person .
```

DUL определяет `Person` как агентивный физический объект; то есть акцент уже не на биологическом виде, а на персоне как субъекте, способном действовать. 

Он подумал: «Хорошо, значит `Person` — это человек».

Затем он открыл schema.org:

```turtle
ex:Alice a schema:Person .
```

И FOAF:

```turtle
ex:Alice a foaf:Person .
```

И PROTON:

```turtle
ex:Alice a ptop:Person .
```

Везде было `Person`. Он уже почти успокоился.

Потом открыл Wikidata и увидел сразу два термина:

- `human` — Q5;
- `person` — Q215627.

Причём Wikidata прямо говорит: для конкретного человека нужно использовать `Q5`, а не `Q215627`. 

Он написал:

```sparql
wd:Алиса wdt:P31 wd:Q5 .
```

И снова подумал: «Значит, `human` — это человек».

Но тогда зачем существует `person`?

Он начал читать и понял, что `human` и `person` — не всегда синонимы. `Human` обычно означает биологического представителя Homo sapiens, а `Person` — персону, субъекта, носителя роли или агентности. В биоэтике и праве это различие обсуждается особенно часто: «человек» и «персона» могут расходиться. [nature](https://www.nature.com/articles/s41599-026-09198-1?error=cookies_not_supported&code=2f78cc39-f3e9-4d33-9d15-f0249842e267)

Он открыл BFO. Там всё выглядело ещё строже: BFO задаёт верхние категории вроде `Entity`, `Continuant`, `Independent Continuant`, `Material Entity`, `Object`; а `Person` или `Human` часто появляются уже в прикладных онтологиях, построенных поверх BFO. 

Он открыл Cyc. Там основным термином оказался `Person`:

```lisp
(isa Alice Person)
```

И он снова подумал: «Значит, `Person` — это человек».

Но в SUMO `Person` не было, а был `Human`. В DOLCE, FOAF, schema.org и PROTON был `Person`, а `Human` часто отсутствовал. В Wikidata были и `Human`, и `Person`, но с явным предупреждением, что это разные вещи. [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)

Он открыл GFO, UFO, WordNet, DBpedia, Wikidata, schema.org, FOAF — и увидел, что каждая система по-своему решает, что называть человеком.

Он хотел написать одну простую строчку:

```text
Алиса — человек.
```

А получил вместо этого несколько разных вариантов:

```lisp
(instance Alice Human)
```

```turtle
ex:Alice a dul:Person .
```

```turtle
ex:Alice a schema:Person .
```

```turtle
ex:Alice a foaf:Person .
```

```lisp
(isa Alice Person)
```

```sparql
wd:Алиса wdt:P31 wd:Q5 .
```

Он задумался: если онтологии должны помогать формализовать знания, почему такая простая фраза вызывает столько вопросов?

Ответ оказался неприятным, но понятным: **онтологии не стандартизируют бытовые слова, а формализуют разные точки зрения на мир.**

- SUMO смотрит на человека как на биологический вид и когнитивного агента. [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)
- DOLCE смотрит на человека как на агентивный физический объект. 
- FOAF и schema.org смотрят на человека как на `Person` для веб-данных. 
- Wikidata разделяет биологического человека и персону. 
- BFO задаёт каркас, но не всегда фиксирует `Person` как верхний класс. 

Он понял, что проблема не в том, что онтологии «плохие». Проблема в том, что **простое бытовое слово скрывает сложное онтологическое решение**.

Слово «человек» может означать:

- биологический организм;
- разумного агента;
- персону;
- носителя прав;
- участника социальных отношений;
- конкретного индивида;
- вымышленного персонажа;
- юридическое лицо в переносном смысле.

И каждая онтология выбирает свой способ это моделировать.

Он хотел, чтобы было так:

```text
Человек
├── Алиса
├── Собака
└── Кошка
```

А в реальности получилось:

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

Это SUMO. [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)

Или:

```text
Entity
└── Endurant
    └── PhysicalEndurant
        └── PhysicalObject
            └── AgentivePhysicalObject
                └── Person
```

Это DOLCE / DUL. 

Или:

```text
Thing
└── Person
```

Это schema.org. 

Или:

```text
entity
└── ...
    └── person (Q215627)
        └── human (Q5)
```

Это Wikidata. 

Он понял, что «Алиса — человек» — это не одна аксиома, а целый выбор:

- `Human` или `Person`?
- Биологический человек или персона?
- Агент или организм?
- Индивид или класс?
- Реальный человек или вымышленный персонаж?
- Человек как вид или человек как роль?

И именно здесь начинается настоящая сложность.

## Где это видно сразу

- SUMO: `Human` определяется через `Hominid` и `CognitiveAgent`; это видно прямо в исходном `Merge.kif`. [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)
- DOLCE / DUL: `Person` определяется как агентивный физический объект. 
- schema.org: `Person` — основной класс для человека. 
- FOAF: `Person` — основной класс, а `foaf:age` — свойство возраста. 
- Wikidata: `human` Q5 и `person` Q215627 явно разделены. 
- BFO: верхняя онтология задаёт каркас `Entity → Continuant → Independent Continuant → Material Entity → Object`, а `Person` обычно добавляется в прикладном слое. 
- Cyc: основным термином является `Person`. [ojs.aaai](https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/download/842/760)

## Что понял простой человек

Он понял, что онтологии не «переводят» бытовые фразы в формулы автоматически. Они требуют выбора:

```text
Какое именно «человек» я имею в виду?
```

И только после этого можно выбрать термин:

- `Human`;
- `Person`;
- `Agent`;
- `CognitiveAgent`;
- `Individual`;
- `Organism`.

Он также понял, что «два Human» в SUMO — это не дубликат, а **множественное наследование**: один класс `Human` имеет двух родителей.  Это распространённый приём в онтологиях, но для неподготовленного человека он выглядит как ошибка или дублирование. [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)

В итоге он написал в блокноте:

```text
Задача: Алиса — человек.
Оказалось: это не простая задача.
```

И добавил:

```text
Human ≠ Person
Human ⊂ Person  — иногда
Person ⊂ Human  — иногда
Human ≡ Person  — только если явно объявлено
```

А потом добавил главное:

```text
Онтология не упрощает язык.
Онтология делает неявные различия явными.
```

Именно поэтому фраза «Алиса — человек», которая в быту кажется элементарной, в мире верхних онтологий превращается в выбор между `Human`, `Person`, `Agent`, `CognitiveAgent`, `Individual`, `Organism` и десятками других категорий. [cw.fel.cvut](https://cw.fel.cvut.cz/old/_media/courses/osw/lecture-08matching-h.pdf)

## ver2

# Формализация утверждения «Алиса — человек» в верхних онтологиях

## Постановка задачи

Рассмотрим минимальное утверждение:

\[
\text{Alice} \in \text{Human}
\]

или, в естественно-языковой форме:

```text
Алиса — человек.
```

С точки зрения неподготовленного пользователя это должно быть одно атомарное утверждение: указать индивиду `Alice` и отнести её к классу `Human` либо `Person`. Однако при переходе к верхним онтологиям возникает нетривиальный выбор терминологии, поскольку `Human`, `Person`, `Agent`, `CognitiveAgent`, `Individual` и `Organism` имеют разные формальные семантики и разные позиции в иерархиях.

Ниже рассматриваются основные верхние онтологии и семантические словари, приводятся канонические способы записи утверждения и анализируются причины расхождений.

## Терминологическая проблема

Слова *human* и *person* не являются взаимозаменяемыми во всех онтологиях.

- **`Human`** обычно фиксирует биологическую принадлежность к виду *Homo sapiens*.
- **`Person`** обычно фиксирует статус субъекта, агента или носителя персональности; в некоторых моделях он шире биологического человека.
- **`Agent`** — ещё более общая категория: агентом может быть не только человек, но и организация, программный агент или группа.
- **`CognitiveAgent`** — агент, обладающий когнитивными способностями; в SUMO это одна из родительских категорий `Human`.

Различие между «человеком» и «персоной» особенно заметно в биоэтике и праве, где personhood может определяться через функции, статус или социальное признание, а не только через биологическую принадлежность. [nature](https://www.nature.com/articles/s41599-026-09198-1?error=cookies_not_supported&code=2f78cc39-f3e9-4d33-9d15-f0249842e267)

## Сравнение онтологий

| Онтология / словарь | Класс для «Алиса — человек» | Есть ли `Human`? | Есть ли `Person`? | Рекомендуемая запись | Прямая ссылка на концепт |
|---|---|---:|---:|---|---|
| **SUMO** | `Human` | Да | Нет в `Merge.kif` | `(instance Alice Human)` | [SUMO: Human](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif) — в поиске страницы ввести `Human` |
| **BFO** | Обычно `Human` или `Person` в доменном слое | Зависит от расширения | Зависит от расширения | `ex:Alice a ex:Human .` | [BFO: Entity](http://purl.obolibrary.org/obo/BFO_0000001), [BFO: Object](http://purl.obolibrary.org/obo/BFO_0000030) |
| **DOLCE / DUL** | `Person` | Обычно нет | Да | `ex:Alice a dul:Person .` | [DUL: Person](http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Person) |
| **Cyc** | `Person` | Обычно нет | Да | `(isa Alice Person)` | [Cyc: Person](https://www.cs.auckland.ac.nz/courses/compsci367s2c/archive/2008/resources/cyc.pdf) — в документе найти `#$Person` |
| **PROTON** | `Person` | Обычно нет | Да | `ex:Alice a ptop:Person .` | [PROTON: Person](http://www.ontotext.com/proton/protontop#Person) |
| **schema.org** | `Person` | Нет | Да | `ex:Alice a schema:Person .` | [schema.org: Person](https://schema.org/Person) |
| **FOAF** | `Person` | Нет | Да | `ex:Alice a foaf:Person .` | [FOAF: Person](http://xmlns.com/foaf/0.1/Person) |
| **Wikidata** | `human` Q5 | Да | Да, `person` Q215627 | `wd:Алиса wdt:P31 wd:Q5 .` | [Wikidata: human Q5](https://www.wikidata.org/wiki/Q5), [Wikidata: person Q215627](https://www.wikidata.org/wiki/Q215627) |

В таблице отражён ключевой факт: **SUMO использует `Human`, большинство веб-ориентированных словарей — `Person`, а Wikidata явно различает оба понятия.** 

## SUMO: один Human, две оси наследования

В SUMO нет двух независимых классов `Human`. В базовом файле `Merge.kif` определён один класс `Human`, но он имеет двух непосредственных родителей: 

```lisp
(subclass Human Hominid)
(subclass Human CognitiveAgent)
```

Следовательно, иерархия выглядит так:

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

Это не дублирование класса, а **множественное наследование**: `Human` одновременно классифицируется по биологической линии (`Hominid`) и по линии когнитивных агентов (`CognitiveAgent`). 

Каноническая запись в SUMO:

```lisp
(instance Alice Human)
```

Если требуется выразить возраст, в SUMO предпочтительнее использовать измеримую величину, а не «голое» число:

```lisp
(instance Alice Human)
(age Alice (MeasureFn 10 YearDuration))
```

SUMO выражена на SUO-KIF, упрощённом варианте KIF. 

## SUMO: где был бы Person

Если бы в SUMO вводился отдельный класс `Person`, он логически соответствовал бы не биологической ветке `Hominid`, а агентной ветке `CognitiveAgent`.

Однако `CognitiveAgent` шире, чем `Person`: в него могут входить не только люди, но и другие когнитивные агенты, если это допускает конкретная модель. Поэтому корректнее было бы не переименовать `CognitiveAgent` в `Person`, а добавить `Person` как более узкий класс:

```lisp
(subclass Person CognitiveAgent)
(subclass Person Human)
```

Тогда иерархия выглядела бы так:

```text
CognitiveAgent
└── Person
    └── Human
```

Но в текущей SUMO это избыточно, поскольку `Human` уже является подклассом `CognitiveAgent`. Фактически SUMO моделирует человека как:

```text
Human = биологический гоминид + когнитивный агент
```

а не как пару независимых понятий:

```text
Human = биологический человек
Person = персона / носитель personhood
```

## DOLCE / DUL: Person вместо Human

В DOLCE и её OWL-реализации DUL основным термином является `Person`, а не `Human`.

```turtle
@prefix dul: <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#> .
@prefix ex:  <http://example.org/> .

ex:Alice a dul:Person .
```

Прямая ссылка на класс: [DUL: Person](http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#Person).

В DOLCE `Person` наследуется от `AgentivePhysicalObject`, то есть акцент делается на агентности, а не на биологической таксономии. 

Упрощённая иерархия:

```text
Entity
└── Endurant
    └── PhysicalEndurant
        └── PhysicalObject
            └── AgentivePhysicalObject
                └── Person
```

## BFO: каркас без обязательного Person

BFO задаёт наиболее общие категории: `Entity`, `Continuant`, `Independent Continuant`, `Material Entity`, `Object`. 

Прямые ссылки:

- [BFO: Entity](http://purl.obolibrary.org/obo/BFO_0000001)
- [BFO: Continuant](http://purl.obolibrary.org/obo/BFO_0000002)
- [BFO: Independent Continuant](http://purl.obolibrary.org/obo/BFO_0000004)
- [BFO: Material Entity](http://purl.obolibrary.org/obo/BFO_0000040)
- [BFO: Object](http://purl.obolibrary.org/obo/BFO_0000030)

В BFO-ориентированных прикладных онтологиях `Person` может быть подклассом `bfo:object`; например, в IOF `person` определяется именно как подкласс `bfo:object`. 

Возможная запись:

```turtle
@prefix bfo: <http://purl.obolibrary.org/obo/> .
@prefix ex:  <http://example.org/> .

ex:Alice a ex:Human .
```

Но сам BFO не обязан содержать `Human` или `Person`: он задаёт онтологический каркас, а конкретные классы человека обычно вводятся в доменных расширениях. 

## Cyc: Person как основной термин

В Cyc основным термином является `Person`.

```lisp
(isa Alice Person)
```

Cyc использует термин `Person` как коллекцию, элементы которой являются персонами; в документации Cyc `Person` фигурирует как базовая категория. [ojs.aaai](https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/download/842/760)

Прямая ссылка на документацию: [Cyc: Person](https://www.cs.auckland.ac.nz/courses/compsci367s2c/archive/2008/resources/cyc.pdf) — в документе найти `#$Person`.

## schema.org и FOAF: Person для веб-данных

В schema.org и FOAF используется `Person`.

```turtle
@prefix schema: <https://schema.org/> .
@prefix foaf:   <http://xmlns.com/foaf/0.1/> .
@prefix ex:     <http://example.org/> .

ex:Alice a schema:Person .

ex:Alice a foaf:Person ;
    foaf:age 10 .
```

Прямые ссылки:

- [schema.org: Person](https://schema.org/Person)
- [FOAF: Person](http://xmlns.com/foaf/0.1/Person)
- [FOAF: age](http://xmlns.com/foaf/0.1/age)

В FOAF `foaf:age` определено как функциональное datatype-свойство, предназначенное для указания возраста агента в годах. 

## Wikidata: явное разделение Human и Person

Wikidata — один из немногих крупных семантических ресурсов, где различие между `Human` и `Person` зафиксировано явно.

- [Wikidata: human Q5](https://www.wikidata.org/wiki/Q5) — «любой отдельный представитель Homo sapiens».
- [Wikidata: person Q215627](https://www.wikidata.org/wiki/Q215627) — более общее понятие персоны / personhood.

Для конкретного человека Wikidata рекомендует:

```sparql
wd:Алиса wdt:P31 wd:Q5 .
```

а не:

```sparql
wd:Алиса wdt:P31 wd:Q215627 .
```

Это отражено в документации Wikidata: `human (Q5)` является подклассом `person (Q215627)`, но для реальных людей следует использовать `Q5`. 

Иерархия:

```text
entity
└── ...
    └── person (Q215627)
        └── human (Q5)
```

## Почему возникает расхождение

Расхождение возникает потому, что разные онтологии оптимизированы под разные задачи.

| Онтология | Основная цель | Основной термин | Следствие |
|---|---|---|---|
| SUMO | Формальная логика и общая категоризация | `Human` | Биологическая и когнитивная линии объединены |
| DOLCE / DUL | Философски строгая категоризация | `Person` | Акцент на агентности и эндурантности |
| BFO | Научно-ориентированный каркас | `Object`, `Material Entity` | `Person` обычно в доменном слое |
| Cyc | Контекстные рассуждения | `Person` | Персона как базовая категория |
| schema.org | Веб-разметка | `Person` | Практическая, но упрощённая модель |
| FOAF | Социальные данные | `Person` | Персона как агент |
| Wikidata | Семантическая база знаний | `Human` и `Person` | Явное различение биологического человека и персоны |

Верхние онтологии по определению описывают наиболее общие категории, независимые от конкретной предметной области.  Поэтому они не обязаны предоставлять «бытовой» класс `Человек` в том виде, в каком его ожидает неподготовленный пользователь.

## Причины сбоя при решении простой задачи

Причина не в отсутствии онтологий, а в том, что **бытовая фраза скрывает несколько разных онтологических решений**.

### Причина 1: Human и Person не синонимы

В SUMO `Human` — биологический и когнитивный термин.  В DOLCE, FOAF, schema.org и PROTON `Person` — основной термин для персоны. 

Следовательно, механическая замена:

```text
Human → Person
```

не всегда корректна.

### Причина 2: разные оси классификации

В SUMO `Human` имеет двух родителей: `Hominid` и `CognitiveAgent`.  Это создаёт две независимые оси:

```text
биологическая ось: Hominid → Human
агентная ось:      CognitiveAgent → Human
```

Для пользователя это выглядит как «два Human», хотя формально это один класс с двумя надклассами.

### Причина 3: разная глубина онтологий

BFO остаётся на уровне `Object`, `Material Entity`, `Continuant`; `Person` или `Human` добавляются уже в прикладных онтологиях. 

Поэтому в BFO-ориентированной системе нельзя просто написать:

```turtle
ex:Alice a bfo:Person .
```

если `Person` не определён в используемом словаре.

### Причина 4: разные цели онтологий

- SUMO ориентирован на формальную логику.
- DOLCE — на философскую строгость.
- Cyc — на контекстные рассуждения.
- schema.org и FOAF — на практическую веб-разметку.
- Wikidata — на семантическую базу знаний.

Из-за этого один и тот же бытовой термин получает разные формальные интерпретации.

### Причина 5: неявная семантика слова «человек»

Слово «человек» может означать:

- биологический организм;
- разумного агента;
- персону;
- носителя прав;
- участника социальных отношений;
- конкретного индивида;
- вымышленного персонажа.

Онтологии делают эти различия явными, но для неподготовленного пользователя это превращает простую фразу в нетривиальную задачу.

## Практические рекомендации

| Задача | Рекомендуемый термин | Пример |
|---|---|---|
| Сказать «Алиса — биологический человек» | `Human` / Q5 | `(instance Alice Human)` или `wd:Алиса wdt:P31 wd:Q5 .` |
| Сказать «Алиса — персона / субъект» | `Person` | `ex:Alice a schema:Person .` |
| Сказать «Алиса — агент» | `Agent` | `ex:Alice a ex:Agent .` |
| Сказать «Алиса — организм» | `Organism` | `ex:Alice a ex:Organism .` |
| Сказать «Алиса — не собака и не кошка» | `Human` или `Person` | `ex:Alice a ex:Human .` |

Для SUMO:

```lisp
(instance Alice Human)
```

Для Wikidata:

```sparql
wd:Алиса wdt:P31 wd:Q5 .
```

Для schema.org:

```turtle
ex:Alice a schema:Person .
```

Для FOAF:

```turtle
ex:Alice a foaf:Person ;
    foaf:age 10 .
```

## Вывод

Утверждение «Алиса — человек» кажется элементарным, но в формальных онтологиях оно требует выбора между `Human` и `Person`, а иногда и между `Agent`, `CognitiveAgent`, `Individual` и `Organism`.

- В SUMO правильный термин — `Human`. 
- В DOLCE, FOAF, schema.org, PROTON и Cyc — `Person`. [ojs.aaai](https://ojs.aaai.org/aimagazine/index.php/aimagazine/article/download/842/760)
- В Wikidata различаются `Human` Q5 и `Person` Q215627. 
- В BFO `Person` обычно появляется в прикладном слое, а не в базовой верхней онтологии. 

Главный вывод: **онтологии не упрощают язык, а делают неявные различия явными.** Именно поэтому фраза «Алиса — человек», тривиальная в быту, оказывается нетривиальной в мире верхних онтологий. [nature](https://www.nature.com/articles/s41599-026-09198-1?error=cookies_not_supported&code=2f78cc39-f3e9-4d33-9d15-f0249842e267)

## link
- https://www.nature.com/articles/s41599-026-09198-1
- https://www.wikidata.org/wiki/Q5 ; https://www.wikidata.org/wiki/Q215627
- https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif ; https://www.ontologyportal.org/?__cf_chl_rt_tk=WodhnJvdA4vtJFHC85titJV5HsLzU4O0uKQsiNXPomg-1794575121-1.0.1.1-Q.4blde75VbZXOxXFkC_Y9Y98M_MndjEv1xvg2sgpfg
- https://www.loa.istc.cnr.it/ontologies/DUL.owl
- https://www.cs.ubc.ca/~poole/aibook/2e/html2e/ArtInt2e.Ch14.S3.SS3.html
- https://spec.industrialontologies.org/portal/review/capacity/core/Person.html
- https://cyc.com/wp-content/uploads/2021/04/Cyc-Technology-Overview.pdf
- https://github.com/ozekik/markdown-ld/blob/master/examples/foaf.md
- https://cw.fel.cvut.cz/old/_media/courses/osw/lecture-08matching-h.pdf
- https://www.w3.org/TR/owl-primer/
