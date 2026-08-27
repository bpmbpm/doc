## 1 R2RML

Чтобы связать классическую реляционную таблицу банковских проводок с семантическими классами онтологии (например, FIBO), используется стандарт R2RML (RDB to RDF Mapping Language).
Ниже представлен разбор практического примера, где строки из таблицы базы данных на лету превращаются в RDF-триплеты.

------------------------------
## 1. Исходные данные: Таблица в СУБД (PostgreSQL / Oracle)
Допустим, в нашей реляционной базе данных есть таблица проводок с именем bank_transactions:

| tx_id | debit_account | credit_account | amount | currency |
|---|---|---|---|---|
| 10050 | 40702810... | 40817810... | 15000.00 | RUB |

------------------------------
## 2. Цель: Что мы хотим получить в Triple Store (Графе)
Мы хотим, чтобы эта строка виртуально представлялась в виде следующих RDF-триплетов (в синтаксисе Turtle):
```
@prefix ex: <http://example.com> .
@prefix fibo-fbc: <https://edmcouncil.org> .
@prefix xsd: <http://w3.org> .

# Проводка как отдельный объект (субъект)
ex:tx_10050 a fibo-fbc:AccountingEntry ;
    ex:hasDebitAccount  ex:acc_40702810... ;
    ex:hasCreditAccount ex:acc_40817810... ;
    ex:bookingAmount    "15000.00"^^xsd:decimal ;
    ex:currencyCode     "RUB" .
```

------------------------------
## 3. Сам R2RML-маппинг (В формате Turtle)
Движок OBDA (например, Ontop или Stardog) считывает этот файл маппинга, чтобы понять, как транслировать SQL-таблицу в граф. Маппинг состоит из логических блоков (TriplesMap).
```
@prefix rr: <http://w3.org> .
@prefix ex: <http://example.com> .
@prefix fibo-fbc: <https://edmcouncil.org> .
@prefix xsd: <http://w3.org> .

ex:TransactionMapping
    a rr:TriplesMap ;

    # 1. ИСТОЧНИК ДАННЫХ: Указываем таблицу или SQL-запрос
    rr:logicalTable [ 
        rr:tableName "bank_transactions" 
    ] ;

    # 2. СУБЪЕКТ (Генерация URI для самой проводки и назначение её класса)
    rr:subjectMap [
        rr:template "http://example.comtx_{tx_id}" ;
        rr:class fibo-fbc:AccountingEntry ;
    ] ;

    # 3. ПРЕДИКАТ И ОБЪЕКТ: Связь со счетом Дебета (Объект — тоже URI)
    rr:predicateObjectMap [
        rr:predicate ex:hasDebitAccount ;
        rr:objectMap [ 
            rr:template "http://example.comacc_{debit_account}" 
        ] ;
    ] ;

    # 4. ПРЕДИКАТ И ОБЪЕКТ: Связь со счетом Кредита (Объект — тоже URI)
    rr:predicateObjectMap [
        rr:predicate ex:hasCreditAccount ;
        rr:objectMap [ 
            rr:template "http://example.comacc_{credit_account}" 
        ] ;
    ] ;

    # 5. ПРЕДИКАТ И ОБЪЕКТ: Сумма (Объект — литерал с типом данных decimal)
    rr:predicateObjectMap [
        rr:predicate ex:bookingAmount ;
        rr:objectMap [ 
            rr:column "amount" ; 
            rr:datatype xsd:decimal 
        ] ;
    ] ;

    # 6. ПРЕДИКАТ И ОБЪЕКТ: Валюта (Объект — обычная строка/литерал)
    rr:predicateObjectMap [
        rr:predicate ex:currencyCode ;
        rr:objectMap [ 
            rr:column "currency" 
        ] ;
    ] .
```

------------------------------
## 🕵️‍♂️ Пошаговое пояснение, как это работает

   1. rr:logicalTable (Откуда берем): Говорит движку заглянуть в таблицу "bank_transactions". Если данные нужно предварительно отфильтровать или трансформировать, вместо rr:tableName можно написать сырой SQL-запрос, например: rr:sqlQuery "SELECT * FROM bank_transactions WHERE amount > 0".
   2. rr:subjectMap (Кто главный): Создает уникальный идентификатор (URI) для каждой строки. Выражение tx_{tx_id} означает, что движок возьмет значение из колонки tx_id (например, 10050) и подставит его в шаблон. В итоге получится субъект ex:tx_10050. Строка rr:class автоматически вешает на этот субъект ярлык (тип) fibo-fbc:AccountingEntry.
   3. rr:predicateObjectMap (Создание связей): Это пары «Свойство — Значение».
   * В блоках для дебета и кредита (пункты 3 и 4) значениями (objectMap) становятся не просто текстовые номера счетов, а новые URI вида ex:acc_40702810.... Это критически важно: так мы связываем объект проводки с объектами банковских счетов, у которых в графе есть своя независимая жизнь (свои балансы, владельцы и свойства).
      * В блоках для суммы и валюты (пункты 5 и 6) используются rr:column. Это означает, что в граф пойдут чистые текстовые или числовые значения (литералы) напрямую из ячеек таблицы. Для суммы мы явно принудительно задаем тип данных xsd:decimal, чтобы SPARQL-движок мог проводить математическое суммирование.
   
## 🚀 Что происходит в момент SPARQL-запроса?
Когда аналитик пишет SPARQL-запрос к семантическому слою:

SELECT ?tx WHERE { ?tx a fibo-fbc:AccountingEntry ; ex:currencyCode "RUB" . }

Движок OBDA не сканирует граф (ведь физически триплетов в Triple Store нет). Он смотрит на маппинг ex:TransactionMapping, видит соответствие класса AccountingEntry таблице bank_transactions, а свойства currencyCode — колонке currency.
Движок моментально транслирует этот SPARQL в нативный и максимально быстрый SQL-запрос к реляционной базе:

SELECT tx_id FROM bank_transactions WHERE currency = 'RUB';

И возвращает пользователю результат в семантическом формате.
------------------------------
## 📌 Ресурсы для работы с R2RML

* [Официальный стандарт W3C R2RML](https://www.w3.org/TR/r2rml/) — полная спецификация языка маппинга со всеми возможными конструкциями.
* Документация Ontop по маппингам — руководство по написанию маппингов для одного из лучших OBDA-движков (поддерживает как стандартный R2RML, так и его упрощенную native-версию).

Если хотите, мы можем разобрать более сложный случай: например, как сделать зависимый маппинг (Join), когда данные о проводках лежат в одной таблице, а данные о владельцах счетов — в другой, и их нужно связать в графе. Напишите, актуален ли для вас сценарий с объединением таблиц?

## 2

Тема семантического моделирования банковского учета и виртуализации данных (OBDA) находится на стыке академической науки и enterprise-архитектуры. Ниже собраны ключевые материалы и научно-практические статьи, которые описывают:

   1. Банковские онтологии (промышленные стандарты).
   2. Семантические классы для банковских выписок, инвойсов и проводок.
   3. Применение R2RML/OBDA для связывания реляционных банковских систем с графом.

------------------------------
## 📚 1. Статьи о банковских онтологиях и семантических классах

* [«A Semantic Model for Enhancing Data-Driven Open Banking Services»](https://www.mdpi.com/2076-3417/13/3/1447) (MDPI, 2023 г.)
* О чем: В статье представлена разработанная авторами Open Banking Ontology (OBO), созданная на языке OWL 2. Модель разработана специально для семантической разметки банковских выписок (Bank Statements), проводок и управления счетами в контексте европейской директивы PSD2.
   * Классы: Подробно описываются семантические классы, такие как Statement, AccountObj, Bank, а также дата-свойства для сумм (itemAmount), дат (itemIssueDate) и назначений платежа (statementConcept). Авторы показывают, как этот граф используется для автоматической сверки выписок с инвойсами (актами). [1, 2] 
* [«The OntoREA Accounting Model: Ontology-based Modeling of the Accounting Domain»](https://www.researchgate.net/publication/318824704_The_OntoREA_Accounting_Model_Ontology-based_Modeling_of_the_Accounting_Domain) (ResearchGate)
* О чем: Фундаментальная работа по моделированию классического бухгалтерского учета методом двойной записи на базе семантических веб-технологий. Она базируется на известной экономической онтологии REA (Resources, Events, Agents).
   * Классы: Статья объясняет, как перевести бухгалтерские термины в OWL, детально описывая балансовые счета как финансовые ресурсы (financial asset, liabilities, equity), а сами проводки — как события увеличения/уменьшения средств, жестко связанные с нотациями Дебета (debit) и Кредита (credit). [3, 4] 
* [«Clients and Accounts Ontology»](https://spec.edmcouncil.org/fibo/ontology/FBC/ProductsAndServices/ClientsAndAccounts/) (Официальная спецификация EDM Council)
* О чем: Это техническая документация конкретного модуля онтологии FIBO (Financial Business Concepts).
   * Классы: Спецификация напрямую описывает семантическую структуру для записей транзакций (transaction records), выписок по счетам (account statement) и банковских планов счетов (chart of accounts). Это готовый промышленный стандарт классов, от которого следует отталкиваться при проектировании. [5] 

------------------------------
## 🛠️ 2. Статьи о применении R2RML и OBDA в банкинге

* [«Part 3: Agentic AI in Open Banking — Ontologies-based Graph»](https://www.linkedin.com/pulse/part-3-agentic-ai-open-banking-ontologies-based-graph-venkatesh-sh5lc) (LinkedIn, 2026 г.)
* О чем: Практическая статья, рассматривающая конструирование графов знаний в розничном банкинге с помощью R2RML.
   * R2RML: Автор разбирает живой юзкейс: когда СУБД банка хранит терабайты данных о клиентах, транзакциях и соглашениях в реляционных таблицах, R2RML выступает декларативным языком маппинга для создания виртуального RDF-графа (например, трансформируя поля CUSTOMER_ID и ACCOUNT_ID в семантическую связь Customer -> owns -> Account). Это позволяет переиспользовать существующие данные банка без их физического перемещения и редизайна ИТ-ландшафта. [6] 
* [«OBDA: Query Rewriting or Materialization? In Practice, Both!»](https://www.researchgate.net/publication/291223515_OBDA_Query_Rewriting_or_Materialization_In_Practice_Both) (ResearchGate)
* О чем: Практическое исследование на примере системы UltrawrapOBDA. Описывается, как транслировать семантические связи (ontological entailments) напрямую в SQL-представления (SQL Views). Статья полезна для понимания того, как движки OBDA оптимизируют тяжелые SPARQL-запросы к транзакционным БД, используя нативную рекурсию SQL. [7] 
* [«OBDA explained: what it is, what it runs on»](https://www.reddit.com/r/OntologyEngineering/comments/1sex5bi/obda_explained_what_it_is_what_it_runs_on_how_it/) (Reddit, r/OntologyEngineering, 2026 г.)
* О чем: Развернутый архитектурный разбор применения паттерна OBDA в современном Enterprise-секторе. Описывается профиль OWL 2 QL (разработанный специально для гарантии быстрого переписывания запросов SPARQL ➡️ SQL). Статья детально объясняет ограничения подхода (ориентация только на чтение/READ) и то, как крупные организации используют R2RML-маппинги в качестве семантического слоя для аналитики. [8] 

------------------------------
## 🔗 Использованные источники и гиперссылки:

   1. MDPI: A Semantic Model for Enhancing Data-Driven Open Banking Services — Научная статья с описанием онтологии OBO для проводок и выписок.
   2. ResearchGate: The OntoREA Accounting Model — Моделирование бухучета, дебета и кредита в OWL.
   3. EDM Council: Clients and Accounts Ontology (FIBO) — Промышленная спецификация классов транзакций от EDMC.
   4. LinkedIn: Agentic AI in Open Banking — Ontologies-based Graph — Статья о применении R2RML-маппингов для банковских БД.
   5. ResearchGate: OBDA: Query Rewriting or Materialization? — Техническая статья об оптимизации SQL-маппингов при OBDA-доступе.
   6. Reddit: OBDA explained: what it is, what it runs on — Архитектурный разбор работы виртуальных графов и R2RML на практике. [2, 4, 5, 6, 7, 8] 

Если вы хотите перейти к реализации, скажите:

* Нужно ли помочь написать схему классов в формате Turtle для вашей кастомной банковской онтологии?
* Какую конкретную форму отчетности (или аналитическую задачу) вы хотите поверх этого графа реализовать?


[1] [https://www.researchgate.net](https://www.researchgate.net/publication/367344257_A_Semantic_Model_for_Enhancing_Data-Driven_Open_Banking_Services)
[2] [https://www.mdpi.com](https://www.mdpi.com/2076-3417/13/3/1447)
[3] [https://ceur-ws.org](https://ceur-ws.org/Vol-1612/paper6.pdf)
[4] [https://www.researchgate.net](https://www.researchgate.net/publication/318824704_The_OntoREA_Accounting_Model_Ontology-based_Modeling_of_the_Accounting_Domain)
[5] [https://spec.edmcouncil.org](https://spec.edmcouncil.org/fibo/ontology/FBC/ProductsAndServices/ClientsAndAccounts/)
[6] [https://www.linkedin.com](https://www.linkedin.com/pulse/part-3-agentic-ai-open-banking-ontologies-based-graph-venkatesh-sh5lc)
[7] [https://www.researchgate.net](https://www.researchgate.net/publication/291223515_OBDA_Query_Rewriting_or_Materialization_In_Practice_Both)
[8] [https://www.reddit.com](https://www.reddit.com/r/OntologyEngineering/comments/1sex5bi/obda_explained_what_it_is_what_it_runs_on_how_it/)


## 2

Для типового российского универсального банка онтология должна учитывать требования Положений Банка России (в частности, № 809-П «О Плане счетов бухгалтерского учета...» [1]), специфику розничных и корпоративных продуктов, а также логику двойной записи (Дебет/Кредит).
Ниже представлена готовая схема базовых классов и свойств кастомной онтологии RBO (Russian Banking Ontology) в формате Turtle.
## 🛠️ Схема онтологии в формате Turtle (rbo.ttl)

```
@prefix rdfs: <http://w3.org> .
@prefix owl:  <http://w3.org> .
@prefix xsd:  <http://w3.org> .
@prefix rbo:  <http://example.com> .

<http://example.com> a owl:Ontology ;
    rdfs:label "Russian Banking Ontology (RBO)" ;
    rdfs:comment "Базовая онтология для автоматизации учета, кредитования и отчетности в российском банке." .

# =================================================================
# 1. КЛАССЫ (Classes)
# =================================================================

### Базовые сущности
rbo:LegalEntity a owl:Class ;
    rdfs:label "Юридическое лицо" .

rbo:Individual a owl:Class ;
    rdfs:label "Физическое лицо" .

### Банковские счета
rbo:BankAccount a owl:Class ;
    rdfs:label "Банковский счет (20 знаков)" .

rbo:BalanceAccount2ndOrder a owl:Class ;
    rdfs:label "Балансовый счет 2-го порядка (5 знаков)" ;
    rdfs:comment "Например: 40702, 40817, 45505" .

### Проводки и транзакции
rbo:AccountingEntry a owl:Class ;
    rdfs:label "Бухгалтерская проводка" ;
    rdfs:comment "Единичный факт движения средств по правилу двойной записи" .

rbo:AccountBalance a owl:Class ;
    rdfs:label "Остаток на счете" .

### Продуктовый слой
rbo:BankingProduct a owl:Class ;
    rdfs:label "Банковский продукт" .

rbo:CreditContract a owl:Class ;
    rdfs:subClassOf rbo:BankingProduct ;
    rdfs:label "Кредитный договор" .

rbo:DepositContract a owl:Class ;
    rdfs:subClassOf rbo:BankingProduct ;
    rdfs:label "Депозитный договор" .


# =================================================================
# 2. СВОЙСТВА ОБЪЕКТОВ (Object Properties — связи между узлами)
# =================================================================

rbo:hasHolder a owl:ObjectProperty ;
    rdfs:domain rbo:BankAccount ;
    rdfs:range [ a owl:Class ; owl:unionOf (rbo:LegalEntity rbo:Individual) ] ;
    rdfs:label "Владелец счета" .

rbo:belongsTo2ndOrder a owl:ObjectProperty ;
    rdfs:domain rbo:BankAccount ;
    rdfs:range rbo:BalanceAccount2ndOrder ;
    rdfs:label "Относится к балансовому счету 2-го порядка" .

rbo:hasDebitAccount a owl:ObjectProperty ;
    rdfs:domain rbo:AccountingEntry ;
    rdfs:range rbo:BankAccount ;
    rdfs:label "Счет Дебета" .

rbo:hasCreditAccount a owl:ObjectProperty ;
    rdfs:domain rbo:AccountingEntry ;
    rdfs:range rbo:BankAccount ;
    rdfs:label "Счет Кредита" .

rbo:appliesToAccount a owl:ObjectProperty ;
    rdfs:domain rbo:AccountBalance ;
    rdfs:range rbo:BankAccount ;
    rdfs:label "Остаток на счете" .

rbo:linkedToProduct a owl:ObjectProperty ;
    rdfs:domain rbo:BankAccount ;
    rdfs:range rbo:BankingProduct ;
    rdfs:label "Связан с продуктом / договором" .


# =================================================================
# 3. СВОЙСТВА ДАННЫХ (Data Properties — атрибуты, литералы)
# =================================================================

### Реквизиты
rbo:accountNumber a owl:DatatypeProperty ;
    rdfs:domain rbo:BankAccount ;
    rdfs:range xsd:string ;
    rdfs:label "20-значный номер счета" .

rbo:inn a owl:DatatypeProperty ;
    rdfs:domain [ a owl:Class ; owl:unionOf (rbo:LegalEntity rbo:Individual) ] ;
    rdfs:range xsd:string ;
    rdfs:label "ИНН клиента" .

### Финансовые метрики
rbo:amountValue a owl:DatatypeProperty ;
    rdfs:domain [ a owl:Class ; owl:unionOf (rbo:AccountingEntry rbo:AccountBalance) ] ;
    rdfs:range xsd:decimal ;
    rdfs:label "Сумма в единицах валюты" .

rbo:currencyISO a owl:DatatypeProperty ;
    rdfs:domain [ a owl:Class ; owl:unionOf (rbo:AccountingEntry rbo:BankAccount) ] ;
    rdfs:range xsd:string ;
    rdfs:label "Буквенный код валюты (например, RUB)" .

### Временные метрики
rbo:bookingDate a owl:DatatypeProperty ;
    rdfs:domain rbo:AccountingEntry ;
    rdfs:range xsd:dateTime ;
    rdfs:label "Дата и время проведения" .

rbo:balanceDate a owl:DatatypeProperty ;
    rdfs:domain rbo:AccountBalance ;
    rdfs:range xsd:date ;
    rdfs:label "Дата фиксации остатка" .
```

------------------------------
## 🕵️‍♂️ Архитектурные особенности этой схемы

   1. Строгая типизация номеров счетов: Свойство rbo:accountNumber задано как xsd:string, что полностью защищает данные от потери ведущих нулей (о чем мы говорили ранее).
   2. Гибкость владельца (owl:unionOf): Свойство rbo:hasHolder спроектировано так, что владельцем счета может быть как физлицо, так и юрлицо. При этом аналитические свойства (например, ИНН) наследуются обоими типами клиентов.
   3. Прямой маппинг на План счетов ЦБ: Класс rbo:BalanceAccount2ndOrder позволяет загрузить в граф весь справочник счетов Банка России (40702, 40817, 45505 и т.д.). Связав 20-значный счет со счетом 2-го порядка через rbo:belongsTo2ndOrder, вы сможете моментально группировать остатки для Оборотно-сальдовой ведомости (Форма 101).
   4. Контрактный слой: Класс rbo:CreditContract позволяет привязывать к конкретному кредитному договору цепочку счетов (текущий счет клиента, ссудный счет для учета основного долга, счета для просроченных процентов). Благодаря связи rbo:linkedToProduct, вы одной SPARQL-выборкой подтянете всю бухгалтерию по кредиту.

------------------------------
## 📊 Как на основе этой схемы будет выглядеть экземпляр данных (Пример кредитной операции)
Если движок OBDA обработает строку из вашей базы через маппинг, он сформирует следующий логический граф:
```
@prefix ex:  <http://example.com> .
@prefix rbo: <http://example.com> .
@prefix xsd: <http://w3.org> .

# Клиент - Физическое лицо
ex:Client_Ivanov a rbo:Individual ;
    rbo:inn "771234567890" .

# Кредитный договор И Иванова
ex:Credit_Contract_999 a rbo:CreditContract ;
    rbo:amountValue "500000.00"^^xsd:decimal .

# Ссудный счет для учета задолженности (начинается на 455)
ex:Acc_45505810000000001234 a rbo:BankAccount ;
    rbo:accountNumber "45505810000000001234" ;
    rbo:currencyISO "RUB" ;
    rbo:hasHolder ex:Client_Ivanov ;
    rbo:linkedToProduct ex:Credit_Contract_999 .

# Проводка: Ежемесячное погашение кредита
ex:Tx_887766 a rbo:AccountingEntry ;
    rbo:hasDebitAccount  ex:Acc_40817810000000005678 ; # Текущий счет клиента
    rbo:hasCreditAccount ex:Acc_45505810000000001234 ; # Ссудный счет банка
    rbo:amountValue      "15000.00"^^xsd:decimal ;
    rbo:currencyISO      "RUB" ;
    rbo:bookingDate      "2026-08-27T12:00:00Z"^^xsd:dateTime .
```

Если хотите, мы можем написать SPARQL-запрос для проверки регуляторного правила. Например, "Найти все кредитные договоры физлиц, у которых ссудный счет почему-то открыт на балансовом счете юридических лиц (не начинается на 455/457)".
Вам интересен пример такого контролирующего SPARQL-запроса для Triple Store?

------------------------------
## 🔗 Дополнительные источники:

   1. КонсультантПлюс: Положение Банка России № 809-П «О Плане счетов...» — Официальный регламент структуры и логики построения российских банковских счетов.


### 3

Для построения полноценной промышленной онтологии RBO (Russian Banking Ontology), способной решать задачи построения Оборотно-сальдовой ведомости (Форма 101), контроля кредитных рисков и агрегации отчетности для Банка России, базовая схема расширена до уровня детальной спецификации.
Ниже представлена развернутая, готовая к загрузке в Triple Store (GraphDB, Stardog) схема классов, свойств и аксиом на языке Turtle (OWL 2 DL).
## 🛠️ Полная производственная схема онтологии (rbo.ttl)

```
@prefix rdfs: <http://w3.org> .
@prefix owl:  <http://w3.org> .
@prefix xsd:  <http://w3.org> .
@prefix rdf:  <http://w3.org> .
@prefix rbo:  <http://example.com> .

<http://example.com> a owl:Ontology ;
    rdfs:label "Russian Banking Ontology (RBO)" ;
    rdfs:comment "Полнофункциональная семантическая модель универсального российского банка под требования Положений ЦБ РФ (809-П и др.)." ;
    owl:versionInfo "2.0.0" .

# =================================================================
# 1. КЛАССЫ СУБЪЕКТОВ И КЛИЕНТОВ (Party & Counterparty)
# =================================================================

rbo:Party a owl:Class ;
    rdfs:label "Участник финансового рынка / Контрагент" .

rbo:Individual a owl:Class ;
    rdfs:subClassOf rbo:Party ;
    rdfs:label "Физическое лицо (Резидент / Нерезидент)" .

rbo:LegalEntity a owl:Class ;
    rdfs:subClassOf rbo:Party ;
    rdfs:label "Юридическое лицо" .

rbo:CommercialOrganization a owl:Class ;
    rdfs:subClassOf rbo:LegalEntity ;
    rdfs:label "Коммерческая организация" .

rbo:StateOrganization a owl:Class ;
    rdfs:subClassOf rbo:LegalEntity ;
    rdfs:label "Государственная / Бюджетная организация" .

rbo:CreditInstitution a owl:Class ;
    rdfs:subClassOf rbo:LegalEntity ;
    rdfs:label "Кредитная организация (Банк-корреспондент)" .

rbo:ConnectedGroup a owl:Class ;
    rdfs:label "Группа связанных заемщиков" ;
    rdfs:comment "Сущность для агрегации кредитных рисков по Н6/Н7 нормам ЦБ." .

# =================================================================
# 2. КЛАССЫ ПЛАНА СЧЕТОВ И БУХГАЛТЕРИИ (Chart of Accounts & Ledger)
# =================================================================

rbo:ChartOfAccountsElement a owl:Class ;
    rdfs:label "Элемент Единого плана счетов (Положение 809-П)" .

rbo:BalanceAccount1stOrder a owl:Class ;
    rdfs:subClassOf rbo:ChartOfAccountsElement ;
    rdfs:label "Балансовый счет 1-го порядка (3 знака)" .

rbo:BalanceAccount2ndOrder a owl:Class ;
    rdfs:subClassOf rbo:ChartOfAccountsElement ;
    rdfs:label "Балансовый счет 2-го порядка (5 знаков)" .

rbo:PersonalAccount a owl:Class ;
    rdfs:label "Лицевой счет клиента (20 знаков)" .

rbo:ActiveAccount a owl:Class ;
    rdfs:subClassOf rbo:PersonalAccount ;
    owl:inverseOf rbo:PassiveAccount ;
    rdfs:label "Активный счет" .

rbo:PassiveAccount a owl:Class ;
    rdfs:subClassOf rbo:PersonalAccount ;
    rdfs:label "Пассивный счет" .

rbo:AccountingEntry a owl:Class ;
    rdfs:label "Бухгалтерская проводка (Двойная запись)" .

rbo:AccountBalanceSnapshot a owl:Class ;
    rdfs:label "Слепок остатка на счете" .

# =================================================================
# 3. КЛАССЫ ПРОДУКТОВ, КРЕДИТОВ И РИСКОВ (Banking Products & Risks)
# =================================================================

rbo:BankingProduct a owl:Class ;
    rdfs:label "Банковский продукт / Договор" .

rbo:CreditContract a owl:Class ;
    rdfs:subClassOf rbo:BankingProduct ;
    rdfs:label "Кредитный договор (Ссуда)" .

rbo:DepositContract a owl:Class ;
    rdfs:subClassOf rbo:BankingProduct ;
    rdfs:label "Депозит / Вклад" .

rbo:SettlementContract a owl:Class ;
    rdfs:subClassOf rbo:BankingProduct ;
    rdfs:label "Договор расчетно-кассового обслуживания (РКО)" .

rbo:Collateral a owl:Class ;
    rdfs:label "Залоговое обеспечение" .

rbo:RiskCategory a owl:Class ;
    rdfs:label "Категория качества ссуды (1-5 категории по 590-П)" .

# =================================================================
# 4. СВОЙСТВА ОБЪЕКТОВ (Object Properties — Структура связей)
# =================================================================

rbo:hasHolder a owl:ObjectProperty ;
    rdfs:domain rbo:PersonalAccount ;
    rdfs:range rbo:Party ;
    rdfs:label "Владелец лицевого счета" .

rbo:belongsTo2ndOrder a owl:ObjectProperty ;
    rdfs:domain rbo:PersonalAccount ;
    rdfs:range rbo:BalanceAccount2ndOrder ;
    rdfs:label "Привязка 20-значного счета к 5-значному" .

rbo:parent1stOrder a owl:ObjectProperty ;
    rdfs:domain rbo:BalanceAccount2ndOrder ;
    rdfs:range rbo:BalanceAccount1stOrder ;
    rdfs:label "Родительский счет 1-го порядка" .

### Проводки
rbo:hasDebitAccount a owl:ObjectProperty ;
    rdfs:domain rbo:AccountingEntry ;
    rdfs:range rbo:PersonalAccount ;
    rdfs:label "Счет Дебета" .

rbo:hasCreditAccount a owl:ObjectProperty ;
    rdfs:domain rbo:AccountingEntry ;
    rdfs:range rbo:PersonalAccount ;
    rdfs:label "Счет Кредита" .

### Продукты и Обеспечение
rbo:linkedToProduct a owl:ObjectProperty ;
    rdfs:domain rbo:PersonalAccount ;
    rdfs:range rbo:BankingProduct ;
    rdfs:label "Обслуживает банковский продукт" .

rbo:hasCollateral a owl:ObjectProperty ;
    rdfs:domain rbo:CreditContract ;
    rdfs:range rbo:Collateral ;
    rdfs:label "Обеспечение по кредиту" .

rbo:assignedRisk a owl:ObjectProperty ;
    rdfs:domain rbo:CreditContract ;
    rdfs:range rbo:RiskCategory ;
    rdfs:label "Оценка качества портфеля" .

### Группы рисков
rbo:memberOfGroup a owl:ObjectProperty ;
    rdfs:domain rbo:Party ;
    rdfs:range rbo:ConnectedGroup ;
    rdfs:label "Входит в группу связанных заемщиков" .

rbo:appliesToAccount a owl:ObjectProperty ;
    rdfs:domain rbo:AccountBalanceSnapshot ;
    rdfs:range rbo:PersonalAccount ;
    rdfs:label "Остаток принадлежит счету" .


# =================================================================
# 5. СВОЙСТВА ДАННЫХ (Data Properties — Атрибуты и Литералы)
# =================================================================

### Строковые идентификаторы
rbo:accountNumberA a owl:DatatypeProperty ;
    rdfs:domain rbo:PersonalAccount ;
    rdfs:range xsd:string ;
    rdfs:label "Строго 20 знаков номера счета" .

rbo:inn a owl:DatatypeProperty ;
    rdfs:domain rbo:Party ;
    rdfs:range xsd:string ;
    rdfs:label "ИНН" .

rbo:kpp a owl:DatatypeProperty ;
    rdfs:domain rbo:LegalEntity ;
    rdfs:range xsd:string ;
    rdfs:label "КПП" .

rbo:ogrn a owl:DatatypeProperty ;
    rdfs:domain rbo:LegalEntity ;
    rdfs:range xsd:string ;
    rdfs:label "ОГРН / ОГРНИП" .

rbo:bik a owl:DatatypeProperty ;
    rdfs:domain rbo:CreditInstitution ;
    rdfs:range xsd:string ;
    rdfs:label "БИК Банка" .

### Финансовые показатели
rbo:amountValue a owl:DatatypeProperty ;
    rdfs:domain [ a owl:Class ; owl:unionOf (rbo:AccountingEntry rbo:AccountBalanceSnapshot rbo:BankingProduct rbo:Collateral) ] ;
    rdfs:range xsd:decimal ;
    rdfs:label "Денежная сумма" .

rbo:currencyNumCode a owl:DatatypeProperty ;
    rdfs:domain [ a owl:Class ; owl:unionOf (rbo:PersonalAccount rbo:AccountingEntry) ] ;
    rdfs:range xsd:string ;
    rdfs:label "Цифровой код валюты (810/643/840)" .

### Временные маркеры
rbo:bookingTimestamp a owl:DatatypeProperty ;
    rdfs:domain rbo:AccountingEntry ;
    rdfs:range xsd:dateTime ;
    rdfs:label "Точное время проведения" .

rbo:snapshotDate a owl:DatatypeProperty ;
    rdfs:domain rbo:AccountBalanceSnapshot ;
    rdfs:range xsd:date ;
    rdfs:label "Дата балансового дня" .

rbo:contractOpeningDate a owl:DatatypeProperty ;
    rdfs:domain rbo:BankingProduct ;
    rdfs:range xsd:date ;
    rdfs:label "Дата открытия договора" .

rbo:contractClosingDate a owl:DatatypeProperty ;
    rdfs:domain rbo:BankingProduct ;
    rdfs:range xsd:date ;
    rdfs:label "Дата планового/фактического закрытия" .

### Статистические коэффициенты
rbo:provisionRate a owl:DatatypeProperty ;
    rdfs:domain rbo:RiskCategory ;
    rdfs:range xsd:decimal ;
    rdfs:label "Процент расчетного резерва (по 590-П)" .
```

------------------------------
## 🧠 Какую регуляторную логику решает эта полная схема?

   1. Многоуровневая иерархия Плана Счетов: Связь PersonalAccount (20 знаков) ➡️ BalanceAccount2ndOrder (5 знаков) ➡️ BalanceAccount1stOrder (3 знака) позволяет агрегировать данные на любой уровень отчетности. СУБД Triple Store может свернуть баланс по одной ветке за миллисекунды.
   2. Разделение Актив / Пассив: Счета физически разделены на ActiveAccount и PassiveAccount. Это предотвращает бухгалтерские ошибки (например, возникновение недопустимого отрицательного остатка на пассивном счете физлица 40817).
   3. Логика Резервирования (Положение № 590-П): Объект кредитного договора CreditContract связан с RiskCategory. К свойству класса категории риска привязан атрибут rbo:provisionRate (например, для 3-й категории ссуд — 0.50 (резерв 50%)). Ризонер автоматически перемножит остаток по ссудному счету на этот коэффициент и выведет объем необходимых резервов банка на Triple Store.
   4. Концентрация рисков на связанные группы (Нормативы Н6/Н7 ЦБ РФ): Класс ConnectedGroup объединяет холдинги, связанных поручителей или родственников. SPARQL-запрос может мгновенно рассчитать совокупный долг всех участников ConnectedGroup перед банком, предотвращая нарушение лимитов регулятора на одного заемщика.

------------------------------
## 📊 Пример SPARQL-запроса: Оборотно-сальдовая ведомость (Форма 101)
Используя эту полную схему, вы можете запустить нетранзакционный скрипт генерации отчетности для Центробанка по балансовым счетам второго порядка:

```
PREFIX rbo: <http://example.com>
PREFIX xsd: <http://w3.org>

SELECT ?acc2ndOrderCode (SUM(?balance) AS ?totalBalanceValue)
WHERE {
    # Ищем слепок остатка
    ?snapshot a rbo:AccountBalanceSnapshot ;
              rbo:snapshotDate "2026-08-27"^^xsd:date ;
              rbo:amountValue ?balance ;
              rbo:appliesToAccount ?account .
              
    # Выходим на лицевой счет и подтягиваем его 5-значную группировку
    ?account rbo:belongsTo2ndOrder ?accountGroup .
    ?accountGroup rdfs:label ?acc2ndOrderCode .
}
GROUP BY ?acc2ndOrderCode
ORDER BY ?acc2ndOrderCode
```

Если у вас развернута СУБД, скажите:

* Нужно ли дополнить схему классами для валютной переоценки (счета учета курсовых разниц)?
* Требуется ли написать под эту схему шаблон R2RML-маппинга для сложного JOIN (когда данные клиента и данные его счетов разнесены по разным таблицам)?






