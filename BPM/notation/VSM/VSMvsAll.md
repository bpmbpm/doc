## VSM
### 1 VSM_Lean vs VSM_TOGAF 
https://github.com/bpmbpm/doc/blob/main/BPM/notation/VSM/VSMvsVSM.md

### 2 Porter_VAD_VSM
1. Цепочка создания ценности (Портер)
Майкл Портер представил эту концепцию в 1985 году в книге «Конкурентное преимущество». Это стратегический инструмент. Он предлагает разбить деятельность компании на виды (первичные и вспомогательные), чтобы понять, на каких этапах формируется ценность для клиента и где есть потенциал для снижения издержек или дифференциации. Фокус — на анализе источников конкурентного преимущества, а не на детальном описании операционных процессов для автоматизации. https://www.wevalgo.com/know-how/lean-management/lean-methods-tools/vsm
- Есть уточнение: Концепцию цепочки создания ценности предложил Майкл Портер в книге «Конкуренция», изданной в 1980 году. http://www.facilab.pro/cards/204


2. VAD (Value-Added Chain Diagram) в ARIS
Нотацию VAD разработал Август-Вильгельм Шеер в рамках методологии ARIS (Architecture of Integrated Information Systems). Сам продукт ARIS впервые вышел в 1994 году. VAD — это нотация для моделирования бизнес-процессов. Её задача — визуализировать функции, которые напрямую создают ценность для клиента, на верхнем уровне. Диаграмма даёт общую картину: показывает последовательность ключевых процессов и их взаимосвязи. При этом элементы VAD можно детализировать — декомпозировать на более низкие уровни VAD или переходить к более детальной нотации (например, EPC). То есть это инструмент для процессного управления: чтобы описать «как есть» и «как должно быть», найти узкие места и заложить основу для оптимизации или автоматизации. 
cyberleninka.ru +3
https://cyberleninka.ru/article/n/history-of-development-of-the-method-of-map-flows-of-creation-of-value ; https://tettra.com/article/flowcharts/ ; https://www.osp.ru/os/2026/01/13060495

4. VSM (Value Stream Mapping)
Тут важно сразу развеять миф: VSM не изобрели в Вумековском институте. На самом деле корни инструмента глубже — они в Toyota Production System (TPS). Конкретно термин и практика зародились в Отделе консалтинга операционного менеджмента (Operations Management Consulting Division, OMCD) компании Toyota. Там этот инструмент использовали как аналитическую помощь: чтобы визуализировать потоки материалов и информации при внедрении бережливого производства, в том числе при работе с поставщиками.
https://cyberleninka.ru/article/n/history-of-development-of-the-method-of-map-flows-of-creation-of-value ; https://cyberleninka.ru/article/n/razvitie-i-primenenie-kart-potoka-sozdaniya-tsennostey ; https://projectproduction.org/journal/operations-science-view-of-value-stream-mapping/ ; https://michelbaudin.com/2013/10/25/where-do-value-stream-maps-come-from/

А вот Джеймс Вумек (основатель Lean Enterprise Institute) вместе с Дэниелом Джонсом сыграли ключевую роль в том, чтобы вывести этот инструмент за пределы Toyota и популяризировать его в мире. В книге Lean Thinking (1996) они ввели само понятие «поток создания ценности» (value stream) и предложили метод его картирования. Позже Джон Шук и Майк Ротер в рабочей тетради Learning to See (издана Lean Enterprise Institute) ещё сильнее закрепили практику, сделав её доступной для широкого применения вне Японии. 
https://www.wevalgo.com/know-how/lean-management/lean-methods-tools/vsm ; https://projectproduction.org/journal/operations-science-view-of-value-stream-mapping/ ; https://blog.gembaacademy.com/2009/02/10/where_did_value_stream_mapping_come_from/ ; https://www.industryweek.com/operations/continuous-improvement/video/21963618/take-the-value-stream-walk-presentation-by-jim-womack

Суть VSM — в визуализации всего потока (материального, информационного, иногда человеческого), который проходит продукт от идеи до потребителя. Цель — наглядно выявить потери (муда) и наметить шаги по улучшению потока. Часто строят две карты: текущего состояния (чтобы диагностировать проблемы) и будущего (чтобы спроектировать улучшенный процесс). 
[wevalgo.com](https://www.wevalgo.com/know-how/lean-management/lean-methods-tools/vsm) ; https://www.lean-consult.ru/blog/karta-potoka-sozdaniya-tsennosti-vsm/

Что в итоге: сходства и различия
- Сходство: все три подхода так или иначе связаны с идеей ценности — как её создают, где она формируется и как её можно усилить.
- Различие в фокусе и уровне детализации:
  - Портер — стратегия, анализ источников конкурентного преимущества на макроуровне.
  - VAD (ARIS) — моделирование бизнес-процессов на верхнем уровне, чтобы структурировать деятельность и подготовить почву для детальной проработки.
  - VSM — операционная детализация потока (материалы, информация, люди), фокус на выявлении и устранении потерь в бережливом производстве.

Это не конкурирующие, а дополняющие друг друга инструменты для разных задач: от стратегического анализа до детальной оптимизации операционных потоков.

### 3 Where do «Value Stream Maps» come from?
кто и как рисовал процессы и откуда, взялись карты потоков

**Ссылка:** [Where do «Value Stream Maps» come from?](https://projectproduction.org/journal/operations-science-view-of-value-stream-mapping/) (Мишель Боден, 25 октября 2013 года). Статья опубликована в личном блоге автора — michelbaudin.com. [```14```](https://projectproduction.org/journal/operations-science-view-of-value-stream-mapping/)[```15```](https://customerscience.com.au/uncategorized/value-stream-mapping-for-services/)[```8```](https://michelbaudin.com/)

**О чём в ней рассказывается.** Боден задаётся вопросом: откуда взялся термин «карта потока создания ценности» (Value Stream Map, VSM) и как развивалась сама практика визуализации потоков? В ходе исследования он прослеживает историю инструмента и развенчивает некоторые распространённые мифы. [```1```](https://cyberleninka.ru/article/n/razvitie-i-primenenie-kart-potoka-sozdaniya-tsennostey)[```2```](https://vestnik.pstu.ru/get/_res/fs/file.pdf/11186/%D0%C0%C7%C2%C8%D2%C8%C5+%C8+%CF%D0%C8%CC%C5%CD%C5%CD%C8%C5+%CA%C0%D0%D2+%CF%CE%D2%CE%CA%C0++%D1%CE%C7%C4%C0%CD%C8%DF+%D6%C5%CD%CD%CE%D1%D2%C5%C9file.pdf)

**Ключевые выводы и факты из статьи:**
* **Истоки в Toyota.** Практика визуализации потоков (материалов и информации) зародилась в Отделе консалтинга операционного менеджмента (OMCD) компании Toyota в рамках развития Toyota Production System (TPS). Там этот инструмент использовали, в частности, при работе с поставщиками. [```1```](https://cyberleninka.ru/article/n/razvitie-i-primenenie-kart-potoka-sozdaniya-tsennostey)[```14```](https://projectproduction.org/journal/operations-science-view-of-value-stream-mapping/)[```2```](https://vestnik.pstu.ru/get/_res/fs/file.pdf/11186/%D0%C0%C7%C2%C8%D2%C8%C5+%C8+%CF%D0%C8%CC%C5%CD%C5%CD%C8%C5+%CA%C0%D0%D2+%CF%CE%D2%CE%CA%C0++%D1%CE%C7%C4%C0%CD%C8%DF+%D6%C5%CD%CD%CE%D1%D2%C5%C9file.pdf)
* **Изначальное название.** Важно: сами специалисты Toyota **не называли** это «картой потока создания ценности». В компании инструмент именовали **Material and Information Flow Diagram** (диаграмма материальных и информационных потоков). [```14```](https://projectproduction.org/journal/operations-science-view-of-value-stream-mapping/)[```18```](https://projecto.pro/blog/theory/value-stream-mapping/)
* **Как термин «Value Stream» появился в обиходе.** Позже инструмент попал в США — его привозил Toyota Supplier Support Center (TSSC). Но и тогда термин «value stream» в обиходе не закрепился. Именно **Джеймс Вумек и Дэниел Джонс** в книге *Lean Thinking* популяризировали само понятие «поток создания ценности» (value stream) и призвали читателей составлять такие карты. [```14```](https://projectproduction.org/journal/operations-science-view-of-value-stream-mapping/)
* **Важное уточнение про универсальность.** Боден подчёркивает: даже в Toyota этот инструмент не позиционировался как универсальное средство для поиска всех видов потерь. Он применялся точечно — там, где были проблемы с потоками материалов и информации. [```14```](https://projectproduction.org/journal/operations-science-view-of-value-stream-mapping/)

В целом статья даёт хороший исторический контекст: она показывает, что VSM — это не изначально глобальная методология, а инструмент, который эволюционировал и был адаптирован за пределами исходной среды. [```14```](https://projectproduction.org/journal/operations-science-view-of-value-stream-mapping/)[```2```](https://vestnik.pstu.ru/get/_res/fs/file.pdf/11186/%D0%C0%C7%C2%C8%D2%C8%C5+%C8+%CF%D0%C8%CC%C5%CD%C5%CD%C8%C5+%CA%C0%D0%D2+%CF%CE%D2%CE%CA%C0++%D1%CE%C7%C4%C0%CD%C8%DF+%D6%C5%CD%CD%CE%D1%D2%C5%C9file.pdf)

Боден пишет живо, приводит интересные детали и ссылки на другие источники, так что материал легко усваивается.   
[```14```](https://projectproduction.org/journal/operations-science-view-of-value-stream-mapping/)  
[```17```](https://www.scoop.it/topic/tls-toc-lean-six-sigma/p/4149923914/2023/12/30/where-do-value-stream-maps-come-from-article-by-michel-baudin)

