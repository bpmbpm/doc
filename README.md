Documentation used in my projects
# Оглавление
## BPM
### ARIS
#### SCHEER
##### BASE
1 [ARISmet24] ARIS Method Manual VERSION 10.0 - SERVICE RELEASE 27 AND HIGHER OCTOBER 2024
https://bpmbpm.github.io/doc/BPM/ARIS/SCHEER/BASE/10-0sr6_Method_Manual.pdf

Исходный: https://docs.aris.com/10.0.27.0/yaa-method-guide/en/Method-Manual.pdf

2 [ARISMR17] ARIS Method Reference Version 10.0 - Service Release 3  December 2017
https://bpmbpm.github.io/doc/BPM/ARIS/SCHEER/BASE/ARIS_10-0sr3_Method_Reference.pdf

on-line (на раздел VAD)
https://docs.aris.com/10.0.27.0/yay-method-reference/en/#/home/494393/en/1

# Проблема
Для ссылок на страницу документа pdf требуется указать #page=xx. Однако известные сервисы: Adobe Document Cloud, Dropbox, Google Drive, 4Shared и [сотня подобных](https://www.reddit.com/r/DataHoarder/comments/vm2xtm/cloud_storage_providers_for_free_storage/) не дают прямых ссылкок на файл pdf. Ссылка на страницу pdf в них не возможна.   

[мы дошли до того, что обсуждается Web3, но на большинстве популярных сервисов мы лишились абсолютно базовой функциональности, чтобы (ух ты!) получить файл по ссылке](https://www.reddit.com/r/DataHoarder/comments/yl2b2h/what_online_storage_lets_you_create_a_direct_link/) 
Ничего лучше не придумал, чем создать в отдельном проекте github хранилище документации, используемой в своих проектах. 
Одна из проблем - это ограничение у github на загрузку файл более 25 Мб. Для уменьшения размера использовал: compress на ilovepdf.com & split на bigpdf.11zon.com
# Поиск книг
## Онтология предприятия
[Ян Дитц, Ганс Малдер. Онтология предприятия. Человекоцентричный подход к пониманию сущности организации](https://ontograph.ru/ontologiya-predpriyatiya-cheloveko-tsentrichnyy-podhod-k-ponimaniyu-suschnosti-organizatsii/)
# Закладки
## Графические редакторы
- основные: visio, drawio, yEd, 
- SVG:
- Другие: 1 Онлайн-редактор для рисования схем [dgrm.net](https://dgrm.net/ru/)
## Семантические "доски"
[ontonet.ru](https://ontonet.ru/)
## Linked Data
[Linked Data](https://en.wikipedia.org/wiki/Linked_data)
### RDF
Визуализация наборов данных RDF [Ontodia](https://github.com/metaphacts/ontodia/). Муромцев, Д., Павлов, Д., Емельянов, Ю., Морозов, А., Раздьяконов, Д. и Галкин, М., 2015. Простой веб-инструмент для визуализации и обмена семантическими данными и онтологиями.  
### SPARQL
- [Язык запросов SPARQL для RDF](https://web.archive.org/web/20090401192412/http://shcherbak.net/translations/ru_sparql_shcherbak_net.html), перевод.  
- [SPARQL and SQL, w3.org](https://www.w3.org/2012/Talks/0604-SPARQL-SQL/high-level)
- Примеры SPARQL: 1 [SPARQL Query Tests](https://www.w3.org/2001/sw/DataAccess/rq23/examples.html) ; 2 [SPARQL example query](https://sparql.uniprot.org/.well-known/sparql-examples/)
- Примеры SPARQL в rdflib.js (не путать с одноименной для Python) SPARQLToQuery: 1 [linkeddata.github.io](https://linkeddata.github.io/rdflib.js/doc/functions/SPARQLToQuery.html) ; 2 [kursovaya_rabota_2.docx](https://www.kubsu.ru/sites/default/files/users/8735/portfolio/kursovaya_rabota_2_0.docx)
- [Apache Jena Fuseki ](https://jena.apache.org/documentation/fuseki2/)
### LD-Инструменты
[Semantic Web Development Tools](https://www.w3.org/2001/sw/wiki/Tools)
### LD-Проекты
- Semantic Web: 1 [Linked Data Quality of DBpedia, Freebase,OpenCyc, Wikidata, and YAGO](https://www.researchgate.net/publication/315065385_Linked_data_quality_of_DBpedia_Freebase_OpenCyc_Wikidata_and_YAGO)
- Solid, Social Linked Data: 1 [wiki](https://ru.wikipedia.org/wiki/Solid_(%D0%BF%D1%80%D0%BE%D0%B5%D0%BA%D1%82_%D0%B4%D0%B5%D1%86%D0%B5%D0%BD%D1%82%D1%80%D0%B0%D0%BB%D0%B8%D0%B7%D0%BE%D0%B2%D0%B0%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D1%81%D0%B5%D0%BC%D0%B8%D1%80%D0%BD%D0%BE%D0%B9_%D0%BF%D0%B0%D1%83%D1%82%D0%B8%D0%BD%D1%8B) ) ;
2 [SOLID project](https://habr.com/ru/articles/539170/) (EAV модель ) ;
### Онтологии

## Некоторые графические нотации
BPM: VAD, EPC, [Дракон](https://habr.com/ru/articles/541478/), BPMN, UML (Sequence diagram, Activity diagram,  State machine), ГОСТ 19.701-90 (ИСО 5807-85).

EA: Archimate, C4

plantUML / [UML sequence-диаграмма](https://habr.com/ru/articles/814769/)

Обзоры нотаций: [1](https://infostart.ru/pm/1435952/)
## Некоторые проекты
- bpmpbm [SemanticBPM](https://github.com/bpmbpm/SemanticBPM) ; [habr@itGuevara](https://habr.com/ru/users/itGuevara/articles/)
- prozion [semanter](https://codeberg.org/prozion/semanter) ; [github](https://github.com/prozion)
- Surrogate-TM [about Microsoft Visio](https://github.com/Surrogate-TM/surrogate-tm.github.io/tree/master)
- nbelyh [https://github.com](https://github.com/) ; [unmanagedvisio.com](https://unmanagedvisio.com/about/)
- bzinchenko [bpmnview](https://github.com/bzinchenko/bpmnview)
