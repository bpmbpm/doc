## link
- https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2
- https://ailev.livejournal.com/516389.html 9. Современные онтологии подразумевают не только описание понятий, но и описание их связей (правила).
- https://wiki.bitplan.com/index.php/Upper_Ontology ; https://inariksit.github.io/cclaw-zettelkasten/top_ontology_domain_ontologies.html
## 1
Приведи полное дерево иерархии до Персона \ Человек в SUMO, BFO, DOLCE.  
Аналогично сделай для Процесс.

Соберу материалы по всем трём онтологиям — уже есть хорошие источники по DOLCE и BFO, теперь уточню ветку Process в SUMO и точный состав классов BFO 2.0.
Отличная задача для проверки того, как по-разному можно «нарезать» реальность. Сначала — два дерева по каждой онтологии, потом сводная таблица и объяснение причин расхождений.

## 1. Персона / Человек (Person / Human)

### SUMO — путь вниз и «соседи» человека

Человек в SUMO наследуется сразу по двум ветвям — это **множественное наследование**, и это принципиальный момент: [```35```](https://sourceforge.net/p/sigmakee/mailman/message/399400/)

```
Entity (Сущность)
└── Physical (Физическое) — существует в пространстве-времени
    └── Object (Объект)
        │
        ├── ВЕТВЬ 1: агентивная
        │   Agent (Агент)
        │   └── SentientAgent (Одушевлённый агент)
        │       └── CognitiveAgent (Когнитивный агент)
        │           └── Human (Человек)  ⬅
        │               ├── Man (Мужчина)
        │               └── Woman (Женщина)
        │               + (также: HumanSlave и др. ролевые классы)
        │
        └── ВЕТВЬ 2: биологическая
            SelfConnectedObject (Связный объект)
            └── CorpuscularObject (Корпускулярный объект)
                └── OrganicObject (Органический объект)
                    └── Organism (Организм)
                        ├── Plant (Растение)
                        ├── Microorganism (Микроорганизм)
                        └── Animal (Животное)
                            └── Vertebrate (Позвоночное)
                                └── WarmBloodedVertebrate (Теплокровное позвоночное)
                                    └── Mammal (Млекопитающее)
                                        └── Primate (Примат)
                                            └── Hominid (Гоминид)
                                                └── Human (Человек)  ⬅ тот же класс
```

`Organism` при этом одновременно подкласс и `OrganicObject`, и `Agent`, а его подклассы образуют разбиение Animal / Plant / Microorganism. `CognitiveAgent` определяется как одушевлённый агент с ответственностью и способностью рассуждать — фактически юридическо-этическое понятие «персоны»; им может быть и не-человек (шимпанзе, дельфин). [```41```](https://micra.com/ontolog/skiftab/SUMO155a.txt)[```1```](https://www.site.uottawa.ca/~tcl/factguru1/sumo/CognitiveAgent.html)

### BFO — путь вниз, но без класса «человек»

```
Entity (Сущность)  [BFO_0000001]
└── Continuant (Континуант) — существует «целиком», не течёт во времени
    ├── Independent Continuant (Независимый континуант)
    │   ├── Material Entity (Материальная сущность)  ⬅ «человек» — её пример в спецификации
    │   │   ├── Object (Объект) ⬅ сюда попадает организм/человек — носитель причинного единства
    │   │   ├── Fiat Object Part (Часть объекта с фиатными границами)
    │   │   └── Object Aggregate (Множество объектов) — толпа, совокупность людей
    │   └── Immaterial Entity (Нематериальная сущность)
    │       ├── Site (Место)
    │       └── Continuant Fiat Boundary (Фиатная граница: 0-, 1-, 2-мерная)
    ├── Specifically Dependent Continuant (Континуант со специфической зависимостью)
    │   ├── Quality (Качество — цвет, масса)
    │   └── Realizable Entity (Реализуемая сущность)
    │       ├── Disposition (Диспозиция) → Function (Функция)
    │       └── Role (Роль)
    └── Generically Dependent Continuant (Континуант с общей зависимостью — текст, мелодия)
```

Важный нюанс: в самой BFO класса **Human / Person нет и не должно быть** — это минимальная «рамочная» онтология, а конкретные биологические классы (Homo sapiens, organism) спускают в неё из доменных онтологий типа NCBI Taxon и OBO. Примеры в спецификации прямо говорят: material entity — это «человек, неотделённая рука человека, совокупность людей», а object — «организм». [```7```](https://gostassistent.ru/doc/d501516d-d557-4685-9c43-7284678f9d1e)

### DOLCE — путь вниз

```
Particular (Партикуляр — конкретный индивид)
└── Endurant (Эндурант — сущность, длящаяся во времени)
    ├── Physical Endurant (Физический эндурант)
    │   ├── Amount of Matter (Количество материи — «вода из графина»)
    │   ├── Feature (Признак-часть — гравий, капюшон)
    │   └── Physical Object (Физический объект)
    │       ├── Non-Agentive Physical Object (Не-агентивный физический объект)
    │       │   — дома, органы тела, куски дерева
    │       └── Agentive Physical Object (Агентивный физический объект) ⬅ Person
    │           — люди, роботы: намерения, верования, желания
    └── Non-Physical Endurant (Нефизический эндурант)
        ├── Mental Object (Ментальный объект)
        └── Social Object (Социальный объект)
            ├── Agentive Social Object (Агентивный социальный объект)
            │   — Social Agent, организации; «персона» в социально-правовом смысле
            └── Non-Agentive Social Object (Не-агентивный социальный объект)
                — цены, правовые нормы
```

Ключевая идея DOLCE: **человек (APO) конституирован организмом, но не сводится к нему** — организмы не-агентивны, а агентивность — это способность иметь намерения. Поэтому «кто-то человек» и «кто-то персона в обществе» могут разводиться по двум ветвям: физической и социальной. [```11```](http://www.loa-cnr.it/Papers/AIMag24-03-003.pdf)

## 2. Процесс (Process)

### SUMO

```
Entity (Сущность)
└── Physical (Физическое)
    ├── Object (Объект) — «континуальная» половина, disjoint с Process
    └── Process (Процесс) ⬅
        ├── Change (Изменение)
        │   ├── InternalChange (Внутреннее изменение)
        │   │   └── Growth (Рост)
        │   ├── CreationOrDestruction (Созидание или разрушение)
        │   │   ├── Creation (Созидание)
        │   │   └── Destruction (Разрушение)
        │   └── ShapeChange (Изменение формы)
        ├── Motion (Движение)
        ├── Radiating (Излучение — свет, тепло)
        ├── StateChange (Изменение состояния — плавление, замерзание)
        ├── DualObjectProcess (Процесс с двумя объектами — разделяемый агентом)
        │   ├── Combining (Соединение)
        │   ├── Separating (Разделение)
        │   ├── Attachment (Прикрепление)
        │   └── Detaching (Отсоединение)
        └── IntentionalProcess (Целенаправленный процесс)
            ├── Communication (Коммуникация)
            ├── SocialInteraction (Социальное взаимодействие)
            └── InstitutionalProcess (Институциональный процесс — юридические акты)
```

Разделение Object и Process — вторичное, после Primary-раскола на Physical и Abstract; многие подклассы Process выросли из лексики глаголов Левина. [```2```](https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2)[```16```](https://ontologyportal.org/SUMOhistory/SUMO1.33.txt)

### BFO 2.0

```
Entity (Сущность)
└── Occurrent (Оккурент) — разворачивается во времени [BFO_0000003]
    ├── Process (Процесс) ⬅
    │   ├── History (История — жизнь организма как процесс)
    │   └── Process Profile (Профиль процесса — гранулярная «линия» внутри процесса)
    ├── Process Boundary (Граница процесса — начало или конец процесса)
    ├── Temporal Region (Временной регион)
    │   ├── Connected Temporal Region (Связный временной регион)
    │   │   ├── Temporal Instant (Временной момент)
    │   │   └── Temporal Interval (Временной интервал)
    │   └── Scattered Temporal Region (Разрозненный временной регион)
    └── Spatiotemporal Region (Пространственно-временной регион)
        ├── Connected Spatiotemporal Region (Связный ПВ-регион)
        │   ├── Spatiotemporal Instant (ПВ-момент)
        │   └── Spatiotemporal Interval (ПВ-интервал)
        └── Scattered Spatiotemporal Region (Разрозненный ПВ-регион)
```

Здесь оккуренты — это не только сами процессы, но и их границы, а также регионы, в которых они располагаются: «процессы, границы процессов, пространственно-временные и временные регионы». Пример из спецификации: операция — процесс, в контексте которого разворачивается инфекция; жизнь организма — тоже процесс. [```30```](https://wiki.iaoa.org/index.php/Edu:Occurrent)[```9```](https://journals.kantiana.ru/upload/iblock/f29/%D0%9B%D0%BE%D0%B1%D0%B0%D0%BD%D0%BE%D0%B2_126-143.pdf)

### DOLCE

```
Perdurant (Пердурант — сущность, происходящая во времени)
├── Eventive (Эвентивный тип — НЕ кумулятивный: сумма двух событий не есть то же событие)
│   ├── Achievement (Достижение — атомарное событие: «прибыть»)
│   └── Accomplishment (Деятельность с итогом — «построить дом»)
├── Stative (Стативный тип — кумулятивный: сумма двух штативов того же типа)
│   ├── State (Состояние — кумулятивный и гомеомерный: «сидеть»)
│   └── Process (Процесс) ⬅ кумулятивный, но НЕ гомеомерный: «бежать»
└── (структурно PD в аксиоматике — дизъюнктное объединение Event и Stative)
```

Это самое неочевидное место трёх онтологий: в DOLCE процесс — не «активность», а **кумулятивный, но негомеомерный пердурант**: у бега есть короткие части, не являющиеся бегом, поэтому он процесс, а не состояние. Классификация восходит к лингвистической таксономии Вендлера. [```11```](http://www.loa-cnr.it/Papers/AIMag24-03-003.pdf)[```13```](https://arxiv.org/pdf/2308.01597)

## 3. Сводная таблица

| | SUMO | BFO | DOLCE |
|---|---|---|---|
| **Вершина** | Entity | Entity | Particular |
| **Главный разлом** | Physical ↔ Abstract (вторично: Object ↔ Process) | Continuant ↔ Occurrent | Endurant ↔ Perdurant ↔ Quality ↔ Abstract |
| **Где «человек»** | Human — двойное наследование: CognitiveAgent + Hominid | Отсутствует в ядре; человек — Material Entity / Object, классы спускаются из OBO-онтологий | Agentive Physical Object (+ Social Agent для социальной роли) |
| **Где «процесс»** | Прямой наследник Physical, «акторно-прагматичный» список | Ядро ветви Occurrent: Process + границы и регионы | Stative-пердурант, задан лингвистически (кумулятивность/гомеомерность) |
| **Допускает множественное наследование** | Да, активно | Нет, жёсткая аксиоматика (непересекающиеся ветви) | Нет, один узкий путь |
| **Ориентация** | Инженерная, поддержка вывода и WordNet | Реалистская, для науки (OBO Foundry) | Когнитивная, «как человек говорит и мыслит» |

## 4. Почему деревья расходятся

**SUMO проектируется прагматично**: цель — совместимость программ рассуждения и покрытие лексики (WordNet). Поэтому у человека две «легитимные» родовые ветви сразу: биологическая (`Hominid` → приматы) и интенциональная (`CognitiveAgent`) — обе полезны, конфликтовать не обязательно. Первый разлом Physical/Abstract здесь важнее, чем Object/Process. [```35```](https://sourceforge.net/p/sigmakee/mailman/message/399400/)[```2```](https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2)

**BFO — реалистская философия науки**: онтология описывает универсалии реального мира, а не понятия в головах. Отсюда предельная скупость: в ядре нет ни «человека», ни «организации» — их приносят доменные онтологии методом «спуска вниз» (downward population). Зато разлом Continuant/Occurrent проведён жёстко и без исключений — это её визитная карточка. [```6```](https://en.wikipedia.org/wiki/Basic_Formal_Ontology)

**DOLCE — когнитивная, дескриптивная установка**: её категории должны отражать здравый смысл и язык, а не «интимную природу мира». Поэтому человек — это «агентивный физический объект» (критерий — намерения и желания, а не таксономия приматов), а «процесс» определяется через лингвистические тесты кумулятивности и гомеомерности, и в этой системе «бег» — процесс, «сидение» — состояние, а «построить дом» — уже событие, а не процесс. [```11```](http://www.loa-cnr.it/Papers/AIMag24-03-003.pdf)

Итого: один и тот же человек в SUMO — примат и когнитивный агент одновременно, в BFO — просто материальный объект, нуждающийся в доменной надстройке, в DOLCE — физический носитель интенциональности. Это не противоречие, а три разных «проекционных критерия»: инженерный, научный и лингвистический.

Если интересно, могу так же разложить четвёртую точку зрения — например, GFO или онтологию Совы, где раскол идёт уже иначе (Continuant/Process у Совы вообще без качества отдельной ветви).

## 2
нет Person? Как тогда в них задать Алиса есть персона (человек)?

Хорошие уточняющие вопросы. Проверю пару спорных мест: иерархию Person в OpenCyc, верхний уровень Совы и то, как корректно «заводить» конкретного человека в BFO.
Уточню ещё несколько моментов: определение Person в DUL (DOLCE+DnS Ultralight), иерархию Person в Cyc и рабочие ссылки для просмотра веток.
Теперь проверю иерархию вокруг Person в Cyc — это ключевое место, где Cyc как раз различает Person и Homo sapiens.
Ещё один заход: посмотрю страницу агентов у Совы и архивные страницы OpenCyc для Person.
Осталось собрать рабочие ссылки для просмотра веток (Ontobee, LOA, OpenCyc) — сделаю последний заход.
Последний штрих — прямые ссылки на BFO-спеку и OpenCyc-таксономию:
Да, всё верно: **в ядре BFO и DOLCE класса Person/Human нет** — и это не дыра, а принципиальное проектное решение. Но утверждение «Алиса — персона» в них выразить можно, и сейчас покажу как, заодно закрою корень DOLCE и добавлю Сову с OpenCyc.

## 1. Как в BFO и DOLCE записать «Алиса есть персона»

**BFO.** BFO доменно-нейтральна по построению: в ней нет физических, химических и биологических терминов, они приходят из доменных онтологий методом «спуска вниз» (downward population). Человек в практике OBO — это класс `Homo sapiens` из NCBI Taxonomy, размещённый под `BFO:Object`. Поэтому каноническая запись: [```80```](https://github.com/BFO-ontology/BFO)[```36```](https://arxiv.org/abs/2411.16609)[```34```](https://www.researchgate.net/publication/386144523_F_--_A_Model_of_Events_based_on_the_Foundational_Ontology_DOLCEDnS_Ultralite)

```
Alisa rdf:type obo:NCBITaxon_9606    ; Homo sapiens, подкласс BFO:Object (BFO_0000030)
```

Если нужна именно «персона» в социально-правовом смысле — это уже **Role** (`BFO_0000023`, зависимая сущность, реализуемая в социальных процессах), как это делают, например, в OMRSE с социальными ролями: [```34```](https://www.researchgate.net/publication/386144523_F_--_A_Model_of_Events_based_on_the_Foundational_Ontology_DOLCEDnS_Ultralite)

```
Alisa bearer-of :PersonRole   ; :PersonRole ⊑ BFO:Role, реализуется в социальных процессах
```

**DOLCE.** В ядре DOLCE «персона» намеренно расщеплена на два класса: человек как физический носитель интенций — `AgentivePhysicalObject` (APO), а «персона» как социальный статус (юридическое лицо, член организации) — `AgentiveSocialObject` (ASO). Напрямую:

```
Alisa rdf:type dolce:AgentivePhysicalObject
```

А в рабочей OWL-версии DOLCE — **DOLCE+DnS Ultralight (DUL)** — есть готовый класс `dul:Person`: это «здравосмысленный гибрид» APO и ASO, ровно чтобы не выбирать между телом и социальным статусом: [```34```](https://www.researchgate.net/publication/386144523_F_--_A_Model_of_Events_based_on_the_Foundational_Ontology_DOLCEDnS_Ultralite)[```32```](https://spice-h2020.eu/document/deliverable/D6.2.pdf)

```
Alisa rdf:type dul:Person
```

Для сравнения: в Cyc `Person` — первоклассный термин, и там различие между биологией и социальной персоной решено иначе — см. ниже.

## 2. DOLCE: корень целиком

Действительно, в прошлом ответе я показал дерево от Endurant. Полная вертикаль такая: DOLCE — онтология **партикуляров** (конкретных индивидов, а не универсалий), и у неё четыре верхних категории: [```14```](http://www.loa-cnr.it/Papers/D07_v21a.pdf)

```
Particular (Партикуляр — конкретный индивид)
├── Spatio-temporal Particular (существует в пространстве-времени)
│   ├── Endurant (эндурант — «целиком присутствует» в любой момент)
│   │   ├── Physical Endurant
│   │   │   ├── Amount of Matter (количество материи)
│   │   │   ├── Feature (признак-часть)
│   │   │   └── Physical Object
│   │   │       ├── Non-Agentive Physical Object (организмы, вещи)
│   │   │       └── Agentive Physical Object ⬅ «Алиса-человек»
│   │   └── Non-Physical Endurant
│   │       ├── Mental Object (мысли, гипотезы)
│   │       └── Social Object
│   │           ├── Agentive Social Object ⬅ «Алиса-персона» как соц. статус
│   │           └── Non-Agentive Social Object (цены, законы)
│   ├── Perdurant (пердурант — «частично присутствует»)
│   │   ├── Eventive: Achievement / Accomplishment
│   │   └── Stative: State / Process
│   └── Quality (качество) → Physical / Temporal / Abstract Quality
└── Abstract (абстракции: множества, регионы качеств — quale)
```

Нюанс: в OWL-версии DOLCE-Lite верхнее разбиение упрощено до пары «Abstract ↔ Spatio-temporal Particular», а Endurant/Perdurant/Quality — под последним. Примеры эндурантов в DOLCE — «таблица, человек, кот»; пердурантов — «теннисный матч, лекция». [```11```](https://www.researchgate.net/publication/382718938_Choosing_the_Sweet_Life_with_DOLCE)[```15```](https://arxiv.org/pdf/2308.01597)

## 3. Онтология Джона Совы (KR Ontology)

Это не дерево, а **решётка** (lattice), построенная из девяти примитивов: триада Пирса *Independent / Relative / Mediating*, дихотомия *Physical / Abstract* и дихотомия *Continuant / Occurrent*: [```9```](https://jfsowa.com/ontology/toplevel.htm)[```8```](https://www.academia.edu/537206/Categories_The_top_level_ontology)

```
Entity (T)                     ⊥ (Absurdity — противоречивый ноль)
├── Independent (I) — самостоятельное
├── Relative (R)   — связанное с чем-то
├── Mediating (M)  — связывающее другое
├── Physical (P)   / Abstract (A)
└── Continuant (C) / Occurrent (O)
```

Из пересечений примитивов получаются **12 центральных категорий** — «алмаз Совы»: [```9```](https://jfsowa.com/ontology/toplevel.htm)

| | Independent | Relative | Mediating |
|---|---|---|---|
| **Physical Continuant** | Object (IPC) | Juncture (RPC) | Structure (MPC) |
| **Physical Occurrent** | Process (IPO) | Participation (RPO) | Situation (MPO) |
| **Abstract Continuant** | Schema (IAC) | Description (RAC) | Reason (MAC) |
| **Abstract Occurrent** | Script (IAO) | History (RAO) | Purpose (MAO) |

**Person.** На верхнем уровне отдельного класса нет: человек — это `Object (IPC)` (актуальность, сохраняющая тождество во времени). Агентность у Совы — отдельная тема: агент определяется как «одушевлённая сущность, способная что-то делать намеренно», и это определение намеренно охватывает людей, животных, роботов и софтботов. Средний уровень (LivingThing → Human и т. п.) в KR Ontology не зафиксирован жёстко — иерархия генерируется из набора различений под конкретное приложение. «Алиса есть человек» здесь — `Alisa: Object`, плюс агентная интерпретация. [```9```](https://jfsowa.com/ontology/toplevel.htm)[```59```](https://jfsowa.com/ontology/agents.htm)[```31```](https://jfsowa.com/ontology/)

**Process.** У Совы `Process (IPO) = Actuality ∩ Occurrent` — сам класс определяется уже через два примитива; подчёркивается, что один и тот же объект (даже бриллиант) при разном масштабе может рассматриваться как объект или как процесс. Дальше идут различения непрерывных/дискретных процессов и каузальности (страница Processes и Causality). [```9```](https://jfsowa.com/ontology/toplevel.htm)[```59```](https://jfsowa.com/ontology/agents.htm)

## 4. OpenCyc

Cyc — самая «энциклопедическая» из пяти: цель — здравый смысл, а не философия. Таксономия Cyc — тоже решётка с множественным наследованием, узлы — коллекции, связи — `isa`/`genls`. Верхняя часть (схематично): [```26```](https://en.wikipedia.org/wiki/Cyc)[```49```](https://cybernetics.fandom.com/ru/wiki/Cyc)

```
Thing
├── MathematicalOrComputationalThing (математика, формулы, программы)
└── SomethingExisting (существует во времени)
    ├── PartiallyIntangible (частично нематериальное)
    └── PartiallyTangible (частично материальное)
        └── SpatiallyDistributedObject → OrganicObject → Animal → ... 
```

**Person.** Здесь интересней всего: Cyc держит **две параллельные коллекции** — биологическую и здравосмысленную:

```
Animal ────────► ... ──► HomoSapiens ⊑ BiologicalSpecies (биологический вид)
PartiallyHuman (лица И группы людей)
   └── Person ⬅ (genls #$Person #$Animal — подтверждается напрямую)
         ├── HumanAdult (взрослый человек — типичный агент)
         ├── HumanChild
         └── HumanBaby
```

То есть `#$Person` — это здравосмысленная/социальная коллекция (наследуется и от Animal, и от PartiallyHuman, чьи члены — либо люди, либо группы людей), а `#$HomoSapiens` — строго биологический вид, и Cyc не отождествляет их через `genls`, а связывает косвенно. Запись:

```cyc
(isa Alisa #$Person)
(isa Alisa #$HumanAdult)          ; если хочется уточнить
```

**Process.** В Cyc события живут под временной ветвью `SomethingExisting` → `TemporalThing`, которая делится на `StaticThing` (состояния) и `Event` (события); внутри `Event` есть `PhysicalEvent`, `SocialEvent`, `StateChangeEvent` и `Process` — цепочку родовителей Cyc всегда досчитывает сам по `genls`-утверждениям, полной статической картинки «дерева» у него нет в принципе. Схему я привожу по ключевым коллекциям — точную ветку легко проверить в OWL-дампе (ссылка ниже).

## 5. Обновлённая сводная таблица

| | SUMO | BFO | DOLCE | Sowa | OpenCyc |
|---|---|---|---|---|---|
| **Корень** | Entity | Entity | Particular | Entity (T), 9 примитивов | Thing |
| **Главный разлом** | Physical ↔ Abstract | Continuant ↔ Occurrent | Endurant ↔ Perdurant ↔ Quality ↔ Abstract | 3 дихотомии × трихотомия → решётка | Мат./немат. + здравый смысл |
| **Где «человек»** | Human (двойное наследование) | Нет в ядре; NCBITaxon под Object | APO (+ ASO); в DUL — `Person` | Object (IPC) + агентность | `Person` — первоклассная коллекция |
| **Где «процесс»** | Прямой наследник Physical | Ядро ветви Occurrent | Stative-пердурант (кумулятивный) | Process (IPO) — пересечение примитивов | Event / Process в TemporalThing |
| **Ориентация** | Инженерная, вывод | Реалистская, наука | Когнитивная, язык | Семиотика Пирса + лингвистика | Энциклопедия здравого смысла |

## 6. Где смотреть эти ветки

- **SUMO**: интерактивный браузер Sigma — [Sigma Knowledge Base Browser](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO), адрес конкретного термина строится по шаблону `...Browse.jsp?kb=SUMO&term=Human` (или `&term=Process`); исходники — [репозиторий sumo](https://www.researchgate.net/publication/338935289_Aligning_Conference_Ontologies_with_SUMO_A_Report_on_Manual_Alignment_via_WordNet).
- **BFO**: официальный [репозиторий со спецификацией и User's Guide](https://github.com/BFO-ontology/BFO); иерархия BFO 2020 с определениями на русском — в [ГОСТ Р 59798-2021](https://docs.cntd.ru/document/1200181577); для визуального просмотра терминов стандартный инструмент OBO — Ontobee (`ontobee.org/ontology/BFO`). [```72```](https://www.researchgate.net/publication/309153173_Ontobee_A_linked_ontology_data_server_to_support_ontology_term_dereferencing_linkage_query_and_integration)
- **DOLCE**: страница модуля со скачиванием OWL-версий — [LOA / DOLCE](http://www.loa-cnr.it/DOLCE.html); файл `DOLCE-Lite.owl` лежит на сайте LOA (сейчас loa.istc.cnr.it/ontologies); DUL доступен как `DUL.owl` через Ontology Design Patterns. [```74```](https://datascience.codata.org/articles/10.5334/dsj-2025-023)
- **Sowa**: [Top-Level Categories с «алмазом» и аксиомами](https://jfsowa.com/ontology/toplevel.htm) и [индекс всей KR Ontology](https://jfsowa.com/ontology/).
- **OpenCyc**: онлайн-браузер sw.opencyc.org закрыт вместе с самим OpenCyc в 2017 году, но копии страниц есть в web.archive.org, а сам дамп OpenCyc 4.0 (239 тыс. терминов) — [на SourceForge](https://sourceforge.net/projects/opencyc/); для ResearchCyc у Cycorp есть документация API на GitHub. [```26```](https://en.wikipedia.org/wiki/Cyc)[```30```](https://github.com/AndrewSmart/opencyc)

Забавный итог: по вопросу «есть ли Person» четыре онтологии дают четыре разных стратегии — «принесите класс извне» (BFO), «расщепите и объедините снаружи» (DOLCE/DUL), «задайте критерий агентности» (Sowa) и «имейте обе коллекции и не путайте» (Cyc). Если хотите, следующим шагом могу показать, как эти четыре записи про Алису сшиваются друг с другом — то есть конкретные правила маппинга `dul:Person ↔ NCBITaxon_9606 ↔ #$Person`.

№№ 3

Приведи примеры других онтологий, где есть Person или Human

Соберу проверенные примеры: уточню точные IRI классов Person в FIBO, UFO и NCI Thesaurus, чтобы код в ответе был корректным.
Здесь картинка проще, чем с фундаментальными онтологиями: почти все прикладные схемы — RDF/OWL, и объявление всегда одно и то же — тройка `субъект rdf:type класс`, различается только сам класс и то, что он «умеет». Пройдусь по семи разным экосистемам.

## 1. FOAF — социальный веб

Класс `foaf:Person` («natural person»), подкласс `foaf:Agent`; типичное связывание через профиль и свойства: [spec FOAF](https://xmlns.com/foaf/spec/)

```turtle
@prefix foaf: <http://xmlns.com/foaf/0.1/> .

<http://example.org/people/alisa>
    a foaf:Person ;
    foaf:name "Алиса" ;
    foaf:mbox <mailto:alisa@example.org> .
```

## 2. schema.org — разметка страниц

Тот же паттерн, но в JSON-LD, которым размечают сайты поисковики: [schema.org/Person](https://schema.org/Person)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Алиса",
  "birthDate": "1990-05-14"
}
```

## 3. PROV-O — происхождение данных

Здесь `prov:Person` — подкласс `prov:Agent`, а тот — подкласс `prov:Entity`; «персона» явно встроена в ветку участников процесса порождения данных: [W3C PROV-O](https://www.w3.org/TR/prov-o/)

```turtle
@prefix prov: <http://www.w3.org/ns/prov#> .
@prefix ex:   <http://example.org/> .

ex:alisa a prov:Person .
ex:report prov:wasAttributedTo ex:alisa .
```

## 4. CIDOC CRM — культурное наследие

Двусловный кодовый класс: `E21_Person`, подкласс `E39_Actor`. Определение широкое — «кто реальный или воображаемый, кто мог бы быть участником события», так что сюда осознанно попадают и литературные герои: [CIDOC CRM](https://cidoc-crm.org/)

```turtle
@prefix crm: <http://www.cidoc-crm.org/cidoc-crm/> .

<http://data.example.org/person/alisa>
    a crm:E21_Person ;
    rdfs:label "Алиса" .
```

## 5. DBpedia и Wikidata — графы знаний

В DBpedia тип под `dbo:Person` (`dbo:Human` — его подкласс):

```turtle
dbr:Alisa a dbo:Person .
```

В Wikidata чуть тоньше: там различают «person» (Q215627 — общий класс персоны, включая юридических) и «human» (Q5) — официальная рекомендация для людей использовать именно Q5 через свойство P31: [```wikidata.org```](https://www.wikidata.org/wiki/Q215627)

```turtle
wd:Q123456 p:P31 wd:Q5 .   # «это экземпляр человека»
```

## 6. NCI Thesaurus — биомедицинская ветка (BFO-экосистема)

Класс `ncit:C25190` («Person») и `ncit:C14225` («Homo sapiens»); NCIt публикуется в OWL и используется как эталонная терминология в биомедицине: [```nci.nih.gov```](https://wiki.nci.nih.gov/spaces/EVS/pages/7472532/NCI+Thesaurus+NCIt)

```turtle
@prefix ncit: <http://ncicb.nci.nih.gov/xml/owl/EVS/Thesaurus.owl#> .

:Alisa a ncit:C14225 .   # экземпляр Homo sapiens
# или a ncit:C25190 — если типируется как «персона» вообще
```

## 7. FIBO — финансовая индустрия

Класс `fibo-fnd-aap-ppl:Person` — «individual human being, with consciousness of self», синоним «natural person»; вокруг него специализируются юридически значимые классы вроде `LegallyCapableAdult` — «лицо, достигшее возраста большинства в юрисдикции»: [```inferal.com```](https://ontology.inferal.com/imports/fibo/FND/AgentsAndPeople/People.ttl)

```turtle
@prefix ppl: <https://spec.edmcouncil.org/fibo/ontology/FND/AgentsAndPeople/People/> .

:Alisa a ppl:Person .
# при необходимости: :Alisa a ppl:LegallyCapableAdult .
```

Просматривается через [спек-браузер EDM Council](https://spec.edmcouncil.org/fibo/ontology/FND/AgentsAndPeople/People/).

## 8. gUFO (UFO/OntoUML) — с метатипом

Самый изощрённый случай: класс `:Person` типируется **дважды** — как подкласс `gufo:Object` (это его онтологическая природа) и как экземпляр `gufo:Kind` (метатип «жёсткий сортал», принцип тождественности). Приём называется OWL 2 punning — один и тот же IRI играет роль и класса, и индивида: [```arxiv.org```](https://arxiv.org/pdf/2603.20948)[```nemo.inf.ufes.br```](https://nemo.inf.ufes.br/files/jpalmeida-tpsales-ontobras-2021-gufo-tutorial-v1.0.pdf)

```turtle
:Person  rdfs:subClassOf gufo:Object ;
         rdf:type gufo:Kind .

:Alisa   a :Person .

:Student a :PersonRole ;      # роль — антиригидный класс
         rdfs:subClassOf :Person .
:Alisa   a :Student .          # Алиса может перестать быть студентом,
                               # но не может перестать быть персоной
```

## Сводка: одно объявление, семь сигнатур

| Онтология | Класс | IRI класса | Объявление экземпляра |
|---|---|---|---|
| FOAF | `foaf:Person` | строчный префикс, CamelCase | `x a foaf:Person` |
| schema.org | `schema:Person` | строчные, словарь для веба | `"@type": "Person"` |
| PROV-O | `prov:Person ⊑ prov:Agent` | W3C-namespace | `x a prov:Person` |
| CIDOC CRM | `E21_Person ⊑ E39_Actor` | кодовые классы (E21) | `x a crm:E21_Person` |
| Wikidata | Q5 (human) | цифровые коды | `P31 → Q5` |
| NCIt | `C25190` / `C14225` | цифровые коды | `x a ncit:C25190` |
| FIBO | `ppl:Person` | длинные композитные префиксы | `x a ppl:Person` |
| gUFO | `:Person a gufo:Kind` | свой префикс + метатип | `x a :Person` |

Два практических вывода. Во-первых, на практике один и тот же ресурс часто типируют **несколькими типами сразу** — это нормальный способ сшить экосистемы: `:Alisa a foaf:Person, prov:Agent, dbo:Person`. Во-вторых, обратите внимание на расщепление «human vs person», которое повторяется снова и снова: Wikidata (Q5 vs Q215627), FIBO (Person vs юридически способные подклассы), DOLCE (APO vs ASO), Cyc (HomoSapiens vs Person) — прикладные онтологии независимо переизобрели ту же пару различений, что я показывал в фундаментальных.

Если хотите, могу показать, как одно и то же лицо «переезжает» между этими схемами: например, полный профиль Алисы с совмещёнными типами и правилами эквивалентности `foaf:Person ≈ schema:Person ≈ dbo:Person` — это частая реальная задача в интеграции данных.
