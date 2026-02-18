## sparql2.md
### 1 kgcourse2021
https://migalkin.github.io/kgcourse2021/lectures/lecture3  ; https://migalkin.github.io/kgcourse2021/assets/slides/Lecture3.pdf  
Триплет - это путь Узел - связь - Узел:  
?s ?p ?o - все пути графа, т.е. все триплеты
  - reasoning  
Простейший пример - ризонинг по иерархии классов через предикат rdfs:subClassOf. Если задан следующий граф:

### 2 trinidata
https://trinidata.ru/tech_sparql.htm
Запрос на добавление данных выглядит просто:
```
INSERT DATA { <http://example.com/#alpha>	 <http://example.com/#Name> "Alpha, JSC".
<http://example.com/#beta> <http://example.com/#Name> "Beta, LLC" }
```
Аналога SQL-запроса UPDATE в SPARQL нет, данные можно только удалять или добавлять. Поэтому, если возникает необходимость внести изменения в уже существующие триплеты, существующие данные нужно сначала удалить:
```
DELETE WHERE { <http://example.com/#beta> ?b ?c }
```
Этот запрос удалит всю информацию о клиенте Beta (но не удалит ссылки на него с других объектов). По понятным причинам, в запросе INSERT не могут использоваться переменные, а в запросе DELETE – могут.
  - Существует также запрос CONSTRUCT, аналогичный SELECT, но возвращающий результаты не в виде таблицы, а в виде нового RDF-графа (фактически – в виде файла).  
Проверить существование решений у SPARQL-паттерна можно при помощи запроса ASK, возвращающего true, если есть хотя бы одно решение, и false в ином случае. Например, узнаем, существуют ли компании, имеющие родительскую организацию:

`ASK { ?cust <http://example.com/#Child> ?parent }`
На нашей модели результатом такого запроса будет true, истина.

### 3 questions
https://stackoverflow.com/questions/9705495/sparql-query-to-delete

### 4
- https://nodepit.com/node/org.knime.semanticweb.nodes.delete.DeleteRowsNodeFactory
- https://docs.progress.com/bundle/marklogic-server-develop-with-semantic-graphs-11/page/topics/sparql-update.html См. раздел «Использование функции SPARQL Update с XQuery или серверным JavaScript» 

### online
- https://atomgraph.github.io/SPARQL-Playground/ ; https://tools.kurrawong.ai/query
- endpoint https://sparql.carsten.io/ ; https://www.genome.jp/sparql/linkdb

### lectures
- https://aidanhogan.com/teaching/cc7220-1-2020/lectures/WdD2020-08.pdf

### zazuko.com
- https://zazuko.com/get-started/sparql-query/ Помимо ответов в виде результирующего набора, SPARQL может возвращать и RDF-подграфы. 

### 5 INSERT DATA vs INSERT 
SPARQL-операторы INSERT DATA и INSERT используются для добавления триплетов в RDF-граф, но имеют разное назначение: INSERT DATA — для добавления конкретных, статических данных без переменных, а INSERT — для вставки данных на основе существующих шаблонов или результатов поиска (WHERE).
- INSERT DATA: Добавляет конкретные триплеты напрямую. Не допускает использования переменных или шаблонов. Применяется, когда данные известны заранее.  
`INSERT DATA { <http://example/subject> <http://example/predicate> "Object" . }`
- INSERT: Вставляет данные, сгенерированные по результатам выполнения запроса WHERE (шаблон данных). Позволяет использовать переменные.
`INSERT { ?s ?p "NewObject" . }`
`WHERE { ?s ?p "OldObject" . }`

Основные различия:  
Гибкость: INSERT поддерживает переменные и WHERE, INSERT DATA — нет.  
Сценарий: INSERT DATA подходит для простых загрузок, INSERT — для преобразования или обновления данных.  
Ограничения: INSERT DATA не допускает Blank Nodes в некоторых реализациях, в то время как INSERT обеспечивает полную гибкость

### Problem
- @prefix — синтаксис Turtle/RDF, а не SPARQL. В SPARQL используется PREFIX 
- без точки (т.е. вначале и в конце убираем по символу)
- PREFIX vad: <http://example.org/vad#>

### link
- GeoPuzzle — собери мир по кусочкам https://habr.com/ru/articles/427209/
- https://migalkin.github.io/kgcourse2021/assets/slides/Lecture3.pdf
- Язык запросов SPARQL для RDF https://web.archive.org/web/20090401192412/http://shcherbak.net/translations/ru_sparql_shcherbak_net.html
- https://cyberleninka.ru/article/n/razrabotka-intellektualnogo-redaktora-sparql-zaprosov РАЗРАБОТКА ИНТЕЛЛЕКТУАЛЬНОГО РЕДАКТОРА SPARQL-ЗАПРОСОВ
- Основы SPARQL https://www.wikidata.org/wiki/Wikidata:SPARQL_tutorial/ru
- https://tyvik.ru/posts/sparql/
- https://ontograph.ru/sparql/
- немного о SPARQL точке доступа https://habr.com/ru/articles/50197/
- SPARQL-запрос ["язык программирования"](https://ru.wikiversity.org/wiki/%D0%9F%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5_%D0%92%D0%B8%D0%BA%D0%B8%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85/%D0%AF%D0%B7%D1%8B%D0%BA%D0%B8_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F)
- https://studfile.net/preview/17170468/page:5/
- https://www.w3.org/wiki/SPARQL/Extensions
- https://bigdataschool.ru/blog/graph-languages-overview/ 5 популярных языков запросов к графам
