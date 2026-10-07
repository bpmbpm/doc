## All
Owl Class Thing Individual Entity
- [Онтология высшего уровня ruwiki](https://ru.ruwiki.ru/wiki/%D0%9E%D0%BD%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE_%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D1%8F)
Различные организации предпринимали попытки разработки стандартов для определённых предметных областей.  
Например, стандарт Process Specification Language (PSL) был создан Национальным институтом стандартов и технологий США.  
Другой важной причиной отсутствия массового распространения существующих онтологий высшего уровня является их сложность.  
Некоторые такие онтологии — например, часто упоминаемая Cyc — весьма обширны и содержат тысячи элементов (классов, отношений), с комплексными связями между ними и сложностью, сравнимой с человеческим естественным языком,
а процесс изучения может быть даже длиннее, чем для обычного языка, из-за непривычного формата и логических правил.

## SUMO
- https://ontologyportal.org/SUMOhistory ?
- https://en.wikipedia.org/wiki/Suggested_Upper_Merged_Ontology
- https://aikernel.org/doc/131/index.en.html
- https://ontolearner.readthedocs.io/benchmarking/upper_ontology/sumo.html

## 1

**Physical** — это один из ключевых классов в онтологии верхнего уровня **SUMO** (Suggested Upper Merged Ontology). Я коротко объясню, что он означает и как устроен в иерархии SUMO. [```15```](http://iitp.ru/upload/publications/6612/Ontology.pdf)[```6```](https://files.stroyinf.ru/Data/811/81141.pdf)[```7```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)


[![Онтологии. Содержание онтологии - презентация онлайн](https://avatars.mds.yandex.net/i?id=9812f4babf3212c1d410c85c81060e3f_l-5282589-images-thumbs&n=13)](https://ppt-online.org/323896)

## Что означает Physical в SUMO

В SUMO всё начинается с категории **Entity** (Сущность). От неё идёт непересекающееся разделение на два больших класса: **Physical** (Физическое) и **Abstract** (Абстрактное). [```6```](https://files.stroyinf.ru/Data/811/81141.pdf)[```7```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)[```9```](https://www.researchgate.net/publication/221234966_Towards_a_Standard_Upper_Ontology)

**Physical** — это класс, который включает всё, что имеет **положение в пространстве и времени**. Проще говоря: если что-то можно локализовать — указать его координаты, отметить момент существования, — оно попадает в Physical. [```7```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)[```9```](https://www.researchgate.net/publication/221234966_Towards_a_Standard_Upper_Ontology)[```15```](http://iitp.ru/upload/publications/6612/Ontology.pdf)

## Как Physical делится дальше

Внутри Physical выделяются два непересекающихся подкласса:
* **Object** (Объект) — материальные вещи, артефакты.
* **Process** (Процесс) — то, что происходит, разворачивается во времени (событие, изменение).

 [```7```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)[```9```](https://www.researchgate.net/publication/221234966_Towards_a_Standard_Upper_Ontology)

То есть Physical — это фундамент, на котором строятся модели реального мира: у объектов есть структура, а процессы описывают динамику. [```7```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)

## Как это формализовано

В SUMO (на языке SUO-KIF — версии KIF для SUMO) это свойство (иметь координаты в пространстве и времени) выражается через **аксиому**. Она гласит: для любого объекта класса Physical обязательно существуют две переменные — `?LOC` (пространство) и `?TIME` (время). Их значения — это координаты объекта, которые возвращают функции `located` и `time` из KIF. [```15```](http://iitp.ru/upload/publications/6612/Ontology.pdf)

## Несколько нюансов

* SUMO — это **верхняя онтология**, то есть она задаёт самые общие категории. А уже на её основе разработчики создают **доменные онтологии** (например, для логистики, медицины или робототехники), добавляя к базовой структуре конкретные понятия. [```15```](http://iitp.ru/upload/publications/6612/Ontology.pdf)[```7```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)
* В SUMO есть и другие важные верхние категории (например, Abstract — всё, что не имеет пространственно-временной привязки: идеи, свойства, отношения). [```6```](https://files.stroyinf.ru/Data/811/81141.pdf)[```7```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)
* Онтологию создавали, объединив разные существующие подходы и онтологии (в том числе онтологию Джона Совы, теории мереотопологии). [```7```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)[```9```](https://www.researchgate.net/publication/221234966_Towards_a_Standard_Upper_Ontology)
* SUMO связана с лексической базой **WordNet** — классы онтологии сопоставлены с синсетами (группами слов) WordNet, что помогает в задачах обработки естественного языка. [```15```](http://iitp.ru/upload/publications/6612/Ontology.pdf)[```4```](https://www.semanticscholar.org/paper/Default-Physical-Measurements-in-SUMO-Quattri-Pease/e67055179e2dd57d77b564e9361e9f87f14f407c)
* Со временем в SUMO появлялись расширения. Например, были добавлены **значения физических измерений по умолчанию** для многих классов (Артефакты, Устройства, Объекты) — это помогает в вычислениях и разрешении неоднозначностей. [```3```](https://www.academia.edu/44781006/Default_Physical_Measurements_in_SUMO)[```8```](https://aclanthology.org/W14-4718.pdf)[```5```](https://www.researchgate.net/publication/266389060_Default_physical_measurements_in_SUMO)

## Зачем это нужно на практике?

SUMO используют как фундамент для систем, где нужно обеспечить интероперабельность: чтобы разные базы данных или системы могли «понимать» друг друга, имея общую семантическую основу. [```6```](https://files.stroyinf.ru/Data/811/81141.pdf)[```10```](https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2)

## Где посмотреть

Если хотите изучить подробнее, загляните в [Ontology Portal](https://en.wikipedia.org/wiki/Suggested_Upper_Merged_Ontology) — там можно просматривать онтологию онлайн. [```14```](https://en.wikipedia.org/wiki/Suggested_Upper_Merged_Ontology)[```9```](https://www.researchgate.net/publication/221234966_Towards_a_Standard_Upper_Ontology)

## 1.1

## Что выше Entity?

**Ничего.** Entity — корневая вершина иерархии SUMO, у неё нет суперкласса. Всё остальное в онтологии — её подклассы. Это видно прямо в исходниках: в файле Merge.kif каждый концепт, кроме Entity, определён либо как подкласс, либо как экземпляр другого концепта, а Entity — единственный класс без `(subclass Entity ...)` [https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif](https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif). В статье «Towards a Standard Upper Ontology» прямо сказано: «The root node of the SUMO is, as in many ontologies, 'Entity'» [https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf).

Уточнение: Entity задаётся как **partition** — всё, что существует, делится на два непересекающихся класса: Physical и Abstract:

```
(subclass Physical Entity)
(subclass Abstract  Entity)
(partition Entity Physical Abstract)
```

## Подробная иерархия (первые уровни)

```
Entity
│
├── Physical                          — всё, что имеет положение в пространстве-времени
│   │
│   ├── Object                        — то, что «продолжается во времени», все части
│   │   │                               существуют одновременно
│   │   ├── SelfConnectedObject       — объект, части которого связаны между собой
│   │   │   ├── Substance             — однородная субстанция (вода, глина);
│   │   │   │                           любая часть обладает свойствами целого
│   │   │   └── CorpuscularObject     — объект, части которого имеют свойства,
│   │   │                               отличные от свойств целого (стол, организм)
│   │   ├── Collection                — совокупность несвязанных частей,
│   │   │                               связанные с ней отношением member
│   │   └── Region                    — топографическое расположение (поверхности,
│   │                                   географические области; не SelfConnected,
│   │                                   т.к. части могут быть разрозненны)
│   │
│   └── Process                       — то, что «происходит», а не существует:
│                                       имеет временные стадии (матч, гонка,
│                                       биологические процессы, состояния движения)
│       ├── DualObjectProcess
│       ├── InternalChange
│       ├── Motion
│       ├── StateChange
│       ├── Creation / Destruction
│       ├── Perception
│       └── ... и другие процессы
│
└── Abstract                          — всё без пространственно-временной привязки
    │
    ├── Quantity                      — величины
    │   ├── Number                    — число без привязки к системе измерения
    │   └── PhysicalQuantity          — число + единица измерения
    │                                   (1 метр и 39,37 дюйма — разные экземпляры)
    │
    ├── Attribute                     — качества и свойства, не «овеществлённые»
    │   │                               как объекты (Female, Male — экземпляры
    │   │                               BiologicalAttribute)
    │   ├── InternalAttribute
    │   └── ExternalAttribute
    │
    ├── SetOrClass                    — классы и множества
    │   └── Relation                  — класс упорядоченных кортежей
    │                                   с интенсиональным содержанием
    │
    ├── Proposition                   — семантическое/информационное содержание
    │                                   (выражается одним предложением, книгой
    │                                   или целой библиотекой)
    │
    └── Graph                         — графы как абстрактные структуры
        └── GraphElement              — узлы и дуги графа
```

Источник третьего уровня (12 классов: Object, Process, Quantity, Attribute, SetOrClass, Relation, Proposition, Graph, GraphElement) — разбор разметки по SUMO: [https://aclanthology.org/W17-6608.pdf](https://aclanthology.org/W17-6608.pdf).

## Пара важных деталей

- **Object и Process — непересекающиеся сиблинги.** SUMO принимает 3D-ориентацию («эндурентизм»): объект полностью присутствует в каждый момент своего существования, процесс — нет. Именно поэтому в онтологии записано `(disjoint Object Process)` [https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf).
- **Ниже классов есть экземпляры.** Иерархия не сводится к дереву классов: например, Female и Male — экземпляры BiologicalAttribute, а 1 метр — экземпляр PhysicalQuantity [https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2](https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2).
- **Множественное наследование допускается.** Subклассы на одном уровне обычно исключают друг друга, но класс может иметь несколько суперклассов — например, Human одновременно Hominid и CognitiveAgent [https://www.ontologyportal.org/pubs/Sevcenko.pdf](https://www.ontologyportal.org/pubs/Sevcenko.pdf).
- В ранних версиях (по статье Нилса и Пиза) под SelfConnectedObject стояла пара ContinuousObject/CorpuscularObject; в современной версии ContinuousObject переименован в **Substance** [https://www.researchgate.net/publication/221234966_Towards_a_Standard_Upper_Ontology](https://www.researchgate.net/publication/221234966_Towards_a_Standard_Upper_Ontology) и [https://github.com/gruninger/colore/blob/master/ontologies/sumo/sumo-cl.clif](https://github.com/gruninger/colore/blob/master/ontologies/sumo/sumo-cl.clif).

## Ссылки (полные адреса)

- Официальный сайт онтологии: https://www.ontologyportal.org
- Исходный файл Merge.kif (полные определения верхних классов): https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif
- Статья «Towards a Standard Upper Ontology» (Niles, Pease): https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf
- Там же на ResearchGate: https://www.researchgate.net/publication/221234966_Towards_a_Standard_Upper_Ontology
- Википедия с обзорной диаграммой категорий: https://en.wikipedia.org/wiki/Suggested_Upper_Merged_Ontology
- Лекция НОУ «ИНТУИТ» с русской терминологией (СвязныйОбъект, Коллекция и т.д.): https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2
- Презентация Пиза «Formal Ontology and SUMO»: https://variamu.hypotheses.org/files/2014/03/SUMO-NLP-2014-03-10.pdf
- Презентация «Online Presentation of an Upper Ontology»: https://www.ontologyportal.org/pubs/Sevcenko.pdf
- CLIF-перевод SUMO (коллекция CoLoR): https://github.com/gruninger/colore/blob/master/ontologies/sumo/sumo-cl.clif
- Статья про разметку по трём верхним уровням: https://aclanthology.org/W17-6608.pdf
- Про переосмысление SUMO для теорем-доказателей (Adimen-SUMO): http://www.sc.ehu.es/jiwlucap/IJSWIS12.pdf

Хотите, спущусь на уровень ниже — например, распишу полную ветку Process (InternalChange, Motion, Perception, BiologicalProcess и т.д.) или ветку Object до артефактов и устройств?


