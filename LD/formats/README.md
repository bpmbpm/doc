## serialization formats
### TriG
#### Base
- wiki https://en.wikipedia.org/wiki/TriG_(syntax) 
- RDF 1.1 TriG	https://www.w3.org/TR/trig/
- RDF 1.2 TriG	https://www.w3.org/TR/rdf12-trig/
- [Bob DuCharme](https://www.bobdc.com/blog/trig/)

#### 1
- [stardog.com](https://docs.stardog.com/tutorials/rdf-graph-data-model)
- [RDF-star and SPARQL-star](https://w3c.github.io/rdf-star/cg-spec/2021-12-17.html)

#### Example
- [N3.js, Ruben Verborgh](https://github.com/rdfjs/N3.js)
- [ruby-rdf](https://github.com/ruby-rdf/rdf-trig/blob/develop/examples/example-1.trig)

#### 2
- [3.3 TriG-star](https://paulallen.ca/graphs-and-trig-star/)

#### Также
- [RDF Schema 1.1](https://www.w3.org/TR/rdf-schema/)

## reification
Знания о свойствах. RDF Reification  [стр.4](https://vec.etu.ru/moodle/pluginfile.php/271625/mod_resource/content/1/3.%20%D0%9F%D1%80%D0%BE%D0%B5%D0%BA%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5%20%D0%B8%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%BA%D0%B0%20%D0%B3%D1%80%D0%B0%D1%84%D0%BE%D0%B2%20%D0%B7%D0%BD%D0%B0%D0%BD%D0%B8%D0%B9.pdf)
1) Изначально заложена в RDF в виде класса rdf:Statement и его свойств.
2) RDF*
В настоящее время RDF* практически стандарт.
``` :bob :married :alice .
 <<:bob :married :alice>> :marriageDate "2021-01-01"^^xsd:date . ```
- https://www.w3.org/wiki/RdfReification
- [migalkin Лекция 4. Реификация, Wikidata, Валидация](https://migalkin.github.io/kgcourse2021/lectures/lecture4)

### 2
- [Основы языка RDF](https://data.mendeley.com/datasets/fychx3rp6t/1)
- [Evaluation of Metadata Representations in RDF stores](https://www.semantic-web-journal.net/system/files/swj1791.pdf)
- [Модель данных RDF](https://konstantinklepikov.github.io/myknowlegebase/notes/rdf.html)
- https://www.w3.org/2007/03/rdf_concepts_ru/Overview.html
