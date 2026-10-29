## 1
(instance Alice Human)

Да. Запись

```lisp
(instance Alice Human)
```

написана на **SUO-KIF** — диалекте KIF, синтаксис которого основан на Lisp-овых **S-выражениях** и префиксной нотации. Такая конструкция называется **атомарной формулой** (atomic formula) или, в терминах логики предикатов, **предикатом с двумя аргументами**: `instance(Alice, Human)`. [frontiersin](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1820380/pdf)

## Формат записи

```lisp
(instance Alice Human)
```

Структура:

```text
( предикат  аргумент1  аргумент2 )
```

| Позиция | Элемент | Роль |
|---|---|---|
| 1 | `instance` | Предикат / отношение |
| 2 | `Alice` | Первый аргумент: индивид |
| 3 | `Human` | Второй аргумент: класс |

В инфиксной логической записи это было бы:

```text
Alice instance Human
```

или, ближе к математической традиции:

```text
instance(Alice, Human)
```

Но SUO-KIF использует **префиксную запись**: имя отношения ставится первым, затем перечисляются аргументы. Скобки задают границы формулы, а пробелы разделяют элементы. [frontiersin](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1820380/pdf)

## Почему это похоже на Lisp

Это S-выражение (symbolic expression):

```lisp
(instance Alice Human)
```

Его можно представить как дерево:

```text
      instance
      /      \
   Alice    Human
```

В Lisp-подобной нотации первый элемент списка — обычно оператор, функция или предикат; остальные — его аргументы. SUO-KIF заимствует этот синтаксис, но не является полноценным языком программирования Lisp: это язык представления знаний и логических формул. [frontiersin](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1820380/pdf)

Примеры того же формата:

```lisp
(subclass Human Hominid)
(attribute AliceCar Red)
(age Alice (MeasureFn 16 YearDuration))
(names "Алиса" Alice)
```

В последнем примере третий аргумент сам является вложенным S-выражением:

```lisp
(MeasureFn 16 YearDuration)
```

## Аргументы `instance`

В SUMO `instance` — бинарное отношение: у него два аргумента.

```lisp
(instance ?ENTITY ?CLASS)
```

| Аргумент | Что должен быть | Пример |
|---|---|---|
| Первый | Индивид / сущность | `Alice`, `AliceCar`, `Red`, `part` |
| Второй | Класс | `Human`, `Automobile`, `ColorAttribute`, `BinaryRelation` |

Типовая схема:

```lisp
(instance Alice Human)
(instance AliceCar Automobile)
(instance Red ColorAttribute)
(instance part BinaryRelation)
(instance Human Class)
```

### Что может быть первым аргументом

Первым аргументом может быть **любая сущность `Entity`**, а не только физический объект:

```lisp
(instance Alice Human)              ; физический индивид
(instance Red ColorAttribute)       ; абстрактный атрибут
(instance part BinaryRelation)      ; отношение
(instance Human Class)              ; класс
```

То есть `instance` связывает сущность с классом, к которому она относится. В SUMO `Entity` — корневой класс индивидов, а `instance` связывает сущность с её типом. 

### Что может быть вторым аргументом

Вторым аргументом должен быть **класс**, а не произвольный индивид.

Правильно:

```lisp
(instance Alice Human)
```

Неправильно:

```lisp
(instance Human Alice)
```

Второй аргумент — это тип, к которому принадлежит первый аргумент. В SUMO классы сами являются сущностями, поэтому возможна метаклассификация:

```lisp
(instance Human Class)
```

Здесь:

- `Human` — первый аргумент, то есть сущность;
- `Class` — второй аргумент, то есть класс классов;
- утверждение означает: «`Human` является классом». 

## `instance` и `subclass`

Это разные предикаты, и их нельзя менять местами.

```lisp
(instance Alice Human)
```

означает:

> **Алиса — конкретный экземпляр класса `Human`.**

```lisp
(subclass Human Hominid)
```

означает:

> **Каждый экземпляр `Human` является также экземпляром `Hominid`.**

| Предикат | Связывает | Пример | Чтение |
|---|---|---|---|
| `instance` | Индивид → класс | `(instance Alice Human)` | Алиса — человек |
| `subclass` | Класс → класс | `(subclass Human Hominid)` | Human — подкласс Hominid |

Правило вывода:

```lisp
(=>
  (and
    (subclass ?SUB ?CLASS)
    (instance ?INST ?SUB))
  (instance ?INST ?CLASS))
```

Поэтому из `Alice — Human` и `Human — Hominid` следует `Alice — Hominid`. 

## Близкие предикаты SUMO

| Предикат | Смысл | Отличие от `instance` |
|---|---|---|
| `instance` | Индивид принадлежит классу | Основная связь «сущность — её тип» |
| `subclass` | Класс включён в более общий класс | Связь между двумя классами |
| `directInstance` | Непосредственная принадлежность классу без учёта промежуточных классов | Более строгая, техническая связь |
| `member` | Элемент принадлежит множеству | Для `Collection`/множеств, а не для типизации класса |
| `part` | Часть целого | Физическая или структурная часть, а не тип |
| `attribute` | Объект обладает атрибутом | Свойство/качество, а не классификация |
| `names` | Строка является именем сущности | Обозначение, а не тип |
| `range` | Значение отношения относится к классу | Ограничение на аргумент отношения |

Пример различия `instance` и `member`:

```lisp
(instance Alice Human)          ; Алиса — экземпляр класса Human
(member Alice SomeGroup)        ; Алиса — элемент конкретной группы
```

`Human` — тип; `SomeGroup` — конкретная совокупность людей.

## Аналоги в других онтологиях

| Система | Аналог `instance` | Пример |
|---|---|---|
| **RDF / RDFS** | `rdf:type` | `Alice rdf:type Human` |
| **OWL** | `rdf:type`, `ClassAssertion` | `ClassAssertion(:Human :Alice)` |
| **Description Logic** | `Alice ∈ Human` | Алиса принадлежит концепту `Human` |
| **UML / OWL-инструменты** | `instanceOf` | Объект является экземпляром класса |
| **Пролог** | Факт с предикатом | `human(alice)` |
| **SQL / ER-модель** | Строка таблицы / экземпляр сущности | строка `Alice` в таблице `Human` |

Наиболее точный аналог:

```text
SUMO:    (instance Alice Human)
RDF:     Alice rdf:type Human
OWL:     ClassAssertion(Human Alice)
DL:      Alice ∈ Human
Prolog:  human(alice)
```

В RDF и OWL `rdf:type` — прямой аналог SUMO-предиката `instance`: он связывает ресурс с классом, экземпляром которого он является. [w3](https://www.w3.org/TR/2002/WD-owl-ref-20020729/)

## Итоговая формула

```lisp
(instance Alice Human)
```

читается так:

> **`Alice` — атомарная формула SUO-KIF, в которой бинарный предикат `instance` связывает индивида `Alice` с классом `Human`.**

По-русски:

> **Алиса является экземпляром класса «человек».**

По структуре это не «функция атом атом» в программном смысле, а **предикат с двумя аргументами**, записанный в префиксной S-выражение-нотации. [frontiersin](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1820380/pdf)
