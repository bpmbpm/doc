

Оглавление:
- https://github.com/bpmbpm/doc/blob/main/LD2/OWL/class2/all_for_plato1.md#g1
- https://github.com/bpmbpm/doc/blob/main/LD2/OWL/class2/all_for_plato1.md#g2
- https://github.com/bpmbpm/doc/blob/main/LD2/OWL/class2/all_for_plato1.md#g3
- https://github.com/bpmbpm/doc/blob/main/LD2/OWL/class2/all_for_plato1.md#g4

- https://www.perplexity.ai/search/78cb006c-319f-4501-8b8f-ec5dd22b7913
- https://github.com/ontologyportal/sumo

perplexity

## g1
Если ранее у нас возникли сложности с формализацией двух миров Платона (мир идей\образов  vs мир вещей\ теней) через иерархии классов OWL\RDFS, то рассмотри иные онтологии, включая: 
Sowa's Ontology Джон Ф. Соува), Cyc, YAMATO, BFO, gist, BORO, GFO, IDEAS, ISO 15926, SUMO, UMBEL, WordNet, CIDOC Conceptual Reference Model, COSMO (Common Semantic Model), DOLCE, gist, SKOS, Computer Science Ontology, ROMULUS,  PROTON Ontology (PROTo ONtology) и другие  
выбери наиболее подходящие и сделай сравнение.


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

## g2
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

## g3

Вопросы по 
«Сравним SUMO с целевой моделью O2P.
1 «Мир вещей \ Высокая, но Physical включает процессы»  
Так это условно «мир вещей \ мир теней». Процесс – как «динамическая вещь». Есть образ процесса, а есть его экземпляр: процесс начатый в 12:00 и завершенный в 14:00.
Используй термины SUMO чтобы это пояснить.   
Также дай более пролный и более подробный словарь терминов SUMO, включая (если они есть), объект, сущность, категория, класс, экземпляр, индивид и другие, покажи их взаимосвязь и покажи наиболее близкие из owl\rdfs. Добавляй ссылки к каждому термину.  

2 «Мир идей / Частичная» и «Два раздельных метафизических мира / Только частичная»  
Почему частичная? Разве у Платона не так? Дай ссылки на концепцию Платона (неоплатоников), чтобы показать сходства и противоречия. Также Гегель пояснял такую философию Платона по разделению миров (также дай ссылки на Гегеля).   

Поищи статьи или исследования на SUMO в привязке к философским течениям о разделении миров (не только Платона)  

---

Да, ваша интерпретация корректна: **в O2P `Physical` можно трактовать как «мир вещей и теней»**, если под «вещью» понимать не только статичный объект, но и происходящий процесс.

Тогда:

```text
Physical = изменяющийся чувственно-эмпирический мир
Object   = относительно устойчивый физический объект
Process  = динамическая вещь или происходящее
```

А «образ» процесса — это не сам `Process`, а категория или класс процессов, например:

```text
o2p:ReadingProcess
```

Конкретное чтение, начавшееся в 12:00 и закончившееся в 14:00:

```text
ex:reading_20261006
```

В терминах SUMO:

```text
o2p:ReadingProcess — класс или категория процессов
ex:reading_20261006 — конкретный экземпляр SUMO Process
```

# 1. Процесс как динамическая вещь

В SUMO корень иерархии — `Entity`. Он делится на `Physical` и `Abstract`; `Physical` далее делится на `Object` и `Process`. `Object` — физическая сущность, а `Process` — физическая сущность, происходящая во времени. [adampease](https://www.adampease.com/FOIS.pdf)

Упрощённо:

```text
Entity
├── Physical
│   ├── Object
│   └── Process
└── Abstract
```

## 1.1. Объект

Пример:

```text
ex:book123
```

SUMO-интерпретация:

```text
ex:book123 — конкретный Object
```

Это относительно устойчивый носитель свойств:

```text
книга имеет автора;
книга имеет цвет;
книга находится в библиотеке.
```

## 1.2. Процесс

Пример:

```text
ex:reading_20261006
```

Это не абстрактная идея чтения, а конкретное происходящее:

```text
начало: 12:00
окончание: 14:00
участник: ex:alice
объект: ex:book123
```

В SUMO процесс — физическая сущность, которая разворачивается во времени. [adampease](https://adampease.com/ImperfectK.pdf)

## 1.3. Категория процесса

Категория процесса:

```text
o2p:ReadingProcess
```

Конкретный процесс:

```text
ex:reading_20261006
```

Связь:

```turtle
ex:reading_20261006 o2p:isInstance o2p:ReadingProcess .
```

В O2P это означает:

```text
ex:reading_20261006 — конкретный процесс;
o2p:ReadingProcess — категория процессов.
```

В терминах SUMO:

```text
ex:reading_20261006 instance o2p:ReadingProcess
```

или, в O2P-форме:

```text
ex:reading_20261006 o2p:isInstance o2p:ReadingProcess .
```

## 1.4. «Образ» процесса

Платоновский образ процесса — это не процесс во времени. Это категория, задающая форму возможных процессов:

```text
o2p:ReadingProcess
```

Она отвечает на вопрос:

```text
каким образом классифицировать конкретные процессы чтения?
```

Конкретный процесс отвечает на другой вопрос:

```text
какое чтение фактически произошло?
```

Сравнение:

| Уровень | Пример | SUMO/O2P-смысл |
|---|---|---|
| Категория | `o2p:ReadingProcess` | класс процессов |
| Экземпляр | `ex:reading_20261006` | конкретный `Process` |
| Временные параметры | 12:00–14:00 | характеристики экземпляра |
| Участник | `ex:alice` | конкретный `Object` |
| Объект процесса | `ex:book123` | конкретный `Object` |

# 2. Процесс в примере O2P

```turtle
@prefix o2p: <https://github.com/bpmbpm/ontology/o2p#> .
@prefix ex:  <https://example.org/> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

o2p:ReadingProcess
    o2p:isSubClass o2p:Process .

ex:reading_20261006
    o2p:isInstance o2p:ReadingProcess ;
    o2p:hasParticipant ex:alice ;
    o2p:hasObject ex:book123 ;
    time:hasBeginning ex:begin_20261006_1200 ;
    time:hasEnd ex:end_20261006_1400 .

ex:begin_20261006_1200
    time:inXSDDateTime "2026-10-06T12:00:00+03:00"^^xsd:dateTime .

ex:end_20261006_1400
    time:inXSDDateTime "2026-10-06T14:00:00+03:00"^^xsd:dateTime .
```

Требуется определить дополнительные отношения:

```turtle
o2p:hasParticipant
o2p:hasObject
```

Их смысл:

```text
процесс имеет участника;
процесс направлен на объект.
```

Можно также использовать близкие термины DOLCE, BFO или CIDOC CRM, но для базовой O2P лучше сохранить собственные имена.

# 3. Подробный словарь SUMO

## 3.1. `Entity`

`Entity` — корень иерархии SUMO.

```text
Entity — наиболее общий класс сущностей SUMO.
```

Он включает:

```text
Physical
Abstract
```

Ближайший аналог в OWL/RDFS:

```text
owl:Thing
rdfs:Resource
```

Но соответствие не полное.

| SUMO | Ближайший OWL/RDFS аналог | Отличие |
|---|---|---|
| `Entity` | `owl:Thing`, `rdfs:Resource` | SUMO включает собственную верхнюю философскую классификацию |

## 3.2. `Physical`

`Physical` — сущность, имеющая положение в пространстве-времени.

Примеры:

```text
человек
книга
стул
лекция
чтение
перемещение
```

Ближайший OWL/RDFS аналог:

```text
owl:Thing
```

Но OWL не содержит стандартного встроенного класса `Physical`.

## 3.3. `Object`

`Object` — физическая сущность, сохраняющая идентичность и не являющаяся процессом.

Примеры:

```text
Alice
Bob
книга
здание
автомобиль
```

Ближайшие аналоги:

```text
owl:NamedIndividual
rdfs:Resource
bfo:MaterialEntity
dolce:PhysicalObject
```

Но `owl:NamedIndividual` обозначает способ использования имени, а не философскую категорию объекта.

## 3.4. `Process`

`Process` — физическая сущность, которая происходит во времени.

Примеры:

```text
чтение
строительство
движение
разговор
обучение
```

Ближайшие аналоги:

```text
bfo:Process
dolce:Perdurant
cidoc:E5_Event
```

Однако:

```text
SUMO Process ≠ любой OWL individual
```

OWL не имеет встроенной общей категории процессов.

## 3.5. `Abstract`

`Abstract` — сущность, не имеющая положения в пространстве-времени.

Примеры:

```text
класс
отношение
число
атрибут
пропозиция
множество
```

Ближайший OWL-аналог:

```text
owl:Class
owl:ObjectProperty
owl:DatatypeProperty
owl:Restriction
```

Но `owl:Class` покрывает только один из видов абстрактных элементов.

## 3.6. `Set`

`Set` — абстрактная совокупность элементов.

В SUMO теория множеств играет роль основания для классов и отношений.

Ближайший OWL-аналог:

```text
класс как множество своих экземпляров
```

Но OWL не предоставляет универсального объекта `owl:Set`.

## 3.7. `Class`

В SUMO `Class` — класс, задающий условия принадлежности своим экземплярам.

Класс является разновидностью абстрактной сущности.

В SUMO:

```text
Class ⊆ SetOrClass
```

Ближайший OWL-аналог:

```text
owl:Class
```

Но важно различать:

```text
SUMO Class — элемент предметно-логической иерархии SUMO
owl:Class — vocabulary term OWL/RDF
```

В SUMO класс может быть представлен как элемент абстрактной иерархии, а не только как RDF-ресурс, имеющий `rdf:type owl:Class`.

## 3.8. `SetOrClass`

`SetOrClass` объединяет множества и классы.

Это один из ключевых терминов SUMO для понимания метамоделирования:

```text
SetOrClass
├── Set
└── Class
```

В ряде формализаций SUMO класс понимается как множество с условием членства. [ontologyportal](http://ontologyportal.org/professional/FOIS.pdf)

Ближайшие OWL-аналоги:

```text
owl:Class
rdfs:Class
```

Но:

```text
SetOrClass ≠ owl:Class
```

поскольку `SetOrClass` включает ещё множества как математические или абстрактные совокупности.

## 3.9. `Relation`

`Relation` — абстрактная сущность, задающая отношение между сущностями.

Примеры:

```text
instance
subclass
hasPart
located
agent
```

В SUMO отношение может рассматриваться как класс упорядоченных кортежей. [ontologyportal](http://ontologyportal.org/professional/FOIS.pdf)

Ближайшие OWL-аналоги:

```text
owl:ObjectProperty
owl:DatatypeProperty
rdf:Property
```

Различие:

```text
SUMO Relation — абстрактная сущность и класс кортежей;
OWL property — RDF/OWL-свойство с определённой семантикой.
```

## 3.10. `Predicate`

`Predicate` — более специальный вид отношения, используемый в логических утверждениях.

В O2P:

```text
o2p:isInstance
o2p:isSubClass
o2p:hasProperty
```

могут быть представлены как отношения или предикаты.

Ближайшие RDF/OWL-аналоги:

```text
rdf:Property
owl:ObjectProperty
owl:DatatypeProperty
```

## 3.11. `Attribute`

`Attribute` — абстрактная характеристика, которая может быть присуща сущности.

Примеры:

```text
цвет
твёрдость
температура
форма
```

Ближайшие OWL-аналоги:

```text
owl:DatatypeProperty
owl:ObjectProperty
```

Но SUMO `Attribute` — не само значение свойства и не сам предикат RDF.

Например:

```text
red — значение или атрибут;
hasColor — отношение;
book123 — объект.
```

## 3.12. `Quantity`

`Quantity` — количественная сущность или измеряемая величина:

```text
5 метров
2 часа
100 килограммов
```

Ближайшие аналоги:

```text
xsd:integer
xsd:decimal
qudt:QuantityValue
```

Для O2P желательно использовать QUDT для единиц и значений измерений, а не моделировать всё простыми строками.

## 3.13. `Proposition`

`Proposition` — абстрактное содержание утверждения.

Пример:

```text
«Алиса читает книгу».
```

В обычном RDF это можно представить набором троек, но сама пропозиция как объект требует reification или RDF-star.

Ближайшие аналоги:

```text
rdf:Statement
RDF-star quoted triple
owl:Axiom
```

Однако они не полностью эквивалентны SUMO `Proposition`.

## 3.14. `AttributeValue`

В SUMO значение атрибута может быть отделено от самого атрибута.

Например:

```text
Attribute: Color
Value: Red
```

O2P-аналог:

```text
o2p:hasProperty o2p:Color .
ex:book123 o2p:hasColor o2p:Red .
```

Или:

```turtle
ex:book123 o2p:hasColorValue "red"@en .
```

Нужно различать:

```text
o2p:Color — категория или атрибут;
o2p:Red — концептуальное значение;
"red" — литеральное значение;
ex:book123 — конкретный объект.
```

## 3.15. `instance`

В SUMO `instance` — отношение между индивидуальным объектом и классом.

Пример SUMO:

```text
(instance thisGasEngine GasolineEngine)
```

Читается:

```text
thisGasEngine является экземпляром GasolineEngine.
```

Ближайший OWL-аналог:

```turtle
ex:thisGasEngine rdf:type sumo:GasolineEngine .
```

O2P-аналог:

```turtle
ex:thisGasEngine o2p:isInstance sumo:GasolineEngine .
```

В O2P:

```text
o2p:isInstance: Instance × Category
```

SUMO использует отношение `instance` не только для физических вещей, но и для разных сущностей, если они являются членами соответствующих классов.

## 3.16. `subclass`

В SUMO `subclass` связывает класс с более общим классом:

```text
(subclass Student Person)
```

O2P-аналог:

```turtle
o2p:Student o2p:isSubClass o2p:Person .
```

OWL/RDFS-аналоги:

```turtle
o2p:Student rdfs:subClassOf o2p:Person .
o2p:Student owl:subClassOf o2p:Person .
```

В OWL корректное свойство для такой связи — `rdfs:subClassOf`; отдельного стандартного `owl:subClassOf` нет.

## 3.17. `subrelation`

`subrelation` — отношение специализации одного отношения другим.

Пример:

```text
hasMother subrelation hasParent
```

O2P-аналог:

```turtle
o2p:hasMother o2p:isSubRelation o2p:hasParent .
```

OWL-аналог:

```turtle
o2p:hasMother rdfs:subPropertyOf o2p:hasParent .
```

## 3.18. `Entity`, `Object`, `Individual`

Эти термины нельзя смешивать:

| Термин SUMO | Смысл |
|---|---|
| `Entity` | любая сущность верхнего уровня |
| `Physical` | сущность с положением в пространстве-времени |
| `Object` | физическая сущность, сохраняющая идентичность |
| `Process` | физическая сущность, происходящая во времени |
| `Individual` | конкретный член класса, обычно в логическом смысле |
| `Class` | абстрактная категория с условиями членства |
| `Relation` | абстрактное отношение между сущностями |

В O2P:

```text
SUMO Entity     — широкая сущность;
SUMO Object     — конкретная вещь;
SUMO Process    — конкретный процесс;
SUMO Class      — категория или класс;
SUMO instance   — отношение экземпляра к категории.
```

# 4. Сводное соответствие SUMO и OWL/RDFS

| SUMO | O2P | Ближайший OWL/RDFS термин | Комментарий |
|---|---|---|---|
| `Entity` | Сущность | `owl:Thing`, `rdfs:Resource` | Только приблизительное соответствие |
| `Physical` | Физический экземпляр | Нет прямого аналога | Можно определить собственный класс |
| `Object` | Вещь | `owl:NamedIndividual` | OWL individual — роль имени, а не физическая категория |
| `Process` | Процесс | Нет встроенного аналога | Используются BFO/DOLCE/CIDOC CRM или свой класс |
| `Abstract` | Абстрактная сущность | Частично `owl:Class`, `owl:ObjectProperty` | OWL распределяет абстрактные сущности по разным ролям |
| `SetOrClass` | Категория/класс | `owl:Class`, `rdfs:Class` | SUMO понятие шире |
| `Class` | Категория | `owl:Class` | Наиболее близкий аналог |
| `Relation` | Предикат/отношение | `rdf:Property`, `owl:ObjectProperty` | SUMO Relation более логически нагружен |
| `Attribute` | Атрибут/качество | `owl:ObjectProperty`, `owl:DatatypeProperty` | Не совпадает с конкретным значением |
| `Quantity` | Величина | XML Schema datatype, QUDT | Лучше использовать QUDT |
| `Proposition` | Высказывание | `owl:Axiom`, RDF-star | Полного аналога нет |
| `instance` | `o2p:isInstance` | `rdf:type` / `a` | O2P делает направление и сортировку явными |
| `subclass` | `o2p:isSubClass` | `rdfs:subClassOf` | O2P ограничивает концы категориями |
| `subrelation` | `o2p:isSubRelation` | `rdfs:subPropertyOf` | Близкое соответствие |
| `member` | `o2p:isMember` | `rdf:type` или custom relation | Зависит от того, класс это или множество |
| `hasPart` | `o2p:hasPart` | `dcterms:hasPart`, `hasPart` vocabularies | Нужна отдельная семантика частей |

# 5. SUMO и O2P: уточнённая схема

После вашего уточнения я бы больше не писал:

```text
мир вещей = только Object
```

Лучше:

```text
мир вещей/теней = Physical
```

Он включает:

```text
Object
Process
```

А категория процесса является абстрактной формой:

```text
o2p:ReadingProcess
```

Конкретное осуществление процесса:

```text
ex:reading_20261006
```

Полная схема:

```text
SUMO Entity
├── Physical — мир происходящего
│   ├── Object — устойчивые вещи
│   └── Process — динамические вещи
│
└── Abstract — мир абстрактных форм
    ├── SetOrClass — категории
    ├── Relation — отношения
    ├── Attribute — качества
    ├── Quantity — величины
    └── Proposition — содержания утверждений
```

Для O2P:

```text
Категория объекта:
    o2p:Book

Экземпляр объекта:
    ex:book123

Категория процесса:
    o2p:ReadingProcess

Экземпляр процесса:
    ex:reading_20261006
```

# 6. Платон: действительно ли это два мира?

Да, в классической интерпретации Платона есть сильное сходство с моделью:

```text
неизменные Формы
изменяющиеся чувственные частности
```

Формы описываются как:

```text
нематериальные
непространственные
вневременные
неизменные
универсальные
```

А чувственные частности:

```text
материальные
пространственно-временные
изменяющиеся
множественные
несовершенные
```

Stanford Encyclopedia of Philosophy прямо описывает противопоставление неизменных Форм и изменяющихся материальных частностей; Формы характеризуются как нематериальные, внепространственные и вневременные, а частности — как материальные и протяжённые в пространстве и времени. [plato.stanford](https://plato.stanford.edu/entries/plato-metaphysics/)

Oxford Research Encyclopedia также формулирует различие между вечными нематериальными Формами и изменчивыми чувственными частностями. Формы являются объектами знания, а частности — объектами мнения или восприятия. [academic.oup](https://academic.oup.com/reference/62365/reference-article-abstract/554610959?redirectedFrom=fulltext)

Routledge Encyclopedia of Philosophy описывает Формы как неизменные и внепространственные сущности, противопоставленные изменяющимся телам, воспринимаемым чувствами. [rep.routledge](https://www.rep.routledge.com/articles/thematic/forms-platonic/v-1)

## 6.1. Сходство с SUMO

| Платон | SUMO | O2P |
|---|---|---|
| Формы | Abstract | Категории |
| Чувственные частности | Physical | Экземпляры |
| Конкретная вещь | Object | Instance/Object |
| Конкретное событие | Process | Process instance |
| Участие вещи в Форме | `instance` | `o2p:isInstance` |
| Иерархия Форм | `subclass` | `o2p:isSubClass` |

Например:

```text
Форма Человека
    → категория Person

Алиса
    → конкретная физическая вещь Object

Алиса участвует в/соответствует Форме Человека
    → ex:alice o2p:isInstance o2p:Person
```

## 6.2. Почему всё же была названа «частичная» аналогия

Ранее «частичная» означало не отрицание платоновской модели, а то, что:

```text
SUMO Abstract шире платоновского мира Форм;
SUMO Physical шире платоновского мира материальных тел;
```

SUMO помещает в `Abstract`:

```text
классы
отношения
числа
атрибуты
пропозиции
множества
```

Платоновский мир Форм — это не обязательно точная сумма всех этих категорий.

Кроме того, SUMO — формальная инженерная верхняя онтология, а не реконструкция платоновской метафизики.

Поэтому:

```text
SUMO Physical ≈ мир чувственных и происходящих сущностей
SUMO Abstract ≈ широкий мир абстрактных сущностей
O2P Category ⊂ SUMO Abstract
```

Более точное соответствие:

```text
Platonic Form ≈ SUMO Class или SetOrClass
Platonic Relation ≈ SUMO Relation
Platonic Attribute ≈ SUMO Attribute
Platonic Particular ≈ SUMO Object
Platonic Event/Process ≈ SUMO Process
```

# 7. Неоплатонизм

У неоплатоников схема Платона перестраивается в иерархию эманации:

```text
Единое
  ↓
Ум / Нус
  ↓
Мировая Душа
  ↓
Природа и чувственный космос
```

У Плотина истинно умопостигаемые Формы находятся в Нусе. Умопостигаемое является образцом чувственного, а чувственный мир занимает нижний уровень реальности.

Oxford Research Encyclopedia отмечает, что неоплатонизм развивает платоновскую модель умопостигаемых Форм как объектов истинного знания и связывает её с иерархией интеллигибельной реальности. [academic.oup](https://academic.oup.com/edited-volume/34644/chapter/295202867)

Для O2P это даёт не просто два множества, а многоуровневую структуру:

```text
Уровень 0: Единое
Уровень 1: Нус / мир Форм
Уровень 2: Душа / порядок жизни
Уровень 3: природные процессы
Уровень 4: конкретные вещи и события
```

SUMO не моделирует такую метафизическую эманацию напрямую. Но её можно приблизительно представить через дополнительные отношения:

```text
o2p:emanatesFrom
o2p:grounds
o2p:images
o2p:participatesIn
o2p:instantiates
```

Пример:

```turtle
o2p:Person o2p:grounds ex:alice .
ex:alice o2p:isInstance o2p:Person .
```

Однако `grounds` и `isInstance` не следует считать синонимами:

```text
isInstance — логическое членство в категории;
participatesIn — философское участие;
grounds — отношение основания или зависимости.
```

# 8. Гегель о Платоне

Гегелевская интерпретация Платона важна, потому что Гегель критиковал слишком простое понимание Форм как находящихся в отдельном пространстве «где-то вне вещей».

В статье Stanford Encyclopedia of Philosophy о гегелевской диалектике указывается, что Платон связывает знание мира с Формами, а вещи получают свои определения через участие в Форме. В популяризированной интерпретации Формы оказываются в отдельном царстве, но гегелевская философия стремится понять универсальное не как неподвижный внешний образ, а как рациональное понятие, проявляющееся в конкретном. [plato.stanford](https://plato.stanford.edu/entries/hegel-dialectics/)

Для O2P это важное предупреждение:

```text
категория не обязательно должна быть физически отдельным объектом;
она может быть формой, принципом определения или универсальным содержанием.
```

Нужно различать две интерпретации.

## 8.1. Сильное разделение миров

```text
мир Форм существует отдельно;
вещи лишь копируют или отражают Формы;
между ними есть отношение участия.
```

Это ближе к грубой платоновской двухмировой схеме:

```text
CategoryWorld ∩ PhysicalWorld = ∅
```

## 8.2. Гегелевская интерпретация

```text
универсальное не покидает конкретное;
понятие реализуется в единичном;
форма и содержание связаны диалектически.
```

Тогда категория:

```text
не только внешняя идея;
она также внутренний принцип определения вещи.
```

Для O2P это означает, что одного отношения:

```text
ex:alice o2p:isInstance o2p:Person
```

может быть недостаточно. Возможно, потребуются разные отношения:

```text
o2p:isInstance
o2p:participatesIn
o2p:manifests
o2p:realizes
o2p:isGroundedBy
```

# 9. Исследования SUMO и философские традиции

Прямых исследований, формализующих SUMO именно как модель Платона, немного. SUMO разрабатывалась как формальная верхняя онтология для информационных систем, а не как реконструкция античной философии. Официальные и академические материалы описывают её как верхнюю онтологию, организованную вокруг `Entity`, `Physical` и `Abstract`. [adampease](https://www.adampease.com/FOIS.pdf)

Однако есть несколько направлений, где SUMO сопоставима с философскими схемами.

## 9.1. SUMO и реализм универсалий

SUMO содержит:

```text
Class
SetOrClass
instance
subclass
```

Это позволяет приблизить реалистическую модель универсалий:

```text
Class — универсальный тип;
instance — участие конкретного в универсальном;
subclass — отношение между универсалиями.
```

Но SUMO не обязана принимать метафизический реализм в сильном платоновском смысле.

## 9.2. SUMO и номинализм

SUMO можно интерпретировать более номиналистически:

```text
Class — формальная совокупность объектов;
instance — членство;
subclass — включение множеств.
```

В такой интерпретации класс не является отдельной вечной Формой, а представляет условие принадлежности.

Исследования по вложению SUMO в теорию множеств прямо рассматривают:

```text
instance t1 t2 → t1 ∈ t2
subclass t1 t2 → t1 ⊆ t2
```

и тем самым показывают, что SUMO можно формализовать как множество классов и отношений, а не обязательно как самостоятельный мир платоновских сущностей. [aitp-conference](http://aitp-conference.org/2022/abstract/AITP_2022_paper_18.pdf)

## 9.3. SUMO и аристотелевская традиция

SUMO также легко интерпретировать в аристотелевском направлении:

```text
Object — субстанциальная вещь;
Attribute — свойство;
Process — изменение;
Class — универсальный предикат;
instance — принадлежность единичного общему.
```

В этом случае `Physical` и `Abstract` — не два онтологически независимых мира, а две категории предикации.

## 9.4. SUMO и неоплатонизм

Для неоплатонизма одной иерархии `Physical` / `Abstract` недостаточно. Нужны отношения эманации и зависимости:

```text
emanatesFrom
participatesIn
images
dependsOn
realizes
```

SUMO предоставляет классы и отношения, но не готовую метафизику:

```text
Единое → Ум → Душа → Природа → индивидуальные вещи
```

Поэтому можно сказать:

```text
SUMO совместима с созданием неоплатонического расширения,
но сама по себе не является неоплатонической онтологией.
```

## 9.5. SUMO и Гегель

Гегелевская схема требует учитывать:

```text
универсальное
особенное
единичное
```

и переходы между ними.

SUMO предоставляет близкие технические элементы:

```text
Class       — универсальное;
subclass    — особенное;
instance    — единичное.
```

Но `subclass` и `instance` сами по себе не выражают гегелевскую диалектику или становление универсального в единичном.

Для гегелевского профиля O2P потребуется добавить:

```text
o2p:isUniversalOf
o2p:isParticularizationOf
o2p:isRealizedIn
o2p:isDeterminedBy
o2p:developsInto
```

# 10. Уточнённая архитектура O2P на SUMO

Предлагаю следующую схему.

```text
SUMO Entity
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

O2P-слой:

```text
o2p:Category ⊆ SUMO Class
o2p:Property  ⊆ SUMO Relation
o2p:Attribute ⊆ SUMO Attribute
o2p:Quantity  ⊆ SUMO Quantity

o2p:Object   ⊆ SUMO Object
o2p:Process  ⊆ SUMO Process
o2p:Event    ⊆ SUMO Process
```

Предикаты:

```text
o2p:isInstance  ≈ SUMO instance
o2p:isSubClass  ≈ SUMO subclass
o2p:isSubRelation ≈ SUMO subrelation
o2p:hasProperty — O2P-specific
o2p:hasValue    — O2P-specific
```

# 11. Пример: категория и процесс

```turtle
@prefix o2p: <https://github.com/bpmbpm/ontology/o2p#> .
@prefix ex:  <https://example.org/> .
@prefix sumo: <http://www.ontologyportal.org/SUMO.owl#> .
@prefix time: <http://www.w3.org/2006/time#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

#################################################################
# Category level
#################################################################

o2p:ReadingProcess
    o2p:isSubClass sumo:Process ;
    o2p:hasProperty o2p:hasParticipant ;
    o2p:hasProperty o2p:hasObject .

#################################################################
# Instance level
#################################################################

ex:alice
    o2p:isInstance sumo:Object .

ex:book123
    o2p:isInstance sumo:Object .

ex:reading_20261006
    o2p:isInstance o2p:ReadingProcess ;
    o2p:hasParticipant ex:alice ;
    o2p:hasObject ex:book123 ;
    time:hasBeginning ex:twelve ;
    time:hasEnd ex:fourteen .

ex:twelve
    time:inXSDDateTime "2026-10-06T12:00:00+03:00"^^xsd:dateTime .

ex:fourteen
    time:inXSDDateTime "2026-10-06T14:00:00+03:00"^^xsd:dateTime .
```

Чтение:

```text
o2p:ReadingProcess — образ или категория процесса чтения.
ex:reading_20261006 — конкретный процесс чтения.
ex:alice — участник процесса.
ex:book123 — объект процесса.
```

# 12. Итоговый ответ на ваш первый вопрос

Фраза:

```text
мир вещей — Physical, но Physical включает процессы
```

не является проблемой, если понимать «вещи» в широком платоновском смысле как мир чувственно данного и происходящего.

Более точная терминология:

```text
Physical — мир пространственно-временных проявлений;
Object — устойчивый объект;
Process — динамический объект или происходящее;
Abstract — мир нематериальных и внепространственных сущностей;
Class / SetOrClass — категория или универсальная форма;
instance — отношение конкретного к категории.
```

Тогда процесс имеет два уровня:

```text
образ процесса:
    o2p:ReadingProcess

конкретный процесс:
    ex:reading_20261006
```

Именно здесь SUMO оказывается очень полезной:

```text
Object и Process — виды Physical;
Class и Relation — виды Abstract;
instance и subclass — базовые отношения между ними.
```

# 13. Итоговый ответ на второй вопрос

У Платона действительно есть сильная модель различения:

```text
неизменные Формы / Идеи
изменяющиеся чувственные частности
```

Это сходно с:

```text
SUMO Abstract / SUMO Physical
O2P Category / O2P Instance
```

Но полное отождествление невозможно:

```text
SUMO Abstract шире платоновских Форм;
SUMO Physical включает процессы;
SUMO не задаёт отдельную платоновскую метафизику;
SUMO instance — формальное отношение, а не обязательно «участие» в платоновской Форме.
```

Поэтому наиболее точное утверждение:

```text
SUMO предоставляет технический верхнеонтологический каркас,
который можно интерпретировать как основу для O2P,
но платоновский и неоплатонический смысл должен быть добавлен
собственными отношениями O2P.
```

Рекомендуемый фундамент:

```text
SUMO:
    Entity, Physical, Object, Process,
    Abstract, Class, Relation, Attribute

O2P:
    isInstance
    isSubClass
    hasProperty
    hasValue
    participatesIn
    manifests
    realizes
    isGroundedBy
```

То есть SUMO действительно является одним из наиболее подходящих кандидатов для O2P, но не потому, что просто содержит:

```text
Entity → Abstract / Physical
```

а потому, что дополнительно различает:

```text
Object
Process
Class
SetOrClass
Relation
Attribute
instance
subclass
```

Именно совокупность этих различий позволяет выразить:

```text
категория объекта
экземпляр объекта
категория процесса
экземпляр процесса
отношение между категориями
конкретное проявление отношения
```


## g4
---

покажи как через тип предиката понимать, что в триплете? 
У нас ведь было три типа:
утверждение внутри мира идей
утверждение внутри мира вещей (включая экземпляры процессов)
связь миров, т.е. объявление новых экземпляров вещей или процесса.

Поясни на примере все три подхода. 
Также как это привязать к IRI? Это какой класс в SUMO? Ранее вроде бы было все есть ресурс и распадалось на аир идей и мир вещей. Теперь как, если в SUMO корень иерархии — Entity

Да. В O2P тип триплета должен определяться не именем субъекта и не пространством имён, а **типом предиката**. Тогда, увидев предикат, можно понять, какие роли имеют субъект и объект.

В SUMO это хорошо согласуется с тем, что `Entity` — корень иерархии, а `Physical` и `Abstract` — его основные подклассы. `Physical` далее разделяется на `Object` и `Process`; `Abstract` включает, в частности, классы, отношения, атрибуты и другие абстрактные сущности. [ontology.nps](https://ontology.nps.edu/sigma/TreeView.jsp?lang=EnglishLanguage&flang=SUO-KIF&kb=SUMO&file=Mid-level-ontology.kif&line=4279)

# 1. Три типа триплетов O2P

Вводим три класса предикатов:

```text
IdeaAssertionProperty
ThingAssertionProperty
BridgeProperty
```

В терминах O2P:

```text
IdeaAssertionProperty — предикаты утверждений внутри мира категорий
ThingAssertionProperty — предикаты утверждений внутри мира экземпляров
BridgeProperty — предикаты связи категорий и экземпляров
```

Они сами являются элементами верхнеонтологического уровня. В SUMO их можно считать экземплярами или подклассами `Relation`.

Схема:

```text
SUMO Abstract
└── Relation
    ├── IdeaAssertionProperty
    ├── ThingAssertionProperty
    └── BridgeProperty
```

Для конкретных предикатов:

```text
o2p:isSubClass       — IdeaAssertionProperty
o2p:hasProperty      — IdeaAssertionProperty
o2p:hasAuthor        — ThingAssertionProperty
o2p:hasColor         — ThingAssertionProperty
o2p:isInstance       — BridgeProperty
o2p:participatesIn   — BridgeProperty
```

# 2. Тип 1: утверждение внутри мира идей

## 2.1. Смысл

Триплет первого типа описывает отношения между категориями, классами, образами, типами и свойствами:

```text
<Category> <IdeaAssertionProperty> <Category or Idea>
```

В терминах областей:

```text
Category × IdeaAssertionProperty × Category
```

или:

```text
ΔIdea × ΔRelation × ΔIdea
```

## 2.2. Иерархия категорий

```turtle
o2p:Student o2p:isSubClass o2p:Person .
```

Термины:

```text
o2p:Student — категория
o2p:isSubClass — предикат внутри мира идей
o2p:Person — категория
```

Смысл:

```text
Student является подкатегорией Person.
```

В терминах SUMO это близко к:

```text
(subclass Student Person)
```

В терминах RDFS:

```turtle
o2p:Student rdfs:subClassOf o2p:Person .
```

Но O2P использует собственный предикат, чтобы обозначить:

```text
обе стороны относятся к миру категорий.
```

## 2.3. Свойство категории

```turtle
o2p:Person o2p:hasProperty foaf:name .
o2p:Person o2p:hasProperty foaf:familyName .
```

Смысл:

```text
категория Person предусматривает свойства name и familyName.
```

Это не утверждение о конкретном человеке. Здесь нет экземпляра.

Тип триплета:

```text
Category — IdeaAssertionProperty — PropertyIdea
```

Формально:

```text
o2p:hasProperty ⊆ ΔCategory × ΔProperty
```

Если считать свойства частным видом идей:

```text
ΔProperty ⊆ ΔIdea
```

тогда:

```text
o2p:hasProperty ⊆ ΔCategory × ΔIdea
```

## 2.4. Ограничение мира идей

Для предикатов первого типа задаётся правило:

```text
x o2p:isSubClass y
→ x является категорией
→ y является категорией
```

```text
x o2p:hasProperty p
→ x является категорией
→ p является идеей свойства
```

Неправильно:

```turtle
ex:alice o2p:isSubClass o2p:Person .
```

Потому что `ex:alice` — конкретный экземпляр, а `o2p:isSubClass` предназначен для двух категорий.

# 3. Тип 2: утверждение внутри мира вещей

## 3.1. Смысл

Триплет второго типа описывает отношения между конкретными экземплярами:

```text
<Instance> <ThingAssertionProperty> <Instance or Literal>
```

В терминах областей:

```text
Instance × ThingAssertionProperty × Instance
Instance × ThingAssertionProperty × Data
```

Или:

```text
ΔInstance × ΔRelation × ΔInstance
ΔInstance × ΔRelation × ΔData
```

## 3.2. Отношение между конкретными объектами

```turtle
ex:book123 o2p:hasAuthor ex:alice .
```

Смысл:

```text
конкретная книга book123 имеет конкретного автора alice.
```

Тип:

```text
Instance — ThingAssertionProperty — Instance
```

В терминах SUMO:

```text
ex:book123 — Object
ex:alice   — Object
o2p:hasAuthor — Relation
```

## 3.3. Литеральное значение

```turtle
ex:alice foaf:name "Алиса"@ru .
ex:alice foaf:familyName "Петрова"@ru .
```

Тип:

```text
Instance — ThingAssertionProperty — Literal
```

Семантически:

```text
ex:alice ∈ ΔInstance
"Алиса" ∈ ΔData
```

Термин `foaf:name` здесь выступает как предикат отношения конкретного экземпляра к значению данных.

## 3.4. Процесс как экземпляр мира вещей

В O2P процесс не должен исключаться из мира вещей. Нужно различать:

```text
категория процесса
конкретный процесс
```

Категория:

```turtle
o2p:ReadingProcess
```

Конкретный процесс:

```turtle
ex:reading_20261006
```

Сам процесс относится к SUMO `Process`:

```text
ex:reading_20261006 — экземпляр SUMO Process
```

Его внутренние свойства:

```turtle
ex:reading_20261006
    o2p:hasParticipant ex:alice ;
    o2p:hasObject ex:book123 ;
    o2p:startsAt "2026-10-06T12:00:00+03:00"^^xsd:dateTime ;
    o2p:endsAt "2026-10-06T14:00:00+03:00"^^xsd:dateTime .
```

Все эти утверждения относятся к миру конкретных проявлений:

```text
конкретный процесс связан с конкретным участником;
конкретный процесс связан с конкретным объектом;
конкретный процесс имеет конкретное время.
```

## 3.5. Категория процесса

Категория процесса описывается внутри мира идей:

```turtle
o2p:ReadingProcess o2p:hasProperty o2p:hasParticipant .
o2p:ReadingProcess o2p:hasProperty o2p:hasObject .
```

Это уже триплеты первого типа.

Таким образом:

```text
o2p:ReadingProcess
```

— образ или категория процесса.

```text
ex:reading_20261006
```

— конкретный процесс, происходящий в интервале 12:00–14:00.

# 4. Тип 3: связь миров

## 4.1. Смысл

Триплет третьего типа связывает категорию с конкретным экземпляром:

```text
<Instance> <BridgeProperty> <Category>
```

Главный пример:

```turtle
ex:alice o2p:isInstance o2p:Person .
```

Смысл:

```text
конкретный экземпляр ex:alice относится к категории o2p:Person.
```

В SUMO это соответствует отношению:

```text
(instance alice Person)
```

SUMO определяет `instance` как отношение, при котором объект включён в класс; один индивидуальный объект может быть экземпляром нескольких классов. [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&term=instance)

## 4.2. Формальная сигнатура

```text
o2p:isInstance ⊆ ΔInstance × ΔCategory
```

Предикат направлен так:

```text
Instance → Category
```

Поэтому:

```turtle
ex:alice o2p:isInstance o2p:Person .
```

правильно, а:

```turtle
o2p:Person o2p:isInstance ex:alice .
```

неправильно.

## 4.3. Экземпляр процесса

```turtle
ex:reading_20261006 o2p:isInstance o2p:ReadingProcess .
```

Смысл:

```text
конкретное чтение является экземпляром категории ReadingProcess.
```

В этом триплете:

```text
ex:reading_20261006 — конкретный SUMO Process
o2p:ReadingProcess — категория процесса
o2p:isInstance — связь миров
```

## 4.4. Другие связи миров

Кроме `o2p:isInstance`, могут существовать:

```text
o2p:manifests
o2p:realizes
o2p:participatesIn
o2p:conformsTo
o2p:hasPrototype
```

Но их нельзя смешивать.

| Предикат | Смысл |
|---|---|
| `o2p:isInstance` | экземпляр принадлежит категории |
| `o2p:manifests` | экземпляр проявляет идею или качество |
| `o2p:realizes` | экземпляр реализует форму или спецификацию |
| `o2p:conformsTo` | экземпляр соответствует нормативному описанию |
| `o2p:participatesIn` | философское участие в идее |
| `o2p:hasPrototype` | категория связана с образцом |

Для первого ядра O2P достаточно:

```turtle
o2p:isInstance
```

Остальные отношения следует вводить только после фиксации их различий.

# 5. Полный пример трёх типов

```turtle
@prefix o2p: <https://github.com/bpmbpm/ontology/o2p#> .
@prefix ex:  <https://example.org/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

#################################################################
# Тип 1. Утверждения внутри мира категорий
#################################################################

o2p:Student
    o2p:isSubClass o2p:Person .

o2p:Person
    o2p:hasProperty foaf:name ;
    o2p:hasProperty foaf:familyName .

o2p:ReadingProcess
    o2p:hasProperty o2p:hasParticipant ;
    o2p:hasProperty o2p:hasObject ;
    o2p:hasProperty o2p:startsAt ;
    o2p:hasProperty o2p:endsAt .

#################################################################
# Тип 3. Связь мира экземпляров с миром категорий
#################################################################

ex:alice
    o2p:isInstance o2p:Student .

ex:bob
    o2p:isInstance o2p:Person .

ex:book123
    o2p:isInstance o2p:Book .

ex:reading_20261006
    o2p:isInstance o2p:ReadingProcess .

#################################################################
# Тип 2. Утверждения внутри мира экземпляров
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
    o2p:startsAt "2026-10-06T12:00:00+03:00"^^xsd:dateTime ;
    o2p:endsAt "2026-10-06T14:00:00+03:00"^^xsd:dateTime .
```

# 6. Как понять тип триплета по предикату

Предикат должен иметь метаописание:

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

o2p:hasColor
    o2p:assertionType o2p:ThingAssertionProperty ;
    o2p:sourceKind o2p:Instance ;
    o2p:targetKind o2p:Value .

o2p:isInstance
    o2p:assertionType o2p:BridgeProperty ;
    o2p:sourceKind o2p:Instance ;
    o2p:targetKind o2p:Category .
```

Тогда по предикату можно восстановить тип триплета:

| Предикат | Тип | Сигнатура |
|---|---|---|
| `o2p:isSubClass` | IdeaAssertionProperty | Category → Category |
| `o2p:hasProperty` | IdeaAssertionProperty | Category → Property |
| `o2p:hasAuthor` | ThingAssertionProperty | Instance → Instance |
| `o2p:hasColor` | ThingAssertionProperty | Instance → Value |
| `o2p:isInstance` | BridgeProperty | Instance → Category |

Например, увидев:

```turtle
ex:alice o2p:isInstance o2p:Person .
```

reasoner O2P читает описание `o2p:isInstance`:

```text
sourceKind = Instance
targetKind = Category
assertionType = BridgeProperty
```

и понимает:

```text
ex:alice — экземпляр;
o2p:Person — категория;
триплет связывает два мира.
```

# 7. Как типы предикатов связаны с SUMO

Для SUMO предикаты O2P сами можно сопоставить с `Relation`.

```text
SUMO Relation
├── o2p:IdeaAssertionProperty
├── o2p:ThingAssertionProperty
└── o2p:BridgeProperty
```

Однако сами конкретные предикаты — это не физические вещи:

```text
o2p:isInstance — абстрактное Relation
o2p:isSubClass — абстрактное Relation
o2p:hasAuthor — абстрактное Relation
```

Их предметная область различается сигнатурой.

В SUMO-подобной записи:

```text
(subclass o2p:IdeaAssertionProperty Relation)
(subclass o2p:ThingAssertionProperty Relation)
(subclass o2p:BridgeProperty Relation)
```

Далее:

```text
(instance o2p:isSubClass o2p:IdeaAssertionProperty)
(instance o2p:hasAuthor o2p:ThingAssertionProperty)
(instance o2p:isInstance o2p:BridgeProperty)
```

В Turtle-форме O2P:

```turtle
o2p:isSubClass
    o2p:assertionType o2p:IdeaAssertionProperty .

o2p:hasAuthor
    o2p:assertionType o2p:ThingAssertionProperty .

o2p:isInstance
    o2p:assertionType o2p:BridgeProperty .
```

# 8. Что такое IRI в этой модели

IRI — это **идентификатор**, а не отдельный объект SUMO.

Например:

```turtle
o2p:Person
```

синтаксически является IRI.

IRI обозначает термин, который может играть определённую семантическую роль:

```text
o2p:Person — категория;
ex:alice — конкретный экземпляр;
o2p:isInstance — отношение;
o2p:hasProperty — отношение;
```

Нельзя сказать:

```text
IRI — это класс SUMO.
```

Правильнее:

```text
IRI — имя, которым обозначается сущность.
```

А уже сущность может быть:

```text
SUMO Class
SUMO Object
SUMO Process
SUMO Relation
SUMO Attribute
SUMO Proposition
```

## 8.1. Таблица IRI и SUMO-роли

| IRI | Роль O2P | Ближайшая роль SUMO |
|---|---|---|
| `o2p:Person` | категория | `Class` или `SetOrClass` |
| `o2p:Student` | категория | `Class` |
| `ex:alice` | конкретный экземпляр | `Object` |
| `ex:reading_20261006` | экземпляр процесса | `Process` |
| `o2p:isInstance` | предикат-мост | `Relation` |
| `o2p:isSubClass` | предикат категорий | `Relation` |
| `o2p:hasAuthor` | предикат экземпляров | `Relation` |
| `o2p:hasColor` | свойство/отношение | `Relation` или `Attribute` |
| `"Алиса"` | значение данных | literal/data value |

## 8.2. IRI категории

```turtle
o2p:Person
```

может быть сопоставлен с:

```text
SUMO Class
SUMO SetOrClass
```

Но это не означает, что IRI сам является множеством. Он обозначает термин, роль которого в O2P определена как категория.

## 8.3. IRI экземпляра

```turtle
ex:alice
```

сопоставляется с конкретным индивидуальным объектом:

```text
SUMO Object
```

Но IRI `ex:alice` не есть сам объект. Это имя, обозначающее объект.

## 8.4. IRI предиката

```turtle
o2p:isInstance
```

сопоставляется с абстрактным отношением:

```text
SUMO Relation
```

IRI выступает в RDF как предикат, но в SUMO-семантике может быть экземпляром класса `Relation`.

# 9. Исправленная верхняя схема O2P на SUMO

Ранее можно было представить:

```text
Resource
├── Idea
└── Thing
```

Для SUMO это нужно заменить на более точную схему:

```text
SUMO Entity
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

O2P-отображение:

```text
o2p:Category        → SUMO Class / SetOrClass
o2p:Instance        → SUMO Entity
o2p:ObjectInstance  → SUMO Object
o2p:ProcessInstance → SUMO Process
o2p:Predicate       → SUMO Relation
o2p:Attribute       → SUMO Attribute
```

Это означает:

```text
категории принадлежат абстрактной ветви SUMO;
экземпляры не сводятся только к Physical;
физические экземпляры относятся к Physical;
абстрактные экземпляры могут также относиться к Abstract.
```

# 10. Что делать с прежней парой «мир идей / мир вещей»

Теперь модель нужно уточнить.

## 10.1. Не два класса, а два функциональных уровня

В O2P используются:

```text
мир категорий
мир экземпляров
```

Но в SUMO они не являются просто двумя сестринскими классами:

```text
Category ≠ Abstract полностью
Instance ≠ Physical полностью
```

Правильное соответствие:

```text
Category ⊆ Abstract
Instance ⊆ Entity
```

А внутри экземпляров:

```text
ObjectInstance ⊆ Physical
ProcessInstance ⊆ Physical
AbstractInstance ⊆ Abstract
```

## 10.2. Физическая часть мира экземпляров

```text
Instance
├── ObjectInstance
│   └── SUMO Object
└── ProcessInstance
    └── SUMO Process
```

Это и есть «мир вещей и теней» в расширенном смысле:

```text
статические вещи;
динамические процессы;
события;
состояния;
изменения.
```

## 10.3. Категориальная часть

```text
Category
├── ObjectCategory
├── ProcessCategory
├── RelationCategory
├── AttributeCategory
└── QuantityCategory
```

Примеры:

```text
o2p:Person         — ObjectCategory
o2p:ReadingProcess — ProcessCategory
o2p:hasAuthor      — RelationCategory
o2p:Color          — AttributeCategory
```

# 11. Три типа триплетов в окончательной форме

## Тип I: мир категорий

```text
<Category> <IdeaAssertionProperty> <Category or Property>
```

Примеры:

```turtle
o2p:Student o2p:isSubClass o2p:Person .
o2p:Person o2p:hasProperty foaf:name .
o2p:ReadingProcess o2p:hasProperty o2p:hasParticipant .
```

Смысл:

```text
мы описываем формы, категории и допустимые отношения.
```

## Тип II: мир экземпляров

```text
<Instance> <ThingAssertionProperty> <Instance or Literal>
```

Примеры:

```turtle
ex:alice foaf:name "Алиса"@ru .
ex:book123 o2p:hasAuthor ex:alice .
ex:reading_20261006 o2p:hasParticipant ex:alice .
```

Смысл:

```text
мы описываем конкретные вещи, процессы и их фактические свойства.
```

## Тип III: связь миров

```text
<Instance> <BridgeProperty> <Category>
```

Примеры:

```turtle
ex:alice o2p:isInstance o2p:Student .
ex:book123 o2p:isInstance o2p:Book .
ex:reading_20261006 o2p:isInstance o2p:ReadingProcess .
```

Смысл:

```text
конкретная сущность классифицируется категорией.
```

# 12. Важная оговорка о типе предиката

В RDF сам по себе предикат:

```turtle
o2p:isInstance
```

не заставляет стандартный RDF-парсер понять:

```text
субъект — экземпляр;
объект — категория;
триплет — связь миров.
```

Эту семантику нужно задать отдельно:

```turtle
o2p:isInstance
    o2p:assertionType o2p:BridgeProperty ;
    o2p:sourceKind o2p:Instance ;
    o2p:targetKind o2p:Category .
```

Возможны три механизма проверки:

```text
O2P reasoner
SHACL shapes
SPARQL validation rules
```

Например, SHACL-ограничение для `o2p:isInstance` может проверять, что субъект и объект принадлежат нужным наборам категорий. SHACL предназначен именно для проверки RDF-графа по набору условий и ограничений. [w3](https://www.w3.org/TR/shacl/)

# 13. Итоговая модель SUMO + O2P

```text
SUMO Entity
├── Physical
│   ├── Object
│   └── Process
│
└── Abstract
    ├── Class / SetOrClass
    ├── Relation
    ├── Attribute
    ├── Quantity
    └── Proposition
```

O2P:

```text
Category ⊆ SUMO Class / SetOrClass
Instance ⊆ SUMO Entity
ObjectInstance ⊆ SUMO Object
ProcessInstance ⊆ SUMO Process
Predicate ⊆ SUMO Relation
```

Три типа утверждений:

```text
1. Category → Category
   o2p:Student o2p:isSubClass o2p:Person

2. Instance → Instance или Literal
   ex:book123 o2p:hasAuthor ex:alice
   ex:alice foaf:name "Алиса"

3. Instance → Category
   ex:alice o2p:isInstance o2p:Person
```

IRI:

```text
IRI — идентификатор имени.
```

Он может обозначать:

```text
категорию SUMO Class;
вещь SUMO Object;
процесс SUMO Process;
отношение SUMO Relation;
атрибут SUMO Attribute.
```

Поэтому корневой вопрос теперь формулируется не как:

```text
все ресурсы делятся на идеи и вещи
```

а так:

```text
все обозначаемые сущности SUMO являются Entity;
среди них есть Physical и Abstract;
O2P выделяет поверх SUMO функциональные роли:
Category, Instance и Predicate;
тип предиката определяет допустимую комбинацию ролей в RDF-триплете.
```

Именно это позволяет совместить:

```text
SUMO:
Entity → Physical / Abstract → Object / Process / Class / Relation

O2P:
Category → isSubClass / hasProperty
Instance → hasAuthor / hasValue
Instance → isInstance → Category
```

Так SUMO предоставляет онтологическую природу сущностей, а O2P — явную структуру трёх типов утверждений.

## 5g

снабди Итоговая модель прямыми ссылками на спецификацию SUMO или ее обсуждения

Ниже — уточнённая **итоговая модель SUMO + O2P** с прямыми ссылками на исходные файлы, браузер Sigma и материалы разработчиков SUMO.

# 13. Итоговая модель SUMO + O2P

## 13.1. Официальная верхняя структура SUMO

В SUMO все термины происходят от корневого класса `Entity`:

```text
Entity
├── Physical
│   ├── Object
│   └── Process
│
└── Abstract
    ├── Class
    ├── Relation
    ├── Attribute
    ├── Quantity
    └── Proposition
```

В документации SUMO корневой термин `Entity` определён как универсальный класс индивидов. Он исчерпывающе разделяется на `Physical` и `Abstract`. [ontology.nps](https://ontology.nps.edu/sigma/TreeView.jsp?lang=EnglishLanguage&flang=SUO-KIF&kb=SUMO&file=Mid-level-ontology.kif&line=4279)

В исходном файле SUMO это выражается аксиомами вида:

```lisp
(subclass Physical Entity)
(subclass Abstract Entity)
```

Они доступны в исходном файле [`tinySUMO.kif`](https://github.com/ontologyportal/sumo/blob/master/tinySUMO.kif). [github](https://github.com/ontologyportal/sumo/blob/master/tinySUMO.kif)

Официальный портал SUMO содержит исходные файлы, документацию и инструменты проекта. SUMO формально записывается на языке SUO-KIF. [ontologyportal](https://www.ontologyportal.org/)

## 13.2. `Entity`

В SUMO:

```text
Entity — корневой класс всей онтологии.
```

Прямая ссылка на описание:

- [SUMO Entity в браузере Sigma](https://ontology.nps.edu/sigma/TreeView.jsp?lang=EnglishLanguage&flang=SUO-KIF&kb=SUMO&file=Mid-level-ontology.kif&line=4279)

Фрагмент определения:

```lisp
(documentation Entity EnglishLanguage
  "The universal class of individuals. This is the root node of the ontology.")
```

Поэтому O2P не должен трактовать IRI как экземпляр `Entity` автоматически. IRI — это идентификатор; он может обозначать сущность, которая в SUMO относится к `Entity`.

## 13.3. `Physical`

`Physical` — сущность, имеющая положение в пространстве-времени.

Прямая ссылка:

- [SUMO Physical в браузере Sigma](https://sigma.ontologyportal.org:8443/sigma/Browse.jsp?lang=en&kb=SUMO&term=Physical)

Определение SUMO:

```text
Physical — entity that has a location in space-time.
```

В O2P:

```text
Physical — мир чувственно проявляющихся и происходящих сущностей.
```

Он включает:

```text
Object  — относительно устойчивые вещи;
Process — динамические сущности, происходящие во времени.
```

Это соответствует вашей трактовке:

```text
Physical = мир вещей и теней
```

если слово «вещь» используется расширенно и включает процессы.

## 13.4. `Object`

`Object` — относительно устойчивый физический объект.

Примеры:

```text
ex:alice
ex:bob
ex:book123
```

В O2P:

```text
ex:book123 — конкретный экземпляр SUMO Object.
```

Прямой источник:

- [SUMO Object через официальный репозиторий ontologyportal/sumo](https://github.com/ontologyportal/sumo)

Семантически:

```text
Object — статическая или относительно устойчивая вещь.
```

Возможные O2P-роли:

```text
o2p:ObjectCategory
ex:book123
```

Но `ex:book123` не следует записывать в `o2p:`: пространство `o2p:` содержит термины модели, а `ex:` — конкретные экземпляры.

## 13.5. `Process`

`Process` — физическая сущность, разворачивающаяся во времени.

Прямая ссылка:

- [SUMO Process в браузере Sigma](https://ontology.nps.edu/sigma/Browse.jsp?lang=EnglishLanguage&flang=KIF&kb=SUMO&term=Process)

В исходных материалах SUMO процесс описывается как действие или изменение, происходящее во времени. [adampease](https://adampease.com/ImperfectK.pdf)

В O2P:

```text
o2p:ReadingProcess — категория процессов;
ex:reading_20261006 — конкретный процесс.
```

Пример:

```turtle
@prefix o2p: <https://github.com/bpmbpm/ontology/o2p#> .
@prefix ex:  <https://example.org/> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

o2p:ReadingProcess
    o2p:isSubClass sumo:Process .

ex:reading_20261006
    o2p:isInstance o2p:ReadingProcess ;
    o2p:hasParticipant ex:alice ;
    o2p:hasObject ex:book123 ;
    o2p:startsAt
        "2026-10-06T12:00:00+03:00"^^xsd:dateTime ;
    o2p:endsAt
        "2026-10-06T14:00:00+03:00"^^xsd:dateTime .
```

Различие:

```text
o2p:ReadingProcess
    — образ, категория или класс процессов чтения;

ex:reading_20261006
    — конкретное чтение, начавшееся в 12:00 и закончившееся в 14:00.
```

## 13.6. `Abstract`

`Abstract` — сущность, не имеющая положения в пространстве-времени.

Прямые ссылки:

- [SUMO Abstract в файле tinySUMO.kif](https://github.com/ontologyportal/sumo/blob/master/tinySUMO.kif)
- [Towards a Standard Upper Ontology](https://www.adampease.com/FOIS.pdf)

В SUMO к абстрактной ветви относятся:

```text
Class
Relation
Attribute
Quantity
Proposition
SetOrClass
```

Для O2P эта ветвь особенно важна, потому что в ней можно разместить:

```text
категории;
формы;
отношения;
атрибуты;
значения;
содержания утверждений.
```

Но:

```text
SUMO Abstract ≠ полностью платоновский мир идей.
```

`Abstract` шире: он включает не только категории, но и математические, логические и реляционные сущности.

## 13.7. `Class`

`Class` — абстрактная сущность, задающая класс своих экземпляров.

Прямая ссылка на исходные определения и аксиомы SUMO:

- [SUMO Merge.kif](https://github.com/ontologyportal/sumo/blob/master/Merge.kif)

В файле присутствует, например:

```lisp
(instance ?CLASS Class)
(subclass ?CLASS Entity)
```

Это означает, что термин, используемый как класс, сам рассматривается в структурной онтологии SUMO как сущность соответствующего типа. [github](https://github.com/ontologyportal/sumo/blob/master/Merge.kif)

В O2P:

```text
o2p:Person — категория;
o2p:Student — подкатегория;
ex:alice — экземпляр категории.
```

Пример:

```turtle
o2p:Student
    o2p:isSubClass o2p:Person .

ex:alice
    o2p:isInstance o2p:Student .
```

Ближайший аналог OWL:

```text
owl:Class
```

Но:

```text
SUMO Class ≠ автоматически owl:Class
```

SUMO использует собственную логическую модель `instance` и `subclass`, а OWL — RDF/OWL-семантику.

## 13.8. `SetOrClass`

`SetOrClass` — более широкая абстрактная категория, объединяющая классы и множества.

Ближайшие ссылки:

- [SUMO modeling paper](https://arxiv.org/pdf/2012.15835.pdf)
- [SUMO KIF repository](https://github.com/ontologyportal/sumo)

Для O2P это важное различие:

```text
Category — категория или форма;
Collection — совокупность конкретных экземпляров;
Class — условие или универсалия классификации;
Set — абстрактное множество.
```

Не следует автоматически отождествлять:

```text
o2p:Person
```

с конкретным множеством всех людей в некотором контексте.

Лучше:

```text
o2p:Person — категория;
ext(o2p:Person) — множество соответствующих экземпляров.
```

## 13.9. `Relation`

`Relation` — абстрактная сущность, задающая отношение между сущностями.

Прямая ссылка:

- [SUMO Merge.kif](https://github.com/ontologyportal/sumo/blob/master/Merge.kif)

SUMO описывает отношения как объекты структурной онтологии, для которых задаются домен, диапазон и арность.

Ближайшие OWL/RDFS-аналоги:

```text
rdf:Property
owl:ObjectProperty
owl:DatatypeProperty
```

В O2P:

```text
o2p:isInstance — Relation;
o2p:isSubClass — Relation;
o2p:hasProperty — Relation;
o2p:hasAuthor — Relation.
```

Но отношения подразделяются по сигнатуре:

```text
IdeaAssertionProperty
ThingAssertionProperty
BridgeProperty
```

# 14. Формальная модель SUMO + O2P

## 14.1. SUMO-уровень

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

Эта схема основана на верхнеуровневой классификации SUMO:

```text
Entity → Physical / Abstract
Physical → Object / Process
Abstract → Class, Relation, Attribute, ...
```

Прямые источники:

- [SUMO Entity](https://ontology.nps.edu/sigma/TreeView.jsp?lang=EnglishLanguage&flang=SUO-KIF&kb=SUMO&file=Mid-level-ontology.kif&line=4279)
- [SUMO Physical](https://sigma.ontologyportal.org:8443/sigma/Browse.jsp?lang=en&kb=SUMO&term=Physical)
- [SUMO Process](https://ontology.nps.edu/sigma/Browse.jsp?lang=EnglishLanguage&flang=KIF&kb=SUMO&term=Process)
- [SUMO source repository](https://github.com/ontologyportal/sumo)
- [SUMO official portal](https://www.ontologyportal.org/)

## 14.2. O2P-уровень

O2P не заменяет верхнюю иерархию SUMO, а выделяет в ней роли, необходимые для трёх типов утверждений:

```text
O2P Category
O2P Instance
O2P Predicate
```

Отображение:

```text
O2P Category  ⊆ SUMO Class / SetOrClass
O2P Instance  ⊆ SUMO Entity
O2P Predicate ⊆ SUMO Relation
```

Для экземпляров:

```text
O2P ObjectInstance  ⊆ SUMO Object
O2P ProcessInstance ⊆ SUMO Process
```

Для категорий:

```text
O2P ObjectCategory  ⊆ SUMO Class
O2P ProcessCategory ⊆ SUMO Class
O2P RelationCategory ⊆ SUMO Class
```

# 15. Три типа триплетов

## 15.1. Тип I: утверждение внутри мира категорий

Форма:

```text
<Category> <IdeaAssertionProperty> <Category or Property>
```

Пример:

```turtle
o2p:Student
    o2p:isSubClass o2p:Person .
```

Смысл:

```text
Student — подкатегория Person.
```

SUMO-аналог:

```lisp
(subclass Student Person)
```

O2P-сигнатура:

```text
o2p:isSubClass: Category × Category
```

Другой пример:

```turtle
o2p:Person
    o2p:hasProperty foaf:name .
```

Смысл:

```text
категория Person предусматривает свойство name.
```

Тип:

```text
Category × Property
```

Прямой аналог в SUMO:

```text
Relation / Attribute / Class-based constraint
```

Но отдельного полностью эквивалентного предиката в SUMO для `o2p:hasProperty` нет, поэтому это собственное расширение O2P.

## 15.2. Тип II: утверждение внутри мира экземпляров

Форма:

```text
<Instance> <ThingAssertionProperty> <Instance or Literal>
```

Пример:

```turtle
ex:book123
    o2p:hasAuthor ex:alice .
```

Смысл:

```text
конкретная книга имеет конкретного автора.
```

SUMO-уровень:

```text
ex:book123 — Object
ex:alice   — Object
o2p:hasAuthor — Relation
```

Другой пример:

```turtle
ex:alice
    foaf:name "Алиса"@ru .
```

Тип:

```text
Instance × Literal
```

Для процесса:

```turtle
ex:reading_20261006
    o2p:hasParticipant ex:alice ;
    o2p:hasObject ex:book123 .
```

Здесь конкретный `Process` связан с конкретными `Object`.

## 15.3. Тип III: связь мира экземпляров с миром категорий

Форма:

```text
<Instance> <BridgeProperty> <Category>
```

Пример:

```turtle
ex:alice
    o2p:isInstance o2p:Person .
```

Смысл:

```text
Alice является экземпляром категории Person.
```

SUMO-аналог:

```lisp
(instance alice Person)
```

Прямая ссылка:

- [SUMO `instance` в браузере Sigma](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&term=instance)

В SUMO `instance` связывает объект с классом. Документация SUMO также указывает, что один индивидуальный объект может быть экземпляром нескольких классов. [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&term=instance)

Для процесса:

```turtle
ex:reading_20261006
    o2p:isInstance o2p:ReadingProcess .
```

Это означает:

```text
конкретное чтение является экземпляром категории ReadingProcess.
```

# 16. Пример всех трёх типов

```turtle
@prefix o2p: <https://github.com/bpmbpm/ontology/o2p#> .
@prefix ex:  <https://example.org/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
@prefix sumo: <http://www.ontologyportal.org/SUMO.owl#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

#################################################################
# Type I: Category–Category and Category–Property
#################################################################

o2p:Student
    o2p:isSubClass o2p:Person .

o2p:Person
    o2p:hasProperty foaf:name ;
    o2p:hasProperty foaf:familyName .

o2p:ReadingProcess
    o2p:isSubClass sumo:Process ;
    o2p:hasProperty o2p:hasParticipant ;
    o2p:hasProperty o2p:hasObject .

#################################################################
# Type III: Instance–Category
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
# Type II: Instance–Instance and Instance–Data
#################################################################

ex:alice
    foaf:name "Алиса"@ru ;
    foaf:familyName "Петрова"@ru ;
    o2p:knows ex:bob .

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

# 17. Типизация самих предикатов

Чтобы по предикату определить тип триплета, нужно описать предикаты метаданными O2P.

```turtle
o2p:IdeaAssertionProperty
    o2p:correspondsTo sumo:Relation .

o2p:ThingAssertionProperty
    o2p:correspondsTo sumo:Relation .

o2p:BridgeProperty
    o2p:correspondsTo sumo:Relation .

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

o2p:hasColor
    o2p:assertionType o2p:ThingAssertionProperty ;
    o2p:sourceKind o2p:Instance ;
    o2p:targetKind o2p:Value .

o2p:isInstance
    o2p:assertionType o2p:BridgeProperty ;
    o2p:sourceKind o2p:Instance ;
    o2p:targetKind o2p:Category .
```

В терминах SUMO:

```text
o2p:IdeaAssertionProperty — подкласс Relation;
o2p:ThingAssertionProperty — подкласс Relation;
o2p:BridgeProperty — подкласс Relation.
```

Конкретные O2P-предикаты являются экземплярами соответствующих типов отношений:

```text
o2p:isSubClass — отношение Category–Category;
o2p:hasAuthor — отношение Instance–Instance;
o2p:isInstance — отношение Instance–Category.
```

# 18. Как связать IRI с SUMO

IRI — не класс SUMO и не обязательно `Entity`.

IRI — это имя, которое может обозначать сущность:

```text
o2p:Person
    обозначает категорию SUMO Class;

ex:alice
    обозначает SUMO Object;

ex:reading_20261006
    обозначает SUMO Process;

o2p:isInstance
    обозначает SUMO Relation.
```

Таблица:

| IRI | Роль O2P | Ближайший SUMO-класс |
|---|---|---|
| `o2p:Person` | категория | `Class` / `SetOrClass` |
| `o2p:Student` | категория | `Class` |
| `ex:alice` | конкретная вещь | `Object` |
| `ex:book123` | конкретный объект | `Object` |
| `ex:reading_20261006` | конкретный процесс | `Process` |
| `o2p:isInstance` | предикат связи миров | `Relation` |
| `o2p:isSubClass` | предикат категорий | `Relation` |
| `o2p:hasAuthor` | предикат экземпляров | `Relation` |
| `"Алиса"` | literal | значение данных |

В самом RDF IRI может быть субъектом, предикатом или объектом. Но это синтаксические позиции RDF, а не классы SUMO.

Например:

```turtle
ex:alice o2p:isInstance o2p:Person .
```

Синтаксически:

```text
ex:alice — RDF subject
o2p:isInstance — RDF predicate
o2p:Person — RDF object
```

Семантически O2P:

```text
ex:alice — Instance/Object
o2p:isInstance — Relation
o2p:Person — Category/Class
```

# 19. Что стало с прежним «Resource»

Ранее можно было использовать упрощённую схему:

```text
Resource
├── Idea
└── Thing
```

В модели SUMO она заменяется на:

```text
SUMO Entity
├── Physical
│   ├── Object
│   └── Process
│
└── Abstract
    ├── Class
    ├── Relation
    ├── Attribute
    ├── Quantity
    └── Proposition
```

То есть `Entity` — это не «RDF Resource» в техническом смысле. Это верхний онтологический класс SUMO.

Корректное соответствие:

```text
RDF resource
    — технический RDF-термин;

SUMO Entity
    — верхний онтологический класс SUMO;

IRI
    — идентификатор, обозначающий RDF-ресурс или SUMO-сущность.
```

Один IRI может обозначать:

```text
SUMO Class
SUMO Object
SUMO Process
SUMO Relation
```

Но нельзя считать, что IRI сам по себе является физической или абстрактной сущностью.

# 20. Итоговая схема

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
1. Категория → предикат категорий → категория/свойство

   o2p:Student o2p:isSubClass o2p:Person .

2. Экземпляр → предикат экземпляров → экземпляр/литерал

   ex:book123 o2p:hasAuthor ex:alice .

3. Экземпляр → предикат связи миров → категория

   ex:alice o2p:isInstance o2p:Person .
```

Финальное соответствие:

```text
SUMO Entity       — корень всей онтологической иерархии;
SUMO Physical     — мир пространственно-временных сущностей;
SUMO Object       — устойчивые вещи;
SUMO Process      — динамические вещи или процессы;
SUMO Abstract     — абстрактные сущности;
SUMO Class        — категории;
SUMO Relation      — предикаты;
O2P isSubClass    — категория–категория;
O2P hasProperty   — категория–свойство;
O2P isInstance    — экземпляр–категория.
```

Прямые основные ссылки:

- [SUMO official portal](https://www.ontologyportal.org/) — официальный портал проекта SUMO. [ontologyportal](https://www.ontologyportal.org/)
- [SUMO GitHub repository](https://github.com/ontologyportal/sumo) — исходные KIF-файлы и инструменты. [github](https://github.com/ontologyportal/sumo/blob/master/Merge.kif)
- [SUMO `Entity` в Sigma](https://ontology.nps.edu/sigma/TreeView.jsp?lang=EnglishLanguage&flang=SUO-KIF&kb=SUMO&file=Mid-level-ontology.kif&line=4279). [ontology.nps](https://ontology.nps.edu/sigma/TreeView.jsp?lang=EnglishLanguage&flang=SUO-KIF&kb=SUMO&file=Mid-level-ontology.kif&line=4279)
- [SUMO `Physical` в Sigma](https://sigma.ontologyportal.org:8443/sigma/Browse.jsp?lang=en&kb=SUMO&term=Physical). [sigma.ontologyportal](https://sigma.ontologyportal.org:8443/sigma/Browse.jsp?lang=en&kb=SUMO&term=Physical)
- [SUMO `Process` в Sigma](https://ontology.nps.edu/sigma/Browse.jsp?lang=EnglishLanguage&flang=KIF&kb=SUMO&term=Process). [ontology.nps](https://ontology.nps.edu/sigma/Browse.jsp?lang=EnglishLanguage&flang=KIF&kb=SUMO&term=Process)
- [SUMO `instance` в Sigma](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&term=instance). [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&term=instance)
- [SUMO `Merge.kif`](https://github.com/ontologyportal/sumo/blob/master/Merge.kif) — аксиомы классов, отношений и доменов. [github](https://github.com/ontologyportal/sumo/blob/master/Merge.kif)
- [SUMO modeling paper](https://arxiv.org/pdf/2012.15835.pdf) — описание структуры SUMO, включая `Entity`, `Abstract`, `Relation`, `instance` и `subclass`. [arxiv](https://arxiv.org/pdf/2012.15835.pdf)

  
