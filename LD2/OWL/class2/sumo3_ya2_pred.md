## 1
предикаты SUMO их обзор,

# Предикаты SUMO на первых четырёх уровнях: полный обзор

Напомню, что считать уровнями: **уровень 1** — Entity; **уровень 2** — Physical и Abstract; **уровень 3** — Object, Process (Physical), Quantity, Attribute, SetOrClass, Proposition, Graph (Abstract); **уровень 4** — их подклассы (SelfConnectedObject, Collection, Region, Agent; IntentionalProcess, StateChange…; Number, PhysicalQuantity…). Ниже — все предикаты, которые работают на этих уровнях, сгруппированные по функциям. Формулы — в юникоде. Важно: некоторые предикаты «привязаны» к уровням не по месту определения, а по типу аргументов — например, `part` и `member` определены на уровне Object/Collection, а `causes` — на уровне Process.

## Группа 1. Ядро таксономии

### subclass (подкласс)

Отношение между классами: C — подкласс D, если всякий экземпляр C — экземпляр D. Это «родо-видовое» отношение, главный строительный материал иерархии. Тип: экземпляр PartialOrderingRelation (рефлексивно, антисимметрично, транзитивно), который сам — подкласс TransitiveRelation (https://www.sc.ehu.es/jiwlucap/IJSWIS12.pdf).

Типы аргументов: subclass(класс, класс). Ключевые аксиомы:

- транзитивность и рефлексивность: ∀X ( subclass(X, X) ); ∀X ∀Y ∀Z ( subclass(X, Y) ∧ subclass(Y, Z) → subclass(X, Z) )
- связь с instance: ∀X ∀Y ∀Z ( instance(X, Y) ∧ subclass(Y, Z) → instance(X, Z) )

Пример: subclass(Human, Primate), subclass(Primate, Mammal) → subclass(Human, Mammal) — «человек — примат, примат — млекопитающее, следовательно человек — млекопитающее».

### instance (экземпляр)

Отношение между индивидом и классом: x ∈ C. Типы аргументов: instance(объект, класс). Асимметрично, иррефлексивно: ничто не может быть экземпляром самого себя (в отличие от subclass!).

∀X ¬ instance(X, X)

Пример: instance(Socrates1, Human) — «Сократ₁ — экземпляр класса Человек».

**Критически важное различие между instance и subclass** — это различие уровней: instance связывает **индивид** (физическую вещь или конкретное значение) с **классом**; subclass связывает **два класса**. Смешение — главная ошибка новичков в SUMO.

### partition (разбиение)

Разбиение класса C на попарно непересекающиеся подклассы, покрывающие C целиком: каждый экземпляр C принадлежит ровно одному из подклассов. Отношение переменной арности (VariableArityRelation) (https://arxiv.org/pdf/2305.07903).

Определяется через два других предиката:

partition(C, C₁, …, Cₙ) ↔ exhaustiveDecomposition(C, C₁, …, Cₙ) ∧ disjointDecomposition(C, C₁, …, Cₙ)

Пример: partition(Entity, Physical, Abstract) — «всякая сущность — либо физическая, либо абстрактная, и ничто не является и тем и другим».

### exhaustiveDecomposition (исчерпывающее разложение)

Только покрытие, без непересекаемости: каждый экземпляр C — экземпляр хотя бы одного из подклассов. Пересечения допустимы.

∀Z ( instance(Z, C) → instance(Z, C₁) ∨ … ∨ instance(Z, Cₙ) )

Пример корректного использования: exhaustiveDecomposition(Animal, Vertebrate, Invertebrate)? Нет — это как раз partition. А вот exhaustiveDecomposition(BodyPart, Limb, Organ) допустимо: «ствол клетки» может быть и органом, и частью конечности одновременно. Точная документация из исходников: элементы разложения «не обязательно дизъюнктны» (https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif).

### disjointDecomposition (дизъюнктное разложение)

Только непересекаемость, без полноты покрытия: подклассы попарно не пересекаются, но между ними могут быть «щели». Аксиоматизируется через предикат inList: любые два разных элемента списка — disjoint (https://adimen.ehu.eus/~rigau/publications/TR007-WP06.pdf).

### disjoint (непересекаемость)

Два класса не имеют общих экземпляров:

disjoint(C₁, C₂) ↔ ∀Z ¬( instance(Z, C₁) ∧ instance(Z, C₂) )

Симметрично, иррефлексивно (https://www.academia.edu/61840904/Adimen_SUMO). Пример: disjoint(Object, Process), disjoint(Substance, CorpuscularObject) — уже знакомые нам прямые запрещения.

### disjointRelation (непересекаемость отношений)

Тот же запрет для отношений: две роли не могут выполняться на одной и той же паре аргументов. Например: disjointRelation(resource, result, instrument) — «одна и та же вещь не может быть одновременно ресурсом, результатом и инструментом одного процесса» (https://ontolog.cim3.net/file/resource/ontology/merge.txt).

### subrelation (подотношение)

Отношение между отношениями — аналог subclass: R — подотношение R′, если всякая пара, выполняющая R, выполняет R′.

subrelation(R, R′) ↔ ∀X ∀Y ( R(X, Y) → R′(X, Y) )

Пример: subrelation(instrument, patient) — «инструмент — это частный случай пациента» (https://ontolog.cim3.net/file/resource/ontology/merge.txt). Также subrelation(result, patient).

## Группа 2. Мереология и локализация (уровень Object)

### part (часть)

Базовое мереологическое отношение. part(A, B) — «A — часть объекта B». Свойства: экземпляр SpatialRelation и PartialOrderingRelation, рефлексивно (всякий объект — часть самого себя), транзитивно (https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif).

reflexive: ∀X part(X, X)
transitive: part(A, B) ∧ part(B, C) → part(A, C)

Пример: part(Столешница1, Стол1), part(Ножка1, Стол1) → part(Ножка1, Стол1) не требуется — это непосредственно; а вот part(Шуруп1, Ножка1) ∧ part(Ножка1, Стол1) → part(Шуруп1, Стол1) — по транзитивности.

### connected (связанность)

Два объекта связаны, если они перекрываются в пространстве (partially overlapping) или один — часть другого. Определяет SelfConnectedObject:

instance(O, SelfConnectedObject) ↔ ∀P₁ ∀P₂ ( part(P₁, O) ∧ part(P₂, O) → connected(P₁, P₂) )

### located (расположен)

located(X, Y) — объект X находится внутри/на поверхности региона Y. Работает на уровне Physical и Region; из него определяется всё семейство пространственных предикатов (partiallyLocated, meetsSpatially и т. д.). Пример: located(Байкал1, Сибирь).

### time (время)

time(X, T) — сущность X существует в момент/интервале T. Второй ключевой предикат вместе с located: вместе они реализуют аксиому Physical «есть координаты в пространстве-времени».

∀X ( instance(X, Physical) → ∃L ∃T ( located(X, L) ∧ time(X, T) ) )

## Группа 3. Членство и множества (уровни Collection, SetOrClass)

### member (член)

Связывает объект с **Collection** (коллекцией) — физической совокупностью. member(Рекс, Стая) — Рекс — член стаи. Обратите внимание: аргументы — индивид и физическая коллекция, а не класс.

### element (элемент)

Связывает сущность с **множеством** (Set) — абстрактной совокупностью. element(3, Множество{3,5}). Это чисто теоретико-множественное отношение из ветки Abstract.

### inList (в списке)

Связывает элемент с List (списком) — абстрактной последовательностью. Сам активно используется для аксиоматизации предикатов переменной арности (disjointDecomposition, exhaustiveDecomposition) (https://adimen.ehu.eus/~rigau/publications/TR007-WP06.pdf).

Сводка «тройной развилки»:

| Отношение | Второй аргумент | Ветка | Пример |
|---|---|---|---|
| instance | класс | Abstract | Рекс ∈ Dog |
| member | коллекция | Physical | Рекс — член стаи |
| element | множество | Abstract | 3 ∈ {3, 5} |
| inList | список | Abstract | «а» — в списке [«а», «б»] |

## Группа 4. Атрибуты (уровень Attribute)

### attribute (атрибут)

attribute(X, A) — «объект X обладает атрибутом A». Главный предикат, прикрепляющий качество к вещи: attribute(Лёд1, Solid), attribute(Сократ1, Male). Обратный предикат — property: property(A, X) ≡ attribute(X, A).

### subAttribute (податрибут)

Аналог subclass для атрибутов: если attribute(X, A) и subAttribute(A, B), то attribute(X, B). Транзитивно. Пример: subAttribute(ЕстественнаяБлондинистость, Блондинистость)? В SUMO классический пример — подвиды атрибутов цвета.

### mutualExclusion и exhaustiveAttribute

mutualExclusion(A₁, …, Aₙ) — атрибуты A₁…Aₙ не могут одновременно приписываться одному объекту (аналог disjoint для атрибутов); exhaustiveAttribute(C, A₁, …, Aₙ) — атрибуты исчерпывают класс C (аналог exhaustiveDecomposition). Пример: exhaustiveAttribute(Гендер? — нет; корректный пример из SUMO: exhaustiveAttribute(Damaging, DamagingSomething…) и mutualExclusion(On, Off) для состояний устройства — DeviceOn и DeviceOff несовместимы.

## Группа 5. Роли процессов CaseRole (уровень Process)

Ролевые отношения связывают процесс с участниками. Все они — подотношения одного корня, и вот их система (по исходникам Merge.kif: https://ontolog.cim3.net/file/resource/ontology/merge.txt; перечень ролей: https://sigmakee.sourceforge.net/api/com/articulate/sigma/nlg/CaseRole.html):

| Роль | Формула | Смысл | Домен 2-го аргумента | Пример |
|---|---|---|---|---|
| agent | agent(P, A) | активный определитель процесса | Agent | agent(Покупка1, Алиса) |
| patient | patient(P, X) | участник, который перемещается, изменяется, о котором говорят | Entity | patient(Покупка1, Хлеб1) |
| instrument | instrument(P, T) | инструмент, не изменяемый процессом | Object | instrument(Резка1, Нож1) |
| resource | resource(P, R) | ресурс: присутствует в начале, используется, изменяется | Object | resource(Горение1, Дрова1) |
| result | result(P, X) | продукт процесса | Entity | result(Строительство1, Дом1) |
| origin | origin(P, S) | откуда процесс начался | Object | origin(Полёт1, Вокзал1) |
| destination | destination(P, G) | цель/получатель процесса | Entity | destination(Доставка1, Кухня1) |
| experiencer | experiencer(P, A) | тот, кто переживает процесс (без каузальности) | Agent | experiencer(Восприятие1, Человек1) |
| direction | direction(P, D) | направление изменения | Attribute | direction(Изменение1, Увеличение) |

Ключевые внутренние связи (важно понимать, что роли не независимы):

- subrelation(instrument, patient), subrelation(resource, patient), subrelation(result, patient) — инструмент, ресурс и результат — частные случаи пациента;
- disjointRelation(resource, result, instrument) — одна вещь не может быть и ресурсом, и результатом, и инструментом одновременно;
- experiencer, в отличие от agent, **не влечёт каузального отношения** (https://ontolog.cim3.net/file/resource/ontology/merge.txt).

И важнейшая аксиома связности процесса:

∀P ( instance(P, Process) → ∃C agent(P, C) )

«У всякого процесса есть каузальный фактор» — даже у дождя:SUMO-рационализация в том, что у любого процесса есть активный определитель, пусть и не интенциональный.

Тонкости, которые полезно знать:

- **agent vs experiencer.** Алиса — agent чтения (она его осуществляет), но experiencer сновидения (она его переживает, но не «совершает» в каузальном смысле).
- **instrument vs resource.** Нож в резке не меняется (instrument); дрова в горении сгорают (resource) — «его внутренние или физические свойства изменяются процессом» (https://ontolog.cim3.net/file/resource/ontology/merge.txt).
- **origin vs destination.** Origin — то, откуда процесс начался (участник присутствовал в начале, но не обязан участвовать до конца); destination покрывает и «получателя», и «бенефициара»: destination(Дарение1, Джон) — «Том подарил книгу Джону».

## Группа 6. Время (уровень Process и TimePosition)

### time и holdsDuring

time(P, T) уже описан выше. holdsDuring(T, φ) — «пропозиция φ истинна на интервале T». Это мост между временем и всеми остальными предикатами — способ «привязать» любое утверждение к моменту:

holdsDuring(Начало(Когда(P)), attribute(X, Solid))

### before, during, earlier, temporallyBetween

Сравнительные временные отношения (экземпляры TemporalRelation): before(T₁, T₂), during(T₁, T₂) и т. д.

### Функции времени (не предикаты, но рядом)

WhenFn(P) — интервал существования процесса P; BeginFn(T), EndFn(T) — начало и конец интервала; YearFn, HourFn, DayFn — конструкторы моментов. В формулах они выступают как термы, но упомянуть их нужно для полноты: без них не записываются аксиомы вида «в начале процесса X было Solid».

## Группа 7. Пропозиции, модальности, способность, причинность

Эти предикаты работают на стыке уровней: их первые аргументы — сущности уровней 3–4 (агенты, процессы, пропозиции).

### knows, believes, desires

knows(A, φ) — «агент A знает пропозицию φ»; believes(A, φ) — «A считает φ истинной»; desires(A, φ) — «A хочет, чтобы φ стала истиной». Второй аргумент — экземпляр Proposition (ветка Abstract). knows сильнее believes: знает → считает.

### modalAttribute

modalAttribute(φ, M) — «высказывание φ имеет модальную силу M», где M — экземпляр ModalAttribute (Necessity, Possibility, Obligation, Permission…). Базовая аксиома: modalAttribute(φ, Necessity) → modalAttribute(φ, Possibility) — «необходимое возможно» (https://arxiv.org/pdf/2305.07903). Это модальная логика, «встроенная» в SUMO обычным предикатом — элегантное решение для языка первого порядка.

### represents

represents(X, φ) — «X репрезентирует/выражает пропозицию φ»: текст выражает теорему, карта — территорию, символ — значение. Связывает Physical (знак) с Abstract (содержание). Пример: represents(Учебник1, ТеоремаПифагора), represents(Карта1, ТульскаяОбласть).

### purpose / hasPurpose

purpose(X, φ) — «назначение объекта или процесса X — привести к положению дел φ». Целевая причина в SUMO-словаре. Пример: purpose(Термометр1, ∃M ( Измерение(M) ∧ patient(M, Температура) )).

### capability

capability(P, R, X) — «объект X способен играть роль R в процессе P». Красивая формула natural-language формата: «X is capable of doing P as a R» (https://github.com/ontologyportal/sumo/blob/master/english_format.kif). Пример из документации Sigma: capability(OrganTransplant, agent, Surgeon0) — «хирург способен провести трансплантацию» (https://gardenofminds.art/research/formal-ethics-ontology-worklog-1/). Это формализация потенциальности: capability — про возможный процесс, instance — про осуществлённый.

### causes

causes(A, B) — «процесс A причиняет процесс B». Требует оба аргумента — Process. Это строгое ограничение SUMO, которое мы подробно обсуждали на примере Декарта: каузальность в SUMO соединяет только физические процессы, нематериальное к материальному причинно не подключается.

## Группа 8. Метапредикаты структуры самой онтологии

Эти предикаты описывают не мир, а саму онтологию — её словарь и связи между терминами.

### domain и range

domain(R, n, C) — «n-й аргумент отношения R должен быть экземпляром класса C»; range(R, C) — «значение R — экземпляр C». Это типизация аргументов. Примеры прямо из исходников: domain(instance, 1, Object), domain(instance, 2, Class), domain(subclass, 1, Class), domain(subclass, 2, Class), domain(agent, 1, Process), domain(agent, 2, Agent) (https://adimen.ehu.eus/~rigau/publications/TR007-WP06.pdf). Аксиома типизации:

domain(R, n, C) ∧ R(X₁, …, Xₙ, …) → instance(Xₙ, C)

Есть и domainSubclass — когда n-й аргумент должен быть подклассом, а не экземпляром (например, для instance второй аргумент — класс, а не экземпляр класса).

### documentation

documentation(T, Язык, Строка) — человекочитаемое описание термина. Это то, откуда я брал цитаты вроде «Classes are disjoint only if they share no instances» (https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif). Формально не несёт логики, но — основной документирующий механизм онтологии.

### relatedInternalConcept

relatedInternalConcept(T₁, T₂) — «термины связаны, но связь не входит ни в одну из стандартных категорий (subclass, subrelation, instance…)». Пример: relatedInternalConcept(disjointDecomposition, exhaustiveDecomposition) — предикаты родственны, но один не сводится к другому (https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif).

## Сводная таблица: предикаты по уровням иерархии

| Предикат | Первый аргумент | Второй аргумент | Уровень привязки | Тип |
|---|---|---|---|---|
| subclass | класс | класс | весь иерархический скелет | таксономия |
| instance | индивид | класс | все уровни | таксономия |
| partition | класс | классы (n) | разбиения верхних уровней | таксономия |
| disjoint | класс | класс | запрещения между ветками | таксономия |
| exhaustiveDecomposition | класс | классы (n) | разбиения | таксономия |
| disjointDecomposition | класс | классы (n) | разбиения | таксономия |
| disjointRelation | отношение | отношения (n) | роли процессов | таксономия |
| subrelation | отношение | отношение | роли процессов, отношения | таксономия |
| subAttribute | атрибут | атрибут | Attribute | таксономия |
| part | объект | объект | Object | мереология |
| connected | объект | объект | SelfConnectedObject | мереология |
| located | физическое | регион | Physical / Region | пространственное |
| time | физическое | позиция во времени | Physical | временное |
| member | объект | коллекция | Collection | членство |
| element | сущность | множество | Set | членство |
| inList | элемент | список | List | членство |
| attribute | объект | атрибут | Attribute | свойства |
| property | атрибут | объект | Attribute | свойства (обратный) |
| mutualExclusion | атрибуты (n) | — | Attribute | свойства |
| exhaustiveAttribute | класс | атрибуты (n) | Attribute | свойства |
| agent | процесс | агент | Process | роль |
| patient | процесс | сущность | Process | роль |
| instrument | процесс | объект | Process | роль |
| resource | процесс | объект | Process | роль |
| result | процесс | сущность | Process | роль |
| origin | процесс | объект | Process | роль |
| destination | процесс | сущность | Process | роль |
| experiencer | процесс | агент | Process | роль |
| direction | процесс | атрибут | Process | роль |
| causes | процесс | процесс | Process | каузальность |
| time / holdsDuring | сущность / время | позиция / пропозиция | Physical + Prop | временное |
| knows, believes, desires | агент | пропозиция | Agent + Proposition | эпистемическое |
| modalAttribute | пропозиция | модальность | Proposition + Attribute | модальное |
| represents | знак | пропозиция | Physical + Abstract | семантическое |
| purpose | сущность/процесс | пропозиция | Object / Process | телеология |
| capability | процесс | роль, объект | Process | потенция |
| domain / range | отношение | позиция, класс | вся онтология | метапредикат |
| domainSubclass | отношение | позиция, класс | вся онтология | метапредикат |
| documentation | термин | язык, строка | вся онтология | метапредикат |
| relatedInternalConcept | термин | термин | вся онтология | метапредикат |

Замечание о функциях: в таблице нет WhenFn, BeginFn, EndFn, MeasureFn, ListFn — это **функции**, а не предикаты: они возвращают терм (интервал, число, список), а не истинностное значение. Их роль — строить термы для предикатов: holdsDuring(EndFn(WhenFn(P)), …) читается как «в конце интервала существования процесса P».

## Как всё это склеивает уровни — сквозной пример

Ситуация «Лёд тает на солнце» — с каждым предикатом на своём уровне:

```
instance(Лёд1, Ice)                    ; таксономия (уровни 4→3→2→1)
instance(Таяние1, Melting)             ; таксономия
subClass(Melting, StateChange)         ; таксономия
disjoint(Object, Process)              ; запрещение
part(Кристалл1, Лёд1)                  ; мереология
located(Лёд1, Подоконник1)             ; пространство
time(Таяние1, Полдень1)                ; время
agent(Таяние1, Солнце1)                ; роль (лучи — каузальный фактор)
patient(Таяние1, Лёд1)                 ; роль
holdsDuring(Начало(Когда(Таяние1)), attribute(Лёд1, Solid))
holdsDuring(Конец(Когда(Таяние1)),   attribute(Лёд1, Liquid))
```

Unicode-запись того же в логической нотации:

instance(Лёд1, Лёд) ∧ instance(Таяние1, Таяние) ∧ Таяние ⊆ ИзменениеСостояния ∧ Лёд1 ∩ Таяние1 = ∅ (как классы — пусто; как индивиды — Лёд1 ∈ Физическое, Таяние1 ∈ Процесс) ∧ located(Лёд1, Подоконник1) ∧ time(Таяние1, Полдень1) ∧ agent(Таяние1, Солнце1) ∧ patient(Таяние1, Лёд1) ∧ holdsDuring(Начало(W(Таяние1)), attribute(Лёд1, Твёрдое)) ∧ holdsDuring(Конец(W(Таяние1)), attribute(Лёд1, Жидкое))

Обратите внимание на трудоёмкость: даже простое бытовое событие задействует восемь групп предикатов. Это и есть плата за формальность: SUMO намеренно «многословна», чтобы машина могла выводить следствия.

## Источники (полные адреса)

- Merge.kif (главный файл, документация предикатов): https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif
- Зеркало Merge.kif (CaseRole с полными документациями): https://ontolog.cim3.net/file/resource/ontology/merge.txt
- Adimen-SUMO, IJSWIS (формализация partition, disjoint, subclass, instance): https://www.sc.ehu.es/jiwlucap/IJSWIS12.pdf
- Adimen-SUMO, техотчёт (domain, exhaustiveDecomposition, inList): https://adimen.ehu.eus/~rigau/publications/TR007-WP06.pdf
- Translating SUMO-K to Higher-Order Set Theory (partition как VariableArityRelation, modalAttribute): https://arxiv.org/pdf/2305.07903
- Adimen-SUMO (Academia, определение disjoint через instance): https://www.academia.edu/61840904/Adimen_SUMO
- Перечень CaseRole в API Sigma: https://sigmakee.sourceforge.net/api/com/articulate/sigma/nlg/CaseRole.html
- english_format.kif (формулы natural-language для предикатов): https://github.com/ontologyportal/sumo/blob/master/english_format.kif
- Пример работы capability и modalAttribute: https://gardenofminds.art/research/formal-ethics-ontology-worklog-1/
- Нилс, Пиз — «Towards a Standard Upper Ontology»: https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf
- Semantic Modeling with SUMO (роли и процессы): https://arxiv.org/pdf/2012.15835

Если хотите, следующим шагом могу показать это на практике: взять одну бытовую фразу (например, «Алиса купила хлеб в магазине yesterday») и разложить её в полную SUMO-запись со всеми ролями — это лучший способ увидеть, как предикаты работают вместе.

## 1.1

Проверю по исходникам точную аксиоматику Buying, чтобы разложение было корректным, а не «по памяти»:
# «Алиса купила хлеб вчера в магазине» — полная SUMO-запись в трёх нотациях

Сначала разберу, что именно в фразе нужно смоделировать, и зафиксирую данные (сегодня 2026-10-07, среда — значит, «вчера» = 2026-10-06, вторник; вы находитесь в Тульской области, посёлок Осиновая Гора — если магазин локальный, привязка к региону возможна, но оставлю его абстрактным).

## Шаг 0. Что вообще утверждает фраза

| Элемент фразы | SUMO-концепт | Роль |
|---|---|---|
| Алиса | Alice1 ∈ Human | agent покупки |
| купила | Buy1 ∈ Buying ⊆ FinancialTransaction | сам процесс |
| хлеб | Bread1 ∈ Bread | patient покупки |
| в магазине | Store1 ∈ RetailStore | located(Buy1, Store1) — где происходило |
| продавец | (неявно) Seller1 ∈ Agent | destination покупки |
| вчера | дата процесса = 6 октября 2026 | date(Buy1, …) |
| (неявно) деньги | Pay1 ∈ Payment, ~100 руб. | subProcess(Pay1, Buy1) |

Три ключевых решения, продиктованных SUMO:

1. **«Купила» — это не одно действие, а обмен.** В Merge.kif Buying и Selling — непересекающиеся подклассы FinancialTransaction, причём документация прямо говорит: «the buyer is the agent and the seller is the destination» (для Buying; для Selling наоборот) (https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif). Покупка одна и та же, но у неё два каузальных агента (Алиса и продавец) — покупка всегда двустороннее событие.
2. **Деньги — подпроцесс.** SUMO моделирует оплату как отдельный процесс Payment, входящий в покупку через subProcess; именно через него выражается обмен «хлеб ↔ деньги». Поскольку цена в фразе не названа, ставлю условную сумму — 100 рублей — и помечаю это.
3. **«В магазине» — located, а не destination.** Located отвечает на вопрос «где физически происходило», destination — «кто получил результат». Продавец — destination, магазин — located.

## Нотация 1. SUO-KIF (родная нотация SUMO)

**Факты (A-box):**

```
;; --- участники ---
(instance Alice1 Human)                        ; Алиса — человек (CognitiveAgent)
(instance Bread1  Bread)                       ; батон хлеба
(instance Store1  RetailStore)                 ; конкретный магазин
(instance Seller1 Organization)                ; продавец как организация
(instance Day20261006 Day)                     ; день «вчера», 6 октября 2026
(instance Money1  CurrencyMeasure)             ; сумма платежа
(instance BreadPiece1 Bread)                   ; купленный экземпляр хлеба

;; --- процесс покупки ---
(instance Buy1 Buying)
(agent       Buy1 Alice1)                      ; покупатель — активный определитель
(destination Buy1 Seller1)                     ; продавец — получатель (по документации Buying)
(patient     Buy1 BreadPiece1)                 ; что перешло к покупателю
(earlierPart Buy1 Part1)                       ; стадия: передача хлеба (инвентаризация)
(instance    Part1 ChangeOfPossession)
(origin      Part1 Seller1)                    ; откуда хлеб пришёл
(destination Part1 Alice1)                     ; куда пришёл

;; --- оплата как подпроцесс ---
(instance Pay1 Payment)
(subProcess  Pay1 Buy1)
(agent       Pay1 Alice1)                      ; платит покупатель
(destination Pay1 Seller1)                     ; получает продавец
(measure     Pay1 Money1)                      ; сколько заплатили
(equal       Money1 (MeasureFn 100 Ruble))     ; условные 100 рублей

;; --- время и место ---
(date  Buy1 Day20261006)                       ; subrelation(date, time): день события
(time  Buy1 Day20261006)                       ; более общее: существует в этот день
(before (EndFn (WhenFn Buy1)) (BeginFn (WhenFn Now1)))  ; покупка была до «сейчас»
(located Buy1 Store1)                          ; процесс локализован в магазине
(located Alice1 Store1)                        ; Алиса там же
(located Seller1 Store1)                       ; продавец там же
```

**Аксиомы Merge.kif, которые здесь работают (вывод, а не факты):**

```
;; иерархия и запрет пересечения (даны в онтологии):
(subclass Buying FinancialTransaction)
(subclass Selling FinancialTransaction)
(disjoint Buying Selling)

;; платёж неявно присутствует в любой покупке — из Merge.kif:
(=>
  (and
    (instance ?BUY Buying)
    (agent ?BUY ?BUYER)
    (patient ?BUY ?ITEM))
  (exists (?PAYMENT ?SELLER)
    (and
      (instance ?PAYMENT Payment)
      (subProcess ?PAYMENT ?BUY)
      (instance ?SELLER Agent)
      (agent ?PAYMENT ?BUYER)
      (destination ?PAYMENT ?SELLER))))

;; у всякого процесса есть каузальный фактор (дословно из Merge.kif):
(=>
  (instance ?PROCESS Process)
  (exists (?CAUSE)
    (agent ?PROCESS ?CAUSE)))

;; типизация ролей (дословно из Merge.kif):
(domain agent 1 Process)      (domain agent 2 Agent)
(domain patient 1 Process)    (domain patient 2 Entity)
(domain destination 1 Process) (domain destination 2 Entity)
(subrelation instrument patient) (subrelation result patient) (subrelation resource patient)
```

(Аксиому о Payment привожу по смыслу существующей аксиоматики Buying/Payment в Merge.kif; точная формулировка в файле чуть длиннее — https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif.)

## Нотация 2. Логика первого порядка (юникод)

Факты:

```
Alice1 ∈ Human
Bread1  ∈ Bread
Store1  ∈ RetailStore
Seller1 ∈ Organization
Buy1    ∈ Buying
Pay1    ∈ Payment

agent(Buy1, Alice1) ∧ destination(Buy1, Seller1) ∧ patient(Buy1, BreadPiece1)
agent(Pay1, Alice1) ∧ destination(Pay1, Seller1) ∧ measure(Pay1, Money1)
Money1 = 100 ₽ (как PhysicalQuantity: MeasureFn(100, Ruble))
subProcess(Pay1, Buy1)
origin(Part1, Seller1) ∧ destination(Part1, Alice1)
date(Buy1, Day20261006) ∧ located(Buy1, Store1)
located(Alice1, Store1) ∧ located(Seller1, Store1)
End(When(Buy1)) < Begin(When(Now1))
```

Аксиомы (то же в математической записи):

1. Покупка влечёт оплату продавцу:
∀B ∀X ∀I ( B ∈ Buying ∧ agent(B, X) ∧ patient(B, I) → ∃P ∃S ( P ∈ Payment ∧ subProcess(P, B) ∧ agent(P, X) ∧ destination(P, S) ) )

2. У всякого процесса есть каузальный фактор:
∀P ( P ∈ Process → ∃C agent(P, C) )

3. Транзитивность subProcess для ролей: если subProcess(Pay1, Buy1), то все роли Pay1 выполняются в интервале Buy1:
subProcess(P, Q) → ∀t ( time(P, t) → time(Q, t) )

4. Проверка непротиворечивости через типизацию: agent определён на Process × Agent — Alice1 обязана быть Agent:
Human ⊆ CognitiveAgent ⊆ SentientAgent ⊆ Agent ✓

5. Ключевой вывод о «двусторонности»: disjoint(Buying, Selling) ∧ оба ⊆ FinancialTransaction, значит для этой транзакции существует и процесс продажи продавца:
∃Sell1 ( Sell1 ∈ Selling ∧ agent(Sell1, Seller1) ∧ destination(Sell1, Alice1) ∧ patient(Sell1, Money1) )

Читается: «существует процесс продажи с продавцом в роли агента и Алисой в роли получателя, пациент которого — деньги». Одна бытовая фраза «Алиса купила хлеб» в SUMO автоматически разворачивается в два встречных процесса.

## Нотация 3. Turtle (RDF/OWL)

Сразу важная оговорка: Turtle — нотация **графа триплетов**, в ней нет импликаций и экзистенциальных переменных. Поэтому в Turtle переносится только **фактическая часть** (A-box); аксиомы остаются в SUMO-KIF и подхватываются рессонером как правила онтологии. Пространство имён SUMO в RDF-версии — http://www.ontologyportal.org/translations/SUMO.owl.txt# (так его цитируют сторонние онтологии, например Simple Event Model — https://semanticweb.cs.vu.nl/2009/11/sem/); в свежих выпусках используется также http://www.ontologyportal.org/SUMO.owl.

```turtle
@prefix sumo:  <http://www.ontologyportal.org/SUMO.owl#> .
@prefix ex:    <http://example.org/situation#> .
@prefix xsd:   <http://www.w3.org/2001/XMLSchema#> .
@prefix rdf:   <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .

# ---------- участники ----------
ex:Alice1   a sumo:Human .
ex:Seller1  a sumo:Organization .
ex:Store1   a sumo:RetailStore .
ex:BreadPiece1 a sumo:Bread .
ex:Money1   a sumo:CurrencyMeasure ;
            sumo:measureFn ex:Ruble ;
            sumo:magnitude "100"^^xsd:integer .   # упрощение: MeasureFn в RDF передаётся парой свойств
ex:Day20261006 a sumo:Day .

# ---------- процесс покупки ----------
ex:Buy1 a sumo:Buying ;
        sumo:agent       ex:Alice1 ;
        sumo:destination ex:Seller1 ;
        sumo:patient     ex:BreadPiece1 ;
        sumo:date        ex:Day20261006 ;
        sumo:located     ex:Store1 .

# ---------- передача хлеба как стадия ----------
ex:Part1 a sumo:ChangeOfPossession ;
         sumo:origin      ex:Seller1 ;
         sumo:destination ex:Alice1 ;
         sumo:patient     ex:BreadPiece1 .

# ---------- оплата как подпроцесс ----------
ex:Pay1 a sumo:Payment ;
        sumo:agent       ex:Alice1 ;
        sumo:destination ex:Seller1 ;
        sumo:measure     ex:Money1 ;
        sumo:subProcessOf ex:Buy1 .      # обратное направление к sumo:subProcess
```

Обратите внимание на два места, где Turtle «ломается» относительно SUO-KIF (и это показатель разницы нотаций, а не дефект языка):

- **`subProcess` направлен «вверх»**: в KIF `subProcess(Pay1, Buy1)` читается «Pay1 — подпроцесс Buy1», в Turtle естественней триплет `Pay1 subProcessOf Buy1`. Мелочь, но при машинной обработке направление предиката критично.
- **Дата и сумма**: в KIF это термы `(DayFn 6 (MonthFn October (YearFn 2026)))` и `(MeasureFn 100 Ruble)` — вложенные функции. В Turtle функция не выражается, поэтому дату и сумму приходится либо реифицировать отдельными индивидами (`ex:Day20261006`, `ex:Money1`), либо сводить к литералам с типом XSD. Именно поэтому факты — в Turtle, а аксиомы — в KIF.

## Что машина выведет из этих данных (и что нет)

**Выведется автоматически** (по аксиомам онтологии):
- Buy1 ∈ FinancialTransaction, Pay1 ∈ FinancialTransaction — по транзитивности subclass;
- существует Selling-процесс с тем же продавцом (двойственная сторона транзакции);
- Alice1 ∈ CognitiveAgent — следовательно, способна к интенциональным процессам (Buy1 ∈ IntentionalProcess по определению Buying);
- у Pay1 есть агент (уже указан), у каждого подпроцесса — свой каузальный фактор.

**Не выведется, и это честно показать:**
- **«Вчера» — индексальное слово.** В SUMO дата привязана к абсолютному дню (Day20261006), а не к «дню минус один от дня высказывания»; для настоящего индексального reasoning нужна дополнительная модель речевого акта, которой в ядре SUMO нет.
- **Цена хлеба** в фразе отсутствует — я поставил 100 ₽ условно; в реальном сценарии она пришла бы из чека.
- **«Магазин» как продавец vs как место** — я развёл их (Store1 для located, Seller1 для destination), потому что SUMO требует: located даёт физическую локализацию процесса, destination — получателя. В обычной речи «в магазине купила» склеивает оба смысла; SUMO заставляет их разделить — и это полезное насилие над интуицией.

Три нотации — три уровня выразительности: SUO-KIF несёт аксиомы и вывод, FOL-запись показывает логическую форму, Turtle даёт граф, пригодный для SPARQL и Linked Data. Полная картина требует всех трёх.

Хотите — добавлю четвёртую нотацию (N-Triples или JSON-LD) или разложу вторую фразу с более тонкой темпоралью, например «Алиса купила хлеб вчера, а съела сегодня» — там уже понадобятся before, holdsDuring и ChangeOfState.

## 1.2

# Сопоставление трёх нотаций: сводная таблица

## Таблица 1. Построчное соответствие фактов (A-box)

Каждая строка — один факт из записи «Алиса купила хлеб вчера»; три столбца — три нотации.

| # | Факт (по-русски) | SUO-KIF | Логика первого порядка | Turtle |
|---|---|---|---|---|
| 1 | Алиса — человек | `(instance Alice1 Human)` | Alice1 ∈ Human | `ex:Alice1 a sumo:Human .` |
| 2 | Продавец — организация | `(instance Seller1 Organization)` | Seller1 ∈ Organization | `ex:Seller1 a sumo:Organization .` |
| 3 | Магазин | `(instance Store1 RetailStore)` | Store1 ∈ RetailStore | `ex:Store1 a sumo:RetailStore .` |
| 4 | Хлеб (купленный кусок) | `(instance BreadPiece1 Bread)` | BreadPiece1 ∈ Bread | `ex:BreadPiece1 a sumo:Bread .` |
| 5 | «Вчера» как день | `(instance Day20261006 Day)` | Day20261006 ∈ Day | `ex:Day20261006 a sumo:Day .` |
| 6 | Покупка есть | `(instance Buy1 Buying)` | Buy1 ∈ Buying | `ex:Buy1 a sumo:Buying .` |
| 7 | Кто купил | `(agent Buy1 Alice1)` | agent(Buy1, Alice1) | `ex:Buy1 sumo:agent ex:Alice1 .` |
| 8 | Кому (продавцу) | `(destination Buy1 Seller1)` | destination(Buy1, Seller1) | `ex:Buy1 sumo:destination ex:Seller1 .` |
| 9 | Что куплено | `(patient Buy1 BreadPiece1)` | patient(Buy1, BreadPiece1) | `ex:Buy1 sumo:patient ex:BreadPiece1 .` |
| 10 | Когда | `(date Buy1 Day20261006)` | date(Buy1, Day20261006) | `ex:Buy1 sumo:date ex:Day20261006 .` |
| 11 | Где (физически) | `(located Buy1 Store1)` | located(Buy1, Store1) | `ex:Buy1 sumo:located ex:Store1 .` |
| 12 | Передача хлеба — стадия | `(instance Part1 ChangeOfPossession)` | Part1 ∈ ChangeOfPossession | `ex:Part1 a sumo:ChangeOfPossession .` |
| 13 | Откуда хлеб | `(origin Part1 Seller1)` | origin(Part1, Seller1) | `ex:Part1 sumo:origin ex:Seller1 .` |
| 14 | Куда хлеб | `(destination Part1 Alice1)` | destination(Part1, Alice1) | `ex:Part1 sumo:destination ex:Alice1 .` |
| 15 | Оплата — часть покупки | `(subProcess Pay1 Buy1)` | subProcess(Pay1, Buy1) | `ex:Pay1 sumo:subProcessOf ex:Buy1 .` |
| 16 | Оплата есть | `(instance Pay1 Payment)` | Pay1 ∈ Payment | `ex:Pay1 a sumo:Payment .` |
| 17 | Кто платил | `(agent Pay1 Alice1)` | agent(Pay1, Alice1) | `ex:Pay1 sumo:agent ex:Alice1 .` |
| 18 | Кому заплатили | `(destination Pay1 Seller1)` | destination(Pay1, Seller1) | `ex:Pay1 sumo:destination ex:Seller1 .` |
| 19 | Сколько заплатили | `(measure Pay1 Money1)` | measure(Pay1, Money1) | `ex:Pay1 sumo:measure ex:Money1 .` |
| 20 | Сумма = 100 ₽ | `(equal Money1 (MeasureFn 100 Ruble))` | Money1 = MeasureFn(100, Ruble) | `ex:Money1 sumo:magnitude "100"^^xsd:integer .` (единица — отдельным свойством) |
| 21 | До «сейчас» | `(before (EndFn (WhenFn Buy1)) (BeginFn (WhenFn Now1)))` | End(When(Buy1)) < Begin(When(Now1)) | не выражается напрямую (функции нет) — нужен интервал-индивид или литерал времени |

Обратите внимание на строку 15: единственное место, где направление предиката **разворачивается** между нотациями (`subProcess` → `subProcessOf`), — это не каприз Turtle, а следствие того, что в графе триплетов читается слева направо и «Pay1 — часть Buy1» естественнее записывать от Pay1.

## Таблица 2. Построчное соответствие аксиом (T-box)

Аксиомы — это правила онтологии; Turtle их **не выражает вообще** (в графе триплетов нет импликации и кванторов). Правило живёт в KIF/FOL и подключается к графу рессонером.

| # | Аксиома (смысл) | SUO-KIF | Логика первого порядка | Turtle |
|---|---|---|---|---|
| A1 | Иерархия покупки | `(subclass Buying FinancialTransaction)` | Buying ⊆ FinancialTransaction | не выражается в самой записи графа; как правило рессонера |
| A2 | Покупка ≠ продажа | `(disjoint Buying Selling)` | Buying ∩ Selling = ∅ | не выражается |
| A3 | Покупка влечёт платёж продавцу | `(=> (and (instance ?BUY Buying) (agent ?BUY ?B) (patient ?BUY ?I)) (exists (?P ?S) (and (instance ?P Payment) (subProcess ?P ?BUY) (agent ?P ?B) (destination ?P ?S))))` | ∀B ∀X ∀I ( B ∈ Buying ∧ agent(B, X) ∧ patient(B, I) → ∃P ∃S ( P ∈ Payment ∧ subProcess(P, B) ∧ agent(P, X) ∧ destination(P, S) ) ) | не выражается; именно эта аксиома «достраивает» строку 16 из строк 6–8 |
| A4 | У всякого процесса есть агент | `(=> (instance ?P Process) (exists (?C) (agent ?P ?C)))` | ∀P ( P ∈ Process → ∃C agent(P, C) ) | не выражается |
| A5 | Типизация роли agent | `(domain agent 1 Process) (domain agent 2 Agent)` | agent ⊆ Process × Agent | не выражается (в OWL — как rdfs:domain/owl:allValuesFrom на свойствах) |
| A6 | Транзитивность subclass | `(=> (subclass ?X ?Y) (subclass ?Y ?Z) (subclass ?X ?Z))` | X ⊆ Y ∧ Y ⊆ Z → X ⊆ Z | не выражается (в OWL — встроенная семантика rdfs:subClassOf) |

Часть аксиом SUMO при переводе в OWL превращается в **синтаксические конструкции OWL**: `subclass` → `rdfs:subClassOf` (транзитивность даёт сам стандарт RDF), `disjoint` → `owl:disjointWith`, типизация аргументов → `rdfs:domain` / `rdfs:range`. Но аксиомы с кванторами и экзистенциальными условиями (как A3, A4) в OWL DL не выражаются без оговорок — они остаются правилами рессонера. Именно поэтому официальная OWL-версия SUMO (http://www.ontologyportal.org/translations/SUMO.owl.txt) — это перевод словаря, а не полный перенос аксиоматики.

## Таблица 3. Сравнительная характеристика нотаций

| Критерий | SUO-KIF | Логика первого порядка (юникод) | Turtle (RDF) |
|---|---|---|---|
| Что это | родная машинная нотация SUMO, LISP-подобный синтаксис | математическая каноническая запись | линейная запись графа триплетов |
| Основной объект | формула (список) | формула | триплет: субъект — предикат — объект |
| Префиксная/инфиксная запись | префиксная: `(agent Buy1 Alice1)` | инфиксная: agent(Buy1, Alice1) | смешанная: `ex:Buy1 sumo:agent ex:Alice1` |
| Кванторы (∀, ∃) | есть: `(forall ...)`, `(exists ...)`; неявная универсальность | есть, явно | **нет** |
| Импликация (→) | есть: `(=> A B)` | есть: → | **нет** |
| Функции-термы (WhenFn, MeasureFn, BeginFn) | есть, вложенные списки | есть: Begin(When(B)) | **нет**; функции приходится реифицировать в индивиды или литералы (строка 20–21 таблицы 1) |
| Переменные | есть: `?P` | есть: B, X, P | **нет** (только именованные узлы и литералы) |
| Ссылки на переменные через средства самого языка | да | да | нет |
| Семантика | модельно-теоретическая, первого порядка | та же, каноническая | модельно-теоретическая RDF; расширяется OWL DL/RL |
| Что делает лучше всего | аксиомы и вывод; это исходник SUMO | показывать логическую форму человеку | обмен данными, SPARQL, Linked Data, интеграция со словарями W3C |
| Что не может | нативный RDF-приёмник не поймёт без трансляции | не исполняется машиной напрямую | не выражает правила и вывод сам по себе |
| Кто читает | SigmaKEE и рессонеры SUMO | человек, пруверы | любой RDF-стек (Jena, RDFLib, SPARQL-эндпоинты) |
| Роль в нашем примере | «источник истины»: аксиомы A1–A6 + факты 1–21 | «прозрачная копия» для проверки человеком | «снимок фактов» для графа данных |

## Ключевые структурные различия — итог в трёх пунктах

1. **Выразительность падает слева направо.** SUO-KIF ⊇ FOL ⊇ Turtle по выразимости: в KIF записано всё, в FOL — то же самое в другой записи, в Turtle — только фактология. Обратный перевод не эквивалентен: перенося граф Turtle в рессонер, вы теряете правила, если они не подключены отдельно.

2. **Уровни абстракции различаются назначением, а не «качеством».** KIF — язык определения самой онтологии (T-box + A-box в одном файле); FOL — язык проверки и объяснения её аксиом человеку и пруверу; Turtle — язык публикации данных, согласуемый с экосистемой W3C (SPARQL, OWL, Linked Data).

3. **Три «слома» при трансляции**, которые мы увидели на конкретных строках: реификация функций (MeasureFn, WhenFn → отдельные узлы или литералы, строки 20–21); разворот направления предиката (subProcess → subProcessOf, строка 15); вынос аксиом в рессонер (таблица 2). Все три — типовые, и любой переход «логика → граф данных» в реальных проектах проходит через них.

Схематически конвейер выглядит так:

```
естественный язык
   ↓ (сумоизация: выбор классов, ролей, времени)
SUO-KIF          ← истина онтологии: аксиомы + факты
   ↕ 1:1
FOL (юникод)     ← та же семантика, человеческая запись
   ↓ (трансляция: реификация функций, OWL-мэппинг словаря)
Turtle (RDF)     ← факты как граф; правила — в рессонере
   ↓
SPARQL / Linked Data
```

Если хотите, следующим шагом могу показать обратный конвейер: SPARQL-запрос к этому графу («все покупки Алисы за прошлый месяц с суммами и продавцами») — и как рессонер достраивает из аксиом то, чего в графе буквально нет (например, сам процесс Selling и факт, что хлеб получен именно в процессе оплаты).

## 2

# Простой пример: студенты, факультет и хобби в трёх нотациях

## Шаг 0. Сценарий и словарь

Факты, которые надо выразить:

- Алиса и Боб — студенты философского факультета;
- «студент» — подкласс чего-то более общего (придумываю: познавательного агента);
- хобби Алисы — фотография, хобби Боба — шахматы;
- плюс пара утверждений «для полноты»: Боб старше Алисы, оба ходят в свои клубы, доска — часть шахматного набора.

Разделение ролей терминов: из SUMO беру готовое (`CognitiveAgent`, `Human`, `EducationalOrganization`, `located`, `older`, `member`, `attribute`, `knows`), а доменные понятия (`Student`, `Chess`, хобби как атрибуты) объявляю сам — это честная модель того, как поверх верхней онтологии строится доменная. Ссылку на «похожие примеры» дам в конце.

---

## Группа А. Связи мира идей: класс ↔ класс (Abstract ↔ Abstract)

**Смысл:** «студенты — это разновидность познающих агентов»; «шахматы и го — непересекающиеся виды настольных игр»; «семестр бывает либо осенним, либо весенним».

### SUO-KIF

```
;; иерархия (наши доменные классы привязаны к SUMO)
(subclass Student CognitiveAgent)
(subclass PhilosophyStudent Student)

;; виды настольных игр: иерархия + запрещение пересечения
(subclass Chess BoardGame)
(subclass Go BoardGame)
(disjoint Chess Go)

;; атрибуты семестра исчерпывают множество вариантов
(exhaustiveAttribute Semester AutumnSemester SpringSemester)
```

### Логика первого порядка (юникод)

```
Student ⊆ CognitiveAgent
PhilosophyStudent ⊆ Student
Chess ⊆ BoardGame, Go ⊆ BoardGame
Chess ∩ Go = ∅
∀X ( attribute(X, s) ∧ s ∈ Semester → s ∈ {AutumnSemester, SpringSemester} )
```

### Turtle

```turtle
@prefix sumo: <http://www.ontologyportal.org/SUMO.owl#> .
@prefix ex:   <http://example.org/students#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix owl:  <http://www.w3.org/2002/07/owl#> .

ex:Student rdfs:subClassOf sumo:CognitiveAgent .
ex:PhilosophyStudent rdfs:subClassOf ex:Student .
ex:Chess rdfs:subClassOf ex:BoardGame ;
         owl:disjointWith ex:Go .
```

Заметка: `subclass` и `disjoint` из KIF здесь почти дословно ложатся на стандартные `rdfs:subClassOf` и `owl:disjointWith` — семантика этих конструкций встроена в OWL, поэтому в Turtle-группе А мы теряем меньше всего.

---

## Группа Б. Связи мира вещей: экземпляр ↔ экземпляр (Physical ↔ Physical)

**Смысл:** Алиса — член философского клуба, Боб — шахматного; Боб старше Алисы; Алиса сейчас в библиотеке; доска — часть шахматного набора.

### SUO-KIF

```
(instance Alice1 Human)
(instance Bob1 Human)
(instance PhilosophyClub1 GroupOfPeople)
(instance ChessClub1 GroupOfPeople)

(member Alice1 PhilosophyClub1)     ; клуб — физическая совокупность людей
(member Bob1 ChessClub1)
(older Bob1 Alice1)                 ; отношение «старше» — между людьми
(located Alice1 Library1)           ; физическое расположение
(part ChessBoard1 ChessSet1)        ; мереология: доска — часть набора
```

### Логика первого порядка (юникод)

```
Alice1 ∈ Human, Bob1 ∈ Human
PhilosophyClub1 ∈ GroupOfPeople, ChessClub1 ∈ GroupOfPeople

member(Alice1, PhilosophyClub1) ∧ member(Bob1, ChessClub1)
older(Bob1, Alice1)
located(Alice1, Library1)
part(ШахматнаяДоска1, ШахматныйНабор1)
```

### Turtle

```turtle
ex:Alice1 a sumo:Human ;
          sumo:member   ex:PhilosophyClub1 ;
          sumo:located  ex:Library1 .
ex:Bob1   a sumo:Human ;
          sumo:member   ex:ChessClub1 ;
          sumo:older    ex:Alice1 .
ex:ChessBoard1 sumo:part ex:ChessSet1 .
```

Заметка: обратите внимание на разницу предикатов в этой группе — `member` связывает человека с **физической совокупностью** (клуб), а не с классом; если бы мы написали `Alice1 a ex:PhilosophyClub`, это была бы ошибка уровня (клуб — не класс людей, а конкретная совокупность). О такой ловушке прямо предупреждает документация SUMO (https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif).

---

## Группа В. Мост между мирами: экземпляр ↔ класс (Physical ↔ Abstract)

**Смысл:** Алиса и Боб — экземпляры класса «студент»; Алиса «учится на факультете философии»; у Алисы атрибут «увлекается фотографией», у Боба — «увлекается шахматами»; Алиса знает, что Боб играет в шахматы.

### SUO-KIF

```
;; доменные классы и отношение «учится на» — наши добавления поверх SUMO
(instance Student Class)
(instance studiesAt BinaryPredicate)
(domain studiesAt 1 Student)
(domain studiesAt 2 EducationalOrganization)

;; экземпляры (Physical) ↔ классы (Abstract)
(instance Alice1 Student)
(instance Bob1 Student)
(studiesAt Alice1 PhilosophyFaculty1)
(studiesAt Bob1 PhilosophyFaculty1)
(instance PhilosophyFaculty1 EducationalOrganization)
(located PhilosophyFaculty1 TulaRegion)

;; атрибуты-хобби (Abstract) приписаны людям (Physical)
(instance HobbyPhotography RecreationalAttribute)
(instance HobbyChess RecreationalAttribute)
(attribute Alice1 HobbyPhotography)
(attribute Bob1 HobbyChess)

;; знание (Physical-агент ↔ Abstract-пропозиция)
(instance Prop1 Proposition)                    ; пропозиция «Боб играет в шахматы»
(knows Alice1 Prop1)
```

### Логика первого порядка (юникод)

```
Alice1 ∈ Student, Bob1 ∈ Student
studiesAt(Alice1, Филфак1) ∧ studiesAt(Bob1, Филфак1)
Филфак1 ∈ EducationalOrganization
located(Филфак1, ТульскаяОбласть)

attribute(Alice1, ХоббиФотография), attribute(Bob1, ХоббиШахматы)
ХоббиФотография ∈ RecreationalAttribute, ХоббиШахматы ∈ RecreationalAttribute

knows(Alice1, P1), P1 ∈ Proposition, P1 = «Боб играет в шахматы»
```

Плюс правило-аксиома (объявление «у всякого студента есть учебное заведение»):

```
(=> (instance ?X Student)
    (exists (?F)
      (and (instance ?F EducationalOrganization)
           (studiesAt ?X ?F))))
```

∀X ( X ∈ Student → ∃F ( F ∈ EducationalOrganization ∧ studiesAt(X, F) ) )

### Turtle

```turtle
# типизация доменного отношения — частичный аналог domain
ex:studiesAt rdfs:domain sumo:Student ;
             rdfs:range  sumo:EducationalOrganization .

# факты
ex:Alice1 a sumo:Human, ex:Student ;
          ex:studiesAt     ex:PhilosophyFaculty1 ;
          sumo:attribute   ex:HobbyPhotography ;
          sumo:knows       ex:Prop1 .
ex:Bob1   a sumo:Human, ex:Student ;
          ex:studiesAt     ex:PhilosophyFaculty1 ;
          sumo:attribute   ex:HobbyChess .
ex:PhilosophyFaculty1 a sumo:EducationalOrganization ;
          sumo:located     ex:TulaRegion .
ex:Prop1 a sumo:Proposition .   # «Боб играет в шахматы»
```

Заметка: правило с квантором (у всякого студента есть факультет) в Turtle не выражается — в OWL его можно приблизить ограничением `owl:hasValue`/`owl:someValuesFrom` через `rdfs:subClassOf`, но полная формулировка с существованием отдельной сущности остаётся в KIF/рессонере. Типизацию же (`domain`/`range`) Turtle выражает хорошо.

---

## Сводная таблица: три группы связей в трёх нотациях

| # | Тип связи | Утверждение | SUO-KIF | Логика первого порядка | Turtle |
|---|---|---|---|---|---|
| A1 | Abstract↔Abstract | студент — вид познающего агента | `(subclass Student CognitiveAgent)` | Student ⊆ CognitiveAgent | `ex:Student rdfs:subClassOf sumo:CognitiveAgent .` |
| A2 | Abstract↔Abstract | философский студент — вид студента | `(subclass PhilosophyStudent Student)` | PhilosophyStudent ⊆ Student | `rdfs:subClassOf` |
| A3 | Abstract↔Abstract | шахматы и го не пересекаются | `(disjoint Chess Go)` | Chess ∩ Go = ∅ | `owl:disjointWith` |
| A4 | Abstract↔Abstract | семестр — осенний или весенний | `(exhaustiveAttribute Semester AutumnSemester SpringSemester)` | s ∈ Semester → s ∈ {осенний, весенний} | не выражается (правило рессонера) |
| Б1 | Physical↔Physical | Алиса — член клуба | `(member Alice1 PhilosophyClub1)` | member(Alice1, Клуб1) | `sumo:member` |
| Б2 | Physical↔Physical | Боб старше Алисы | `(older Bob1 Alice1)` | older(Bob1, Alice1) | `sumo:older` |
| Б3 | Physical↔Physical | Алиса в библиотеке | `(located Alice1 Library1)` | located(Alice1, Библиотека1) | `sumo:located` |
| Б4 | Physical↔Physical | доска — часть набора | `(part ChessBoard1 ChessSet1)` | part(Доска1, Набор1) | `sumo:part` |
| В1 | Physical↔Abstract | Алиса — студент | `(instance Alice1 Student)` | Alice1 ∈ Student | `ex:Alice1 a ex:Student .` |
| В2 | Physical↔Abstract | учится на филфаке | `(studiesAt Alice1 PhilosophyFaculty1)` | studiesAt(Alice1, Филфак1) | `ex:studiesAt` |
| В3 | Physical↔Abstract | хобби Алисы — фотография | `(attribute Alice1 HobbyPhotography)` | attribute(Alice1, ХоббиФотография) | `sumo:attribute` |
| В4 | Physical↔Abstract | Алиса знает, что Боб играет в шахматы | `(knows Alice1 Prop1)` | knows(Alice1, P1) | `sumo:knows` |
| R1 | правило | у всякого студента есть учебное заведение | `(=> (instance ?X Student) (exists (?F) ...))` | ∀X ( X ∈ Student → ∃F studiesAt(X, F) ) | не выражается; в OWL — приближение через someValuesFrom |

## Как это читать «сверху вниз»

Одно утверждение «Алиса — студентка философского факультета» в SUMO-представлении держится на трёх группах сразу: иерархия классов (A1–A2) говорит, **что такое студент**; связь экземпляра с классом (В1) говорит, **кто есть Алиса**; доменное отношение (В2) привязывает её к организации (Physical), а правило R1 заставляет рессонера вывести, что такой факультет существует. Именно это и есть главное отличие онтологии от простой базы фактов: часть знаний не записана явно — она выводится.

## Похожие примеры (ссылки полными строками)

- **SUO-KIF, официальный спецификационный документ** — почти наш пример: «Person — subclass of Animal», «Kofi Annan is a human and occupies position...», правило про спящего человека: http://ontolog.cim3.net/file/resource/reference/SIGMA-kee/suo-kif.pdf
- **Merge.kif** — исходник, откуда взяты `member`, `older`, `located`, `part`, `attribute`, `knows`, и примечание «Human is a subclass of CognitiveAgent, but there may be CognitiveAgents which are not Humans»: https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif
- **W3C RDF 1.2 Primer** — буквально наш пример в Turtle: «Bob is a Person», «Bob is a friend of Alice», «Bob is interested in the Mona Lisa», плюс объяснение `a` = `rdf:type`: https://w3c.github.io/rdf-primer/spec/
- **Business Rules Community, «Ontological Modeling (Part 4)»** — один и тот же пример («Obama — politician; Politician — subclass of Person») во всех пяти синтаксисах RDF/OWL, включая Turtle: https://www.brcommunity.com/articles.php?id=b539
- **«Semantic Modeling with SUMO» (Pease)** — как устроены instance/subclass-аксиомы в SUO-KIF и как они соединяются с процессами: https://arxiv.org/pdf/2012.15835
- **«Formalizing Knowledge by Ontologies: OWL and KIF»** — параллельное изложение одного фрагмента онтологии (класс Beverage) в KIF и в OWL/RDF: https://www.researchgate.net/profile/Francesco-Ronzano/publication/265999675_Formalizing_Knowledge_by_Ontologies_OWL_and_KIF/links/558bd99008ae681f47160807/Formalizing-Knowledge-by-Ontologies-OWL-and-KIF.pdf
- **Учебное руководство по RDF/Turtle (OBO-туториал)** — таблицы → триплеты, префиксы, SPARQL поверх Turtle: https://github.com/jamesaoverton/obo-tutorial/blob/master/docs/processing-data.md
- **Обзорная статья с Turtle-примерами и RDF-графами (arXiv)**: https://arxiv.org/pdf/1911.09606
- **TinySUMO vs Merge.kif** — минимальный набор аксиом (включая `(subclass Human Physical)` из тестового набора и `(=> (subclass ?B ?A) (instance ?C ?A))`): https://github.com/ontologyportal/sumo/issues/216

Если хотите, следующим шагом могу написать SPARQL-запросы к этому графу: «найти всех студентов философского факультета с их хобби» — и показать, что рессонер добавит к ответу сверх явных триплетов.
