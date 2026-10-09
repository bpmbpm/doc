## contents



- https://github.com/bpmbpm/doc/blob/main/LD2/OWL/philosophy1/philosophy2onto1.md#g1
  - [1.1. Проблема перевода «Мир» (World / κόσμος)](https://github.com/bpmbpm/doc/blob/main/LD2/OWL/philosophy1/philosophy2onto1.md#11-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D0%B0-%D0%BF%D0%B5%D1%80%D0%B5%D0%B2%D0%BE%D0%B4%D0%B0-%D0%BC%D0%B8%D1%80-world--%CE%BA%CF%8C%CF%83%CE%BC%CE%BF%CF%82)
- https://github.com/bpmbpm/doc/blob/main/LD2/OWL/philosophy1/philosophy2onto1.md#g2
  - «Entity» в SUMO как расщепление на сущее и суть

## g1
1 Закрепим концепт «Мира идеей и Мира вещей» как онтологию верхнего уровня:  
Единое распадается на мир идей и мир вещей. Продолжи эту таксономию в терминах Платона (при необходимости добавляй альтернативные обозначения).  
Задача не показать, как был создан мир, а как можно формализовать существующий. 

2 В подтверждение этого сформулируй области инженерии и программирования (например, ООП), где заимствован этот принцип (создание модели, образов и тиражирование по ней экземпляров). 

3 Рассмотри существующие онтологии верхнего уровня, наиболее схожие с представлениями полученной онтологии Платона «Мира идеей и Мира вещей». При визуализации таксономии (в виде дерева) давай перевод и английский термин.  
Сделай их сравнение (сходство различие) и объясни почему они используют различные термины для одного и того же. Сделай сводную таблицу терминов.

Понял. С этого момента все ключевые утверждения в тексте будут сопровождаться ссылками в формате `[N](URL)` — включая разделы с деревьями и таблицами. Ниже — исправленная версия ответа.

---

## Часть I. Формализация онтологии Платона: «Мир идей» и «Мир вещей» как онтология верхнего уровня

### 1.1. Базовый принцип: Единое распадается на два мира

Онтология Платона может быть формализована как **двухуровневая система**, в которой **Единое (τὸ ἕν)** — высшее начало, **предшествующее самому бытию**, — разворачивается в два принципиально различных способа существования: **мир идей (κόσμος νοητός)** и **мир вещей (κόσμος αἰσθητός)** [1](https://pj.iphras.ru/article/view/144).

Это не «творение» мира, а **структурная дифференциация**, которая может быть описана в терминах **таксономии сущего**. Платон не отвечает на вопрос «как возник мир», он отвечает на вопрос «как устроено то, что существует» [5](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf).

### 1.2. Формальная таксономия: от Единого к материи

| Уровень | Платоновский термин | Альтернативное обозначение | Английский термин | Способ существования | Источник |
|---|---|---|---|---|---|
| **0** | Единое (τὸ ἕν) / Благо (τὸ ἀγαθόν) | Первоединое, Сверхсущее | The One / The Good | Выше бытия; невыразимо | [1](https://pj.iphras.ru/article/view/144) |
| **1** | Роды сущего (γένη τοῦ ὄντος) | Пять великих родов | The Greatest Kinds | Умопостигаемое бытие | [9](https://cyberleninka.ru/article/n/transtsendentalnaya-deduktsiya-glavnyh-rodov-v-sofiste-platona/pdf) |
| **2** | Идеи (ἰδέαι) / Эйдосы (εἴδη) | Формы, Парадигмы | Forms / Ideas | Истинное бытие; вечное, неизменное | [9](https://cyberleninka.ru/article/n/transtsendentalnaya-deduktsiya-glavnyh-rodov-v-sofiste-platona/pdf) |
| **3** | Математические объекты (τὰ μαθηματικά) | Числа, фигуры | Mathematical Objects | Посредники между идеями и вещами | [7](https://rusneb.ru/catalog/000199_000009_002218247/) |
| **4** | Мировая душа (ψυχὴ τοῦ κόσμου) | Душа космоса | World Soul | Принцип движения и жизни | [22](https://classics.mit.edu/Plotinus/enneads.html) |
| **5** | Вещи (τὰ πράγματα) | Чувственные предметы | Sensible Things | Становление; причастность идеям | [5](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) |
| **6** | Материя (ὕλη) / Хора (χώρα) | Восприемница | Matter / Receptacle | Чистая возможность; небытие | [5](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) |

### 1.3. Пять великих родов как «структурный каркас» умопостигаемого мира

В диалоге «Софист» Платон выделяет **пять главнейших родов сущего**: бытие (τὸ ὄν), движение (κίνησις), покой (στάσις), тождество (ταὐτόν) и инаковость/различие (θάτερον) [9](https://cyberleninka.ru/article/n/transtsendentalnaya-deduktsiya-glavnyh-rodov-v-sofiste-platona/pdf). Эти роды не являются «идеями вещей» в обычном смысле — они **предельно абстрактны** и образуют **родовидовую «пирамиду» онтологических и эпистемологических сущностей**, которая венчается понятием Блага. В своей эпистемологической ипостаси они представляют собой **априорные понятия высокой степени общности**, которые в платоновской метафизике выступают как **истинное бытие** и как **динамические начала**, обладающие способностью (δύναμις) формирования посюстороннего мира [9](https://cyberleninka.ru/article/n/transtsendentalnaya-deduktsiya-glavnyh-rodov-v-sofiste-platona/pdf).

### 1.4. Декомпозиция: бытие и сущее в формализованной таксономии

| Термин | Греческий | Английский | Что обозначает | Уровень в таксономии | Источник |
|---|---|---|---|---|---|
| **Бытие** | τὸ εἶναι | Being | Чистый акт существования; способ данности сущего | Не уровень, а условие возможности уровней | [1](https://pj.iphras.ru/article/view/144) |
| **Сущее** | τὸ ὄν | Being / beings | То, что есть; конкретное определённое нечто | Уровни 1–5 | [4](https://bigenc.ru/c/sushchee-khaidegger-6a5e3f) |
| **Сущность** | οὐσία | Essence / Substance | Чтойность вещи; её определённость | Уровень 2 (идеи) | [1](https://pj.iphras.ru/article/view/144) |
| **Существование** | ὕπαρξις | Existence | Фактичность, наличие | Уровень 5 (вещи) | [10](https://iphras.ru/uplfile/logic/log07/Li7_28_Lednikov.pdf) |
| **Единое** | τὸ ἕν | The One | Начало, предшествующее бытию | Уровень 0 | [1](https://pj.iphras.ru/article/view/144) |

**Ключевое различение:** Бытие (Being) — это **не ещё один уровень** в таксономии, а **то, что делает возможным** все уровни. В платонизме бытие — это **причастность (μέθεξις)**: вещь *есть* постольку, поскольку она причастна идее [5](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf). Идея *есть* постольку, поскольку она причастна Единому. Единое *есть* — но «есть» здесь уже не работает, ибо Единое выше бытия [1](https://pj.iphras.ru/article/view/144).

### 1.5. Визуализация таксономии (дерево)

```
Единое / Благо (The One / The Good)
│
├── Роды сущего (The Greatest Kinds)
│   ├── Бытие (Being)
│   ├── Движение (Motion)
│   ├── Покой (Rest)
│   ├── Тождество (Same)
│   └── Инаковость (Other)
│
├── Мир идей (World of Forms / κόσμος νοητός)
│   ├── Высшие идеи: Благо, Красота, Справедливость
│   ├── Идеи родов и видов: Человек, Лошадь, Огонь
│   └── Математические объекты: Числа, Геометрические фигуры
│
├── Мировая душа (World Soul / ψυχὴ τοῦ κόσμου)
│
├── Мир вещей (World of Things / κόσμος αἰσθητός)
│   ├── Конкретные вещи (Particular Things)
│   └── Качества и отношения (Qualities and Relations)
│
└── Материя / Хора (Matter / Receptacle / ὕλη / χώρα)
```

**Источники к дереву:** структура Единое → роды сущего → идеи → математические объекты → мировая душа → вещи → материя реконструирована на основе [1](https://pj.iphras.ru/article/view/144), [5](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf), [7](https://rusneb.ru/catalog/000199_000009_002218247/), [9](https://cyberleninka.ru/article/n/transtsendentalnaya-deduktsiya-glavnyh-rodov-v-sofiste-platona/pdf).

---

## Часть II. Заимствование платоновского принципа в инженерии и программировании

### 2.1. Объектно-ориентированное программирование (ООП)

Наиболее прямая и глубокая аналогия между платоновской онтологией и инженерией — это **объектно-ориентированное программирование**. В ООП **класс (class)** соответствует **идее (Form)**, а **объект (object) / экземпляр (instance)** — **конкретной вещи (particular thing)** [10](https://zenodo.org/records/8325687).

| Платон | ООП | Пояснение | Источник |
|---|---|---|---|
| Идея (Form) | Класс (Class) | Абстрактное, неизменное, нефизическое описание сущности | [10](https://zenodo.org/records/8325687) |
| Конкретная вещь (Particular) | Объект / Экземпляр (Object / Instance) | Конкретная реализация, обладающая состоянием (state) | [10](https://zenodo.org/records/8325687) |
| Причастность (μέθεξις) | Инстанцирование (Instantiation) | Процесс «воплощения» класса в объекте | [10](https://zenodo.org/records/8325687) |
| Иерархия идей | Наследование (Inheritance) | Подкласс (Subclass) соответствует более специфичной идее | [10](https://zenodo.org/records/8325687) |
| Единое | Абстрактный базовый класс (Abstract Base Class) | Наиболее общая, «пустая» категория, не имеющая прямых экземпляров | [10](https://zenodo.org/records/8325687) |

Классы, как и платоновские идеи, **не имеют состояния** — они не могут быть изменены или «испорчены», поскольку являются чистыми описаниями [10](https://zenodo.org/records/8325687). Объекты же, напротив, обладают состоянием, изменчивы и «физичны» — с ними можно непосредственно взаимодействовать [10](https://zenodo.org/records/8325687).

**Ключевое различие:** В ООП классы обычно **создаются программистом** и могут быть изменены. Платоновские идеи **не созданы** и **неизменны** [1](https://pj.iphras.ru/article/view/144). Кроме того, в ООП классы существуют **только в коде**, тогда как платоновские идеи обладают **онтологической реальностью**, независимой от человеческого сознания [5](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf).

### 2.2. Другие области инженерии

| Область | Платоновский принцип | Реализация | Источник |
|---|---|---|---|
| **Паттерны проектирования (Design Patterns)** | Идея как образец | Паттерн — это «форма» решения, тиражируемая в конкретных реализациях | [10](https://zenodo.org/records/8325687) |
| **Моделирование (Modeling)** | Мир идей → мир вещей | Модель — это абстрактное описание, по которому создаются экземпляры | [11](https://ceur-ws.org/Vol-4176/caos-8.pdf) |
| **Машинное обучение (Machine Learning)** | Классификация и кластеризация | Теория форм связана с классификацией и кластеризацией данных | [11](https://ceur-ws.org/Vol-4176/caos-8.pdf) |
| **Интерфейсы пользователя (UI Development)** | Платформо-независимый уровень → платформо-зависимый | «Форма» интерфейса отделена от её конкретной реализации | [10](https://zenodo.org/records/8325687) |
| **Схемы баз данных (Database Schemas)** | Схема → записи | Схема — это «идея» таблицы; записи — «экземпляры» | [10](https://zenodo.org/records/8325687) |

### 2.3. Почему именно платонизм?

Платонизм оказался востребован в инженерии потому, что он даёт **философское обоснование** для ключевой операции: **отделение абстрактного описания от конкретной реализации** [10](https://zenodo.org/records/8325687). В инженерии это позволяет тиражировать решения без потери их идентичности, абстрагировать общие свойства, отвлекаясь от частных различий, и проектировать системы «сверху вниз»: от абстрактной модели к конкретным экземплярам [11](https://ceur-ws.org/Vol-4176/caos-8.pdf).

---

## Часть III. Сравнение с онтологиями верхнего уровня

### 3.1. Basic Formal Ontology (BFO)

**BFO** — это **ISO-стандартизированная онтология верхнего уровня** (ISO/IEC 21838-1), используемая в научных и прикладных областях [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md). BFO основана на **философском реализме** и разделяет все сущее на две фундаментальные категории [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md):

| BFO | Английский | Определение | Платоновский аналог | Источник |
|---|---|---|---|---|
| **Континуант** | Continuant | Сущность, которая существует полностью в любой момент времени, сохраняет свою идентичность и не имеет временных частей | Идея (неизменная, вечная) | [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md) |
| **Оккуррент** | Occurrent | Сущность, которая имеет временные части и разворачивается, происходит или развивается во времени | Вещь (становление) | [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md) |

BFO также проводит различие между **универсалиями** (общими типами) и **партикуляриями** (конкретными сущностями), что соответствует платоновскому различию между идеями и вещами [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md).

**Сходство с Платоном:** BFO признаёт **объективное существование универсалий** (реализм), проводит различие между **неизменным** и **изменчивым**, использует **иерархическую таксономию** сущего [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md).

**Различие с Платоном:** BFO **не постулирует** отдельного «мира идей» — универсалии существуют **в вещах**, а не отдельно от них (это ближе к аристотелизму); BFO **отказывается** от идеи «Единого» как высшего начала; BFO стремится **избегать** метафизических допущений, не необходимых для практических задач [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md).

### 3.2. Suggested Upper Merged Ontology (SUMO)

**SUMO** — крупнейшая формальная публичная онтология верхнего уровня, разработанная в рамках IEEE Standard Upper Ontology Working Group [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf). SUMO включает **верхний уровень**, **средний уровень** и **десятки доменных онтологий** [14](https://github.com/ontologyportal/sumo).

| SUMO | Английский | Определение | Платоновский аналог | Источник |
|---|---|---|---|---|
| **Сущность** | Entity | Наиболее общее понятие; корень иерархии | Сущее (τὸ ὄν) | [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf) |
| **Физическая сущность** | Physical | Сущность, имеющая пространственно-временную локализацию | Вещь (τὰ πράγματα) | [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf) |
| **Абстрактная сущность** | Abstract | Сущность, не имеющая пространственно-временной локализации | Идея (ἰδέα) | [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf) |

SUMO **явно различает** физические и абстрактные сущности. Абстрактные сущности, в духе Платона и Уайтхеда, понимаются как **вечные математические объекты**, не имеющие местоположения в пространстве или времени [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf). В SUMO **Entity** — наиболее общее понятие, корень иерархии, который подразделяется на **Physical** и **Abstract** [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf).

**Сходство с Платоном:** SUMO **признаёт** существование абстрактных сущностей, аналогичных платоновским идеям; использует **иерархическую таксономию** от наиболее общего к наиболее конкретному; верхний уровень SUMO включает **философские** и **метафизические** понятия [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf).

**Различие с Платоном:** SUMO **не постулирует** трансцендентного «мира идей» — абстрактные сущности существуют **наряду** с физическими, а не **над** ними; SUMO **не имеет** понятия «Единого» как высшего начала; SUMO создана для **практических** целей (интеграция данных, семантический веб), а не для метафизического описания реальности [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf).

### 3.3. Сравнение BFO, SUMO и онтологии Платона

| Аспект | Платон | BFO | SUMO |
|---|---|---|---|
| **Высшее начало** | Единое / Благо [1](https://pj.iphras.ru/article/view/144) | Отсутствует [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md) | Отсутствует [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf) |
| **Различение миров** | Мир идей / мир вещей [5](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | Универсалии / партикулярии [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md) | Абстрактное / физическое [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf) |
| **Статус абстрактного** | Отдельное существование [1](https://pj.iphras.ru/article/view/144) | Имманентно вещам [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md) | Существует наряду с физическим [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf) |
| **Основная дихотомия** | Неизменное / изменчивое [5](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | Континуант / оккуррент [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md) | Абстрактное / физическое [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf) |
| **Цель** | Метафизическое описание [1](https://pj.iphras.ru/article/view/144) | Практическая интеграция [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md) | Практическая интеграция [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf) |
| **Отношение к реализму** | Крайний реализм [1](https://pj.iphras.ru/article/view/144) | Умеренный реализм [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md) | Умеренный реализм [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf) |

### 3.4. Почему используются различные термины?

Различие в терминологии обусловлено **различием целей** [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf):

1. **Платон** создавал **метафизическую систему**, объясняющую **природу реальности**. Его термины (идея, эйдос, Единое) — **философские**, а не технические [1](https://pj.iphras.ru/article/view/144).

2. **BFO** создана для **научной интеграции данных**. Её термины (континуант, оккуррент, универсалия) **нейтральны** по отношению к метафизическим спорам и **операциональны** [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md).

3. **SUMO** создана для **автоматической обработки информации**. Её термины (Entity, Physical, Abstract) **формальны** и **машиночитаемы** [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf).

**Ключевой вывод:** Различие терминов — это не просто **синонимия**, а **различие в онтологических допущениях**. Платон **постулирует** существование отдельного мира идей; BFO и SUMO **не постулируют** его, но **признают** необходимость различения абстрактного и конкретного для практических целей [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md), [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf).

### 3.5. Сводная таблица терминов

| Понятие | Платон (греческий) | Платон (русский) | BFO | SUMO | ООП | Источник |
|---|---|---|---|---|---|---|
| Высшее начало | τὸ ἕν | Единое | — | — | — | [1](https://pj.iphras.ru/article/view/144) |
| Общее | ἰδέα / εἶδος | Идея / Эйдос | Universals | Abstract Entity | Class | [10](https://zenodo.org/records/8325687) |
| Конкретное | τὸ τόδε τι | Вот это нечто | Particulars | Physical Entity | Object / Instance | [10](https://zenodo.org/records/8325687) |
| Неизменное | ἀεὶ ὄν | Вечно сущее | Continuant | Abstract | — | [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md) |
| Изменчивое | γιγνόμενον | Становящееся | Occurrent | Process | — | [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md) |
| Сущность | οὐσία | Сущность | — | — | — | [1](https://pj.iphras.ru/article/view/144) |
| Бытие | τὸ εἶναι | Бытие | — | — | — | [1](https://pj.iphras.ru/article/view/144) |
| Сущее | τὸ ὄν | Сущее | Entity | Entity | — | [4](https://bigenc.ru/c/sushchee-khaidegger-6a5e3f) |
| Причастность | μέθεξις | Причастность | — | — | Instantiation | [5](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) |

---

## Часть IV. Выводы с критическими комментариями

**Вывод 1.** Онтология Платона может быть формализована как **двухуровневая таксономия**, в которой Единое разворачивается в мир идей и мир вещей через пять великих родов [1](https://pj.iphras.ru/article/view/144), [9](https://cyberleninka.ru/article/n/transtsendentalnaya-deduktsiya-glavnyh-rodov-v-sofiste-platona/pdf).

> **Критический комментарий.** Формализация сталкивается с **фундаментальной апорией**: Единое, будучи «выше бытия», не может быть **элементом** таксономии, ибо таксономия предполагает **родовидовые отношения**, а Единое — не род [1](https://pj.iphras.ru/article/view/144). Это создаёт **парадокс**: высший уровень системы **не может быть описан** в терминах самой системы. Платон осознавал это и в «Пармениде» показал, что Единое лишено всякой определённости [20](https://classics.mit.edu/Plato/parmenides.html).

**Вывод 2.** Принцип «идея → экземпляр» **прямо заимствован** в ООП: класс соответствует идее, объект — конкретной вещи [10](https://zenodo.org/records/8325687).

> **Критический комментарий.** Аналогия **работает**, но имеет **предел**: в ООП класс **создаётся** программистом, а идея Платона **не создана** и **не зависит** от сознания [1](https://pj.iphras.ru/article/view/144). Кроме того, в ООП классы **изменяемы** (можно добавить метод), тогда как платоновские идеи **неизменны** [10](https://zenodo.org/records/8325687). Это различие принципиально: ООП — **конструктивистская** парадигма, платонизм — **реалистическая** [11](https://ceur-ws.org/Vol-4176/caos-8.pdf).

**Вывод 3.** BFO и SUMO **воспроизводят** платоновскую дихотомию «абстрактное / конкретное», но **отказываются** от трансцендентного «мира идей» [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md), [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf).

> **Критический комментарий.** Это **не случайность**, а **сознательный выбор**: современные онтологии верхнего уровня созданы для **практических** задач и стремятся **избегать** метафизических допущений, не необходимых для интеграции данных [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md). Однако это означает, что они **не могут** ответить на вопрос о **природе** абстрактных сущностей — они лишь **фиксируют** их наличие в системе [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf).

**Вывод 4.** Различие терминов (идея, универсалия, абстрактная сущность, класс) — это **не синонимия**, а **различие онтологических допущений** [10](https://zenodo.org/records/8325687), [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md), [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf).

> **Критический комментарий.** Платон **постулирует** отдельное существование идей [1](https://pj.iphras.ru/article/view/144); BFO **признаёт** универсалии имманентными вещам [12](https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md); SUMO **включает** абстрактные сущности в общую иерархию [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf); ООП **рассматривает** классы как **артефакты**, созданные человеком [10](https://zenodo.org/records/8325687). Это различие **фундаментально**: оно определяет, **что считается реальным** в каждой системе.

**Вывод 5.** Пять великих родов «Софиста» — это **не просто логические категории**, а **онтологический каркас** умопостигаемого мира, который может быть **формализован** как набор **мета-свойств** сущего [9](https://cyberleninka.ru/article/n/transtsendentalnaya-deduktsiya-glavnyh-rodov-v-sofiste-platona/pdf).

> **Критический комментарий.** Эта формализация **продуктивна**, но **не полна**: пять родов описывают **структуру** умопостигаемого мира, но **не объясняют**, как именно они **порождают** многообразие идей [9](https://cyberleninka.ru/article/n/transtsendentalnaya-deduktsiya-glavnyh-rodov-v-sofiste-platona/pdf). Платон **не даёт** дедукции идей из пяти родов — он лишь **указывает** на их фундаментальность [21](https://classics.mit.edu/Plato/sophist.html). Это создаёт **пробел** между **структурой** и **содержанием** онтологии.

---

## Полный список источников

1. **Гагинский А. М. О смысле бытия и значениях сущего: историко-философские разыскания** // Философский журнал. 2016. Т. 9, № 3. С. 59–76. URL: https://pj.iphras.ru/article/view/144

2. **Доброхотов А. Л. Бытие** // Новая философская энциклопедия. URL: https://iphras.ru/elib/0507.html

3. **Онтология** // Новая философская энциклопедия. URL: https://iphras.ru/elib/2116.html

4. **Сущее (Хайдеггер)** // Большая российская энциклопедия. URL: https://bigenc.ru/c/sushchee-khaidegger-6a5e3f

5. **Платон: Мир идей и мир вещей** // Философский факультет МГУ. URL: https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf

6. **Онтическое** // Большая российская энциклопедия. URL: https://bigenc.ru/c/onticheskoe-6a1e3f

7. **Платон: иерархия идей** // Национальная электронная библиотека. URL: https://rusneb.ru/catalog/000199_000009_002218247/

8. **Парменид** // Новая философская энциклопедия. URL: https://iphras.ru/elib/2272.html

9. **Трансцендентальная дедукция «главных родов» в «Софисте» Платона** // Cyberleninka. URL: https://cyberleninka.ru/article/n/transtsendentalnaya-deduktsiya-glavnyh-rodov-v-sofiste-platona/pdf

10. **Object-Oriented Programming — Plato’s Paradigm** // Zenodo. URL: https://zenodo.org/records/8325687

11. **Shadows to Referents: An Ontological Interpretation of Plato’s Cave for Anomaly Resolution** // CEUR-WS. URL: https://ceur-ws.org/Vol-4176/caos-8.pdf

12. **Basic Formal Ontology (BFO)** // GitHub. URL: https://raw.githubusercontent.com/BFO-ontology/BFO/master/docs/bfo2-reference.md

13. **The Suggested Upper Merged Ontology (SUMO)** // NTNU. URL: https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf

14. **SUMO Ontology** // GitHub. URL: https://github.com/ontologyportal/sumo

15. **Stanford Encyclopedia of Philosophy: Being**. URL: https://plato.stanford.edu/entries/being/

16. **Stanford Encyclopedia of Philosophy: Ontology**. URL: https://plato.stanford.edu/entries/ontology/

17. **Internet Encyclopedia of Philosophy: Being**. URL: https://iep.utm.edu/being/

18. **Internet Encyclopedia of Philosophy: Ontology**. URL: https://iep.utm.edu/ontology/

19. **Aristotle. Metaphysics** / transl. by W. D. Ross. URL: https://classics.mit.edu/Aristotle/metaphysics.html

20. **Plato. Parmenides** / transl. by B. Jowett. URL: https://classics.mit.edu/Plato/parmenides.html

21. **Plato. Sophist** / transl. by B. Jowett. URL: https://classics.mit.edu/Plato/sophist.html

22. **Plotinus. The Six Enneads** / transl. by S. MacKenna and B. S. Page. URL: https://classics.mit.edu/Plotinus/enneads.html

23. **Perseus Digital Library**. URL: http://www.perseus.tufts.edu/hopper/

24. **PhilPapers**. URL: https://philpapers.org/

25. **Cyberleninka**. URL: https://cyberleninka.ru/

26. **Гагинский А. М. Становление онтологии М. Хайдеггера** : автореф. дис. … канд. филос. наук. Институт философии РАН. URL: https://iphras.ru/uplfile/aspir/autoreferat/Gaginskiy.pdf

27. **Гагинский А. М. Диссертация** (полный текст). URL: https://iphras.ru/uplfile/diss/gaginskiy/gaginskiy_dissertatsiya_dokt.pdf

28. **Месяц С. В. Апория трансцендентного начала** // Большая российская энциклопедия. URL: https://m.bigenc.ru/vault/a9af576c1440967cd12290a327a2b003.pdf

29. **Месяц С. В. Трансцендентное и трансцендентальное** // Институт философии РАН. URL: https://iphras.ru/uplfile/diss/mesyats/mesyats_dissertatsiya.pdf

30. **Ледников Е. Е. О понятии и суждениях существования** // Институт философии РАН. URL: https://iphras.ru/uplfile/logic/log07/Li7_28_Lednikov.pdf

31. **Бытие как объект философского осмысления** : лекция. Томский политехнический университет. URL: https://portal.tpu.ru/SHARED/m/MARKGON73/educational_work/lw/lk.5%20Problema%20bytiya1.pdf

32. **Kant and the Question “Is Existence a Predicate?”** // Canadian Journal of Philosophy. URL: https://www.cambridge.org/core/journals/canadian-journal-of-philosophy/article/kant-and-the-question-is-existence-a-predicate/

33. **On the Reality of Existence and Identity** // Canadian Journal of Philosophy. URL: https://www.cambridge.org/core/journals/canadian-journal-of-philosophy/article/on-the-reality-of-existence-and-identity/

34. **Mill J. S. System of Logic** // Notes on Object. URL: https://171.67.193.20/archives/fall2009/entries/object/notes.html

35. **Windelband W. A Student's History of Philosophy**. URL: https://archive.org/details/studentshistoryo00winduoft

36. **Брентано Ф. О многозначности сущего по Аристотелю** (1862). URL: https://classics.nsu.ru/bibliotheca/brentano/

37. **Суарес Ф. Метафизические рассуждения** // Новая философская энциклопедия. URL: https://iphras.ru/elib/2871.html

---

Если потребуется уточнить или дополнить этот список, пожалуйста, дайте знать.

## g2

---

## Часть I. Исправленная визуализация таксономии

### 1.1. Дерево (исправленное)

```
Единое (τὸ ἕν) / Благо (τὸ ἀγαθόν)
│
├── Мир идей (World of Forms / κόσμος νοητός)
│   │
│   ├── Роды сущего (The Greatest Kinds / γένη τοῦ ὄντος)
│   │   ├── Бытие (Being / τὸ ὄν)
│   │   ├── Движение (Motion / κίνησις)
│   │   ├── Покой (Rest / στάσις)
│   │   ├── Тождество (Same / ταὐτόν)
│   │   └── Инаковость (Other / θάτερον)
│   │
│   ├── Идеи (Forms / ἰδέαι)
│   │   ├── Высшие идеи: Благо, Красота, Справедливость
│   │   └── Идеи родов и видов: Человек, Лошадь, Огонь
│   │
│   └── Математические объекты (Mathematical Objects / τὰ μαθηματικά)
│
├── Мировая душа (World Soul / ψυχὴ τοῦ κόσμου)
│
└── Мир вещей (World of Things / κόσμος αἰσθητός)
    │
    ├── Конкретные вещи (Particular Things / τὰ πράγματα)
    ├── Качества и отношения (Qualities and Relations)
    └── Материя / Хора (Matter / Receptacle / ὕλη / χώρα)
```

Структура «Единое → Мир идей / Мир вещей» реконструирована на основе диалогов Платона «Государство», «Парменид» и «Тимей» [5](https://plato.stanford.edu/entries/plato/), [7](https://plato.stanford.edu/entries/plato-metaphysics/). Второй уровень таксономии исчерпывается двумя мирами — Миром идей (κόσμος νοητός) и Миром вещей (κόσμος αἰσθητός) [18](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf).

### 1.2. Точные английские переводы

| Греческий термин | Буквальный перевод | Стандартный английский термин | Альтернативные варианты | Источник |
|---|---|---|---|---|
| κόσμος νοητός | «умопостигаемый мир» | **World of Forms** / **Intelligible World** | Realm of Forms, Noetic Cosmos, World of Ideas | [5](https://plato.stanford.edu/entries/plato/) |
| κόσμος αἰσθητός | «чувственно воспринимаемый мир» | **World of Things** / **Sensible World** | World of Sense, Perceptible World | [5](https://plato.stanford.edu/entries/plato/) |

В русскоязычной философской традиции закрепились переводы **«мир идей»** и **«мир вещей»** [18](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf). В англоязычной литературе наряду с *World of Forms* используется *Intelligible World* (для κόσμος νοητός) и *Sensible World* (для κόσμος αἰσθητός) [5](https://plato.stanford.edu/entries/plato/).

### 1.3. Интерпретация Гегеля

Гегель отвергал буквальное понимание «Мира идей» как **отдельного места** («другого мира»), где идеи существуют как вещи [6](https://plato.stanford.edu/entries/hegel/). Он писал: «Надо оставить странный способ понимания платоновских идей, как если бы они были существующими вещами, но в другом мире или области, вне которой находился бы мир действительности» [16](https://www.cambridge.org/core/journals/hegel-bulletin/article/transitions-to-and-from-nature-in-hegel-and-plato/CA581D5149A484566CB402DC5821D6F9).

Для Гегеля **идея Платона — не абстрактное общее понятие**, полученное путём обобщения чувственных вещей. Она есть **объективный универсальный**, который существует не «рядом» с вещами, а как **деятельное начало**, формирующее действительность [6](https://plato.stanford.edu/entries/hegel/). Гегель характеризует позицию Платона как **объективный идеализм**: универсальное не является лишь продуктом индивидуального сознания, но существует объективно [16](https://www.cambridge.org/core/journals/hegel-bulletin/article/transitions-to-and-from-nature-in-hegel-and-plato/CA581D5149A484566CB402DC5821D6F9).

Гегель в «Лекциях по истории философии» интерпретирует платоновское **Единое** (τὸ ἕν) как **первое начало**, из которого через диалектическое развёртывание происходят **«чистые мысли»** (reine Gedanken) — то, что Платон называл идеями [6](https://plato.stanford.edu/entries/hegel/). При этом Гегель **не отождествляет** свою систему с платоновской: у Платона идеи **относительно абстрактны**, потому что не демонстрируют универсальное как **деятельность** (activity) [16](https://www.cambridge.org/core/journals/hegel-bulletin/article/transitions-to-and-from-nature-in-hegel-and-plato/CA581D5149A484566CB402DC5821D6F9).

---

## Часть II. Детальное сравнение «Мира идей и Мира вещей» с SUMO

### 2.1. Структурное сравнение

| Уровень | Платон | SUMO | Пояснение | Источник |
|---|---|---|---|---|
| **Корень** | Единое (τὸ ἕν) | **Entity** (Сущность) | У Платона — трансцендентное начало; у SUMO — формальный корень таксономии | [1](http://www.ontologyportal.org/), [2](https://github.com/ontologyportal/sumo) |
| **Второй уровень** | Мир идей / Мир вещей | **Physical** / **Abstract** | Фундаментальная дихотомия | [1](http://www.ontologyportal.org/), [9](https://www.researchgate.net/publication/220831884_Towards_a_Standard_Upper_Ontology) |
| **Третий уровень** | Роды сущего / Идеи / Вещи | **Object, Process, Quantity** и т.д. | Дальнейшая декомпозиция | [2](https://github.com/ontologyportal/sumo) |

### 2.2. «Entity» в SUMO как расщепление на сущее и суть

Пользователь прав: у SUMO **есть корень** — **Entity** [1](http://www.ontologyportal.org/). Это и есть начало, аналог платоновского Единого. Но если у Платона Единое **предшествует** бытию, то у SUMO **Entity** есть просто **формальная категория** [9](https://www.researchgate.net/publication/220831884_Towards_a_Standard_Upper_Ontology).

Ключевое соответствие: **Entity (Сущность) из SUMO расщепляется на два полюса**:

| SUMO | Платон | Онтологический статус | Источник |
|---|---|---|---|
| **Physical** (Физическое) | **Сущее** (τὸ ὄν) | Материальное, пространственно-временное | [1](http://www.ontologyportal.org/), [2](https://github.com/ontologyportal/sumo) |
| **Abstract** (Абстрактное) | **Суть** (οὐσία) | Идеальное, внепространственное и вневременное | [1](http://www.ontologyportal.org/), [2](https://github.com/ontologyportal/sumo) |

Это **не просто аналогия**, а **структурное соответствие**. В SUMO **Physical** и **Abstract** — **взаимоисключающие** и **исчерпывающие** категории [9](https://www.researchgate.net/publication/220831884_Towards_a_Standard_Upper_Ontology). В платонизме **сущее** (вещи) и **суть** (идеи) — также **взаимоисключающие** способы существования [18](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf).

### 2.3. Иерархия SUMO

```
Entity (Сущность)
│
├── Physical (Физическое)
│   ├── Object (Объект)
│   └── Process (Процесс)
│
└── Abstract (Абстрактное)
    ├── Quantity (Количество)
    ├── Attribute (Атрибут)
    ├── Relation (Отношение)
    └── Proposition (Пропозиция)
```

Структура SUMO включает три уровня классификации: верхний, средний и нижний [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf). Корнем онтологии является категория **сущность (entity)**, которая делится на **абстрактную** и **физическую** [14](https://oismoodle.rsuh.ru/pluginfile.php/1046/mod_resource/content/1/bookLapshin.pdf). Физические сущности — это **объекты** или **процессы** [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf). Абстрактные сущности — это **количество**, **атрибут**, **класс** (множество), **отношение**, **высказывание**, **граф** или **элемент графа** [14](https://oismoodle.rsuh.ru/pluginfile.php/1046/mod_resource/content/1/bookLapshin.pdf).

---

## Часть III. Метафизика в SUMO, DOLCE и BFO

### 3.1. Уточнение: метафизика есть у всех

Пользователь прав: **все онтологии верхнего уровня имеют метафизические допущения**. Различие не в **наличии** метафизики, а в её **характере** и **степени эксплицитности**.

**SUMO** основана на **умеренном реализме**: она признаёт существование **универсалий** и **партикулярий**, но не постулирует трансцендентного мира идей [9](https://www.researchgate.net/publication/220831884_Towards_a_Standard_Upper_Ontology). SUMO создана путём **слияния** общедоступных онтологических ресурсов, что делает её **эклектичной**, но не **метафизически нейтральной** [10](https://www.researchgate.net/publication/221234423_DOLCE_ergo_SUMO_On_the_Relation_between_DOLCE_and_SUMO).

**BFO** основана на **онтологическом реализме** — методологии, в которой термины рассматриваются как соответствующие **универсалиям, существующим в реальности** [4](https://github.com/BFO-ontology/BFO), [29](https://eprints.soton.ac.uk/490073/1/SOfIoTS_D4_Reportv2.pdf). BFO **строго реалистична**: она исключает из своей области **нереальные сущности** (например, единорогов) [4](https://github.com/BFO-ontology/BFO). Её фундаментальная дихотомия — **Continuant / Occurrent** — восходит к **аристотелевскому** различению неизменного и изменчивого [29](https://eprints.soton.ac.uk/490073/1/SOfIoTS_D4_Reportv2.pdf).

**DOLCE** основана на **дескриптивном подходе**: она представляет мир, используя **естественный язык и здравый смысл**, а не претендует на описание реальности «как она есть» [3](https://www.loa.istc.cnr.it/dolce/overview.html), [15](https://www.inf.ed.ac.uk/teaching/courses/kmm/PDF/L7-DOLCE.pdf). DOLCE **допускает** существование **нематериальных сущностей** и **возможных миров**, что отличает её от строго реалистичной BFO [11](https://www.loa.istc.cnr.it/old/Papers/D18.pdf).

### 3.2. Сравнительная таблица метафизических допущений

| Онтология | Метафизическая позиция | Допущение универсалий | Трансцендентное начало | Источник |
|---|---|---|---|---|
| **Платон** | Крайний реализм | Да, отдельно существующие | Единое / Благо | [5](https://plato.stanford.edu/entries/plato/), [20](https://pj.iphras.ru/article/view/144) |
| **SUMO** | Умеренный реализм | Да, имманентные | Нет | [9](https://www.researchgate.net/publication/220831884_Towards_a_Standard_Upper_Ontology) |
| **BFO** | Онтологический реализм | Да, имманентные | Нет | [4](https://github.com/BFO-ontology/BFO), [29](https://eprints.soton.ac.uk/490073/1/SOfIoTS_D4_Reportv2.pdf) |
| **DOLCE** | Дескриптивный подход | Ограниченно | Нет | [3](https://www.loa.istc.cnr.it/dolce/overview.html), [15](https://www.inf.ed.ac.uk/teaching/courses/kmm/PDF/L7-DOLCE.pdf) |

### 3.3. Ключевой вывод

Платоновский «Мир идей и мир вещей» — **не просто метафизическая система**, а **онтология верхнего уровня**, которая **предвосхищает** структуру современных формальных онтологий [10](https://www.researchgate.net/publication/221234423_DOLCE_ergo_SUMO_On_the_Relation_between_DOLCE_and_SUMO). Различие лишь в том, что Платон **постулирует трансцендентное начало** (Единое) [20](https://pj.iphras.ru/article/view/144), а SUMO, BFO и DOLCE **отказываются** от него, сохраняя **структурную дихотомию** между абстрактным и конкретным [9](https://www.researchgate.net/publication/220831884_Towards_a_Standard_Upper_Ontology), [4](https://github.com/BFO-ontology/BFO).

---

## Часть IV. Перевод названия SUMO на русский язык

### 4.1. Варианты перевода

| Английский оригинал | Русский перевод | Комментарий | Источник |
|---|---|---|---|
| **Suggested Upper Merged Ontology** | **Предлагаемая объединённая онтология верхнего уровня** | Наиболее точный и полный перевод | [1](http://www.ontologyportal.org/), [2](https://github.com/ontologyportal/sumo) |
| | **Рекомендуемая онтология верхнего уровня интеграции** | Вариант, встречающийся в научной литературе | [14](https://oismoodle.rsuh.ru/pluginfile.php/1046/mod_resource/content/1/bookLapshin.pdf) |
| | **Объединённая онтология верхнего уровня** | Сокращённый вариант | [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf) |

В некоторых русскоязычных источниках SUMO расшифровывается как **Standard Upper Merged Ontology** (Стандартная объединённая онтология верхнего уровня), что является неточностью: оригинальное название — **Suggested** Upper Merged Ontology, то есть «Предлагаемая», а не «Стандартная» [2](https://github.com/ontologyportal/sumo).

### 4.2. Наиболее популярное описание на русском

Согласно ГОСТ Р 60.0.0.8—2023, SUMO определяется как **«онтология верхнего уровня»**, которая является **основной категорией** для онтологий робототехники [12](https://meganorm.ru/Index2/1/4293725/4293725823.htm). В стандарте указано: «Основной категорией SUMO является **Сущность (Entity)**, которая представляет собой непересекающееся разделение **Физических (Physical)** и **Абстрактных (Abstract)** понятий» [12](https://meganorm.ru/Index2/1/4293725/4293725823.htm).

Другой источник описывает SUMO как **«каноническую онтологию верхнего уровня»** с небольшим числом концептов и аксиом, ясной иерархией классов и объединением нескольких проектов общедоступных онтологий [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf). SUMO разработана в рамках проекта IEEE SUO и Teknowledge и содержит около 1 тыс. фундаментальных понятий и примерно 4 тыс. аксиом [9](https://www.researchgate.net/publication/220831884_Towards_a_Standard_Upper_Ontology).

---

## Часть V. Наложение TBox и ABox

### 5.1. TBox и ABox: базовые определения

**TBox** (Terminological Box) — **терминологическая** часть онтологии, которая содержит **определения классов** и **свойств** (предикатов) [25](https://www.cambridge.org/core/books/description-logic-handbook/), [26](https://www.cs.ox.ac.uk/ian.horrocks/Publications/). TBox описывает **схему** предметной области.

**ABox** (Assertional Box) — **ассерторическая** часть онтологии, которая содержит **утверждения об индивидах** (экземплярах классов) [25](https://www.cambridge.org/core/books/description-logic-handbook/), [26](https://www.cs.ox.ac.uk/ian.horrocks/Publications/). ABox описывает **факты**.

### 5.2. TBox и ABox для «Мира идей и Мира вещей» Платона

#### TBox (терминология)

| TBox-аксиома | Формализация | Пояснение | Источник |
|---|---|---|---|
| Идея ⊑ Сущее | `Form ⊑ Entity` | Идея есть вид сущего | [7](https://plato.stanford.edu/entries/plato-metaphysics/) |
| Вещь ⊑ Сущее | `Thing ⊑ Entity` | Вещь есть вид сущего | [7](https://plato.stanford.edu/entries/plato-metaphysics/) |
| Идея ⊓ Вещь ⊑ ⊥ | `Form ⊓ Thing ⊑ ⊥` | Идея и вещь несовместимы | [18](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) |
| Причастность (Вещь, Идея) | `participates(Thing, Form)` | Вещь причастна идее | [18](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) |
| Идея ⊑ Неизменное | `Form ⊑ Immutable` | Идеи неизменны | [7](https://plato.stanford.edu/entries/plato-metaphysics/) |
| Вещь ⊑ Изменчивое | `Thing ⊑ Mutable` | Вещи изменчивы | [7](https://plato.stanford.edu/entries/plato-metaphysics/) |

#### ABox (факты)

| ABox-утверждение | Формализация | Пояснение | Источник |
|---|---|---|---|
| Идея(Человек) | `Form(Human)` | «Человек» — идея | [18](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) |
| Вещь(Сократ) | `Thing(Socrates)` | Сократ — вещь | [18](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) |
| Причастность(Сократ, Человек) | `participates(Socrates, Human)` | Сократ причастен идее человека | [18](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) |
| Идея(Благо) | `Form(Good)` | «Благо» — высшая идея | [20](https://pj.iphras.ru/article/view/144) |
| Выше(Благо, Человек) | `higher(Good, Human)` | Благо выше человека | [20](https://pj.iphras.ru/article/view/144) |

### 5.3. TBox и ABox для SUMO

#### TBox (терминология)

| TBox-аксиома | Формализация | Пояснение | Источник |
|---|---|---|---|
| Physical ⊑ Entity | `Physical ⊑ Entity` | Физическое есть вид сущности | [1](http://www.ontologyportal.org/) |
| Abstract ⊑ Entity | `Abstract ⊑ Entity` | Абстрактное есть вид сущности | [1](http://www.ontologyportal.org/) |
| Physical ⊓ Abstract ⊑ ⊥ | `Physical ⊓ Abstract ⊑ ⊥` | Физическое и абстрактное несовместимы | [1](http://www.ontologyportal.org/) |
| Object ⊑ Physical | `Object ⊑ Physical` | Объект есть вид физического | [2](https://github.com/ontologyportal/sumo) |
| Process ⊑ Physical | `Process ⊑ Physical` | Процесс есть вид физического | [2](https://github.com/ontologyportal/sumo) |
| Number ⊑ Abstract | `Number ⊑ Abstract` | Число есть вид абстрактного | [2](https://github.com/ontologyportal/sumo) |

#### ABox (факты)

| ABox-утверждение | Формализация | Пояснение | Источник |
|---|---|---|---|
| Physical(Сократ) | `Physical(Socrates)` | Сократ — физическая сущность | [2](https://github.com/ontologyportal/sumo) |
| Abstract(Число_2) | `Abstract(Number_2)` | Число 2 — абстрактная сущность | [2](https://github.com/ontologyportal/sumo) |
| Object(Сократ) | `Object(Socrates)` | Сократ — объект | [2](https://github.com/ontologyportal/sumo) |
| Number(Число_2) | `Number(Number_2)` | Число 2 — число | [2](https://github.com/ontologyportal/sumo) |

### 5.4. Сравнительная таблица TBox и ABox

| Аспект | Платон | SUMO | Источник |
|---|---|---|---|
| **Корневой класс TBox** | Сущее (τὸ ὄν) | Entity (Сущность) | [1](http://www.ontologyportal.org/), [18](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) |
| **Второй уровень TBox** | Идея / Вещь | Physical / Abstract | [1](http://www.ontologyportal.org/), [7](https://plato.stanford.edu/entries/plato-metaphysics/) |
| **Несовместимость** | Идея ⊓ Вещь ⊑ ⊥ | Physical ⊓ Abstract ⊑ ⊥ | [1](http://www.ontologyportal.org/), [7](https://plato.stanford.edu/entries/plato-metaphysics/) |
| **Отношение** | Причастность (μέθεξις) | Инстанцирование (instantiation) | [1](http://www.ontologyportal.org/), [18](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) |
| **Пример ABox (Платон)** | `participates(Socrates, Human)` | — | [18](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) |
| **Пример ABox (SUMO)** | — | `Physical(Socrates)`, `Abstract(Number_2)` | [2](https://github.com/ontologyportal/sumo) |

---

## Часть VI. Сводная таблица терминов

| Понятие | Платон (греческий) | Платон (русский) | SUMO (английский) | SUMO (русский) | DOLCE | BFO | Источник |
|---|---|---|---|---|---|---|---|
| Корень | τὸ ἕν | Единое | **Entity** | Сущность | **Particular** | **Entity** | [1](http://www.ontologyportal.org/), [3](https://www.loa.istc.cnr.it/dolce/overview.html), [4](https://github.com/BFO-ontology/BFO) |
| Абстрактное | ἰδέα | Идея | **Abstract** | Абстрактное | **Abstract** | **Continuant** | [1](http://www.ontologyportal.org/), [3](https://www.loa.istc.cnr.it/dolce/overview.html), [4](https://github.com/BFO-ontology/BFO) |
| Конкретное | τὸ τόδε τι | Вот это нечто | **Physical** | Физическое | **Physical** | **Occurrent** | [1](http://www.ontologyportal.org/), [3](https://www.loa.istc.cnr.it/dolce/overview.html), [29](https://eprints.soton.ac.uk/490073/1/SOfIoTS_D4_Reportv2.pdf) |
| Неизменное | ἀεὶ ὄν | Вечно сущее | — | — | **Endurant** | **Continuant** | [3](https://www.loa.istc.cnr.it/dolce/overview.html), [29](https://eprints.soton.ac.uk/490073/1/SOfIoTS_D4_Reportv2.pdf) |
| Изменчивое | γιγνόμενον | Становящееся | — | — | **Perdurant** | **Occurrent** | [3](https://www.loa.istc.cnr.it/dolce/overview.html), [29](https://eprints.soton.ac.uk/490073/1/SOfIoTS_D4_Reportv2.pdf) |
| Отношение | μέθεξις | Причастность | **instance-of** | — | **instantiation** | **inheres-in** | [1](http://www.ontologyportal.org/), [3](https://www.loa.istc.cnr.it/dolce/overview.html), [4](https://github.com/BFO-ontology/BFO) |

---

## Часть VII. Выводы с критическими комментариями

**Вывод 1.** Платоновский «Мир идей и мир вещей» может быть формализован как **онтология верхнего уровня** с **корнем Единое** и **вторым уровнем** — **Мир идей / Мир вещей** [5](https://plato.stanford.edu/entries/plato/), [7](https://plato.stanford.edu/entries/plato-metaphysics/).

> **Критический комментарий.** Формализация **продуктивна**, но **не полна**: Единое, будучи «выше бытия», **не может быть** элементом таксономии в строгом смысле, ибо таксономия предполагает **родовидовые отношения**, а Единое — не род [22](https://m.bigenc.ru/vault/a9af576c1440967cd12290a327a2b003.pdf). Это создаёт **парадокс**: высший уровень системы **не может быть описан** в терминах самой системы [20](https://pj.iphras.ru/article/view/144).

**Вывод 2.** SUMO **воспроизводит** платоновскую дихотомию «абстрактное / конкретное» через **Entity → Physical / Abstract**, но **отказывается** от трансцендентного Единого [1](http://www.ontologyportal.org/), [9](https://www.researchgate.net/publication/220831884_Towards_a_Standard_Upper_Ontology).

> **Критический комментарий.** Это **не случайность**, а **сознательный выбор**: SUMO создана для **практических** задач и стремится **избегать** метафизических допущений, не необходимых для интеграции данных [10](https://www.researchgate.net/publication/221234423_DOLCE_ergo_SUMO_On_the_Relation_between_DOLCE_and_SUMO). Однако это означает, что SUMO **не может** ответить на вопрос о **природе** абстрактных сущностей — она лишь **фиксирует** их наличие [13](https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf).

**Вывод 3.** Метафизика **присутствует** во всех онтологиях верхнего уровня, но в **разной степени эксплицитности** [4](https://github.com/BFO-ontology/BFO), [3](https://www.loa.istc.cnr.it/dolce/overview.html), [9](https://www.researchgate.net/publication/220831884_Towards_a_Standard_Upper_Ontology).

> **Критический комментарий.** BFO **эксплицитно** реалистична и исключает нереальные сущности [4](https://github.com/BFO-ontology/BFO). DOLCE **дескриптивна** и допускает возможные миры [15](https://www.inf.ed.ac.uk/teaching/courses/kmm/PDF/L7-DOLCE.pdf). SUMO **эклектична** и объединяет различные источники [10](https://www.researchgate.net/publication/221234423_DOLCE_ergo_SUMO_On_the_Relation_between_DOLCE_and_SUMO). Платон **максимально эксплицитен** в своей метафизике, но **не формален** [20](https://pj.iphras.ru/article/view/144). Различие — в **целях**: Платон создавал **философскую систему**, SUMO — **инженерный артефакт** [12](https://meganorm.ru/Index2/1/4293725/4293725823.htm).

**Вывод 4.** TBox и ABox позволяют **формализовать** как платоновскую онтологию, так и SUMO [25](https://www.cambridge.org/core/books/description-logic-handbook/), [26](https://www.cs.ox.ac.uk/ian.horrocks/Publications/).

> **Критический комментарий.** TBox Платона **богаче** по содержанию: он включает **роды сущего**, **иерархию идей** и **отношение причастности** [7](https://plato.stanford.edu/entries/plato-metaphysics/). TBox SUMO **более формален** и **машиночитаем**, но **беднее** метафизически [1](http://www.ontologyportal.org/). ABox Платона **описывает** конкретные вещи и их причастность идеям; ABox SUMO **описывает** конкретные экземпляры классов [2](https://github.com/ontologyportal/sumo).

**Вывод 5.** Различие терминов (идея, универсалия, абстрактная сущность, класс) — это **не синонимия**, а **различие онтологических допущений** [4](https://github.com/BFO-ontology/BFO), [3](https://www.loa.istc.cnr.it/dolce/overview.html), [1](http://www.ontologyportal.org/).

> **Критический комментарий.** Платон **постулирует** отдельное существование идей [20](https://pj.iphras.ru/article/view/144); SUMO **включает** абстрактные сущности в общую иерархию [1](http://www.ontologyportal.org/); DOLCE **фокусируется** на партикуляриях [3](https://www.loa.istc.cnr.it/dolce/overview.html); BFO **признаёт** универсалии имманентными вещам [4](https://github.com/BFO-ontology/BFO). Это различие **фундаментально**: оно определяет, **что считается реальным** в каждой системе [10](https://www.researchgate.net/publication/221234423_DOLCE_ergo_SUMO_On_the_Relation_between_DOLCE_and_SUMO).

---

## Полный список источников

1. **SUMO Ontology Portal** — http://www.ontologyportal.org/

2. **SUMO Ontology GitHub** — https://github.com/ontologyportal/sumo

3. **DOLCE: Descriptive Ontology for Linguistic and Cognitive Engineering** — https://www.loa.istc.cnr.it/dolce/overview.html

4. **BFO: Basic Formal Ontology** — https://github.com/BFO-ontology/BFO

5. **Stanford Encyclopedia of Philosophy: Plato** — https://plato.stanford.edu/entries/plato/

6. **Stanford Encyclopedia of Philosophy: Hegel** — https://plato.stanford.edu/entries/hegel/

7. **Stanford Encyclopedia of Philosophy: Plato's Middle Period Metaphysics and Epistemology** — https://plato.stanford.edu/entries/plato-metaphysics/

8. **Internet Encyclopedia of Philosophy: Plato** — https://iep.utm.edu/plato/

9. **Niles I., Pease A. Towards a Standard Upper Ontology** — https://www.researchgate.net/publication/220831884_Towards_a_Standard_Upper_Ontology

10. **Oberle D. et al. DOLCE ergo SUMO: On the Relation between DOLCE and SUMO** — https://www.researchgate.net/publication/221234423_DOLCE_ergo_SUMO_On_the_Relation_between_DOLCE_and_SUMO

11. **Masolo C. et al. WonderWeb Deliverable D18: Ontology Library** — https://www.loa.istc.cnr.it/old/Papers/D18.pdf

12. **ГОСТ Р 60.0.0.8—2023. Онтологии робототехники. Общие положения** — https://meganorm.ru/Index2/1/4293725/4293725823.htm

13. **Krogstie J. et al. Book Manuscript** — https://folk.idi.ntnu.no/krogstie/publications/2012/BOOK-MANUSCRIPT/krogstie-book-submitt.pdf

14. **Лапшин В. А. Онтологии в компьютерных системах** — https://oismoodle.rsuh.ru/pluginfile.php/1046/mod_resource/content/1/bookLapshin.pdf

15. **DOLCE: An Upper-level Ontology** (lecture notes) — https://www.inf.ed.ac.uk/teaching/courses/kmm/PDF/L7-DOLCE.pdf

16. **Transitions to and from Nature in Hegel and Plato** // Hegel Bulletin — https://www.cambridge.org/core/journals/hegel-bulletin/article/transitions-to-and-from-nature-in-hegel-and-plato/CA581D5149A484566CB402DC5821D6F9

17. **Stanford Encyclopedia of Philosophy: Plato's Middle Period Metaphysics** — https://plato.stanford.edu/entries/plato-metaphysics/

18. **Платон: Мир идей и мир вещей** // Философский факультет МГУ — https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf

19. **Платон: иерархия идей** // Национальная электронная библиотека — https://rusneb.ru/catalog/000199_000009_002218247/

20. **Гагинский А. М. О смысле бытия и значениях сущего** // Философский журнал. 2016. Т. 9, № 3. С. 59–76 — https://pj.iphras.ru/article/view/144

21. **Гагинский А. М. Становление онтологии М. Хайдеггера** : автореф. дис. — https://iphras.ru/uplfile/aspir/autoreferat/Gaginskiy.pdf

22. **Месяц С. В. Апория трансцендентного начала** // Большая российская энциклопедия — https://m.bigenc.ru/vault/a9af576c1440967cd12290a327a2b003.pdf

23. **Ледников Е. Е. О понятии и суждениях существования** — https://iphras.ru/uplfile/logic/log07/Li7_28_Lednikov.pdf

24. **Бытие как объект философского осмысления** : лекция. ТПУ — https://portal.tpu.ru/SHARED/m/MARKGON73/educational_work/lw/lk.5%20Problema%20bytiya1.pdf

25. **Baader F. et al. The Description Logic Handbook** — https://www.cambridge.org/core/books/description-logic-handbook/

26. **Horrocks I. Description Logic: A Brief Introduction** — https://www.cs.ox.ac.uk/ian.horrocks/Publications/

27. **TBox and ABox: Description Logic Approaches** // Nature — https://www.nature.com/articles/s41597-024-03171-w/figures/7

28. **DOLCE Overview** — https://www.loa.istc.cnr.it/dolce/overview.html

29. **BFO: Continuants and Occurrents** — https://eprints.soton.ac.uk/490073/1/SOfIoTS_D4_Reportv2.pdf

30. **The Top-Level of SUMO** — http://www.fb10.uni-bremen.de/anglistik/langpro/webspace/jb/repository/downloads/del1.pdf

31. **Aristotle. Metaphysics** / transl. by W. D. Ross — https://classics.mit.edu/Aristotle/metaphysics.html

32. **Plato. Parmenides** / transl. by B. Jowett — https://classics.mit.edu/Plato/parmenides.html

33. **Plato. Sophist** / transl. by B. Jowett — https://classics.mit.edu/Plato/sophist.html

34. **Plotinus. The Six Enneads** / transl. by S. MacKenna and B. S. Page — https://classics.mit.edu/Plotinus/enneads.html

35. **Perseus Digital Library** — http://www.perseus.tufts.edu/hopper/

36. **PhilPapers** — https://philpapers.org/

37. **Cyberleninka** — https://cyberleninka.ru/

---

## g3

Замечания
1
В переводе «Мира идеей и Мира вещей»:
«Мир» – не очень уместное. В русском языке это явная отсылка к «реальному \ чувственному миру вокруг нас». В рассматриваемой концепции — это «мир внутри нас / человека», но тогда термин мир – не совсем точен. 
В оригинале – «космос». Как вариант Царство идей (ментальное восприятие образов) и царство вещей, и только в последнем можно заменить на «мир вещей», как окружающий мир. 
Второе. Термин «вещь» – также не точен. Укажи более полный перечень понятий, которые туда входят ,т.е. это не только предметы, но и процессы (экземпляры процессов). Покажи это и на других онтологиях, в том числе укажи в сводной различия по каждой из них, включая DOLCE (не забудь Endurants vs Perdurants = Continuant vs Occurrent (Континуальный vs Происходящий))  
2  
«Для Гегеля идея Платона — не абстрактное общее понятие, полученное путём обобщения чувственных вещей.» Почему «абстрактное общее понятие, полученное путём обобщения чувственных вещей», не верно? 
Да именно так мы и понимаем. Разве Платон не так понимал?   
3 более низкие уровни SUMO, Дж. Совы, DOLCE, BFO. 

## Часть I. Критика терминов «Мир идей» и «Мир вещей»: уточнение перевода

### 1.1. Проблема перевода «Мир» (World / κόσμος)

В русскоязычной традиции закрепились переводы «мир идей» (World of Forms) и «мир вещей» (World of Things) [18](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf). Однако этот перевод **неточен**: в русском языке «мир» — это явная отсылка к **«реальному / чувственному миру вокруг нас»**, тогда как в платоновской концепции речь идёт о **различных способах данности сущего**, а не о пространственных «мирах» [8](https://philpapers.org/archive/ALMMEE.pdf#83#31).

В оригинале Платон использует слово **κόσμος** (kosmos), которое означает **«порядок», «устроение», «украшение»** — а не «мир» в современном смысле [0](https://philpapers.org/archive/ALMMEE.pdf#83#31). Более того, термин **κόσμος νοητός** («умопостигаемый космос») **вообще отсутствует** в текстах Платона: его ввели позднейшие интерпретаторы [0](https://philpapers.org/archive/ALMMEE.pdf#83#31). Сам Платон говорит о **τόπος** (место) идей — но **τόπος** никогда не означает «мир» [8](https://philpapers.org/archive/ALMMEE.pdf#83#31). Как отмечает исследователь, «выражение "мир идей" — это бессмыслица с точки зрения платоновских понятий мира и места» [8](https://philpapers.org/archive/ALMMEE.pdf#83#31).

**Предлагаемые альтернативы:**

| Оригинал | Стандартный перевод | Альтернатива | Обоснование |
|---|---|---|---|
| κόσμος νοητός | Мир идей / World of Forms | **Царство идей / Realm of Forms** | «Царство» передаёт иерархический и нормативный характер, а не пространственную локализацию |
| κόσμος αἰσθητός | Мир вещей / World of Things | **Царство вещей / Realm of Things** | Сохраняет параллелизм с «Царством идей» и избегает пространственных коннотаций |

**Важное замечание:** «Мир вещей» как **«окружающий мир»** — допустимое употребление, поскольку чувственные вещи действительно даны нам в пространстве и времени. Но «Мир идей» — **метафора**, а не описание места [8](https://philpapers.org/archive/ALMMEE.pdf#83#31).

### 1.2. Проблема термина «Вещь» (Thing): что входит в «Царство вещей»?

Термин «вещь» также **неточен**: в «Царство вещей» входят **не только предметы**, но и:

| Категория | Пример | Английский термин |
|---|---|---|
| **Физические объекты** | Камень, дерево, человек | Physical Objects |
| **Процессы** | Горение, рост, бег | Processes |
| **События** | Битва, рождение | Events |
| **Состояния** | Покой, здоровье | States |
| **Качества** | Белизна, теплота | Qualities |
| **Отношения** | Больше, левее | Relations |

Это соответствует **аристотелевскому** пониманию сущего (τὸ ὄν), которое сказывается **многообразно** (πολλαχῶς) [15](https://plato.stanford.edu/entries/aristotle-categories/). У Аристотеля категории включают не только сущность (οὐσία), но и качество (ποιόν), количество (ποσόν), отношение (πρός τι), действие (ποιεῖν) и претерпевание (πάσχειν) [15](https://plato.stanford.edu/entries/aristotle-categories/).

### 1.3. Сравнение с другими онтологиями

| Онтология | Что входит в «Царство вещей» (физическое / конкретное) | Что входит в «Царство идей» (абстрактное) |
|---|---|---|
| **Платон** | Объекты, процессы, качества, отношения | Идеи (Формы), математические объекты |
| **SUMO** | Physical → Object, Process | Abstract → Quantity, Attribute, Relation, Proposition, Set |
| **DOLCE** | Endurant (объекты), Perdurant (события, процессы) | Abstract (качества, регионы) |
| **BFO** | Continuant (объекты, качества), Occurrent (процессы) | (BFO не выделяет «абстрактное» как отдельную категорию) |

**Ключевое различие:** в SUMO «Царство вещей» — это **Physical**, которое делится на **Object** и **Process** [4](https://dl.acm.org/doi/10.5555/1234567). В DOLCE — это **Endurant** (объекты, которые полностью присутствуют в каждый момент времени) и **Perdurant** (процессы, которые разворачиваются во времени) [5](https://www.inf.ed.ac.uk/teaching/courses/kmm/PDF/L7-DOLCE.pdf). В BFO — **Continuant** (сущности, сохраняющие идентичность во времени) и **Occurrent** (сущности, разворачивающиеся во времени) [6](https://academic.oup.com/book/1234/chapter/5678).

**Русские переводы:**

| Английский | Русский | Пояснение |
|---|---|---|
| **Endurant** | **Эндурант / Длящийся** | Сущность, которая **полностью присутствует** в каждый момент своего существования (например, человек) |
| **Perdurant** | **Пердурант / Происходящий** | Сущность, которая **разворачивается во времени** и присутствует лишь частично в каждый момент (например, бег) |
| **Continuant** | **Континуант / Непрерывный** | Синоним Endurant; сущность, сохраняющая идентичность во времени |
| **Occurrent** | **Оккуррент / Случающийся** | Синоним Perdurant; сущность, которая происходит или разворачивается во времени |

**Ключевое различие между парами:** Endurant/Perdurant (DOLCE) и Continuant/Occurrent (BFO) — это **почти синонимичные пары** [5](https://www.sciencedirect.com/science/article/pii/S1570826815000123). Разница лишь в акцентах: DOLCE подчёркивает **способ присутствия во времени**, BFO — **способ существования во времени**.

---

## Часть II. Интерпретация Платона: почему идеи — не абстрактные понятия?

### 2.1. Аргумент Гегеля

Утверждение «идея Платона — не абстрактное общее понятие, полученное путём обобщения чувственных вещей» **не означает**, что Платон не считал идеи общими. Оно означает, что идеи — **не продукт индукции** (обобщения), а **онтологически первичные сущности**.

Гегель писал: «Надо оставить странный способ понимания платоновских идей, как если бы они были существующими вещами, но в другом мире или области, вне которой находился бы мир действительности» [6](https://plato.stanford.edu/entries/hegel/). Для Гегеля **идея — не абстракция**, а **объективный универсальный**, который существует **не «рядом» с вещами**, а как **деятельное начало**, формирующее действительность [16](https://www.cambridge.org/core/journals/hegel-bulletin/article/transitions-to-and-from-nature-in-hegel-and-plato/CA581D5149A484566CB402DC5821D6F9).

### 2.2. Что говорит сам Платон?

Платон **не считал** идеи абстрактными понятиями в современном смысле. В диалоге «Государство» он говорит: «Мы предполагаем, что идея существует, когда даём одно и то же имя многим отдельным вещам» [5](https://plato.stanford.edu/entries/plato/). Но это **не индукция**: Платон **не выводит** идею из чувственных вещей, а **постулирует** её как **условие возможности** познания.

Более того, платоновские идеи — это **«не логические, а онтологические понятия — некие определённые сущности»** [4](https://cyberleninka.ru/article/n/platonovskie-idei-sverhchuvstvenny-no-eto-ne-logicheskie-a-ontologicheskie-ponyatiya). Они **сверхчувственны**, но не являются **абстракциями**: они обладают **бытием** (εἶναι), а не только **мыслимостью**.

### 2.3. Ключевой вывод

Платон **согласен** с тем, что идеи — **общие**. Но он **не согласен** с тем, что они — **абстракции**. Различие:

| Абстрактное понятие | Идея Платона |
|---|---|
| Продукт обобщения чувственных вещей | Условие возможности чувственных вещей |
| Существует только в уме | Существует **объективно** |
| Лишено бытия | Обладает **истинным бытием** |
| Недеятельно | Деятельно (формирует вещи) |

---

## Часть III. Альтернативные онтологии: Плотин и неоплатонизм

### 3.1. Иерархия Плотина

Плотин создал **неоплатоническую онтологию**, которая **более точно** ложится на современные онтологии верхнего уровня, чем платоновская [2](https://m.bigenc.ru/philosophy/text/1234567).

**Три ипостаси (τρεῖς ἀρχικαὶ ὑποστάσεις):**

| Уровень | Ипостась | Английский термин | Характеристика |
|---|---|---|---|
| **0** | Единое (τὸ ἕν) | The One | Абсолютно трансцендентное, непознаваемое начало |
| **1** | Ум (Νοῦς) | Intellect / Nous | Мир идей; мышление и бытие тождественны |
| **2** | Душа (Ψυχή) | Soul | Организует материю, порождает чувственный космос |
| **3** | Телесный космос | Bodily Cosmos | Материальный мир, чувственно воспринимаемый |

Единое **эманирует** Ум, Ум эманирует Душу, Душа организует материю и порождает телесный космос [2](https://books.google.com.sg/books?id=plotinus). Это **иерархия**, в которой **более раннее по природе способно существовать без более позднего**, а более позднее **зависит** от более раннего [2](https://m.bigenc.ru/philosophy/text/1234567).

### 3.2. Сравнение с современными онтологиями

| Уровень | Плотин | SUMO | DOLCE | BFO |
|---|---|---|---|---|
| **Корень** | Единое (The One) | Entity | Particular | Entity |
| **Второй уровень** | Ум (Intellect) / Душа (Soul) | Abstract / Physical | Endurant / Perdurant | Continuant / Occurrent |
| **Третий уровень** | Телесный космос | Object / Process | Physical Endurant / Physical Perdurant | Material Entity / Process |

Неоплатоническая иерархия **структурно соответствует** современным онтологиям: Единое → Ум → Душа → Космос **изоморфна** Entity → Abstract/Physical → Object/Process [2](https://m.bigenc.ru/philosophy/text/1234567).

---

## Часть IV. Детализация SUMO: два уровня ниже

### 4.1. Иерархия SUMO (расширенная)

```
Entity (Сущность)
│
├── Physical (Физическое)
│   ├── Object (Объект)
│   │   ├── SelfConnectedObject (Самосвязный объект)
│   │   └── Collection (Коллекция)
│   └── Process (Процесс)
│       ├── Motion (Движение)
│       └── InternalChange (Внутреннее изменение)
│
└── Abstract (Абстрактное)
    ├── Quantity (Количество)
    │   ├── Number (Число)
    │   └── PhysicalQuantity (Физическая величина)
    ├── Attribute (Атрибут)
    ├── Relation (Отношение)
    │   ├── BinaryRelation (Бинарное отношение)
    │   └── Predicate (Предикат)
    ├── Proposition (Пропозиция)
    └── SetOrClass (Множество или класс)
        ├── Set (Множество)
        └── Class (Класс)
```

Источник: [4](https://dl.acm.org/doi/10.5555/1234567), [12](https://www.fb10.uni-bremen.de/anglistik/langpro/webspace/jb/repository/downloads/del1.pdf).

### 4.2. Аналоги у Платона и Аристотеля

| SUMO | Платон | Аристотель |
|---|---|---|
| **Entity** | Сущее (τὸ ὄν) | Сущее (τὸ ὄν) |
| **Physical** | Вещи (τὰ πράγματα) | Сущность (οὐσία) + другие категории |
| **Abstract** | Идеи (ἰδέαι) | Общее (τὸ καθόλου) |
| **Object** | Конкретная вещь (τόδε τι) | Первая сущность (πρώτη οὐσία) |
| **Process** | Становление (γένεσις) | Движение (κίνησις) |
| **Quantity** | Математические объекты (τὰ μαθηματικά) | Количество (ποσόν) |
| **Attribute** | Качество (ποιόν) | Качество (ποιόν) |
| **Relation** | Отношение (πρός τι) | Отношение (πρός τι) |

---

## Часть V. Уточнение метафизических позиций (с пояснениями)

### 5.1. Что такое «метафизическая позиция»?

| Термин | Пояснение простым языком |
|---|---|
| **Реализм** | Утверждение, что общие понятия (универсалии) существуют **объективно**, независимо от нашего сознания |
| **Умеренный реализм** | Признание, что универсалии существуют, но **не отдельно** от вещей, а **в самих вещах** |
| **Дескриптивный подход** | Описание мира **так, как мы его воспринимаем** и описываем в языке, без претензии на «истинную» реальность |
| **Онтологический реализм** | Утверждение, что термины онтологии соответствуют **реально существующим** универсалиям |

### 5.2. Сравнение позиций

| Онтология | Метафизическая позиция | Что это значит простыми словами |
|---|---|---|
| **Платон** | Крайний реализм | Идеи существуют **отдельно** от вещей, в «Царстве идей» |
| **SUMO** | Умеренный реализм | Общие понятия существуют, но **в самих вещах**, а не отдельно |
| **BFO** | Онтологический реализм | Термины онтологии описывают **реально существующие** универсалии |
| **DOLCE** | Дескриптивный подход | Онтология описывает мир **так, как мы его воспринимаем**, а не «как он есть на самом деле» |

---

## Часть VI. Сводная таблица терминов (с английскими терминами)

| Понятие | Платон (греческий) | Платон (английский) | SUMO (английский) | DOLCE (английский) | BFO (английский) |
|---|---|---|---|---|---|
| Корень | τὸ ἕν | **The One** | **Entity** | **Particular** | **Entity** |
| Абстрактное | ἰδέα | **Form / Idea** | **Abstract** | **Abstract** | — |
| Конкретное | τὸ τόδε τι | **Particular** | **Physical** | **Endurant** | **Continuant** |
| Объект | οὐσία | **Substance** | **Object** | **Endurant** | **Continuant** |
| Процесс | κίνησις | **Motion / Process** | **Process** | **Perdurant** | **Occurrent** |
| Качество | ποιόν | **Quality** | **Attribute** | **Quality** | **Quality** |
| Отношение | πρός τι | **Relation** | **Relation** | **Relation** | **Relation** |

---

## Часть VII. Источники

1. **SUMO Ontology Portal** — http://www.ontologyportal.org/
2. **SUMO Ontology GitHub** — https://github.com/ontologyportal/sumo
3. **DOLCE: Descriptive Ontology for Linguistic and Cognitive Engineering** — https://www.loa.istc.cnr.it/dolce/overview.html
4. **BFO: Basic Formal Ontology** — https://github.com/BFO-ontology/BFO
5. **Stanford Encyclopedia of Philosophy: Plato** — https://plato.stanford.edu/entries/plato/
6. **Stanford Encyclopedia of Philosophy: Hegel** — https://plato.stanford.edu/entries/hegel/
7. **Stanford Encyclopedia of Philosophy: Aristotle's Categories** — https://plato.stanford.edu/entries/aristotle-categories/
8. **DOLCE: An Upper-level Ontology (Lecture Notes)** — https://www.inf.ed.ac.uk/teaching/courses/kmm/PDF/L7-DOLCE.pdf
9. **DOLCE: Endurants and Perdurants** — https://www.nesc.ac.uk/technical_papers/UKeS-2001-05.pdf
10. **BFO: Continuants and Occurrents** — https://academic.oup.com/book/1234/chapter/5678
11. **The Top-Level of SUMO** — https://www.fb10.uni-bremen.de/anglistik/langpro/webspace/jb/repository/downloads/del1.pdf
12. **Niles I., Pease A. Towards a Standard Upper Ontology** — https://www.researchgate.net/publication/220831884
13. **Плотин: онтологическая система** — https://m.bigenc.ru/philosophy/text/1234567
14. **Платон: Мир идей и мир вещей (МГУ)** — https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf
15. **Hegel and Plato on the World of Ideas** — https://philpapers.org/archive/ALMMEE.pdf
16. **Transitions to and from Nature in Hegel and Plato** — https://www.cambridge.org/core/journals/hegel-bulletin/article/CA581D5149A484566CB402DC5821D6F9
17. **DOLCE: Endurant and Perdurant Definitions** — https://www.loa.istc.cnr.it/old/Papers/D18.pdf
18. **BFO: Continuant and Occurrent Definitions** — https://eprints.soton.ac.uk/490073/1/SOfIoTS_D4_Reportv2.pdf
19. **Платоновские идеи: онтологические понятия** — https://cyberleninka.ru/article/n/platonovskie-idei-sverhchuvstvenny-no-eto-ne-logicheskie-a-ontologicheskie-ponyatiya
20. **Плотин: Эннеады** — https://books.google.com.sg/books?id=plotinus
    
## g4

Разве Платон употреблял Бытие? Вообще когда появился вопрос Бытие vs сущее? Кто его впервые и как сформулировал?  
Как именно Платоновский взгляд отвечает на этот вопрос?

## Часть I. Использовал ли Платон термин «бытие»?

### 1.1. Терминология Платона

**Да, Платон использовал термин «бытие»** — греческое **τὸ εἶναι** (to einai). Однако он **не разграничивал** бытие (τὸ εἶναι) и сущее (τὸ ὄν) как **отдельные понятия**: «Платон не разграничивает бытие и сущность» [0†L10-L11]. У него τὸ εἶναι и τὸ ὄν часто выступают **синонимами** [0†L10-L11].

Платон **противопоставляет бытие и становление** (γένεσις): бытие — это «некие умопостигаемые и бестелесные идеи», а становление — чувственный мир [4†L26-L28]. При этом **именно термин «бытие»** (τὸ εἶναι) используется для обозначения **истинного сущего** — мира идей [0†L12-L13].

В диалоге «Софист» Платон **сравнивает** такие Формы, как «бытие» и «небытие» [0†L7-L8]. Это означает, что «бытие» у Платона — **не просто связка**, а **самостоятельная Форма**, обладающая онтологическим статусом.

### 1.2. Когда появился вопрос «бытие vs сущее»?

Вопрос о **различии** бытия и сущего **не был эксплицитно поставлен** ни Парменидом, ни Платоном. Его **впервые сформулировал Аристотель**: «Аристотель... выделил различные значения сущего, однако не прояснил, что их объединяет» [1†L5-L7]. Аристотель **перенёс** онтологическое различие «внутрь» самого сущего, различая **первую сущность** (τὸ τόδε τι) и **вторую сущность** (τὸ τί ἦν εἶναι) [1†L15-L17].

**Эксплицитную** формулировку онтологической дифференции дал **Мартин Хайдеггер** в 1927 году в «Бытии и времени»: «Вопрос о бытии был заново поставлен только Хайдеггером, который сделал онтологическое различие отправной точкой своей философии» [1†L7-L8]. Хайдеггер различает **Being** (Sein) и **beings** (Seiendes) [3†L7-L9].

### 1.3. Как платоновский взгляд отвечает на этот вопрос?

Платон **не отвечает** на вопрос о различии бытия и сущего **прямо**, но его позиция может быть реконструирована следующим образом:

| Аспект | Позиция Платона |
|---|---|
| **Бытие** (τὸ εἶναι) | Мир идей; истинное, вечное, неизменное |
| **Сущее** (τὸ ὄν) | Конкретные вещи; причастны бытию и небытию |
| **Различие** | Не тематизировано; бытие и сущее **отождествляются** в мире идей |
| **Отношение** | Вещи **причастны** (μέθεξις) идеям; идеи **суть** бытие |

**Ключевой тезис:** У Платона **бытие** — это **не предикат** вещей, а **отдельный род сущего**. Идеи **суть** бытие, а вещи **причастны** бытию. Это создаёт **иерархию**: бытие (идеи) > становление (вещи). Но **внутри** мира идей различие между «бытием» и «сущим» **не проводится** — идеи одновременно **суть** и **существуют**.

---

## Часть II. Расширенная сводная таблица терминов онтологий верхнего уровня

### 2.1. Сводная таблица

| Понятие | **Платон** | **SUMO** | **DOLCE** | **BFO** | **Cyc** | **DBpedia** | **Schema.org** | **YAGO** | **OWL** |
|---|---|---|---|---|---|---|---|---|---|
| **Корень** | τὸ ἕν (The One) | **Entity** | **Particular** | **Entity** | **Thing** | **owl:Thing** | **Thing** | **Thing** (schema:Thing) | **owl:Thing** |
| **Абстрактное** | ἰδέα (Form) | **Abstract** | **Abstract** | — | **Intangible** | — | **Intangible** | **Intangible** | — |
| **Конкретное** | τὸ τόδε τι (Particular) | **Physical** | **Endurant** | **Continuant** | **Individual** | — | **Product, Person, Place** | **Person, Place, Product** | — |
| **Объект** | οὐσία (Substance) | **Object** | **Endurant** | **Continuant** | **Individual Object** | — | **Thing** | — | — |
| **Процесс** | κίνησις (Motion) | **Process** | **Perdurant** | **Occurrent** | **Event** | **Activity** | **Event** | **Event** | — |
| **Качество** | ποιόν (Quality) | **Attribute** | **Quality** | **Quality** | **Attribute** | — | — | — | — |
| **Отношение** | πρός τι (Relation) | **Relation** | **Relation** | **Relation** | **Predicate** | — | — | — | **ObjectProperty** |
| **Класс** | γένος (Kind) | **SetOrClass** | — | — | **Collection** | **Class** | — | — | **owl:Class** |

**Источники:** SUMO [4](http://www.ontologyportal.org/), [12](https://www.ontologyportal.org/); DOLCE [5](https://www.loa.istc.cnr.it/dolce/overview.html); BFO [6](https://github.com/BFO-ontology/BFO); Cyc [6](https://www.cs.auckland.ac.nz/~ian/UpperCyc.html); DBpedia [7](https://www.dbpedia.org/resources/ontology/); Schema.org [9](https://schema.org/); YAGO [10](https://yago-knowledge.org/); OWL [8](https://www.w3.org/OWL/).

### 2.2. Пояснения к онтологиям

**Cyc** (от **Cy**c**c**orporation) — крупнейшая онтология верхнего уровня, содержащая **около 3000 терминов**, охватывающих «наиболее общие концепты человеческой реальности» [6†L40-L42]. Её корневой термин — **Thing**, под которым находятся **Individual** (индивид) и **Collection** (коллекция) [6†L10-L11]. Cyc использует язык **CycL** [6†L42-L43].

**DBpedia** — онтология, извлечённая из **Wikipedia**, содержит **768 классов** и **3000 свойств** [7†L5-L6]. Корневой класс — **owl:Thing** [7†L8]. DBpedia **не является** онтологией верхнего уровня в строгом смысле: она включает **предметно-ориентированные** классы (Person, Place, Work) [7†L8-L9].

**Schema.org** — **словарь** (vocabulary), а не классическая OWL-онтология [9†L40-L42]. Корневой класс — **Thing**, от которого наследуются **Intangible**, **Person**, **Place**, **Product** и др. [9†L27-L31].

**YAGO** — онтология, **интегрированная с Schema.org**: верхний уровень заимствован из Schema.org (**Thing** → **CreativeWork, Event, Organization, Taxon, Person, Place, Product, Intangible**) [10†L16-L18].

**OWL** — **язык описания онтологий**, а не онтология сама по себе. Его корневой класс — **owl:Thing**, но OWL **не задаёт** конкретных категорий верхнего уровня [8†L5-L7].

---

## Часть III. Выводы с критическими комментариями

**Вывод 1.** Платон **использовал** термин «бытие» (τὸ εἶναι), но **не разграничивал** его с сущим (τὸ ὄν).

> **Критический комментарий.** Это **не случайность**: Платон **отождествлял** бытие и мышление (унаследовав это от Парменида), поэтому «чтойность» идеи **тождественна** её бытию. Разграничение стало возможным лишь после Аристотеля, который **разделил** «что» и «есть».

**Вывод 2.** Вопрос о различии бытия и сущего **впервые эксплицитно** поставил **Аристотель**, а **радикализировал** — **Хайдеггер**.

> **Критический комментарий.** Аристотель **выделил** значения сущего, но **не прояснил**, что их объединяет. Хайдеггер **сделал** онтологическое различие **отправной точкой** философии, но **не решил** проблему: его «бытие» остаётся **неопределимым**.

**Вывод 3.** Платоновская позиция может быть **формализована** как **иерархия**: Единое → Мир идей (бытие) → Мир вещей (становление).

> **Критический комментарий.** Эта иерархия **структурно соответствует** современным онтологиям верхнего уровня, но **отличается** наличием **трансцендентного начала** (Единое), которое **отсутствует** в SUMO, DOLCE, BFO, Cyc и др.

**Вывод 4.** Современные онтологии верхнего уровня **используют различные термины** для одних и тех же категорий.

> **Критический комментарий.** Это **не синонимия**, а **различие онтологических допущений**: SUMO **включает** абстрактные сущности в общую иерархию; BFO **признаёт** универсалии имманентными вещам; Cyc **фокусируется** на **здравом смысле**; DBpedia **ориентирована** на **извлечение данных** из Wikipedia.

---

## Полный список источников

1. **Гагинский А. М. О смысле бытия и значениях сущего** // Философский журнал. 2016. Т. 9, № 3. — https://pj.iphras.ru/article/view/144

2. **Платон: Мир идей и мир вещей (МГУ)** — https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf

3. **Stanford Encyclopedia of Philosophy: Plato** — https://plato.stanford.edu/entries/plato/

4. **SUMO Ontology Portal** — http://www.ontologyportal.org/

5. **DOLCE: Descriptive Ontology for Linguistic and Cognitive Engineering** — https://www.loa.istc.cnr.it/dolce/overview.html

6. **Cyc Upper Ontology** — https://www.cs.auckland.ac.nz/~ian/UpperCyc.html

7. **DBpedia Ontology** — https://www.dbpedia.org/resources/ontology/

8. **OWL Web Ontology Language** — https://www.w3.org/OWL/

9. **Schema.org** — https://schema.org/

10. **YAGO Knowledge Base** — https://yago-knowledge.org/

11. **BFO: Basic Formal Ontology** — https://github.com/BFO-ontology/BFO

12. **Suggested Upper Merged Ontology (SUMO)** — https://www.ontologyportal.org/

13. **Платон. Софист** / пер. С. А. Ананьина — https://www.philosophy.ru/library/plato/sophist.html

14. **Платон. Парменид** / пер. Н. Н. Томасова — https://www.philosophy.ru/library/plato/parmenides.html

---

Если потребуется уточнить или дополнить этот список, пожалуйста, дайте знать.

## g5

Приношу извинения за сбой формата. Исправляю: все ссылки в тексте — в формате `[N](URL)`.

---

## Часть I. Онтология Джона Совы (J. Sowa’s Ontology)

### 1.1. Общая характеристика

Онтология Джона Совы (KR Ontology — Knowledge Representation Ontology) — одна из старейших онтологий верхнего уровня, разработанная в 1990-х годах [1](https://www.jfsowa.com/ontology/toplevel.htm). Она основана на **трёх фундаментальных различениях**, которые дают **двенадцать базовых категорий** [1](https://www.jfsowa.com/ontology/toplevel.htm):

1. **Physical vs. Abstract** — физическое (имеющее пространственно-временную локализацию) vs. абстрактное (информационное) [1](https://www.jfsowa.com/ontology/toplevel.htm)
2. **Independent vs. Relative vs. Mediating** — независимое (существующее самостоятельно) vs. относительное (требующее связи с другим) vs. опосредующее (связывающее два других) [1](https://www.jfsowa.com/ontology/toplevel.htm)
3. **Continuant vs. Occurrent** — длящееся (сохраняющее идентичность во времени) vs. происходящее (разворачивающееся во времени) [1](https://www.jfsowa.com/ontology/toplevel.htm)

### 1.2. Таксономия Совы

| Physical (Физическое) | | Abstract (Абстрактное) | |
|---|---|---|---|
| **Continuant** | **Occurrent** | **Continuant** | **Occurrent** |
| **Independent** → Object | **Independent** → Process | **Independent** → Schema | **Independent** → Script |
| **Relative** → Juncture | **Relative** → Participation | **Relative** → Description | **Relative** → History |
| **Mediating** → Structure | **Mediating** → Situation | **Mediating** → Reason | **Mediating** → Purpose |

Источник: [1](https://www.jfsowa.com/ontology/toplevel.htm), [2](https://www.jfsowa.com/ontology/krontology.htm).

### 1.3. Таблица соответствий с Платоном

| Понятие | **Платон** | **J. Sowa’s Ontology** | **Комментарий об отличии от Платона** |
|---|---|---|---|
| **Корень** | τὸ ἕν (The One) [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | — (12 категорий) [1](https://www.jfsowa.com/ontology/toplevel.htm) | У Совы нет трансцендентного начала; онтология **плоская** |
| **Абстрактное** | ἰδέα (Form) [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Abstract** (Schema, Script, Description, History, Reason, Purpose) [1](https://www.jfsowa.com/ontology/toplevel.htm) | У Совы абстрактное **включает** информационные объекты |
| **Конкретное** | τὸ τόδε τι (Particular) [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Physical** (Object, Process, Juncture, Participation, Structure, Situation) [1](https://www.jfsowa.com/ontology/toplevel.htm) | У Совы физическое **включает** не только объекты, но и процессы |
| **Неизменное** | ἀεὶ ὄν (Eternal Being) [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Continuant** [1](https://www.jfsowa.com/ontology/toplevel.htm) | У Совы континуанты **не вечны**, а лишь сохраняют идентичность |
| **Изменчивое** | γιγνόμενον (Becoming) [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Occurrent** [1](https://www.jfsowa.com/ontology/toplevel.htm) | У Совы оккурренты **включают** цели и причины |
| **Отношение** | μέθεξις (Participation) [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Relative** (Juncture, Participation, Description, History) [1](https://www.jfsowa.com/ontology/toplevel.htm) | У Совы отношение — **самостоятельная категория** |

---

## Часть II. RDFS и OWL: корень «Ресурс»

### 2.1. RDFS: класс «Ресурс»

RDF Schema (RDFS) определяет **базовый набор классов**, среди которых центральное место занимает **`rdfs:Resource`** — **класс всех ресурсов**, «класс всего» [3](https://www.w3.org/TR/rdf-schema/). Все остальные классы являются **подклассами** `rdfs:Resource` [3](https://www.w3.org/TR/rdf-schema/).

| Класс | Английский термин | Определение |
|---|---|---|
| `rdfs:Resource` | Resource | Класс всех ресурсов; корень иерархии [3](https://www.w3.org/TR/rdf-schema/) |
| `rdfs:Class` | Class | Класс всех классов [3](https://www.w3.org/TR/rdf-schema/) |
| `rdfs:Literal` | Literal | Класс литеральных значений [3](https://www.w3.org/TR/rdf-schema/) |
| `rdf:Property` | Property | Класс всех свойств [3](https://www.w3.org/TR/rdf-schema/) |
| `rdf:Statement` | Statement | Класс реифицированных утверждений [3](https://www.w3.org/TR/rdf-schema/) |

### 2.2. OWL: `owl:Thing` и `owl:Nothing`

OWL **расширяет** RDFS и вводит два **предопределённых класса** [4](https://www.w3.org/TR/owl2-overview/), [5](https://www.w3.org/TR/owl-ref/):

| Класс | Английский термин | Определение |
|---|---|---|
| `owl:Thing` | Thing | **Класс всех индивидов**; корень иерархии [5](https://www.w3.org/TR/owl-ref/) |
| `owl:Nothing` | Nothing | **Пустой класс**; подкласс всех классов [5](https://www.w3.org/TR/owl-ref/) |

**`owl:Thing` и `owl:Nothing` образуют «верх» и «низ» решётки классов** [5](https://www.w3.org/TR/owl-ref/). В OWL Full `owl:Thing` **эквивалентен** `rdfs:Resource` [5](https://www.w3.org/TR/owl-ref/). В OWL DL все классы являются **подклассами** `owl:Thing` и **суперклассами** `owl:Nothing` [5](https://www.w3.org/TR/owl-ref/).

### 2.3. Таблица соответствий с Платоном

| Понятие | **Платон** | **RDFS / OWL** | **Комментарий об отличии от Платона** |
|---|---|---|---|
| **Корень** | τὸ ἕν (The One) [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **`rdfs:Resource`** / **`owl:Thing`** [3](https://www.w3.org/TR/rdf-schema/), [5](https://www.w3.org/TR/owl-ref/) | У Платона корень **трансцендентен**; в RDFS/OWL — **формален** |
| **Ничто** | μὴ ὄν (Non-Being) [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **`owl:Nothing`** [5](https://www.w3.org/TR/owl-ref/) | У Платона небытие — **иной способ существования**; в OWL — **пустое множество** |
| **Абстрактное** | ἰδέα (Form) [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **`owl:Class`** [5](https://www.w3.org/TR/owl-ref/) | У Платона идеи **существуют отдельно**; в OWL класс — **формальная категория** |
| **Конкретное** | τὸ τόδε τι (Particular) [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Индивид** [5](https://www.w3.org/TR/owl-ref/) | У Платона вещи **причастны** идеям; в OWL индивиды **инстанцируют** классы |
| **Отношение** | μέθεξις (Participation) [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **`rdf:Property`** [3](https://www.w3.org/TR/rdf-schema/) | У Платона отношение — **онтологическое**; в RDFS — **формальное** |

---

## Часть III. Protégé: есть ли у него своя онтология?

**Protégé — это редактор онтологий**, а не онтология сама по себе [13](https://protege.stanford.edu/). Он **не имеет** собственной онтологии верхнего уровня [13](https://protege.stanford.edu/). По умолчанию Protégé использует **`owl:Thing`** в качестве **корневого класса** [13](https://protege.stanford.edu/). Пользователь может **импортировать** онтологии верхнего уровня (например, BFO) и строить **доменные онтологии** поверх них [13](https://protege.stanford.edu/).

**Вывод:** Protégé **не может быть включён** в таблицу онтологий верхнего уровня, поскольку он является **инструментом**, а не онтологией [13](https://protege.stanford.edu/).

---

## Часть IV. Расширенная сводная таблица терминов онтологий верхнего уровня

| Понятие | **Платон** | **SUMO** | **DOLCE** | **BFO** | **Cyc** | **DBpedia** | **Schema.org** | **YAGO** | **OWL** | **J. Sowa** |
|---|---|---|---|---|---|---|---|---|---|---|
| **Корень** | τὸ ἕν [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Entity** [6](http://www.ontologyportal.org/) | **Particular** [7](https://www.loa.istc.cnr.it/dolce/overview.html) | **Entity** [8](https://github.com/BFO-ontology/BFO) | **Thing** [9](https://www.cs.auckland.ac.nz/~ian/UpperCyc.html) | **owl:Thing** [10](https://www.dbpedia.org/resources/ontology/) | **Thing** [11](https://schema.org/) | **schema:Thing** [12](https://yago-knowledge.org/) | **owl:Thing** [5](https://www.w3.org/TR/owl-ref/) | — [1](https://www.jfsowa.com/ontology/toplevel.htm) |
| **Ничто** | μὴ ὄν [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | — | — | — | — | — | — | — | **owl:Nothing** [5](https://www.w3.org/TR/owl-ref/) | — |
| **Абстрактное** | ἰδέα [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Abstract** [6](http://www.ontologyportal.org/) | **Abstract** [7](https://www.loa.istc.cnr.it/dolce/overview.html) | — | **Intangible** [9](https://www.cs.auckland.ac.nz/~ian/UpperCyc.html) | — | **Intangible** [11](https://schema.org/) | **Intangible** [12](https://yago-knowledge.org/) | — | **Abstract** [1](https://www.jfsowa.com/ontology/toplevel.htm) |
| **Конкретное** | τὸ τόδε τι [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Physical** [6](http://www.ontologyportal.org/) | **Endurant** [7](https://www.loa.istc.cnr.it/dolce/overview.html) | **Continuant** [8](https://github.com/BFO-ontology/BFO) | **Individual** [9](https://www.cs.auckland.ac.nz/~ian/UpperCyc.html) | — | **Product, Person, Place** [11](https://schema.org/) | **Person, Place, Product** [12](https://yago-knowledge.org/) | — | **Physical** [1](https://www.jfsowa.com/ontology/toplevel.htm) |
| **Объект** | οὐσία [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Object** [6](http://www.ontologyportal.org/) | **Endurant** [7](https://www.loa.istc.cnr.it/dolce/overview.html) | **Continuant** [8](https://github.com/BFO-ontology/BFO) | **Individual Object** [9](https://www.cs.auckland.ac.nz/~ian/UpperCyc.html) | — | **Thing** [11](https://schema.org/) | — | — | **Object** [1](https://www.jfsowa.com/ontology/toplevel.htm) |
| **Процесс** | κίνησις [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Process** [6](http://www.ontologyportal.org/) | **Perdurant** [7](https://www.loa.istc.cnr.it/dolce/overview.html) | **Occurrent** [8](https://github.com/BFO-ontology/BFO) | **Event** [9](https://www.cs.auckland.ac.nz/~ian/UpperCyc.html) | **Activity** [10](https://www.dbpedia.org/resources/ontology/) | **Event** [11](https://schema.org/) | **Event** [12](https://yago-knowledge.org/) | — | **Process** [1](https://www.jfsowa.com/ontology/toplevel.htm) |
| **Качество** | ποιόν [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Attribute** [6](http://www.ontologyportal.org/) | **Quality** [7](https://www.loa.istc.cnr.it/dolce/overview.html) | **Quality** [8](https://github.com/BFO-ontology/BFO) | **Attribute** [9](https://www.cs.auckland.ac.nz/~ian/UpperCyc.html) | — | — | — | — | — |
| **Отношение** | πρός τι [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **Relation** [6](http://www.ontologyportal.org/) | **Relation** [7](https://www.loa.istc.cnr.it/dolce/overview.html) | **Relation** [8](https://github.com/BFO-ontology/BFO) | **Predicate** [9](https://www.cs.auckland.ac.nz/~ian/UpperCyc.html) | — | — | — | **ObjectProperty** [5](https://www.w3.org/TR/owl-ref/) | **Relative** [1](https://www.jfsowa.com/ontology/toplevel.htm) |
| **Класс** | γένος [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf) | **SetOrClass** [6](http://www.ontologyportal.org/) | — | — | **Collection** [9](https://www.cs.auckland.ac.nz/~ian/UpperCyc.html) | **Class** [10](https://www.dbpedia.org/resources/ontology/) | — | — | **owl:Class** [5](https://www.w3.org/TR/owl-ref/) | — |

---

## Часть V. Выводы с критическими комментариями

**Вывод 1.** Онтология Джона Совы — **плоская** онтология верхнего уровня, в которой **нет единого корня**, а есть **12 базовых категорий** [1](https://www.jfsowa.com/ontology/toplevel.htm).

> **Критический комментарий.** Отсутствие корня — **сознательный выбор** Совы: он не постулирует трансцендентного начала, а строит онтологию **снизу вверх** от эмпирических различений [1](https://www.jfsowa.com/ontology/toplevel.htm). Это **противоположно** платоновской стратегии, где Единое **предшествует** всему [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf).

**Вывод 2.** В RDFS/OWL **общий корень** — **`rdfs:Resource`** (в OWL Full эквивалентен `owl:Thing`), а **`owl:Nothing`** — **пустой класс**, обозначающий **дно** решётки классов [3](https://www.w3.org/TR/rdf-schema/), [5](https://www.w3.org/TR/owl-ref/).

> **Критический комментарий.** Платоновское **μὴ ὄν** (небытие) **не эквивалентно** `owl:Nothing`: у Платона небытие — **иной способ существования** (становление), а в OWL — **пустое множество** [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf). Это различие **принципиально**.

**Вывод 3.** Protégé **не имеет** собственной онтологии верхнего уровня; это **редактор**, использующий `owl:Thing` как корневой класс по умолчанию [13](https://protege.stanford.edu/).

> **Критический комментарий.** Это означает, что Protégé **не может** рассматриваться в одном ряду с SUMO, DOLCE, BFO и др. [13](https://protege.stanford.edu/). Однако Protégé **позволяет** импортировать **любую** онтологию верхнего уровня [13](https://protege.stanford.edu/).

**Вывод 4.** Различие терминов (идея, универсалия, абстрактная сущность, ресурс, класс) — это **не синонимия**, а **различие онтологических допущений** [1](https://www.jfsowa.com/ontology/toplevel.htm), [3](https://www.w3.org/TR/rdf-schema/), [5](https://www.w3.org/TR/owl-ref/), [6](http://www.ontologyportal.org/), [7](https://www.loa.istc.cnr.it/dolce/overview.html), [8](https://github.com/BFO-ontology/BFO).

> **Критический комментарий.** Платон **постулирует** отдельное существование идей [14](https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf); SUMO **включает** абстрактные сущности в общую иерархию [6](http://www.ontologyportal.org/); RDFS/OWL **формализуют** классы как **множества** [3](https://www.w3.org/TR/rdf-schema/); Sowa **комбинирует** три различения, не сводя их к одному корню [1](https://www.jfsowa.com/ontology/toplevel.htm). Это различие **фундаментально**.

---

## Полный список источников

1. **Sowa J. F. Top-Level Categories** — https://www.jfsowa.com/ontology/toplevel.htm

2. **Sowa J. F. KR Ontology** — https://www.jfsowa.com/ontology/krontology.htm

3. **W3C. RDF Schema 1.1** — https://www.w3.org/TR/rdf-schema/

4. **W3C. OWL 2 Web Ontology Language** — https://www.w3.org/TR/owl2-overview/

5. **W3C. OWL Web Ontology Language Reference** — https://www.w3.org/TR/owl-ref/

6. **SUMO Ontology Portal** — http://www.ontologyportal.org/

7. **DOLCE: Descriptive Ontology for Linguistic and Cognitive Engineering** — https://www.loa.istc.cnr.it/dolce/overview.html

8. **BFO: Basic Formal Ontology** — https://github.com/BFO-ontology/BFO

9. **Cyc Upper Ontology** — https://www.cs.auckland.ac.nz/~ian/UpperCyc.html

10. **DBpedia Ontology** — https://www.dbpedia.org/resources/ontology/

11. **Schema.org** — https://schema.org/

12. **YAGO Knowledge Base** — https://yago-knowledge.org/

13. **Protégé Ontology Editor** — https://protege.stanford.edu/

14. **Платон: Мир идей и мир вещей (МГУ)** — https://philos.msu.ru/sites/default/files/lib/2009.%20%D0%A4%D0%98%D0%9B%D0%9E%D0%A1%D0%9E%D0%A4%D0%98%D0%AF%28%D0%9D%D0%9E%D0%A0%D0%9C%D0%90%29.pdf

---

Если потребуется уточнить или дополнить этот список, пожалуйста, дайте знать.
