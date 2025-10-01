### integration scheme
Какая онтология схем интеграции? Как правильно показывать интеграцию систем? Интеграцию ИТ-систем.

### Как показывают в EPC и ArchiMate
- [Understanding Dynamic Relationships in ArchiMate: Triggering and Flow](https://www.archimetric.com/understanding-dynamic-relationships-in-archimate-triggering-and-flow/)
- EPC-fun: [function.md](https://github.com/bpmbpm/doc/edit/main/METAMODEL/PROCESS/function.md)

![ris1](pic/INT_relation_1.svg)

### Онтологическая картинка

#### Природа соединения sys-sys
Это не первичное (исходное, изначальное) соединение, а производное соединение.  
См. рис. с:  
![ris1](pic/INT_fun_link_1c.svg)

Первичные связи опускаются и на рис. c1\c2\c3 показаны интеграции в популярных визуализациях. 

Примеры (1–10) [Представление интеграции приложений (динамические отношения)](https://blog.visual-paradigm.com/ru/archimate-examples/) вызывают вопрос - зачем такое разнообразие?   
Отталкиваясь от модели (формулы) визуализации sys-(doc)-sys link  отметим, что подобный подход (data object – как элемент \ свойство линии), но где вместо system использован function (процесс) распространен в BPMN, см. 3х Data object Links
https://github.com/bpmbpm/doc/blob/main/BPM/notation/BPMN/connections.md#3%D1%85-data-object-links

### example
[database-link rdf-star](https://github.com/bpmbpm/doc/blob/main/LD/RDF_star/readme.md#database-link)

