## LD2
Linked Data 2 (LD2) - это Linked Data с дополнениями \ ограничениями \ особенностями. Цель такая же - формализм знаний.  
### Введение
Классический web (классический пример [wikipedia](https://ru.wikipedia.org/)) построен на гиперссылках (hyperlink).  
[Hyperlink](https://ru.wikipedia.org/wiki/%D0%93%D0%B8%D0%BF%D0%B5%D1%80%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B0) в общем случае выполняет переход по указанному адресу, который может быть файлом, UNC-адресом или URL-адресом.  
Элемент (обычно подсвечиваемое слово \ фраза) имеет свойство hyperlink со значением - адресом перехода:
```
:элемент :имеетHyperlink :значениеHyperlink(URL) .
```  
[Web 3.0](https://ru.wikipedia.org/wiki/Web_3.0) из всемирной паутины делает семантическую паутину Semantic Web на базе Linked Data. 

#### Triple RDF example
Триплет - как атом знания - обычно вводится так:  
**:Миша :Ест :Рыбу**    
Типа: Субьект Миша, далее к нему привязанный предикат (отношение) - Ест и объект Рыбу. Как Подлежащее - Сказуемое - Дополнение. 
См. [subject–verb–object SVO](https://en.wikipedia.org/wiki/Subject%E2%80%93verb%E2%80%93object_word_order). Вместо объекта \ дополнения может быть не объект (что-то с id, именованное, классифицированное и т.п.), а Литерал - безымянная константа (nameless constant).   
Только это иллюзия, точнее сильное упрощение.  



### also
- https://github.com/bpmbpm/doc/blob/main/METAMODEL/object.md
- https://github.com/bpmbpm/doc/blob/main/METAMODEL/PROCESS/integration.md
- https://github.com/bpmbpm/doc/tree/main/LD/RDF_star
- https://github.com/bpmbpm/doc/tree/main/LD/RDF_EAV
- подлежащее–глагол–дополнение (SVO) https://en.wikipedia.org/wiki/Subject%E2%80%93verb%E2%80%93object_word_order
- rdf:type vs rdfs:Class vs owl:Class https://trinidata.ru/tech_tech.htm ; https://trinidata.ru/files/SemanticIntro.pdf
- 
