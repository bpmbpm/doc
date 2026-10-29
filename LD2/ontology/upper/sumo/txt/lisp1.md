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

## 1.1

В стандартной SUMO **нет предиката `InstanceOf`** с таким именем. Базовый предикат — `instance`; его назначение — связать любую сущность с классом, экземпляром которого она является. Отдельных предикатов «физический экземпляр» и «абстрактное свойство экземпляра» в SUMO тоже нет, но их можно определить как расширение. 

## 1. Есть ли `InstanceOf` в SUMO

Нет. В SUMO используется:

```lisp
(instance Alice Human)
```

а не:

```lisp
(InstanceOf Alice Human)
```

`instance` — стандартное бинарное отношение SUMO. Оно не различает заранее, физический это индивид или абстрактный: это определяется классом во втором аргументе и иерархией SUMO. 

## 2. Ваши два предиката: что они означают

Вы предлагаете разделить одну логическую операцию на две по онтологическому типу второго аргумента:

```lisp
(ЕстьФизическийЭкземпляр Alice Human)
```

и

```lisp
(ЕстьСвойствоЭкземпляра Alice Human)
```

Но во второй записи есть терминологическая проблема: `Human` — это класс из ветви `Physical`, а не свойство из `Abstract`. Поэтому она не выражает «Алиса имеет свойство Human».

Вероятно, вы имели в виду два разных случая:

```lisp
;; Алиса — физический экземпляр класса Human
(ЕстьФизическийЭкземпляр Alice Human)

;; Автомобиль Алисы имеет абстрактное свойство Red
(ЕстьСвойствоЭкземпляра AliceCar Red)
```

Тогда первый предикат — это специализированный `instance` с ограничением: второй аргумент должен быть классом, расположенным под `Physical`. Второй — специализированный `attribute` с ограничением: второй аргумент должен быть элементом `Attribute` или иной абстрактной ветви.

## 3. Как определить такие предикаты в SUMO

Можно ввести два собственных отношения и ограничить их через `domain` и `range`.

### Физический экземпляр

```lisp
(documentation HasPhysicalInstance
"Связывает индивида с классом, расположенным в ветви Physical.")

(domain HasPhysicalInstance 1 Entity)
(domain HasPhysicalInstance 2 Physical)

(instance HasPhysicalInstance BinaryRelation)
```

Использование:

```lisp
(HasPhysicalInstance Alice Human)
(HasPhysicalInstance AliceCar Automobile)
```

Но здесь есть тонкость: `Human` и `Automobile` — классы, а не индивиды ветви `Physical`. В SUMO класс `Human` сам является `Class`, то есть абстрактной сущностью, хотя его экземпляры физичны.

Поэтому строгое ограничение «второй аргумент — Physical» было бы неверным для `Human`. Правильнее ограничить не сам класс, а его экземпляры:

```lisp
(=>
  (HasPhysicalInstance ?X ?C)
  (instance ?C Class))

(=>
  (HasPhysicalInstance ?X ?C)
  (subclass ?C Physical))
```

Тогда:

```lisp
(HasPhysicalInstance Alice Human)
```

означает:

> **`Alice` — индивид, тип которого `Human`; класс `Human` расположен в ветви `Physical`.**

### Свойство экземпляра

Для абстрактного свойства ближе всего не `instance`, а `attribute`:

```lisp
(attribute AliceCar Red)
```

Можно ввести специализированный предикат:

```lisp
(documentation HasAbstractProperty
"Связывает физический индивид с абстрактным значением атрибута.")

(domain HasAbstractProperty 1 Physical)
(domain HasAbstractProperty 2 Attribute)

(instance HasAbstractProperty BinaryRelation)
```

Использование:

```lisp
(HasAbstractProperty AliceCar Red)
(HasAbstractProperty Alice Asleep)
```

Здесь ограничение корректно:

- `AliceCar` — `Physical`;
- `Red` — `ColorAttribute`, то есть `Attribute`;
- `Attribute` находится в ветви `Abstract`.

Можно даже связать новый предикат с SUMO-отношением `attribute`:

```lisp
(=>
  (HasAbstractProperty ?X ?A)
  (attribute ?X ?A))
```

## 4. Почему `instance` не подходит для свойств

`instance` отвечает на вопрос:

```text
К какому классу относится эта сущность?
```

```lisp
(instance AliceCar Automobile)
```

А `attribute` отвечает на вопрос:

```text
Каким качеством обладает эта сущность?
```

```lisp
(attribute AliceCar Red)
```

Разница:

| Вопрос | Предикат | Пример |
|---|---|---|
| Что это за тип вещи? | `instance` | `AliceCar` — `Automobile` |
| Каким качеством обладает вещь? | `attribute` | `AliceCar` — `Red` |
| Какова мера свойства? | `age`, `measure`, `length` и т. п. | `Alice` имеет возраст 16 лет |
| Как объект связан с другим объектом? | `part`, `possesses`, `located` | Алиса владеет автомобилем |

Поэтому:

```lisp
(instance AliceCar Red)   ; неверно: Red — не класс автомобиля
(attribute AliceCar Red)  ; верно: Red — атрибут автомобиля
```

## 5. Аналоги в других синтаксисах

В OWL closest аналог `instance` — `ClassAssertion`. Важно: в функциональном синтаксисе OWL порядок аргументов обратный SUMO: сначала класс, затем индивид. [w3](https://www.w3.org/TR/2009/REC-owl2-syntax-20091027/)

| Система | Запись | Чтение |
|---|---|---|
| SUMO | `(instance Alice Human)` | Алиса — экземпляр `Human` |
| OWL 2 Functional Syntax | `ClassAssertion(a:Human a:Alice)` | `Alice` — экземпляр `Human` |
| RDF / RDFS | `Alice rdf:type Human` | `Alice` имеет тип `Human` |
| Description Logic | `Alice ∈ Human` | Алиса принадлежит концепту `Human` |
| Prolog | `human(alice)` | `alice` — человек |

OWL также позволяет ограничивать отношения через `ObjectPropertyDomain` и `ObjectPropertyRange`: первый задаёт класс первого аргумента, второй — класс второго. Это прямой механизм для ваших идей «второй аргумент должен быть из нужной ветки». [w3](https://www.w3.org/TR/2009/REC-owl2-syntax-20091027/)

## 6. Как выразить вашу идею в OWL

Для «физического экземпляра» можно ввести свойство:

```text
hasPhysicalInstance
Domain: Thing
Range: PhysicalClass
```

Для «абстрактного свойства»:

```text
hasAbstractProperty
Domain: PhysicalThing
Range: Attribute
```

В OWL-стиле:

```text
ClassAssertion(:Human :Alice)
ObjectPropertyAssertion(:hasAbstractProperty :AliceCar :Red)

ObjectPropertyDomain(:hasAbstractProperty :PhysicalThing)
ObjectPropertyRange(:hasAbstractProperty :Attribute)
```

`ObjectPropertyDomain` говорит: если `x hasAbstractProperty y`, то `x` — физическая сущность. `ObjectPropertyRange` говорит: если `x hasAbstractProperty y`, то `y` — атрибут. [w3](https://www.w3.org/TR/2009/REC-owl2-syntax-20091027/)

## 7. Рекомендуемые имена

Вместо русских или калькированных названий лучше использовать точные английские термины:

| Ваш замысел | Рекомендуемое имя | SUMO-аналог |
|---|---|---|
| «Есть физический экземпляр класса» | `hasPhysicalInstance` | специализированный `instance` |
| «Есть абстрактное свойство» | `hasAbstractProperty` | специализированный `attribute` |
| «Имеет числовую меру» | `hasMeasure` / `hasValue` | `measure`, `age`, `length` |
| «Имеет имя» | `hasName` | `names` |
| «Является экземпляром класса» | `instance` | `instance` |

## Итог

> **В SUMO нет `InstanceOf`; есть `instance`.**  
> **Для физической классификации можно ввести `hasPhysicalInstance`, ограничив второй аргумент классами ветви `Physical`.**  
> **Для свойств лучше использовать не `instance`, а специализированный `hasAbstractProperty`, ограниченный `Attribute` из ветви `Abstract`; его естественный базовый аналог в SUMO — `attribute`.** [w3](https://www.w3.org/TR/2009/REC-owl2-syntax-20091027/)
