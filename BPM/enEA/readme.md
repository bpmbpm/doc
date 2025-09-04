### Resource
#### Architecture Weekly
- t.me/ArchitectureWeekly
- [softwarearchitectureweekly](https://softwarearchitectureweekly.substack.com/p/architecture-weekly-163?utm_source=substack&utm_medium=email&utm_content=share)
- https://www.architecture-weekly.com/ ; https://github.com/oskardudycz/ArchitectureWeekly
### Conf
- https://modelsward.scitevents.org/
### Отдельные фишки 
#### Nesting
Вложение (Nesting) элементов друг в друга:
- [visual-paradigm](https://www.visual-paradigm.com/support/documents/vpuserguide/4455/4409/86501_useofnesting.html)
- [sparx](https://sparxsystems.com/enterprise_architect_user_guide/17.1/modeling_languages/nesting.html)
- Archi (вроде есть)

##### Nesting Type
- Стрелочный Nesting, в ArchiMate: состав (Composition) \ агрегация (Aggregation)
- Кластерный Nesting - это включение в один "большой" (роительский) квадрат других "маленьких" (дочерних), например, в dot [subgraph cluster_0](https://graphviz.org/Gallery/directed/cluster.html) 
- Заголовочный Nesting - каждая схема включает набор ее элементов (trig в LD).
  - Исключительный Заголовочный Nesting. Бывают исключения. Если любое вложениме (стрелочное, кластерное, заголовочное) иммет отношение:
``` :Х :имеетВсоставе :Y ``` или альтернатовно ``` :Y :входитВсостав :X ```
    то например в VAD+ (специфичнсый VAD проекта draw-vad) на схеме процесса указываем объекти типа "Предваряющий процесс" и "Последующий процесс", которые входят в состав схемы процесса, но не входят в состав процесса (отображаемого этой схемой). Это пример Исключительного Заголовочного Nesting.   

### См. также
- https://github.com/bpmbpm/doc/tree/main/BPM/enBPM/ADOxx
- https://modeling-languages.com/
- https://t.me/c/1304614627/29075 Архитектурный Вавилон, в поисках общего языка
