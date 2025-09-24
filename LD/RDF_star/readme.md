## RDF*
### info
- https://www.w3.org/2021/12/rdf-star.html
- https://github.com/semantic-systems/rdf-star-tutorial/blob/main/RDFstar-demo.md?ysclid=mfyb392six637812628
- «a» — сокращение для rdf:type
### example
#### link
Допустим есть две системы (database), соединенные линком, например, JDBC. Как показать эту связь на "языке знаний" (linked data)?  
##### mermaid
``` mermaid
graph TD;
    A-->B;

```

##### Необъектная связь
```
@prefix : <foo/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

:system1 :link :system2 .

```
##### Объектная связь
Связь имеет свой id, свойства и т.п.

```
@prefix : <foo/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

:system1 :link1 :system2 .

:link1
  rdfs:subPropertyOf :link ;
  :id "a1b2c3d4-e5f6-7890-1234-567890accdef" ;
  :protocol :jdbc ;
.

:link a rdf:Property .
:jdbc a :Protocol .
```
