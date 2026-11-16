PSL 
- Property Specification Language (IEEE 1850) — язык свойств на темпоральной логике из мира верификации железа; это то, о чём мы говорили в прошлый раз.
- Process Specification Language (NIST, ISO 18629) — процессная онтология для обмена информацией о процессах между системами: workflow, планирование, реинжиниринг бизнес-процессов. Формально она описана в KIF/CLIF, а не в LTL — это скорее «сводный словарь процессов», чем язык свойств. В 18629-11—2010 есть определения Онтологии. 
- Business Property Specification Language (BPSL) — любопытный тёзка: графический язык комплаенс-правил для WS-BPEL, транслирующийся в LTL. Назван «в пику» PSL, и это ещё один аргумент проверять, о какой PSL идёт речь в конкретной статье

## 1
Есть Язык спецификации свойств ( PSL ), покажи как он соотносится с workflow, например, http://www.workflowpatterns.com/ или ARIS Method Reference manual (там онтология - все классы и предикаты).

Коротко о главном: это вещи из разных миров, и соотносятся они как **описание правила** и **описание механики**. PSL — декларативный язык спецификаций (темпоральная логика), которым формулируют *свойства* поведения системы; Workflow Patterns и ARIS — конструктивные описания *самого процесса*: онтологии и каталоги структур, из которых процесс собирают. Их можно сравнивать, но интереснее — стыковать: workflow-модель задаёт поведение, PSL (точнее, его темпоральное ядро) формулирует требования к этому поведению.

## Что есть что

**PSL (Property Specification Language, IEEE 1850)** — индустриальный стандарт описания свойств для верификации железа, расширяющий LTL (линейную темпоральную логику). Состоит из четырёх слоёв: булевского (пропозициональные выражения в одном такте), темпорального (ядро языка — Foundation Language на LTL + регулярные выражения SERE, плюс опциональная ветвящаяся логика OBE), верификационного и моделирующего. Типичные свойства: [```1```](https://en.wikipedia.org/wiki/Property_Specification_Language)[```5```](https://wwwbroy.in.tum.de/publ/papers/Tuer05.pdf)

```
always (request -> eventually! grant)          // liveness: каждый запрос когда-то обслужится
always !(grant1 && grant2)                     // safety: взаимное исключение
(true[*]; req; ack) |=> (start; busy[*]; end)  // после req;ack должна прийти полная передача
```

Операторы `always`, `never`, `next`, `until`, `before`, регулярные повторы `[*]`/`[=]`/`[->]`, тактирование через `@`, сильная/слабая версии (`!`), операторы прерывания `abort`. Время — дискретные такты; вход — трасса сигналов; формула проверяется механически (model checking). [```3```](https://kit-e.ru/proektirovanie-v-usloviyah-vremennyh-ogranichenij-verifikacziya-proektov-na-osnove-plis-chast-2/)[```1```](https://en.wikipedia.org/wiki/Property_Specification_Language)[```16```](https://is.ifmo.ru/verification/_2007_01_report-verification.pdf)

**Workflow Patterns** (van der Aalst и др.) — каталог паттернов управления потоком: Sequence, Parallel Split (AND-split), Synchronization (AND-join), Exclusive Choice, Deferred Choice, Discriminator, Cancel Case и т. д. Это не язык, а *инвентаризация конструкций*, по которой сравнивают выразительность workflow-языков (BPEL, XPDL и пр.). [```6```](https://cliplab.org/Projects/S-CUBE/papers/aalst03:workflow_patterns.pdf)[```8```](https://en.wikipedia.org/wiki/Workflow_pattern)[```9```](https://runawfe.ru/images/3/3c/Article.pdf)

**ARIS** (Шеер) — архитектура описания предприятия: пять представлений (функции, организация, данные, процессы, продукт/услуга), три уровня жизненного цикла (концепция — спецификация — внедрение), около 80 типов моделей и собственная онтология объектов (функция, событие, оргединица, продукт...). Контрольная нотация — EPC: события триггерят функции, функции порождают события. [```12```](https://infostart.ru/pm/1426878/)[```13```](https://tr-page.yandex.ru/translate?lang=en-ru&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FArchitecture_of_Integrated_Information_Systems)

## Ключевые различия

| Параметр | PSL | Workflow Patterns / ARIS |
|---|---|---|
| Природа | Декларативные свойства-ограничения («что должно выполняться») | Конструктивная модель («как выполняется») |
| Объект описания | Булевские сигналы/переменные и их отношения во времени | Сущности предметной области: функции, события, исполнители, данные |
| Время | Дискретные такты, линейное (FL) или ветвящееся (OBE); допустимы «бесконечные» требования (eventually) | Неявное, задано структурой графа: стрелка = порядок выполнения |
| Конкуренция | Через интерливинг трасс; явных fork/join нет | Явные конструкты: AND-split/join, Multi-merge, Discriminator |
| Исполнитель | Верификатор/model checker или симуляция — формула *судится* | Движок workflow или человек — модель *исполняется* |
| Проверяемость | Формальная, автоматическая (по автоматам Бюхи) [```16```](https://is.ifmo.ru/verification/_2007_01_report-verification.pdf) | Обычно структурный контроль; EPC переводят в сети Петри лишь вручную/специально |

Самое принципиальное различие — **рефлексивность**. Workflow-паттерн — это работающая механика: модель выполняется и *сама порождает* трассы. PSL-формула ничего не исполняет — она *отбирает* допустимые трассы: «всякая трасса, где после `req` следует `ack`, обязана содержать `start; busy[*]; end`, иначе нарушена». PSL описывает не процесс, а инвариант на множестве процессов.

## Как паттерны отображаются в PSL

Наиболее естественный мостик — формулировать свойства workflow-моделей на темпоральном ядре PSL:

- **Sequence** → `always (a -> next! b)` (после `a` обязательно `b`). [```3```](https://kit-e.ru/proektirovanie-v-usloviyah-vremennyh-ogranichenij-verifikacziya-proektov-na-osnove-plis-chast-2/)
- **Response / request-response** → `always (req -> eventually! ack)`.
- **Precedence** («`grant` только после `request`») → через `until`/`before`.
- **Cancel Case** → прямая аналогия с операторами `async_abort`/`sync_abort`: свойство считается не нарушенным, если выполнение прервано условием `b`. [```1```](https://en.wikipedia.org/wiki/Property_Specification_Language)

А вот вещи вроде **Deferred Choice** или **Discriminator** как одно PSL-свойство выразить нельзя: они описывают *как* выбирается ветка (кем, когда, с отменой остальных), а темпоральная логика видит только итоговую трассу событий. Для таких свойств в формулы приходится вносить допущения о среде или описывать модель на LTL-спецификации целиком — такой подход к управляющим программам, кстати, существует и даёт гарантию эквивалентности спецификации и кода. [```18```](https://www.mais-journal.ru/jour/article/view/1823)

С ARIS PSL соотносится ещё более поверхностно: у ARIS метаонтология (типы объектов, связи, жизненный цикл), у PSL онтологии нет вообще — только булевские атомы. Строго говоря, PSL можно «натянуть» на конкретную EPC-модель (событие → атом, функция → интервал активности), но это уже конструирование, а не совпадение механизмов.

## Существенный мост: декларативное моделирование процессов

Интересно, что сообщество process mining уже давно пошло навстречу темпоральной логике: в декларативных моделях процессов (например, Declare) ограничения вида *response* («после A всегда B»), *precedence*, *absence* — это, по сути, стандартные LTL-шаблоны, т. е. ровно то же ядро, что у PSL Foundation Language, только атомами служат события процесса, а не сигналы. Так что практичная связка выглядит так: [```16```](https://is.ifmo.ru/verification/_2007_01_report-verification.pdf)[```18```](https://www.mais-journal.ru/jour/article/view/1823)

1. **ARIS/EPC или workflow-паттерны** — проектируем и описываем процесс (онтология, организационные аспекты, ветвления).
2. **Извлекаем из него события** — исполнение порождает трассы.
3. **PSL-стиль (LTL/серцепции)** — формулируем и проверяем свойства: liveness («каждый заказ когда-нибудь закроется»), safety («никогда два конфликтных шага одновременно»), приоритеты, отмены. [```19```](https://libeldoc.bsuir.by/bitstream/123456789/4155/1/Korolev_Verifikatsiya.PDF)

То есть это не конкуренты, а уровни одной пирамиды: workflow/ARIS дают структуру и исполнительную семантику, PSL — язык свойств для формальной проверки того, что структура ведёт себя как обещано.

Если интересно, могу показать на конкретном примере (допустим, процесс согласования заявки в EPC), как выписать его ключевые инварианты в PSL-формулах и какие из паттернов каталога при этом «не доживают» до формальной логики.

## 2
где показана практика применения PSL, а также его совместное использование с workflow, EPC и другими нотациями из мира BPM.

Отличная задача — тут стоит разделить на два потока: практика применения PSL (в основном в верификации железа/SoC) и мосты PSL/темпоральной логики в BPM-мир. Ищу.
Первый заход дал интересное: выяснилась важная развилка — аббревиатура PSL носат два разных стандарта. Ищу глубже по обоим направлениям.
Собрал хороший корпус. Уточню детали по двум ключевым работам — главе «PSL: Beyond Hardware Verification» и статье о верификации workflow-паттернов в SPIN.
Нашла. Но сначала — важная находка, которая сильно проясняет картину поиска: **аббревиатура PSL носат два разных стандарта**, и это ключевая ловушка при поиске литературы.

- **Property Specification Language** (IEEE 1850) — язык свойств на темпоральной логике из мира верификации железа; это то, о чём мы говорили в прошлый раз.
- **Process Specification Language** (NIST, ISO 18629) — процессная **онтология** для обмена информацией о процессах между системами: workflow, планирование, реинжиниринг бизнес-процессов. Формально она описана в KIF/CLIF, а не в LTL — это скорее «сводный словарь процессов», чем язык свойств. [```23```](https://en.wikipedia.org/wiki/Process_Specification_Language)[```25```](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=821500)

Теперь по существу — что реально нашлось.

## Практика применения Property Specification Language (IEEE 1850)

- **A Practical Introduction to PSL** (Eisner, Fisman, Springer 2005) — базовый инженерный труд; в обзорах его ценят за практические примеры и призыв использовать «simple subset» PSL как рабочий инструментарий, а не всю полноту языка. [```2```](https://www.academia.edu/28831072/Learning_and_Practice_of_the_Property_Specification_Language)
- **PSL: Beyond Hardware Verification** (Glazberg, Moulin, Orni, Ruah, Zarpas — IBM Haifa Research Lab, 2007) — самая релевантная к вашему вопросу работа: авторы показывают применение PSL за пределами железа — для противоракетной системы перехвата (модель наведения, свойства вида `always(range=30000 -> next[k] ...)`, проверка в RuleBase PE), протоколов железнодорожной сигнализации и политик автоматизации IBM Tivoli, где свойства формулируются в стиле CTL: `assert EF nominal_state`, `assert AG (desired_state1 -> EF desired_state2)`. Про бизнес-процессы там упоминание есть, но именно упоминание — детального кейса «PSL на EPC» в открытой литературе я не встретила. [```1```](https://www.researchgate.net/publication/226547073_PSL_Beyond_Hardware_Verification)[```3```](https://link.springer.com/chapter/10.1007/978-1-4020-6254-4_19)
- **PSL and SVA: Two Standard Assertion Languages** (Calazans и др.) — сравнение PSL и SystemVerilog Assertions на практике: где какой язык удобнее, как в SVA рекурсивные свойства эмулируют операторы PSL (`always`, weak `until`). [```6```](https://www.inf.pucrs.br/~calazans/graduate/SDAC/PSL%20and%20SVA_two%20standard%20assertion%20languages%20addressing%20complementary%20engineering%20needs.pdf)
- **Evaluation of visual property specification languages based on practical model-checking experience** (Aalto University) — реальный индустриальный кейс (I&C-логика, ядерная тематика): более 500 реальных спецификаций свойств, переписанных в LTL/CTL/PSL; 92% PSL-свойств используют SERE. Хорошая оценка того, что из PSL «живёт» в практике. [```5```](https://acris.aalto.fi/ws/portalfiles/portal/152378354/Evaluation_of_visual_property_specification_languages_based_on_practical_model-checking_experience.pdf)
- На русском — цикл в журнале «Компоненты и технологии» про ABV-верификацию проектов на ПЛИС: PSL как «исполняемая верификационная документация», практика вставки утверждений в VHDL. [```4```](https://kit-e.ru/proektirovanie-v-usloviyah-vremennyh-ogranichenij-verifikacziya-proektov-na-osnove-plis-chast-2/)

## Совместное использование с BPM-нотациями

Здесь честный вывод: **прямых работ «IEEE PSL + EPC/BPMN» почти нет** — стыковка происходит через темпоральное ядро PSL, то есть через LTL. Ближайшие к цели работы:

- **Declare / декларативные workflow** (Pesic, Schonenberg, van der Aalst) — это фактически «PSL-подход» в BPM: шаблоны ограничений (response, precedence, succession, not co-existence...) с точной семантикой в LTL над конечными трассами; пользователь видит графические шаблоны, движок — формулы. [```30```](https://ais.win.tue.nl/declare/wp-content/papercite-data/pdf/yawlbook_declarative.pdf)[```31```](https://www.diag.uniroma1.it/~marrella/slides/pm17/LAB-07-Declarative_Process_Modeling_and_Mining.pdf)
- **A pattern-based approach for the verification of business process descriptions** (Patig, Stolz) — все 43 control-flow паттерна сводятся к 20 базовым фрагментам в PROMELA для SPIN, а корректность проверяется LTL-шаблонами свойств (safety, liveness). Именно так workflow-паттерны и темпоральные спецификации стыкуются на практике. [```11```](https://www.researchgate.net/publication/257391113_A_pattern-based_approach_for_the_verification_of_business_process_descriptions)
- **LTL Checker** (van der Aalst и др.) — процессный майнинг: трассы из event log проверяются на соответствие LTL-свойствам (ожидаемое/нежелательное поведение). [```11```](https://www.researchgate.net/publication/257391113_A_pattern-based_approach_for_the_verification_of_business_process_descriptions)
- **BPMN-Q и временная логика** (Awad и др.) — комплаенс-правила выражаются визуальными запросами, транслируются в PLTL и проверяются model checking'ом, с автоматической генерацией антипаттернов-нарушений. [```38```](https://www.academia.edu/98154294/Efficient_Compliance_Checking_Using_BPMN_Q_and_Temporal_Logic)
- **G-LTL** — BPMN-модель переводится в структуру Крипке, правила — в LTL через графическую нотацию, проверка в EpiSpin. [```12```](https://hal.science/hal-03108796v1/document)
- **Timed EPC → гибридные автоматы** — EPC из ARIS аннотируется временами («setup time», «processing time»), транслируется в автоматы, свойства формулируются в Timed CTL («конечное событие достижимо за ≤ 20 единиц») и проверяются в HyTech. Это, пожалуй, единственная линия «ARIS EPC + формальные свойства». [```33```](https://ceur-ws.org/Vol-224/epk2006-paper9.pdf)
- **EPC → сети Петри** (van der Aalst, 1999) — формализация EPC и проверка soundness за полиномиальное время; база, на которую потом навешивают темпоральные свойства. [```36```](https://www.academia.edu/470712/Formalization_and_verification_of_event_driven_process_chains)
- **YAWL → FSP/LTSA** — workflow как система помеченных переходов, свойства во fluent LTL, автоматическая верификация; родственный подход — верификация бизнес-правил через temporal ASP с bounded model checking. [```14```](https://meals-project.eu/sites/default/files/WorkflowPropVerification_0.pdf)[```13```](https://www.academia.edu/124798436/Business_Processes_Verification_with_Temporal_Answer_Set_Programming)
- **Business Property Specification Language (BPSL)** — любопытный тёзка: графический язык комплаенс-правил для WS-BPEL, транслирующийся в LTL. Назван «в пику» PSL, и это ещё один аргумент проверять, о какой PSL идёт речь в конкретной статье. [```11```](https://www.researchgate.net/publication/257391113_A_pattern-based_approach_for_the_verification_of_business_process_descriptions)
- Свежий обзор-систематика: **Three Decades of Formal Methods in Business Process Compliance** (2024) — сводит все линии (LTL, CTL, комплаенс-паттерны, мониторы) и даёт карту этого поля. [```41```](https://arxiv.org/html/2410.10906)

## NIST PSL (ISO 18629) — «та самая» процессная PSL

- Спецификация NIST: нейтральный язык-интерлингва для обмена процессной информацией между manufacturing/BPR/workflow-системами; онтология в KIF с формальными определениями примитивов (activity, activity_occurrence, timepoint, before, between). [```25```](https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=821500)[```24```](https://archive.org/stream/processspecifica6459schl/processspecifica6459schl_djvu.txt)
- В обзорах онтологий BPM (в обзоре Гролингер и др.) NIST PSL сравнивается с BPMO, GPO и oXPDL по целям: обмен процессной информацией vs. семантическое моделирование vs. рассуждение над XPDL-моделями. [```16```](https://www.eng.uwo.ca/electrical/faculty/grolinger_k/docs/business-process-modeling-and-web-services.pdf)
- OntoWeb Working Group рекомендовала NIST PSL и BPML как базы для стандартизации, отмечая конвергенцию PIF/PSL/CPR/SPAR на общей модели активности I-N-CA. [```21```](https://www.aiai.ed.ac.uk/project/ontoweb/)

## Итог

Если искать буквально «PSL + workflow, EPC» — вы почти наверняка выйдете на NIST PSL (это BPM-мир, но онтология, не верификация) и на Declare/compliance-литературу (это LTL, то есть темпоральное ядро IEEE PSL, но без SERE и тактирования). Связка, которую вы ищете — «формальные свойства, проверяемые на workflow-модели» — в литературе реализована именно через LTL-шаблоны + model checking (SPIN, NuSMV, LTSA, EpiSpin), а не через IEEE PSL как таковой.

Могу составить сравнительную таблицу этих подходов (шаблоны свойств ↔ проверяемые паттерны ↔ инструменты) или разобрать одну из статей подробнее — скажите, какая линия интереснее: верификация паттернов в SPIN или комплаенс-проверки BPMN.

## 3

Соберу недостающие источники по BPMN-линии, чтобы таблица и разбор опирались на конкретные работы.
Хорошо, источников по BPMN набралось достаточно. Добавлю один заход под декларативные модели и свежие обзоры, чтобы таблица была полной.
Готово — источников по обеим линиям достаточно. Сначала таблица, потом подробный разбор BPMN-линии.

## Сравнительная таблица подходов

| Подход | Вход → формальная модель | Логика и инструмент | Что проверяется |
|---|---|---|---|
| **PSL (IEEE 1850)** — точка отсчёта | Сигналы на тактовой сетке | FL (LTL) + SERE, model checking | Свойства железа: safety/liveness, handshakes, переполнения [```17```](https://masters.donntu.ru/2012/fknt/gorokhov/library/grushvitskiy_design2.pdf)[```20```](https://firsteda.com/news/achieving-better-coverage-with-vhdl-part-2/) |
| **Declare / ConDec** (Pesic, van der Aalst) | Декларативная модель: набор LTL-шаблонов над событиями | LTL на конечных трассах; исполнение через автоматы Бюхи | Response, precedence, absence, not co-existence — то же темпоральное ядро, что у PSL FL [```24```](https://www.vdaalst.rwth-aachen.de/publications/p333.pdf)[```25```](https://ais.win.tue.nl/declare/wp-content/papercite-data/pdf/yawlbook_declarative.pdf) |
| **BPMN-Q + PLTL** (Awad, Decker, Weske) | Репозиторий BPMN-моделей | Запрос → редукция графа → PLTL → model checker | Комплаенс-правила порядка исполнения, data-aware правила, визуализация нарушений [```6```](https://www.academia.edu/3235220/Efficient_compliance_checking_using_bpmn_q_and_temporal_logic)[```8```](https://www2.informatik.hu-berlin.de/~weidlima/pubs/awad_icsoc_2009_specification_verification.pdf) |
| **G-LTL** | BPMN → структура Крипке напрямую, без сетей Петри | LTL через графическую нотацию, EpiSpin (ProM) | Комплаенс-правила (пример: reimbursement-процесс, правила R1–R3 в ProMeLa) [```10```](https://hal.science/hal-03108796v1/document) |
| **Структурная верификация BPMN** | BPMN → Крипке-структура / Promela | LTL | Отсутствие deadlock, livelock, multiple termination — то есть soundness [```2```](https://hal.science/hal-03108820/document)[```12```](https://hal.science/hal-03108809v1/document) |
| **BProVe** (Corradini и др.) | BPMN 2.0 c нативной операционной семантикой в Maude | LTL model checker (Maude LMC), статистическая верификация | Option to complete, proper completion, no dead activities — при произвольной топологии [```27```](https://www.researchgate.net/publication/321260817_BProVe_A_formal_verification_framework_for_business_process_models)[```28```](https://www.academia.edu/67181882/BProVe_A_formal_verification_framework_for_business_process_models) |
| **BPMN/EPC → сети Петри** (Aalst, Dijkman) | WF-сети | Критерий soundness, инварианты | Deadlock, lack of synchronization; ProM/Woflan [```29```](https://hal.science/hal-03108809/document)[```13```](https://github.com/rahman41i/Car-Repair-Modeling-and-Analyzing) |
| **Timed BPMN** | BPMN → CSP+T, Real-Time Maude, UPPAAL | LTL (Maude), TCTL (UPPAAL) | Свойства со временем: «если заказ старше 60 единиц, клиент не получит пиццу» — starved-проверки [```34```](https://convecs.inria.fr/doc/publications/Duran-Salaun-17.pdf)[```33```](https://cai.type.sk/content/2021/5/formalization-and-model-checking-of-bpmn-collaboration-diagrams-with-dd-lotos/5503.pdf) |
| **SPIN + BPMN** (кейс телемедицины COVID-19) | BPMN → Promela + LTL-свойства когнитивной модели | SPIN | Безопасность пациента: полная верификация процесса удалённого мониторинга [```1```](https://github.com/ericmercer/SPIN-bpmn-cwp-verification-paper) |
| **GIVUP / VBPMN** (2025) | Текстовое описание → LLM генерирует BPMN + LTL-свойство | LNT → CADP (Büchi-автомат через SPOT) | 9 LTL-паттернов; контрпример подсвечивается прямо на BPMN-диаграмме [```5```](https://convecs.inria.fr/doc/publications/Nivon-Salaun-Lang-25.pdf) |
| **Вероятностный BPMN** | BPMN → LTS → вероятностная PTS по трассам из мониторинга | MCL (действие-ориентированная ветвящаяся логика), CADP | Вероятностные свойства исполнения в рантайме [```32```](https://cadp.inrialpes.fr/ftp/publications/others/Falcone-Salaun-Zuo-22.pdf) |
| **NIST PSL (ISO 18629)** | Онтология процессов (KIF/CLIF) | Интерлингва для обмена, без верификации | Совместимость систем, а не свойства — тёзка PSL, но другая сущность |

## Взаимосвязь с BPMN подробно

### Общий конвейер

Практически все работы устроены одинаково — это классическая модель-checking-схема, натянутая на BPMN:

1. **BPMN-модель** — вход от аналитика, без изменений нотации.
2. **Формализация**: модель переводится в одну из формальных представлений — Крипке-структуру (часто напрямую, минуя сети Петри), Promela, WF-сеть, процессное исчисление (LNT, CSP+T, DD-LOTOS). [```12```](https://hal.science/hal-03108809v1/document)
3. **Свойства** формулируются в LTL/PLTL (или CTL/TCTL, если нужна ветвящаяся или временная логика).
4. **Model checker** даёт вердикт или контрпример.
5. **Контрпример отображается обратно** на BPMN-диаграмму — подсвечиваются элементы, вызвавшие нарушение. [```5```](https://convecs.inria.fr/doc/publications/Nivon-Salaun-Lang-25.pdf)[```8```](https://www2.informatik.hu-berlin.de/~weidlima/pubs/awad_icsoc_2009_specification_verification.pdf)

Ключевой методологический пункт: BPMN — полуформальная графическая нотация, напрямую в верификаторы не подаётся, поэтому вся разница между подходами — в том, *через какой* промежуточный формализм она прогоняется. [```30```](https://ceur-ws.org/Vol-458/panel2.pdf)

### Как элементы BPMN ложатся на темпоральные формулы

Стандартная кодировка: для каждой задачи `A` вводятся атомы `E_A` («задача разрешена») и `ex_A` («задача исполнена»). Дальше маппинг такой: [```10```](https://hal.science/hal-03108796v1/document)

- **Sequence flow** — оператор `next` / импликация следования.
- **XOR-шлюз** — дизъюнкция возможных путей.
- **AND-шлюз** — требование синхронности ветвей. Классический пример из работ: если два стартовых события `S1`, `S2` не стартуют синхронно, трассы `σ1`, `σ2` приводят к состоянию `{exA, exB}`, в котором нарушается формула отсутствия deadlock. [```2```](https://hal.science/hal-03108820/document)
- **Атомные свойства** — тактовый сигнал не нужен; каждый исполняемый шаг BPMN — это дискретное событие, и линейное время трассы точно соответствует логике LTL. В этом смысле BPMN-мир «удобнее» для темпоральной логики, чем RTL-схемы: там как раз нужен тактирующий аппарат PSL и SERE.

### Комплаенс-правила: BPMN-Q

Самая проработанная линия. BPMN-Q — визуальный язык запросов, построенный поверх BPMN: правило формулируется как запрос-диаграмма, похожая на сам процесс. Конвейер из семи шагов: выбор релевантных подграфов → редукция → генерация формул → model checking. Пример сгенерированной формулы из статьи: [```9```](https://www.researchgate.net/publication/221586020_Efficient_Compliance_Checking_Using_BPMN-Q_and_Temporal_Logic)[```6```](https://www.academia.edu/3235220/Efficient_compliance_checking_using_bpmn_q_and_temporal_logic)

```
G( (submit deposit → F(record customer info)) ∧
   (open account → O(record customer info)) )
```

где `F` — «когда-нибудь», а `O` — оператор *прошлой* логики PLTL («когда-то ранее») — именно расширенная версия с прошлым позволила выражать правила вида «аккаунт открывается только после одобрения рейтинга» (антиотмывочные правила R1–R4 для банковского процесса). Для data-aware правил используется temporal logic querying: запрос `G(ready(a) → state(?dob, ?st))` выясняет, в каких состояниях данные позволяют исполнить активность. [```8```](https://www2.informatik.hu-berlin.de/~weidlima/pubs/awad_icsoc_2009_specification_verification.pdf)

### Комплаенс-правила: G-LTL

Альтернативный подход — не запросы, а графическая нотация G-LTL, которая даёт тот же уровень абстракции, что и BPMN, но компилируется в LTL; BPMN переводится в структуру Крипке напрямую, без сетей Петри. Пример правил для процесса возмещения расходов, проверяемых в EpiSpin: [```10```](https://hal.science/hal-03108796v1/document)

```
ltl R1 { [](( !ReceiveExpenseReport:exist==1) -> <> createExpenseAccount@C ) }
ltl R2 { []((PreApproval: Amount<200) -> AutoApp@A) }
ltl R3 { [](<>( AppBSupervisor:approved == 1) ->
          (( TransferMoney@T && !Notification@N) U
           (!TransferMoney@T &&  Notification@N))) }
```

Обратите внимание на `R2`: это уже не чистый control flow — в атом встроено значение данных (`Amount<200`), и проверяется гибридное свойство «данные + порядок».

### Структурная корректность: soundness как набор LTL-свойств

Классический критерий soundness для BPMN раскладывается на три подсвойства: **option to complete** (экземпляр всегда может завершиться), **proper completion** (при завершении каждый токен в отдельном конечном событии), **no dead activities** (каждая активность исполнима хотя бы в одном экземпляре). Их выражают формулами вида `◇(○⊥ ∧ ¬Final)` — существование тупикового состояния, не являющегося финальным. Инструменты: BProVe (верификация за единицы миллисекунд на реалистичных моделях, но деградация при высокой параллельности — 17 параллельных ветвей уже проблематичны) и старый проверенный путь через Woflan/ProM. [```15```](https://arxiv.org/html/2407.03965)[```4```](https://www.researchgate.net/publication/236238522_Detecting_structural_errors_in_BPMN_process_models)[```13```](https://github.com/rahman41i/Car-Repair-Modeling-and-Analyzing)

### Что здесь от PSL как такового

Точная стыковка — через общее ядро. Заявление Declare `response(A,B)` = `G(A → F B)` — это в точности PSL-форма `always (A |-> eventually B)`; шаблон `chain response` соответствует PSL-импликации `{A} |=> {B}` (не перекрывающаяся суффиксная импликация, сдвиг на такт); `not co-existence` — это `never`. Отличия принципиальны в трёх местах: у PSL есть **SERE** (регулярные выражения над последовательностями) — для BPMN аналог «последовательность задач» вырождаются в тривиальные цепочки; есть **тактирование `@`** — в BPMN нет часов, событие-driven время; и есть **прерывания `abort`** — аналог завершения/компенсации в BPMN-подпроцессах, но без встроенной семантики. [```17```](https://masters.donntu.ru/2012/fknt/gorokhov/library/grushvitskiy_design2.pdf)[```20```](https://firsteda.com/news/achieving-better-coverage-with-vhdl-part-2/)

### Ограничения, о которых пишут сами авторы

- Часть конструкций BPMN не переводится в сети Петри корректно: multiple instances, exception handling, message flows. [```29```](https://hal.science/hal-03108809/document)
- Взрыв пространства состояний при параллелизме — отсюда редукция графов в BPMN-Q и частичный порядок в Петри-чекерах. [```6```](https://www.academia.edu/3235220/Efficient_compliance_checking_using_bpmn_q_and_temporal_logic)
- Интерпретация вердиктов требует предметных знаний: модель-чекер даёт «нет», но выяснить, где именно логическая ошибка правила, а не модели, — задача аналитика. [```3```](https://www.academia.edu/98154294/Efficient_Compliance_Checking_Using_BPMN_Q_and_Temporal_Logic)

Если нужно, могу свести маппинг «шаблон Declare ↔ PSL-оператор» в отдельную точную таблицу с формулами — это, по сути, словарь перевода между обоими мирами.

## 4
покажи на простых примерах как BPMN может сочетаться с каждыми :
- PSL - (IEEE 1850)
- PSL - (NIST, ISO 18629)
- Business PSL, Business Property Specification Language (BPSL)

Уточню детали по BPSL, чтобы примеры были точными, а не по памяти.
Договорились на простое. Возьму **одну** игрушечную BPMN-модель и прогоню её через все три «PSL» — так будет видно, что в каждом случае от BPMN берут разное.

## Наша BPMN-модель

Небольшой процесс «Обработка заказа»:

```
  (Старт)
     ↓
[Получить заказ]  ← задача A
     ↓
[Проверить оплату] ← задача B
     ↓
  <Оплата ок?>  ← XOR-шлюз
  да ↓        ↘ нет
[Собрать товар]   [Отменить заказ]
  C ↓                C'
[Отправить]  (Конец)
  D
```

Теперь три разных взгляда на эту картинку.

## 1. PSL (IEEE 1850) — «напишу свойства, которыми проверю поведение»

Здесь BPMN отвечает на вопрос *«как процесс работает?»*, а PSL — на вопрос *«как он обязан работать?»*. Каждый шаг BPMN превращается в булевский сигнал: сигнал `C` поднят, пока выполняется задача «Собрать товар». Дальше свойства пишутся на темпоральной логике:

```
// 1. Safety: нельзя отправить товар, если оплата так и не прошла
always (delivered -> paid_once)

// 2. Liveness: любой принятый заказ рано или поздно закончится
//    (либо отправкой, либо отменой — не зависнет навсегда)
always (order_received -> eventually (delivered || cancelled))

// 3. Порядок: сразу за успешной проверкой оплаты идёт сборка
{payment_ok} |=> {picking}
```

Что здесь важно для понимания:

- Сигналы — это *события исполнения*, у BPMN нет тактовой частоты, поэтому такты PSL трактуются как «шаги выполнения процесса».
- Это уже не описание процесса, а **контракт на его трассы**: модель-чекер берёт все мыслимые варианты исполнения BPMN-модели (все пути через XOR, все перемешивания параллельных ветвей, если бы они были) и проверяет, нарушает ли хоть один из них формулу. Если нарушает — показывает трассу-контрпример: «вот путь, где отправили без оплаты».
- SERE-выражения вида `{A; B}` — это аналог стрелок BPMN: «сначала A, потом B».

Итог: **IEEE PSL поверх BPMN = система страховки**. BPMN-модель рисует и исполняет, PSL-формулы судят.

## 2. PSL (NIST, ISO 18629) — «опишу процесс как факты, чтобы передать другой системе»

Совсем другая история: верификации тут нет и в помине. NIST PSL — это онтология на логике первого порядка (язык KIF) для **обмена процессной информацией** между разными системами. Ядро крошечное: четыре класса (`activity`, `activity_occurrence`, `timepoint`, `object`), две функции (`beginof`, `endof`) и семь отношений (`before`, `occurrence_of`, `participates_in`…). [```nvlpubs.nist.gov```](https://nvlpubs.nist.gov/nistpubs/Legacy/IR/nistir6459.pdf)[```files.stroyinf.ru```](https://files.stroyinf.ru/Data/569/56986.pdf)

Та же BPMN-модель переводится в набор фактов:

```lisp
; типы: каждый шаг BPMN — это activity
(activity get_order) (activity check_payment) (activity pick) (activity ship)

; каждое реальное выполнение шага — activity_occurrence со своим началом и концом
(occurrence_of occ_42 check_payment)
(before (endof occ_42) (beginof occ_43))          ; проверка закончилась раньше сборки

; объекты-участники и ресурсы
(participates_in manager occ_42 t1)               ; менеджер участвовал в проверке
(requires pick item)                              ; сборке нужен товар
```

Зачем это нужно? Допустим, ваш BPMN-инструмент рисует процесс, а ERP-система планирует производство. Они говорят на разных языках, и «Собрать товар» в них значит немного разное. NIST PSL — **нейтральный переводчик**: BPMN-модель выгружается в PSL-факты, а ERP загружает их себе — и обе стороны гарантированно понимают «до», «после», «кто участвовал» одинаково. [```files.stroyinf.ru```](https://files.stroyinf.ru/Data/569/56986.pdf)

Заметная разница с первым PSL: здесь *нет* ветвлений и «возможных путей» как понятий — описание процесса по ISO 18629 не содержит условных предложений, каждый факт — констатация. [```files.stroyinf.ru```](https://files.stroyinf.ru/Data/569/56986.pdf) XOR-шлюз BPMN просто не переносится напрямую — переносятся конкретные исполнения.

Итог: **NIST PSL рядом с BPMN = переводчик для обмена**, а не судья.

## 3. BPSL (Business Property Specification Language) — «напишу правило комплаенса, но по-человечески»

BPSL — это IBM-овский ответ на известную боль: «писать правильные формулы темпоральной логики сложно». Это графический язык свойств, где логические операторы заменены наглядными блоками, а готовые шаблоны (ExistWithin, Temporal Sequence и т. д.) можно собирать мышкой; дальше всё это автоматически переводится в LTL и прогоняется через модель-чекер. [```citeseerx.ist.psu.edu```](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.117.7871&rep=rep1&type=pdf)[```archive.org```](https://archive.org/stream/bitsavers_ibmIBMSyst_569018/liu_djvu.txt)

В нашей модели заказа правило «сначала проверка оплаты, потом сборка» в BPSL выглядит примерно так (упрощённо, блоки вместо формул):

```
[PaymentChecked] ──TS──▶ [PickGoods]        ← Temporal Sequence: за A следует B
        ◇                                    ← Compensation Property:
                                              правило мягкое: если оплаты не было
                                              вообще (заказ отменён) — это не нарушение
```

Компенсационное свойство (`cp`) — фирменная фишка BPSL: свойство считается выполненным, даже если основное условие не сработало, но выполнилось условие-«компенсация». [```citeseerx.ist.psu.edu```](https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.117.7871&rep=rep1&type=pdf) Это ровно то, что в BPMN-мире вечно нужно: «правило действует, если процесс пошёл по ветке X».

Классический кейс из статьи авторов BPSL — открытие банковского счёта с антиотмывочными правилами: BPEL-процесс формализуется через пи-исчисление в конечные автоматы, BPSL-правила (статья 11: информация о клиенте должна быть *проверена* прежде, чем *записана* в систему) переводятся в LTL, и OPAL-чекер нашёл реальное нарушение — путь из 54 состояний, где информация записывалась раньше проверки. [```archive.org```](https://archive.org/stream/bitsavers_ibmIBMSyst_569018/liu_djvu.txt)

По сути BPSL — это «PSL в мире BPM»: то же темпоральное ядро, но атомы — бизнес-активности, нотация — графическая, а цель — комплаенс.

## Сводка: одна BPMN-модель, три роли

| | IEEE 1850 PSL | NIST PSL (ISO 18629) | BPSL |
|---|---|---|---|
| Что берём из BPMN | Трассы исполнения, шаги = сигналы | Задачи = activity, выполнение = occurrence | Шаги = бизнес-блоки в правилах |
| Что получаем | Свойства-контракты (safety/liveness) | Нейтральные факты для обмена | Правила комплаенса, графические |
| Формализм | LTL + SERE | KIF, логика первого порядка | Визуальные шаблоны → LTL |
| Кто работает | Модель-чекер судит модель | Ни одного чекера — просто обмен | Чекер судит модель на нарушения |
| Простой пример | «нельзя отправить без оплаты» | `(before (endof occ_42) (beginof occ_43))` | «проверь клиента до записи в систему» |

То есть: IEEE PSL проверяет поведение BPMN, NIST PSL переводит BPMN на понятный соседям язык, BPSL позволяет бизнес-аналитику без математики писать те же темпоральные правила.

Могу нарисовать эту же модель заказа как настоящую диаграмму со всеми тремя аннотациями рядом с элементами — нагляднее любого текста.


