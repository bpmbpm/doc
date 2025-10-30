### link=obj
Если в нотации (теории) связей мы говорим: есть только связи и нечего более, но применительно к RDF мы можем сказать: есть только объекты и ничего более. Это видимо сделает равноценными эти формализмы. В случае с RDF мы можем ввести правило, что каждый предикат – это объект (именованная связь, с id и т.п.), например, 
```
@prefix : <http://example.org/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .


:system1 :link12 :system2 .
:system1 rdf:type :System .
:system2 rdf:type :System .
:link12
  rdfs:subPropertyOf :Link ;
  :id "12345" ;
  :protocol :jdbc ;
.


:Link a rdf:Property .
```
### online 
- https://www.leskoff.com/s02222-0
- https://issemantic.net/rdf-visualizer

### also
- https://trinidata.ru/tech_owl.htm ; https://stackoverflow.com/questions/77539673/when-to-use-rdftype-vs-rdfssubclassof ; https://kb.comindware.ru/print-4854.html ; https://www.clearbyte.org/?p=5895&lang=en
- https://ru.wikipedia.org/wiki/RDFS

### link
- https://github.com/bpmbpm/doc/blob/main/METAMODEL/object.md
