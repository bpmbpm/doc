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
