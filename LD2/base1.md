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
**:Миша :Ест :Рыбу .**    
Типа: Всегда на первом месте Субьект - в данном триплете - Миша, далее к нему привязанный (всегда к субъекту) предикат (отношение) - Ест и объект Рыбу.  
Как в простом предложении: Подлежащее - Сказуемое - Дополнение. 
См. [subject–verb–object SVO](https://en.wikipedia.org/wiki/Subject%E2%80%93verb%E2%80%93object_word_order). Вместо объекта \ дополнения может быть не объект (что-то с id, именованное, классифицированное и т.п.), а Литерал - безымянная константа (nameless constant).   
Еще пример на [sky.pro/wiki/javascript](https://sky.pro/wiki/javascript/rdf-dlya-nachinayushih-chto-eto-osnovy-i-kak-ispolzovat/)  
Это просто и понятно. Однако это иллюзия, точнее сильное упрощение. В реальности "под катопом" - самое главное, не попавшее в пример, и "триплет становится квинтет":    



### also
- https://github.com/bpmbpm/doc/blob/main/METAMODEL/object.md
- https://github.com/bpmbpm/doc/blob/main/METAMODEL/PROCESS/integration.md
- https://github.com/bpmbpm/doc/tree/main/LD/RDF_star
- https://github.com/bpmbpm/doc/tree/main/LD/RDF_EAV
- подлежащее–глагол–дополнение (SVO) https://en.wikipedia.org/wiki/Subject%E2%80%93verb%E2%80%93object_word_order
- rdf:type vs rdfs:Class vs owl:Class https://trinidata.ru/tech_tech.htm ; https://trinidata.ru/files/SemanticIntro.pdf
- KG Course 2021 [Лекция 3](https://migalkin.github.io/kgcourse2021/lectures/lecture3) ; [Лекция 4](https://migalkin.github.io/kgcourse2021/lectures/lecture4)
- https://intuit.ru/studies/courses/1996/215/lecture/5544
