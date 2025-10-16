### EPC RDF
Исходное описание (словами и mermaid) см. https://github.com/bpmbpm/doc/blob/main/METAMODEL/PROCESS/EPC/epc_mermaid.md

#### RDF online
- https://rdfplayground.dcc.uchile.cl/ ; https://giacomociti.github.io/rdf2dot/ ; https://issemantic.net/rdf-visualizer ; https://www.leskoff.com/s02222-0
- не нашел ни одного RDF grapher с поддержкой передачи кода в параметре, например, https://www.ldf.fi/service/rdf-grapher (требует VPN)

```
@prefix epc: <http://example.org/epc#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .

# Определение классов
epc:Event rdf:type rdfs:Class ;
         rdfs:label "Event" ;
         rdfs:comment "Событие в EPC-диаграмме" .

epc:Function rdf:type rdfs:Class ;
             rdfs:label "Function" ;
             rdfs:comment "Функция в EPC-диаграмме" .

epc:Document rdf:type rdfs:Class ;
             rdfs:label "Document" ;
             rdfs:comment "Документ в EPC-диаграмме" .

epc:Process rdf:type rdfs:Class ;
            rdfs:label "Process" ;
            rdfs:comment "Процесс" .

# Определение свойств
epc:hasInput rdf:type rdf:Property ;
             rdfs:label "has input" ;
             rdfs:domain epc:Function ;
             rdfs:range epc:Document .

epc:hasOutput rdf:type rdf:Property ;
              rdfs:label "has output" ;
              rdfs:domain epc:Function ;
              rdfs:range epc:Document .

epc:triggeredBy rdf:type rdf:Property ;
                rdfs:label "triggered by" ;
                rdfs:domain epc:Function ;
                rdfs:range epc:Event .

epc:resultsIn rdf:type rdf:Property ;
              rdfs:label "results in" ;
              rdfs:domain epc:Function ;
              rdfs:range epc:Event .

epc:hasPart rdf:type rdf:Property ;
            rdfs:label "has part" ;
            rdfs:domain epc:Process ;
            rdfs:range rdfs:Resource .

# Экземпляры
epc:Event1 rdf:type epc:Event ;
           rdfs:label "Событие1" .

epc:Event2 rdf:type epc:Event ;
           rdfs:label "Событие2" .

epc:Operation1 rdf:type epc:Function ;
               rdfs:label "Операция1" .

epc:Document1 rdf:type epc:Document ;
              rdfs:label "Документ1" .

epc:Document2 rdf:type epc:Document ;
              rdfs:label "Документ2" .

epc:Workflow rdf:type epc:Process ;
             rdfs:label "Workflow" .

epc:Docflow rdf:type epc:Process ;
            rdfs:label "Docflow" .

# Связи между экземплярами
epc:Operation1 epc:triggeredBy epc:Event1 ;
               epc:resultsIn epc:Event2 ;
               epc:hasInput epc:Document1 ;
               epc:hasOutput epc:Document2 .

epc:Workflow epc:hasPart epc:Event1 ;
             epc:hasPart epc:Operation1 ;
             epc:hasPart epc:Event2 .

epc:Docflow epc:hasPart epc:Document1 ;
            epc:hasPart epc:Operation1 ;
            epc:hasPart epc:Document2 .
```

RDF представление в формате Turtle, которое отражает ту же структуру, что и EPC-диаграмма:
- Определены классы Event, Function, Document, Process
- Определены свойства для связей между элементами
- Созданы экземпляры всех объектов
- Установлены связи:
  - Operation1 triggeredBy Event1
  - Operation1 resultsIn Event2
  - Operation1 hasInput Document1
  - Operation1 hasOutput Document2
- Workflow содержит Event1, Operation1, Event2
- Docflow содержит Document1, Operation1, Document2

