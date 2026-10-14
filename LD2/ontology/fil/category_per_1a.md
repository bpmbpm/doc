## 1

Вы правы: `Cutting` и `BeingCut` в «исправленной структуре» — это **типы процессов**, то есть элементы TBox / Мира идей. А `Cutting_42` и `BeingCut_42` — **конкретные экземпляры** этих типов, то есть элементы ABox / Мира вещей. В предыдущей схеме я смешал уровень типа и уровень экземпляра; ниже это разведено явно.

## Тип или экземпляр?

| Обозначение | Уровень | Коробка | Платоновский смысл | Пример |
|---|---|---|---|---|
| `Cutting` | Тип процесса | TBox | Форма/идея «Резание» | Универсальное понятие действия резания |
| `Cutting_42` | Экземпляр процесса | ABox | Конкретное событие | Сократ режет дерево 14 октября в 17:00 |
| `BeingCut` | Тип процесса | TBox | Форма «Быть разрезаемым» | Универсальное понятие претерпевания |
| `BeingCut_42` | Экземпляр процесса | ABox | Конкретное событие | Дерево подвергается конкретному резанию |

Поэтому корректно так:

```text
// TBox: универсальный тип действия
Cutting ⊑ Action
// Комментарий: «Резание» — подкласс действия.
// Это форма, а не конкретный акт.

// ABox: конкретный акт действия
Cutting_42 : Cutting
// Комментарий: Cutting_42 — конкретный экземпляр резания.

// ABox: конкретный акт претерпевания
BeingCut_42 : BeingCut
// Комментарий: BeingCut_42 — конкретный экземпляр претерпевания.
```

## Почему SUMO подходит

SUMO (*Suggested Upper Merged Ontology*) уже содержит нужное базовое различение: корневой класс `Entity` делится на `Physical` и `Abstract`; `Physical` делится на непересекающиеся `Object` и `Process`; `Abstract` включает `Quantity`, `Attribute`, `SetOrClass`, `Relation` и `Proposition`. [aclanthology](https://aclanthology.org/W17-6608.pdf)

Это почти идеально ложится на платоновскую реконструкцию:

| Платоновский уровень | SUMO | Смысл |
|---|---|---|
| Мир идей | `Abstract`, классы TBox | Универсалии, типы, отношения |
| Мир вещей | `Physical`, экземпляры ABox | Конкретные предметы и события |
| Предмет | `Object` | Сохраняет тождество во времени, имеет пространственные части |
| Процесс | `Process` | Происходит во времени, имеет временные части/стадии |
| Свойство | `Attribute` | Качество, состояние, положение |
| Величина | `Quantity` | Числа и физические величины |
| Отношение | `Relation` | Тип связи между сущностями |

В SUMO `Object` и `Process` — непересекающиеся подклассы `Physical`: объект существует в пространстве и сохраняет идентичность во времени, а процесс происходит во времени и имеет временные части.  Именно это соответствует нашему различению «предмет — процесс». [real.mtak](https://real.mtak.hu/74043/1/Extensions_to_the_core_ontology_for_robotics_and_automation_2014_u.pdf)

## Переложение категорий на SUMO

| Категория Аристотеля | Русский перевод | SUMO-класс / конструкция | Пояснение |
|---|---|---|---|
| Primary substance | Первичная субстанция | `Object` + экземпляр в ABox | Конкретная вещь: Сократ, двигатель, дерево |
| Secondary substance | Вторичная субстанция | `Object`-подкласс или `SetOrClass` | «Человек», «Животное», «Двигатель» как типы |
| Quantity | Количество | `Quantity` | Числа и физические величины |
| Quality | Качество | `Attribute` | Цвет, форма, диспозиция, способность |
| Relation | Отношение | `Relation` | Тип связи; конкретная связь — предикат/роль в ABox |
| Place | Место | `Region` / `GeographicArea` + `located` | Пространственная локализация |
| Time | Время | `TimePosition` / `TimeInterval` | Временная локализация события |
| Position | Положение | `Attribute` | Поза, ориентация, конфигурация |
| State / Having | Состояние / обладание | `Attribute` + `possesses` | Наличие имущества, инструмента, состояния |
| Action | Действие | `IntentionalProcess` или `Process` | Процесс, инициируемый агентом |
| Affection | Претерпевание | `Process` + роль `patient` | Процесс, в котором объект подвергается изменению |

В SUMO `IntentionalProcess` — это процесс, намеренно запущенный когнитивным агентом; `Motion` — любой процесс движения; `ChangeOfPossession` — процесс передачи владения от одного агента другому.  Поэтому «Сократ режет дерево» лучше моделировать как `IntentionalProcess`, а «дерево нагревается на солнце» — как обычный `Process`, поскольку у дерева нет намерения. [ontologyportal](https://www.ontologyportal.org/SUMOhistory/SUMO1.46.txt)

## TBox в стиле SUMO

SUMO обычно записывается в KIF (*Knowledge Interchange Format*). Ниже — не копия официального файла SUMO, а **расширение**: мы вводим аристотелевские категории как подклассы уже существующих классов SUMO.

```lisp
;; ============================================================
;; TBOX — МИР ИДЕЙ
;; Здесь только типы, формы и универсалии.
;; ============================================================

(subclass AristotelianCategory Entity)
;; Комментарий: AristotelianCategory — корневой класс
;; для реконструированных категорий Аристотеля.

(subclass Substance AristotelianCategory)
;; Комментарий: Substance — сущность/субстанция.
;; В SUMO это не конкретный предмет, а категориальный тип.

(subclass PrimarySubstance Substance)
;; Комментарий: PrimarySubstance — тип конкретной индивидуальной вещи.
;; Конкретный Сократ будет экземпляром Object, а не PrimarySubstance.

(subclass SecondarySubstance Substance)
;; Комментарий: SecondarySubstance — тип вида или рода.
;; Примеры: Human, Animal, Engine.

(subclass AristotelianProperty AristotelianCategory)
;; Комментарий: AristotelianProperty — общий класс свойств.

(subclass Quantity AristotelianProperty)
;; Комментарий: Quantity — количество.
;; В SUMO уже есть Quantity как абстрактная величина.

(subclass Quality AristotelianProperty)
;; Комментарий: Quality — качество.
;; В SUMO качество обычно выражается через Attribute.

(subclass Position Quality)
;; Комментарий: Position — положение/поза.
;; Это подвид качества.

(subclass State Quality)
;; Комментарий: State — состояние или обладание.
;; Примеры: Armed, Operational, Equipped.

(subclass AristotelianRelation AristotelianCategory)
;; Комментарий: AristotelianRelation — категория отношения.
;; В SUMO Relation — это класс упорядоченных кортежей,
;; а конкретная связь выражается предикатом.

(subclass AristotelianProcess AristotelianCategory)
;; Комментарий: AristotelianProcess — реконструированная
;; обобщающая категория процесса.
;; Сам Аристотель ее не вводил; это наша надстройка.

(subclass Action AristotelianProcess)
;; Комментарий: Action — действие;
;; процесс, производимый агентом.

(subclass Affection AristotelianProcess)
;; Комментарий: Affection — претерпевание;
;; процесс, принимаемый пациентом.

(subclass Cutting Action)
;; Комментарий: Cutting — тип действия «резание».
;; Это TBox, а не конкретное событие.

(subclass BeingCut Affection)
;; Комментарий: BeingCut — тип претерпевания «быть разрезаемым».
;; Это TBox, а не конкретное событие.
```

## ABox в стиле SUMO

```lisp
;; ============================================================
;; ABOX — МИР ВЕЩЕЙ
;; Здесь конкретные предметы, события и факты.
;; ============================================================

(instance Socrates Human)
;; Комментарий: Сократ — экземпляр вида Human.
;; Human — вторичная субстанция / универсальный тип.

(instance Socrates Object)
;; Комментарий: Сократ — конкретный физический объект.
;; В SUMO это первичная субстанция.

(instance Engine7 Engine)
;; Комментарий: Engine7 — конкретный двигатель;
;; Engine — вторичная субстанция / тип.

(instance Cutting42 Cutting)
;; Комментарий: Cutting42 — конкретный экземпляр действия «резание».
;; Cutting — тип из TBox; Cutting42 — событие из ABox.

(instance BeingCut42 BeingCut)
;; Комментарий: BeingCut42 — конкретный экземпляр претерпевания.

(instance Wood9 Wood)
;; Комментарий: Wood9 — конкретный физический объект.

(agent Cutting42 Socrates)
;; Комментарий: ABox-факт: Сократ является агентом действия Cutting42.

(patient BeingCut42 Wood9)
;; Комментарий: ABox-факт: дерево является пациентом претерпевания.

(causes Cutting42 BeingCut42)
;; Комментарий: ABox-факт: действие резания причиняет претерпевание.

(attribute Socrates White)
;; Комментарий: ABox-факт: Сократ обладает качеством «белый».
;; White — Attribute, а не отдельная вещь.

(measure Engine7 (MeasureFn 2 Meter))
;; Комментарий: ABox-факт: длина двигателя равна 2 метрам.
;; MeasureFn связывает числовое значение и единицу измерения.

(located Socrates Athens)
;; Комментарий: ABox-факт: Сократ находится в Афинах.

(when Cutting42 (HourFn 17 Day))
;; Комментарий: ABox-факт: резание происходит в 17 часов.
;; Временная привязка конкретного процесса.
```

В SUMO роль `patient` обозначает участника процесса, который может быть перемещен, изменен или иным образом затронут; `agent` — инициатор процесса.  Поэтому пара `agent`/`patient` — естественная формализация аристотелевской пары «действие — претерпевание». [ise.me.tut.ac](https://ise.me.tut.ac.jp/members-e/rbp/pubs/ontological-approach-to-represent-hazop.pdf)

## RBox в стиле SUMO

В KIF нет отдельного синтаксического блока RBox, как в дескрипционных логиках. Но роль RBox выполняют **общие аксиомы о предикатах**: иерархии предикатов, обратность, транзитивность, домены и диапазоны.

```lisp
;; ============================================================
;; RBOX — ОБЩИЕ ПРАВИЛА О ПРЕДИКАТАХ
;; Здесь нет Сократа, дерева или конкретного резания.
;; ============================================================

(subrelation agent initiator)
;; Комментарий: agent — подроль initiator.
;; Всякий агент процесса является его инициатором.

(subrelation patient experiencer)
;; Комментарий: patient — подроль experiencer.
;; Всякий пациент претерпевает воздействие.

(subrelation located spatiallyRelated)
;; Комментарий: located — подроль spatiallyRelated.
;; Локализация — вид пространственного отношения.

(subrelation causes causesOrEnables)
;; Комментарий: causes — подроль более общего каузального предиката.

(=> (and (instance ?ACTION Cutting)
         (agent ?ACTION ?AGENT)
         (patient ?ACTION ?PATIENT))
    (exists (?AFFECTION)
      (and (instance ?AFFECTION BeingCut)
           (causes ?ACTION ?AFFECTION)
           (patient ?AFFECTION ?PATIENT))))
;; Комментарий: правило RBox-уровня:
;; если есть действие резания с агентом и пациентом,
;; то существует претерпевание «быть разрезаемым»,
;; которое вызвано этим действием и имеет того же пациента.

(=> (and (agent ?PROCESS ?AGENT)
         (instance ?AGENT CognitiveAgent))
    (instance ?PROCESS IntentionalProcess))
;; Комментарий: если агентом процесса является когнитивный агент,
;; то процесс следует рассматривать как намеренный.
;; Это соответствует SUMO-определению IntentionalProcess. [50]
```

## Исправленная структура с переводами

```text
SUMO: Entity (Сущность)
│
├── Physical (Физическое)
│   │
│   ├── Object (Объект / Предмет)
│   │   │
│   │   ├── Human (Человек)
│   │   │   └── Socrates (Сократ) — экземпляр ABox
│   │   │
│   │   ├── Engine (Двигатель)
│   │   │   └── Engine7 (Двигатель №7) — экземпляр ABox
│   │   │
│   │   └── Wood (Дерево / древесина)
│   │       └── Wood9 (Дерево №9) — экземпляр ABox
│   │
│   └── Process (Процесс)
│       │
│       ├── IntentionalProcess (Намеренный процесс)
│       │   ├── Action (Действие)
│       │   │   ├── Cutting (Резание) — тип TBox
│       │   │   │   └── Cutting42 (Резание №42) — экземпляр ABox
│       │   │   └── Treating (Лечение) — тип TBox
│       │   │
│       │   └── Affection (Претерпевание)
│       │       ├── BeingCut (Быть разрезаемым) — тип TBox
│       │       │   └── BeingCut42 (Быть разрезаемым №42) — экземпляр ABox
│       │       └── BeingTreated (Быть лечимым) — тип TBox
│       │
│       └── Process (обычный не-намеренный процесс)
│           ├── Heating (Нагревание)
│           └── Cooling (Охлаждение)
│
└── Abstract (Абстрактное / Мир идей)
    │
    ├── Quantity (Количество)
    │   ├── Number (Число)
    │   └── PhysicalQuantity (Физическая величина)
    │       ├── LengthQuantity (Длина)
    │       ├── MassQuantity (Масса)
    │       └── TimeMeasure (Временная мера)
    │
    ├── Attribute (Атрибут / Качество)
    │   ├── ColorAttribute (Цвет)
    │   ├── ShapeAttribute (Форма)
    │   ├── PositionAttribute (Положение)
    │   └── StateAttribute (Состояние / обладание)
    │
    ├── Relation (Отношение)
    │   ├── BinaryRelation (Бинарное отношение)
    │   ├── PartWholeRelation (Отношение часть—целое)
    │   ├── CausalRelation (Причинное отношение)
    │   ├── SpatialRelation (Пространственное отношение)
    │   └── TemporalRelation (Временное отношение)
    │
    └── SetOrClass (Множество или класс)
        └── SecondarySubstance (Вторичная субстанция)
            ├── Human (Человек)
            ├── Animal (Животное)
            └── Engine (Двигатель)
```

## Главное уточнение

В SUMO **`Cutting` — это класс в TBox**, а **`Cutting42` — экземпляр этого класса в ABox**. Поэтому включать `Cutting`, `Treating`, `BeingCut` в дерево TBox корректно; ошибкой было бы помещать туда `Cutting42`. [aclanthology](https://aclanthology.org/W17-6608.pdf)

Аристотелевская пара `Action`/`Affection` в SUMO выражается не двумя параллельными классами событий, а **одним процессом с разными ролями участников**: `agent` для деятеля и `patient` для претерпевающего.  Это более экономная и практически удобная модель: одно конкретное событие `Cutting42` может одновременно быть действием для Сократа и претерпеванием для дерева. [ise.me.tut.ac](https://ise.me.tut.ac.jp/members-e/rbp/pubs/ontological-approach-to-represent-hazop.pdf)

## 2

Да. Ниже термины Аристотеля и термины конкретных онтологий разделены явно. Важно: **категории Аристотеля — это не синонимы классов SUMO, BFO, DOLCE или OpenCyc**; это реконструкция его десяти категорий в их терминах. В частности, `Cutting` — всегда **тип процесса** (TBox), а `Cutting_42` — **конкретный процесс** (ABox).

## Легенда обозначений

| Маркер | Значение |
|---|---|
| **[А]** | Термин Аристотеля |
| **[O]** | Термин конкретной онтологии |
| **(T)** | Тип / универсалия / Мир идей / TBox |
| **(A)** | Экземпляр / конкретная вещь или событие / Мир вещей / ABox |
| **(R)** | Правило о связи / предикате / RBox |

## SUMO

SUMO делит `Entity` на `Physical` и `Abstract`; `Physical` — на непересекающиеся `Object` и `Process`; среди абстрактных сущностей есть `Quantity`, `Attribute`, `Relation`, `SetOrClass` и `Proposition`. 

```text
SUMO: Entity (Сущность) [O] (T)
│
├── Physical (Физическая сущность) [O] (T)
│   │
│   ├── Object (Объект / Предмет) [O] (T)
│   │   │   ← соответствует [А] Primary substance (Первичная субстанция)
│   │   │
│   │   ├── Human (Человек) [O] (T)
│   │   │   └── Socrates (Сократ) [O] (A)
│   │   │       ← экземпляр первичной субстанции [А]
│   │   │
│   │   ├── Engine (Двигатель) [O] (T)
│   │   │   └── Engine7 (Двигатель №7) [O] (A)
│   │   │
│   │   └── Wood (Древесина / дерево) [O] (T)
│   │       └── Wood9 (Дерево №9) [O] (A)
│   │
│   └── Process (Процесс) [O] (T)
│       │   ← реконструкция [А] Action + Affection
│       │   (Действие + Претерпевание)
│       │
│       ├── IntentionalProcess (Намеренный процесс) [O] (T)
│       │   │   ← процесс, запущенный когнитивным агентом [O]
│       │   │
│       │   ├── Action (Действие) [А] (T)
│       │   │   ├── Cutting (Резание) [А/O] (T)
│       │   │   │   └── Cutting42 (Резание №42) [O] (A)
│       │   │   └── Treating (Лечение) [А/O] (T)
│       │   │
│       │   └── Affection (Претерпевание) [А] (T)
│       │       ├── BeingCut (Быть разрезаемым) [А/O] (T)
│       │       │   └── BeingCut42 (Быть разрезаемым №42) [O] (A)
│       │       └── BeingTreated (Быть лечимым) [А/O] (T)
│       │
│       └── Process (Не-намеренный процесс) [O] (T)
│           ├── Heating (Нагревание) [O] (T)
│           └── Cooling (Охлаждение) [O] (T)
│
└── Abstract (Абстрактное / Мир идей) [O] (T)
    │
    ├── Quantity (Количество) [А/O] (T)
    │   ├── Number (Число) [O] (T)
    │   └── PhysicalQuantity (Физическая величина) [O] (T)
    │       ├── LengthQuantity (Длина) [O] (T)
    │       ├── MassQuantity (Масса) [O] (T)
    │       └── TimeMeasure (Временная мера) [O] (T)
    │           ← частично соответствует [А] Time (Время)
    │
    ├── Attribute (Атрибут / Качество) [O] (T)
    │   │   ← соответствует [А] Quality (Качество),
    │   │     Position (Положение), State (Состояние)
    │   │
    │   ├── ColorAttribute (Цвет) [O] (T)
    │   ├── ShapeAttribute (Форма) [O] (T)
    │   ├── PositionAttribute (Положение) [А/O] (T)
    │   └── StateAttribute (Состояние / обладание) [А/O] (T)
    │
    ├── Relation (Отношение) [А/O] (T)
    │   ├── BinaryRelation (Бинарное отношение) [O] (T)
    │   ├── PartWholeRelation (Отношение часть—целое) [O] (T)
    │   ├── CausalRelation (Причинное отношение) [O] (T)
    │   ├── SpatialRelation (Пространственное отношение) [O] (T)
    │   └── TemporalRelation (Временное отношение) [O] (T)
    │
    └── SetOrClass (Множество или класс) [O] (T)
        └── SecondarySubstance (Вторичная субстанция) [А] (T)
            ├── Human (Человек) [А/O] (T)
            ├── Animal (Животное) [А/O] (T)
            └── Engine (Двигатель) [А/O] (T)
```

Роли `agent` (агент) и `patient` (пациент) в SUMO связывают процесс с его участниками; `patient` — участник, который перемещается, изменяется или иначе затрагивается процессом.  Поэтому аристотелевские `Action` и `Affection` в SUMO удобнее выражать не двумя разными событиями, а одним процессом с разными ролями.

## BFO

BFO начинает с `entity` и делит его на `continuant` и `occurrent`. `Continuant` сохраняет идентичность во времени и не имеет временных частей; `occurrent` имеет временные части. `Process` в BFO — это `occurrent`, зависящий от материальной сущности. [arxiv](https://arxiv.org/html/2507.17171)

```text
BFO: entity (Сущность) [O] (T)
│
├── continuant (Континуант / продолжающаяся сущность) [O] (T)
│   │   ← близко к [А] Substance (Сущность),
│   │     но шире: включает также зависимые сущности
│   │
│   ├── independent continuant
│   │   (Независимый континуант) [O] (T)
│   │   │   ← наиболее близко к [А] Primary substance
│   │   │     (Первичная субстанция)
│   │   │
│   │   ├── material entity (Материальная сущность) [O] (T)
│   │   │   ├── object (Объект) [O] (T)
│   │   │   │   ├── Human (Человек) [А/O] (T)
│   │   │   │   │   └── Socrates (Сократ) [А/O] (A)
│   │   │   │   └── Engine (Двигатель) [А/O] (T)
│   │   │   │       └── Engine7 (Двигатель №7) [O] (A)
│   │   │   └── fiat object part (Условная часть объекта) [O] (T)
│   │   │
│   │   └── site (Место / участок) [O] (T)
│   │       ← частично соответствует [А] Place (Место)
│   │
│   ├── specifically dependent continuant
│   │   (Специфически зависимый континуант) [O] (T)
│   │   │   ← наиболее близко к конкретному качеству [А]
│   │   │
│   │   ├── quality (Качество) [А/O] (T)
│   │   │   ├── color (Цвет) [O] (T)
│   │   │   ├── shape (Форма) [O] (T)
│   │   │   └── position (Положение) [А/O] (T)
│   │   │
│   │   └── realizable entity (Реализуемая сущность) [O] (T)
│   │       ├── disposition (Диспозиция) [O] (T)
│   │       ├── function (Функция) [O] (T)
│   │       └── role (Роль) [O] (T)
│   │           ← дополнение к Аристотелю:
│   │             «пациент», «агент», «запасной узел»
│   │
│   └── generically dependent continuant
│       (Общезависимый континуант) [O] (T)
│       └── information content entity
│           (Информационная сущность) [O] (T)
│           ← дополнение к Аристотелю:
│             документ, запись, модель, сигнал
│
└── occurrent (Оккуррент / происходящее) [O] (T)
    │   ← соответствует [А] Action + Affection
    │     (Действие + Претерпевание)
    │
    ├── process (Процесс) [O] (T)
    │   ├── Action (Действие) [А] (T)
    │   │   ├── Cutting (Резание) [А/O] (T)
    │   │   │   └── Cutting42 (Резание №42) [O] (A)
    │   │   └── Treating (Лечение) [А/O] (T)
    │   │
    │   └── Affection (Претерпевание) [А] (T)
    │       ├── BeingCut (Быть разрезаемым) [А/O] (T)
    │       │   └── BeingCut42 (Быть разрезаемым №42) [O] (A)
    │       └── BeingTreated (Быть лечимым) [А/O] (T)
    │
    ├── process boundary (Граница процесса) [O] (T)
    │   ← начало или завершение процесса [O]
    │
    └── temporal region (Временная область) [O] (T)
        ← соответствует [А] Time (Время)
```

В BFO `continuant` «продолжается» во времени и сохраняет идентичность, а `occurrent` развертывается во времени и имеет временные части.  Поэтому первичная субстанция Аристотеля лучше всего отображается на `independent continuant`, а не на весь класс `continuant`. [arxiv](http://arxiv.org/pdf/2405.00183.pdf)

## DOLCE

DOLCE выделяет четыре верхних класса: `Endurant`, `Perdurant`, `Quality` и `Abstract`. `Endurant` существует во времени и в каждый момент присутствует целиком; `Perdurant` происходит во времени и в каждый момент присутствует лишь частично. [academic.oup](https://academic.oup.com/ijl/article/doi/10.1093/ijl/ecag008/8654414)

```text
DOLCE: Entity (Сущность) [O] (T)
│
├── Endurant (Эндурант / длящаяся сущность) [O] (T)
│   │   ← близко к [А] Substance (Сущность)
│   │
│   ├── Physical Endurant (Физический эндурант) [O] (T)
│   │   │   ← близко к [А] Primary substance
│   │   │     (Первичная субстанция)
│   │   │
│   │   ├── Physical Object (Физический объект) [O] (T)
│   │   │   ├── Human (Человек) [А/O] (T)
│   │   │   │   └── Socrates (Сократ) [А/O] (A)
│   │   │   └── Engine (Двигатель) [А/O] (T)
│   │   │       └── Engine7 (Двигатель №7) [O] (A)
│   │   │
│   │   └── Amount of Matter (Количество материи) [O] (T)
│   │
│   ├── Non-Physical Endurant (Нефизический эндурант) [O] (T)
│   │   ├── Social Object (Социальный объект) [O] (T)
│   │   │   └── Organization (Организация) [O] (T)
│   │   └── Mental Object (Ментальный объект) [O] (T)
│   │
│   └── Feature (Признак / особенность объекта) [O] (T)
│
├── Perdurant (Пердурант / длящееся событие) [O] (T)
│   │   ← соответствует [А] Action + Affection
│   │     (Действие + Претерпевание)
│   │
│   ├── Event (Событие) [O] (T)
│   │   ├── Action (Действие) [А] (T)
│   │   │   ├── Cutting (Резание) [А/O] (T)
│   │   │   │   └── Cutting42 (Резание №42) [O] (A)
│   │   │   └── Treating (Лечение) [А/O] (T)
│   │   │
│   │   └── Affection (Претерпевание) [А] (T)
│   │       ├── BeingCut (Быть разрезаемым) [А/O] (T)
│   │       │   └── BeingCut42 (Быть разрезаемым №42) [O] (A)
│   │       └── BeingTreated (Быть лечимым) [А/O] (T)
│   │
│   ├── Stative (Статив / состояние) [O] (T)
│   │   ← дополнение к Аристотелю:
│   │     устойчивое состояние без выраженной динамики
│   │
│   └── Temporal Location (Временная локализация) [O] (T)
│       ← соответствует [А] Time (Время)
│
├── Quality (Качество) [А/O] (T)
│   │   ← прямое соответствие [А] Quality (Качество)
│   │
│   ├── Physical Quality (Физическое качество) [O] (T)
│   │   ├── Color (Цвет) [O] (T)
│   │   └── Shape (Форма) [O] (T)
│   │
│   ├── Temporal Quality (Временное качество) [O] (T)
│   └── Abstract Quality (Абстрактное качество) [O] (T)
│
└── Abstract (Абстрактное) [O] (T)
    ├── Region (Область) [O] (T)
    │   ├── Physical Region (Физическая область) [O] (T)
    │   │   ← соответствует [А] Place (Место)
    │   └── Temporal Region (Временная область) [O] (T)
    │       ← соответствует [А] Time (Время)
    │
    ├── Amount (Количество) [O] (T)
    │   ← соответствует [А] Quantity (Количество)
    │
    └── Proposition (Предложение / пропозиция) [O] (T)
        ← дополнение к Аристотелю:
          утверждение, норма, правило, требование
```

Особенность DOLCE: качество — не просто значение атрибута, а **сущность, присущая носителю**; например, конкретная белизна Сократа — это quality, зависящая от Сократа.  Это близко к аристотелевскому «качество присутствует в вещи», но в DOLCE качество является отдельной сущностью, а не предикатом. [academic.oup](https://academic.oup.com/ijl/article/doi/10.1093/ijl/ecag008/8654414)

## OpenCyc

OpenCyc строится вокруг `Thing`, которое делится на `Individual` и `Collection`; события и процессы относятся к `EventType` / `Event`, а свойства и отношения — к `Predicate` и `Attribute`. Точная терминология версий Cyc различается, поэтому ниже — наиболее устойчивое соответствие.

```text
OpenCyc: Thing (Вещь / нечто) [O] (T)
│
├── Individual (Индивид) [O] (T/A)
│   │   ← соответствует [А] Primary substance
│   │     (Первичная субстанция)
│   │
│   ├── Socrates (Сократ) [А/O] (A)
│   ├── Engine7 (Двигатель №7) [O] (A)
│   └── Cutting42 (Резание №42) [O] (A)
│       ← конкретный экземпляр события/процесса
│
├── Collection (Коллекция / класс) [O] (T)
│   │   ← соответствует [А] Secondary substance
│   │     (Вторичная субстанция)
│   │
│   ├── Human (Человек) [А/O] (T)
│   ├── Animal (Животное) [А/O] (T)
│   ├── Engine (Двигатель) [А/O] (T)
│   └── EventType (Тип события) [O] (T)
│       ├── Action (Действие) [А] (T)
│       │   ├── Cutting (Резание) [А/O] (T)
│       │   └── Treating (Лечение) [А/O] (T)
│       │
│       └── Affection (Претерпевание) [А] (T)
│           ├── BeingCut (Быть разрезаемым) [А/O] (T)
│           └── BeingTreated (Быть лечимым) [А/O] (T)
│
├── Predicate (Предикат) [O] (T/R)
│   │   ← наиболее близко к [А] Relation (Отношение)
│   │
│   ├── BinaryPredicate (Бинарный предикат) [O] (T/R)
│   │   ├── partOf (Часть чего-либо) [O] (R)
│   │   ├── causes (Причиняет) [O] (R)
│   │   ├── locatedIn (Находится в) [O] (R)
│   │   └── occursDuring (Происходит в течение) [O] (R)
│   │
│   └── Attribute (Атрибут) [O] (T)
│       ├── Color (Цвет) [O] (T)
│       ├── Shape (Форма) [O] (T)
│       ├── Position (Положение) [А/O] (T)
│       └── State (Состояние) [А/O] (T)
│
└── TemporalThing (Временная сущность) [O] (T)
    ├── TimeInterval (Временной интервал) [O] (T)
    │   ← соответствует [А] Time (Время)
    └── Event (Событие) [O] (T)
        ← соответствует [А] Action + Affection
```

В OpenCyc различие `Individual`/`Collection` хорошо соответствует различению «конкретная вещь — универсалия», но его система ориентирована на логические предикаты и коллекции, а не на аристотелевскую теорию инагерентных качеств.

## Сводное соответствие

| Категория Аристотеля [А] | SUMO [O] | BFO [O] | DOLCE [O] | OpenCyc [O] |
|---|---|---|---|---|
| Primary substance (Первичная субстанция) | `Object` | `independent continuant` / `material entity` | `Physical Endurant` / `Physical Object` | `Individual` |
| Secondary substance (Вторичная субстанция) | `SetOrClass`, подкласс `Object` | класс / `independent continuant`-тип | класс `Endurant` | `Collection` |
| Quantity (Количество) | `Quantity` | `quality` с мерой / `Information Bearing Entity` для значения | `Amount`, `Quality` | `Attribute`, числовые предикаты |
| Quality (Качество) | `Attribute` | `quality` | `Quality` | `Attribute` |
| Relation (Отношение) | `Relation` | отношение как предикат; `specifically dependent continuant` для зависимости | отношение как предикат / `Quality` для зависимости | `Predicate` |
| Place (Место) | `Region`, `located` | `site`, `independent continuant`, пространственная область | `Physical Region` | `locatedIn`, пространственные типы |
| Time (Время) | `TimePosition`, `TimeInterval` | `temporal region` | `Temporal Region` | `TimeInterval`, `TemporalThing` |
| Position (Положение) | `Attribute` | `quality` | `Physical Quality` | `Attribute` |
| State / Having (Состояние / обладание) | `Attribute`, `possesses` | `quality`, `disposition`, `role` | `Stative`, `Quality` | `Attribute`, предикаты владения |
| Action (Действие) | `IntentionalProcess`, роль `agent` | `process`, роль `agent` | `Event`, роль `agent` | `Event`, роль `doneBy` |
| Affection (Претерпевание) | `Process`, роль `patient` | `process`, роль `patient` | `Event`, роль `patient` | `Event`, роль `objectOfConcern` |

## Важное различие

Аристотелевская категория — это **способ сказывания о первичной субстанции**, а не обязательно самостоятельный тип сущности. Поэтому:

- `Quality` у Аристотеля — качество, присутствующее в вещи; в BFO это `quality` как зависимая сущность; в DOLCE — `Quality`; в SUMO — чаще `Attribute`.
- `Relation` у Аристотеля — относительное, определяемое через другое; в современных онтологиях это обычно **предикат или роль**, а не отдельный индивид.
- `Action` и `Affection` у Аристотеля — две стороны изменения; в BFO, DOLCE и SUMO это один `Process`/`Event` с ролями агента и пациента. [arxiv](http://arxiv.org/pdf/2405.00183.pdf)

Поэтому наиболее точная формула такая: **Аристотель классифицирует предикаты о вещи; современные верхнеуровневые онтологии классифицируют сами сущности и типы связей между ними.** Отсюда неизбежны сдвиги: аристотелевское «качество в вещи» становится зависимым качеством BFO или quality DOLCE, а аристотелевское «действие и претерпевание» — ролями агента и пациента одного процесса. [arxiv](http://arxiv.org/pdf/2405.00183.pdf)

## 2

Ниже каждая категория Аристотеля показана как **предикат, примененный к конкретной вещи из Мира вещей**. В RDF/Turtle утверждение — это тройка «субъект — предикат — объект»: например, `ex:Socrates ex:hasColor ex:White .` означает «Сократ имеет цвет белый». [w3](https://www.w3.org/TR/2014/REC-turtle-20140225/)

## Соглашения

```turtle
@prefix rdf:   <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs:  <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd:   <http://www.w3.org/2001/XMLSchema#> .
@prefix aristo: <http://example.org/aristotle#> .
@prefix sumo:  <http://example.org/sumo#> .
@prefix bfo:   <http://example.org/bfo#> .
@prefix dolce: <http://example.org/dolce#> .
@prefix cyc:   <http://example.org/opencyc#> .
@prefix ex:    <http://example.org/world#> .
```

- `ex:Socrates` — конкретная вещь из Мира вещей, то есть **первичная субстанция** [А] / `Object` [SUMO] / `independent continuant` [BFO] / `Physical Endurant` [DOLCE] / `Individual` [OpenCyc].
- `aristo:Human` — универсалия из Мира идей, то есть **вторая субстанция** [А] / класс [SUMO, BFO, DOLCE] / `Collection` [OpenCyc].
- Предикаты вроде `ex:hasColor`, `ex:locatedIn`, `ex:performs` — это категории-предикаты, применяемые к конкретным вещам.

## Сводное соответствие с примерами

| Категория Аристотеля [А] | Предикат к конкретной вещи | Пример словами | Основная онтологическая привязка |
|---|---|---|---|
| Primary substance (Первичная субстанция) | `rdf:type` | «Сократ — человек» | `Object` [SUMO], `independent continuant` [BFO], `Physical Endurant` [DOLCE], `Individual` [OpenCyc] |
| Secondary substance (Вторичная субстанция) | `rdf:type` | «Сократ принадлежит виду Человек» | Класс `Human` [SUMO/BFO/DOLCE], `Collection` [OpenCyc] |
| Quantity (Количество) | `ex:hasLength`, `ex:hasMass` | «Двигатель №7 имеет длину 2 м» | `Quantity` [SUMO], `quality` с мерой [BFO], `Amount`/`Quality` [DOLCE] |
| Quality (Качество) | `ex:hasColor`, `ex:hasShape` | «Яблоко №1 красное» | `Attribute` [SUMO], `quality` [BFO], `Quality` [DOLCE], `Attribute` [OpenCyc] |
| Relation (Отношение) | `ex:partOf`, `ex:isParentOf` | «Поршень №3 — часть двигателя №7» | `Relation` [SUMO], предикат/роль [BFO], `Predicate` [OpenCyc] |
| Place (Место) | `ex:locatedIn` | «Сократ находится в Афинах» | `Region` + `located` [SUMO], `site` [BFO], `Physical Region` [DOLCE] |
| Time (Время) | `ex:occurredAt`, `ex:occurredDuring` | «Резание №42 произошло 14 октября 2026 года» | `TimePosition` [SUMO], `temporal region` [BFO], `Temporal Region` [DOLCE] |
| Position (Положение) | `ex:hasPosture` | «Сократ сидит» | `Attribute` [SUMO], `quality` [BFO], `Physical Quality` [DOLCE] |
| State / Having (Состояние / обладание) | `ex:hasState`, `ex:possesses` | «Солдат №1 вооружен» | `Attribute`/`possesses` [SUMO], `disposition`/`role` [BFO], `Stative` [DOLCE] |
| Action (Действие) | `ex:performs` | «Сократ выполняет резание №42» | `IntentionalProcess` + `agent` [SUMO], `Process` + `agent` [BFO], `Event` + `agent` [DOLCE] |
| Affection (Претерпевание) | `ex:undergoes` | «Дерево №9 претерпевает разрезание №42» | `Process` + `patient` [SUMO], `Process` + `patient` [BFO], `Event` + `patient` [DOLCE] |

## Turtle: все десять категорий

```turtle
# ============================================================
# ABOX: конкретные факты о вещах из Мира вещей.
# Каждый триплет: субъект — предикат — объект.
# ============================================================

# ------------------------------------------------------------
# 1. Primary substance / Первичная субстанция
# Аристотель: конкретная индивидуальная вещь.
# SUMO: Object; BFO: independent continuant;
# DOLCE: Physical Endurant; OpenCyc: Individual.
# ------------------------------------------------------------

ex:Socrates rdf:type ex:Human .
# Словами: «Сократ является человеком».
# Сократ — первичная субстанция; Human — вторичная субстанция.

ex:Engine7 rdf:type ex:Engine .
# Словами: «Двигатель №7 является двигателем».

ex:Wood9 rdf:type ex:Wood .
# Словами: «Дерево №9 является древесиной / деревом».

# ------------------------------------------------------------
# 2. Secondary substance / Вторичная субстанция
# Аристотель: вид или род, к которому принадлежит вещь.
# Здесь она выражена через rdf:type.
# ------------------------------------------------------------

ex:Socrates rdf:type aristo:Human ;
            rdf:type aristo:Animal .
# Словами: «Сократ — человек и животное».
# Human — вид; Animal — род.

ex:Engine7 rdf:type aristo:Engine ;
           rdf:type aristo:Machine .
# Словами: «Двигатель №7 — двигатель и машина».
# Engine — вид; Machine — род.

# ------------------------------------------------------------
# 3. Quantity / Количество
# Аристотель: «сколько?».
# ------------------------------------------------------------

ex:Engine7 ex:hasLength [
    rdf:type sumo:LengthQuantity ;
    ex:hasValue "2.0"^^xsd:decimal ;
    ex:hasUnit ex:Meter
] .
# Словами: «Двигатель №7 имеет длину 2 метра».

ex:Apple1 ex:hasMass [
    rdf:type sumo:MassQuantity ;
    ex:hasValue "0.15"^^xsd:decimal ;
    ex:hasUnit ex:Kilogram
] .
# Словами: «Яблоко №1 имеет массу 0,15 килограмма».

# ------------------------------------------------------------
# 4. Quality / Качество
# Аристотель: «каков предмет?».
# ------------------------------------------------------------

ex:Apple1 ex:hasColor ex:Red .
# Словами: «Яблоко №1 имеет красный цвет».

ex:Socrates ex:hasQuality ex:Wisdom .
# Словами: «Сократ обладает качеством мудрости».

ex:Triangle1 ex:hasShape ex:Triangular .
# Словами: «Фигура №1 имеет треугольную форму».

# ------------------------------------------------------------
# 5. Relation / Отношение
# Аристотель: «в каком отношении к другому?».
# ------------------------------------------------------------

ex:Piston3 ex:partOf ex:Engine7 .
# Словами: «Поршень №3 является частью двигателя №7».

ex:Socrates ex:isParentOf ex:Plato .
# Словами: «Сократ является родителем Платона».
# Историческая условность примера: здесь важна форма отношения,
# а не биографическая точность.

ex:Engine7 ex:isHeavierThan ex:Apple1 .
# Словами: «Двигатель №7 тяжелее яблока №1».

# ------------------------------------------------------------
# 6. Place / Место
# Аристотель: «где?».
# ------------------------------------------------------------

ex:Socrates ex:locatedIn ex:Athens .
# Словами: «Сократ находится в Афинах».

ex:Engine7 ex:locatedIn ex:Workshop12 .
# Словами: «Двигатель №7 находится в цехе №12».

# ------------------------------------------------------------
# 7. Time / Время
# Аристотель: «когда?».
# ------------------------------------------------------------

ex:Cutting42 ex:occurredAt "2026-10-14T17:00:00"^^xsd:dateTime .
# Словами: «Резание №42 произошло 14 октября 2026 года в 17:00».

ex:SocratesBirth ex:occurredDuring ex:ClassicalAntiquity .
# Словами: «Рождение Сократа произошло в античную эпоху».

# ------------------------------------------------------------
# 8. Position / Положение
# Аристотель: «в какой позе / конфигурации?».
# ------------------------------------------------------------

ex:Socrates ex:hasPosture ex:Sitting .
# Словами: «Сократ сидит».

ex:Engine7 ex:hasOrientation ex:Horizontal .
# Словами: «Двигатель №7 расположен горизонтально».

# ------------------------------------------------------------
# 9. State / Having / Состояние или обладание
# Аристотель: «чем обладает? в каком состоянии находится?».
# ------------------------------------------------------------

ex:Soldier1 ex:hasState ex:Armed .
# Словами: «Солдат №1 вооружен».

ex:Socrates ex:possesses ex:Sandal1 .
# Словами: «Сократ обладает сандалией №1».

ex:Engine7 ex:hasState ex:Operational .
# Словами: «Двигатель №7 находится в работоспособном состоянии».

# ------------------------------------------------------------
# 10. Action / Действие
# Аристотель: «что делает?».
# ------------------------------------------------------------

ex:Socrates ex:performs ex:Cutting42 .
# Словами: «Сократ выполняет действие „резание №42“».

ex:Doctor1 ex:performs ex:Treatment7 .
# Словами: «Врач №1 выполняет лечение №7».

# ------------------------------------------------------------
# 11. Affection / Претерпевание
# Аристотель: «что претерпевает?».
# ------------------------------------------------------------

ex:Wood9 ex:undergoes ex:BeingCut42 .
# Словами: «Дерево №9 претерпевает „быть разрезаемым №42“».

ex:Patient1 ex:undergoes ex:Treatment7 .
# Словами: «Пациент №1 подвергается лечению №7».

# ------------------------------------------------------------
# Связь действия и претерпевания
# Одно изменение рассматривается с двух сторон:
# со стороны агента — Action,
# со стороны пациента — Affection.
# ------------------------------------------------------------

ex:Cutting42 ex:causes ex:BeingCut42 .
# Словами: «Резание №42 причиняет претерпевание „быть разрезаемым №42“».

ex:Cutting42 ex:hasAgent ex:Socrates ;
             ex:hasPatient ex:Wood9 .
# Словами: «В резании №42 Сократ является агентом,
# а дерево №9 — пациентом».
```

## Как читать пары Action / Affection

Аристотель противопоставляет «рассекать» и «быть рассекаемым», «прижигать» и «быть прижигаемым»: первое — действие, второе — претерпевание.  В Turtle это удобно выразить через один процесс и две роли:

```turtle
# Один конкретный процесс — резание №42.
ex:Cutting42 rdf:type ex:Cutting .

# Аристотелевская категория Action:
# Сократ — агент действия.
ex:Cutting42 ex:hasAgent ex:Socrates .
ex:Socrates ex:performs ex:Cutting42 .

# Аристотелевская категория Affection:
# дерево — пациент претерпевания.
ex:Cutting42 ex:hasPatient ex:Wood9 .
ex:Wood9 ex:undergoes ex:Cutting42 .

# Причинная связь между действием и его результатом.
ex:Cutting42 ex:causes ex:WoodDamage1 .
# Словами: «Резание №42 причиняет повреждение дерева №1».
```

Здесь `Cutting42` — один конкретный процесс из ABox. Для Сократа он выступает как **Action** [А], а для дерева — как **Affection** [А]. Это соответствует SUMO-ролям `agent` и `patient`: агент инициирует процесс, пациент подвергается его воздействию. 

## Что здесь TBox, а что ABox

```turtle
# ============================================================
# TBOX: универсалии и типы. Мир идей.
# ============================================================

aristo:Human rdf:type rdfs:Class .
# Комментарий: Human — универсальный вид «Человек».
# Это вторичная субстанция [А].

aristo:Animal rdf:type rdfs:Class .
# Комментарий: Animal — универсальный род «Животное».

aristo:Human rdfs:subClassOf aristo:Animal .
# Комментарий: вид «Человек» включается в род «Животное».

ex:Cutting rdf:type rdfs:Class .
# Комментарий: Cutting — тип действия «Резание».
# Это не конкретное событие, а форма действия.

ex:BeingCut rdf:type rdfs:Class .
# Комментарий: BeingCut — тип претерпевания «Быть разрезаемым».

ex:Cutting rdfs:subClassOf aristo:Action .
# Комментарий: «Резание» — подкласс действия.

ex:BeingCut rdfs:subClassOf aristo:Affection .
# Комментарий: «Быть разрезаемым» — подкласс претерпевания.

# ============================================================
# ABOX: конкретные вещи и события. Мир вещей.
# ============================================================

ex:Socrates rdf:type aristo:Human .
# Комментарий: Сократ — конкретный экземпляр вида «Человек».

ex:Cutting42 rdf:type ex:Cutting .
# Комментарий: Резание №42 — конкретный экземпляр типа «Резание».

ex:BeingCut42 rdf:type ex:BeingCut .
# Комментарий: «Быть разрезаемым №42» — конкретный экземпляр
# типа претерпевания.
```

Таким образом, в таблице соответствия **категория Аристотеля — это тип предиката**, а конкретное утверждение вроде `ex:Socrates ex:hasColor ex:Red .` — его применение к первичной субстанции в ABox. Turtle-триплет формально состоит из субъекта, предиката и объекта, а префиксы сокращают полные IRI. [w3](https://www.w3.org/TR/2014/REC-turtle-20140225/)
