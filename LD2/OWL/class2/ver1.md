## 1

Owl Class Thing Individual Entity

Эти четыре понятия — **Class (класс), Thing (вещь), Individual (индивид, экземпляр), Entity (сущность)** — действительно лежат в основе OWL (языка для онтологий, который используют в Семантическом Вебе). Я коротко разберу, что каждое из них значит и как они связаны. [```1```](https://www.w3.org/TR/owl-ref/)[```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)[```16```](https://keldysh.ru/abrau/2019/theses/58.pdf)

## Class (класс)
Класс в OWL — это как шаблон или концепция в предметной области. Он описывает **множество** каких-то объектов (индивидов), которые объединены общими свойствами. Например, класс `Person` объединяет всех конкретных людей: Ивана, Марию, Петра. [```1```](https://www.w3.org/TR/owl-ref/)[```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)[```16```](https://keldysh.ru/abrau/2019/theses/58.pdf)

В коде класс обычно определяют так:
```owl
<owl:Class rdf:ID="Person">
  ...
</owl:Class>
```
А чтобы связать конкретный индивид (например, Ивана) с классом `Person`, используют свойство `rdf:type`:
```owl
<Person rdf:ID="Иван">
  rdf:type owl:Class ;
  name "Иван";
  age 30 ;
  hasFriend <Иван_Петрович> .
</Person>
```
Здесь `rdf:type` утверждает, что индивид `Иван` является экземпляром класса `Person`. [```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)[```3```](https://www.w3.org/TR/owl-guide/)

Классы можно организовывать в **иерархию** (таксономию) с помощью свойства `rdfs:subClassOf`. Например, `Student` может быть подклассом `Person` (все студенты — это люди). [```17```](https://psta.psiras.ru/read/psta2011_4_85-94.pdf)[```18```](https://studfile.net/preview/9597677/page:25/)

## Thing (вещь)
`owl:Thing` — это **встроенный** (built-in) класс в OWL. Его ключевая особенность в том, что он содержит **абсолютно всё** — любой индивид в онтологии является экземпляром `owl:Thing`. То есть это самый общий класс: всё, что существует в моделируемой области, попадает в него. [```1```](https://www.w3.org/TR/owl-ref/)[```6```](https://daselab.cs.ksu.edu/sites/default/files/06-owl.pdf)[```2```](https://cursosextensao.usp.br/pluginfile.php/970385/mod_resource/content/1/NewOWLPizzaTutorial2021.pdf)[```4```](https://sherdim.ru/pts/semantic_web/REC-owl-guide-20040210_ru.html)

Из этого следует важное следствие: **любой пользовательский класс в OWL автоматически является подклассом `owl:Thing`**. [```1```](https://www.w3.org/TR/owl-ref/)[```3```](https://www.w3.org/TR/owl-guide/)[```4```](https://sherdim.ru/pts/semantic_web/REC-owl-guide-20040210_ru.html)

Пример: если вы определили класс `Dog` (собака), то автоматически `Dog` — это подкласс `owl:Thing`. Даже если вы нигде не писали `Dog` подкласс of `owl:Thing`, система всё равно это подразумевала: всё, что является собакой, одновременно является «вещью». [```1```](https://www.w3.org/TR/owl-ref/)[```3```](https://www.w3.org/TR/owl-guide/)

## Individual (индивид, экземпляр)
Индивид — это конкретный ресурс, который является членом какого-то класса. Это уже не шаблон, а реальная сущность из предметной области: конкретный человек, собака, книга, город, число 5, строка "Hello". [```1```](https://www.w3.org/TR/owl-ref/)[```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)[```16```](https://keldysh.ru/abrau/2019/theses/58.pdf)

Индивид можно назвать: ему дают URI (например, `#Иван`), чтобы ссылаться на него в онтологии. Иногда используют анонимные индивиды (локальные узлы, похожие на blank nodes в RDF). [```6```](https://daselab.cs.ksu.edu/sites/default/files/06-owl.pdf)

Чтобы сказать, что индивид принадлежит классу, снова используют `rdf:type`. Например:
```owl
<Иван rdf:type Person />
```
Теперь Иван — экземпляр класса `Person`. [```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)[```3```](https://www.w3.org/TR/owl-guide/)

## Entity (сущность)
В контексте OWL термин **Entity** иногда используют как обобщающее понятие для всего, что можно описать в онтологии: и классы, и индивиды, и свойства, и даже данные (литералы). Но в более строгом смысле **Entity** чаще всего относится именно к **индивидам** — конкретным объектам предметной области. [```6```](https://daselab.cs.ksu.edu/sites/default/files/06-owl.pdf)[```2```](https://cursosextensao.usp.br/pluginfile.php/970385/mod_resource/content/1/NewOWLPizzaTutorial2021.pdf)

## Связь в целом
Получается такая картина:
* **Class** — шаблон, описывающий множество индивидов.
* **Individual** — конкретный элемент из этого множества.
* **`owl:Thing`** — надкласс для всех индивидов: всё, что есть в онтологии, есть и в `owl:Thing`.
* **`rdf:type`** — связывает индивид с классом, делая его экземпляром.

 [```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)[```3```](https://www.w3.org/TR/owl-guide/)

## Важное уточнение про диалекты
В разных диалектах OWL (OWL Lite, OWL DL, OWL Full) правила немного отличаются. [```1```](https://www.w3.org/TR/owl-ref/)[```3```](https://www.w3.org/TR/owl-guide/)[```4```](https://sherdim.ru/pts/semantic_web/REC-owl-guide-20040210_ru.html)
* В **OWL Lite** и **OWL DL** действует строгое разделение типов: класс не может одновременно быть индивидом, а индивид — классом. [```1```](https://www.w3.org/TR/owl-ref/)[```3```](https://www.w3.org/TR/owl-guide/)
* В **OWL Full** это ограничение снимается. Там класс можно одновременно рассматривать и как совокупность индивидов, и как индивид сам по себе. Например, можно иметь идентификатор `Fokker-100`, который выступает и как класс (множество самолётов Fokker-100), и как индивид (конкретный тип самолёта). [```1```](https://www.w3.org/TR/owl-ref/)[```3```](https://www.w3.org/TR/owl-guide/)[```4```](https://sherdim.ru/pts/semantic_web/REC-owl-guide-20040210_ru.html)

## Пример для наглядности
Допустим, мы моделируем библиотеку.
* `Book` — класс (концепция «Книга»).
* `#Война и мир` — индивид (конкретная книга, экземпляр класса `Book`).
* `rdf:type` скажет, что эта книга — экземпляр класса `Book`.
* `hasAuthor` — свойство, связывающее индивиды (книгу и автора).

## Ещё пара деталей
* В OWL есть и другой встроенный класс — `owl:Nothing`. Это **пустой класс**: у него нет ни одного экземпляра. [```6```](https://daselab.cs.ksu.edu/sites/default/files/06-owl.pdf)[```2```](https://cursosextensao.usp.br/pluginfile.php/970385/mod_resource/content/1/NewOWLPizzaTutorial2021.pdf)[```13```](https://camilothorne.altervista.org/sem_web17/OWL_Ontologies.pdf)
* Для работы с идентичностью индивидов есть специальные свойства: `owl:sameAs` (два имени ссылаются на один индивид) и `owl:differentFrom` (два имени — на разные индивиды). [```17```](https://psta.psiras.ru/read/psta2011_4_85-94.pdf)[```20```](https://studfile.net/preview/9491304/page:4/)

Если будете строить онтологию и запутаетесь, какой элемент перед вами — класс или индивид, советую задать себе вопрос: «Я описываю *тип* чего-то или *конкретный объект*?». Часто это сразу проясняет ситуацию. [```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)

## 1.1

Аналоги есть почти везде, где есть представление знаний — просто называются по-разному. Сведу самое наглядное в таблицу.

| Система | Аналог `owl:Class` | Аналог индивида | Аналог `owl:Thing` («всё сущее») |
|---|---|---|---|
| **RDF/RDFS** | `rdfs:Class` | любой ресурс (RDF-узел), тип задаётся `rdf:type` | `rdf:Resource` — самый общий класс, всё в RDF — ресурс [```1```](https://tr-page.yandex.ru/translate?lang=en-ru&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F1740341%2Fwhat-is-the-difference-between-rdf-and-owl)[```4```](https://migalkin.github.io/kgcourse2021/lectures/lecture2) |
| **Schema.org** | типы (`schema:Person`, `schema:Event` и т.д.) | конкретный помеченный элемент в микроразметке | `schema:Thing` — «самый общий тип элемента», от него наследуются почти все типы [```9```](https://schema.org/Thing) |
| **Дескрипционная логика (DL)** | концепт | экземпляр (именованный или анонимный) | top concept (⊤) — а `owl:Nothing` соответствует bottom concept (⊥) [```6```](https://www.w3.org/TR/owl2-syntax/) |
| **UML** | класс | объект (экземпляр класса) | прямого аналога нет: классы не образуют единого «верха» в духе `owl:Thing` [```13```](https://www.frontiersin.org/journals/neuroinformatics/articles/10.3389/fninf.2015.00003/full) |
| **SUMO** | класс (`subclass`-иерархия) | instance (например, Хитроу) | `Entity` — корень всей иерархии, всё делится на Abstract и Physical [```12```](https://inariksit.github.io/cclaw-zettelkasten/sumo.html) |
| **Cyc** | коллекция (collection) | индивид | `Thing` — аналог с прямым совпадением по смыслу |
| **Frame-системы / OKBC** | фрейм-класс | экземпляр фрейма | `Thing` (верхний фрейм в иерархии) |
| **Сущность–связь (ERM)** | тип сущности | экземпляр сущности | прямого аналога нет |

Пара важных нюансов, которые легко упустить:

- **RDFS и OWL очень близки**: в OWL 2 `owl:Class` фактически является специализацией `rdfs:Class` (а в OWL Full они и вовсе эквивалентны), а `rdf:type` — общий механизм и для RDFS, и для OWL. Поэтому «миграция» между ними почти бесплатная. [```1```](https://tr-page.yandex.ru/translate?lang=en-ru&url=https%3A%2F%2Fstackoverflow.com%2Fquestions%2F1740341%2Fwhat-is-the-difference-between-rdf-and-owl)
- **Schema.org — «родственник», а не подмножество OWL**: он тоже строится на RDFS, но его цель — обмен структурированными данными в интернете, а не формальный вывод; `schema:Thing` при этом фактически играет роль `owl:Thing` — общего корня. [```9```](https://schema.org/Thing)[```7```](https://stackoverflow.com/questions/65472134/how-does-owl-differ-from-schema-org)
- **UML семантически отличается**: класс в UML — это «шаблон» с поведением и состоянием, а класс в OWL — просто категория (множество индивидов); UML-объект создают через инстанцирование, а OWL-индивид существует независимо от класса и лишь «подпадает» под него. [```13```](https://www.frontiersin.org/journals/neuroinformatics/articles/10.3389/fninf.2015.00003/full)
- **SUMO и Cyc — «верхние онтологии»**: в SUMO корень — `Entity` с жёстким делением на физическое и абстрактное, а язык SUO-KIF не основан на дескрипционных логиках, как OWL. У Cyc всё знание разбито на микротеории с утверждениями-assertions. [```12```](https://inariksit.github.io/cclaw-zettelkasten/sumo.html)

Общий паттерн такой: почти в каждой системе есть тройка «класс — индивид — универсум», различаются только названия и то, насколько строго разделяются эти уровни (как в OWL DL) или смешиваются (как в OWL Full, где класс может быть одновременно индивидом).

Если интересует какая-то конкретная пара — например, как переложить онтологию из UML в OWL или как `schema:Thing` соотносится с `rdf:Resource` — могу разобрать подробнее.

## 1.3

покажи
- всю иерархию конструкций owl (взаимосвязи).
- всю иерархию конструкций RDF/RDFS
- всю иерархию конструкций Schema.org
- сводную схему (все вместе)

Отличная задача — свести всё в наглядные схемы. Сразу оговорка: «вся иерархия» OWL и RDFS — это иерархии их встроенных классов и словаря (не предметных классов вроде «котик» или «магазин»), а у Schema.org — вершина огромного дерева типов. Поехали.

## 1. Иерархия конструкций OWL

**Встроенные классы:**

```
owl:Thing (⊤, суперкласс всего)
├── owl:Class (подкласс rdfs:Class)
│   ├── owl:Restriction  — ограничение на свойства:
│   │        owl:onProperty + owl:allValuesFrom / owl:someValuesFrom /
│   │        owl:hasValue / owl:cardinality / owl:minCardinality /
│   │        owl:maxCardinality (+ квалифицированные варианты в OWL 2)
│   ├── owl:AllDifferent
│   ├── owl:AllDisjointClasses        (OWL 2)
│   ├── owl:AllDisjointProperties     (OWL 2)
│   ├── owl:NegativePropertyAssertion (OWL 2)
│   └── owl:DeprecatedClass
└── owl:Nothing (⊥, пустой класс — подкласс ВСЕХ классов)
```

**Свойства (все — подклассы `rdf:Property`):**

```
rdf:Property
├── owl:ObjectProperty    — связь индивид↔индивид
│   ├── owl:TransitiveProperty
│   ├── owl:SymmetricProperty
│   ├── owl:AsymmetricProperty    (OWL 2)
│   ├── owl:ReflexiveProperty     (OWL 2)
│   ├── owl:IrreflexiveProperty   (OWL 2)
│   └── owl:InverseFunctionalProperty
├── owl:DatatypeProperty  — связь индивид↔литерал
│   └── owl:FunctionalProperty
├── owl:AnnotationProperty
└── owl:OntologyProperty  (owl:imports, owl:versionInfo, ...)
```

**Словарь отношений между классами/индивидами** (сами не классы, а предикаты):

```
Между классами:   rdfs:subClassOf, owl:equivalentClass, owl:disjointWith,
                  owl:unionOf, owl:intersectionOf, owl:complementOf, owl:oneOf
Между свойствами: rdfs:subPropertyOf, owl:equivalentProperty,
                  owl:inverseOf, owl:propertyChainAxiom (OWL 2),
                  owl:propertyDisjointWith (OWL 2)
Между индивидами: owl:sameAs, owl:differentFrom, rdf:type
Метамодель:       owl:Ontology, owl:Axiom, owl:Annotation, owl:deprecated
```

## 2. Иерархия конструкций RDF/RDFS

**Классы:**

```
rdfs:Resource — корень, всё сущее
├── rdfs:Class            — классы вообще
│   ├── rdfs:Datatype     — типы данных (xsd:*, ...)
│   └── rdfs:Container    — контейнеры
│       ├── rdf:Bag       (мультимножество)
│       ├── rdf:Seq       (упорядоченная последовательность)
│       └── rdf:Alt       (альтернативы)
├── rdfs:Literal          — литералы (значения)
│   ├── rdf:langString    (строка с языковым тегом)
│   ├── rdf:HTML, rdf:XMLLiteral
│   └── все типы xsd:*    (xsd:string, xsd:integer, ...)
├── rdf:Property          — свойства
├── rdf:Statement         — реификация (триплет как объект)
├── rdf:List              — связный список (rdf:first / rdf:rest / rdf:nil)
├── rdfs:ContainerMembershipProperty (rdf:_1, rdf:_2, ...)
└── rdf:type              — NOTE: это предикат, а не класс; связывает ресурс и класс
```

**Словарь (предикаты и служебное):**

```
Структура:      rdfs:subClassOf, rdfs:subPropertyOf, rdfs:domain, rdfs:range
Члены списков:  rdfs:member, rdf:first, rdf:rest, rdf:nil
Реификация:     rdf:subject, rdf:predicate, rdf:object
Мета-описания:  rdfs:label, rdfs:comment, rdfs:seeAlso,
                rdfs:isDefinedBy, rdfs:isDefinedBy
```

## 3. Иерархия конструкций Schema.org

Корень всего — `schema:Thing`. Ниже — все 10 его непосредственных «ветвей» верхнего уровня:

```
schema:Thing
├── schema:Action         — действия («забронировать», «купить»)
├── schema:CreativeWork   — книги, фильмы, статьи, игры...
├── schema:Event          — события
├── schema:Intangible     — нематериальное: предложения, рейтинги, услуги...
├── schema:MedicalEntity  — медицина (вся ветка Medical* )
├── schema:Organization   — организации, компании, школы...
├── schema:Person         — люди
├── schema:Place          — места: здания, гео-объекты...
├── schema:Product        — товары
└── schema:Enumeration    — перечислимые значения (только в RDFS-версии)
```

Параллельно есть ветка значений:

```
schema:DataType
├── schema:Boolean, schema:Date, schema:DateTime, schema:Time
├── schema:Number (→ schema:Integer, schema:Float)
├── schema:Text
└── schema:URL
```

Плюс в Schema.org есть **иерархия свойств** (`schema:Property` — это `rdfs:Property`-подобные сущности: `schema:name`, `schema:birthDate`...), каждое свойство имеет `domainIncludes`/`rangeIncludes` вместо `rdfs:domain`/`rdfs:range` — так одно свойство может принадлежать нескольким типам.

## 4. Сводная схема

Вот как все три системы складываются в одну картину:

```
rdf:Resource — «абсолютный верх», всё есть ресурс
│
├── rdfs:Class
│   ├── rdfs:Datatype ──────────────── типы данных xsd:*
│   ├── rdfs:Container ─────────────── RDF-контейнеры (Bag/Seq/Alt)
│   │
│   ├── owl:Class ──────────────────── OWL добавляет свой класс классов
│   │   ├── owl:Restriction
│   │   │      (Restriction уточняет класс через свойства)
│   │   └── schema:Thing ───────────── Schema.org встраивается сюда:
│   │         ├── Action              его классы — обычные rdfs-классы,
│   │         ├── CreativeWork        их иерархия живёт под rdfs:subClassOf
│   │         ├── Event               внутри owl:Class
│   │         ├── Intangible
│   │         ├── MedicalEntity
│   │         ├── Organization
│   │         ├── Person
│   │         ├── Place
│   │         ├── Product
│   │         └── ...
│   │
│   └── owl:Thing = ⊤  (суперкласс для ВСЕХ классов выше)
│       owl:Nothing = ⊥ (подкласс всех классов, пуст)
│
├── rdfs:Literal ───────────────────── значения
│   └── schema:DataType (Text, Number, Date...) — «литералы» Schema.org
│
└── rdf:Property
    ├── owl:ObjectProperty ─── свойства-связи между индивидами
    │     ├── owl:TransitiveProperty
    │     ├── owl:SymmetricProperty
    │     ├── owl:FunctionalProperty
    │     └── owl:InverseFunctionalProperty
    ├── owl:DatatypeProperty ── свойства к литералам
    ├── owl:AnnotationProperty
    ├── owl:OntologyProperty
    └── schema:Property (schema:name, schema:birthDate, ...)
        └── схема через domainIncludes / rangeIncludes
              (не строгое domain/range, как в RDFS)
```

**Ключевые точки стыковки** (что важно понять из сводки):

- **RDF — фундамент**, RDFS добавляет базовые классы и предикаты, OWL надстраивает над RDFS выразительность (ограничения, кардинальности, сложные классы через union/intersection).
- **Schema.org — это просто большая иерархия `rdfs:Class`/`rdfs:Property`** поверх RDF: её можно смешивать с OWL в одном документе, и стандартные Reason'еры поймут и то, и другое.
- **`owl:Thing` не то же самое, что `schema:Thing`**: первый — это «всё, что существует» в онтологии; второй — «всё, что имеет тип в Schema.org» (корень их таксономии, сам — экземпляр `rdfs:Class`).
- **`rdf:Resource` шире, чем `owl:Thing`**: `owl:Thing` покрывает только индивиды, а `rdf:Resource` — вообще всё, включая классы, свойства и литералы.

Хотите, я разверну какую-то ветку подробнее — например, полную иерархию типов Schema.org до третьего уровня или различия OWL 1 vs OWL 2 по этим конструкциям?
