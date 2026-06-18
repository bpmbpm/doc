
Начало: https://github.com/bpmbpm/doc/blob/main/IT/BOK/lean/lean_vs_bpm_2b.md

## 1 Apollo в контексте Semantic-OpEx

Я не нашел специализированных источников по **Apollo в контексте Semantic-OpEx** через поиск, но могу дать подробный экскурс на основе официальной документации Palantir, которая уже была использована в предыдущих ответах. Ниже — развернутое объяснение **Apollo в контексте развертывания Semantic-OpEx**.

***

## Palantir Apollo: что это и зачем в Semantic-OpEx

### 1. Бизнес-контекст

**Apollo** — это **операционная платформа инфраструктуры и безопасности** для всего stack'а Palantir (AIP, Foundry, Ontology). Apollo обеспечивает:

- deployment across **cloud, hybrid, edge**;
- unified **security, governance, lifecycle**;
- управление инфраструктурой для AIP и Foundry.

В Apache-стиле это можно назвать **"operational backbone"** для Semantic-OpEx: платформа, которая держит все слои архитектуры в едином контроле. [palantir](https://palantir.com/docs/foundry/architecture-center/overview/)

***

### 2. Ключевые компоненты Apollo

#### **Deployment across environments**

Apollo позволяет развертывать Palantir AIP и Foundry:

- в одном облаке (например, AWS, Azure, Google Cloud);
- в гибридной конфигурации (cloud + on-prem + edge);
- в multiple regions для global enterprises.

**В Semantic-OpEx:**
Это критично, если у вас:
- разные регионы (EU, US, Asia);
- mix of cloud и on-prem (например, SAP on-prem + Snowflake cloud);
- edge-устройства (plant floor, IoT sensors) + cloud data lake.

**Комментарий:**
Apollo дает вам **единый control plane** для всех окружений. В Semantic-OpEx это **infrastructure + security layer**, который держит Foundry, AIP, Ontology, workflows.

***

#### **Unified security**

Apollo обеспечивает:

- единое управление **security policies**;
- **authentication и authorization** across всех платформ (AIP, Foundry, Ontology);
- интеграция с enterprise IAM (например, Active Directory, Okta, Azure AD);
- **encryption** для данных в transit и at rest.

**В Semantic-OpEx:**
Это критично для:
- **governance**: кто видит что, кто может менять что;
- **security**: защита данных, особенно если вы используете LLM, AI, workflow с write-back к SAP;
- **compliance**: GDPR, HIPAA, SOC2, внутренние политики.

**Комментарий:**
Apollo — это **security backbone** для Semantic-OpEx. Без Apollo у вас будут разрозненные security policies для Foundry, AIP, Ontology, workflows. С Apollo — единая политика для всего stack'а.

***

#### **Governance и lifecycle management**

Apollo обеспечивает:

- **versioning** для AIP, Foundry, Ontology;
- **update management**: rolling updates, patch management;
- **audit logging**: кто что сделал, когда, почему;
- **rollback**: если update сломал что-то, можно быстро вернуться.

**В Semantic-OpEx:**
Это критично для:
- **semantic governance**: версионирование онтологии, approval workflow;
- **process governance**: кто изменил процесс, когда, почему;
- **data governance**: кто изменил data quality rules, когда, почему;
- **AI governance**: кто изменил AI model, когда, почему.

**Комментарий:**
Apollo — это **governance backbone** для Semantic-OpEx. Без Apollo у вас будут разрозненные процессы версионирования, update management, audit logging для Foundry, AIP, Ontology, workflows. С Apollo — единый governance для всего stack'а.

***

### 3. Как Apollo работает в arkхитектуре

```text
┌────────────────────────────────────────────────────────────────────┐
│                          BUSINESS LAYER                            │
│  strategy, KPIs, value streams, policies, domain ownership         │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                           PROCESS LAYER (BPM)                      │
│  BPMN, workflows, process mining, controls, roles, SLA, KPI        │
│  ┌──────────────────────────────────────────────────────────────┐ │
│   │  Palantir Workflow + Decision Workflows (автоматизация)     │ │
│   │  ┌────────────────────────────────────────────────────────┐ │ │
│   │  │  Apollo: security, governance, lifecycle для workflows │ │ │
│   │  └────────────────────────────────────────────────────────┘ │ │
│   └──────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                            DATA LAYER (MDM)                        │
│  MDM, golden records, reference data, data quality, lineage        │
│  ┌──────────────────────────────────────────────────────────────┐ │
│   │  Foundry: Data Integration (pipelines, lineage, quality)    │ │
│   │  ┌────────────────────────────────────────────────────────┐ │ │
│   │  │  Apollo: security, governance, lifecycle для Foundry   │ │ │
│   │  └────────────────────────────────────────────────────────┘ │ │
│   └──────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                      SEMANTICS LAYER (Ontology)                    │
│  glossary, taxonomy, ontology, knowledge graph, mappings, rules    │
│  reasoning, semantic search, governance                            │
│  ┌──────────────────────────────────────────────────────────────┐ │
│   │  Palantir Ontology (objects, properties, links, actions)    │ │
│   │  ┌────────────────────────────────────────────────────────┐ │ │
│   │  │  Apollo: security, governance, lifecycle для Ontology  │ │ │
│   │  └────────────────────────────────────────────────────────┘ │ │
│   └──────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                        AI / LAYER (AIP)                            │
│  AI, LLM, reasoning, automations, agents                           │
│  ┌──────────────────────────────────────────────────────────────┐ │
│   │  Palantir AIP (LLM, reasoning, automations, agents)         │ │
│   │  ┌────────────────────────────────────────────────────────┐ │ │
│   │  │  Apollo: security, governance, lifecycle для AIP       │ │ │
│   │  └────────────────────────────────────────────────────────┘ │ │
│   └──────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                      INFRASTRUCTURE (Apollo)                       │
│  ┌──────────────────────────────────────────────────────────────┐ │
│   │  Palantir Apollo: deployment + security + governance        │ │
│   │  ┌────────────────────────────────────────────────────────┐ │ │
│   │  │  - cloud/hybrid/edge deployment                         │ │ │
│   │  │  - unified security policies                              │ │ │
│   │  │  - unified governance (versioning, audit, lifecycle)    │ │ │
│   │  └────────────────────────────────────────────────────────┘ │ │
│   └──────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────┘
```

***

### 4. Apollo в контексте Semantic-OpEx: что это дает

#### **Что дает Apollo в Semantic-OpEx**

1. **Единый infrastructure layer**: един control plane для cloud/hybrid/edge.
2. **Единый security layer**: единые security policies для Foundry, AIP, Ontology, workflows.
3. **Единый governance layer**: единый versioning, audit logging, lifecycle management для всего stack'а.
4. **Единый lifecycle**: единые rolling updates, patch management, rollback для всех платформ.

#### **Что делает Semantic-OpEx поверх Apollo**

Semantic-OpEx добавляет **методологическую надстройку** поверх Apollo:

- **Own governance**: свои процессы semantic governance, domain governance, process governance, data governance, AI governance.
- **Own security**: свои compliance policies (GDPR, HIPAA, SOC2, внутренние).
- **Own lifecycle**: свои процессы improvement portfolio, Kaizen, PDCA на top of Apollo lifecycle.
- **Own roadmap**: свой roadmap use cases, improvement initiatives на top of Apollo roadmap.

**Комментарий:**
Apollo — это **технический backbone** для Semantic-OpEx. Semantic-OpEx — это **методологическая надстройка**, которая добавляет Lean/OpEx/BPM, domain governance, BPMN integration, MDM дисциплину, improvement portfolio.

***

### 5. Практические примеры использования Apollo в Semantic-OpEx

#### **Пример 1: Глобальная enterprise с multiple regions**

**Ситуация:**
- EU region: GDPR compliance, on-prem SAP, cloud Snowflake.
- US region: SOC2 compliance, cloud-only (AWS).
- Asia region: hybrid (on-prem edge + cloud).

**Как Apollo помогает:**
- единый control plane для всех регионов;
- единые security policies с региональными variations;
- единый governance для версионирования онтологии across всех регионов.

**Комментарий:**
В Semantic-OpEx это **multi-region semantic governance**: единый glossary, taxonomy, ontology across всех регионов с региональными variations.

***

#### **Пример 2: Enterprise с IoT edge + cloud**

**Ситуация:**
- Plant floor: IoT sensors, edge devices, on-prem control systems.
- Cloud: data lake, analytics, AI models.

**Как Apollo помогает:**
- deployment на edge + cloud в едином control plane;
- единые security policies для edge + cloud;
- единый governance для data pipelines с edge.

**Комментарий:**
В Semantic-OpEx это **edge-to-cloud semantic layer**: единая онтология для edge IoT + cloud data lake.

***

#### **Пример 3: Enterprise с AI governance**

**Ситуация:**
- AI модели: LLM, ML, детерминированные модели.
- AI governance: кто менял какие модели, когда, почему, audit logging.

**Как Apollo помогает:**
- единый governance для всех AI моделей;
- audit logging для всех AI-инициатив;
- rollback для AI моделей, если update сломал что-то.

**Комментарий:**
В Semantic-OpEx это **AI governance под контролем онтологии**: AI работает под governance, не как автономный черный ящик.

***

### 6. Короткая формулировка для презентации

**Apollo** — это **technological backbone** для Semantic-OpEx:
- deployment across cloud/hybrid/edge;
- unified security, governance, lifecycle for AIP, Foundry, Ontology, workflows.

**Semantic-OpEx** — это **методологическая надстройка** поверх Apollo:
- Lean/OpEx/BPM методология;
- Strong domain governance;
- Integration с BPMN и MDM;
- Improvement portfolio, KPI, Kaizen, PDCA.

**Комментарий:**
Без Apollo у вас будет **разрозненный infrastructure, security, governance** для Foundry, AIP, Ontology, workflows. С Apollo — **единый backbone** для всего stack'а.

Если нужно, я могу следующим сообщением сделать **схему «Apollo + Semantic-OpEx layers»** в виде PNG или в более компактном **executive-виде на 1 слайд**.

## 2

Ниже — пошаговый пример, как в **Palantir Foundry** строится **операционная онтология** (operational ontology), с комментариями, как это применяется в **Semantic-OpEx**.

***
## Пример: операционная онтология в Foundry — "Заказы и клиенты"
### Контекст
Представим, что вы хотите построить онтологию для **процесса Order Fulfillment**:

- источники данных: SAP (заказы, клиенты, продукты), CRM (клиенты), ERP (отгрузка).
- цель: сделать онтологию, которая не только описывает сущности, но и **запускает действия** (reroute shipment, flag order, approve customer).

***
## Шаг 1. Определить Object Types (объекты)
**В Foundry:**

1. Открыть **Ontology Manager** в Foundry.
2. Создать **object types**, которые представляют реальные сущности бизнеса:

   - **Order**  
     - Attributes: Order ID, Date, Total Amount, Status  
   - **Customer**  
     - Attributes: Customer ID, Name, Email, Region  
   - **Product**  
     - Attributes: Product ID, Name, Price, Category  
   - **Shipment**  
     - Attributes: Shipment ID, Status, Plant, Destination

**В Semantic-OpEx:**

- Это **Semantic layer**: business glossary + taxonomy + ontology.
- Order, Customer, Product, Shipment — это **бизнес-сущности**, которые вы фиксируете в glossary и taxonomy.
- Attributes — это свойства, которые вы связываете с данными из SAP, CRM, ERP.

**Комментарий:**

В Foundry объекты — это не просто таблицы, а **сущности реального мира**, с которыми люди и AI работают. В Semantic-OpEx это **операционные сущности**, которые участвуют в процессах (BPM), улучшении (OpEx), Lean (Muda reduction).

***
## Шаг 2. Добавить Attributes (свойства)
**В Foundry:**

1. Для каждого object type добавить **properties**:
   - **Order**:
     - Order ID: string
     - Date: date
     - Total Amount: number
     - Status: string (Open, Approved, Shipped, Closed)
   - **Customer**:
     - Customer ID: string
     - Name: string
     - Email: string
     - Region: string (EU, US, Asia)
   - **Product**:
     - Product ID: string
     - Name: string
     - Price: number
     - Category: string

2. Foundry автоматически извлекает свойства из **потоков данных** (pipelines, virtual tables).

**В Semantic-OpEx:**

- Это **property mapping**: связывание свойств с данными из SAP, CRM, ERP.
- В glossary и ontology вы фиксируете, что `Order.Date` — это дата заказа из SAP, а не из CRM.
- В MDM вы фиксируете, что `Customer.ID` — это golden record ID, а не старый ID из ERP.

**Комментарий:**

В Foundry properties — это не просто атрибуты, а **связи с данными**. В Semantic-OpEx это **связи с MDM и data quality**: свойства, которые вы контролируете через MDM, data quality rules, lineage.

***
## Шаг 3. Установить Relationships (связи)
**В Foundry:**

1. Создать **relationships** между объектами:

   - **Order relates to Customer**  
     - Relationship: One-to-Many (один клиент → много заказов)
   - **Order relates to Product**  
     - Relationship: Many-to-Many (через Order Line Items)
   - **Order relates to Shipment**  
     - Relationship: One-to-Many (один заказ → много отгрузок)

2. Foundry автоматически создает **links** между объектами на основе данных.

**В Semantic-OpEx:**

- Это **links в ontology**: связи между сущностями.
- В ontology вы фиксируете, что `Order.Customer` — это связь с Customer, а `Order.Shipment` — связь с Shipment.
- В BPM вы фиксируете, что `Order → Shipment` — это процессный поток.

**Комментарий:**

В Foundry links — это не просто связи, а **операционные связи**, которые участвуют в процессах и действиях. В Semantic-OpEx это **операционные связи**, которые участвуют в BPM, process mining, Kaizen.

***
## Шаг 4. Map Data (привязать к данным)
**В Foundry:**

1. Создать **потоки данных** (pipelines) из SAP, CRM, ERP:
   - SAP: `EKKO` (заказы), `EKPO` (заказ-материал), `LFA1` (клиенты).
   - CRM: `Customers`.
   - ERP: `Shipments`.

2. Создать **трансформации** (Pipelines, Code Workbook, Contour):
   - Join `EKPO` + `EKKO` + `LFA1` → `Order`.
   - Join `Customers` → `Customer`.
   - Join `Shipments` → `Shipment`.

3. **Map** трансформации к объектным типам:
   - `Order` → pipeline из SAP.
   - `Customer` → pipeline из CRM.
   - `Shipment` → pipeline из ERP.

**В Semantic-OpEx:**

- Это **mappings**: связывание объектов с данными из SAP, CRM, ERP.
- В ontology вы фиксируете, что `Order` — это pipeline из SAP, а не из CRM.
- В MDM вы фиксируете, что `Customer` — это golden record из CRM, а не старый ID из ERP.

**Комментарий:**

В Foundry map data — это не просто привязка к данным, а **операционная привязка**, которая участвует в процессах и действиях. В Semantic-OpEx это **операционная привязка**, которая участвует в BPM, process mining, Kaizen.

***
## Шаг 5. Создать Actions (действия)
**В Foundry:**

1. Создать **action types** для каждого объекта:

   - **Order**:
     - `approveOrder`: изменить статус Order на Approved.
     - `rejectOrder`: изменить статус Order на Rejected.
     - `rerouteShipment`: изменить Shipment Plant.
   - **Customer**:
     - `flagCustomer`: добавить флаг Flag для Customer.
     - `approveCustomer`: изменить статус Customer на Approved.
   - **Shipment**:
     - `rerouteShipment`: изменить Shipment Plant.

2. Создать **functions** для бизнес-логики:
   - `calculateOrderTotal`: рассчитать Total Amount.
   - `checkCustomerCredit`: проверить кредит клиента.

**В Semantic-OpEx:**

- Это **kinetic layer**: actions + functions.
- В ontology вы фиксируете, что `approveOrder` — это действие, которое меняет статус Order.
- В BPM вы фиксируете, что `approveOrder` — это процессный шаг.

**Комментарий:**

В Foundry actions — это не просто действия, а **операционные действия**, которые запускают процессы. В Semantic-OpEx это **операционные действия**, которые запускают BPM, process mining, Kaizen.

***
## Шаг 6. Info Interfaces (полиморфизм объектов)
**В Foundry:**

1. Создать **interfaces**, которые описывают форму объектов:
   - `OrderInterface`: Order ID, Date, Total Amount, Status.
   - `CustomerInterface`: Customer ID, Name, Email, Region.

2. Interfaces позволяют **полиморфизм**: разные объекты с одинаковой формой.

**В Semantic-OpEx:**

- Это **ontology interfaces**: форма объектов в ontology.
- В ontology вы фиксируете, что `OrderInterface` — это форма Order.

**Комментарий:**

В Foundry interfaces — это не просто формы, а **операционные формы**, которые участвуют в процессах. В Semantic-OpEx это **операционные формы**, которые участвуют в BPM, process mining, Kaizen.

***
## Шаг 7. Security & Governance (безопасность и управление)
**В Foundry:**

1. Создать **security policies**:
   - `Order`: только менеджеры продаж могут видеть Order.
   - `Customer`: только менеджеры клиентов могут видеть Customer.
   - `Shipment`: только логисты могут видеть Shipment.

2. Создать **governance workflows**:
   - `approveOrder`: требует approval от менеджера.
   - `flagCustomer`: требует approval от менеджера.

**В Semantic-OpEx:**

- Это **security & governance**: кто видит что, кто может менять что.
- В ontology вы фиксируете, что `approveOrder` — это процессный шаг, который требует approval.

**Комментарий:**

В Foundry security & governance — это не просто безопасность и управление, а **операционная безопасность и управление**, которые участвуют в процессах. В Semantic-OpEx это **операционная безопасность и управление**, которые участвуют в BPM, process mining, Kaizen.

***
## Краткая схема онтологии в Foundry
```text
┌────────────────────────────────────────────────────────────────────┐
│                        OBJECT TYPES                                │
│  Order, Customer, Product, Shipment                                │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                          PROPERTIES                                │
│  Order: Order ID, Date, Total Amount, Status                       │
│  Customer: Customer ID, Name, Email, Region                        │
│  Product: Product ID, Name, Price, Category                        │
│  Shipment: Shipment ID, Status, Plant, Destination                 │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                        RELATIONSHIPS                               │
│  Order → Customer (One-to-Many)                                    │
│  Order → Product (Many-to-Many via Order Line Items)               │
│  Order → Shipment (One-to-Many)                                    │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                          DATA MAP                                  │
│  Order ← SAP pipeline                                              │
│  Customer ← CRM pipeline                                           │
│  Shipment ← ERP pipeline                                           │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                            ACTIONS                                 │
│  approveOrder, rejectOrder, rerouteShipment                        │
│  flagCustomer, approveCustomer                                     │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                         FUNCTIONS                                  │
│  calculateOrderTotal, checkCustomerCredit                          │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                   SECURITY & GOVERNANCE                            │
│  security policies, governance workflows                           │
└────────────────────────────────────────────────────────────────────┘
```

***
## Как это применяется в Semantic-OpEx
### Semantic-OpEx + Foundry Ontology
1. **Semantic layer**: glossary + taxonomy + ontology (Order, Customer, Product, Shipment).
2. **Data layer**: MDM + data quality + lineage (SAP, CRM, ERP pipelines).
3. **Kinetic layer**: actions + functions (approveOrder, rerouteShipment, flagCustomer).
4. **Security & governance**: security policies + governance workflows (approval, audit).
### Ключевая идея
**Foundry Ontology** — это operational layer, который не только описывает сущности, но и **запускает действия**. **Semantic-OpEx** — это методология, которая использует Foundry как operational engine, а сама добавляет Lean/OpEx/BPM, domain governance, BPMN integration, MDM дисциплину.

***
## Короткая формулировка для презентации
**В Foundry операционная онтология строится через:**
1. Object Types (сущности реального мира: Order, Customer, Product, Shipment).
2. Properties (атрибуты: Order ID, Date, Total Amount, Status).
3. Relationships (связи: Order → Customer, Order → Product, Order → Shipment).
4. Data Map (привязка к данным: SAP, CRM, ERP pipelines).
5. Actions (действия: approveOrder, rerouteShipment, flagCustomer).
6. Functions (бизнес-логика: calculateOrderTotal, checkCustomerCredit).
7. Security & Governance (безопасность и управление: security policies, governance workflows).

**В Semantic-OpEx это operational layer**, который участвует в BPM, process mining, Kaizen, Lean.

## 3
Ниже — практический пример, как в **Palantir Foundry** интегрируются **Property Policies** с **Lean Six Sigma (DMAIC, 5S, Kaizen, FMEA)**, чтобы сделать онтологию не просто семантической, а **операционно-управляющей качеством процессов**.

***

## Контекст: Foundry + Lean Six Sigma

**Lean Six Sigma** — методология улучшения качества процессов через:

- **DMAIC** (Define, Measure, Analyze, Improve, Control);
- **5S** (Sort, Set in order, Shine, Standardize, Sustain);
- **Kaizen** (непрерывное улучшение);
- **FMEA** (Failure Mode and Effects Analysis);
- **DPMO** (Defects Per Million Opportunities);
- **Sigma level** (уровень качества: от 2.6 до 6.0).

В контексте **foundry** (литейное производство) это применяется для:

- снижения дефектов (sand drop, blow holes, cracks, core shifts);
- уменьшения rejection rates (процент браков);
- повышения sigma level (например, от 2.6 до 3.0);
- снижения manufacturing costs. [sciencedirect](https://www.sciencedirect.com/science/article/abs/pii/S2214785320301486)

**Property Policies** в Foundry — это **семантические правила для свойств объектов**, которые:

- контролируют качество данных (data quality);
- проверяют ограничения (constraints);
- блокируют некорректные значения;
- запускают автоматические проверки.

***

## Как Property Policies интегрируются с Lean Six Sigma в Foundry

### Шаг 1. Define (Определить проблему)

**В Lean Six Sigma:**

- Define: определить проблему (например, высокий процент sand drop defects → высокий rejection rate).
- SIPOC: Supplier → Input → Process → Output → Customer.

**В Foundry с Property Policies:**

1. Создать **object type** для процесса:

   - **ProcessStep**  
     - Properties: Step ID, Step Name, Defect Type, Rejection Rate, Sigma Level

2. Создать **Property Policies** для свойств:

   - **Rejection Rate**:
     - Policy: `Rejection Rate >= 0 AND Rejection Rate <= 100`
     - Policy: `Rejection Rate IS NOT NULL`
   - **Sigma Level**:
     - Policy: `Sigma Level >= 2.0 AND Sigma Level <= 6.0`
     - Policy: `Sigma Level IS NOT NULL`

3. Foundry автоматически проверяет policies при вводе данных.

**Комментарий к интеграции:**

Property Policies в Foundry фиксируют **определение проблемы** в машиночитаемом виде: `Rejection Rate` и `Sigma Level` — это ключевые метрики для Define фазы DMAIC.

***

### Шаг 2. Measure (Измерить)

**В Lean Six Sigma:**

- Measure: собрать данные о дефектах, режекшнах, sigma level.
- DPMO: `DPMO = (Defects / (Total Opportunities)) × 1,000,000`.

**В Foundry с Property Policies:**

1. Создать **object type** для дефекта:

   - **Defect**  
     - Properties: Defect ID, Defect Type (sand drop, blow holes, cracks), Count, Date

2. Создать **Property Policies** для свойств:

   - **Count**:
     - Policy: `Count >= 0`
     - Policy: `Count IS NOT NULL`
   - **Defect Type**:
     - Policy: `Defect Type IN ['sand drop', 'blow holes', 'cracks', 'core shifts', 'mold breaks', 'porosity', 'cold shuts', 'air inclusions']`

3. Создать **Pipeline** для расчета DPMO:

   - `DPMO = (Count / (Total Opportunities)) × 1,000,000`

4. Создать **Property Policy** для DPMO:

   - **DPMO**:
     - Policy: `DPMO >= 0`
     - Policy: `DPMO IS NOT NULL`

**Комментарий к интеграции:**

Property Policies в Foundry фиксируют **измерение** в машиночитаемом виде: `Count`, `Defect Type`, `DPMO` — это ключевые метрики для Measure фазы DMAIC.

***

### Шаг 3. Analyze (Анализировать)

**В Lean Six Sigma:**

- Analyze: использовать Fishbone Diagram, Pareto Chart, Cause-and-Effect Matrix, why-why analysis для выявления root causes.

**В Foundry с Property Policies:**

1. Создать **object type** для root cause:

   - **RootCause**  
     - Properties: RootCause ID, RootCause Type, Defect Type, Impact Score, Frequency

2. Создать **Property Policies** для свойств:

   - **Impact Score**:
     - Policy: `Impact Score >= 1 AND Impact Score <= 10`
     - Policy: `Impact Score IS NOT NULL`
   - **Frequency**:
     - Policy: `Frequency >= 0`
     - Policy: `Frequency IS NOT NULL`

3. Создать **Pipeline** для Pareto analysis:

   - Отсортировать дефекты по `Count` → выявить top 3 defects (например, sand drop → 64% всех дефектов). [sciencedirect](https://www.sciencedirect.com/science/article/abs/pii/S2214785320301486)

4. Создать **Property Policy** для RootCause:

   - Policy: `RootCause Type IN ['solidification duration', 'gating systems', 'mold preparation', 'sand composition', 'temperature gradients', 'improper ramming']`

**Комментарий к интеграции:**

Property Policies в Foundry фиксируют **анализ** в машиночитаемом виде: `RootCause Type`, `Impact Score`, `Frequency` — это ключевые метрики для Analyze фазы DMAIC.

***

### Шаг 4. Improve (Улучшить)

**В Lean Six Sigma:**

- Improve: Kaizen 4M+1E (Man, Machine, Material, Method, Environment), 5W+1H, solution selection matrix (sigma, time, cost).

**В Foundry с Property Policies:**

1. Создать **object type** для улучшения:

   - **Improvement**  
     - Properties: Improvement ID, Improvement Type (Kaizen, 5S), Impact Sigma, Impact Time, Impact Cost, Status

2. Создать **Property Policies** для свойств:

   - **Impact Sigma**:
     - Policy: `Impact Sigma >= 0 AND Impact Sigma <= 3.0`
     - Policy: `Impact Sigma IS NOT NULL`
   - **Impact Time**:
     - Policy: `Impact Time >= 0`
     - Policy: `Impact Time IS NOT NULL`
   - **Impact Cost**:
     - Policy: `Impact Cost >= 0`
     - Policy: `Impact Cost IS NOT NULL`
   - **Status**:
     - Policy: `Status IN ['Planned', 'In Progress', 'Completed', 'Blocked']`

3. Создать **Pipeline** для solution selection matrix:

   - Score = (Impact Sigma × 10) + (Impact Time × 8) + (Impact Cost × 6). [sciencedirect](https://www.sciencedirect.com/science/article/abs/pii/S2214785320301486)

**Комментарий к интеграции:**

Property Policies в Foundry фиксируют **улучшение** в машиночитаемом виде: `Impact Sigma`, `Impact Time`, `Impact Cost`, `Status` — это ключевые метрики для Improve фазы DMAIC.

***

### Шаг 5. Control (Контролировать)

**В Lean Six Sigma:**

- Control: proposed control (например, form machining order для контроля параметров), target sigma level (например, от 2.98 до 3.00), monitoring. [repository.ppns.ac](http://repository.ppns.ac.id/5043/)

**В Foundry с Property Policies:**

1. Создать **object type** для контроля:

   - **Control**  
     - Properties: Control ID, Control Type (machining order form), Target Sigma Level, Current Sigma Level, Status

2. Создать **Property Policies** для свойств:

   - **Target Sigma Level**:
     - Policy: `Target Sigma Level >= 2.0 AND Target Sigma Level <= 6.0`
     - Policy: `Target Sigma Level IS NOT NULL`
   - **Current Sigma Level**:
     - Policy: `Current Sigma Level >= 2.0 AND Current Sigma Level <= 6.0`
     - Policy: `Current Sigma Level IS NOT NULL`
   - **Status**:
     - Policy: `Status IN ['Planned', 'In Progress', 'Completed', 'Blocked']`

3. Создать **Action** для контроля:

   - **updateControl**:
     - Action: обновить `Current Sigma Level` → если `Current Sigma Level < Target Sigma Level` → статус `Blocked`.

**Комментарий к интеграции:**

Property Policies в Foundry фиксируют **контроль** в машиночитаемом виде: `Target Sigma Level`, `Current Sigma Level`, `Status` — это ключевые метрики для Control фазы DMAIC.

***

## Пример: Property Policies для дефекта "sand drop"

### Объект: Defect

```json
{
  "Defect ID": "D001",
  "Defect Type": "sand drop",
  "Count": 159,
  "Date": "2025-01-15"
}
```

### Property Policies:

```yaml
Defect Type:
  - Policy: IN ['sand drop', 'blow holes', 'cracks', 'core shifts']
  - Policy: IS NOT NULL

Count:
  - Policy: >= 0
  - Policy: IS NOT NULL
```

### Результат:

- Если `Defect Type = 'sand drop'` → Foundry автоматически проверяет policy.
- Если `Count = 159` → Foundry автоматически проверяет policy.
- Если `Count < 0` → Foundry блокирует ввод.

***

## Пример: Property Policies для улучшения "Kaizen 5S"

### Объект: Improvement

```json
{
  "Improvement ID": "I001",
  "Improvement Type": "Kaizen 5S",
  "Impact Sigma": 0.4,
  "Impact Time": 8,
  "Impact Cost": 5000,
  "Status": "Completed"
}
```

### Property Policies:

```yaml
Improvement Type:
  - Policy: IN ['Kaizen', '5S', 'Kaizen 5S', 'Kaizen 4M+1E']
  - Policy: IS NOT NULL

Impact Sigma:
  - Policy: >= 0 AND <= 3.0
  - Policy: IS NOT NULL

Impact Time:
  - Policy: >= 0
  - Policy: IS NOT NULL

Impact Cost:
  - Policy: >= 0
  - Policy: IS NOT NULL

Status:
  - Policy: IN ['Planned', 'In Progress', 'Completed', 'Blocked']
  - Policy: IS NOT NULL
```

### Результат:

- Если `Improvement Type = 'Kaizen 5S'` → Foundry автоматически проверяет policy.
- Если `Impact Sigma = 0.4` → Foundry автоматически проверяет policy (например, `0.4 >= 0 AND <= 3.0` → OK).
- Если `Impact Sigma = 4.0` → Foundry блокирует ввод (например, `4.0 > 3.0` → FAIL).

***

## Схема интеграции Property Policies с Lean Six Sigma в Foundry

```text
┌────────────────────────────────────────────────────────────────────┐
│                        DMAIC PHASES                                │
│  Define → Measure → Analyze → Improve → Control                   │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                     LEAN SIX SIGMA OBJECTS                         │
│  ProcessStep, Defect, RootCause, Improvement, Control             │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                      PROPERTY POLICIES                             │
│  - Data quality: IS NOT NULL, >= 0, <= 100                        │
│  - Constraints: IN ['sand drop', 'blow holes', 'cracks']          │
│  - Validation: sigma >= 2.0 AND <= 6.0                           │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                        FOUNDRY ACTIONS                             │
│  - updateControl: обновить Current Sigma Level                    │
│  - blockInvalid: если policy FAIL → блокировать ввод               │
│  - autoApprove: если policy OK → автоматическое approval          │
└────────────────────────────────────────────────────────────────────┘
```

***

## Ключевая идея

**Property Policies в Foundry** — это **операционные правила для свойств**, которые:

- контролируют качество данных (data quality);
- проверяют ограничения (constraints);
- блокируют некорректные значения;
- запускают автоматические проверки.

**Lean Six Sigma в Foundry** — это **методология улучшения качества процессов**, которая:

- использует DMAIC (Define, Measure, Analyze, Improve, Control);
- использует 5S, Kaizen, FMEA, DPMO, Sigma level.

**Интеграция Property Policies с Lean Six Sigma в Foundry** — это **операционная интеграция**, которая делает онтологию не просто семантической, а **операционно-управляющей качеством процессов**.

***

## Короткая формулировка для презентации

**В Foundry Property Policies интегрируются с Lean Six Sigma через:**

1. **Define**: Property Policies для ProcessStep (Rejection Rate, Sigma Level).
2. **Measure**: Property Policies для Defect (Count, Defect Type, DPMO).
3. **Analyze**: Property Policies для RootCause (RootCause Type, Impact Score, Frequency).
4. **Improve**: Property Policies для Improvement (Improvement Type, Impact Sigma, Impact Time, Impact Cost, Status).
5. **Control**: Property Policies для Control (Target Sigma Level, Current Sigma Level, Status).

**В Semantic-OpEx это operational layer**, который участвует в Lean, Six Sigma, Kaizen, 5S, FMEA.

## 4

Ниже — подробный пример, как в **Palantir Foundry** применяются **Ontology Actions** для **корректирующих действий в DMAIC** (Define, Measure, Analyze, Improve, Control).

***

## Контекст: Ontology Actions в Foundry

**Ontology Actions** в Foundry — это **операционные действия**, которые:

- запускаются из объектов онтологии;
- меняют значения свойств объектов;
- записываются в back systems (SAP, ERP, CRM);
- отслеживаются в audit logs;
- требуют approval workflow;
- могут быть автоматическими или ручными.

**Корректирующие действия в DMAIC** — это действия, которые:

- устраняют первопричины проблем (root causes);
- улучшают процессы (process improvement);
- контролируют качество (quality control);
- измеряют результат (result measurement);
- документируют улучшения (improvement documentation).

***

## Пример: Ontology Actions для корректирующих действий в DMAIC

### Контекст

Представим, что в **(foundry) литейном производстве** выявлен высокий процент **sand drop defects** (64% всех дефектов) → высокий rejection rate (20%) → низкий sigma level (2.98). [sciencedirect](https://www.sciencedirect.com/science/article/abs/pii/S2214785320301486)

Цель: поднять sigma level от **2.98 до 3.00** через корректирующие действия в DMAIC.

***

## Шаг 1. Define: Action для определения проблемы

**В Ontology:**

1. Создать **object type** для проблемы:

   - **Problem**  
     - Properties: Problem ID, Problem Name, Defect Type, Rejection Rate, Sigma Level, Status

2. Создать **Ontology Action** для проблемы:

   - **defineProblem**:
     - Action: создать новую проблему (Problem ID, Problem Name, Defect Type, Rejection Rate, Sigma Level)
     - Action: установить статус `Planned`
     - Action: записать в audit log

**В Foundry:**

```yaml
Action: defineProblem
Parameters:
  - Problem Name: string
  - Defect Type: string
  - Rejection Rate: number
  - Sigma Level: number
Effects:
  - Создать Problem
  - Set Status = 'Planned'
  - Write audit log
```

**Корректирующее действие:**

- **defineProblem** — это корректирующее действие для фазы **Define**: фиксирует проблему в машиночитаемом виде.

***

## Шаг 2. Measure: Action для измерения дефектов

**В Ontology:**

1. Создать **object type** для дефекта:

   - **Defect**  
     - Properties: Defect ID, Defect Type, Count, Date, DPMO, Sigma Level

2. Создать **Ontology Action** для дефекта:

   - **measureDefect**:
     - Action: создать новый дефект (Defect ID, Defect Type, Count, Date)
     - Action: рассчитать DPMO = (Count / Total Opportunities) × 1,000,000
     - Action: рассчитать Sigma Level из DPMO
     - Action: записать в audit log

**В Foundry:**

```yaml
Action: measureDefect
Parameters:
  - Defect ID: string
  - Defect Type: string
  - Count: number
  - Date: date
  - Total Opportunities: number
Effects:
  - Создать Defect
  - Set DPMO = (Count / Total Opportunities) × 1,000,000
  - Set Sigma Level из DPMO
  - Write audit log
```

**Корректирующее действие:**

- **measureDefect** — это корректирующее действие для фазы **Measure**: фиксирует измерение в машиночитаемом виде.

***

## Шаг 3. Analyze: Action для анализа первопричин

**В Ontology:**

1. Создать **object type** для первопричины:

   - **RootCause**  
     - Properties: RootCause ID, RootCause Type, Defect Type, Impact Score, Frequency, Status

2. Создать **Ontology Action** для первопричины:

   - **analyzeRootCause**:
     - Action: создать новую первопричину (RootCause ID, RootCause Type, Defect Type, Impact Score, Frequency)
     - Action: установить статус `Planned`
     - Action: записать в audit log

**В Foundry:**

```yaml
Action: analyzeRootCause
Parameters:
  - RootCause ID: string
  - RootCause Type: string
  - Defect Type: string
  - Impact Score: number
  - Frequency: number
Effects:
  - Создать RootCause
  - Set Status = 'Planned'
  - Write audit log
```

**Корректирующее действие:**

- **analyzeRootCause** — это корректирующее действие для фазы **Analyze**: фиксирует анализ первопричин в машиночитаемом виде.

***

## Шаг 4. Improve: Action для улучшения процесса

**В Ontology:**

1. Создать **object type** для улучшения:

   - **Improvement**  
     - Properties: Improvement ID, Improvement Type, Impact Sigma, Impact Time, Impact Cost, Status, ApprovedBy, ApprovedDate

2. Создать **Ontology Action** для улучшения:

   - **improveProcess**:
     - Action: создать новое улучшение (Improvement ID, Improvement Type, Impact Sigma, Impact Time, Impact Cost)
     - Action: установить статус `Planned`
     - Action: отправить на approval (Approval Workflow)
     - Action: записать в audit log

3. Создать **Ontology Action** для approval:

   - **approveImprovement**:
     - Action: установить статус `Approved`
     - Action: записать ApprovedBy, ApprovedDate
     - Action: записать в audit log

4. Создать **Ontology Action** для реализации:

   - **implementImprovement**:
     - Action: установить статус `In Progress`
     - Action: записать в audit log
   - **completeImprovement**:
     - Action: установить статус `Completed`
     - Action: записать в audit log

**В Foundry:**

```yaml
Action: improveProcess
Parameters:
  - Improvement ID: string
  - Improvement Type: string
  - Impact Sigma: number
  - Impact Time: number
  - Impact Cost: number
Effects:
  - Создать Improvement
  - Set Status = 'Planned'
  - Send to Approval Workflow
  - Write audit log

Action: approveImprovement
Parameters:
  - Improvement ID: string
  - ApprovedBy: string
Effects:
  - Set Status = 'Approved'
  - Set ApprovedBy = ApprovedBy
  - Set ApprovedDate = Today
  - Write audit log

Action: implementImprovement
Parameters:
  - Improvement ID: string
Effects:
  - Set Status = 'In Progress'
  - Write audit log

Action: completeImprovement
Parameters:
  - Improvement ID: string
Effects:
  - Set Status = 'Completed'
  - Write audit log
```

**Корректирующее действие:**

- **improveProcess** — это корректирующее действие для фазы **Improve**: фиксирует улучшение в машиночитаемом виде.
- **approveImprovement** — это корректирующее действие для approval workflow.
- **implementImprovement** — это корректирующее действие для реализации.
- **completeImprovement** — это корректирующее действие для завершения.

***

## Шаг 5. Control: Action для контроля качества

**В Ontology:**

1. Создать **object type** для контроля:

   - **Control**  
     - Properties: Control ID, Control Type, Target Sigma Level, Current Sigma Level, Status, MonitoredBy, MonitorDate

2. Создать **Ontology Action** для контроля:

   - **monitorControl**:
     - Action: обновить Current Sigma Level
     - Action: если Current Sigma Level < Target Sigma Level → установить статус `Blocked`
     - Action: если Current Sigma Level >= Target Sigma Level → установить статус `Completed`
     - Action: записать MonitoredBy, MonitorDate
     - Action: записать в audit log

**В Foundry:**

```yaml
Action: monitorControl
Parameters:
  - Control ID: string
  - Current Sigma Level: number
Effects:
  - Set Current Sigma Level = Current Sigma Level
  - If Current Sigma Level < Target Sigma Level:
      - Set Status = 'Blocked'
  - If Current Sigma Level >= Target Sigma Level:
      - Set Status = 'Completed'
  - Set MonitoredBy = User
  - Set MonitorDate = Today
  - Write audit log
```

**Корректирующее действие:**

- **monitorControl** — это корректирующее действие для фазы **Control**: фиксирует контроль в машиночитаемом виде.

***

## Пример: Ontology Actions для корректирующих действий в DMAIC

### Контекст

В **foundry** (литейное производство) выявлен высокий процент **sand drop defects** (64% всех дефектов) → высокий rejection rate (20%) → низкий sigma level (2.98). [repository.ppns.ac](http://repository.ppns.ac.id/5043/)

Цель: поднять sigma level от **2.98 до 3.00** через корректирующие действия в DMAIC.

***

### Action: defineProblem (Define)

```json
{
  "Problem ID": "P001",
  "Problem Name": "High sand drop defect rate",
  "Defect Type": "sand drop",
  "Rejection Rate": 20,
  "Sigma Level": 2.98,
  "Status": "Planned"
}
```

**Корректирующее действие:**

- **defineProblem** — фиксирует проблему: `Rejection Rate = 20`, `Sigma Level = 2.98`.

***

### Action: measureDefect (Measure)

```json
{
  "Defect ID": "D001",
  "Defect Type": "sand drop",
  "Count": 159,
  "Date": "2025-01-15",
  "DPMO": 69178,
  "Sigma Level": 2.98
}
```

**Корректирующее действие:**

- **measureDefect** — фиксирует измерение: `Count = 159`, `DPMO = 69178`, `Sigma Level = 2.98`.

***

### Action: analyzeRootCause (Analyze)

```json
{
  "RootCause ID": "RC001",
  "RootCause Type": "improper ramming",
  "Defect Type": "sand drop",
  "Impact Score": 8,
  "Frequency": 64,
  "Status": "Planned"
}
```

**Корректирующее действие:**

- **analyzeRootCause** — фиксирует анализ: `RootCause Type = improper ramming`, `Impact Score = 8`, `Frequency = 64`.

***

### Action: improveProcess (Improve)

```json
{
  "Improvement ID": "I001",
  "Improvement Type": "Kaizen 5S",
  "Impact Sigma": 0.4,
  "Impact Time": 8,
  "Impact Cost": 5000,
  "Status": "Planned"
}
```

**Корректирующее действие:**

- **improveProcess** — фиксирует улучшение: `Improvement Type = Kaizen 5S`, `Impact Sigma = 0.4`, `Impact Time = 8`, `Impact Cost = 5000`.

***

### Action: monitorControl (Control)

```json
{
  "Control ID": "C001",
  "Control Type": "machining order form",
  "Target Sigma Level": 3.00,
  "Current Sigma Level": 3.00,
  "Status": "Completed",
  "MonitoredBy": "User",
  "MonitorDate": "2025-01-20"
}
```

**Корректирующее действие:**

- **monitorControl** — фиксирует контроль: `Target Sigma Level = 3.00`, `Current Sigma Level = 3.00` → `Status = Completed`.

***

## Схема: Ontology Actions для корректирующих действий в DMAIC

```text
┌────────────────────────────────────────────────────────────────────┐
│                        DMAIC PHASES                                │
│  Define → Measure → Analyze → Improve → Control                   │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                   ONTOLOGY ACTIONS                                 │
│  defineProblem → measureDefect → analyzeRootCause                  │
│  → improveProcess → approveImprovement → implementImprovement      │
│  → completeImprovement → monitorControl                            │
└────────────────────────────────────────────────────────────────────┘
                               │
                               ▼
┌────────────────────────────────────────────────────────────────────┐
│                    CORRECTIVE ACTIONS                              │
│  - Проблема: Rejection Rate = 20, Sigma Level = 2.98              │
│  - Дефект: Count = 159, DPMO = 69178, Sigma Level = 2.98         │
│  - Первопричина: RootCause Type = improper ramming, Impact = 8    │
│  - Улучшение: Kaizen 5S, Impact Sigma = 0.4, Time = 8, Cost = 5000│
│  - Контроль: Target Sigma = 3.00, Current Sigma = 3.00 → Completed│
└────────────────────────────────────────────────────────────────────┘
```

***

## Ключевая идея

**Ontology Actions в Foundry** — это **операционные действия**, которые:

- запускаются из объектов онтологии;
- меняют значения свойств объектов;
- записываются в back systems (SAP, ERP, CRM);
- отслеживаются в audit logs;
- требуют approval workflow;
- могут быть автоматическими или ручными.

**Корректирующие действия в DMAIC** — это действия, которые:

- устраняют первопричины проблем (root causes);
- улучшают процессы (process improvement);
- контролируют качество (quality control);
- измеряют результат (result measurement);
- документируют улучшения (improvement documentation).

**Интеграция Ontology Actions с корректирующими действиями в DMAIC** — это **операционная интеграция**, которая делает онтологию не просто семантической, а **операционно-управляющей качеством процессов**.

***

## Короткая формулировка для презентации

**В Foundry Ontology Actions интегрируются с корректирующими действиями в DMAIC через:**

1. **Define**: Action `defineProblem` (Problem ID, Problem Name, Defect Type, Rejection Rate, Sigma Level).
2. **Measure**: Action `measureDefect` (Defect ID, Defect Type, Count, Date, DPMO, Sigma Level).
3. **Analyze**: Action `analyzeRootCause` (RootCause ID, RootCause Type, Defect Type, Impact Score, Frequency).
4. **Improve**: Actions `improveProcess`, `approveImprovement`, `implementImprovement`, `completeImprovement` (Improvement ID, Improvement Type, Impact Sigma, Impact Time, Impact Cost, Status).
5. **Control**: Action `monitorControl` (Control ID, Control Type, Target Sigma Level, Current Sigma Level, Status, MonitoredBy, MonitorDate).

**В Semantic-OpEx это operational layer**, который участвует в Lean, Six Sigma, Kaizen, 5S, FMEA.
