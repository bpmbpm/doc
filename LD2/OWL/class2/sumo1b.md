## 1

Разберу первые уровни иерархии подробно: определения, аксиомы, примеры и различия между ветками. Названия классов даю в актуальной редакции из Merge.kif; в скобках после утверждений — полные ссылки на источники.

## Уровень 0. Entity (Сущность)

Корень всей онтологии. Любое, что вообще можно помыслить как «нечто», — экземпляр Entity: и стол, и число 7, и понятие «справедливость». У Entity нет суперкласса; она определяется через разбиение на два непересекающихся класса:

```
(subclass Physical Entity)
(subclass Abstract  Entity)
(partition Entity Physical Abstract)
```

`partition` означает сразу два свойства: классы **не пересекаются** (ничто не может быть одновременно физическим и абстрактным) и **покрывают всё** (каждая сущность попадает ровно в одну из веток). Такое покрытие даёт «строгую классификацию без пробелов» (https://grokipedia.com/page/suggested_upper_merged_ontology). Тот же результат формально показан в переводе SUMO на логику первого порядка: аксиомы `(subclass Region Object)`, `(subclass Object Physical)` и определение транзитивности `subclass` — https://adimen.ehu.eus/~rigau/publications/TR007-WP06.pdf

**Примеры:**
- экземпляр Physical: конкретный стол `Table1`, дождь в Тульской области вчера в 14:00;
- экземпляр Abstract: число 7, отношение «быть отцом», содержание утверждения «кошка на ковре».

## Уровень 1. Physical (Физическое) и Abstract (Абстрактное)

**Критерий деления — положение в пространстве и времени.** «Physical» — всё, что имеет позицию в пространстве-времени; «Abstract» — всё остальное (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf; русское изложение — https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2).

Аксиома, формализующая Physical, требует, чтобы у каждого физического объекта существовали координаты `?LOC` (пространство) и `?TIME` (время) — определение через функции `located` и `time` приведено в лекции «ИНТУИТ» (https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2).

| | Physical | Abstract |
|---|---|---|
| Критерий | есть положение в пространстве-времени | нет пространственно-временной привязки |
| Примеры | стол, человек, дождь, футбольная команда | число 7, отношение `subclass`, пропозиция, атрибут «мужской» |

## Уровень 2, ветка Physical: Object (Объект) и Process (Процесс)

Ключевой философский выбор SUMO — **3D-ориентация (эндурантизм)**: объект, в отличие от процесса, полностью присутствует в каждый момент своего существования. Сторонники 4D-ориентации (пердурантизм) считали бы объект и процесс двумя полюсами одного континуума «пространственно-временных червей», но создатели SUMO выбрали 3D, чтобы включить процессные онтологии вроде PSL и формальные мереотопологии (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf; там же записано `(disjoint Object Process)` — прямое запрещение пересечения).

Проверка на конкретном примере:
- **Object:** стол. В любой момент существования стола существуюет весь стол целиком — все его ножки, столешница.
- **Process:** кипение воды. В момент «t = 5 секунд» кипение не существует «целиком» — оно только разворачивается; есть начальная стадия, есть конец.

Классические примеры процессов из Merge.kif: `TurningOffDevice` — процесс типа InternalChange, меняющий внутреннее состояние устройства (https://arxiv.org/pdf/2012.15835); `Baking` — приготовление пищи с помощью духовки (https://www.researchgate.net/publication/348481439_Semantic_Modeling_with_SUMO).

## Уровень 3, ветка Object: SelfConnectedObject, Collection, Region, Agent

### SelfConnectedObject (Связный объект)

«Object, все части которого непосредственно или через посредников связаны друг с другом» (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). Формализация — аксиома связности:

```
(<=>
  (instance ?OBJ SelfConnectedObject)
  (forall (?PART1 ?PART2)
    (=> (and (part ?PART1 ?OBJ)
             (part ?PART2 ?OBJ))
        (connected ?PART1 ?PART2))))
```

Здесь `connected` — обобщённое понятие: части могут быть связаны и напрямую (ручка прикреплена к кружке), и через третью часть (ручка → корпус → носик) (https://adampease.com/FOIS.pdf).

**Примеры:** яблоко (континуально связное), стол, человеческое тело.

### Collection (Совокупность)

Прямая противоположность SelfConnectedObject: части **несвязаны**, а связь с целым задаётся отношением `member`. Документация в исходниках приводит примеры: «toolkits, football teams, and flocks of sheep» — наборы инструментов, футбольные команды, отары овец (https://github.com/gruninger/colore/blob/master/ontologies/sumo/sumo-cl.clif). Есть аксиома «нет пустых коллекций»: у любой Collection существует хотя бы один член (https://adampease.com/FOIS.pdf).

Три различимых отношения — не путать (https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2):

- `member` — «быть членом коллекции» (игрок — член команды);
- `instance` — «быть экземпляром класса» (Рекс — экземпляр класса Dog);
- `element` — «быть элементом множества».

Ещё важное отличие от классов: коллекция занимает положение в пространстве-времени (она **материальна**, не абстрактна, как в OpenCyc), и её тождество сохраняется при добавлении и удалении членов (https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2).

Пример: `GroupOfPeople` — толпа на площади; уйдут трое, придут пятеро — это **та же самая** толпа как Collection.

### Region (Регион)

Определение из исходников: «topographic location. Regions encompass surfaces of Objects, imaginary places, and GeographicAreas» (https://github.com/gruninger/colore/blob/master/ontologies/sumo/sumo-cl.clif). Два специальных свойства:

- Region — **единственный вид Object, который может быть локализован сам в себе**;
- Region **не является подклассом SelfConnectedObject**, потому что некоторые регионы (например, архипелаги) имеют несвязанные части (https://github.com/gruninger/colore/blob/master/ontologies/sumo/sumo-cl.clif; обсуждение — https://hal.science/hal-00012203/document).

**Примеры:** поверхность яблока (Surface), Байкал (GeographicArea → WaterArea → Lake), воображаемое место из романа.

### Agent (Агент)

Под Object также сидит Agent — то, что может действовать и изменять мир. Цепочка: Agent → SentientAgent → CognitiveAgent → Human. Агент участвует в процессах через ролевое отношение `agent`, домены которого видны в примере аксиомы «эксплуатации ресурса»: `(domain agent 1 Process)`, `(domain resource 1 Process)` (https://adimen.ehu.eus/~rigau/publications/TR007-WP06.pdf).

**Примеры:** человек, организация, ИИ-система — всё, что может быть исполнителем интенционального процесса.

## Уровень 4, под SelfConnectedObject: Substance и CorpuscularObject

СамоConnectedObject делится на два непересекающихся класса. Аксиома, разводящая их:

```
(=> (and (subclass ?OBJECTTYPE Substance)
         (instance ?OBJECT ?OBJECTTYPE)
         (part ?PART ?OBJECT))
    (instance ?PART ?OBJECTTYPE))

(disjoint CorpuscularObject Substance)
```

**Substance (Субстанция)** — «любая часть (вплоть до неопределённого уровня разбиения) имеет свойства целого»: вода, глина, золото (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf; https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2). Отрезок золота — то же золото; капля воды — та же вода. Под Substance — PureSubstance (ElementalSubstance, CompoundSubstance) и Mixture (Solution).

**CorpuscularObject (Корпускулярный объект)** — класс, у которого «части имеют свойства, не присущие целому» (документация в исходниках — https://github.com/gruninger/colore/blob/master/ontologies/sumo/sumo-cl.clif). Оценочная формальная связь: у CorpuscularObject существует как минимум два разных материала (`material`), из которых он состоит (https://github.com/gruninger/colore/blob/master/ontologies/sumo/sumo-cl.clif).

**Примеры:** стол — CorpuscularObject (состоит из дерева и металла, ни одна часть не «стол»); человеческое тело — CorpuscularObject (состоит из клеток, ни одна клетка — не человек); под CorpuscularObject — OrganicObject (Organism: Animal, Plant, Microorganism), Artifact (Device, Vehicle, Building), ContentBearingObject (SymbolicString).

## Уровень 3, ветка Process (примеры по подклассам)

| Подкласс Process | Что означает | Примеры |
|---|---|---|
| IntentionalProcess | агент действует с целью | покупка, чтение книги, вождение |
| BiologicalProcess | процессы живых организмов | метаболизм, дыхание, рост |
| StateChange | переход между состояниями | плавление, кипение, замерзание |
| Motion | перемещение в пространстве | ходьба, полёт, течение реки |
| InternalChange | изменение внутренней структуры | TurningOffDevice (выключение устройства) |
| Creation / Destruction | появление и исчезновение объектов | постройка дома / разрушение здания |
| Perception | восприятие органами чувств | зрение, слух, обоняние |
| WeatherProcess | погодные явления | дождь, снегопад |
| Communication | передача информации | утверждение, вопрос, обещание |

Пример `TurningOffDevice` как InternalChange с формулой перехода состояния — в статье про семантическое моделирование: https://arxiv.org/pdf/2012.15835

## Уровень 3, ветка Abstract (пять непересекающихся подклассов)

Под Abstract в актуальной версии сидят Quantity, Attribute, SetOrClass, Proposition, Graph (современная структура — https://real.mtak.hu/74043/1/Extensions_to_the_core_ontology_for_robotics_and_automation_2014_u.pdf; в статье Нилса и Пиза 2001 года Abstract делилась на SetClass, Relation, Proposition, Quantity, Attribute — https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf).

**Quantity (Количество)** — делится на Number и PhysicalQuantity. Number — счёт без привязки к системе измерения (просто «7»). PhysicalQuantity — комплекс «число + единица»: 1 метр и 39,37 дюйма — **два разных экземпляра** PhysicalQuantity, эквивалентность которых устанавливается отдельными аксиомами пересчёта (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). Под PhysicalQuantity — LengthMeasure, MassMeasure, TemperatureMeasure, CurrencyMeasure и т.д.

**Attribute (Атрибут)** — качества, не «овеществлённые» как объекты. Хрестоматийный пример из статьи: вместо разбиения животных на классы «FemaleAnimals» и «MaleAnimals» SUMO делает Female и Male **экземплярами** BiologicalAttribute (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). Это отражает позицию: «быть самкой» — свойство, а не тип сущности.

**SetOrClass (Множество или класс)** — теоретико-множественная ветка. В актуальной версии под ней Relation — класс упорядоченных кортежей с интенсиональным содержанием; далее BinaryRelation (TransitiveRelation, SymmetricRelation, EquivalenceRelation, CaseRole — ролевые отношения процессов) и Function (https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif). Пример: `subclass` — экземпляр PartialOrderingRelation, который сам является подклассом TransitiveRelation (https://adimen.ehu.eus/~rigau/publications/TR007-WP06.pdf).

**Proposition (Пропозиция)** — семантическое/информационное содержание, которое может быть выражено «одним предложением, книгой или целой библиотекой» (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). Пример: содержание теоремы Пифагора — одна пропозиция, а её русских и английских формулировок может быть много.

**Graph (Граф)** — граф как абстрактная структура; под ним GraphElement (GraphNode, GraphArc), причём GraphElement стоит и под Graph (множественное наследование) (https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif).

## Сводная таблица «концепт → пример»

| Класс | Экземпляры-примеры |
|---|---|
| Entity | что угодно |
| Object / Physical | стол `Table1`, человек, Байкал |
| Process | кипение воды, покупка, лекция |
| SelfConnectedObject | яблоко, кружка |
| Collection | футбольная команда, отара овец, набор инструментов |
| Region | поверхность яблока, архипелаг, географическая область |
| Substance | вода, глина, золото |
| CorpuscularObject | стол, человеческое тело |
| Number | 7, π |
| PhysicalQuantity | 1 метр; 39,37 дюйма (разные экземпляры) |
| Attribute (экземпляры) | Female, Male (экземпляры BiologicalAttribute) |
| Relation | `subclass`, «быть отцом» |
| Proposition | содержание теоремы Пифагора |

## Источники (полные URL)

1. Нилс, Пиз — статья «Towards a Standard Upper Ontology» (основной текст): https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf
2. Тот же PDF на сайте автора: https://adampease.com/FOIS.pdf
3. Исходники SUMO в CLIF (определения Substance, CorpuscularObject, Region, Collection): https://github.com/gruninger/colore/blob/master/ontologies/sumo/sumo-cl.clif
4. Merge.kif — главный файл SUMO: https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif
5. Лекция «ИНТУИТ» (русская терминология и аксиомы): https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2
6. Adimen-SUMO — перевод в FOL, аксиомы subclass/instance: https://adimen.ehu.eus/~rigau/publications/TR007-WP06.pdf
7. Семантическое моделирование с SUMO (примеры процессов): https://arxiv.org/pdf/2012.15835
8. Grokipedia — обзор структуры верхнего уровня: https://grokipedia.com/page/suggested_upper_merged_ontology
9. Расширения для робототехники (структура Abstract): https://real.mtak.hu/74043/1/Extensions_to_the_core_ontology_for_robotics_and_automation_2014_u.pdf
10. ResearchGate — копия статьи Нилса и Пиза: https://www.researchgate.net/publication/221234966_Towards_a_Standard_Upper_Ontology
11. Слайды Пиза по SUMO и NLP: https://variamu.hypotheses.org/files/2014/03/SUMO-NLP-2014-03-10.pdf

Если хотите, дальше могу так же детально разобрать ветку Process (все подклассы с примерами из Merge.kif) или показать, как один и тот же объект описывается одновременно классом и экземпляром в разных контекстах.
