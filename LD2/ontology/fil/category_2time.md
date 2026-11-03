## 1 ontology sumo TimePosition Region

В онтологии SUMO (Suggested Upper Merged Ontology) понятия **TimePosition** и **Region** действительно связаны через формализацию пространственно-временных отношений. [```1```](https://pdfs.semanticscholar.org/9bd0/0339e6b8624853b657c5aaac26027e5fa97d.pdf)[```19```](http://www.sc.ehu.es/jiwlucap/IJSWIS12.pdf)

## TimePosition в SUMO

**TimePosition** — это общий суперкласс для **TimePoint** (точечных моментов времени) и **TimeInterval** (интервалов времени). Он обозначает любую позицию на универсальной временной шкале — от минус бесконечности до плюс бесконечности. [```2```](https://www.researchgate.net/publication/275153319_Ontology_Design_Pattern_Application_in_Water_Reservoir_Management)[```6```](https://webkb.org/kb/top/theKB_categs.html)

## Region в SUMO

Класс **Region** представляет пространственные сущности. Важно, что **Region** не является подклассом **SelfConnectedObject** (самосвязанных объектов), поскольку некоторые регионы (например, архипелаги) состоят из несвязанных между собой частей. [```6```](https://webkb.org/kb/top/theKB_categs.html)

## Связь TimePosition и Region

В SUMO для привязки объектов к пространству и времени используется отношение **exactlyLocated**, которое связывает объект с его местоположением:
```
(exactlyLocated ?THING ?REGION)
```
Это означает, что объект ?THING находится в пространственной позиции ?REGION.

Отношение **holdsDuring** связывает объект с моментом времени, когда он существует или происходит:
```
(holdsDuring ?TIME ?THING)
```
что означает, что ?THING существует или происходит в момент времени ?TIME. [```19```](http://www.sc.ehu.es/jiwlucap/IJSWIS12.pdf)


[![Теоретические основы онтологического инжиниринга. Классификация онтологий - презентация, доклад, проект скачать](https://avatars.mds.yandex.net/i?id=45664d2e9361aa49904983326e23e1ea_l-5234804-images-thumbs&n=13)](https://mypresentation.ru/presentation/teoreticheskie-osnovy-ontologicheskogo-inzhiniringa-klassifikaciya-ontologij)

## Аксиомы SUMO

Некоторые ключевые аксиомы, которые связывают эти понятия:
```
(domain temporalPart 1)
(domain temporalPart 2)
(domain time 2)
```
Эти строки задают, что отношение **temporalPart** (темпоральная часть) применимо к обоим аргументам, а отношение **time** связывает объект с временной позицией. [```19```](http://www.sc.ehu.es/jiwlucap/IJSWIS12.pdf)

## Вывод

Таким образом, в SUMO время и пространство моделируются раздельно (через TimePosition и Region), но их взаимосвязь выражается через аксиомы, которые позволяют говорить о том, что объект существует в определённой временной позиции и в конкретной пространственной области. Это позволяет строить сложные модели, где события характеризуются и временными, и пространственными параметрами.

## 2 Place и Time

Хороший вопрос! Действительно, в SUMO нет классов с точно такими же названиями («Place» и «Time»), но разработчики онтологии сознательно спроектировали её так, чтобы она отражала аристотелевские категории — просто через другие конструкции. Я поясню, как это работает. [```1```](https://www.researchgate.net/publication/265422816_Chapter_8_Categories_The_Top-Level_Ontology)[```10```](https://link.springer.com/chapter/10.1007/978-3-319-49004-5_39)

*   **Place (место).** В SUMO эту идею передают не отдельным классом, а через **отношение `exactlyLocated`** (примерно: «точно расположен в»). С его помощью связывают объект с пространственной сущностью — например, говорят, что здание `exactlyLocated` в определённом регионе или городе. То есть категория «место» реализуется не как самостоятельный тип сущности верхнего уровня, а как способ локализации других сущностей. [```8```](https://github.com/ontologyportal/sumo/blob/master/english_format.kif)[```10```](https://link.springer.com/chapter/10.1007/978-3-319-49004-5_39)
*   **Time (время).** Аналогично: отдельного класса «Time» нет. Вместо этого используют отношение **`holdsDuring`** (примерно: «происходит в»). Оно связывает событие или состояние с временным интервалом или моментом. Например, можно выразить, что встреча `holdsDuring` определённого часа. [```8```](https://github.com/ontologyportal/sumo/blob/master/english_format.kif)[```10```](https://link.springer.com/chapter/10.1007/978-3-319-49004-5_39)

Проще говоря: Аристотель выделял «место» и «время» как самостоятельные категории (отвечают на вопросы «где?» и «когда?»). А SUMO подходит инструментально: она не вводит для них отдельные фундаментальные классы в иерархии, а предоставляет механизмы (отношения), чтобы привязывать любые другие сущности к пространству и времени. [```13```](https://en.wikipedia.org/wiki/Categories_%28Aristotle%29)[```18```](https://ocw.mit.edu/courses/es-113-ancient-greek-philosophy-and-mathematics-spring-2016/5b13b27dd04bd89470eaac7449b8d185_MITES_113S16_CategoriesSum.pdf)[```10```](https://link.springer.com/chapter/10.1007/978-3-319-49004-5_39)

Такой подход позволяет гибко описывать сложные ситуации. Например, можно комбинировать: событие `holdsDuring` определённый момент и одновременно `exactlyLocated` в конкретном месте. [```9```](https://www.researchgate.net/publication/269561531_Adimen-SUMO_Reengineering_an_Ontology_for_First-Order_Reasoning)[```10```](https://link.springer.com/chapter/10.1007/978-3-319-49004-5_39)

Если будете работать с SUMO и захотите формализовать что-то вроде «Книга лежит на столе в 14:00», вы как раз свяжете объект («книга») с пространством (стол) через `exactlyLocated`, а с временем (14:00) — через `holdsDuring`.

Хотите, разберу какой-нибудь практический пример, как такие связки выглядят в коде SUMO?


