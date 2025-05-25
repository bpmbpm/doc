Documentation used in my projects: [SemanticBPM](https://github.com/bpmbpm/SemanticBPM) ; [doc-раздел к нему](https://github.com/bpmbpm/doc/tree/main/Project/SemanticBPM) 
# 1 Оглавление библиотеки
## BPM
### ARIS
#### SCHEER
##### BASE
1. [ARISmet24] [ARIS Method Manual VERSION 10.0 - SERVICE RELEASE 27 AND HIGHER OCTOBER 2024](https://bpmbpm.github.io/doc/BPM/ARIS/SCHEER/BASE/10-0sr6_Method_Manual.pdf)
pdf [Исходный:](https://docs.aris.com/10.0.27.0/yaa-method-guide/en/Method-Manual.pdf)
2. [ARISMR17] [ARIS Method Reference Version 10.0 - Service Release 3  December 2017](https://bpmbpm.github.io/doc/BPM/ARIS/SCHEER/BASE/ARIS_10-0sr3_Method_Reference.pdf) pdf
3. [on-line Method Reference](https://docs.aris.com/10.0.27.0/yay-method-reference/en/#/home/494393/en/1) (на раздел VAD)
## IT
### CIO
Учебник 4CIO
## 1.1 Проблемы
### Прямые ссылки
Для ссылок на страницу документа pdf требуется указать #page=xx. Однако известные сервисы: Adobe Document Cloud, Dropbox, Google Drive, 4Shared и [сотня подобных](https://www.reddit.com/r/DataHoarder/comments/vm2xtm/cloud_storage_providers_for_free_storage/) не дают прямых ссылкок на файл pdf. Ссылка на страницу pdf в них не возможна.   

[мы дошли до того, что обсуждается Web3, но на большинстве популярных сервисов мы лишились абсолютно базовой функциональности, чтобы (ух ты!) получить файл по ссылке](https://www.reddit.com/r/DataHoarder/comments/yl2b2h/what_online_storage_lets_you_create_a_direct_link/)  
Ничего лучше не придумал, чем создать в отдельном проекте github хранилище документации, используемой в своих проектах. 
Одна из проблем - это ограничение у github на загрузку файл более 25 Мб. Для уменьшения размера использовал: compress на ilovepdf.com & split на bigpdf.11zon.com
### Вызов нужной страницы pdf по прямой ссылке
Чтобы обратиться к нужной страницие, например, #page=32, этой библиотеки нужно вызывать не (github.com/bpmbpm): 
https://github.com/bpmbpm/doc/blob/main/BPM/ARIS/SCHEER/BASE/10-0sr6_Method_Manual.pdf#page=32

а соответсвующую страницу Github Pages (bpmbpm.github.io):  
https://bpmbpm.github.io/doc/BPM/ARIS/SCHEER/BASE/10-0sr6_Method_Manual.pdf#page=32  
Будет показана: **"4.1.1.1 Function tree"**  
Таже помнимм, что в браузере есть "Copy link to highlight": Выделяем текст на странице, щелчок правой кнопкой мыши и в контекстном меню выбираем "Копировать ссылку на выделенный текст"  
### Номера страниц со знаком  
Часто нумерация страниц в pdf-файле отличается от источника, чаще на 1. Поэтому часто пишу так:  
Бернерс-Ли [EnterpriseModeling.pdf c23+1] (https://bpmbpm.github.io/doc/LD/trinidata/EnterpriseModeling.pdf#page=24)  

### "Диверсии"
Также склад материалов решает проблему удаления и перкладывания материалов на внешних источниках. Например, ARIS Method Manual и Method Reference годами лежали на постоянных ссылках docs.aris.com, но потом там зачем-то поперекладывали эти книжки и прежние ссылки перестали работать.  
### Поиск книг
#### Онтология предприятия
- [Ян Дитц, Ганс Малдер. Онтология предприятия. Человекоцентричный подход к пониманию сущности организации](https://ontograph.ru/ontologiya-predpriyatiya-cheloveko-tsentrichnyy-podhod-k-ponimaniyu-suschnosti-organizatsii/)
- [Скворцов В. И. «Технологические основы использования системы ARIS Toolset 7. 0»](https://dic.academic.ru/book.nsf/65510434/%D0%A2%D0%B5%D1%85%D0%BD%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5+%D0%BE%D1%81%D0%BD%D0%BE%D0%B2%D1%8B+%D0%B8%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F+%D1%81%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D1%8B+ARIS+Toolset+7.+0)
# 2 Закладки 
[склад miro](https://miro.com/app/board/uXjVPMeMjGI=/)
## Закладки BPM 
### Графические векторные редакторы
- основные: visio, drawio, yEd, 
- SVG: некоторые lib [deeplook - конвертирование SVG в другие форматы](https://github.com/deeplook/svglib) ; 
- Другие: 1 Онлайн-редактор для рисования схем [dgrm.net](https://dgrm.net/ru/) ;
- [Предлагаю еще "в уме держать"...](https://github.com/bpmbpm/SemanticBPM/blob/main/docs/implementations.md#upd1-bpmbpm)
### BPM-системы / инструменты
#### visio-based BPM
- Busines Studio
- BPM-X: [osp.ru](https://www.osp.ru/) ; полный вариант: [часть 1](https://learn.microsoft.com/ru-ru/archive/blogs/visio_ru/108) ,  [часть 2](https://learn.microsoft.com/ru-ru/archive/blogs/visio_ru/108-2) , [часть 3](https://learn.microsoft.com/ru-ru/archive/blogs/visio_ru/108-3)
- process4.biz: [sourceforge](https://sourceforge.net/) ; [github](https://github.com/process4/docs/tree/master) ; [press](https://www.pressetext.com/news/yaveon-tochter-process4biz-als-microsoft-visio-partner-des-jahres-ausgezeichnet.html)
- Enterprise Explorer
- Orbus iServer: [Обзор](https://koptelov.info/orbus-iserver/) ; [Руководство](https://orbus.blob.core.windows.net/ecosystem/user-guides/russian/1%20iS2019%20%D0%A0%D1%83%D0%BA%D0%BE%D0%B2%D0%BE%D0%B4%D1%81%D1%82%D0%B2%D0%BE%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F%20iServer.pdf) ; ВТБ использует
#### Некоторые BPMS 
ARIS ; [fujitsu i-Flow](https://www.fujitsu.com/downloads/SG/fapl/workflow/iflow_whitepaper.pdf) ; 
##### MegA (BPM \ EA \ GRC \ Data Gov)
[mega.com](https://www.mega.com/bmp-business-process-management-tool) ; [ru1](http://mega.mag-records.ru/it-architecture-modeling.html) ; [press](https://mega-bpmi.blogspot.com/) ; [hopex-bpm](https://www.mega.com/product-hopex-bpm-pricing)
### Некоторые графические нотации
- BPM: VAD, EPC, [Дракон](https://habr.com/ru/articles/541478/), BPMN, UML (Sequence diagram, Activity diagram,  State machine), ГОСТ 19.701-90 (ИСО 5807-85). [Semantic Drakon, идея](https://forum.drakon.su/viewtopic.php?f=143&t=7463)
- EA: Archimate, [C4, вкл. tool](https://habr.com/ru/articles/778726/)
- code to dia: 1 plantUML / [UML sequence-диаграмма](https://habr.com/ru/articles/814769/) ;
- Обзоры нотаций: [1](https://infostart.ru/pm/1435952/)
- Редкие: [turtle](https://www.surajmech.com/2020/03/turtle-diagram-in-iatf-169492016.html)
- Страничка по [нотациям BPM \ EA](https://github.com/bpmbpm/doc/tree/main/BPM/notation), пока пустая
## Закладки EA
### Классификация Архитектуры (Enterprise Architecture)
Обзоры:
- [Tinkoff](https://tellmeabout.tech/architecture-decisions-6cff1a6bac1a)
### EA examples
Opengroup case-study-models:
- [Общая](https://pubs.opengroup.org/architecture/case-study-models/)
- [ArchiSurance opengroup](https://pubs.opengroup.org/architecture/case-study-models/archisurance-html/)
- [ArchiSurance github](https://github.com/archimate-models/archisurance) ; [archimate-models.github.io](https://archimate-models.github.io/archisurance/)
- [pdf](https://www.uio.no/studier/emner/matnat/ifi/INF5120/v18/Resources/archisurance-case-study.pdf)
- [ArchiMetal opengroup](https://pubs.opengroup.org/architecture/case-study-models/archimetal-html/)

Другие примеры:
- [Простая Enterprise Architecture. Архитектура компании садоводов](https://habr.com/ru/articles/726428/)
- Nepal
## Закладки Linked Data 
### Семантические "доски"
[ontonet.ru](https://ontonet.ru/)
### Linked Data
Введение: [wiki](https://en.wikipedia.org/wiki/Linked_data) ; [на примере родословных](https://habr.com/ru/articles/270857/) ; 
#### Книги
- [Сергей Горшков, Введение в онтологическое моделирование ревизия 2.4](https://trinidata.ru/files/SemanticIntro.pdf) детальнее: https://github.com/bpmbpm/doc/tree/main/LD/trinidata
#### RDF
- [rdf11-primer](https://www.w3.org/TR/rdf11-primer/)
- Визуализация наборов данных RDF [Ontodia](https://github.com/metaphacts/ontodia/). Муромцев, Д., Павлов, Д., Емельянов, Ю., Морозов, А., Раздьяконов, Д. и Галкин, М., 2015. Простой веб-инструмент для визуализации и обмена семантическими данными и онтологиями.
- Реификация: [Klepikov](https://konstantinklepikov.github.io/myknowlegebase/notes/rdf.html) ;
- N-Quads: [w3.org](https://www.w3.org/TR/n-quads/) ; 
#### SPARQL
- [Язык запросов SPARQL для RDF](https://web.archive.org/web/20090401192412/http://shcherbak.net/translations/ru_sparql_shcherbak_net.html), перевод.  
- [SPARQL and SQL, w3.org](https://www.w3.org/2012/Talks/0604-SPARQL-SQL/high-level)
- Примеры SPARQL: 1 [SPARQL Query Tests](https://www.w3.org/2001/sw/DataAccess/rq23/examples.html) ; 2 [SPARQL example query](https://sparql.uniprot.org/.well-known/sparql-examples/)
- Примеры SPARQL в rdflib.js (не путать с одноименной для Python) SPARQLToQuery: 1 [linkeddata.github.io](https://linkeddata.github.io/rdflib.js/doc/functions/SPARQLToQuery.html) ; 2 [kursovaya_rabota_2.docx](https://www.kubsu.ru/sites/default/files/users/8735/portfolio/kursovaya_rabota_2_0.docx)
- [Apache Jena Fuseki - SPARQL server](https://jena.apache.org/documentation/fuseki2/)
#### LD-Инструменты
- Semantic Web Development Tools: [www.w3.org](https://www.w3.org/2001/sw/wiki/Tools) ; [search "rdf online"](https://www.google.com/search?q=rdf+online&oq=rdf+online) , [RDF grapher](https://www.ldf.fi/service/rdf-grapher) , [easyrdf.org](https://www.easyrdf.org/converter) ;
- часть 2: [rdf-visualizer](https://issemantic.net/rdf-visualizer) ; [tableconvert](https://tableconvert.com/rdf-generator) ;
- Validator: [TurtleValidator](https://github.com/IDLabResearch/TurtleValidator) ; [w3.org](https://www.w3.org/RDF/Validator/) ;
- js lib: [rdflib.js](https://linkeddata.github.io/rdflib.js/doc/index.html) ; [n3](https://www.npmjs.com/package/n3) ; [N3-components](https://github.com/N3-components/N3-components)
- Обзоры js lib: [rdf.js.org](https://rdf.js.org/) ; [w3.org rdfjs](https://www.w3.org/community/rdfjs/wiki/Comparison_of_RDFJS_libraries) ; [libhunt](https://js.libhunt.com/rdflib-js-alternatives)
- js lib для продуктов: [rdflib-neo4j](https://bigdataschool.ru/blog/rdf-analysis-in-serverless-neo4j-on-aura-with-rdflib-neo4j.html)
#### LD-Проекты
- Semantic Web: 1 [Linked Data Quality of DBpedia, Freebase, OpenCyc, Wikidata, and YAGO](https://www.researchgate.net/publication/315065385_Linked_data_quality_of_DBpedia_Freebase_OpenCyc_Wikidata_and_YAGO)
- Solid, Social Linked Data: 1 [wiki](https://ru.wikipedia.org/wiki/Solid_(%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B4%D0%B5%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B9_%D0%BF%D0%B0%D1%83%D1%82%D0%B8%D0%BD%D1%8B)), 
- [SOLID project](https://habr.com/ru/articles/539170/) EAV модель ;
- другие [LD-проекты](https://github.com/bpmbpm/doc/blob/main/LD/readme.md#ld-projects), материалы [bpmbpm/doc/LD/](LD/)
#### Онтологии
## Закладки IT
### Закладки github
[Руководство по оформлению Markdown файлов](https://gist.github.com/Jekins/2bf2d0638163f1294637)

# 3 Разное
## Некоторые проекты
- bpmbpm [SemanticBPM](https://github.com/bpmbpm/SemanticBPM) ; [habr@itGuevara](https://habr.com/ru/users/itGuevara/articles/)
- prozion [semanter](https://codeberg.org/prozion/semanter) ; [github](https://github.com/prozion)
- smer44 [Графовый семантический движок](https://github.com/smer44/graph-semantical-engine)
- Surrogate-TM [MS Visio](https://github.com/Surrogate-TM/surrogate-tm.github.io/tree/master)
- nbelyh [github](https://github.com/) ; [unmanagedvisio.com](https://unmanagedvisio.com/about/)
- bzinchenko [bpmnview](https://github.com/bzinchenko/bpmnview)  
еще (локальные сслылки):
- OpenMetamodel.org / Sirius (eclipse) [обсуждение применимости к Semantic BPM](METAMODEL/SIRIUS/SIRIUSBPM.md)
- boldsea [подборка ссылок](Project/test/boldsea/README.md)
- Nevalang [Потоко-Ориентированный ЯП](https://github.com/nevalang/neva)
- автоматическое извлечения KG из текстов [ontogpt](https://github.com/monarch-initiative/ontogpt) 
- папка [Project \ test](Project/test)
## Интересное
### Enterprise Knowledge Graph
- EKG: [Enterprise Knowledge Graph Forum](https://www.ekgf.org/) ; [DPROD](https://ekgf.github.io/data-product-spec/dprod.html#normative-references) ; [GraphArch](https://ekgf.github.io/grapharch/) ; [github](https://github.com/EKGF)
- EKG статьи: [Михаил Галкин, 17](https://www.semanticscholar.org/paper/Enterprise-Knowledge-Graphs%3A-A-Semantic-Approach-in-Galkin-Auer/ab92297e4d12a84d1b3ecb688e43f8cabbb8015d)
- semantic CMDB: [RDF-based CMDB](https://habr.com/ru/articles/854240/comments/#comment_27495234) ;
### Стандартизаторы
- OMG (BPMN, UML); OpenGoup (TOGAF, ArchiMate)
- W3C (LD, LOD, Semantic Web)
- BOK: eabok, bizbok, babok, BPM cbok, dmbok, [IASA - BTABoK](https://iasa-global.github.io/btabok). См. папки [IT/BOK](IT/BOK) ; [PM_BA](PM_BA)
## К проекту [Semantic BPM](https://github.com/bpmbpm/SemanticBPM)
- Семантическое предприятие, [проект Semantic BPM](https://github.com/bpmbpm/SemanticBPM), Semantic EA, Semantic ARIS и т.п.
- DOC-раздел на [bpmbpm/DOC](https://github.com/bpmbpm/doc/tree/main/Project/SemanticBPM) к проекту Semantic BPM
- К общему представлению семантики, понятию "знание" и семантики в бизнес-процессах [см. Иллюстрации](https://github.com/bpmbpm/doc/blob/main/BPM/semantic/README.md) и в целом папка [doc/BPM/semantic](https://github.com/bpmbpm/doc/tree/main/BPM/semantic)
- test [bpmbpm.github.io/doc](https://bpmbpm.github.io/doc/)
#### Тестирование схожих проектов
- [gse / smer44](https://github.com/bpmbpm/doc/tree/main/Project/test/gse)
- [ontonet.ru](https://github.com/bpmbpm/doc/tree/main/Project/test/ontonet)
#### Разное
- [assistants.md](https://github.com/bpmbpm/doc/blob/main/mix/assistants.md)
- [arxiv.org](https://arxiv.org/)
