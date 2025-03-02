Некоторые заметки

### IRI
символ #  
В Semantic Web принято, чтобы эти идентификаторы имели вид URI – универсальных идентификаторов ресурсов, стандартизированных для сети Интернет. Таким образом, все идентификаторы в онтологических моделях получают вид:  
`http://имя-хоста/онтология#идентификатор`  
Вместо символа # для отделения названия онтологии от идентификатора конкретной сущности может использоваться слэш – /.
[SemanticIntro.pdf c48](https://bpmbpm.github.io/doc/LD/trinidata/SemanticIntro.pdf#page=48)

### Protege
1 закладки редактора  
3.3. Простые онтологические модели: индивидуальные объекты и свойства [SemanticIntro.pdf c58](https://bpmbpm.github.io/doc/LD/trinidata/SemanticIntro.pdf#page=58)  
В Protégé сущности всех типов создаются похожим образом, только для этого используются разные закладки редактора:
- Classes – классы,
- Individuals – индивидуальные объекты,
- Data properties – свойства-литералы,
- Object properties – свойства-указатели на объекты.  
Закладка Entities позволяет увидеть все эти элементы одновременно.
2 Редакторы онтологий и их возможности [EnterpriseModeling.pdf c190+1](https://bpmbpm.github.io/doc/LD/trinidata/EnterpriseModeling.pdf#page=191)  
### Триплет - граф
Пример набора триплетов и графа Альфа - Бета  
[SemanticIntro.pdf c69](https://bpmbpm.github.io/doc/LD/trinidata/SemanticIntro.pdf#page=69)  

### blank nodes
_:b0 [SemanticIntro.pdf c113](https://bpmbpm.github.io/doc/LD/trinidata/SemanticIntro.pdf#page=113) 

### Event Онтология
Класс Событие [SemanticIntro.pdf c135](https://bpmbpm.github.io/doc/LD/trinidata/SemanticIntro.pdf#page=135)  
Время в семантических моделях: John Sowa в книге «Knowledge representation. Logical, philosophical and computational foundations» ; ISO 15926

## OWL 
### OWL API
[SemanticIntro.pdf c87](https://bpmbpm.github.io/doc/LD/trinidata/SemanticIntro.pdf#page=87)   
### «корневые» типы сущностей модели OWL
В стандарте представления онтологических моделей OWL определены несколько «корневых» типов сущностей, среди которых для нас важны класс (owl:Class) и индивидуальный объект (owl:NamedIndividual) [EnterpriseModeling.pdf c130+1](https://bpmbpm.github.io/doc/LD/trinidata/EnterpriseModeling.pdf#page=131) 

### RDF
Группировка в RDF [SemanticIntro.pdf c98](https://bpmbpm.github.io/doc/LD/trinidata/SemanticIntro.pdf#page=98)   

### SPARQL
Пример SPARQL для Альфа - Бета [SemanticIntro.pdf c73](https://bpmbpm.github.io/doc/LD/trinidata/SemanticIntro.pdf#page=73)   

### SWRL
[SemanticIntro.pdf c83](https://bpmbpm.github.io/doc/LD/trinidata/SemanticIntro.pdf#page=83)   
### Reasoner
Машина логического вывода [SemanticIntro.pdf c79](https://bpmbpm.github.io/doc/LD/trinidata/SemanticIntro.pdf#page=79)   

## MetaOntology
### Группировка сущностей
Типы, Категории (Классификация vs Типизация) [SemanticIntro.pdf c138](https://bpmbpm.github.io/doc/LD/trinidata/SemanticIntro.pdf#page=138)  
### Concept-individ-role
Итак, в дескрипционных логиках у нас есть индивиды, концепты и роли. Сущности эти близко соответствуют первопорядковым константам и одно- и двуместным предикатам.
Кроме того, у нас есть аксиомы, примерно соответствующие первопорядковым формулам, позволяющие выражать связи между индивидами, концептами и ролями.
[EnterpriseModeling.pdf c20+1](https://bpmbpm.github.io/doc/LD/trinidata/EnterpriseModeling.pdf#page=21)  

## Termin
### Linked Data
Бернерс-Ли [EnterpriseModeling.pdf c23+1](https://bpmbpm.github.io/doc/LD/trinidata/EnterpriseModeling.pdf#page=24)   
### triple
Триплет – это элементарное высказывание, состоящее из трех элементов: субъекта, предиката и объекта (или, в терминах грамматики русского языка, подлежащего,
сказуемого и дополнения), например: «змея является животным» [EnterpriseModeling.pdf c131+1](https://bpmbpm.github.io/doc/LD/trinidata/EnterpriseModeling.pdf#page=131)   
