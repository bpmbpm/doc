## process_vs_object

Process - The class of things ...  that happen and have temporal parts or stages.
-  AutomatedProcess
-  NaturalProcess

  
## 1
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

---

## 2
В SUMO нет отдельного верхнеуровневого класса **Event** («Событие»): ближайшая онтологическая категория — **Process** («Процесс»). Слово *event* используется в документации как неформальный синоним («расширенные события», «действия»), а не как самостоятельная ветвь иерархии. [loa.istc.cnr](https://www.loa.istc.cnr.it/old/Papers/ISIB-CNR-TR-16-02.pdf)

## Что такое Process

**Process** (*Процесс*) — это всё, что «происходит» во времени и имеет временные части или стадии; формально — всё, что длится во времени, но не является `Object`. Примеры: футбольный матч, гонка, чтение, биологический процесс. [loa.istc.cnr](https://www.loa.istc.cnr.it/old/Papers/ISIB-CNR-TR-16-02.pdf)

У процесса могут быть участники-объекты: например, игроки — `Object` внутри процесса `FootballMatch`. В 4D-интерпретации пространственно-временная протяжённость процесса делится на стадии, примерно перпендикулярные оси времени. [loa.istc.cnr](https://www.loa.istc.cnr.it/old/Papers/ISIB-CNR-TR-16-02.pdf)

## Непосредственные подклассы

Ниже — непосредственные дочерние классы `Process` в текущем Sigma-браузере SUMO. Это не исчерпывающее дерево всех потомков: многие подклассы сами имеют глубокие ветви. 

| Термин SUMO | Перевод | Смысл |
|---|---|---|
| `AddToCart` | Добавление в корзину | Процесс, после которого объект становится элементом веб-корзины агента |
| `AgentPatientProcess` | Процесс «агент–пациент» | Процесс с хотя бы одним `agent` и одним `patient`; агент не обязан быть когнитивным |
| `AutomatedProcess` | Автоматизированный процесс | Не природный процесс, не требующий когнитивного агента; обычно агент — `AutomatedSystem` |
| `BreakingRecord` | Установление рекорда | Агент выполняет роль в процессе определённого класса так, как никто из агентов того же класса не делал ранее в заданном интервале и регионе |
| `CausingHappiness` | Вызывание счастья | Процесс, результат которого — счастье пациента |
| `CausingUnhappiness` | Вызывание несчастья | Процесс, результат которого — несчастье пациента |
| `Checkout` | Оформление покупки | Последний `subProcess` процесса `Buying` |
| `ContentBearingProcess` | Процесс, несущий содержание | Процесс, который может содержать `Proposition`, например речевой акт |
| `DualObjectProcess` | Процесс с двумя объектами | Процесс, требующий двух различных `patient` |
| `Hovering` | Парение | Агент находится в подвешенном состоянии над поверхностью |
| `IntentionalProcess` | Интенциональный процесс | Процесс, имеющий определённую цель для выполняющего его `AutonomousAgent` |
| `InternalChange` | Внутреннее изменение | Изменение внутреннего свойства объекта: формы, цвета, структуры и т. п. |
| `LargeGroupProcess` | Процесс большой группы | Процесс с участием более 10 агентов |
| `Motion` | Движение | Любой процесс перемещения |
| `NaturalProcess` | Естественный процесс | Процесс, происходящий в природе спонтанно |
| `PowerGeneration` | Генерация энергии | Процесс создания энергии для немедленного использования устройством или хранения |
| `SingleAgentProcess` | Процесс с одним агентом | Процесс, для совершения которого требуется ровно один `agent` |
| `WatchItem` | Наблюдение за товаром | Процесс, после которого объект попадает в список отслеживаемых объявлений агента |

Источник перечня и определений — страница термина `Process` в Sigma; она показывает и родителя `Physical`, и непосредственных потомков. 

## Ключевые ветви

### IntentionalProcess

**IntentionalProcess** (*Интенциональный процесс*) — процесс, который выполняет `AutonomousAgent` («автономный агент») ради определённой цели. Это главная ветвь для действий, планов, коммуникации, покупки, письма, чтения и других целенаправленных действий. [dl.ifip](https://dl.ifip.org/db/conf/kmgov/kmgov2004/BercicV04.pdf)

Важно: `IntentionalProcess` — не синоним `Process`. Например, `Motion` в SUMO не является `IntentionalProcess`: движение может быть непреднамеренным или природным. [pmc.ncbi.nlm.nih](https://pmc.ncbi.nlm.nih.gov/articles/PMC3310852/)

```text
Process
└── IntentionalProcess
    ├── SocialInteraction (Социальное взаимодействие)
    │   └── ChangeOfPossession (Смена владельца)
    │       └── Transaction (Сделка)
    └── IntentionalPsychologicalProcess (Интенциональный психический процесс)
```

`SocialInteraction` — взаимодействие между `CognitiveAgent`; `ChangeOfPossession` — переход права собственности от одного агента к другому; `Transaction` — обмен чем-либо на что-либо. [loa.istc.cnr](https://www.loa.istc.cnr.it/old/Papers/ISIB-CNR-TR-16-02.pdf)

### InternalChange

**InternalChange** (*Внутреннее изменение*) — процесс, изменяющий внутреннее свойство объекта: форму, цвет, структуру и т. п. Изменения, затрагивающие только внешнее отношение объекта к другим объектам — например, пространственное или временное положение, — к этому классу не относятся. 

Примеры: изменение фазового состояния вещества, поломка устройства, изменение внутреннего состояния системы. В прикладных расширениях SUMO переходы состояний нередко моделируют как `InternalChange` или его специализированные подклассы. [cdn.aaai](https://cdn.aaai.org/Workshops/2002/WS-02-11/WS02-11-011.pdf)

### Motion

**Motion** (*Движение*) — любой процесс перемещения. Это самостоятельная непосредственная ветвь `Process`, а не подкласс `IntentionalProcess`. 

Примеры: падение, полёт, перемещение объекта, ходьба. Если перемещение намеренно совершается человеком, конкретный экземпляр может одновременно относиться к `Motion` и к подходящему подклассу `IntentionalProcess`, поскольку класс может иметь несколько суперклассов. [arxiv](https://arxiv.org/pdf/2012.15835.pdf)

### NaturalProcess

**NaturalProcess** (*Естественный процесс*) — процесс, происходящий в природе спонтанно, без целенаправленного агента. Примеры: эрозия, дождь, горение в природных условиях, биологические процессы. 

`AutomatedProcess` прямо определён через отрицание: это процесс, который не является `NaturalProcess` и не требует `CognitiveAgent`; его агентом обычно выступает `AutomatedSystem`. 

### AgentPatientProcess

**AgentPatientProcess** (*Процесс «агент–пациент»*) — процесс, в котором есть хотя бы один `agent` («агент») и хотя бы один `patient` («пациент», объект воздействия). В отличие от `IntentionalProcess`, агент здесь не обязан быть когнитивным: это может быть устройство, система или другой нечеловеческий исполнитель. 

```text
AgentPatientProcess
├── agent: Robot / Person / AutomatedSystem
└── patient: Object, подвергаемый воздействию
```

### DualObjectProcess

**DualObjectProcess** (*Процесс с двумя объектами*) — процесс, требующий двух различных `patient`. Это структурный, а не содержательный класс: он фиксирует минимальную конфигурацию участников, а не цель или способ выполнения. 

### ContentBearingProcess

**ContentBearingProcess** (*Процесс, несущий содержание*) — процесс, способный содержать `Proposition` («пропозицию», утверждение). Типичный пример — использование естественного языка, речевой акт, сообщение. 

### SingleAgentProcess и LargeGroupProcess

- **SingleAgentProcess** (*Процесс с одним агентом*) требует ровно одного `agent`. 
- **LargeGroupProcess** (*Процесс большой группы*) предполагает более 10 агентов. 

Это противоположные по «размеру агентной конфигурации» классификации, но они не образуют строгую дихотомию: между одним и более чем десятью агентами могут существовать процессы с 2–10 агентами, не относящиеся к `LargeGroupProcess`. 

## Составные части процесса

Главное отношение для частей процесса — **`subProcess`** (*подпроцесс*). Его домен — `Process`: первый и второй аргументы должны быть процессами. [dl.ifip](https://dl.ifip.org/db/conf/kmgov/kmgov2004/BercicV04.pdf)

```text
(subProcess ?SUBPROC ?PROC)
```

Формальная семантика: если `SUBPROC` — подпроцесс `PROC`, то временной интервал `SUBPROC` является `temporalPart` временного интервала `PROC`. Таким образом, `subProcess` выражает **временную часть** процесса, а не пространственную деталь. [dl.ifip](https://dl.ifip.org/db/conf/kmgov/kmgov2004/BercicV04.pdf)

```text
Buying (Покупка)
├── subProcess: ChoosingItem (Выбор товара)
├── subProcess: Payment (Оплата)
└── subProcess: Checkout (Оформление покупки)
```

`Checkout` в SUMO определён именно как последний `subProcess` процесса `Buying`: не существует более раннего подпроцесса покупки, частью которого был бы данный `Checkout`. 

## Участники и роли

Процесс связывается с объектами через **CaseRoles** (*ролевые отношения*, «падежные роли»):

| Отношение | Перевод | Роль в процессе |
|---|---|---|
| `agent` | Агент | Тот, кто инициирует или выполняет процесс |
| `patient` | Пациент | Объект, который изменяется или на который воздействуют |
| `instrument` | Инструмент | Средство, используемое агентом; инструмент не изменяется самим процессом |
| `resource` | Ресурс | Материал или вещество, потребляемое в процессе |
| `origin` | Источник | Исходная точка перемещения или происхождения |
| `destination` | Назначение | Конечная точка перемещения или передачи |
| `result` | Результат | Сущность, создаваемая или возникающая в результате процесса |

Для `instrument` SUMO определяет: инструмент используется агентом для осуществления события, но не изменяется этим событием; например, ключ является инструментом открывания двери. Домен первого аргумента `instrument` — `Process`. [danielarifriedman](https://danielarifriedman.com/papers/2024_OntologySUMO/2024_OntologySUMO.pdf)

## Атрибуты и свойства

У `Process` нет единого встроенного набора «атрибутов процесса» в смысле объектно-ориентированных полей. Свойства задаются отдельными отношениями и, где уместно, значениями класса `Attribute` (*Атрибут*):

- `manner` (*образ действия*) связывает процесс с `Attribute`, характеризующим способ его выполнения.
- `frequency` (*частота*) связывает процесс с временной длительностью, характеризующей повторяемость.
- `duration` (*длительность*) относится прежде всего к `TimeInterval` — временному интервалу, в котором происходит процесс.
- `causes` (*вызывает*) связывает один процесс с другим как причину.
- `precondition` (*предусловие*) связывает процесс с формулой-условием, которое должно быть выполнено.
- `result` (*результат*) связывает процесс с возникающей сущностью.

В SUMO правило может описывать процесс через его подпроцессы, участников, предусловия и результаты; например, `Cooking` («Приготовление пищи») определяется как подготовка еды, а `Baking` («Выпекание») — как приготовление с использованием печи. [cdn.aaai](https://cdn.aaai.org/Workshops/2002/WS-02-11/WS02-11-011.pdf)

## Есть ли вход и выход?

**Универсальных отношений `input` и `output` для произвольного процесса в базовой SUMO нет.** Вместо них используются более точные ролевые отношения, которые моделируют вход и выход в зависимости от типа процесса. [cdn.aaai](https://cdn.aaai.org/Workshops/2002/WS-02-11/WS02-11-011.pdf)

| Задача моделирования | Рекомендуемое отношение SUMO | Перевод |
|---|---|---|
| Вход как потребляемый материал | `resource` | Ресурс |
| Вход как объект воздействия | `patient` | Пациент |
| Вход как инструмент или средство | `instrument` | Инструмент |
| Выход как созданная сущность | `result` | Результат |
| Выход как перемещённый объект | `destination` | Назначение |
| Причинно следующий процесс | `causes` | Вызывает |

Например, для двигателя бензин логичнее моделировать как `resource`, а выхлоп — как `result` или через специализированное отношение/подкласс процесса, поскольку бензин не является частью двигателя, а является его входом. Это различие входа и компонента прямо обсуждается в анализе SUMO-моделирования систем. [cdn.aaai](https://cdn.aaai.org/Workshops/2002/WS-02-11/WS02-11-011.pdf)

```text
EngineOperation (Работа двигателя)
├── resource: Gasoline (Бензин)
├── instrument: SparkPlug (Свеча зажигания)
├── result: Exhaust (Выхлоп)
└── subProcess: Combustion (Сгорание)
```

## Термин «событие»

В SUMO **нет верхнеуровневого класса `Event`**. Базовой категорией для событий, действий, состояний движения и жизненных циклов объектов служит `Process`; в его документации футбольный матч и гонка прямо названы примерами «расширенных событий» (*extended events*). [loa.istc.cnr](https://www.loa.istc.cnr.it/old/Papers/ISIB-CNR-TR-16-02.pdf)

Если нужна отдельная модель «события» с датой, местом, участниками и типом, в SUMO обычно создают доменный подкласс `Process` — например, `LifeEvent`, производный от `IntentionalProcess`. Такой подход используют, в частности, для жизненных событий: `LifeEvent` объявляется подклассом `IntentionalProcess`, а его составляющие задаются через `subProcess`. [dl.ifip](https://dl.ifip.org/db/conf/kmgov/kmgov2004/BercicV04.pdf)

```text
Process
└── IntentionalProcess
    └── LifeEvent (Жизненное событие) — доменное расширение
```

## Практическая схема

```text
Process (Процесс)
├── IntentionalProcess (Интенциональный процесс)
│   └── SocialInteraction (Социальное взаимодействие)
│       └── ChangeOfPossession (Смена владельца)
├── InternalChange (Внутреннее изменение)
├── Motion (Движение)
├── NaturalProcess (Естественный процесс)
├── AutomatedProcess (Автоматизированный процесс)
├── AgentPatientProcess (Процесс «агент–пациент»)
├── DualObjectProcess (Процесс с двумя объектами)
├── ContentBearingProcess (Процесс, несущий содержание)
├── SingleAgentProcess (Процесс с одним агентом)
├── LargeGroupProcess (Процесс большой группы)
├── PowerGeneration (Генерация энергии)
└── ... доменные и прикладные подклассы
```

Каждый процесс может иметь:

- `subProcess` — временные части/стадии;
- `agent`, `patient`, `instrument`, `resource`, `origin`, `destination`, `result` — участников и роли;
- `manner`, `frequency`, `causes`, `precondition` — характеристики и связи с другими процессами;
- отсутствие единого `input`/`output`: вход и выход выражаются через `resource`, `patient`, `instrument` и `result`. [dl.ifip](https://dl.ifip.org/db/conf/kmgov/kmgov2004/BercicV04.pdf)

## Источники

- **Niles, I., Pease, A. (2001). *Towards a Standard Upper Ontology*** — определения `Process`, `Object`, `subProcess`, `temporalPart` и обоснование 3D-модели объектов: http://ontologyportal.org/professional/FOIS.pdf [loa.istc.cnr](https://www.loa.istc.cnr.it/old/Papers/ISIB-CNR-TR-16-02.pdf)
- **Pease, A., Niles, I., Li, J. (2002). *The Suggested Upper Merged Ontology*** — обзор SUMO и её процессной онтологии: [https://cdn.aaai.org/Workshops/2002/WS-02-11/WS02-11-011.pdf](https://cdn.aaai.org/Workshops/2002/WS-02-11/WS02-11-011.pdf) 
- **Sigma Knowledge Base Browser: `Process`** — актуальный перечень непосредственных подклассов и определений: [https://ontology.nps.edu/sigma/SimpleBrowse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&simple=yes&term=Process](https://ontology.nps.edu/sigma/SimpleBrowse.jsp?kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&simple=yes&term=Process) 
- **Исходный код SUMO, `Merge.kif`** — формальные аксиомы для `Process`, `subProcess`, `temporalPart` и ролей участников: [https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif) 
- **Bercič, V. (2004). *Simple Life-Events Ontology in SU(M)O-KIF*** — пример моделирования «события» как подкласса `IntentionalProcess` и использования `subProcess`: [https://dl.ifip.org/db/conf/kmgov/kmgov2004/BercicV04.pdf](https://dl.ifip.org/db/conf/kmgov/kmgov2004/BercicV04.pdf) [dl.ifip](https://dl.ifip.org/db/conf/kmgov/kmgov2004/BercicV04.pdf)
- **Rodrigues, F. H., Abel, M. (2019). *What to consider about events: A survey on the ontology of occurrents*** — анализ трактовки событий, процессов и временных частей в SUMO: [https://journals.sagepub.com/doi/10.3233/AO-190217](https://journals.sagepub.com/doi/10.3233/AO-190217)
  
