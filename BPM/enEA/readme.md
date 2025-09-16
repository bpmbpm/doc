### FOSS Tools
- archi
- ADOxx
- Essential https://enterprise-architecture.org/

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
- [Horizzon](https://help.bizzdesign.com/articles/#!horizzon-help/nested-objects-and-relations-in-archimate-models/a/h1__1594387577) Semantical nesting (однотипные объекты во вложении) & Graphical nesting 
- Archi (вроде есть), какой раздел ? [pdf](https://www.archimatetool.com/downloads/archi/Archi%20User%20Guide.pdf)

##### Nesting Type
- Стрелочный Nesting, в ArchiMate: состав (Composition) \ агрегация (Aggregation)
- Кластерный Nesting - это включение в один "большой" (родительский) квадратище из других "маленьких" (дочерних) квадратиков, например, в dot [subgraph cluster_0](https://graphviz.org/Gallery/directed/cluster.html) 
- Заголовочный Nesting - каждая схема включает набор ее элементов (trig в LD).
  - Исключительный Заголовочный Nesting. Бывают исключения. Если любое вложениме (стрелочное, кластерное, заголовочное) иммет отношение:  
``` :Х :имеетВсоставе :Y ``` или альтернатовно ``` :Y :входитВсостав :X ```  
    то например в VAD+ (специфичнсый VAD проекта draw-vad) на схеме процесса указываем объекти типа "Предваряющий процесс" и "Последующий процесс", которые входят в состав схемы процесса, но не входят в состав процесса (отображаемого этой схемой). Это пример Исключительного Заголовочного Nesting.  

#### Итого
4 варианта. Первые два: [без явного указания - кластерный и с явным указанием типа связи \ предиката:](https://help.bizzdesign.com/articles/#!horizzon-help/nested-objects-and-relations-in-archimate-models)
![ris](https://help.bizzdesign.com/resources/Storage/horizzon-help/nested-objects-and-relations-in-archimate-models/nested_objects_view_with%28out%29_relation.png)

Плюс еще два: заголовочный и в составе структурной (иерархической) схемы. 

### См. также
- https://github.com/bpmbpm/doc/tree/main/BPM/enBPM/ADOxx
- https://modeling-languages.com/
- https://t.me/c/1304614627/29075 Архитектурный Вавилон, в поисках общего языка
