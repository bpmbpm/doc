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

### 5 INSERT DATA и INSERT 
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

