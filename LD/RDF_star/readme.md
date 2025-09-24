## RDF*
### info
- https://www.w3.org/2021/12/rdf-star.html
- https://github.com/semantic-systems/rdf-star-tutorial/blob/main/RDFstar-demo.md?ysclid=mfyb392six637812628
- «a» — сокращение для rdf:type
### example
#### link
Допустим есть две системы (database), соединенные линком, например, JDBC. Как показать эту связь на "языке знаний" (linked data)?  
##### mermaid
```mermaid
graph TD;
    system1 -- JDBC -->system2;
```
##### Необъектная связь
```
@prefix : <foo/> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

:system1 :link :system2 .

:system1 rdf:type :system .
:system2 rdf:type :system .
```
##### Объектная связь
Связь имеет свой id, свойства и т.п.  
Если есть правило: не более одного линка (с учетом направления), то id удобно задавать "source-target", что обеспечит уникальность (drawio: id + label).  
Однако в общем случае, между двумя системами может быть множество линков. 

##### link1
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

Cпаркл запрос, который вытягивает все встречающиеся протоколы связи:
```
prefix : <foo/>
prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#>

select distinct ?protocol {
  ?s1 ?p ?s2 .
  ?p
    rdfs:subPropertyOf :link ;
    :protocol ?protocol ;
  .
}
```

#### RDF star
```
@prefix : <https://foo#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

:system1 :link :system2 
  {| 
    :id "a1b2c3d4-e5f6-7890-1234-567890accdef" ;  
    :protocol :jdbc ;
  |} .
  
:system1 :link :system3 
  {| 
    :id "12334455-6fda-0519-9876-20ea3210b119" ;  
    :protocol :soap ;
  |} .
      
:link a rdf:Property .
:jdbc a :Protocol .
:soap a :Protocol .
```

 
#### mermaid
- https://github.com/mermaid-js/mermaid
- https://mermaid.js.org/syntax/flowchart.html
- https://habr.com/ru/articles/652867/

#### RDF
- https://www.vvsu.ru/files/71C1ABA2-F84E-40EB-88B1-1D5DE0BA3FB1.pdf
- https://www.w3.org/2007/03/rdf_concepts_ru/Overview.html#ref-rdf-primer
- https://trinidata.ru/tech_properties.htm

### AI
#### Как выразить связь вида `:система1 :линк1 :система2 .` и задать свойства `линк1`

В RDF и Turtle обычно свойства (predicate) — это URI, а не объекты с дополнительными свойствами. Но если вы хотите именно так:

```
:система1 :линк1 :система2 .
```

где `:линк1` — это имя свойства (предиката), а потом отдельно описать свойства этого предиката (например, id и type), то в стандартном RDF это сделать нельзя, потому что предикаты не могут иметь свойства.

#### Как обойти это ограничение

1. **Использовать reification (реификацию)** — описать сам факт триплета как ресурс, которому можно задать свойства.

2. **Использовать RDF* (RDF-star)** — расширение RDF, позволяющее вложенные триплеты и свойства к ним.

---

#### Пример с RDF* (современный и удобный способ)

```turtle
@prefix : <https://example.org#> .

:система1 :линк1 :система2 .

<< :система1 :линк1 :система2 >> :id "линк1" ;
                              :type :ТипЛинка .
```

Здесь `<< :система1 :линк1 :система2 >>` — это вложенный триплет, к которому можно добавить свойства `:id` и `:type`.

---

#### Пример с классической реификацией

```turtle
@prefix : <https://example.org#> .

:система1 :линк1 :система2 .

:statement1 a rdf:Statement ;
    rdf:subject :система1 ;
    rdf:predicate :линк1 ;
    rdf:object :система2 ;
    :id "линк1" ;
    :type :ТипЛинка .
```

Здесь `:statement1` — ресурс, описывающий сам факт связи, которому можно задать свойства.

---

#### Итог

- В RDF предикаты не могут иметь свойства напрямую.
- Для описания свойств связи используйте **реификацию** или **RDF***.
- RDF* более современный и удобный, если ваша система его поддерживает.

