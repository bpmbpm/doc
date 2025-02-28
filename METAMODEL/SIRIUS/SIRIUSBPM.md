Обсуждение варианта реализации Semantic BPM (semantic ARIS) на Sirius Web. Как [альтернативная концепция](https://github.com/bpmbpm/SemanticBPM/wiki/%D0%9A%D0%BE%D0%BD%D1%86%D0%B5%D0%BF%D1%82%D1%8B-%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-Semantic-BPM#a2-%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BF%D1%80%D0%B5%D0%B4%D1%81%D1%82%D0%B0%D0%B2%D0%B8%D1%82%D0%B5%D0%BB%D0%B5%D0%B9-openmetamodelorg) 
## Часть 1
https://t.me/semanticengine/1792 
### Sirius Web
Это опенсурсный движок. В нем есть язык ограничений (ocl/aql), есть язык преобразования модель - модель и модель - код/текст.

1. Ссылки Sirius Web (eclipse):
https://eclipse.dev/sirius/sirius-web.html  
Не путать с https://sirius-web.org/ 
2. Форк Sirius Web: OpenMetamodel.org
- Форум проекта, например [Как связаны MOF и RDF](https://forum.openmetamodel.org/d/56-kak-svyazany-mof-i-rdf) ; [Есть два основных подхода к моделированию](https://t.me/semanticengine/1862)
- Метамодель на [примере С4](https://metamodel.dev/metamodel/c4/dev/c4) 
3. На Sirius Web собраны:
[Smart ЕА](https://www.obeosoft.com/en/products/smartea)  
Тоже инструмент EA, как и разрабатываемый semantic ARIS 
4. На Sirius desktop собраны:
Arcadia/Capella. Капелла это моделер для mbse: https://mbse-capella.org/ 
https://www.archimatetool.com/
5. Статьи:
- [Разработка метамодели с помощью Eclipse Modeling Framework (и немного про моделирование данных)](https://habr.com/ru/companies/cit/articles/266433/)
- [Объектный язык ограничений (и немного про метамодели)](https://habr.com/ru/companies/cit/articles/264963/)
- [Введение в разработку предметно-ориентированных языков (DSL) с помощью EMFText]( https://habr.com/ru/companies/cit/articles/270483/)
### Мнение применимости к проекту Semantic BPM
Предлагаемы инструменты интересные, но видимо не простые. Текущим составом на мой взгляд мы не потянем такую «махину» как Sirius. Например, мне только чтобы в нем разобраться понадобится уйма времени.   
Тем не менее, хотелось бы увидеть (разобрать) какие-либо примеры практического внедрения Sirius \ OpenMetamodel.org для Semantic BPM. 
Например, смотрим на 
[Базовый технологический концепт на примере VAD:](https://github.com/bpmbpm/doc/blob/main/Project/SemanticBPM/method/arisLDconcept.md)  
Из первых четырех пунктов – чем может помочь Sirius? Насколько он облегчит программирование?  
Например, допустим у нас есть пара десятков TriG файлов, загруженных в triple store – как из него построить дерево процессов и их подпроцессов? Т.е. если готовый компонент treeView, в который через какие-то правила можно объяснить, что брать из triple store?  
Отображение Treeview с деревом схем (дерево моделей) предусмотрено в левом верхнем углу основного экрана: 
[главный экран приложения, mainGUI.md](https://github.com/bpmbpm/doc/blob/main/Project/SemanticBPM/design/mainGUI.md)  
Насколько я понял, вместо TriG нам придется использовать иные MOF – структуры, если так, то лучше видимо с этим пока не связываться. Возможно при развитии проекта Semantic BPM такие масштабные инструменты и понадобятся, но для нашего скромного MVP – полагаю, это перебор. Во всяком случае, пока в команде проекта не появится знатока Сириуса.  
Если какое-то понимание как реализовать Semantic ARIS на Linked Data (RDF \ SPARQL) вроде есть, то на MOF пока никакого нет (да и самого понимания MOF пока тоже нет, но надеюсь, что со временем появится).    
Кстати, обратите внимание на [WFE – систему Comindware ElasticData](https://github.com/bpmbpm/doc/blob/main/Project/SemanticBPM/FAQsemBPM.md#middle)  

#### Обсуждение Sirius \ OpenMetamodel.org для Semantic BPM
https://t.me/semanticengine/1867  
MOF - это не обязательно диаграммы. Там есть четкая граница между моделью (смысловым, содержательным описанием объекта) и представлениями этой модели. Модель может быть сериализована разными способами: XML, JSON, произвольный DSL. У модели может быть много разных представлений: диаграмма, таблица, дерево, текст

Да, я не спорю, что можно всё сделать через триплеты. Просто для MOF много готовых инструментов
Например, есть язык запросов к моделям https://www.omg.org/spec/OCL/2.4/PDF (аналог SPARQL)
Язык преобразования моделей https://www.omg.org/spec/QVT/1.3/PDF   
(например, на нём можно описать преобразование логической модели классов в физическую реляционную модель данных)  
Язык преобразования моделей в текст https://www.omg.org/spec/QVT/1.3/PDF  
Инструмент для создания графических редакторов моделей https://eclipse.dev/sirius/  
Инструмент для описания текстовой нотации для моделей https://eclipse.dev/Xtext/  
И много всего другого

Тот же Xtext позволяет достаточно легко описать грамматику языка и замапить её на MOF-метамодель. И мы почти даром получаем парсер для этого языка в AST. Только в случае Xtext AST будет представлена не в виде RDF графа, а в виде MOF-модели. И так же мы получаем кодогенератор для этого языка, который преобразует MOF-модель в текст. Я описывал это более детально в этих статьях (только вместо Xtext на EMFText, что по смыслу то же самое):

https://habr.com/ru/companies/cit/articles/270483/  
https://habr.com/ru/companies/cit/articles/271945/  

Тут несколько статей (кроме последних трех) про метамодели, MOF и т.д.:  
https://habr.com/ru/users/Ares_ekb/articles/

Всё то же самое можно делать и для RDF просто это параллельное пространство моделирования https://www.sfu.ca/~dgasevic/papers/The_Tao_of_Modeling_Spaces.pdf со своим подходом, инструментарием 
## CASE
### Case1 VADtoTreeView
Упражнение по формированию [TreeView по VAD диаграммам]( https://github.com/bpmbpm/doc/blob/main/METAMODEL/SIRIUS/Case1_VADtoTreeView.md)

## Продолжение
[MOFvsRDF.docx](https://github.com/bpmbpm/doc/blob/main/METAMODEL/SIRIUS/MOFvsRDF.docx)
