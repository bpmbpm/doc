## process_vs_object
### 1
Покажи на примере онтологии SUMO разделение ветвей object и process. Дай полную иерархию до цитируемых классов и дочерние классы. Покажи признаки по которым идет разделение. Также покажи "присутствуют целиком и "временные части". Дай ссылки на статьи, где это подробно показано.

В SUMO ветви **Object** и **Process** — это два непересекающихся подкласса **Physical** («физическое»): объекты сохраняют тождество на протяжении интервала времени и присутствуют целиком в каждый момент, а процессы «происходят» и состоят из временных частей/стадий. [ontologyportal](https://www.ontologyportal.org/SUMOhistory/SUMO1.46.txt)

## Базовая иерархия

```text
Entity (Сущность)
├── Abstract (Абстрактное)
└── Physical (Физическое)
    ├── Object (Объект)
    │   ├── SelfConnectedObject (Самосвязный объект)
    │   │   ├── Substance (Вещество)
    │   │   │   ├── PureSubstance (Чистое вещество)
    │   │   │   │   ├── ElementalSubstance (Элементарное вещество)
    │   │   │   │   │   ├── Metal (Металл)
    │   │   │   │   │   ├── Atom (Атом)
    │   │   │   │   │   └── SubatomicParticle (Субатомная частица)
    │   │   │   │   └── CompoundSubstance (Соединение)
    │   │   │   └── Mixture (Смесь)
    │   │   │       └── Solution (Раствор)
    │   │   └── CorpuscularObject (Корпускулярный объект)
    │   │       └── ContentBearingObject (Объект, несущий содержание)
    │   │           └── SymbolicString (Символьная строка)
    │   │               └── Character (Символ)
    │   ├── Region (Регион)
    │   │   └── GeographicArea (Географическая область)
    │   ├── Collection (Коллекция)
    │   └── AutonomousAgent (Автономный агент)
    │       ├── Organism (Организм)
    │       └── Organization (Организация)
    └── Process (Процесс)
        ├── IntentionalProcess (Интенциональный процесс)
        ├── InternalChange (Внутреннее изменение)
        │   └── BiologicalProcess (Биологический процесс)
        ├── Motion (Движение)
        ├── NaturalProcess (Естественный процесс)
        ├── AutomatedProcess (Автоматизированный процесс)
        ├── SingleAgentProcess (Процесс с одним агентом)
        ├── AgentPatientProcess (Процесс «агент–пациент»)
        ├── DualObjectProcess (Процесс с двумя объектами)
        ├── ContentBearingProcess (Процесс, несущий содержание)
        └── Carrying (Переноска)
```

Эта структура соответствует аксиоме `(partition Physical Object Process)`: каждый экземпляр `Physical` является либо `Object`, либо `Process`, но не обоими сразу. [ontologyportal](https://www.ontologyportal.org/SUMOhistory/SUMO1.46.txt)

## Признаки разделения

| Признак | **Object** — «Объект» | **Process** — «Процесс» |
|---|---|---|
| Онтологическая роль | Континуант: то, что существует и сохраняет идентичность во времени | Оккуррент: то, что происходит |
| Присутствие во времени | Присутствует **целиком** в каждый момент своего существования | Не присутствует целиком; существует через свои **временные части** или стадии |
| Части | Преимущественно **пространственные части**: `part`, `component`, `piece` | **Временные части**: `subProcess`, стадии; формально время подпроцесса является `temporalPart` времени процесса |
| Пример | Книга, человек, автомобиль, город, вода | Футбольный матч, чтение, горение, биологический процесс |
| Отношение к участникам | Может быть участником процесса | Может иметь `Object`-участников, например игроков в матче |

SUMO определяет `Process` как «то, что происходит и имеет временные части или стадии»; формально это всё, что происходит во времени, но не является `Object`. `Object`, в свою очередь, описан как «обычный объект», включая физические предметы, географические области и места протекания процессов. [ontology.nps](https://ontology.nps.edu/sigma/SimpleBrowse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&simple=yes&term=Process)

## «Присутствуют целиком»

Фраза **«присутствуют целиком»** — это характеристика 3D-подхода (*endurantism*, эндурантизм): объект в каждый момент своего существования присутствует **полностью**, а не лишь одной своей временной частью. Например, в момент 12:00 присутствует весь автомобиль — его кузов, колёса и двигатель, — а не «автомобиль-в-12:00» как отдельная часть автомобиля. [ontologyportal](http://ontologyportal.org/professional/FOIS.pdf)

В SUMO это отражено в комментарии к `Object`: объект существует и сохраняет идентичность на протяжении интервала времени, то есть существует в каждой точке этого интервала. [ontologyportal](https://www.ontologyportal.org/SUMOhistory/SUMO1.46.txt)

```text
Автомобиль (Object)
  момент t1: автомобиль присутствует целиком
  момент t2: автомобиль присутствует целиком
  момент t3: автомобиль присутствует целиком
```

Это не означает, что у объекта не может меняться состояние: он может ржаветь, двигаться или быть разобран. Но **сам объект как целое** присутствует в каждый момент, пока существует. [ontologyportal](https://www.ontologyportal.org/SUMOhistory/SUMO1.46.txt)

## «Временные части»

**«Временные части»** (*temporal parts*, временные части) — характеристика 4D-подхода (*perdurantism*, пердурантизм): сущность представляется как «пространственно-временной червь», а её срезы в разные моменты — как временные части. SUMO использует эту идею прежде всего для `Process`: процесс делится не на пространственные куски, а на стадии во времени. [ontology.nps](https://ontology.nps.edu/sigma/SimpleBrowse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&simple=yes&term=Process)

```text
Футбольный матч (Process)
├── Первый тайм (subProcess / временная часть)
├── Перерыв (subProcess / временная часть)
└── Второй тайм (subProcess / временная часть)
```

В SUMO отношение `subProcess` формализует это так: если `SUBPROC` — подпроцесс `PROC`, то временной интервал `SUBPROC` является `temporalPart` временного интервала `PROC`. То есть подпроцесс — это «временно выделенная часть» процесса, а не обязательно пространственная часть. [ontologyportal](https://www.ontologyportal.org/SUMOhistory/SUMO1.46.txt)

## Как они связаны

Объекты и процессы не изолированы: процессы **разворачиваются во времени**, а объекты служат их участниками и сохраняют идентичность между стадиями процесса. Например, в процессе `Reading` («Чтение») участвуют читатель и книга — оба являются `Object`; сам акт чтения — `Process`. [ontology.nps](https://ontology.nps.edu/sigma/SimpleBrowse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&simple=yes&term=Process)

```text
Reading (Чтение) : Process
├── participant: Human / AutonomousAgent (человек) : Object
├── participant: Book (книга) : Object
├── temporal part: открытие книги
├── temporal part: чтение страницы 1
└── temporal part: закрытие книги
```

Таким образом, разделение можно сформулировать через ось времени:

- **Object**: «в каждый момент присутствует весь объект»; части в первую очередь пространственные.
- **Process**: «в каждый момент присутствует лишь текущая стадия процесса»; части прежде всего временные.
- **Связь**: процессы имеют объектных участников; объекты могут изменяться в процессах; подпроцессы являются временными частями процессов. [ontologyportal](https://www.ontologyportal.org/SUMOhistory/SUMO1.46.txt)

## Важная оговорка

SUMO не утверждает, что объекты буквально лишены временных частей в философском 4D-смысле: его документация к `Object` использует 4D-формулировку «пространственно-временная протяжённость делится на пространственные части, примерно параллельные оси времени». Но категориальное решение SUMO — 3D-ориентация: `Object` и `Process` объявлены дизъюнктными ветвями `Physical`. [ontologyportal](https://www.ontologyportal.org/SUMOhistory/SUMO1.46.txt)

Иначе говоря, **«присутствуют целиком»** — критерий объекта в принятой SUMO 3D-модели, а **«временные части»** — критерий процесса; именно это различие делает ветви `Object` и `Process` взаимоисключающими. [ontology.nps](https://ontology.nps.edu/sigma/SimpleBrowse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&simple=yes&term=Process)

## Статьи и первоисточники

- **Niles, I., Pease, A. (2001). *Towards a Standard Upper Ontology*** — исходная статья, где вводятся `Entity`, `Physical`, `Object`, `Process` и объясняется выбор 3D-подхода: http://ontologyportal.org/professional/FOIS.pdf [ontologyportal](http://ontologyportal.org/professional/FOIS.pdf)
- **Pease, A., Niles, I., Li, J. (2002). *The Suggested Upper Merged Ontology: A Large Ontology for the Semantic Web and its Applications*** — обзор SUMO и её базового разделения объектов и процессов: [https://cdn.aaai.org/Workshops/2002/WS-02-11/WS02-11-011.pdf](https://cdn.aaai.org/Workshops/2002/WS-02-11/WS02-11-011.pdf) [cdn.aaai](https://cdn.aaai.org/Workshops/2002/WS-02-11/WS02-11-011.pdf)
- **Исходный код SUMO, `Merge.kif`** — формальные определения, включая `(partition Physical Object Process)`, `subProcess` и `temporalPart`: [https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif) [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)
- **Sigma Knowledge Base Browser: `Object`** — актуальная документация и непосредственные дочерние классы: [https://ontology.nps.edu/sigma/SimpleBrowse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&simple=yes&term=Object](https://ontology.nps.edu/sigma/SimpleBrowse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&simple=yes&term=Object) [ontology.nps](https://ontology.nps.edu/sigma/SimpleBrowse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&simple=yes&term=Object)
- **Sigma Knowledge Base Browser: `Process`** — актуальная документация и дочерние классы процесса: [https://ontology.nps.edu/sigma/SimpleBrowse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&simple=yes&term=Process](https://ontology.nps.edu/sigma/SimpleBrowse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&simple=yes&term=Process) [ontology.nps](https://ontology.nps.edu/sigma/SimpleBrowse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&simple=yes&term=Process)
- **Rodrigues, F. H., Abel, M. (2019). *What to consider about events: A survey on the ontology of occurrents*** — сравнительный анализ того, как SUMO трактует процессы, временные части и `subProcess`: [https://journals.sagepub.com/doi/10.3233/AO-190217](https://journals.sagepub.com/doi/10.3233/AO-190217) [journals.sagepub](https://journals.sagepub.com/doi/10.3233/AO-190217?icid=int.sj-full-text.similar-articles.9)
