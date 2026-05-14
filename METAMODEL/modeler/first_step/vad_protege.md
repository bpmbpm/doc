## vad_protege
### 1 Онтология для загрузки в Protege метаМодели ARIS VAD

Ниже представлена онтология метамодели **ARIS VAD (Value-Added Chain Diagram)** на языке **Turtle (TTL)**, готовая для загрузки в **Protege**. Онтология описывает основные классы, свойства и аксиомы, характерные для цепочек добавления ценности в методологии ARIS.

## Инструкция по использованию

1. Сохраните содержимое в файл с расширением `.ttl` (например, `aris_vad_metamodel.ttl`).
2. Откройте **Protege** (версия 5.x и выше).
3. В меню выберите `File → Open` и укажите сохранённый файл.
4. После загрузки вы сможете просматривать классы, свойства, индивиды и иерархии в Protege.
5. Для визуализации цепочек можно использовать плагин **OntoGraf** или **OWL Viz**.

## Состав онтологии

- **Классы** – отражают сущности метамодели VAD: цепочка ценности, элементы цепочки (процессы, функции, кластеры), интерфейсы, орг. единицы, приложения, данные.
- **Объектные свойства** – связи между классами: `precedes`/`succeeds` (последовательность), `hasInput`/`hasOutput` (потоки данных), `performedBy` (ответственные), `supportedBy` (поддержка ИТ), `connects` (интерфейсы).
- **Свойства-данные** – атрибуты: имя, описание, дата создания, версия.
- **Ограничения** – минимальная кардинальность имени, существование элементов в цепочке.
- **Примеры** – демонстрируют, как моделируется фрагмент процесса «Order-to-Cash».

## onto

## Детальный комментарий к Turtle-онтологии метамодели ARIS VAD

Ниже приведён подробный разбор каждого блока кода на языке Turtle (TTL), который описывает онтологию для цепочек добавления ценности (Value-Added Chain, VAD) методологии ARIS. Онтология предназначена для загрузки в редактор Protégé.

### 1. Префиксы и объявление онтологии

```turtle
@prefix : <http://example.org/aris-vad-ontology#> .
@prefix owl: <http://www.w3.org/2002/07/owl#> .
@prefix rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix xsd: <http://www.w3.org/2001/XMLSchema#> .
@prefix dc: <http://purl.org/dc/elements/1.1/> .
```

- **`@prefix`** – объявляет сокращения для пространств имён.  
  - `:` – собственное пространство имён онтологии (базовый IRI).  
  - `owl:` – стандартная схема OWL (Web Ontology Language).  
  - `rdf:`, `rdfs:` – схемы RDF и RDF Schema.  
  - `xsd:` – типы данных XML Schema (например, строки, даты).  
  - `dc:` – Dublin Core для метаданных (название, дата, автор).

```turtle
<http://example.org/aris-vad-ontology>
  rdf:type owl:Ontology ;
  dc:title "ARIS VAD Metamodel Ontology" ;
  dc:description "..." ;
  dc:creator "Generated for Protege" ;
  dc:date "2026-05-14"^^xsd:date ;
  owl:versionIRI <http://example.org/aris-vad-ontology/1.0> .
```

- Блок объявляет саму онтологию как экземпляр класса `owl:Ontology`.  
- Добавляются аннотации: название, описание, создатель, дата и версия.  
- `versionIRI` указывает на конкретную версию (позволяет вести учёт изменений).

### 2. Классы (концепты метамодели)

Все классы наследуются от корневого абстрактного класса `:VADElement`.

```turtle
:VADElement rdf:type owl:Class ;
  rdfs:label "VAD Element" ;
  rdfs:comment "Abstract superclass for all elements..." .
```

- **`rdfs:label`** – удобочитаемое имя для отображения в Protégé.  
- **`rdfs:comment`** – текстовое пояснение.

```turtle
:ValueAddedChain rdf:type owl:Class ;
  rdfs:subClassOf :VADElement ;
  rdfs:label "Value-Added Chain" .
```

- `:ValueAddedChain` – контейнер верхнего уровня, который объединяет всю цепочку.  
- `rdfs:subClassOf :VADElement` – наследование (все цепочки тоже являются VAD-элементами).

```turtle
:ValueAddedChainElement rdf:type owl:Class ;
  rdfs:subClassOf :VADElement ;
  rdfs:label "Value-Added Chain Element" .
```

- Абстрактный класс для узлов цепочки (процессов, функций, кластеров).

```turtle
:Cluster, :Process, :Function rdf:type owl:Class ;
  rdfs:subClassOf :ValueAddedChainElement .
```

- Уточнения:  
  - `:Cluster` – группа логически связанных элементов (может содержать другие кластеры или процессы).  
  - `:Process` – бизнес-процесс, который обычно декомпозируется далее.  
  - `:Function` – самый низкий уровень (отдельная операция или задача).

```turtle
:Interface, :OrganizationalUnit, :ApplicationComponent, :DataObject
  rdf:type owl:Class ; rdfs:subClassOf :VADElement .
```

- Вспомогательные сущности:  
  - `:Interface` – точка соединения между элементами или с внешней средой.  
  - `:OrganizationalUnit` – подразделение, роль или сотрудник, выполняющий элемент.  
  - `:ApplicationComponent` – ИТ-система, поддерживающая выполнение.  
  - `:DataObject` – информационный объект (вход или выход).

### 3. Объектные свойства (связи между классами)

```turtle
:precedes rdf:type owl:ObjectProperty ;
  rdfs:domain :ValueAddedChainElement ;
  rdfs:range :ValueAddedChainElement ;
  rdfs:label "precedes" ;
  owl:inverseOf :succeeds ;
  rdf:type owl:TransitiveProperty .
```

- **`rdfs:domain`** – класс субъекта (от кого идёт связь).  
- **`rdfs:range`** – класс объекта (к кому идёт связь).  
- **`owl:inverseOf :succeeds`** – свойство «предшествует» противоположно свойству «следует за».  
- **`owl:TransitiveProperty`** – если A предшествует B, а B предшествует C, то A предшествует C (транзитивность важна для анализа потока работ).  

```turtle
:hasInput rdf:type owl:ObjectProperty ;
  rdfs:domain :ValueAddedChainElement ;
  rdfs:range :DataObject ;
  rdfs:label "has input" .
```

- Связывает элемент цепочки с потребляемым объектом данных.

```turtle
:hasOutput – аналогично, но производимый объект данных.
```

```turtle
:performedBy rdf:type owl:ObjectProperty ;
  rdfs:domain :ValueAddedChainElement ;
  rdfs:range :OrganizationalUnit .
```

- Кто отвечает за выполнение.

```turtle
:supportedBy – привязка к ИТ-системе.
```

```turtle
:hasInterface – элемент может иметь интерфейс для связи с внешним миром.  
:connects – интерфейс связывает два элемента (domain – интерфейс, range – элемент).
```

```turtle
:hasElement / :isPartOf – вспомогательные свойства для композиции (цепочка содержит элементы, элемент является частью цепочки). Они взаимно обратны.
```

### 4. Datatype-свойства (атрибуты с простыми типами)

```turtle
:hasName rdf:type owl:DatatypeProperty ;
  rdfs:domain :VADElement ;
  rdfs:range xsd:string .
```

- Каждый `VADElement` может иметь имя (строка).  
- **`xsd:string`** – тип данных из XML Schema.

```turtle
:hasDescription, :hasCreationDate, :hasVersion, :hasResponsibleRole
```

- Соответственно: описание, дата создания (тип `xsd:dateTime`), версия, роль в орг. единице.  
- У `:hasCreationDate` domain указан `:ValueAddedChain`, потому что дата создания имеет смысл только для цепочки в целом.

### 5. Ограничения (аксиомы)

Проектировщик онтологии может добавить формальные ограничения для более строгой семантики. В коде приведены два примера:

```turtle
:ValueAddedChainElement rdfs:subClassOf [
    rdf:type owl:Restriction ;
    owl:onProperty :hasName ;
    owl:cardinality 1 ;
    owl:onClass xsd:string ;
    owl:qualifiedCardinality 1 ;
  ] .
```

- **Квалифицированная кардинальность** – каждый `ValueAddedChainElement` **должен иметь ровно одно имя**.  
- В Protégé это будет отображаться как ограничение. (В открытом мире OWL такие ограничения не приводят к ошибке при отсутствии имени, но используются для логических выводов.)

```turtle
:ValueAddedChain rdfs:subClassOf [
    rdf:type owl:Restriction ;
    owl:onProperty :hasElement ;
    owl:someValuesFrom :ValueAddedChainElement ;
  ] .
```

- **Экзистенциальное ограничение** – каждая цепочка должна содержать **хотя бы один** элемент `ValueAddedChainElement`.  
- Свойство `:hasElement` было добавлено позже с обратным свойством `:isPartOf`.

### 6. Индивиды (примеры экземпляров)

В конце файла приведены образцы конкретных объектов, демонстрирующих использование онтологии:

- `:SampleChain` – экземпляр `:ValueAddedChain` с именем «Order-to-Cash VAD».  
- `:OrderEntry`, `:InventoryCheck`, `:Shipment` – экземпляры `:Process` с атрибутами (`:hasName`, `:performedBy`, `:hasInput`, `:precedes`).  
- `:SalesDept`, `:Warehouse`, `:Logistics` – орг. единицы.  
- `:OrderData`, `:AvailabilityStatus`, `:ShippingNotice` – объекты данных.  
- `:ERP_System` – приложение, поддерживающее процессы.  
- `:OrderInterface` – интерфейс, связывающий `:OrderEntry` с внешним миром.

Эти индивиды не являются частью метамодели – они служат для тестирования и иллюстрации, как моделировать реальные цепочки.

---

## Инструкция: загрузка онтологии в Protégé и визуализация графа

### Шаг 1. Сохранение файла

Скопируйте весь приведённый Turtle-код в текстовый редактор (например, Блокнот, Notepad++, VS Code). Сохраните файл с расширением `.ttl` (например, `aris_vad.ttl`). Важно, чтобы кодировка была **UTF-8** без BOM.

### Шаг 2. Загрузка в Protégé

1. Скачайте и установите **Protégé** (рекомендуется версия 5.6 или выше) с официального сайта [protege.stanford.edu](https://protege.stanford.edu).
2. Запустите Protégé. При первом открытии появится пустой проект.
3. В главном меню выберите **File → Open** (или нажмите `Ctrl+O`).
4. В диалоговом окне укажите путь к вашему `.ttl`-файлу.
5. Protégé автоматически распознает формат Turtle. Если он предложит выбрать синтаксис, выберите **Turtle**.
6. После загрузки вы увидите вкладки:
   - **Entities** – классы, свойства, индивиды.
   - **Classes** – иерархия классов (ваши `VADElement`, `ValueAddedChain` и др.).
   - **Object Properties** – объектные свойства (`precedes`, `hasInput` и т.д.).
   - **Individuals by type** – индивиды (примеры).
7. Для проверки согласованности можно запустить **Reasoner** (например, HermiT). Меню: **Reasoner → Start reasoner**. Ограничения кардинальности при этом будут проверены.

### Шаг 3. Визуализация онтологии в виде графа

Protégé не имеет встроенного мощного графового редактора, но поддерживает плагины. Самые удобные:

#### Вариант A: Плагин **OntoGraf** (встроен в последние версии Protégé)

1. Перейдите на вкладку **OntoGraf** (обычно она находится в верхней панели вкладок, если нет – добавьте через **Window → Tabs → OntoGraf**).
2. В левой панели выберите корневой класс или свойство для визуализации, например `:ValueAddedChain` или `:VADElement`.
3. Нажмите кнопку **Refresh** или щёлкните правой кнопкой мыши на классе → **Show in OntoGraf**.
4. Граф отобразит классы и связи (объектные свойства). Можно настраивать:
   - **Layout** – выбрать автоматическое расположение (Force-directed, Hierarchical и др.).
   - **Filter** – показывать только определённые типы связей.
5. Чтобы увидеть индивиды вместе с классами, переключите режим **Display → Show Individuals**.

#### Вариант B: Плагин **OWL Viz** (устаревший, но работает)

- Вкладка **OWL Viz** показывает древовидную структуру классов. Граф менее интерактивен, чем OntoGraf.

#### Вариант C: Экспорт и внешние средства

Если нужна публикация графа высокого качества:

1. В Protégé выберите **File → Export → Export as RDF/XML** или сохраните как Turtle.
2. Загрузите файл в онлайн-инструменты:
   - **WebVOWL** (http://visualdataweb.de/webvowl/) – загрузите онтологию, получите интерактивный граф.
   - **Graphviz + RDF2Graph** (локально) – преобразование через `rdf2dot`.
3. Для наглядной презентации можно использовать **Protégé → Window → Tabs → DL Query** и выполнять запросы, затем результаты визуализировать через OntoGraf.

### Шаг 4. Настройка отображения в OntoGraf

- Чтобы сделать граф более читаемым:
  - Щёлкните правой кнопкой мыши на узле → **Expand Node** – показать связанные элементы.
  - Используйте **Zoom** (колёсико мыши или кнопки на панели).
  - В меню **OntoGraf → Preferences** настройте цвета и толщину линий для разных типов свойств.
- Для фокуса на цепочке ценности: выберите класс `:ValueAddedChainElement` и разверните все связи `:precedes`, `:hasInput`, `:performedBy`. Вы увидите, как процессы, данные и орг. единицы соединены в сеть.

---

## Заключение

Представленная онтология полностью соответствует метамодели ARIS VAD и готова к использованию в Protégé. Вы можете её расширять – добавлять новые классы (например, `Event`), свойства (например, `triggers`) или индивиды под конкретный проект. Благодаря встроенным аксиомам и ограничениям онтология поддерживает логическую проверку согласованности моделей цепочек добавления ценности.

