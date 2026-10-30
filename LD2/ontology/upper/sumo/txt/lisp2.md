## 1
Эта запись — не команда для Lisp-машины в обычном смысле, а **логическое правило SUO-KIF**, записанное в Lisp-подобных S-выражениях. Оно означает:

> **Для любого `?X`: если `?X` — экземпляр `Human` и обладает атрибутом `Female`, то `?X` — экземпляр класса `FemaleHuman`.** [frontiersin](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1820380/full)

## Полная запись

```lisp
(=>
  (and
    (instance ?X Human)
    (attribute ?X Female))
  (instance ?X FemaleHuman))
```

## Как машина читает скобки

SUO-KIF использует **префиксную нотацию**: первый элемент внутри скобок — оператор, предикат или функция; остальные — его аргументы. Переменные начинаются с `?`; незаквантованные переменные в аксиомах неявно понимаются как универсально квантифицированные. [frontiersin](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1820380/full)

Внешняя структура:

```lisp
(=>  P  Q)
```

| Элемент | Роль |
|---|---|
| `=>` | Логическая импликация: «если…, то…» |
| `P` | Посылка, условие |
| `Q` | Следствие, вывод |

То есть:

```text
если P, то Q
```

## Разбор по уровням

### Уровень 1: импликация

```lisp
(=>
  <условие>
  <следствие>)
```

Читается:

```text
Если <условие>, то <следствие>.
```

Здесь:

```text
<условие>   = (and (instance ?X Human) (attribute ?X Female))
<следствие> = (instance ?X FemaleHuman)
```

### Уровень 2: условие `and`

```lisp
(and
  (instance ?X Human)
  (attribute ?X Female))
```

`and` — логическое «и». Оно истинно, только если истинны **оба** вложенных утверждения. [frontiersin](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1820380/full)

| Подусловие | Чтение |
|---|---|
| `(instance ?X Human)` | `?X` — экземпляр класса `Human` |
| `(attribute ?X Female)` | `?X` обладает атрибутом `Female` |

То есть условие:

```text
?X — человек И ?X имеет атрибут «женский».
```

### Уровень 3: первый атом условия

```lisp
(instance ?X Human)
```

| Элемент | Роль |
|---|---|
| `instance` | Предикат: «является экземпляром класса» |
| `?X` | Переменная: любой индивид |
| `Human` | Класс |

Читается:

```text
?X — экземпляр Human.
```

### Уровень 4: второй атом условия

```lisp
(attribute ?X Female)
```

| Элемент | Роль |
|---|---|
| `attribute` | Предикат: «обладает атрибутом» |
| `?X` | Носитель атрибута |
| `Female` | Значение атрибута |

Читается:

```text
?X обладает атрибутом Female.
```

### Уровень 5: следствие

```lisp
(instance ?X FemaleHuman)
```

| Элемент | Роль |
|---|---|
| `instance` | Предикат принадлежности классу |
| `?X` | Тот же индивид, что и в условии |
| `FemaleHuman` | Производный класс |

Читается:

```text
?X — экземпляр класса FemaleHuman.
```

## Полное дерево формулы

```text
(=>)
├── условие: (and)
│   ├── (instance ?X Human)
│   └── (attribute ?X Female)
└── следствие: (instance ?X FemaleHuman)
```

В линейной логической записи:

```text
(instance(?X, Human) ∧ attribute(?X, Female))
→
instance(?X, FemaleHuman)
```

А поскольку `?X` неявно универсально квантифицирована:

```text
∀X [
  (instance(X, Human) ∧ attribute(X, Female))
  →
  instance(X, FemaleHuman)
]
```



## Что это означает содержательно

Правило говорит:

> **Любая сущность, которая одновременно является человеком и имеет атрибут `Female`, автоматически относится к производному классу `FemaleHuman`.**

Пример:

```lisp
(instance Alice01 Human)
(attribute Alice01 Female)
```

Из этих двух фактов reasoner выведет:

```lisp
(instance Alice01 FemaleHuman)
```

То есть вам не нужно вручную писать:

```lisp
(instance Alice01 FemaleHuman)
```

Достаточно двух базовых фактов; третий будет получен по правилу.

## Важные методические замечания

### `FemaleHuman` — производный класс

Это не новый «экземпляр» и не новый физический объект. Это **определённый класс**, который собирает всех людей с атрибутом `Female`.

```text
FemaleHuman = Human ∩ имеет атрибут Female
```

В вашей аналогии с Visio:

- `Human` — master-шаблон;
- `Female` — значение свойства в окне параметров;
- `FemaleHuman` — не новая фигура, а **фильтр или сохранённый вид**: «все экземпляры Human, у которых свойство равно Female».

### Правило не создаёт объект

Формула не «катапультирует» `FemaleHuman` и не создаёт новую сущность. Она создаёт **логическую связь**: если условия выполнены, классификация становится истинной.

Физический индивид остаётся один — `Alice01`.

### Нужны объявления классов и атрибута

Чтобы правило было корректным, в TBox должны существовать:

```lisp
(instance Human Class)
(instance FemaleHuman Class)
(instance Female SexAttribute)
(subclass FemaleHuman Human)
```

А также ограничение применимости:

```lisp
(=>
  (attribute ?X Female)
  (instance ?X Human))
```

Иначе `Female` формально можно приписать автомобилю, а правило автоматически сделает автомобиль экземпляром `FemaleHuman`.

## Более строгая версия

Если вы хотите, чтобы `FemaleHuman` был именно подклассом `Human`, лучше записать правило так:

```lisp
(=>
  (instance ?X FemaleHuman)
  (instance ?X Human))
```

и одновременно:

```lisp
(=>
  (and
    (instance ?X Human)
    (attribute ?X Female))
  (instance ?X FemaleHuman))
```

Вместе они задают соответствие:

```text
FemaleHuman = Human, обладающий Female
```

## Итог

> **`=>` — «если…, то…»; `and` — одновременное выполнение обоих условий; `?X` — переменная для любого индивида; `instance` связывает индивид с классом; `attribute` связывает индивид со значением атрибута.**  
> **Формула означает: всякий человек с атрибутом `Female` автоматически принадлежит производному классу `FemaleHuman`.** [frontiersin](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2026.1820380/full)
  
