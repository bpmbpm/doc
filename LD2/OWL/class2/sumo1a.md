## 1
info:
- https://github.com/inariksit
- https://github.com/inariksit/cclaw-zettelkasten ; https://inariksit.github.io/cclaw-zettelkasten/sumo.html


Вот полная схема верхнего уровня SUMO — с английскими и русскими названиями. Важная оговорка: «в полном объёме» буквально означает тысячи классов (только верхняя онтология — порядка 1000 терминов [https://inariksit.github.io/cclaw-zettelkasten/sumo.html](https://inariksit.github.io/cclaw-zettelkasten/sumo.html), а с доменными онтологиями — десятки тысяч), поэтому ниже — верхний уровень онтологии в максимальной разумной детализации (уровни 1–5), такой, как он определён в Merge.kif.


[![sumo_hierarchy_ru.png](https://rpc.alice.yandex.ru/gproxy/get_preview_url?FileGuid=a5d37074-c24111f1-9d6ad928-d3640b14&n=13)](https://rpc.alice.yandex.ru/gproxy/get_preview_url?FileGuid=a5d37074-c24111f1-9d6ad928-d3640b14)

```
Entity (Сущность)
│
├── Physical (Физическое)  — всё, что имеет положение в пространстве-времени
│   │
│   ├── Object (Объект)  — существует в пространстве, сохраняет тождественность во времени
│   │   │
│   │   ├── Agent (Агент)  — нечто, способное действовать и изменять мир
│   │   │   ├── SentientAgent (Одушевлённый агент)
│   │   │   │   └── CognitiveAgent (Познающий агент)  → Human (Человек) [множ. наследование]
│   │   │   └── Organization (Организация)
│   │   │       └── PoliticalOrganization (Политическая организация)
│   │   │
│   │   ├── SelfConnectedObject (Связный объект)  — части которого связаны между собой
│   │   │   ├── Substance (Субстанция)  — любая часть обладает свойствами целого
│   │   │   │   ├── PureSubstance (Чистая субстанция)
│   │   │   │   │   ├── ElementalSubstance (Элементарная субстанция)
│   │   │   │   │   └── CompoundSubstance (Сложное вещество)
│   │   │   │   └── Mixture (Смесь)
│   │   │   │       ├── Solution (Раствор)
│   │   │   │       └── MechanicalMixture (Механическая смесь)
│   │   │   └── CorpuscularObject (Корпускулярный объект)  — части имеют свойства,
│   │   │       │                                            отличные от целого
│   │   │       ├── OrganicObject (Органический объект)
│   │   │       │   ├── Organism (Организм)
│   │   │       │   │   ├── Animal (Животное) → Vertebrate (Позвоночное)
│   │   │       │   │   │                     → Mammal (Млекопитающее) → Primate (Примат)
│   │   │       │   │   │                     → Hominid (Гоминид) → Human (Человек)
│   │   │       │   │   ├── Plant (Растение)
│   │   │       │   │   └── Microorganism (Микроорганизм)
│   │   │       │   └── AnatomicalStructure (Анатомическая структура)
│   │   │       ├── ContentBearingObject (Объект, несущий содержание)
│   │   │       │   └── SymbolicString (Символьная строка)
│   │   │       └── Artifact (Артефакт)
│   │   │           ├── Device (Устройство) → Machine (Машина) → Engine (Двигатель)
│   │   │           ├── Vehicle (Транспортное средство)
│   │   │           ├── Product (Продукт)
│   │   │           └── StationaryArtifact (Стационарный артефакт)
│   │   │               ├── Building (Здание)
│   │   │               └── Room (Комната)
│   │   │
│   │   ├── Collection (Совокупность)  — члены связаны отношением member; тождество
│   │   │   │                            сохраняется при добавлении/удалении членов
│   │   │   └── Group (Группа)
│   │   │       └── GroupOfPeople (Группа людей)
│   │   │
│   │   └── Region (Регион / Область)  — топографическое расположение; не связный объект
│   │       ├── GeographicArea (Географическая область)
│   │       │   ├── LandArea (Суша) → Continent (Континент) → Nation (Государство)
│   │       │   │                                          → City (Город)
│   │       │   └── WaterArea (Водная область) → River (Река), Lake (Озеро), Sea (Море)
│   │       ├── AstrophysicalRegion (Астрофизический регион)
│   │       │   ├── Planet (Планета)
│   │       │   ├── Star (Звезда)
│   │       │   └── Galaxy (Галактика)
│   │       ├── Surface (Поверхность)
│   │       └── Transitway (Путь / проход)  [множ. наследование: также под
│   │                                        SelfConnectedObject]
│   │
│   └── Process (Процесс)  — происходит во времени, имеет временные стадии
│       │
│       ├── IntentionalProcess (Интенциональный процесс)  — агент действует с целью
│       │   ├── Guiding (Управление) → Driving (Вождение), Piloting (Пилотирование)
│       │   ├── OrganizationalProcess (Организационный процесс)
│       │   ├── SocialInteraction (Социальное взаимодействие)
│       │   │   ├── Cooperation (Сотрудничество)
│       │   │   └── Contest (Состязание)
│       │   ├── FinancialTransaction (Финансовая транзакция)
│       │   │   ├── Buying (Покупка)
│       │   │   ├── Selling (Продажа)
│       │   │   └── Payment (Платёж)
│       │   └── EducationalProcess (Образовательный процесс)
│       │
│       ├── BiologicalProcess (Биологический процесс)
│       │   ├── PhysiologicProcess (Физиологический процесс)
│       │   │   ├── Ingestion (Потребление) → Eating (Еда), Drinking (Питьё),
│       │   │   │                             Breathing (Дыхание)
│       │   │   └── Growth (Рост)
│       │   ├── PsychologicalProcess (Психологический процесс)
│       │   │   └── EmotionalProcess (Эмоциональный процесс)
│       │   └── PathologicProcess (Патологический процесс)
│       │       ├── DiseaseOrSyndrome (Болезнь или синдром)
│       │       └── Injuring (Травмирование)
│       │
│       ├── Motion (Движение)
│       │   ├── BodyMotion (Движение тела) → Walking (Ходьба), Swimming (Плавание)
│       │   ├── Transport (Перемещение) → Transportation (Перевозка)
│       │   └── Transfer (Передача)
│       │
│       ├── StateChange (Изменение состояния)
│       │   ├── Boiling (Кипение), Melting (Плавление), Freezing (Замерзание)
│       │   ├── Condensation (Конденсация), Sublimation (Возгонка)
│       │   └── Burning (Горение)
│       │
│       ├── InternalChange (Внутреннее изменение)
│       │   └── QuantityChange (Изменение количества)
│       │       ├── Increasing (Увеличение)
│       │       └── Decreasing (Уменьшение)
│       ├── ShapeChange (Изменение формы)
│       ├── Creation (Создание) → Making (Изготовление)
│       ├── Destruction (Разрушение) → Damaging (Повреждение), Killing (Убийство)
│       ├── Combination (Соединение), Separating (Разделение)
│       ├── Attaching (Присоединение), Detaching (Отделение)
│       ├── DualObjectProcess (Двойной процесс)
│       ├── WeatherProcess (Погодный процесс) → Raining (Дождь), Snowing (Снегопад)
│       ├── Perception (Восприятие)
│       │   ├── Seeing (Зрение), Hearing (Слух), Smelling (Обоняние)
│       │   └── Tasting (Вкус), Touching (Осязание)
│       └── Communication (Коммуникация)
│           ├── LinguisticCommunication (Языковое общение)
│           │   ├── Stating (Утверждение), Questioning (Вопрос), Ordering (Приказ)
│           │   └── Promising (Обещание)
│           └── Disseminating (Распространение информации)
│
└── Abstract (Абстрактное)  — всё без пространственно-временной привязки
    │
    ├── Quantity (Количество)
    │   ├── Number (Число)  — счёт без привязки к системе измерения
    │   │   ├── RealNumber (Действительное число)
    │   │   │   ├── RationalNumber (Рациональное число) → Integer (Целое число)
    │   │   │   └── IrrationalNumber (Иррациональное число)
    │   │   ├── ImaginaryNumber (Мнимое число)
    │   │   └── ComplexNumber (Комплексное число)
    │   └── PhysicalQuantity (Физическая величина)  — число + единица измерения
    │       ├── ConstantQuantity (Постоянная величина)
    │       │   ├── LengthMeasure (Длина), MassMeasure (Масса)
    │       │   ├── AreaMeasure (Площадь), VolumeMeasure (Объём)
    │       │   ├── TemperatureMeasure (Температура)
    │       │   ├── CurrencyMeasure (Денежная сумма)
    │       │   └── TimeMeasure (Мера времени) → TimeDuration (Длительность),
    │       │                                    TimePoint (Момент времени)
    │       └── FunctionQuantity (Функциональная величина)
    │
    ├── Attribute (Атрибут)  — качества, не «овеществлённые» как объекты
    │   ├── InternalAttribute (Внутренний атрибут)
    │   │   └── BiologicalAttribute (Биологический атрибут)  → экземпляры Female (Женский),
    │   │                                                       Male (Мужской)
    │   ├── ExternalAttribute (Внешний атрибут)
    │   ├── RelationalAttribute (Реляционный атрибут)
    │   ├── PsychologicalAttribute (Психологический атрибут)
    │   └── SubjectiveAssessmentAttribute (Субъективно-оценочный атрибут)
    │
    ├── SetOrClass (Множество или класс)
    │   ├── Relation (Отношение)  — класс упорядоченных кортежей
    │   │   │                        с интенсиональным содержанием
    │   │   ├── BinaryRelation (Бинарное отношение)
    │   │   │   ├── TransitiveRelation (Транзитивное), IntransitiveRelation (Нетранзитивное)
    │   │   │   ├── SymmetricRelation (Симметричное), AsymmetricRelation (Асимметричное)
    │   │   │   ├── ReflexiveRelation (Рефлексивное), IrreflexiveRelation (Иррефлексивное)
    │   │   │   ├── AntisymmetricRelation (Антисимметричное)
    │   │   │   ├── PartialOrderingRelation (Частичный порядок)
    │   │   │   ├── EquivalenceRelation (Отношение эквивалентности)
    │   │   │   ├── SpatialRelation (Пространственное отношение)
    │   │   │   ├── TemporalRelation (Временное отношение)
    │   │   │   ├── CaseRole (Ролевое отношение процесса: agent, patient, destination...)
    │   │   │   └── ProbabilityRelation (Вероятностное отношение)
    │   │   ├── TernaryRelation (Тернарное) → QuaternaryRelation → QuintaryRelation
    │   │   ├── VariableArityRelation (Отношение переменной арности)
    │   │   ├── Predicate (Предикат)
    │   │   ├── Function (Функция) → UnaryFunction (Одноместная), BinaryFunction (Двухместная)
    │   │   └── List (Список)
    │   └── NullSet (Пустое множество)
    │
    ├── Proposition (Пропозиция)  — семантическое / информационное содержание:
    │                              от одного предложения до целой библиотеки
    │
    └── Graph (Граф)  — граф как абстрактная структура
        └── GraphElement (Элемент графа)  [множ. наследование: также под Graph]
            ├── GraphNode (Узел графа)
            └── GraphArc (Дуга графа)
```

Ту же схему сохранил файлом: [tree.txt](https://rpc.alice.yandex.ru/gproxy/get_source_file?FileGuid=a5d37d12-c24111f1-8caac615-9d906fd3).

## Ключевые аксиомы, которые «склеивают» схему

- Корень: `(partition Entity Physical Abstract)` — всё существующее делится на эти два непересекающихся класса [https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf).
- `(disjoint Object Process)` и `(disjoint SelfConnectedObject Collection)`, `(disjoint CorpuscularObject Substance)` — прямые запрещения между сиблингами [https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif](https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif).
- Под Object обязательно сидят **Agent**, **SelfConnectedObject**, **Collection**, **Region** — это видно прямо в исходниках [https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif](https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif) и на таксономической схеме из статьи о пространстве в SUMO [https://www.academia.edu/19371267/Spatial_ontology_baseline](https://www.academia.edu/19371267/Spatial_ontology_baseline).
- Под Abstract — пять ветвей: Quantity, Attribute, SetOrClass, Relation, Proposition [https://real.mtak.hu/74043/1/Extensions_to_the_core_ontology_for_robotics_and_automation_2014_u.pdf](https://real.mtak.hu/74043/1/Extensions_to_the_core_ontology_for_robotics_and_automation_2014_u.pdf).

## На что обратить внимание

- **Множественное наследование.** Human — подкласс Hominid (цепочка Organism → Animal → … → Hominid) и одновременно CognitiveAgent → SentientAgent → Agent: пример из SigmaKB показывает оба родителя в списке суперклассов [https://sourceforge.net/p/sigmakee/mailman/message/399393/](https://sourceforge.net/p/sigmakee/mailman/message/399393/). Ещё пример — Transitway одновременно под Region и SelfConnectedObject [https://www.academia.edu/19371267/Spatial_ontology_baseline](https://www.academia.edu/19371267/Spatial_ontology_baseline).
- **Расхождение версий.** В классической статье Нилса и Пиза ContentBearingObject был под CorpuscularObject, а иерархия Абстрактного выглядела как Set → Class → Relation [https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf); в актуальном Merge.kif ContentBearingObject — прямой подкласс SelfConnectedObject, а Relation сгруппирован под SetOrClass. Я привёл актуальный вариант.
- **Экземпляры и классы сосуществуют.** Female/Male — не классы, а экземпляры BiologicalAttribute; 1 метр — экземпляр PhysicalQuantity. Поэтому схема — только про `subclass`-связи.

Если нужно — могу выгрузить полную иерархию без сокращений прямо из исходника Merge.kif в файл (все `subclass`-связи одним списком), это тысячи строк, но машина сделает за минуту.
