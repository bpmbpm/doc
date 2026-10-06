## 1

perplexity

Наиболее подходящим кандидатом для O2P выглядит не одна готовая верхнеуровневая онтология, а комбинация:

```text
SKOS или CIDOC CRM
        +
DOLCE или GFO
        +
собственная двухуровневая O2P-модель
        +
SHACL для проверки ограничений
```

Если требуется именно строгая пара:

```text
мир категорий / мир экземпляров категорий
```

то лучше всего использовать **CIDOC CRM как образец разделения типов и концептов**, а **DOLCE или GFO — для онтологии вещей, процессов, качеств и зависимых сущностей**. Для историко-философского смысла «идеи как универсалии» особенно полезен CIDOC CRM `E55 Type`; для строгой фундаментальной онтологии вещей и процессов — BFO, DOLCE или GFO. [cidoc-crm](https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html)

## 1. Критерий оценки для O2P

O2P требуется не просто классифицировать вещи, а различать:

```text
Категории:
    Person, Student, Book, Red, Process

Экземпляры категорий:
    Alice, Bob, book123

Отношения между категориями:
    Student isSubClass Person

Отношения экземпляров с категориями:
    Alice isInstance Person

Свойства категорий:
    Person hasProperty name

Значения свойств экземпляров:
    Alice hasName "Алиса"
```

Поэтому готовая онтология должна оцениваться по пяти критериям:

| Критерий | Что требуется O2P |
|---|---|
| Различение универсалий и индивидов | Категория не должна смешиваться с конкретной вещью |
| Метамоделирование | Возможность говорить о категориях как о терминах |
| Типизация отношений | Различение Category–Category, Instance–Category, Instance–Instance |
| Время и процессы | Отдельное моделирование процессов, событий и состояний |
| Практическая реализуемость | Возможность RDF/OWL/SHACL/графовой реализации |

Главная особенность O2P — не просто иерархия классов, а **разделение уровней описания**:

```text
уровень категорий:
    Person, Student, Book

уровень экземпляров:
    Alice, Bob, book123

уровень отношений:
    isInstance, isSubClass, hasProperty
```

# 2. Классы подходов

Перечисленные вами системы относятся к разным типам. Их нельзя напрямую сравнивать как равноправные «онтологии одного класса».

## 2.1. Верхнеуровневые онтологии

Они задают фундаментальные категории существующего:

```text
BFO
DOLCE
GFO
SUMO
Sowa’s Ontology
YAMATO
PROTON
COSMO
Cyc
```

## 2.2. Онтологии инженерии и предприятия

Они ориентированы на сложные инженерные, промышленные или организационные модели:

```text
BORO
IDEAS
ISO 15926
```

## 2.3. Онтологии терминов и классификаций

Они описывают понятия, термины и иерархии концептов:

```text
SKOS
WordNet
UMBEL
Computer Science Ontology
```

## 2.4. Предметные или прикладные модели

```text
CIDOC CRM
PROTON
ROMULUS
```

CIDOC CRM формально ориентирована на культурное наследие, но имеет очень полезную модель различения объектов, событий, типов и названий.

# 3. Сравнительная таблица

| Система | Основная идея | Что считается «вещью» | Что считается «идеей» или категорией | Метамоделирование | Время и процессы | Пригодность для O2P |
|---|---|---|---|---|---|---|
| Sowa’s Ontology | Логико-философская верхняя онтология | Объекты, процессы, ситуации | Универсалии, типы, отношения | Высокое концептуально | Есть | Высокая концептуально, средняя практически |
| Cyc | Большая база здравого смысла | Объекты, события, ситуации | Cyc-контексты, концепты, предикаты | Очень высокое | Есть | Высокая по содержанию, низкая по открытости |
| YAMATO | Формальная инженерная верхняя онтология | Объекты, процессы, качества | Универсалии, типы, зависимые сущности | Высокое | Сильное | Высокая, но сложная |
| BFO | Строгое различение continuant/occurrent | Материальные и нематериальные сущности | Универсалии выражаются через классы | Ограниченное | Очень сильное | Высокая для вещей и процессов, средняя для «мира идей» |
| DOLCE | Лингвистически и когнитивно ориентированная онтология | Endurant | Abstract, Quality, Social Object, категории | Среднее | Сильное | Очень высокая для философского анализа |
| GFO | Разделяет объекты, процессы, пресенталии и универсалии | Objects/continuants | Persistants/universals | Высокое | Сильное | Очень высокая концептуально |
| BORO | Четырёхмерная онтология предприятия | Четырёхмерные пространственно-временные объекты | Классы, типы и экстенты | Высокое | Очень сильное | Высокая для enterprise и lifecycle |
| IDEAS | Формализация enterprise architecture | 4D сущности и типы | Классы и типы архитектуры | Высокое | Очень сильное | Высокая для EA, избыточна для общего O2P |
| ISO 15926 | Жизненный цикл промышленных установок | 4D physical objects, activities | Classes, templates, reference data | Высокое | Очень сильное | Высокая для инженерного O2P |
| SUMO | Большая интегрированная верхняя онтология | Objects, Processes, Attributes | Classes, relations, concepts | Среднее | Есть | Высокая по охвату, средняя по чистоте |
| UMBEL | Связующий слой понятий | Ресурсы и сущности | Reference concepts | Среднее | Ограниченное | Высокая как mapping layer |
| WordNet | Лексико-семантическая сеть | Непосредственно не моделирует вещи | Synsets и лексические понятия | Низкое | Ограниченное | Низкая как фундамент, высокая как словарь |
| CIDOC CRM | Событийная модель культурного наследия | E1 CRM Entity, E77 Persistent Item | E55 Type — концепт/универсалия | Высокое и явное | Очень сильное | Очень высокая |
| COSMO | Объединённая семантическая модель | Вещи, процессы, свойства | Большой словарь классов и отношений | Высокое | Есть | Высокая как семантический словарь |
| SKOS | Система концептов и тезаурусов | Не моделирует физические вещи напрямую | `skos:Concept` | Умеренное | Нет | Очень высокая для мира категорий |
| CSO | Таксономия тем компьютерных наук | Публикации и документы — внешние объекты | Темы исследований | Низкое/среднее | Нет | Низкая как верхняя онтология |
| PROTON | Лёгкая верхняя онтология для Web | Objects, events, agents | Classes and concepts | Среднее | Среднее | Средняя |
| ROMULUS | Сравнимый верхнеонтологический фрагмент | Зависит от базовой онтологии | Зависит от базовой онтологии | Ограниченное | Зависит от фрагмента | Низкая как самостоятельная основа |

# 4. Наиболее подходящие кандидаты

## 4.1. CIDOC CRM

CIDOC CRM — один из самых близких к O2P вариантов.

Особенно важен класс:

```text
E55 Type
```

В CIDOC CRM экземпляры `E55 Type` представляют концепты или универсалии, в отличие от `E41 Appellation`, которые используются для обозначения или наименования экземпляров классов. `E55 Type` служит интерфейсом к предметным онтологиям, тезаурусам и контролируемым словарям. [cidoc-crm](https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html)

Схема CIDOC CRM:

```text
ex:alice crm:P2_has_type o2p:Person .
```

Смысл:

```text
Alice имеет тип Person.
```

Для O2P это очень близко к:

```text
ex:alice o2p:isInstance o2p:Person .
```

Категории можно представить как экземпляры `E55 Type`:

```text
o2p:Person ∈ E55 Type
o2p:Student ∈ E55 Type
```

А связь категорий:

```text
o2p:Student crm:P127_has_broader_term o2p:Person .
```

В O2P:

```text
o2p:Student o2p:isSubClass o2p:Person .
```

### Сходство с O2P

```text
экземпляры явно отделены от типов;
типы представлены как отдельные концепты;
есть иерархия типов;
есть мост к тезаурусам и внешним классификациям;
метамодель не сводится к стандартному rdf:type.
```

### Отличие от O2P

CIDOC CRM не формулирует именно платоновское разделение двух фундаментальных миров. `E55 Type` — это модель типов и понятий, но не отдельный метафизический домен `ΔIdea`.

### Вывод

```text
CIDOC CRM — лучший готовый образец для слоя:
категория ↔ экземпляр категории.
```

## 4.2. SKOS

SKOS специально предназначен для представления концептов, тезаурусов, классификаций и контролируемых словарей.

Пример:

```turtle
o2p:Student skos:broader o2p:Person .
```

SKOS использует:

```text
skos:Concept
skos:broader
skos:narrower
skos:related
skos:ConceptScheme
```

`skos:broader` и `skos:narrower` предназначены для иерархии концептов, но `skos:narrower` не является транзитивным по определению SKOS. [w3](https://www.w3.org/TR/skos-primer/)

Для O2P:

```text
skos:Concept ≈ категория
skos:broader ≈ более общая категория
skos:narrower ≈ более частная категория
```

Пример:

```turtle
o2p:Person
    a skos:Concept .

o2p:Student
    a skos:Concept ;
    skos:broader o2p:Person .
```

Но SKOS не описывает, что конкретный объект `ex:alice` является экземпляром `o2p:Student`. Для этого нужен отдельный предикат:

```turtle
ex:alice o2p:isInstance o2p:Student .
```

### Вывод

```text
SKOS — лучший кандидат для словаря и мира категорий,
но не для полной модели вещей и процессов.
```

## 4.3. DOLCE

DOLCE различает фундаментальные категории:

```text
Endurant — сохраняющийся объект
Perdurant — процесс или событие
Quality — качество
Abstract — абстрактная сущность
```

Endurant существует во времени целиком в каждый момент своего существования, а perdurant разворачивается во времени через временные части. [re.public.polimi](https://re.public.polimi.it/retrieve/c648acaa-75bd-498a-a39c-e0eda2759b04/Ontological_Approaches_to_Model_Engineering_Qualities_and_Values_in_DOLCE_OWL_Applied_Ontology__Review_01_perSubmission.pdf)

Схематично:

```text
DOLCE
├── Endurant
├── Perdurant
├── Quality
└── Abstract
```

Для O2P это полезно при описании мира вещей:

```text
ex:alice       — Endurant
ex:book123     — Endurant
ex:reading1    — Perdurant
ex:redness1    — Quality
o2p:Person     — Abstract или концептуальный объект
```

DOLCE лучше OWL 2 DL объясняет:

```text
объект
событие
процесс
качество
абстрактный объект
```

Но DOLCE не является двухсортной онтологией в точном смысле:

```text
ΔIdea ∩ ΔThing = ∅
```

Категории DOLCE не совпадают автоматически с платоновским миром идей.

### Вывод

```text
DOLCE — сильный фундамент для мира вещей,
процессов, качеств и абстрактных сущностей.
```

## 4.4. GFO

GFO особенно интересна для O2P, поскольку она различает:

```text
objects
processes
presentials
universals
```

В GFO объекты сохраняются во времени, процессы разворачиваются во времени, а universals связаны с устойчивыми типами или общими характеристиками. [pmc.ncbi.nlm.nih](https://pmc.ncbi.nlm.nih.gov/articles/PMC6454592/)

Схематично:

```text
GFO
├── Objects
├── Processes
├── Presentials
├── Universals
└── Relations
```

Это близко к O2P:

```text
Universal ≈ категория или идея
Object ≈ экземпляр категории
Process ≈ процесс или событие
```

Но GFO сложнее для практической RDF/OWL-реализации и требует аккуратного понимания различий между:

```text
объектом
универсалией
пресенталией
процессом
```

### Вывод

```text
GFO — один из самых близких философски и формально
к концепции «универсалии ↔ объекты».
```

## 4.5. YAMATO

YAMATO специально подчёркивает фундаментальные различия:

```text
continuant / occurrent
independent entity / dependent entity
quality / quantity
```

Кроме того, YAMATO использует метауровневые характеристики типов, включая:

```text
integrity
unity
dissectivity
```

YAMATO определяет объект как интегральный, единый и неделимый на определённом уровне рассмотрения. [journals.sagepub](https://journals.sagepub.com/doi/full/10.3233/AO-210257)

Для O2P это полезно, потому что позволяет различать:

```text
объект как целое;
процесс как разворачивающееся событие;
качество как зависимую характеристику;
универсалию как общий тип.
```

### Вывод

```text
YAMATO — сильный кандидат для теоретического фундамента,
но тяжёлый для первого практического прототипа O2P.
```

## 4.6. BFO

BFO строится вокруг разделения:

```text
continuant — продолжительный объект;
occurrent — процесс или разворачивающееся событие.
```

Внутри continuant BFO различает:

```text
independent continuant
specifically dependent continuant
generically dependent continuant
```

Материальная сущность является разновидностью independent continuant. Occurrent имеет временные части и разворачивается во времени. [periodicos.ufmg](https://periodicos.ufmg.br/index.php/advances-kr/article/download/59446/49599)

BFO очень хороша для:

```text
материальных объектов
биологических объектов
процессов
ролей
качеств
зависимых сущностей
```

Но BFO не предназначена для моделирования платоновского мира идей как равноправного самостоятельного мира. Категории BFO — это классы онтологии, а не платоновские универсалии в специально выделенной области.

### Вывод

```text
BFO — лучший кандидат для строгой модели вещей,
процессов и зависимых сущностей,
но не для самого разделения «идеи vs вещи».
```

## 4.7. BORO

BORO — четырёхмерная верхнеуровневая онтология, ориентированная на enterprise data modelling. Она рассматривает индивидуальные объекты как пространственно-временные протяжённости с пространственными и временными частями. [cdbb.cam.ac](https://www.cdbb.cam.ac.uk/what-we-do/national-digital-twin-programme/resourceplatform-approach-construction-progress-towards)

Схема BORO:

```text
Entity
├── Individual
│   ├── Object
│   ├── State
│   └── Event
└── Class / type structures
```

BORO полезна для:

```text
идентичности объектов во времени
жизненного цикла
изменения состояний
частей объектов
enterprise architecture
```

Для O2P:

```text
категория — класс или экстенсиональный тип;
вещь — 4D individual;
изменение вещи — temporal part или state.
```

### Вывод

```text
BORO — очень сильный кандидат для динамического,
enterprise-ориентированного O2P.
```

## 4.8. IDEAS

IDEAS была разработана для обмена данными enterprise architecture и связана с BORO. Она применялась в контексте оборонной архитектуры и таких стандартов, как MODAF и DoDAF. [ceur-ws](https://ceur-ws.org/Vol-1301/ontocomodise2014_5.pdf)

IDEAS полезна для:

```text
enterprise architecture
capability
resource
system
organization
activity
```

Но её «мир идей» — это не философский мир универсалий, а типологический и архитектурный уровень.

### Вывод

```text
IDEAS подходит как прикладной профиль O2P
для enterprise architecture,
но не как общий философский фундамент.
```

## 4.9. ISO 15926

ISO 15926 предназначена для интеграции данных жизненного цикла технологических установок. Часть 12 описывает онтологию интеграции жизненного цикла, представленную в OWL. Она включает whole–part отношения для физических объектов и временные части в рамках 4D-подхода. [iso](https://www.iso.org/standard/70695.html)

ISO 15926 особенно сильна в:

```text
идентичности объектов на протяжении жизненного цикла
временных частях
оборудовании
процессах
свойствах
классах и типах
reference data
```

Для O2P она полезна как источник решений для:

```text
вещи → temporalized thing
категория → reference data / class
свойство → property template
экземпляр → объект жизненного цикла
```

### Вывод

```text
ISO 15926 — лучший промышленный профиль O2P,
если проект ориентирован на engineering lifecycle.
```

## 4.10. Sowa’s Ontology

Онтология Джона Совы использует философские и логические различия между:

```text
physical
abstract
independent
relative
continuant
occurrence
```

Её сильная сторона — не фиксированная длинная иерархия, а система фундаментальных различий. В литературе подчёркивается, что Sowa’s Ontology строится скорее на framework of distinctions, чем на одной фиксированной таксономии. [person.dibris.unige](https://person.dibris.unige.it/mascardi-viviana/Download/DISI-TR-06-21.pdf)

Это очень близко к задаче O2P, потому что O2P также нуждается не только в иерархии:

```text
Person ⊑ Thing
```

а в различении типов сущностей:

```text
категория
объект
процесс
состояние
отношение
абстракция
```

### Вывод

```text
Sowa — сильный кандидат для философской и метамодельной основы O2P,
но потребует собственной RDF/OWL-профилизации.
```

## 4.11. SUMO

SUMO — большая интегрированная верхняя онтология, объединяющая широкий набор понятий и отношений. Она охватывает:

```text
objects
processes
attributes
relations
quantities
```

SUMO лучше подходит для широкого покрытия, чем для минимальной ясной двухсортной модели.

### Вывод

```text
SUMO можно использовать как широкий словарь понятий,
но не как единственную основу O2P.
```

## 4.12. UMBEL

UMBEL предназначена для связывания и согласования понятий из разных схем и онтологий.

Для O2P UMBEL полезна как:

```text
слой выравнивания категорий
mapping layer
reference concept layer
```

Но UMBEL не должна быть ядром двух миров.

### Вывод

```text
UMBEL — хороший интеграционный слой,
но не фундаментальная модель O2P.
```

## 4.13. WordNet

WordNet — лексико-семантическая сеть, а не полноценная верхнеуровневая онтология.

Она предоставляет:

```text
synsets
лексические отношения
гиперонимы
гипонимы
меронимы
```

WordNet полезна как словарь терминов:

```text
Person
Book
Student
```

Но она не различает строго:

```text
категория
вещь
отношение
процесс
метауровень
```

### Вывод

```text
WordNet — источник лексики и семантических связей,
но не фундамент O2P.
```

## 4.14. COSMO

COSMO — попытка создать общий семантический слой из базовых классов, отношений и правил вывода. Публичное описание COSMO характеризует его как фундаментальную онтологию, предназначенную для представления базовых элементов, необходимых для определения понятий из разных областей. [micra](https://micra.com/)

COSMO полезна для:

```text
согласования терминов
семантического маппинга
интеграции различных онтологий
широкого словаря отношений
```

Но COSMO слишком велика для того, чтобы без адаптации использовать её как простую двухсортную модель.

### Вывод

```text
COSMO — сильный словарь и интеграционный слой,
но не лучший минимальный фундамент O2P.
```

## 4.15. CIDOC CRM

CIDOC CRM имеет особенно полезное разделение:

```text
E1 CRM Entity
E2 Temporal Entity
E5 Event
E55 Type
E41 Appellation
```

Главное для O2P:

```text
E55 Type — концепт или универсалия
E41 Appellation — название или обозначение
E1 CRM Entity — сущность, которая может иметь тип
```

Пример:

```text
ex:alice crm:P2_has_type o2p:Person .
```

А иерархия типов:

```text
o2p:Student crm:P127_has_broader_term o2p:Person .
```

CIDOC CRM явно говорит, что экземпляры `E55 Type` представляют концепты, в отличие от `E41 Appellation`, который используется для именования экземпляров классов. [cidoc-crm](https://cidoc-crm.org/html/cidoc_crm_v7.1.3.html)

### Вывод

```text
CIDOC CRM — наиболее близкий готовый образец
для связки «экземпляр — тип — термин — иерархия типов».
```

## 4.16. PROTON

PROTON — лёгкая верхнеуровневая онтология для Semantic Web и информационного поиска.

Она полезна для:

```text
entity
object
agent
event
time
location
```

Но её модель слабее выражает философское различие универсалий и индивидов, чем CIDOC CRM, GFO или DOLCE.

## 4.17. Computer Science Ontology

CSO — автоматически построенная крупная таксономия областей компьютерных наук. Она содержит примерно 14–15 тысяч исследовательских тем и большое количество отношений между ними. [direct.mit](https://direct.mit.edu/dint/article/2/3/379/94891/The-Computer-Science-Ontology-A-Comprehensive)

CSO полезна для:

```text
таксономии тем
классификации публикаций
анализа научных направлений
```

Но она не является верхнеуровневой онтологией вещей и категорий.

## 4.18. ROMULUS

ROMULUS полезен как сравнительный верхнеонтологический фрагмент и средство оценки совместимости верхних онтологий.

Но для O2P он не является самостоятельным решением:

```text
не задаёт нужную двухсортную модель;
не является широким прикладным словарём;
требует выбора базовой онтологии.
```

# 5. Наиболее подходящая комбинация

## 5.1. Рейтинг для O2P

| Место | Система | Роль в O2P | Оценка |
|---:|---|---|---:|
| 1 | CIDOC CRM | модель «экземпляр — тип — концепт» | 9/10 |
| 2 | GFO | философское различение универсалий, объектов и процессов | 9/10 |
| 3 | DOLCE | объекты, события, качества, абстракции | 8.5/10 |
| 4 | YAMATO | строгая многоуровневая инженерная онтология | 8.5/10 |
| 5 | Sowa’s Ontology | логико-философский каркас различий | 8/10 |
| 6 | BFO | строгая модель объектов, процессов и зависимых сущностей | 8/10 |
| 7 | BORO | 4D-вещи и enterprise lifecycle | 8/10 |
| 8 | ISO 15926 | industrial lifecycle profile | 8/10 для engineering |
| 9 | SKOS | слой категорий и иерархий терминов | 8/10 для Idea layer |
| 10 | COSMO | широкий семантический и mapping-слой | 7.5/10 |
| 11 | SUMO | широкий общий словарь и reasoning | 7/10 |
| 12 | UMBEL | выравнивание категорий | 7/10 |
| 13 | PROTON | лёгкая Web upper ontology | 6.5/10 |
| 14 | Cyc | большая база здравого смысла | 6.5/10 |
| 15 | WordNet | лексический источник | 5/10 |
| 16 | CSO | предметная таксономия CS | 3/10 |
| 17 | ROMULUS | сравнительный фрагмент | 3/10 |

## 5.2. Предлагаемая архитектура

```text
O2P
├── Слой категорий
│   ├── SKOS Concept
│   ├── CIDOC CRM E55 Type
│   └── O2P isSubClass
│
├── Слой экземпляров
│   ├── CIDOC CRM E1 CRM Entity
│   ├── BFO Independent Continuant
│   ├── DOLCE Endurant
│   └── O2P isInstance
│
├── Слой процессов и событий
│   ├── CIDOC CRM E2/E5
│   ├── BFO Occurrent
│   ├── DOLCE Perdurant
│   └── GFO Process
│
├── Слой свойств
│   ├── o2p:hasProperty
│   ├── SHACL property shapes
│   └── OWL restrictions
│
└── Слой интеграции
    ├── UMBEL
    ├── COSMO
    ├── WordNet
    └── Schema.org
```

# 6. Рекомендуемая семантика O2P

## 6.1. Категории

Категории не обязаны быть `owl:Class`.

В O2P они могут быть представлены как:

```turtle
o2p:Person
o2p:Student
o2p:Book
```

Иерархия:

```turtle
o2p:Student o2p:isSubClass o2p:Person .
```

Смысл:

```text
Student — более узкая категория, чем Person.
```

## 6.2. Экземпляры

Конкретные экземпляры находятся в `ex:`:

```turtle
ex:alice
ex:bob
ex:book123
```

Принадлежность категории:

```turtle
ex:alice o2p:isInstance o2p:Student .
```

## 6.3. Свойства категорий

```turtle
o2p:Person o2p:hasProperty foaf:name .
o2p:Person o2p:hasProperty foaf:familyName .
```

## 6.4. Значения свойств экземпляров

```turtle
ex:alice foaf:name "Алиса"@ru .
ex:alice foaf:familyName "Петрова"@ru .
```

Эта конструкция близка к паттерну:

```text
категория задаёт допустимый способ описания;
экземпляр получает конкретное значение.
```

# 7. Как O2P соотносится с CIDOC CRM

Наиболее полезное соответствие:

| O2P | CIDOC CRM |
|---|---|
| Категория | `E55 Type` |
| Экземпляр | `E1 CRM Entity` |
| `o2p:isInstance` | `P2 has type` |
| `o2p:isSubClass` | `P127 has broader term` |
| Имя экземпляра | `E41 Appellation` |
| Событие | `E5 Event` |
| Временная сущность | `E2 Temporal Entity` |
| Свойство объекта | CRM property или domain property |

Пример:

```turtle
ex:alice crm:P2_has_type o2p:Person .
```

O2P-форма:

```turtle
ex:alice o2p:isInstance o2p:Person .
```

Иерархия:

```turtle
o2p:Student crm:P127_has_broader_term o2p:Person .
```

O2P-форма:

```turtle
o2p:Student o2p:isSubClass o2p:Person .
```

Это не означает, что предикаты абсолютно эквивалентны. Их семантику нужно сопоставлять отдельными mapping-аксиомами.

# 8. Как O2P соотносится с SKOS

SKOS лучше использовать для иерархии категорий, если категории являются понятиями тезауруса:

```turtle
o2p:Student a skos:Concept ;
    skos:broader o2p:Person .
```

Но в ядре O2P:

```turtle
o2p:Student o2p:isSubClass o2p:Person .
```

Рекомендуемая связь:

```turtle
o2p:isSubClass skos:broaderTransitive o2p:isSubClass .
```

Однако это нельзя объявлять буквально: `skos:broader` и `o2p:isSubClass` имеют разные семантические обязательства.

Лучше записать mapping-документом:

```text
o2p:isSubClass ≈ skos:broader
```

с указанием:

```text
o2p:isSubClass — отношение специализации категорий;
skos:broader — более общий термин тезауруса.
```

# 9. Как O2P соотносится с DOLCE, GFO и BFO

## 9.1. Для мира экземпляров

Можно выбрать один из вариантов:

```text
BFO Independent Continuant
DOLCE Endurant
GFO Object
```

### Если важна строгая инженерная типизация

Выбирать:

```text
BFO
```

### Если важны процессы, качества и естественно-языковые категории

Выбирать:

```text
DOLCE
```

### Если важны универсалии и философское различение сущностей

Выбирать:

```text
GFO
```

## 9.2. Для мира категорий

Ни BFO, ни DOLCE, ни GFO не следует автоматически объявлять готовым «миром идей Платона».

Но их можно использовать так:

```text
O2P Category
    → GFO Universal
    → DOLCE Abstract / Quality / Social Object
    → BFO Universal или information content entity
```

Это будут mapping-гипотезы, а не простые эквивалентности.

# 10. Что выбрать для первой версии O2P

## Вариант A: минимальный практический

```text
SKOS        — категории и иерархии
CIDOC CRM   — экземпляры, типы и события
SHACL       — проверка структуры
RDF         — хранение графа
O2P         — isInstance, isSubClass, hasProperty
```

Этот вариант проще всего реализовать.

## Вариант B: философско-формальный

```text
GFO         — универсалии, объекты, процессы
DOLCE       — endurant/perdurant/quality/abstract
O2P         — двухуровневая связь Category–Instance
SHACL       — проверка
```

Этот вариант лучше отражает философскую идею, но сложнее.

## Вариант C: инженерно-динамический

```text
BORO        — 4D-идентичность
ISO 15926   — lifecycle and reference data
IDEAS       — enterprise architecture
O2P         — категории и экземпляры
```

Этот вариант наиболее полезен для:

```text
оборудования
жизненного цикла
enterprise architecture
BPM
процессов
состояний
```

# 11. Итоговый выбор

Для первоначального O2P я рекомендую:

```text
Ядро категорий:
    CIDOC CRM E55 Type + SKOS Concept

Ядро экземпляров:
    CIDOC CRM E1 CRM Entity

Фундаментальный слой вещей:
    DOLCE или GFO

Инженерный профиль:
    BORO или ISO 15926

Собственные O2P-отношения:
    o2p:isInstance
    o2p:isSubClass
    o2p:hasProperty
    o2p:hasRequiredProperty
    o2p:hasOptionalProperty

Проверка:
    SHACL

Интеграция:
    UMBEL и COSMO

Лексика:
    WordNet и Schema.org
```

Наиболее удачная базовая комбинация:

```text
CIDOC CRM + SKOS + DOLCE + O2P + SHACL
```

Она даёт:

```text
CIDOC CRM — явное различение типов и экземпляров;
SKOS — иерархию категорий;
DOLCE — фундаментальное различение объектов,
         процессов, качеств и абстракций;
O2P — собственную семантику двух уровней;
SHACL — контроль допустимых графов.
```

Итоговая минимальная запись:

```turtle
@prefix o2p: <https://github.com/bpmbpm/ontology/o2p#> .
@prefix ex:  <https://example.org/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix skos: <http://www.w3.org/2004/02/skos/core#> .

o2p:Student
    skos:broader o2p:Person ;
    o2p:isSubClass o2p:Person .

o2p:Person
    o2p:hasProperty foaf:name ;
    o2p:hasProperty foaf:familyName .

ex:alice
    o2p:isInstance o2p:Student ;
    foaf:name "Алиса"@ru ;
    foaf:familyName "Петрова"@ru .
```

В терминах O2P:

```text
o2p:Person и o2p:Student — категории мира идей.
ex:alice — экземпляр категории из мира вещей.
o2p:isSubClass — отношение между категориями.
o2p:isInstance — отношение экземпляра к категории.
o2p:hasProperty — описание свойств, предусмотренных категорией.
foaf:name и foaf:familyName — свойства, используемые для описания экземпляра.
```

Таким образом, O2P лучше всего строить не как замену OWL другой одной верхней онтологией, а как **специализированную двухуровневую модель**, где CIDOC CRM и SKOS дают готовый паттерн категорий, DOLCE/GFO/BFO описывают природу вещей и процессов, а BORO/IDEAS/ISO 15926 подключаются для 4D- и enterprise-моделирования.

## 2
попробуй рассмотреть SUMO, ведь  
Entity — корень всей иерархии, всё делится на Abstract и Physical
 
Да, **SUMO действительно намного ближе к требуемой конструкции O2P**, чем стандартная иерархия `owl:Class` / `owl:Thing`. Но нужно точно определить, *какое* разделение она даёт.

SUMO вводит корень `Entity`, который делится на:

```text
Entity
├── Physical
└── Abstract
```

`Physical` содержит сущности, имеющие положение в пространстве-времени; `Abstract` — сущности, не имеющие такого положения. `Physical`, в свою очередь, делится на `Object` и `Process`, а `Abstract` включает, среди прочего, классы, отношения, атрибуты, количества и пропозиции. [academic.oup](https://academic.oup.com/book/36760/chapter/321869142?searchresult=1)

Это близко к O2P, но **не полностью совпадает** с платоновским разделением:

```text
мир идей ≠ просто Abstract
мир вещей ≠ просто Physical
```

Причина в том, что SUMO помещает в `Abstract` не только категории, но также отношения, числа, атрибуты, пропозиции и другие абстрактные сущности.

# 1. Иерархия SUMO

Упрощённо верхний уровень SUMO можно представить так:

```text
Entity
├── Physical
│   ├── Object
│   └── Process
│
└── Abstract
    ├── SetOrClass
    ├── Relation
    ├── Attribute
    ├── Quantity
    └── Proposition
```

Эта схема упрощена: фактическая иерархия SUMO значительно шире.

## 1.1. `Entity`

В SUMO `Entity` — универсальный класс индивидов и корень иерархии:

```text
Entity — универсальная категория всех сущностей SUMO.
```

Важно: в SUMO `Entity` — не «всё существующее» в строго метафизическом смысле, а верхний класс, включающий физические и абстрактные сущности.

## 1.2. `Physical`

`Physical` — сущность, имеющая положение в пространстве-времени:

```text
Physical — пространственно-временная сущность.
```

Примеры:

```text
человек
книга
здание
организация как физически воплощённая система
событие
процесс
```

## 1.3. `Object`

`Object` — физическая сущность, сохраняющая идентичность во времени и имеющая пространственные части. В SUMO к объектам относятся обычные вещи, географические регионы и другие физические объекты. [ontologyportal](https://www.ontologyportal.org/SUMOhistory/SUMO1.46.txt)

Примеры:

```text
Alice
Bob
конкретная книга
здание
автомобиль
```

## 1.4. `Process`

`Process` — физическая сущность, разворачивающаяся во времени и имеющая временные стадии или части:

```text
лекция
чтение книги
производственный процесс
перемещение
разговор
```

Это особенно полезно для O2P, поскольку O2P должно описывать не только вещи, но и процессы.

## 1.5. `Abstract`

`Abstract` — сущность, не имеющая положения в пространстве-времени:

```text
Abstract — не-пространственно-временная сущность.
```

SUMO прямо относит сюда свойства, качества, множества, отношения и математические объекты. [ontologyportal](https://www.ontologyportal.org/SUMOhistory/SUMO1.46.txt)

Но это не означает:

```text
Abstract = платоновский мир идей
```

В SUMO среди абстрактных сущностей находятся разные по природе элементы:

```text
классы
отношения
атрибуты
числа
пропозиции
```

Их нельзя без уточнения считать одним и тем же видом идеи.

# 2. Что именно совпадает с O2P

Сравним SUMO с целевой моделью O2P.

| O2P | SUMO | Степень соответствия |
|---|---|---|
| Мир вещей | `Physical` | Высокая, но `Physical` включает процессы |
| Конкретные вещи | `Object` | Очень высокая |
| Процессы | `Process` | Очень высокая |
| Мир идей | `Abstract` | Частичная |
| Категории | `SetOrClass` | Высокая |
| Предикаты | `Relation` | Высокая |
| Значения и качества | `Attribute`, `Quantity` | Высокая |
| Утверждения | `Proposition` | Высокая |
| Иерархия категорий | `subclass` | Высокая |
| Экземпляр категории | `instance` | Высокая |
| Два раздельных метафизических мира | `Physical` / `Abstract` | Только частичная |

Наиболее важное совпадение:

```text
O2P категория ≈ SUMO SetOrClass
O2P вещь ≈ SUMO Object
O2P процесс ≈ SUMO Process
O2P предикат ≈ SUMO Relation
O2P литеральное или качественное значение ≈ SUMO Attribute/Quantity
```

# 3. Где SUMO лучше OWL 2 DL

OWL 2 DL в стандартной Direct Semantics использует:

```text
ΔI — область объектов
ΔD — область данных
```

Классы интерпретируются как подмножества `ΔI`:

```text
Cᴵ ⊆ ΔI
```

Индивиды также находятся в `ΔI`:

```text
aᴵ ∈ ΔI
```

Поэтому OWL 2 DL не задаёт отдельный фундаментальный домен:

```text
ΔIdea
```

SUMO, напротив, явно проводит верхнеуровневое различие:

```text
Entity
├── Physical
└── Abstract
```

Это уже готовая таксономическая рамка для различения:

```text
физических сущностей
абстрактных сущностей
```

Кроме того, SUMO не ограничивается стандартным паттерном:

```text
класс → экземпляр
```

В ней имеются отдельные категории:

```text
Object
Process
SetOrClass
Relation
Attribute
Quantity
Proposition
```

Это значительно ближе к O2P, чем попытка использовать:

```text
owl:Class
owl:Thing
rdf:type
```

как две противоположные стороны одной модели.

# 4. Где SUMO всё ещё не совпадает с O2P

## 4.1. `Abstract` шире, чем мир идей

В O2P под «миром идей» понимаются прежде всего:

```text
категории
классы
типы
формы
образы
описания свойств
```

В SUMO `Abstract` включает:

```text
SetOrClass
Relation
Attribute
Quantity
Proposition
```

Поэтому:

```text
O2P Category ⊂ SUMO Abstract
```

а не:

```text
O2P Category = SUMO Abstract
```

## 4.2. Процессы относятся к `Physical`

В философской формулировке «мир вещей» иногда понимается как мир объектов, противопоставленный миру идей.

Но в SUMO:

```text
Physical
├── Object
└── Process
```

То есть процессы относятся к `Physical`, хотя процесс не обязательно является вещью в узком смысле.

Для O2P лучше использовать:

```text
мир экземпляров
├── Object
├── Process
├── Event
└── State
```

а не называть весь этот мир просто «мир вещей».

## 4.3. Категории не обязательно являются отдельным «миром»

В SUMO `SetOrClass` — класс абстрактных сущностей. Но это не означает автоматически:

```text
SetOrClass ∩ Physical = ∅
```

если мы рассматриваем сложные случаи метамоделирования и семантических представлений.

Для строгого O2P нужно явно принять дополнительное правило:

```text
Category ⊆ Abstract
Category ∩ Physical = ∅
```

Это уже O2P-ограничение поверх SUMO.

## 4.4. Категория и множество

В SUMO есть важная терминологическая особенность:

```text
SetOrClass
```

объединяет множества и классы.

В O2P их лучше разделить:

```text
Category — идея, классифицирующая экземпляры
Collection — совокупность конкретных экземпляров
```

Например:

```text
o2p:PersonCategory
ex:personsOfDepartmentA
```

Категория `Person` не должна автоматически совпадать с конкретным множеством людей в некотором контексте.

# 5. Как SUMO моделирует нужные отношения

В SUMO используются специальные отношения вроде:

```text
instance
subclass
subrelation
```

Концептуально:

```text
ex:alice instance foaf:Person .
o2p:Student subclass foaf:Person .
```

Для O2P это естественно преобразуется в:

```turtle
ex:alice o2p:isInstance o2p:Person .
o2p:Student o2p:isSubClass o2p:Person .
```

## 5.1. Аналог `o2p:isInstance`

```text
SUMO: instance
O2P:  o2p:isInstance
```

Сигнатура:

```text
o2p:isInstance: Instance × Category
```

Пример:

```turtle
ex:alice o2p:isInstance o2p:Person .
```

## 5.2. Аналог `o2p:isSubClass`

```text
SUMO: subclass
O2P:  o2p:isSubClass
```

Сигнатура:

```text
o2p:isSubClass: Category × Category
```

Пример:

```turtle
o2p:Student o2p:isSubClass o2p:Person .
```

## 5.3. Аналог `o2p:hasProperty`

SUMO имеет понятия, соответствующие:

```text
Attribute
Relation
Predicate
```

Но в SUMO связь:

```text
категория предусматривает свойство
```

не обязательно выражается одним универсальным отношением, полностью совпадающим с:

```turtle
o2p:Person o2p:hasProperty foaf:name .
```

Поэтому `o2p:hasProperty` всё равно нужен как специальный конструктивный предикат O2P.

SUMO может дать его типологическую основу:

```text
o2p:hasProperty связывает SetOrClass с Relation или Attribute.
```

# 6. SUMO и платоновская модель

Можно предложить следующее философское сопоставление:

```text
Мир категорий O2P
    ≈ часть SUMO Abstract
    ≈ SetOrClass, Relation, Attribute, Proposition

Мир экземпляров O2P
    ≈ SUMO Physical
    ≈ Object и Process
```

Но это сопоставление должно быть сформулировано осторожно:

```text
SUMO Abstract ≠ платоновский мир идей
SUMO Physical ≠ только мир материальных вещей
```

Причины:

1. `Abstract` содержит не только категории.
2. `Physical` содержит процессы, а не только объекты.
3. SUMO допускает абстрактные сущности, связанные с физической реализацией.
4. SUMO предназначена как общая верхняя онтология, а не как формализация платоновской метафизики.

Более точное O2P-сопоставление:

```text
O2P Category ⊆ SUMO Abstract
O2P Relation ⊆ SUMO Relation
O2P Attribute ⊆ SUMO Attribute
O2P Quantity ⊆ SUMO Quantity

O2P Object ⊆ SUMO Physical
O2P Process ⊆ SUMO Physical
```

# 7. Улучшенная версия O2P на основе SUMO

Предлагаю не использовать буквально:

```text
O2P IdeaWorld
O2P ThingWorld
```

а ввести два уровня классификации:

```text
O2P Category
O2P Instance
```

Семантически:

```text
O2P Category ⊆ SUMO Abstract
O2P Instance ⊆ SUMO Entity
```

При этом отдельные виды экземпляров:

```text
O2P Object   ⊆ SUMO Object
O2P Process  ⊆ SUMO Process
O2P AttributeValue ⊆ SUMO Attribute or Quantity
```

## 7.1. O2P-предикаты

```turtle
o2p:isInstance
o2p:isSubClass
o2p:hasProperty
o2p:hasValue
o2p:hasPart
o2p:participatesIn
```

## 7.2. Сигнатуры

```text
o2p:isInstance: Instance × Category
o2p:isSubClass: Category × Category
o2p:hasProperty: Category × Property
o2p:hasValue: Instance × Value
o2p:hasPart: Entity × Entity
o2p:participatesIn: Object × Process
```

# 8. Пример O2P + SUMO

Для обозначения категорий используем `o2p:`. Для конкретных экземпляров — `ex:`.

```turtle
@prefix o2p: <https://github.com/bpmbpm/ontology/o2p#> .
@prefix ex:  <https://example.org/> .
@prefix sumo: <http://www.ontologyportal.org/SUMO.owl#> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

#################################################################
# Categories
#################################################################

o2p:Person
    o2p:correspondsTo sumo:Human ;
    o2p:hasProperty foaf:name ;
    o2p:hasProperty foaf:familyName .

o2p:Student
    o2p:isSubClass o2p:Person .

o2p:Book
    o2p:hasProperty o2p:hasColor ;
    o2p:hasProperty o2p:hasAuthor .

#################################################################
# Instances
#################################################################

ex:alice
    o2p:isInstance o2p:Student ;
    foaf:name "Алиса"@ru ;
    foaf:familyName "Петрова"@ru .

ex:bob
    o2p:isInstance o2p:Person ;
    foaf:name "Боб"@ru ;
    foaf:familyName "Смит"@ru .

ex:book123
    o2p:isInstance o2p:Book ;
    o2p:hasAuthor ex:alice ;
    o2p:hasColor "red"@en .
```

В этой схеме:

```text
o2p:Person — категория O2P;
o2p:Student — подкатегория O2P;
ex:alice — конкретный экземпляр;
ex:bob — конкретный экземпляр;
ex:book123 — конкретный экземпляр;
sumo:Human — внешний SUMO-концепт;
o2p:correspondsTo — связь выравнивания онтологий.
```

# 9. Что именно нужно заимствовать из SUMO

| Элемент SUMO | Использование в O2P | Решение |
|---|---|---|
| `Entity` | Корневой внешний класс сущностей | Заимствовать как внешний mapping |
| `Physical` | Физические и пространственно-временные сущности | Использовать для мира экземпляров |
| `Object` | Сохраняющиеся вещи | Использовать для O2P Object |
| `Process` | Процессы и события | Использовать для O2P Process |
| `Abstract` | Абстрактные сущности | Использовать только как широкий внешний класс |
| `SetOrClass` | Категории и множества | Использовать как прототип O2P Category |
| `Relation` | Предикаты и отношения | Использовать как прототип O2P Property/Relation |
| `Attribute` | Атрибуты и качества | Использовать для свойств и качеств |
| `Quantity` | Числа и измеряемые значения | Использовать для данных и измерений |
| `Proposition` | Высказывания | Использовать для утверждений или аксиом |
| `instance` | Связь экземпляра с категорией | Переименовать в `o2p:isInstance` |
| `subclass` | Иерархия категорий | Переименовать в `o2p:isSubClass` |

# 10. Сравнение SUMO и O2P

| Вопрос | SUMO | O2P |
|---|---|---|
| Корень | `Entity` | Необязательно единый RDF-корень; категории и экземпляры разделяются ролями |
| Главная дихотомия | `Physical` / `Abstract` | Category / Instance |
| Вещи | `Object` | Экземпляры категорий, включая объекты |
| Процессы | `Process` | Экземпляры процессных категорий |
| Категории | `SetOrClass` | O2P Category |
| Отношения | `Relation` | O2P properties/predicates |
| Принадлежность | `instance` | `o2p:isInstance` |
| Подчинённость | `subclass` | `o2p:isSubClass` |
| Свойства категорий | Не одно универсальное отношение | `o2p:hasProperty` |
| Формальная двухсортность | Не в виде `ΔCategory` и `ΔInstance` | Явно задаётся O2P-семантикой |
| Временные объекты | Поддерживаются через Physical/Process | Может быть добавлена через SUMO/BORO/ISO 15926 |
| Платоновский мир идей | Не является специальной целью | Является целью проекта |

# 11. Главная проблема: SUMO тоже не даёт полной двухсортности

SUMO решает проблему лучше, но не полностью.

Если мы хотим:

```text
категории существуют в одном логическом сорте;
экземпляры существуют в другом логическом сорте;
```

то нужно явно ввести:

```text
Category
Instance
```

и сигнатуры:

```text
isInstance: Instance × Category
isSubClass: Category × Category
```

SUMO сама по себе задаёт более широкую классификацию:

```text
Entity
├── Physical
└── Abstract
```

Но она не утверждает автоматически:

```text
SetOrClass = весь мир категорий
Physical = весь мир экземпляров
```

Более того, часть экземпляров категорий может быть абстрактной:

```text
число
отношение
пропозиция
геометрическая фигура
математический объект
```

Поэтому в O2P нужно выбрать один из двух вариантов.

## Вариант 1. Физикалистский O2P

```text
Category ⊆ Abstract
Instance ⊆ Physical
```

Тогда категориями являются только абстрактные формы, а экземплярами — физические объекты и процессы.

Преимущества:

```text
простая философская интерпретация;
ясное разделение;
легко объяснять пользователям.
```

Недостатки:

```text
абстрактные экземпляры не покрываются;
числа, отношения и математические объекты выпадают;
не все экземпляры должны быть физическими.
```

## Вариант 2. Универсальный O2P

```text
Category ⊆ Abstract
Instance ⊆ Entity
```

Тогда экземпляром категории может быть не только Physical, но и Abstract:

```text
число является экземпляром математической категории;
отношение является экземпляром категории отношений;
пропозиция является экземпляром категории высказываний.
```

Преимущества:

```text
модель универсальнее;
лучше соответствует SUMO;
подходит для семантических и enterprise-систем.
```

Недостатки:

```text
мир экземпляров уже не совпадает с физическим миром вещей;
нужно отдельно различать Physical и Abstract экземпляры.
```

Для O2P рекомендую **вариант 2**:

```text
категория — специальный вид абстрактной сущности;
экземпляр — сущность, соответствующая категории;
физическая вещь — частный вид экземпляра.
```

# 12. Улучшенная формулировка O2P на SUMO

> O2P — это слой метамоделирования и типизации поверх SUMO, в котором категории интерпретируются как абстрактные формы или универсалии, а экземпляры — как сущности, соответствующие этим категориям. SUMO предоставляет верхнеуровневую классификацию `Entity`, `Physical`, `Abstract`, `Object`, `Process`, `Relation`, `Attribute` и `SetOrClass`. O2P добавляет явное различение сигнатур `Category–Category`, `Instance–Category`, `Instance–Instance` и `Instance–Value`.

Формальная схема:

```text
Category ⊆ Abstract
Instance ⊆ Entity
Object ⊆ Physical
Process ⊆ Physical
Relation ⊆ Abstract
Attribute ⊆ Abstract
```

Основные отношения:

```text
isInstance ⊆ Instance × Category
isSubClass ⊆ Category × Category
hasProperty ⊆ Category × Relation
hasValue ⊆ Instance × Entity
```

# 13. Итог

Ваше наблюдение верное:

```text
SUMO Entity → Physical / Abstract
```

действительно гораздо ближе к необходимой модели, чем:

```text
owl:Class / owl:Thing
```

SUMO даёт:

```text
Physical — физические и пространственно-временные сущности;
Abstract — абстрактные сущности;
Object — вещи;
Process — процессы;
SetOrClass — классы и множества;
Relation — отношения;
Attribute — качества;
Quantity — величины.
```

Но точное соответствие:

```text
Abstract = мир идей
Physical = мир вещей
```

слишком грубо.

Наиболее корректная формула для O2P:

```text
O2P Category ⊆ SUMO Abstract
O2P Instance ⊆ SUMO Entity
O2P Object ⊆ SUMO Physical
O2P Process ⊆ SUMO Physical
O2P Relation ⊆ SUMO Relation
```

Именно поэтому лучший вариант — не заменить O2P на SUMO, а построить:

```text
SUMO — верхнеуровневый фундамент;
O2P — двухсортный слой категорий и экземпляров;
SKOS — слой терминологических иерархий;
CIDOC CRM — паттерн «тип — экземпляр»;
SHACL — проверка сигнатур и ограничений.
```

В таком варианте `o2p:isInstance` и `o2p:isSubClass` получают ясную семантику:

```text
ex:alice o2p:isInstance o2p:Person .
o2p:Student o2p:isSubClass o2p:Person .
```

а SUMO объясняет, что за сущности стоят за этими терминами:

```text
o2p:Person — категория, близкая к SetOrClass;
ex:alice — сущность SUMO, например Human и Object;
o2p:isInstance — отношение Instance–Category;
o2p:isSubClass — отношение Category–Category.
```

Таким образом, **SUMO — наиболее сильный кандидат из рассмотренных для базового верхнеонтологического слоя O2P**, но собственное отношение `Category–Instance` и явная типизация O2P всё равно необходимы.

