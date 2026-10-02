## OWL 2 DL 
покажи иерархию классов (таксономию)

В OWL 2 DL таксономия классов **не является фиксированной** — она выводится из аксиом конкретной онтологии.  
Верхний класс — `owl:Thing` (⊤), нижний — `owl:Nothing` (⊥).  
Иерархия задаётся в основном через:

- `SubClassOf(C D)` / `C rdfs:subClassOf D`
- `EquivalentClasses(C D)`
- `DisjointClasses(C D)` — это уже не иерархия, а ограничение несовместимости.

Пример таксономии:

```text
owl:Thing
├─ Person
│  ├─ Student
│  │  └─ GraduateStudent
│  └─ Employee
│     ├─ Professor
│     └─ Administrator
└─ Course
```

В OWL 2 DL / Turtle это может выглядеть так:

```turtle
@prefix : <http://example.org/univ#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .

:Person a owl:Class .
:Student a owl:Class ;
    rdfs:subClassOf :Person .
:GraduateStudent a owl:Class ;
    rdfs:subClassOf :Student .

:Employee a owl:Class ;
    rdfs:subClassOf :Person .
:Professor a owl:Class ;
    rdfs:subClassOf :Employee .
:Administrator a owl:Class ;
    rdfs:subClassOf :Employee .

:Course a owl:Class .
```

После запуска reasoner’а, например HermiT, Pellet или ELK, можно получить **выведенную таксономию**:

```text
:Professor ⊑ :Employee ⊑ :Person ⊑ owl:Thing
:GraduateStudent ⊑ :Student ⊑ :Person ⊑ owl:Thing
:Course ⊑ owl:Thing
```

Важно: в OWL 2 DL таксономия — это **DAG**, а не обязательно дерево. Класс может иметь несколько родителей:

```turtle
:Assistant a owl:Class ;
    rdfs:subClassOf :Student , :Employee .
```

Тогда `:Assistant` будет одновременно подклассом `:Student` и `:Employee`.


