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
