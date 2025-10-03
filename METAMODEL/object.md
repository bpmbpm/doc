### object
Все есть сущности (entity). Типы Сущностей:
- объекты
- связи
- литералы
- классы
- свойства Data properties – свойства-литералы и Object properties – свойства-указатели на объекты
- высказывания \ утверждения (триплет, trig, RDF*)  
Объекты - они же указатели на объект, индивидуальные объекты - они же экземпляры (для объекта существует как образ, так и экземпляр). Объекты имеют id (что пишем в RDF-триплете) и набор свойств.    
В триплете первым стоит subject - всегда объект, а на последнем object - но это не наш "объект" и будем его назыывать RDFobject (чтобы путаницу уменьшить).  
Связи могут быть объектными или не объектными. В объектной связи (предикат по сути - объект) указанныя связь - это экземпляр и соответсвноо имеет уникальный id.   
На примере схемы - интеграции двух систем (необъектный и объектный вид связи):  
```
:system1 :link :system2 .
```
vs
```
:system1 :link12 :system2 .
:link12 rdf:subPropertyOf :link .
``` 

Пример database-link (RDF star) https://github.com/bpmbpm/doc/tree/main/LD/RDF_star#database-link
 #### info
- https://trinidata.ru/tech_properties.htm
- https://habr.com/ru/companies/otus/articles/755440/ ; https://habr.com/ru/articles/49769/
- https://github.com/bpmbpm/doc/blob/main/LD/formats/README.md#reification

### см. также
- https://github.com/bpmbpm/doc/tree/main/LD/metaphysics#ideas-vs-things
