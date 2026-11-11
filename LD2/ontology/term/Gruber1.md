## book
- [ЛОГИКА](https://op.raj.ru/pdf/antyushin_mihalkin.pdf)
- https://www.hse.ru/data/2015/06/15/1083252656/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%D0%B2%20%D0%92%D0%A8%D0%AD%20(%D0%BF%D1%80%D0%BE%20%D0%98%D0%98).pdf

## 1
Одно из наиболее цитируемых определений онтологии в информатике, предложенное Томасом Грубером, звучит так: **«Онтология — это явная, формальная спецификация совместно используемой концептуализации»**. [```4```](https://ru.wikipedia.org/wiki/%D0%9E%D0%BD%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%28%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0%29)

## Что означает эта формулировка
Разберём ключевые компоненты определения:
*   **Концептуализация** — это абстрактная, упрощённая модель предметной области, которая отражает только те элементы и связи между ними, которые важны для решения конкретной задачи. Например, если мы описываем кубики на столе, концептуализацией будет набор возможных положений кубиков, а не их конкретное расположение в данный момент. [```9```](https://cyberleninka.ru/article/n/ontologiya-kak-model-predstavleniya-znaniy?)[```10```](https://journals.kantiana.ru/upload/iblock/30a/Khizanishvili_119-127.pdf)
*   **Явная спецификация** означает, что все понятия (классы, отношения) и связи между ними заданы открыто, а не подразумеваются. [```4```](https://ru.wikipedia.org/wiki/%D0%9E%D0%BD%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%28%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0%29)
*   **Формальность** обеспечивает машиночитаемость онтологии, то есть возможность её обработки компьютерными системами. [```4```](https://ru.wikipedia.org/wiki/%D0%9E%D0%BD%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%28%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0%29)
*   **Совместное использование** подчёркивает ориентацию на обмен знаниями и их повторное применение в разных системах. [```4```](https://ru.wikipedia.org/wiki/%D0%9E%D0%BD%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%28%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0%29)

## Контекст появления
Это определение появилось в 1993 году в работе Томаса Грубера, посвящённой созданию механизмов взаимодействия между системами баз знаний. Его идея заключалась в том, чтобы позволить интеллектуальным системам обмениваться заложенными в них знаниями, для чего требовалось формальное и понятное человеку описание этих знаний. [```14```](https://ulstu.ru/upload/iblock/a36/Diser05.pdf)[```13```](https://ideaidealy.nsuem.ru/storage/uploads/2024/03/4.Kovalev.309-332.pdf)[```15```](https://lab314.brsu.by/kmp-lite/kmp2/CM-2017/Ontology/LVA.htm)[```8```](https://www.interface.ru/home.asp?artId=33244)

## Эволюция взглядов
Со временем Грубер несколько модифицировал своё определение. В более поздней формулировке он использовал словосочетание «согласованная концептуализация», чтобы ещё сильнее подчеркнуть, что онтология — это не частное мнение, а основа для общего понимания и взаимодействия в рамках определённой группы или проекта. [```7```](https://infourok.ru/ontologii-formalnoe-i-neformalnoe-4809892.html)

Таким образом, определение Грубера заложило основу для современного понимания онтологий как формальных моделей предметных областей, которые служат для явного и согласованного представления знаний, обеспечивая их машиночитаемость и возможность обмена между различными системами.

## en
Исходная формулировка Грубера (1993) на английском выглядит так:

> **«An ontology is an explicit specification of a conceptualization»** — «Онтология — это явная спецификация концептуализации».

Формулировка взята из статьи: T. R. Gruber, *A translation approach to portable ontology specifications*, Knowledge Acquisition, 6(2), 1993, pp. 199–221.

Позже Том Грубер добавил к ней уточнение о согласованности. А каноническое «полное» определение, которое чаще всего цитируют, появилось в 1998 году у Студера, Бенжаминса и Фенселя, когда они объединили взгляд Грубера и Никко Боргерса (Nicola Guarino):

> **«A formal, explicit specification of a shared conceptualization»** — «Формальная, явная спецификация разделяемой (общей) концептуализации».

То есть структура такая:

| Год | Автор | Формулировка |
|---|---|---|
| 1993 | Gruber | explicit specification of a conceptualization |
| 1998 | Studer, Benjamins, Fensel | formal, explicit specification of a shared conceptualization |

Если нужна точная цитата из оригинальной статьи Грубера 1993 года, могу поискать скан или текст публикации — скажите, если это нужно.

## 2
Сначала небольшое уточнение к моей прошлой реплике: слово «shared» (разделяемая/общая) в классический вид определения внес не Guarino, а Виллем Борст (W. N. Borst) в диссертации 1997 года, а соединили всё в одну формулу Стюдер, Бенджаминс и Фенсел в 1998-м. А сам Грубер, действительно, в более поздних текстах подчёркивал разделяемость — о них ниже. [```13```](https://hal.science/hal-02288783v1/document)[```11```](https://www.academia.edu/121943810/Knowledge_representation_through_ontologies_an_application_in_the_electronic_democracy_field)

## Грубер и уточнение о разделяемости

В расширенной версии статьи о принципах проектирования онтологий (1993/1995, «Toward Principles for the Design of Ontologies Used for Knowledge Sharing») формулировка уже звучит как:

> «*Ontologies are formal, explicit specifications of shared conceptualizations*» — «Онтологии — это формальные, явные спецификации разделяемых (общих) концептуализаций» [```2```](https://www.academia.edu/118465872/Toward_principles_for_the_design_of_ontologies_used_for_knowledge_sharing).

Идея «разделяемости» у Грубера раскрывается через онтологическое обязательство (ontological commitment): общая онтология описывает словарь, по которому набор агентов договариваются общаться о предметной области, «не обязательно оперируя единой глобальной теорией» — то есть каждый агент может трактовать детали по-своему, лишь согласованно пользуясь общим словарём. Здесь же он сформулировал свои пять критериев: ясность, согласованность (coherence), расширяемость, минимальный кодировочный уклон и минимальное онтологическое обязательство. [```4```](https://web.archive.org/web/20100716004426/http://www-ksl.stanford.edu/kst/what-is-an-ontology.html)[```5```](http://eolo.cps.unizar.es/docencia/MasterUPV/Articulos/Toward%20Principles%20for%20the%20Design%20of%20Ontologies%20Used%20for%20Knowledge%20Sharing-Gruber93.pdf)

## Как менялись формулировки у самого Грубера

- **1993, аннотация статьи в Knowledge Acquisition**: «A specification of a representational vocabulary for a shared domain of discourse — definitions of classes, relations, functions, and other objects — is called an ontology» — «Спецификация словаря представления для разделяемой области рассуждения — определения классов, отношений, функций и других объектов — называется онтологией». [```1```](https://tomgruber.org/publications/)
- **1993, в тексте статьи**: «An ontology is an explicit specification of a conceptualization» — «Онтология — это явная спецификация концептуализации», где концептуализация — «абстрактный, упрощённый взгляд на мир, который мы хотим представить для некоторой цели». [```5```](http://eolo.cps.unizar.es/docencia/MasterUPV/Articulos/Toward%20Principles%20for%20the%20Design%20of%20Ontologies%20Used%20for%20Knowledge%20Sharing-Gruber93.pdf)
- **Известный FAQ Грубера (Stanford KSL)**: «An ontology is a description (like a formal specification of a program) of the concepts and relationships that can exist for an agent or a community of agents» — «Онтология — это описание (подобное формальной спецификации программы) понятий и связей, которые могут существовать у агента или сообщества агентов». И ключевой акцент: «Важно то, для чего онтология предназначена» — она служит для фиксации онтологических обязательств агентов. [```4```](https://web.archive.org/web/20100716004426/http://www-ksl.stanford.edu/kst/what-is-an-ontology.html)
- **2009, статья «Ontology» в Encyclopedia of Database Systems**: «In the context of computer and information sciences, an ontology defines a set of representational primitives with which to model a domain of knowledge or discourse» — «В контексте компьютерных и информационных наук онтология определяет набор представительных примитивов, с помощью которых моделируется область знания или рассуждения». Там же он отмечает, что онтология — это артефакт, созданный с определённой целью: моделировать знание о домене, реальном или воображаемом. [```10```](https://tomgruber.org/writing/definition-of-ontology.pdf)

То есть эволюция у Грубера идёт от «явной спецификации» (1993) через «спецификацию для сообщества агентов» к «определению набора представительных примитивов» (2009).

## Другие классические варианты

- **Ничес и др., 1991 (DARPA Knowledge Sharing Effort)** — считается первой «стартовой» формулировкой: «An ontology defines the basic terms and relations comprising the vocabulary of a topic area as well as the rules for combining terms and relations to define extensions to the vocabulary» — «Онтология определяет базовые термины и отношения, составляющие словарь предметной области, а также правила их комбинирования для расширения этого словаря». [```6```](https://www.academia.edu/13923602/The_Construction_of_Ontology_A_Discourse_Analysis)
- **Борст, 1997**: «An ontology is a formal specification of a shared conceptualization» — «Онтология — это формальная спецификация разделяемой концептуализации». Мотивация Борста: фиксация согласия (консенсуса) по поводу концептуализации повышает шанс повторного использования онтологии. [```11```](https://www.academia.edu/121943810/Knowledge_representation_through_ontologies_an_application_in_the_electronic_democracy_field)
- **Стюдер, Бенджаминс, Фенсел, 1998** — каноническая формула, объединившая всё: «An ontology is a formal, explicit specification of a shared conceptualization» — «Онтология — это формальная, явная спецификация разделяемой концептуализации». С расшифровкой каждого слова: формальная — машиночитаемость; явная — типы понятий и ограничения на их использование заданы эксплицитно (явно, открыто); разделяемая — знание консенсусное, принятое группой, а не приватное. [```15```](https://oa.upm.es/6491/2/Reference_Ontology.pdf)
- **Гуарино и Джаретта, 1995** — они не дали формулу, но разложили употребление слова «онтология» на несколько смыслов, разделив концептуализацию (интенсиональную структуру) и онтологическую теорию (артефакт, фиксирующий истинные предложения о концептуализации). [```7```](https://www.isko.org/cyclo/ontologies)
- **Соуа, 2009**: «терминологическая онтология — та, чьи категории различаются аксиомами и определениями, выраженными в логике или машиноориентированном языке». [```7```](https://www.isko.org/cyclo/ontologies)
- **Бернерс-Ли, Хендлер, Лассила, 2001 (Semantic Web)**: «an ontology is a formal explicit description of concepts in a domain of discourse» — «онтология — это формальное явное описание понятий в области рассуждения» — популярный в контексте семантической паутины вариант.

Если нужно, могу свести всё это в одну хронологическую таблицу с полными библиографическими ссылками — удобно для диссертации или статьи.

## 3

Да, это именно Стюдер с коллегами — и это не просто моё утверждение, а документированная история, которую разобрали сами Гуарино, Оберле и Стаб в главе «What Is an Ontology?» для *Handbook on Ontologies*:

> «В 1993 году Грубер первоначально определил онтологию как "explicit specification of a conceptualization". В 1997-м Борст определил её как "formal specification of a shared conceptualization". В 1998-м Стюдер и др. объединили эти два определения: "An ontology is a formal, explicit specification of a shared conceptualization"» [```4```](https://iaoa.org/isc2012/docs/Guarino2009_What_is_an_Ontology.pdf)

## Как распределяется авторство по словам

| Компонент формулы | Кто внёс | Источник |
|---|---|---|
| «explicit specification of a conceptualization» | Грубер, 1993 | [```25```](http://eolo.cps.unizar.es/docencia/MasterUPV/Articulos/Toward%20Principles%20for%20the%20Design%20of%20Ontologies%20Used%20for%20Knowledge%20Sharing-Gruber93.pdf) |
| «formal» + «shared» | Борст, 1997 | [```4```](https://iaoa.org/isc2012/docs/Guarino2009_What_is_an_Ontology.pdf) |
| Полная склейка | Стюдер, Бенджаминс, Фенсел, 1998 | [```2```](https://github.com/ucoProject/UCO) |

В тексте Стюдера формула дана сразу с двойной ссылкой: «Ontologies are defined as a formal, explicit specification of a shared conceptualization (Gruber, 1993; Borst, 1997)» — то есть они сами честно указали, что это синтез. [```24```](https://oa.upm.es/6491/2/Reference_Ontology.pdf)

Здесь мне нужно поправить саму себя: в прошлом ответе я написала, будто Грубер в 1995-м дословно добавил «shared conceptualization» в определение. Я проверила полный текст его статьи «Toward Principles…» — там определение остаётся прежним: «An ontology is an explicit specification of a conceptualization». Слова «shared» и «formal» встречаются в статье только вокруг — про онтологические обязательства набора агентов и про «формальные онтологии» — но не внутри самой формулы определения. Так что дословная полная формулировка у Грубера действительно отсутствует. [```25```](http://eolo.cps.unizar.es/docencia/MasterUPV/Articulos/Toward%20Principles%20for%20the%20Design%20of%20Ontologies%20Used%20for%20Knowledge%20Sharing-Gruber93.pdf)

## Обсуждения на эту тему есть, и вот какие

1. **Проблема массовой ошибочной атрибуции Груберу.** Огромное число статей цитируют полную формулу со ссылкой просто на «(Gruber, 1993)» — потому что имя Грубера стало брендом, а диссертация Борста — неопубликованный PhD-труд Университета Твенте, до которого добираться лень. В итоге формула живёт в цитатах оторванной от своего авторства. Часть авторов это осознанно раскладывает: например, в методологии Capuano прямо пишут «Studer et al. merged the definitions of Gruber and Borst to create a new definition», а современные проекты вроде Unified Cyber Ontology корректно ссылаются на Studer, Benjamins, Fensel (1998). [```7```](https://www.capuano.biz/projects/alice/files/v2_methodologies_and_techniques_for_knowledge_modelling_and_representation.pdf)[```2```](https://github.com/ucoProject/UCO)

2. **Критика самой формулы у Гуарино и коллег.** В той же главе «What Is an Ontology?» они не просто атрибутируют, а разбирают формулу Стюдера по частям и высказывают неудобные вопросы: действительно ли «формальная» спецификация обязана быть спецификацией именно разделяемой концептуализации (точнее: «формальная спецификация концептуализации не обязана быть спецификацией разделяемой концептуализации»), и почему «shared» вообще важно — им нужен консенсус или просто согласованное использование словаря?. То есть формула Стюдера — предмет содержательной критики, а не только цитирования. [```4```](https://iaoa.org/isc2012/docs/Guarino2009_What_is_an_Ontology.pdf)

3. **Русскоязычные обсуждения.** Есть, например, заметка Александра Левенчука в ЖЖ, где он спорит с тем, что всю формулу приписывают Груберу («классическое определение Т. Грубера: An ontology is a formal, explicit specification…» — и там же в комментариях разбирают, чей это на самом деле вклад). [```18```](https://ailev.livejournal.com/1529632.html)

## Практический вывод для цитирования

Если ссылаетесь на формулу — корректная связка: **(Gruber, 1993; Borst, 1997; Studer et al., 1998)** либо просто **(Studer, Benjamins & Fensel, 1998)**. Ссылка только на «Gruber, 1993» для полной формулы — распространённая, но ошибочная атрибуция: у Грубера в первоисточнике её в таком виде нет.

Могу подобрать ещё пару англоязычных разборов спора об атрибуции (например, дискуссии в блогах и статьях про историю термина), если вам это нужно для работы со ссылками.

## 3.1
- https://ailev.livejournal.com/1529632.html Классическое определение Т.Грубера: An ontology is a formal, explicit specification of a shared conceptualization, https://iaoa.org/isc2012/docs/Guarino2009_What_is_an_Ontology.pdf. 
