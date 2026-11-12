## 1
Для верхнеуровневых онтологий я ожидал увидеть (в части Person) 
- BFO Entity → Continuant → Independent Continuant → Material Entity → Object → Person
- DOLCE / DUL Entity → Endurant → PhysicalEndurant → PhysicalObject → AgentivePhysicalObject → Person
- Cyc Thing → PartiallyTangible → Agent-Generic → Person 


Справедливый вопрос — тут есть и моя недоработка, и важное методологическое различие, которое стоит показать явно. Проверю фактические сверхклассы `Person` в DUL, ветку `Agent-Generic` в Cyc и кто именно рисует хвост `… → Person` в BFO-экосистеме.
DUL.owl с первого захода не отдался, пробую снова, а для Cyc — архивную страницу термина `#$Person` (её известный идентификатор Mx4rvViRL5wpEbGdrcN5Y29ycA):
Оба прямых захвата пусты — иду через поиск:
Cyc-ветку подтверждаю (в списке `genls` у животных из OpenCyc прямо видны `#$Agent-Generic`, `#$PerceptualAgent`, `#$Organism-Whole`, `#$PartiallyTangible` — [```daxtron.com```](https://www.daxtron.com/SpecialAITools.html)). Осталось подтвердить сверхклассы `dul:Person` — пробую зеркало онтологии:
Термин `dul:Person` подтверждён («persons in commonsense intuition», активно используется в OKE Challenge — [```researchgate.net```](https://www.researchgate.net/publication/288981586_Open_Knowledge_Extraction_Challenge)). Пробую достать точные сверхклассы из старого адреса на LOA и OntoBee:
Честный ответ — по трём причинам, из которых одна моя, а две принципиальные:

1. **В BFO и ядре DOLCE класса Person действительно нет** — я сознательно оборвал ветку на `Object` и `AgentivePhysicalObject`, потому что это фактический конец ядра. Хвост «→ Person» принадлежит не этим онтологиям, а конкретным OWL-артефактам, построенным на их основе.
2. **Цепочки, которые вы написали, — это смесь разных артефактов**: терминология DOLCE-Lite + термин Person из DUL. В чистом виде их нет ни в одном файле.
3. **DUL-хвост стоило показать**, и тут признаю упущение. Заодно проверил фактический код DUL.owl и обнаружил, что моя прошлая формулировка про «гибрид APO и ASO» требует уточнения. Разбираю всё по цепочкам.

## BFO: цепочка обрывается на Object

Ваша часть до `Person` — точная цепочка ядра BFO 2.0: [```wikipedia.org```](https://en.wikipedia.org/wiki/Basic_Formal_Ontology)

```
Entity (BFO_0000001)
└── Continuant (BFO_0000002)
    └── Independent Continuant (BFO_0000004)
        └── Material Entity (BFO_0000040)
            ├── Object (BFO_0000030) ⬅ конец ядра BFO
            ├── Fiat Object Part, Object Aggregate, Immaterial Entity...
```

Дальше начинается «спуск вниз» (downward population) — и вот где появляется хвост. Канонический пример — **Common Core Ontologies (CCO)**, мид-левел-комплект на BFO: в ранних версиях `cco:Agent ⊑ bfo:Object`, и тогда полный путь такой ([```nist.gov```](https://www.nist.gov/system/files/documents/2021/10/14/nist-ai-rfi-cubrc_inc_004.pdf)):

```
... → Material Entity → Object → Agent → Person
```

А в CCO v1.4 агентную ветку пересадили уровнем выше — `Agent ⊑ BFO_0000040 (Material Entity)` с комментарием, что группы агентов не должны попадать под `Object` ([```pkg.go.dev```](https://pkg.go.dev/github.com/c360studio/semstreams/vocabulary/cco)):

```
... → Material Entity → Agent → Person        (CCO v1.4+)
... → Material Entity → Object → Agent → Person   (CCO ранее)
```

Обратите внимание: даже внутри BFO-экосистемы точка крепления `Person` — предмет дизайнерского решения, и она менялась между версиями CCO. Цепочки «Object → Person» без промежуточного агента я в известных артефактах не встречал; если вы её видели где-то, это была конкретная прикладная онтология, а не BFO.

## DOLCE / DUL: здесь я обязан поправить себя

Проверил фактический исходник [DUL.owl](http://www.loa-cnr.it/ontologies/DUL.owl) — и уточнение важное. В DUL **Person есть**, но устроен не как «двойное наследование от APO и ASO», как я писал раньше, а как **объединение двух отдельных веток** ([```loa-cnr.it```](http://www.loa-cnr.it/ontologies/DUL.owl)):

```xml
<owl:Class rdf:ID="Person">
    <rdfs:subClassOf rdf:resource="#Agent"/>
    <owl:equivalentClass>
        <owl:Class><owl:unionOf rdf:parseType="Collection">
            <owl:Class rdf:ID="NaturalPerson"/>
            <owl:Class rdf:about="#SocialPerson"/>
        </owl:unionOf></owl:Class>
    </owl:equivalentClass>
</owl:Class>
```

Полные пути из DUL.owl ([```loa-cnr.it```](http://www.loa-cnr.it/ontologies/DUL.owl)):

```
Entity (DUL)
└── Object  ≡ PhysicalObject ⊔ SocialObject
    ├── PhysicalObject
    │   └── PhysicalAgent (агентивен, субстрат для SocialAgent)
    │       └── NaturalPerson  ⬅ «человек на улице»
    │           └── (Person ≡ NaturalPerson ⊔ SocialPerson)
    ├── SocialObject
    │   └── SocialAgent
    │       └── SocialPerson ⬅ «персона», действующая через NaturalPerson
    └── Agent ⬅ Person наследует отсюда
```

То есть реальная цепочка DUL для физического человека:

```
Entity → Object → PhysicalObject → PhysicalAgent → NaturalPerson → Person
```

А ваша цепочка «Entity → Endurant → PhysicalEndurant → PhysicalObject → AgentivePhysicalObject → Person» — это гибрид двух артефактов: слова *Endurant / PhysicalEndurant / AgentivePhysicalObject* из терминологии **DOLCE-Lite(-Plus)**, где класса Person нет вовсе (там ближайший аналог — NaturalPerson под AgentivePhysicalObject, причём прямо указано, что агентивные объекты конституированы не-агентивными — [```w3.org```](https://www.w3.org/2001/sw/BestPractices/WNET/DLP3941_daml.html)), а `Person` — уже из DUL, где эта иерархия переименована. Определение в документации честное: «Persons in commonsense intuition» ([```researchgate.net```](https://www.researchgate.net/publication/288981586_Open_Knowledge_Extraction_Challenge)).

## Cyc: ваша цепочка почти верна, но с одной поправкой

Структура такова ([```daxtron.com```](https://www.daxtron.com/SpecialAITools.html)):

```
Thing
├── MathematicalOrComputationalThing
└── SomethingExisting (существует во времени)
    ├── PartiallyIntangible (хотя бы частично нематериальное)
    └── PartiallyTangible (хотя бы частично материальное)
        └── (биологическая ветвь: Organism-Whole → Mammal → ...)
    ...
Agent-Generic (агенты вообще: люди, животные, роботы, организации)
│   └── IndividualAgent, PerceptualAgent, ...
│       └── Person ⬅
│           ├── HumanAdult, HumanChild, HumanBaby
│           └── (HomoSapiens — параллельная биологическая коллекция)
```

Поправка: `#$Agent-Generic` сидит не под `#$PartiallyTangible`, а выше разлома «осязаемое/неосязаемое» — потому что агентом в Cyc считается и организация (она только частично нематериальна), и программный агент. А `#$PartiallyTangible` (и одновременно `#$PartiallyIntangible` — в Cyc человек «тело + разум») Алиса получает по **другим** genls-веткам: в дампе у организмов в списке надколлекций соседствуют и `#$PartiallyTangible`, и `#$PartiallyIntangible`, и `#$Agent-Generic`, и `#$Organism-Whole` ([```daxtron.com```](https://www.daxtron.com/SpecialAITools.html)). Разделение доведено до аксиомы: `#$Person` и `#$NonPersonAnimal` объявлены `disjointWith` в BiologyMt ([```web.archive.org```](https://web.archive.org/web/20091110010118/http://www.cyc.com/cycdoc/walkthroughs/oeintro_cats_frames_long.html)). Точный полный набор надколлекций Cyc считает сам по аксиомам `genls` — в дампе это `(all-genls #$Person)`.

## Сводка: где какая цепочка на самом деле

| Цепочка | Откуда она | Статус |
|---|---|---|
| Entity → Continuant → IC → ME → Object | **BFO 2.0, ядро** | точная, но обрывается на Object |
| … → Object → Agent → Person | **CCO** (ранние версии) | реальная, но это CCO, не BFO |
| … → Material Entity → Agent → Person | **CCO v1.4+** | реальная, крепление изменено |
| Entity → Endurant → PE → PhysObj → APO | **DOLCE-Lite(-Plus)** | терминология верна, Person в конце нет |
| Entity → Object → PhysObj → PhysicalAgent → NaturalPerson → Person | **DUL** | вот это фактический код DUL.owl |
| Thing → PartiallyTangible → Agent-Generic → Person | OpenCyc | Agent-Generic не под PartiallyTangible; вернее: SomethingExisting → Agent-Generic → … → Person |

Мораль та же, что и раньше, только теперь с доказательством: «верхнеуровневая онтология» — это всегда конкретный файл, и цепочка «до Person» есть свойство файла, а не идеи. BFO как идея останавливается на `Object` — и весь хвост до `Person` в любом случае чей-то дизайн-решение, за которое отвечает мид-левел.

Если захотите сверить свою цепочку с какой-то конкретной реализацией, которую вы видели — назовите источник, проверю, чей это файл.

---

## 2
Приведи примеры как можно задать: Алиса есть человек (персона) и ей 10 лет. 

Отличная задача-финиш: тут видно, как одно и то же утверждение «ей 10 лет» превращается в пять разных формализмов. Сначала проверю несколько точных фактов — подклассы Human в SUMO, подклассы Person в CCO и Cyc, и как именно в SUMO и Cyc задаётся возраст.
Хорошие зацепки в результатах (CCO уже подтверждён: `Person` — подкласс `Object` по старой документации NIST/CUBRC, а в актуальной версии — не подкласс `Agent`). Теперь достану первоисточники: точные подклассы `Human` в Merge.kif, структуру `Person` в DUL.owl и возрастные предикаты Cyc.
Данные по DUL, Cyc и CCO собраны. Осталось точно зафиксировать подклассы `Human` в SUMO — достану их из браузера Sigma.
Пробую сырой файл Merge.kif с GitHub:
Ещё один точечный заход по SUMO — проверить, есть ли возрастные подклассы `Human`:
Готово — все пять фундаментальных онтологий + прикладные. Для каждой: утверждение в родной нотации, затем полное дерево до класса с дочерними подклассами. В конце — сквозное наблюдение про то, как каждая онтология «прячет» возраст.

## 1. SUMO — нотация SUO-KIF

```lisp
(instance Alisa Human)
(age Alisa (MeasureFn 10 YearDuration))
```

Предикат `age` — двухаргументный: «the age of %1 is %n %2», а возраст передаётся именно через функцию `MeasureFn` с единицей `YearDuration`; так же его используют аксиомы о совершеннолетии (`ageOfMajorityForProcess`) — [```Chalmers```](https://publications.lib.chalmers.se/records/fulltext/116606.pdf)[```github.com```](https://github.com/ontologyportal/sumo/blob/master/Law.kif). Хитрость: Алиса — не «инстанс Human», а инстанс `Organism`/`Agent`, который принадлежит классу `Human` сразу по двум ветвям.

```
Entity
└── Physical
    └── Object
        ├── ВЕТВЬ АГЕНТНОСТИ
        │   Agent → SentientAgent → CognitiveAgent → Human ⬅
        └── БИОЛОГИЧЕСКАЯ ВЕТВЬ
            SelfConnectedObject → CorpuscularObject → OrganicObject
            → Organism → Animal → Vertebrate → WarmBloodedVertebrate
            → Mammal → Primate → Hominid → Human ⬅ (тот же класс)
                ├── Man      (мужчина)
                └── Woman    (женщина)
```

## 2. BFO (+ CCO) — нотация OWL 2 / Turtle

```turtle
@prefix cco: <http://www.ontologyrepository.com/CommonCoreOntologies/> .
@prefix obo: <http://purl.obolibrary.org/obo/> .

:Alisa a cco:Person .

# возраст — качество, носителем которого является Алиса
:Alisa obo:RO_0000086 :AlisasAge .        # RO:has quality
:AlisasAge a obo:BFO_0000019 ;            # BFO:Quality
    rdfs:comment "10 лет на дату измерения" .
```

Такой паттерн — «качество + измерение» — это как раз то, что CCO делает систематически для веса и роста: он различает то, что измеряется, информацию об измерении, единицы и результат измерения [```arxiv.org```](https://arxiv.org/pdf/2404.17758). В прагматичных проектах часто пишут просто аннотацию с числом, но канонический BFO-способ — именно качество (специфически зависимый континуант), реализуемое в момент измерения.

```
Entity (BFO_0000001)
└── Continuant (BFO_0000002)
    └── Independent Continuant (BFO_0000004)
        └── Material Entity (BFO_0000040)
            ├── Object (BFO_0000030) → Person (CCO) ⬅
            │      (классическая документация CCO: PERSON ⊑ OBJECT)
            └── Agent (CCO) — в текущей версии CCO Agent сидит
                напрямую на Material Entity, а Person — уже НЕ
                подкласс Agent (это видно из маппинга PROV-O) [```pmc.ncbi.nlm.nih.gov```](https://pmc.ncbi.nlm.nih.gov/articles/PMC11833102/)
```

Дочерних подклассов у `Person` в ядре CCO нет — это лист; специализация («гражданин», «работник») делается через **Role** в доменных онтологиях.

## 3. DOLCE / DUL — нотация OWL 2 / Turtle

```turtle
@prefix dul: <http://www.ontologydesignpatterns.org/ont/dul/DUL.owl#> .

:Alisa a dul:Person ;            # Person ≡ NaturalPerson ⊔ SocialPerson
       a dul:NaturalPerson .     # «человек на улице» — физический агент

# возраст в DUL-стиле: качество → точка в качественной шкале
:Alisa dul:hasQuality :AlisasAge .
:AlisasAge a dul:Quality ;
           dul:isQualityOf :Alisa ;
           dul:hasRegion :TenYears .
:TenYears a dul:Region ;                       # точка в «шкале возрастов»
          dul:hasDataValue "10"^^xsd:integer ;
          dul:isRegionFor :AlisasAge .
```

Это фактически повторяет дизайн самой DUL: единицы измерения там концептуализируются как «параметры на регионах, которым приписываются значения типов данных» — я проверил это прямо в [```исходнике DUL.owl```](http://www.loa-cnr.it/ontologies/DUL.owl). Альтернатива — DnS-паттерн: `Situation`, включающая Алису (`dul:isSettingFor`), классифицируемая концептом «10 лет» через `dul:classifies` — тот самый механизм, которым в DUL классифицируют даже простые случаи («Role 'student' classifies a Person 'John'»).

```
Entity
├── Object
│   ├── PhysicalObject
│   │   └── PhysicalAgent
│   │       └── NaturalPerson ⬅ «Алиса как физический носитель»
│   └── SocialObject
│       └── SocialAgent
│           └── SocialPerson ⬅ «Алиса как соц. персона»
│
└── Person ⬅ (⊑ Agent; ≡ NaturalPerson ⊔ SocialPerson)
```

Дочерних подклассов у `Person` в ядре DUL нет — расщепление на две ветки выражено не подклассами, а `unionOf`, а ролевые специализации («студент», «работник») живут в классе `Role`, а не в таксономии.

## 4. OpenCyc — нотация CycL

```cyc
(#$isa Alisa #$Person)
(#$age Alisa 10)
```

Предикат `#$age` — легитимный слот Cyc, и Ленат в «midterm report» специально подчёркивает, что такие предикаты, как `age` и `weight`, нельзя применять к коллекциям, только к индивидам [```researchgate.net```](https://www.researchgate.net/publication/220605124_CYC_A_midterm_report). В реальной базе Cyc значения длительностей оформляются константами (шкалы интервалов), а чаще всего возраст выражают вообще без числа — типизацией коллекцией:

```cyc
(#$isa Alisa #$HumanChild)      ; Cyc сам выведет: isa HumanChild → isa Person
(#$isa Alisa #$FemalePerson)    ; а это просто (#$FemaleFn #$Person) — пример из Upper Cyc Ontology
```

```
Thing
└── SomethingExisting
    ├── PartiallyTangible    ⬅ «телесная» ветвь Алисы
    │   └── … → Animal → Vertebrate → Mammal → … → Person
    ├── PartiallyIntangible  ⬅ «ментальная» ветвь
    └── Agent-Generic        ⬅ «агентная» ветвь
        └── IndividualAgent → PerceptualAgent → … → Person ⬅
            ├── HumanAdult
            ├── HumanChild
            ├── HumanBaby
            ├── FemalePerson  (= (FemaleFn Person))
            └── MalePerson
```

То, что `#$Person` — подколлекция `#$Mammal`/`#$Vertebrate`, — это прямая аксиома из введения в Upper Cyc Ontology: «(#\$forAll ?X (implies (isa ?X #\$Person) (isa ?X #\$Mammal)))» [```cs.auckland.ac.nz```](https://www.cs.auckland.ac.nz/courses/compsci367s1c/resources/cyc.pdf). Полный список надколлекций Cyc не хранит статично — он вычисляет его по аксиомам `genls`.

## 5. Онтология Совы — концептуальные графы

У KR Ontology нет собственной сериализации вроде OWL; родной язык Совы — концептуальные графы (CG):

```
[Person: Alisa]—(Chrc)—>[Age: 10 yr]
```

Здесь `Person` — узел-концепт, а возраст — характеристика через отношение `(Chrc)`. Верхний уровень при этом остаётся решёткой:

```
Entity (T) — решётка из 9 примитивов
└── Object = Actual ∩ Physical ∩ Continuant  (IPC) ⬅ «Алиса»
    (процессное зеркало: Process = Actual ∩ Physical ∩ Occurrent, IPO)
```

Дочерних подклассов у `Person` Совы не фиксирует — средний уровень он сознательно генерирует под конкретное приложение из набора различений; «агентность» задаётся интерпретацией, а не местом в таксономии [```jfsowa.com```](https://jfsowa.com/ontology/toplevel.htm).

## 6. Прикладные онтологии — сводка с возрастом

| Онтология | «Алиса — человек» | «ей 10 лет» |
|---|---|---|
| FOAF | `:Alisa a foaf:Person` | `foaf:age "10"` — единственное прямое числовое свойство |
| schema.org | `"@type": "Person"` | `birthDate: "2016-06-01"` — прямого `age` нет |
| PROV-O | `:Alisa a prov:Person` | возраст не входит; берут из FOAF через выравнивание |
| CIDOC CRM | `:Alisa a crm:E21_Person` | через событие `crm:E67_Birth` и его интервал `P4_has_time-span` |
| Wikidata | `P31 → Q5` | `P569` (дата рождения); возраст не хранят |
| NCIt | `:Alisa a ncit:C14225` | возраст — клинический параметр доменных моделей наблюдений |
| FIBO | `:Alisa a ppl:Person` | пороги возраста — через `LegallyCapableAdult` и т. п., число не хранят |
| gUFO | `:Alisa a :Person` | возраст как `gufo:Aspect` с `inheresIn :Alisa` и датапроперти |

## Что тут общего

Обратите внимание на главный побочный эффект этого сравнения: **«ей 10 лет» — времязависимая истина**, и только FOAF решается хранить её как литерал. SUMO требует фиксации во времени (`holdsDuring`/дата отсчёта), Cyc решает её контекстами и типизацией коллекциями, CIDOC CRM и Wikidata хранят дату рождения и вычисляют возраст, DUL оформляет его как качество со значением в шкале, а BFO-мир — как качество с измерением. Число «10» в серьёзных онтологиях почти всегда мёртвый вес — живёт дата рождения.

Могу следующим шагом собрать всё это в один Turtle-файл: Алиса с совмещёнными типами `dul:Person, cco:Person, foaf:Person, prov:Person` и правилами эквивалентности между ними — тогда получится готовый шаблон для реальной интеграции.

---

## 3

Хороший набор уточнений — тут и терминологическая справка, и разбор двух моих записей. Сначала соберу материал: спеки CycL и концептуальных графов, документацию по связке BFO↔CCO и примеры «Джона/Алисы» в разных формализмах.
Материал по CycL, CG и связке BFO–CCO собран. Остался один заход — примеры одной и той же фразы («Джон/Алиса — человек, возраст N») в разных формализмах, чтобы дать ссылки на сравнительные материалы.
Все четыре вопроса разобраны — по каждому есть проверенные источники.

## 1. CycL: нотация и сериализация

**Базовый синтаксис.** CycL — это префиксная (LISP-подобная) логика: предикаты пишутся перед аргументами в скобках. Константы начинаются с `#$` и чувствительны к регистру, переменные начинаются с `?`:

```lisp
(#$isa #$BillClinton #$UnitedStatesPresident)   ; Билл Клинтон — элемент коллекции президентов США
(#$genls #$Tree-ThePlant #$Plant)                ; все деревья — растения
```

Два главных предиката: `#$isa` («элемент коллекции», как `rdf:type`) и `#$genls` («подколлекция», как `rdfs:subClassOf`). Переменные: `?X`. Правила строятся через `#$implies` и `#$and`, например аксиома транзитивности типизации:

```lisp
(#$implies (#$and (#$isa ?OBJ ?SUBSET) (#$genls ?SUBSET ?SUPERSET))
           (#$isa ?OBJ ?SUPERSET))
```

По соглашению Cyc неявный `#$forAll` можно опускать: свободные переменные считаются универсально квантифицированными. Всё это зафиксировано в [CycL — Wikipedia](https://en.wikipedia.org/wiki/CycL) и во введении к Upper Cyc Ontology. [```4```](https://en.wikipedia.org/wiki/CycL)[```5```](https://www.cs.auckland.ac.nz/courses/compsci367s1c/resources/cyc.pdf)

**Что сверхсинтаксиса.** У каждого утверждения есть атрибуты, которых нет в OWL: **истинностное значение** (`MONOTONIC` — монотонно истинно, `DEFAULT` — истинно по умолчанию, опровергаемо) и **направление** (`FORWARD`/`BACKWARD` — как правило будет использоваться выводчиком). В дампе OpenCyc из ~593 тыс. `#$isa` большинство помечены `DEFAULT` — то есть Cyc по умолчанию немонотонен. Плюс **микротеории**: утверждения живут в контекстах (`BiologyMt`, `EnglishMt`...), а не в одном глобальном пространстве — это принципиальное отличие Cyc от OWL, где онтологий нет, а есть файлы. Нижележащий язык реализации — SubL, подмножество Common Lisp. [```1```](https://github.com/opencog/external-tools/blob/master/cycl-import/README)[```3```](https://www.researchgate.net/profile/Dimitrios-Sklavakis/publication/258340316_Implementing_Problem_Solving_Methods_in_CYC/links/02e7e527e6527381c9000000/Implementing-Problem-Solving-Methods-in-CYC.pdf)

**Сериализация.** Стандартной W3C-сериализации нет: KB хранится в проприетарных дампах Cyc и экспортируется в плоские текстовые файлы с CycL-формулами. Есть и человекочитаемый «KE Text» (knowledge entry) с директивами вида `F: <формула>` — в него записывают новые факты. Для interoperability сообщество конвертировало OpenCyc в OWL/RDF (префикс `cyc:`), но это конвертация, а не родная форма.

## 2. Родной язык Совы: концептуальные графы

Родной формализм Совы — **концептуальные графы (CG)**, двумерная логика на основе семантических сетей и экзистенциальных графов Пирса. Две формы записи: [```8```](https://jfsowa.com/cg/cg_hbook.pdf)

**Display form** — рисуночная: прямоугольники-концепты и овалы-отношения, соединённые дугами. Классический пример из книги и стандарта CG — «John is going to Boston by bus»: [Person: John] ←(Agnt)← [Go] →(Dest)→ [City: Boston] →(Inst)→ [Bus].

**Linear notation (CL)** — текстовая. Концепт записывается как `[Тип: референт]`, где тип — класс из типологической решётки, а референт — индивид или маркер:

```
[Person: John]—(Chrc)—>[Age: 10]
```

Это ровно то, что я писал для Алисы: `[Person: Alisa]—(Chrc)—>[Age: 10 yr]`. Более развёрнутая форма — **CGIF** (Conceptual Graph Interchange Form, есть в проекте стандарта W3C/Sowa):

```
[Go *x] [Person: John] [City: Boston] [Bus *y]
(Agnt ?x John) (Dest ?x Boston) (Inst ?x ?y)
```

что соответствует формуле \(\exists x \exists y\, (\text{Go}(x) \wedge \text{Person}(\text{John}) \wedge \text{Agnt}(x,\text{John}) \wedge \ldots)\). В CG есть вложенные контексты (believe/want), связи ко-референции (пунктир), кванторы `∀` и `#I/#you` для местоимений. Важно: CG у Совы — именно *семантический* слой поверх решётки типов KR Ontology; стандарт CGIF позволяет линейно сериализовать графы для обмена, но ни OWL-, ни RDF-публикации у KR Ontology нет. [```7```](https://www.w3.org/DesignIssues/Sowa/cgstand.htm)

## 3. Что такое «BFO (+ CCO)» и как они соотносятся

**BFO** — верхнеуровневая онтология: ~35 классов, доменно-нейтральная, описывает только формальные категории (континуант/оккуррент и т. д.). Она **намеренно не содержит** ни Person, ни City, ни Measurement — по её методологии конкретику должны приносить уровни ниже.

**CCO (Common Core Ontologies)** — набор из **одиннадцати среднеуровневых онтологий**, которые строятся поверх BFO и RO (Relation Ontology): Agent, Artifact, Event, Quality, Time, Geospatial, Information Entity, Units of Measure, Currency Unit, Extended Relation, Modal Relation. Правило связи жёсткое: *каждый класс CCO является подклассом какого-то класса BFO*, а отношения CCO переиспользуют родовые отношения RO. Канонический пример прямо из документации CCO: `CCO:PERSON ⊑ BFO:OBJECT`, `CCO:CITY ⊑ BFO:SITE`. [```14```](https://www.nist.gov/system/files/documents/2021/10/14/nist-ai-rfi-cubrc_inc_004.pdf)[```13```](https://arxiv.org/pdf/2404.17758)

Отсюда иерархия из трёх уровней, ставшая де-факто стандартом BFO-экосистемы:

- **верхний уровень** — BFO (формальные категории, ~35 классов);
- **средний уровень** — CCO (Agent/Person, Quality, Event, Unit of Measure — общие для многих доменов);
- **доменный уровень** — прикладные онтологии, импортирующие обе (механизм `owl:import`).

Так устроены, например, онтология аварийного реагирования POLARISCO и более 50 доменных расширений CCO. Именно поэтому в моём примере «Алиса есть человек» класс `Person` взялся из CCO (в BFO его нет), а качество возраста — из BFO (BFO_0000019). Формально «BFO (+ CCO)» означает: «пример построен в экосистеме BFO, с использованием CCO как среднеуровневого словаря». [```11```](https://hal.science/hal-02487086v1/document)[```13```](https://arxiv.org/pdf/2404.17758)

Отмечу и роль **RO (Relations Ontology)**: она — третий элемент экосистемы, задаёт родовые свойства вроде `has_participant`, `has_quality`. Так что полный стек: **BFO (классы) + RO (отношения) → CCO (средний уровень) → домен**.

## 4. Почему `obo:BFO_0000019`, а не `BFO:Quality`

Три причины, и они отражают реальное устройство артефактов:

1. **`BFO:Quality` — несуществующий IRI.** В OWL-сериализации BFO классы идентифицируются не названиями, а стабильными числовыми кодами: качество — это IRI `http://purl.obolibrary.org/obo/BFO_0000019`. Слово «Quality» — это лишь `rdfs:label`, т. е. человекочитаемая аннотация. Префикс `BFO:` на имя-по-ярлыку ни в одной официальной публикации не замаплен — я его не мог использовать как корректный Turtle. В других экосистемах дружественные имена существуют именно потому, что авторы завели их сознательно (`dul:Person`, `cco:Person`, `foaf:Person`) — а OBO-онтологии принципиально держат цифровые ID: ярлыки меняются, IRIs нет.

2. **Соглашение OBO Foundry.** В биомедицинской экосистеме к BFO-коду добавляют стандартный префикс `obo:` = `http://purl.obolibrary.org/obo/`, и каноническое написание — `obo:BFO_0000019`. Можно встретить и `bfo:BFO_0000019` — это тот же IRI с другим префикс-маппингом, эквивалентно.

3. **`:AlisasAge` — это индивид, а не класс.** Обратите внимание на разный префикс: `:` — мой локальный namespace примера. Класс `obo:BFO_0000019` — один на всех, а индивидов-качеств столько, сколько людей: у каждого Алисы своё качество возраста, **конституированное её телом**. Если бы я написал `:Alisa a BFO_0000019`, это означало бы «Алиса есть качество» — типичная ошибка. Весь паттерн читается так: «индивид `:AlisasAge` есть экземпляр класса Quality (BFO_0000019), и он наследуется Алисой через RO:has_quality».

Итого — строка целиком:

```turtle
:Alisa obo:RO_0000086 :AlisasAge .   # Алиса несёт качество
:AlisasAge a obo:BFO_0000019 .       # это качество — экземпляр класса BFO:Quality
```

где `# BFO:Quality` — просто человеческий комментарий, а не синтаксис.

## 5. Примеры «Алиса/Джон — человек, возраст N» в разных формализмах

Такие сквозные примеры — классика обучения, и они хорошо задокументированы:

- **OWL 2 Primer** (официальный документ W3C) — витринный пример, построенный как раз на паре Джон/Мэри: один и тот же факт показан в четырёх синтаксисах сразу [OWL 2 Primer](https://www.w3.org/2007/OWL/draft/owl2-primer/):
  - Functional-Style: `ClassAssertion( :Person :Mary )`, `DataPropertyAssertion( :hasAge :John "51"^^xsd:integer )`
  - Turtle: `:Mary rdf:type :Person .` и `:John :hasAge 51 .`
  - Manchester: `Individual: Mary  Types: Person`
  - RDF/XML и OWL/XML — то же самое в XML-обёртках.
- **Чистая нотация дескрипционной логики (DL)** — там же в учебных материалах: `Person(mary)`, `hasWife(john,mary)`, `hasAge(john,"51"^^xsd:integer)`, плюс пример класса `Teenager ≡ Person ⊓ ∃hasAge.(xsd:integer[≥13..≤19])` — то есть «возраст» как ограничение на свойство, а не как факт. [```27```](https://www.semantic-web-book.org/w/images/e/ec/SWeMoL-Part-2-IJCAI-09.pdf)[```28```](https://people.csail.mit.edu/pcm/tempISWC/tutorials/OWL2.pdf)
- **KIF** — плоская FOL-запись: `(parent john mary)`; родство KIF ↔ OWL ↔ CG систематизировано в [обзоре Grokipedia по KIF](https://grokipedia.com/page/knowledge_interchange_format). [```21```](https://grokipedia.com/page/knowledge_interchange_format)
- **Концептуальные графы** — `[Person: John]` в CGIF/линейной нотации, с переводами в предикатную формулу и обратно. [```7```](https://www.w3.org/DesignIssues/Sowa/cgstand.htm)[```8```](https://jfsowa.com/cg/cg_hbook.pdf)
- **RDF + SPARQL** — в русскоязычном курсе по графам знаний: `:John rdf:type foaf:Person . :John :age 32 .` с запросом `SELECT ?s WHERE { ?s rdf:type foaf:Person. ?s foaf:mbox ?mbox }`. [```16```](https://migalkin.github.io/kgcourse2021/lectures/lecture3)
- **CG ↔ KIF ↔ RDF** — в статье про Knowledge representation and reuse на WWW та же сцена («Mary likes herself and the cat named Tom») выписана в трёх формах сразу: естественный английский (FE), функциональные концептуальные графы (FCG) и RDF/XML. Это практически прямой аналог того, что мы делаем с Алисой. [```22```](https://www.researchgate.net/publication/2319314_Knowledge_representation_and_reuse_on_the_WWW_conventions_RDF_extentions_and_simple_notations)
- **CycL** — тот же паттерн: `(#$isa #$Pittman #$HumanCyclist)` и `(#$residesInRegion #$Pittman #$CityOfAustinTX)` из Upper Cyc Ontology. [```5```](https://www.cs.auckland.ac.nz/courses/compsci367s1c/resources/cyc.pdf)

Практический вывод из этого обзора: формализмы делятся на три семейства — *графовые тройки* (RDF/Turtle, FOAF, schema.org), *логические* (KIF, CycL, DL/OWL) и *двумерные графовые* (CG, иерархии Совы). Первый удобен для данных, второй — для рассуждения с аксиомами, третий — для человекочитаемых моделей. И свойство «возраст» во всех трёх возникает по-разному: как датапроперти (OWL), как предикат с единицей измерения (SUMO, Cyc), как характеристика-узел (CG) и как качество-индивид (BFO/DUL) — то есть различие не в нотации, а в онтологическом статусе «возраста», что и было видно в сводке прошлого ответа.

Если хотите, могу свести все пять формализмов (Turtle, SUO-KIF, CycL, CGIF, DL) в один параллельный лист на примере Алисы — получится удобная шпаргалка «одно утверждение — пять строк».

## 4

Держите шпаргалку. Три утверждения в пяти формализмах: «Алиса — человек», «ей 10 лет» и аксиома иерархии — они показывают не только синтаксис, но и то, куда каждая система «прячет» разные виды знания.

## Утверждение 1: «Алиса есть человек (персона)»

```turtle
# Turtle (RDF/OWL)
:Alisa a :Person .
```
```lisp
; SUO-KIF (SUMO)
(instance Alisa Human)
```
```lisp
; CycL (OpenCyc)
(#$isa Alisa #$Person)
```
```
; CG / CGIF (Сова)
[Person: Alisa]
```
```
; Дескрипционная логика (ABox)
Person(alisa)
```

## Утверждение 2: «Алисе 10 лет»

```turtle
# Turtle (RDF/OWL)
:Alisa :hasAge "10"^^xsd:integer .
```
```lisp
; SUO-KIF (SUMO)
(age Alisa (MeasureFn 10 YearDuration))
```
```lisp
; CycL (OpenCyc)
(#$age Alisa 10)
; или чаще — типизацией коллекцией: (#$isa Alisa #$HumanChild)
```
```
; CG, линейная нотация
[Person: Alisa]—(Chrc)—>[Age: 10 yr]

; то же в CGIF:
[Person: Alisa *a] [Age: 10 yr *b] (Chrc ?a ?b)
```
```
; Дескрипционная логика (ABox)
hasAge(alisa, "10"^^xsd:integer)
```

## Утверждение 3: аксиома иерархии («человек ⊑ агент»)

```turtle
# Turtle (OWL) — TBox
:Person rdfs:subClassOf :Agent .
```
```lisp
; SUO-KIF — обратите внимание на ДВОЙНОЕ наследование:
(subclass Human CognitiveAgent)
(subclass Human Hominid)
```
```lisp
; CycL — тоже множественное наследование:
(#$genls #$Person #$Agent-Generic)
(#$genls #$Person #$Mammal)
```
```
; CG — иерархия живёт в решётке типов, не в графе фактов:
Person < Agent
```
```
; Дескрипционная логика (TBox)
Person ⊑ Agent
```

## Полные мини-файлы «как сдать преподавателю»

```turtle
# Turtle
@prefix : <http://example.org/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

:Person rdfs:subClassOf :Agent .
:Alisa a :Person ;
       :hasAge "10"^^xsd:integer .
```

```lisp
;; SUO-KIF
(instance Alisa Human)
(age Alisa (MeasureFn 10 YearDuration))
(subclass Human CognitiveAgent)
(subclass Human Hominid)
```

```lisp
;; CycL
(#$isa Alisa #$Person)
(#$age Alisa 10)
(#$genls #$Person #$Agent-Generic)
(#$genls #$Person #$Mammal)
```

```
/* CGIF */
[Person: Alisa *a] [Age: 10 yr *b] (Chrc ?a ?b)
/* иерархия типов задаётся отдельно в решётке */
```

```
/* Дескрипционная логика */
Person ⊑ Agent
Person(alisa)
hasAge(alisa, "10"^^xsd:integer)
/* бонус DL: определение через ограничение на роль */
Teenager ≡ Person ⊓ ∃hasAge.(xsd:integer[≤ 19])
```

## Как читать параллельно: соответствие средств

| Роль | Turtle/RDF | SUO-KIF | CycL | CG | DL |
|---|---|---|---|---|---|
| «X есть Y» (экземпляр) | `a` / `rdf:type` | `instance` | `#$isa` | `[Type: X]` | `Y(x)` |
| «класс Y ⊑ класс Z» | `rdfs:subClassOf` | `subclass` | `#$genls` | `Type < Type` | `Y ⊑ Z` |
| Свойство-«холостяк» | датапроперти `:hasAge` | предикат `age` | слот `#$age` | отношение `(Chrc)` | роль `hasAge` |
| Переменная | `?x` (SPARQL) | `?X` | `?X` | `*x` / `?x` | — |
| Квантор | SPARQL `SELECT` | `(forall)` / неявный | `#$forAll` (неявный) | неявный ∃ | — |

## Четыре нюанса, которые экономят время

1. **Масштаб знания разный.** Turtle-файл выше — чистый ABox (факты + слабая таксономия), DL-версия — полноценная логика с TBox, CycL — знания с truth-значениями (`DEFAULT`/`MONOTONIC`) и привязкой к микротеории, а CG-версия — факты плюс отдельная решётка типов. Одинаковые строки ≠ одинаковая выразительность.
2. **Возраст в CycL лучше вообще не хранить числом.** В Cyc естественный путь — типизация (`#$HumanChild`), а `#$age` — предикат только для индивидов (Ленат специально оговаривает: нельзя к коллекциям). Сами значения длительностей там живут константами-интервалами.
3. **В SUO-KIF возраст времязависим.** Корректная форма с фиксацией во времени: `(holdsDuring (YearFn 2026) (age Alisa (MeasureFn 10 YearDuration)))` — «10 лет» истина относительно года отсчёта.
4. **CGIF-строка — перевод линейной записи.** Метки `*a`/`*b` — определяющие ярлыки ко-референции, `?a`/`?b` — ссылки на них; то есть `(Chrc ?a ?b)` — то же самое, что дуга к `[Age: 10 yr]` в рисуночной форме.

Одно наблюдение напоследок: в пяти строках «Алисе 10 лет» видна вся предыдущая дискуссия в миниатюре. Turtle и DL делают возраст свойством строки данных, SUO-KIF — предикатом с единицей измерения, CycL — слотом с контекстом или коллекцией-типом, а CG — отдельным узлом в графе. Формализм не «переводит» возраст — он решает, чем возраст *является*.

Если пригодится, могу добавить шестую колонку — UML/OntoUML с ограничениями (OCL), там «ей 10 лет» выражается инвариантом, а не фактом, и это интересно контрастирует со всеми пятью.

## link
- https://www.researchgate.net/publication/2319314_Knowledge_representation_and_reuse_on_the_WWW_conventions_RDF_extentions_and_simple_notations
