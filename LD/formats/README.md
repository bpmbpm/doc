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
Знания о свойствах. RDF Reification  
1) Изначально заложена в RDF в виде класса rdf:Statement и его свойств.
2) RDF*
В настоящее время RDF* практически стандарт.
``` :bob :married :alice .
 <<:bob :married :alice>> :marriageDate "2021-01-01"^^xsd:date . ```
