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
Триплет - как атом знания - обычно вводится так:  **:Миша :Ест :Рыбу .**    
Всегда на первом месте Субьект - в данном триплете - Миша, далее к нему привязанный (всегда к субъекту) предикат (отношение) - Ест и объект Рыбу.  
Как в простом предложении: Подлежащее - Сказуемое - Дополнение. 
См. [subject–verb–object SVO](https://en.wikipedia.org/wiki/Subject%E2%80%93verb%E2%80%93object_word_order). Вместо объекта \ дополнения может быть не объект (что-то с id, именованное, классифицированное и т.п.), а Литерал - безымянная константа (nameless constant).   
Еще пример на [sky.pro/wiki/javascript](https://sky.pro/wiki/javascript/rdf-dlya-nachinayushih-chto-eto-osnovy-i-kak-ispolzovat/)  
``` mermaid
flowchart LR
        obj1_Name[/obj1 Имя = Миша: Подлежащее-субъект/]--> link12{{связь типа Ест: глагол_предикат}} --> obj2_Name[/obj2 Имя = Рыбу: Дополнение-объект/]                
```
[Рис. 1 mermaid.live](https://mermaid.live/edit#pako:eNpdkc1uEzEQx1_FmnO-1vvVWKIXOEIPcCuLIpN1PiC7jpZdQbtaiSQX2iL1AlIPldpHCJCUKCHJK4zfiNlAIepYsudveX7zlyeHtg4VCOgM9Pt2TyYpe_o8iNnf0K_fWK0jGamX9TJleIW_zCV7xPAaF-YTTgXDG9zgDFc4xzucmjM651UzMhP8Zs5JLM24_qpaPWSDfvzW4nluRvjdXOJP85mZMS5wi1OGX6liTLAfBJrSvsFVC7fmIwFm9GZJ5HFRsJJDRvh_T3zP0625oKYTwnwhwLaE4JoIayLMqyT3HLEHEcTlggp0k34IIk0yVYFIJZEsJeTlnwSQ9lSkAhCUhqojs0EaQBAXVDaU8bHW0X1lorNuD0RHDt6RyoahTNWTvuwmMvp3K7NUvziJ2_c1KuynOnn2Zx67sRBHxaFKHussTkE4DXfXCEQOH0Bw26m5vsc937edRtNuehU4AWG5ds13Pd91rAPH4rbrFBU43Xlr1NymZ3G_yX27YduWw4vfsrfWBw)

Это просто и понятно. Однако это иллюзия, точнее сильное упрощение. В реальности "под катопом" - самое главное, не попавшее в пример, и "триплет становится квинтет":    
``` mermaid
flowchart TB
   subgraph baseTriple[triple = Миша Ест Рыбу]
        direction LR
        obj1_Id --> link12{{связь типа Ест}} --> obj2_Id
    end
       obj1_Name[/obj1 Имя = Миша/] --> obj1_Id[/obj1 Id = 123/] 
       obj1_Other[/obj1 = ALL properties: ФИО, ИНН/] --> obj1_Id 
       obj2_Id[/obj2 Id = 345/] --> obj2_Name[/obj2 Имя = Рыбу/]                
       obj2_Id --> obj2_Other[/obj2 = ALL properties: вид, размер/]  
```
[Рис. 2 mermaid.live](https://mermaid.live/edit#pako:eNptkstu1DAUhl_lyOt0OrFzYSINEpcN0gASdEVTIc_EMxNI7MjjCEoUqS0bJJC6QuqiRSx4gFKB2kUlXsF-I5zMJWWENzl2_v87v-xToYlIGIrQNBPvJnMqFew9jDkALMrxTNJiDmO6YHsyLTK2r9oPDEGf6xvzSV-C_mqOzQno7-az_mk-HrTWdiWpZBOVCg6jF92pGL9xXz9JYGfnPmQpf-viqjLH-sqc6mvzBcyJvtF_Nty6boXWhK1pSWHcFlvAZzRn-7tNCfpM35rTOxF3D9aMpvFKZRMMwcXE_txCPVdzJleqITwYjaCQomBSpWwRgf5h-d-cpsuFvvgXDU2sDW2VuSXhZT_i-Z0Dd6HxndCre7S6rbUN7jhdYvy_xFf2Rn85YI70pb7Wt_q3OWroy7AxRw6ayTRBkZIlc1DOZE6bLaqajjGy8JzFKLJlwqa0zFSMYl5bW0H5KyHytVOKcjZH0ZRmC7sri4Qq9jildobyzSktlXh5yCdrD0tSJeTT5QS2g2g59oGZfCRKrlDkumHbCEUVeo8iTLyeHwY4CEPi9QdkEDjo0Kp80gv9IPQ9955nX9X3agd9aLP1e_4gcHE4wCHpE-J6uP4LcfkISg)

В данном случае мы хотим сказать, что конкретный Миша (экземпляр) ест конкретную рыбу (экземпляр).  
Экземпляр - это "Собственное существительное" - отдельный единичный предмет (мир вещей).  
Образ - это "Нарицательное существительное" - обобщённые названия однородных предметов и явлений (мир идей). С ними похожая ситуация, но немного иная.  

В отличие от "тривиальной связи" hyperlink (Web, mediaWiki и т.п.) в семантическом триплете (web 3.0 \ semantic Web, semantic mediaWiki и т.п.) имеем именнованные два объекта связи и типизированную связь "связан связью такого-то типа".  

### 1 Привило идентификации Предиката
#### Проблема идентификации Предиката
В RDF (Resource Description Framework) предикат не может быть напрямую связан с rdf:type, потому что предикаты сами по себе не являются ресурсами в классическом понимании RDF-модели. Предикаты определяют тип связи между субъектом и объектом, а не являются самостоятельными сущностями, к которым можно применять rdf:type в рамках базовой модели RDF. Предикаты не могут иметь id и т.п.  
Что делать?  Можно использовать обходные пути, например, *:Link a rdf:Property .* или типы отношений из RDF Schema или OWL к предикату, которые определяют его свойства. Есть Реификация и RDF Star. Однако в LD2 будем использовать правило "два объекта соединяются только одним предикатом одного типа" (в каждую сторону) и id предиката вычисляется автоматически: 
```
id1-predicateName-id2
```
Таким образом предикат становится объектом, к которому можно применять любые другие отношения, добавлять свойства и методы (как к object).  
Таким образом, без явного указания к *:id1 :predicateName :id2 .* 
```
:id1-predicateName-id2 rdf:type :Link .
:id1-predicateName-id2 :isSource :id1 .
:id1-predicateName-id2 :isTarget :id2 . 

```
получит те же знания. 

### also
- https://github.com/bpmbpm/doc/blob/main/METAMODEL/object.md
- https://github.com/bpmbpm/doc/blob/main/METAMODEL/PROCESS/integration.md
- https://github.com/bpmbpm/doc/tree/main/LD/RDF_star
- https://github.com/bpmbpm/doc/tree/main/LD/RDF_EAV
- подлежащее–глагол–дополнение (SVO) https://en.wikipedia.org/wiki/Subject%E2%80%93verb%E2%80%93object_word_order
- rdf:type vs rdfs:Class vs owl:Class https://trinidata.ru/tech_tech.htm ; https://trinidata.ru/files/SemanticIntro.pdf
- KG Course 2021 [Лекция 3](https://migalkin.github.io/kgcourse2021/lectures/lecture3) ; [Лекция 4](https://migalkin.github.io/kgcourse2021/lectures/lecture4)
- https://intuit.ru/studies/courses/1996/215/lecture/5544
