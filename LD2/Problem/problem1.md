## quadstore (TriG) and SPARQL

### info
#### SPARQL 
- https://github.com/bpmbpm/rdf-grapher/blob/main/ver8tree/requirements/SPARQL.md 3.3 Table

#### quadstore 

TriG — это стандарт для сериализации данных, 
quadstore — форма базы данных, которая позволяет хранить данные с дополнительным контекстом (URI графа):
-	Позволяет хранить несколько графов данных RDF в одной базе данных.
-	Каждый элемент в quadstore имеет форму  
<graph URI, subject, predicate, object> .
-	Позволяет запрашивать данные по конкретному графу, всем графам или другим комбинациям графов.
-	URI графа может использоваться как субъект в утверждениях, что позволяет представлять происхождение, авторитет или достоверность конкретного поднабора (графа) троек.

### 2
- https://cs-courses.mines.edu/csci370/FS2022F/Proposals/CSMFierro.pdf
