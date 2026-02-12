## sparql2.md
- https://migalkin.github.io/kgcourse2021/lectures/lecture3  
Триплет - это путь Узел - связь - Узел:  
?s ?p ?o - все пути графа, т.е. все триплеты
  - reasoning  
Простейший пример - ризонинг по иерархии классов через предикат rdfs:subClassOf. Если задан следующий граф:
- https://trinidata.ru/tech_sparql.htm
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
