## 1
- https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO
- Sigma — это открытая среда для разработки формальных онтологий, в первую очередь она оптимизирована для работы с SUMO (Suggested Upper Merged Ontology). https://en.wikipedia.org/wiki/Sigma_knowledge_engineering_environment
### Human
- https://sigma.ontologyportal.org/sigma/Graph.jsp?relation=subclass&term=Hominid&up=9&down=2&limit=&inst=inst&fileRestrict=&columns=direct-children&columns=documentation&columns=graph&scrWidth=1266&kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&view=text&submit=submit
- https://sigma.ontologyportal.org/sigma/Graph.jsp?relation=subclass&term=Human&up=5&down=1&limit=&inst=inst&fileRestrict=&columns=direct-children&columns=documentation&columns=graph&scrWidth=1266&kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&view=text&submit=submit

Human находится в разных ветках, но все они в Physical:
- одна ветка - суперкласс = CognitiveAgent
  - (subclass Human CognitiveAgent) 	Merge.kif 15074-15074
- вторая ветка - суперкласс =  Hominid  
  - (subclass Human Hominid) 	Merge.kif 15073-15073  

т.е. оба все равно создают физический экземпляр. Не понятно (instance Alice Human) на какую ветку ссылается? Разве не должно быть однозначности?
Если есть Human в ветке Abstract - укажи точно положение.

Приведи примеры, когда Merge.kif содержит ABox. Или твое утверждение ошибочно: "Merge.kif содержит TBox, RBox, фрагменты ABox-подобных классификаций абстрактных индивидов, аксиомы/правила и аннотации."

В ветке SetOrClass нет и не может быть Human. См. https://sigma.ontologyportal.org/sigma/Graph.jsp?relation=subclass&term=SetOrClass&up=5&down=6&limit=&inst=inst&fileRestrict=&columns=direct-children&columns=documentation&columns=graph&scrWidth=1266&kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&view=text&submit=submit


Вы правы, и мою прежнюю схему нужно исправить. **В SUMO `Human` — один термин, но он имеет два суперкласса: `CognitiveAgent` и `Hominid`. Оба пути ведут в `Physical`. В ветви `Abstract` `Human` не находится как подкласс; там он может фигурировать только через метасвязь `(instance Human Class)`, а не через `subclass`.** [gupea.ub.gu](https://gupea.ub.gu.se/server/api/core/bitstreams/0ac1d0a0-02e9-42a8-9f2d-30ec04044709/content)

## 1. Две ветки `Human` — это множественное наследование

В `Merge.kif` есть два утверждения:

```lisp
(subclass Human Hominid)         ; Merge.kif 15073
(subclass Human CognitiveAgent)  ; Merge.kif 15074
```

**Перевод:**

- `Human` — подкласс `Hominid`;
- `Human` — подкласс `CognitiveAgent`.

Это не два разных класса `Human`, а **один класс с двумя родителями**. В логике онтологий это называется множественным наследованием: класс может наследовать ограничения и характеристики по нескольким ветвям.

```text
Entity
└── Physical
    ├── Object
    │   └── ... 
    │       └── Organism
    │           └── Hominid
    │               └── Human
    │
    └── Object
        └── ... 
            └── Agent
                └── CognitiveAgent
                    └── Human
```

Обе ветви сходятся в `Human` и обе восходят к `Physical`:

```text
Human → Hominid → ... → Organism → ... → Object → Physical
Human → CognitiveAgent → Agent → ... → Object → Physical
```

Поэтому `(instance Alice Human)` не выбирает «одну из веток». Оно относится к **единственному термину `Human`**, а система вывода может использовать оба пути наследования.

## 2. На что ссылается `(instance Alice Human)`

```lisp
(instance Alice Human)
```

ссылается на **единственный класс `Human`**, а не на какую-либо из его родительских ветвей.

Это утверждение фиксирует только одно:

```text
Alice — экземпляр класса Human.
```

Дальше reasoner может вывести оба набора следствий:

```text
Alice — Human
Human — Hominid
∴ Alice причастна ветви Hominid

Alice — Human
Human — CognitiveAgent
∴ Alice причастна ветви CognitiveAgent
```

Однозначность здесь есть, потому что `Alice`, `Human`, `Hominid` и `CognitiveAgent` — разные константы с разными ролями:

| Термин | Роль |
|---|---|
| `Alice` | Индивид / физический экземпляр |
| `Human` | Класс, имеющий два суперкласса |
| `Hominid` | Биологическая ветвь классификации |
| `CognitiveAgent` | Ветвь агентов, способных к познанию и намеренным действиям |

То есть `Human` не «дублируется», а **классифицируется по двум независимым основаниям**: биологическому и агентному.

## 3. Где `Human` в `Abstract`

**Как подкласс `Human` в `Abstract` не находится.** Ваше замечание корректно: в графе `subclass SetOrClass` термина `Human` быть не должно, потому что `Human` не является подклассом `SetOrClass`.

Различие такое:

```lisp
(subclass Human SetOrClass)   ; НЕВЕРНО: этого в SUMO нет
(instance Human Class)        ; верная метасвязь
```

Первая формула означала бы: «`Human` — разновидность множества/класса». Вторая означает: «`Human` — экземпляр метакласса `Class`», то есть `Human` сам является классом.

Правильная картина:

```text
Entity
├── Abstract
│   └── SetOrClass
│       └── Class
│           └── (Human является экземпляром Class, а не подклассом Class)
│
└── Physical
    ├── ... → Organism → Hominid → Human
    └── ... → Agent → CognitiveAgent → Human
```

Поэтому корректная запись:

```lisp
(instance Human Class)
```

а не:

```lisp
(subclass Human Class)
```

Именно поэтому в графе `subclass SetOrClass` вы не видите `Human`: граф `subclass` показывает **подклассы**, а `Human` связан с `Class` отношением **`instance`**. [gupea.ub.gu](https://gupea.ub.gu.se/server/api/core/bitstreams/0ac1d0a0-02e9-42a8-9f2d-30ec04044709/content)

## 4. Содержит ли `Merge.kif` ABox

Моё прежнее утверждение было **слишком сильным и неточным**. Корректнее так:

> **`Merge.kif` содержит TBox, RBox, аксиомы, правила и утверждения уровня `instance` для встроенных абстрактных констант. Но это не полноценный ABox о конкретных людях, автомобилях или событиях реального мира.**

Разница важна:

| Тип утверждения | Пример | Это ABox? |
|---|---|---|
| Классификация класса | `(instance Human Class)` | Нет: это метатеоретическая классификация |
| Классификация атрибута | `(instance Red ColorAttribute)` | Нет: это встроенный элемент онтологии |
| Классификация отношения | `(instance part BinaryRelation)` | Нет: это часть RBox/метаонтологии |
| Факт о конкретном человеке | `(instance Alice Human)` | Да, но такой факт обычно добавляет пользователь, а не `Merge.kif` |
| Факт о конкретном автомобиле | `(instance AliceCar Automobile)` | Да, но также обычно вне `Merge.kif` |

То есть в `Merge.kif` есть синтаксически похожие на ABox конструкции — `(instance X Y)`, — но их индивиды, как правило, являются **встроенными элементами самой онтологии**: отношениями, атрибутами, функциями, единицами измерения, языковыми категориями. Это не ABox о конкретных сущностях предметной области.

Более точная формула:

> **`Merge.kif` содержит не «фрагменты ABox», а `instance`-утверждения о встроенных абстрактных константах онтологии. Реальный ABox создаётся прикладной базой знаний, когда вводятся такие индивиды, как `Alice` или `AliceCar`.**

## 5. Исправленная схема для Алисы

```lisp
(instance Alice Human)
(names "Алиса" Alice)
```

Онтологическая структура:

```text
TBox

Entity
├── Abstract
│   └── SetOrClass
│       └── Class
│           └── Human  (instance Human Class)
│
└── Physical
    ├── Object
    │   └── ... → Organism → Hominid → Human
    └── Object
        └── ... → Agent → CognitiveAgent → Human

ABox

Alice ── instance ──> Human
"Алиса" ── names ──> Alice
```

Вывод:

```text
Alice — Human
Human — Hominid
Human — CognitiveAgent
Hominid → ... → Physical
CognitiveAgent → ... → Physical
∴
Alice — Physical
```

## Итог

Ваша поправка точна:

> **`Human` находится в двух ветвях `Physical`: через `Hominid` и через `CognitiveAgent`. Это множественное наследование, а не два разных `Human`.**  
> **`(instance Alice Human)` ссылается на единственный класс `Human`; обе родительские ветви используются для вывода, а не для выбора одной из них.**  
> **В `Abstract` `Human` не является подклассом; он лишь является экземпляром метакласса `Class`.** [gupea.ub.gu](https://gupea.ub.gu.se/server/api/core/bitstreams/0ac1d0a0-02e9-42a8-9f2d-30ec04044709/content)

И моя формулировка про «фрагменты ABox в `Merge.kif`» была ошибочной в этом контексте: точнее говорить о **встроенных `instance`-классификациях онтологических констант**, а не о ABox с конкретными индивидами реального мира. [ar5iv.labs.arxiv](https://ar5iv.labs.arxiv.org/html/2305.07903)

## 2
Все равно не понятно, когда я говорю `(instance Alice Human)` я хотел бы получить однозначность. Предложи или конкретизацию или замену Human

Однозначность уже есть: `(instance Alice Human)` ссылается на **один-единственный класс `Human`**, а не на «ветку». Две ветки — `Hominid` и `CognitiveAgent` — это не альтернативные значения `Human`, а два набора наследуемых характеристик одного и того же класса. [gupea.ub.gu](https://gupea.ub.gu.se/server/api/core/bitstreams/0ac1d0a0-02e9-42a8-9f2d-30ec04044709/content)

## Почему неоднозначности нет

```lisp
(instance Alice Human)
```

означает ровно одно:

```text
Alice — экземпляр класса Human.
```

Дальше система вывода раскрывает `Human` по обоим его определениям:

```lisp
(subclass Human Hominid)
(subclass Human CognitiveAgent)
```

Поэтому корректная картина такая:

```text
                Human
               /      \
        Hominid      CognitiveAgent
           |               |
      биологическая    агентная
         ветвь            ветвь
           \               /
            \             /
             Physical
```

`Alice` не «выбирает» между ними. Она получает **оба** наследования:

- как `Hominid` — биологический организм;
- как `CognitiveAgent` — познающий и действующий агент.

Это аналогично тому, что один и тот же человек одновременно является биологическим организмом и субъектом действий. Противоречия нет, потому что ветви описывают разные аспекты, а не взаимоисключающие типы.

## Если нужна одна ветка

Выбор зависит от того, что вы хотите подчеркнуть.

| Цель | Рекомендуемая запись | Что фиксируется |
|---|---|---|
| Подчеркнуть биологическую природу | `(instance Alice Hominid)` | Алиса — представитель биологической ветви |
| Подчеркнуть способность действовать и познавать | `(instance Alice CognitiveAgent)` | Алиса — агент |
| Использовать стандартное общее понятие «человек» | `(instance Alice Human)` | Алиса — человек; наследуются обе ветви |
| Создать собственный однозначный тип | `(subclass HumanBeing Human)` и `(instance Alice HumanBeing)` | Ваш класс с одной явной интерпретацией |

Но важно: `(instance Alice Hominid)` **не заменяет** `(instance Alice Human)`. Оно лишь классифицирует Алису более узко по биологической ветви и не фиксирует её агентные свойства, если они не выведены или не указаны отдельно.

## Лучшее решение: не менять `Human`, а уточнить термин

Если в вашей модели слово `Human` кажется перегруженным, введите собственный класс с ясным смыслом. Например:

```lisp
(subclass HumanBeing Human)

(documentation HumanBeing
"Физический индивид вида Homo sapiens, рассматриваемый прежде всего
как биологический организм и носитель идентичности.")

(instance Alice HumanBeing)
```

Здесь:

- `HumanBeing` — ваш однозначный класс;
- `Human` — стандартный класс SUMO с двумя ветвями наследования;
- `Alice` — экземпляр `HumanBeing`, а значит, и экземпляр `Human`.

Иерархия:

```text
Entity
└── Physical
    ├── ... → Organism → Hominid → Human → HumanBeing → Alice
    └── ... → Agent → CognitiveAgent → Human → HumanBeing → Alice
```

Но и здесь `HumanBeing` по-прежнему наследует обе ветви через `Human`. Чтобы действительно ограничить классификацию одной ветвью, нужно наследовать не от `Human`, а от нужного предка:

```lisp
(subclass BiologicalHuman Hominid)
(instance Alice BiologicalHuman)
```

Однако тогда вы теряете связь с агентной ветвью `CognitiveAgent`, если не добавите её отдельно.

## Практическая рекомендация

Для вашей модели «мира вещей» я бы предложил такую терминологию:

```lisp
(instance Alice Human)
```

и читать её так:

> **Создаётся физический индивид `Alice`; он относится к единственному классу `Human`, который в SUMO определён одновременно как биологический организм (`Hominid`) и как когнитивный агент (`CognitiveAgent`).**

Если же вам нужен термин без двойного наследования, используйте не `Human`, а собственный класс:

```lisp
(subclass HumanIndividual Hominid)
(instance Alice HumanIndividual)
```

Тогда смысл будет однозначным:

> **`Alice` — физический биологический индивид, относящийся к ветви `Hominid`.**

Но это уже не стандартный SUMO-класс `Human`, а ваше расширение онтологии.

## Главная поправка

Не следует искать в записи `(instance Alice Human)` ссылку на «ветку». `instance` связывает индивид с **классом**, а не с путём наследования.

```text
(instance Alice Human)  →  Alice относится к Human
                         →  Human имеет двух родителей
                         →  Alice наследует оба аспекта
```

Поэтому лучшая замена — не другой класс вместо `Human`, а **уточнение термина**, если вам нужна одна интерпретация:

- `Hominid` — биологический аспект;
- `CognitiveAgent` — агентный аспект;
- `Human` — стандартное объединяющее понятие;
- `HumanBeing` / `HumanIndividual` — ваш однозначный прикладной класс.

## 2.1
Нет: в базовой SUMO (`Merge.kif`) **нет отдельного класса `Person`**. Стандартный термин для человека — `Human`; в аксиомах и документации SUMO люди последовательно обозначаются именно как `Human`, а не `Person`. [github](https://github.com/ontologyportal/sumo/blob/master/People.kif)

## Что использовать вместо `Person`

```lisp
(instance Alice Human)
```

Это корректная SUMO-запись:

> **Алиса — экземпляр класса `Human`.**

В SUMO `Human` имеет двух родителей:

```lisp
(subclass Human Hominid)
(subclass Human CognitiveAgent)
```

Поэтому `Alice` одновременно наследует биологическую ветвь и агентную ветвь. 

## Почему `Person` может сбивать с толку

Слово `Person` встречается в других онтологиях и форматах — например, в Schema.org, FOAF, DBpedia, DUL — как класс «человек» или «физическое лицо». Но это **не означает, что такой класс есть в базовом SUMO**. [wikidata](https://www.wikidata.org/wiki/Wikidata:WikiProject_Ontology/Schema.org)

| Онтология | Термин для человека |
|---|---|
| **SUMO** | `Human` |
| Schema.org | `Person` |
| FOAF | `Person` |
| DBpedia | `Person` |
| DUL | `Person` |

Поэтому при переносе модели из Schema.org, FOAF или OWL-онтологий в SUMO соответствие обычно такое:

```text
Person  →  Human
```

а не:

```text
Person  →  Person
```

## Если вам нужен термин `Person`

Вы можете добавить его как собственное расширение SUMO:

```lisp
(subclass Person Human)

(documentation Person
"Человек, рассматриваемый как физический индивид и участник
социальных, правовых или коммуникативных отношений.")

(instance Alice Person)
```

Тогда иерархия будет такой:

```text
Entity
└── Physical
    ├── ... → Organism → Hominid → Human → Person → Alice
    └── ... → Agent → CognitiveAgent → Human → Person → Alice
```

Но это уже **ваше расширение SUMO**, а не стандартный термин базовой онтологии.

## Практическая рекомендация

Для чистой SUMO-модели используйте:

```lisp
(instance Alice Human)
```

Если важно подчеркнуть биологическую сторону:

```lisp
(instance Alice Hominid)
```

Если важно подчеркнуть, что Алиса — действующий и познающий субъект:

```lisp
(instance Alice CognitiveAgent)
```

Если важно сохранить привычное слово `Person` из других онтологий, добавьте собственный синонимичный класс:

```lisp
(subclass Person Human)
(instance Alice Person)
```

Но в базовой SUMO правильный и однозначный ответ: **`Person` отсутствует; используйте `Human`.** [github](https://github.com/ontologyportal/sumo/blob/master/People.kif)


