alice
## 1

В OWL (языке для создания онтологий) всё строится вокруг трёх базовых вещей: **сущностей**, **литералов** и **индивидов**. Я коротко разберу каждый, чтобы было понятно, как они работают вместе. [```6```](https://habr.com/ru/articles/857652/)[```16```](https://docs.google.com/document/d/1na2iego1iSC91fn8DWo9C-w1ABuQn0wuPfiSsOOQQOo/edit?_escaped_fragment_=)[```17```](https://keldysh.ru/abrau/2019/theses/58.pdf)

## Сущности

В OWL **сущности** — это абстрактные понятия предметной области, которые описывают целые множества объектов. По сути, это «группы» или «концепции». [```20```](http://www.foibg.com/ijicp/vol01/ijicp01-03-p04.pdf)[```16```](https://docs.google.com/document/d/1na2iego1iSC91fn8DWo9C-w1ABuQn0wuPfiSsOOQQOo/edit?_escaped_fragment_=)

* **Классы (Class).** Это множества объектов, объединённых общим признаком. Например, класс `Человек` включает всех конкретных людей (индивидов) в нашей онтологии. Классы можно организовывать в иерархию (подкласс-суперкласс). [```20```](http://www.foibg.com/ijicp/vol01/ijicp01-03-p04.pdf)[```16```](https://docs.google.com/document/d/1na2iego1iSC91fn8DWo9C-w1ABuQn0wuPfiSsOOQQOo/edit?_escaped_fragment_=)
* **Объектные свойства (ObjectProperty).** Описывают бинарные отношения между индивидами (экземплярами классов). Например, свойство `hasFriend` связывает одного индивида (человека) с другим (его другом). [```20```](http://www.foibg.com/ijicp/vol01/ijicp01-03-p04.pdf)[```6```](https://habr.com/ru/articles/857652/)
* **Свойства данных (DatatypeProperty).** Связывают индивид с **литералом** — простым значением (строкой, числом, датой). Например, свойство `hasAge` связывает индивид (человека) с числом 30. [```20```](http://www.foibg.com/ijicp/vol01/ijicp01-03-p04.pdf)[```6```](https://habr.com/ru/articles/857652/)[```2```](https://masters.donntu.ru/2020/fknt/chaika/library/article4.htm)

Кстати, в OWL есть два специальных неявных класса: `owl:Thing` (все индивиды в онтологии) и `owl:Nothing` (пустой класс, у которого нет экземпляров). [```20```](http://www.foibg.com/ijicp/vol01/ijicp01-03-p04.pdf)[```15```](https://trinidata.ru/tech_owl.htm)

## Индивиды (Individuals)

**Индивиды** — это конкретные, единичные объекты предметной области, экземпляры классов. То есть это реальные, конкретные вещи, о которых мы хотим рассказать в онтологии. [```6```](https://habr.com/ru/articles/857652/)[```16```](https://docs.google.com/document/d/1na2iego1iSC91fn8DWo9C-w1ABuQn0wuPfiSsOOQQOo/edit?_escaped_fragment_=)

* Например, если у нас есть класс `Книга`, то индивиды — это конкретные книги: «Война и мир», «Гарри Поттер», конкретный экземпляр с ISBN `1234567890`. 
* Индивиды могут быть **именованными** (имеют URI, например, `#ЛебединоеОзеро`) или **анонимными** (в RDF их представляют как blank nodes — узлы без идентификатора). [```6```](https://habr.com/ru/articles/857652/)[```18```](https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6855?page=5)
* Важная особенность OWL: здесь **не делается предположение об уникальности имён (UNA)**. Это значит, что два разных URI могут ссылаться на один и тот же индивид. Например, «Королева Елизавета» и «Королева» могут обозначать одного человека. Чтобы явно сказать, что два имени — это один и тот же индивид, используют `owl:sameAs`, а чтобы указать, что они разные — `owl:differentFrom`. [```16```](https://docs.google.com/document/d/1na2iego1iSC91fn8DWo9C-w1ABuQn0wuPfiSsOOQQOo/edit?_escaped_fragment_=)[```18```](https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6855?page=5)

## Литералы

**Литералы** — это простые, примитивные значения: строки, числа, логические значения, даты. Они «прикрепляются» к свойствам, чтобы связать индивид с конкретным данным. [```20```](http://www.foibg.com/ijicp/vol01/ijicp01-03-p04.pdf)[```14```](https://migalkin.github.io/kgcourse2021/lectures/lecture2)[```2```](https://masters.donntu.ru/2020/fknt/chaika/library/article4.htm)

* У литералов есть **лексическая форма** (строка символов) и **тип данных**. Например, строка `"3.14"`, число `42`, дата `2025-01-01`, логическое значение `true`. [```13```](https://new2.intuit.ru/studies/courses/1078/270/lecture/6855?page=2)[```20```](http://www.foibg.com/ijicp/vol01/ijicp01-03-p04.pdf)[```14```](https://migalkin.github.io/kgcourse2021/lectures/lecture2)
* Часто строковым литералам дополнительно назначают языковой тег (например, `@en` для английского). [```13```](https://new2.intuit.ru/studies/courses/1078/270/lecture/6855?page=2)[```14```](https://migalkin.github.io/kgcourse2021/lectures/lecture2)
* В OWL можно определять собственные типы данных (например, для специфических диапазонов). [```14```](https://migalkin.github.io/kgcourse2021/lectures/lecture2)

## Как всё это работает вместе

Онтология в OWL — это набор утверждений, которые показывают, как эти элементы связаны. Например:
* `rdf:type` связывает индивид (`#ЛебединоеОзеро`) с классом `Балет`.
* `hasComposer` связывает индивид `#ЛебединоеОзеро` с индивидом `#Чайковский` (свойство `hasComposer` — объектное).
* `#ЛебединоеОзеро` `rdf:type` тоже `Балет`.
* `#Чайковский` — это литерал (число 183) в свойстве `имеетКомпозитора` (datatype property).

 [```18```](https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6855?page=5)[```11```](https://www.codecademy.com/resources/docs/general/semantic-technologies/owl)

## Несколько нюансов

* OWL строится поверх RDF, и многие концепции (классы, свойства, индивиды) в нём реализуются через RDF-тройки. [```6```](https://habr.com/ru/articles/857652/)[```11```](https://www.codecademy.com/resources/docs/general/semantic-technologies/owl)
* Для работы с логическим выводом (reasoning) в OWL есть разные диалекты (OWL Lite, OWL DL, OWL Full), которые отличаются по выразительности и гарантиям вычислимости. [```9```](https://cyberleninka.ru/article/n/analiz-yazyka-veb-ontologii-owl-i-semanticheskaya-veb-tehnologiya?)[```7```](https://ru.wikipedia.org/wiki/Web_Ontology_Language)[```8```](https://sherdim.ru/pts/semantic_web/REC-owl-guide-20040210_ru.html)

**Небольшой пример для наглядности:**
* Класс `Книга`.
* Индивиды: `#Война и мир` (экземпляр класса `Книга`), `#Гарри Поттер` (тоже `Book`), `#Чайковский` (экземпляр класса `Композитор`).
* Свойство `hasAuthor` (объектное) связывает `#Война и мир` с `#Толстой`.
* Свойство `numberOfPages` (datatype) связывает `#Война и мир` с литералом `1300`.

Хотите разобрать какой-то конкретный аспект подробнее — например, как в OWL задать сложные ограничения на классы или как настроить логический вывод? Спрашивайте!

## 1.1

Покажи общую полную таксономию классов (понятий)

В OWL **таксономия классов** — это иерархическая структура, где классы связаны отношением «подкласс — суперкласс» (в OWL это выражается через аксиому `SubClassOf`). Я подобрала визуал и разобрала, как это устроено в целом. [```6```](https://www.academia.edu/14339420/OWL_2_Web_Ontology_Language_Structural_Specification_and_Functional_Style)[```12```](https://www.researchgate.net/publication/351037551_A_Practical_Guide_to_Building_OWL_Ontologies_Using_Protege_55_and_Plugins)[```4```](https://cursosextensao.usp.br/pluginfile.php/970385/mod_resource/content/1/NewOWLPizzaTutorial2021.pdf)


[![Biological Hierarchy](https://avatars.mds.yandex.net/i?id=479f0fbdfff1870c844f005a85c0b430_l-12742198-images-thumbs&n=13)](https://au.pinterest.com/ideas/biological-hierarchy/955918182861/)

## Что важно знать

* **Основа любой таксономии.** В пустой онтологии уже есть один встроенный класс — `owl:Thing` (в литературе его иногда называют «верхним понятием», top concept). **Все остальные классы в онтологии являются его подклассами**. [```6```](https://www.academia.edu/14339420/OWL_2_Web_Ontology_Language_Structural_Specification_and_Functional_Style)[```12```](https://www.researchgate.net/publication/351037551_A_Practical_Guide_to_Building_OWL_Ontologies_Using_Protege_55_and_Plugins)[```8```](https://www.researchgate.net/publication/237635692_OWL_2_Web_Ontology_Language_Structural_Specification_and_Functional-Style)[```4```](https://cursosextensao.usp.br/pluginfile.php/970385/mod_resource/content/1/NewOWLPizzaTutorial2021.pdf)
* **Есть и «нижняя граница».** Ещё один встроенный класс — `owl:Nothing` (пустое множество, bottom concept). Обычно в явных иерархиях его не рисуют как корень, но логически он представляет «дно» — класс, у которого не может быть экземпляров. [```6```](https://www.academia.edu/14339420/OWL_2_Web_Ontology_Language_Structural_Specification_and_Functional_Style)[```11```](https://www.brcommunity.com/articles.php?id=b570)
* **Не обязательно дерево.** Часто таксономии рисуют как деревья (один родитель у узла), но в OWL допускается **множественное наследование**: класс может иметь несколько суперклассов. Это мощный инструмент для точного моделирования сложных предметных областей. [```12```](https://www.researchgate.net/publication/351037551_A_Practical_Guide_to_Building_OWL_Ontologies_Using_Protege_55_and_Plugins)[```4```](https://cursosextensao.usp.br/pluginfile.php/970385/mod_resource/content/1/NewOWLPizzaTutorial2021.pdf)
* **Типы классов.** Внутри иерархии встречаются:
  * **Примитивные классы** — определены только необходимыми условиями (если что-то принадлежит классу, то оно должно удовлетворять этим условиям).
  * **Определённые классы** — для них заданы и необходимые, и достаточные условия (то есть условие точно описывает, когда объект входит в класс). [```12```](https://www.researchgate.net/publication/351037551_A_Practical_Guide_to_Building_OWL_Ontologies_Using_Protege_55_and_Plugins)[```4```](https://cursosextensao.usp.br/pluginfile.php/970385/mod_resource/content/1/NewOWLPizzaTutorial2021.pdf)

## Как это выглядит на практике

Вместо абстрактных примеров давайте посмотрим на реальные онтологии — так нагляднее.

* **[Pinterest Taxonomy](https://arxiv.org/pdf/1907.02106)** — онтология интересов, где классы организованы в глубокую иерархию (вертикали — верхние уровни, далее идут всё более узкие интересы). [```1```](https://arxiv.org/pdf/1907.02106)[```3```](https://www.researchgate.net/publication/336601814_Use_of_OWL_and_Semantic_Web_Technologies_at_Pinterest)
* **[eClassOWL](https://www.heppnetz.de/projects/eclassowl/)** — онтология для продуктов и услуг, где для каждой категории часто определяются два класса: «таксономический» (широкая категория) и «генерический» (конкретные продукты/услуги этого типа). [```13```](https://www.heppnetz.de/projects/eclassowl/)
* **[IFC (Industry Foundation Classes)](https://deepwiki.com/buildingsmart-community/ifcOWL/3-ontology-structure)** — в онтологии строительных моделей корнем иерархии служит класс `IfcRoot`, от которого отходят основные ветви (например, `IfcObjectDefinition`, `IfcPropertyDefinition`, `IfcRelationship`). [```10```](https://deepwiki.com/buildingsmart-community/ifcOWL/3-ontology-structure)

## Как работать с такой иерархией

Когда вы строите онтологию, вы:
* добавляете классы;
* связываете их аксиомами `SubClassOf`;
* при необходимости задаёте дополнительные ограничения (например, через класс выражения с кардинальностью или другими условиями); [```12```](https://www.researchgate.net/publication/351037551_A_Practical_Guide_to_Building_OWL_Ontologies_Using_Protege_55_and_Plugins)[```4```](https://cursosextensao.usp.br/pluginfile.php/970385/mod_resource/content/1/NewOWLPizzaTutorial2021.pdf)
* используете движок выводов (inference engine), чтобы он на основе иерархии и ограничений делал логические выводы (например, если `Dog` — подкласс `Animal`, а `Peter` — экземпляр `Dog`, то движок выведет, что `Peter` также является экземпляром `Animal`). [```6```](https://www.academia.edu/14339420/OWL_2_Web_Ontology_Language_Structural_Specification_and_Functional_Style)

Хотите, разберу какой-нибудь конкретный пример из вашей предметной области? Например, как выстроить иерархию для интернет-магазина или медицинской онтологии?
