### structure

### 1
Data Governance (DG) не имеет фиксированного числа направлений — их количество может варьироваться в зависимости от специфики организации, её целей и зрелости процессов управления данными. В разных источниках упоминаются разные ключевые компоненты и области фокуса, но обычно они включают стратегическое планирование, нормативное соответствие, управление качеством данных, распределение ответственности, стандартизацию, контроль доступа и другие аспекты. [```12```](https://dataliteracy.ru/dmbok-notes-3)[```3```](https://www.ramax.ru/press-center/articles/data-governance/)[```4```](https://rt-solar.ru/products/solar_dag/blog/5677/)

Например, в DAMA-DMBOK среди компонентов системы Data Governance упоминаются:
* стратегия;
* нормативно-правовое соответствие;
* политика руководства данными;
* управление проблемными вопросами;
* стандарты и качество;
* проекты по управлению данными;
* надзор;
* оценка информационных активов. [```12```](https://dataliteracy.ru/dmbok-notes-3)

В других источниках к ключевым направлениям могут относить:
* создание и поддержание бизнес-глоссария (единого словаря терминов); [```11```](https://bigdataschool.ru/data-governance/data-governance-which-working/)[```2```](https://sberanalytics.ru/blog/data-governance)
* управление метаданными (описание данных, их происхождение и связи); [```11```](https://bigdataschool.ru/data-governance/data-governance-which-working/)[```2```](https://sberanalytics.ru/blog/data-governance)
* управление доступом к данным (определение прав, контроль использования); [```11```](https://bigdataschool.ru/data-governance/data-governance-which-working/)[```2```](https://sberanalytics.ru/blog/data-governance)
* обеспечение качества данных (выявление и исправление ошибок, профилактика проблем); [```11```](https://bigdataschool.ru/data-governance/data-governance-which-working/)[```2```](https://sberanalytics.ru/blog/data-governance)
* соответствие регуляторным требованиям (например, GDPR, ФЗ-152); [```3```](https://www.ramax.ru/press-center/articles/data-governance/)
* управление жизненным циклом данных (от создания до архивирования); [```3```](https://www.ramax.ru/press-center/articles/data-governance/)
* мониторинг и аудит процессов управления данными; [```3```](https://www.ramax.ru/press-center/articles/data-governance/)
* внедрение инструментов автоматизации для контроля и управления данными. [```1```](https://www.stibosystems.com/blog/data-governance-trends)[```3```](https://www.ramax.ru/press-center/articles/data-governance/)

В 2026 году среди трендов в Data Governance также выделяют интеграцию ИИ, автоматизацию процессов, управление мастер-данными, продуктивизацию данных и облачные вычисления. [```1```](https://www.stibosystems.com/blog/data-governance-trends)

## Что ещё относится к дата-инженерии

Data Engineering — это область, связанная с созданием инфраструктуры для сбора, хранения, обработки и передачи данных, чтобы сделать их доступными и пригодными для анализа, машинного обучения и других задач. Помимо Data Governance, к дата-инженерии относятся, например:

1. **ETL-процессы** (Extract, Transform, Load — извлечение, преобразование, загрузка данных). Дата-инженеры разрабатывают и поддерживают конвейеры для автоматического перемещения данных из источников в целевые хранилища, при этом очищая и нормализуя их. [```6```](https://postupi.online/professiya/inzhener-dannyh-data-engineer/)[```14```](https://habr.com/ru/articles/743308/)[```15```](https://skillbox.ru/media/code/data-engineer-kto-eto-takoy-chem-zanimaetsya-kak-im-stat/)

2. **Проектирование и управление хранилищами данных** (data warehouses, data lakes). Специалисты выбирают подходящие системы хранения (реляционные или нереляционные базы данных, облачные платформы), оптимизируют их структуру и обеспечивают масштабируемость. [```6```](https://postupi.online/professiya/inzhener-dannyh-data-engineer/)[```7```](https://netology.ru/blog/data-engineer)[```9```](https://career.hh.ru/article/kto-takoj-data-engineer-obzor-professii-zadach-i-zarplat)

3. **Работа с большими данными (Big Data)**. Использование технологий и инструментов для обработки и анализа больших объёмов данных (Hadoop, Spark, Apache Kafka и др.). [```6```](https://postupi.online/professiya/inzhener-dannyh-data-engineer/)[```7```](https://netology.ru/blog/data-engineer)

4. **Создание конвейеров данных (data pipelines)**. Автоматизация потоков данных между системами, обеспечение их непрерывного движения от источников к целевым системам. [```6```](https://postupi.online/professiya/inzhener-dannyh-data-engineer/)[```14```](https://habr.com/ru/articles/743308/)

5. **Оптимизация производительности**. Настройка запросов и процессов обработки данных для ускорения доступа к информации, включая создание индексов, оптимизацию параметров систем хранения. [```6```](https://postupi.online/professiya/inzhener-dannyh-data-engineer/)

6. **Обеспечение безопасности данных**. Внедрение механизмов аутентификации, авторизации, шифрования для защиты данных от несанкционированного доступа. [```6```](https://postupi.online/professiya/inzhener-dannyh-data-engineer/)

7. **Мониторинг и управление данными**. Отслеживание работоспособности системы, нагрузки на инфраструктуру, создание резервных копий данных и восстановление информации при необходимости. [```6```](https://postupi.online/professiya/inzhener-dannyh-data-engineer/)

8. **Работа с облачными платформами** (AWS, Google Cloud, Яндекс Облако и др.) для развёртывания и масштабирования систем. [```7```](https://netology.ru/blog/data-engineer)

9. **Использование инструментов для контейнеризации и оркестрации** (Docker, Kubernetes) для управления микросервисной архитектурой. [```7```](https://netology.ru/blog/data-engineer)

10. **Интеграция данных из различных источников**. Обеспечение единого источника истины путём объединения данных из разных систем, API, файлов и других источников. [```6```](https://postupi.online/professiya/inzhener-dannyh-data-engineer/)[```7```](https://netology.ru/blog/data-engineer)

Таким образом, Data Governance фокусируется на стратегическом управлении данными, политике, распределении ответственности и контроле, а дата-инженерия — на технической реализации инфраструктуры для работы с данными. Эти области дополняют друг друга, но решают разные задачи.

## 2
В «колесе» DAMA-DMBOK (Data Management Body of Knowledge) отражены ключевые компоненты Data Governance, но важно понимать, что эта модель представляет собой более широкую структуру управления данными, где Data Governance выступает центральным элементом, связывающим другие области знаний. [```2```](https://www.ovaledge.com/blog/dama-dmbok-data-governance-framework)[```4```](https://atlan.com/dama-dmbok-framework/)

## Структура «колеса» DAMA-DMBOK

«Колесо» DAMA-DMBOK визуально представляет фреймворк управления данными. В центре этого колеса находится **Data Governance** (управление данными), которое выступает в роли контрольного слоя. Оно определяет права принятия решений, политики, стандарты и ответственность. Вокруг центра расположены **11 ключевых областей знаний** (knowledge areas), которые поддерживают и дополняют управление данными. К ним относятся:
* Data Architecture (архитектура данных);
* Data Modeling and Design (моделирование и проектирование данных);
* Data Storage and Operations (хранение и операции с данными);
* Data Security (безопасность данных);
* Data Integration and Interoperability (интеграция и совместимость данных);
* Data Quality Management (управление качеством данных);
* Reference and Master Data (эталонные и мастер-данные);
* Data Warehousing and Business Intelligence (хранилища данных и бизнес-аналитика);
* Metadata Management (управление метаданными);
* Data Lifecycle Management (управление жизненным циклом данных). [```1```](https://labs.sogeti.com/data-governance-frameworks-the-dama-dmbok/)

Каждая из этих областей имеет свои практики, но ни одна не существует изолированно — они взаимосвязаны. [```2```](https://www.ovaledge.com/blog/dama-dmbok-data-governance-framework)

## Компоненты Data Governance в DAMA-DMBOK

В рамках Data Governance в DAMA-DMBOK акцентируется внимание на следующих аспектах:
* **Accountability** (подотчётность) — назначение ролей и ответственности за владение данными и их управление. [```1```](https://labs.sogeti.com/data-governance-frameworks-the-dama-dmbok/)
* **Policies and Standards** (политики и стандарты) — определение правил управления данными для обеспечения соответствия требованиям и согласованности. [```1```](https://labs.sogeti.com/data-governance-frameworks-the-dama-dmbok/)
* **Decision Rights** (права на принятие решений) — установление полномочий для принятия решений, связанных с данными. [```1```](https://labs.sogeti.com/data-governance-frameworks-the-dama-dmbok/)
* **Performance Metrics** (метрики эффективности) — измерение результативности управления данными и его влияния на цели организации. [```1```](https://labs.sogeti.com/data-governance-frameworks-the-dama-dmbok/)

Также в DAMA-DMBOK определяются такие роли, как **data owners** (владельцы данных), **data stewards** (кураторы данных) и **data custodians** (хранители данных), что способствует чёткому распределению ответственности. [```13```](https://www.kellton.com/kellton-tech-blog/popular-data-governance-frameworks)[```2```](https://www.ovaledge.com/blog/dama-dmbok-data-governance-framework)

## Важные нюансы

1. **Data Governance в DAMA-DMBOK — это не отдельный фреймворк, а часть более широкой системы управления данными**. Оно задаёт стратегический контекст и принципы, которые распространяются на все остальные области. [```2```](https://www.ovaledge.com/blog/dama-dmbok-data-governance-framework)[```4```](https://atlan.com/dama-dmbok-framework/)
2. **DAMA-DMBOK не является исчерпывающим списком всех возможных аспектов Data Governance**. Фреймворк предоставляет общую структуру и лучшие практики, но реализация может требовать адаптации под конкретные потребности организации, отрасли, регуляторные требования и технологические условия. [```6```](https://labs.sogeti.com/data-governance-frameworks-a-comparison/)[```4```](https://atlan.com/dama-dmbok-framework/)
3. **В DAMA-DMBOK нет детальных инструкций по реализации** — это скорее принципы и рекомендации, а не пошаговый план действий. Организации самостоятельно адаптируют фреймворк, добавляя специфические процессы, инструменты и метрики. [```7```](https://data-pilot.com/blog/data-governance-frameworks/)[```12```](https://www.ovaledge.com/blog/top-data-governance-frameworks)
4. **Существуют и другие фреймворки Data Governance** (например, DCAM, ISO/IEC 38505, DGI), которые могут дополнять или заменять отдельные аспекты DAMA-DMBOK в зависимости от целей и контекста. [```6```](https://labs.sogeti.com/data-governance-frameworks-a-comparison/)[```10```](https://dataworkers.io/resources/data-governance-frameworks/)[```11```](https://www.atrocore.com/en/blog/data-governance-frameworks)

Таким образом, хотя «колесо» DAMA-DMBOK включает ключевые элементы Data Governance, оно не охватывает все возможные детали и вариации, которые могут возникнуть в конкретной организации. Фреймворк служит основой, которую нужно адаптировать и дополнять с учётом специфики бизнеса и внешних требований.

### 2
В «колесе» DAMA-DMBOK действительно 11 областей знаний (knowledge areas), которые охватывают ключевые аспекты управления данными. Data Governance выступает центральным элементом этой модели, задавая стратегический контекст и принципы для всех остальных областей. Однако в DAMA-DMBOK не упоминается о 10 компонентах Data Governance — в рамках этой модели акцент делается на нескольких ключевых аспектах, которые формируют основу управления данными. [```1```](https://www.osp.ru/articles/2025/0307/13059243)[```11```](https://labs.sogeti.com/data-governance-frameworks-the-dama-dmbok/)[```3```](https://corpinfosys.ru/archive/2024/issue-28/280-2024-28-damadmbok)[```12```](https://www.ovaledge.com/blog/dama-dmbok-data-governance-framework)

## Структура «колеса» DAMA-DMBOK

11 областей знаний включают:
* Data Governance (управление данными);
* Data Architecture (архитектура данных);
* Data Modeling and Design (моделирование и проектирование данных);
* Data Storage and Operations (хранение и операции с данными);
* Data Security (безопасность данных);
* Data Integration and Interoperability (интеграция и совместимость данных);
* Data Quality Management (управление качеством данных);
* Reference and Master Data (эталонные и мастер-данные);
* Data Warehousing and Business Intelligence (хранилища данных и бизнес-аналитика);
* Metadata Management (управление метаданными);
* Data Lifecycle Management (управление жизненным циклом данных). [```11```](https://labs.sogeti.com/data-governance-frameworks-the-dama-dmbok/)[```2```](https://www.damadmbok.org/copy-of-about-dama-dmbok)

## Data Governance в DAMA-DMBOK

Data Governance в этой модели фокусируется на следующих ключевых элементах:
* **Accountability (подотчётность)** — назначение ролей и ответственности за владение данными и их управление. [```11```](https://labs.sogeti.com/data-governance-frameworks-the-dama-dmbok/)
* **Policies and Standards (политики и стандарты)** — определение правил управления данными для обеспечения соответствия требованиям и согласованности. [```11```](https://labs.sogeti.com/data-governance-frameworks-the-dama-dmbok/)
* **Decision Rights (права на принятие решений)** — установление полномочий для принятия решений, связанных с данными. [```11```](https://labs.sogeti.com/data-governance-frameworks-the-dama-dmbok/)
* **Performance Metrics (метрики эффективности)** — измерение результативности управления данными и его влияния на цели организации. [```11```](https://labs.sogeti.com/data-governance-frameworks-the-dama-dmbok/)

Также в DAMA-DMBOK определяются роли, такие как data owners (владельцы данных), data stewards (кураторы данных) и data custodians (хранители данных), что способствует чёткому распределению ответственности. [```6```](https://sberanalytics.ru/blog/data-governance)[```12```](https://www.ovaledge.com/blog/dama-dmbok-data-governance-framework)

## Data Governance и Data Management: различия

Data Governance и Data Management — это не синонимы, а дополняющие друг друга концепции. [```6```](https://sberanalytics.ru/blog/data-governance)[```7```](https://www.geeksforgeeks.org/software-engineering/difference-between-data-management-and-data-governance/)

| Критерий | Data Governance | Data Management |
|---|---|---|
| **Фокус** | Стратегический: установление правил, политик, стандартов. | Операционный: реализация процессов сбора, хранения, обработки, защиты и использования данных. [```6```](https://sberanalytics.ru/blog/data-governance)[```7```](https://www.geeksforgeeks.org/software-engineering/difference-between-data-management-and-data-governance/) |
| **Цель** | Создание контролируемой среды для использования данных, обеспечение качества, согласованности и соответствия нормам. | Оптимизация систем данных для эффективности и доступности. [```9```](https://www.adverity.com/blog/data-management-vs.-data-governance-understanding-the-key-differences) |
| **Деятельность** | Разработка политик, мониторинг соответствия, установление стандартов. | Хранение, резервное копирование, восстановление, контроль качества данных. [```9```](https://www.adverity.com/blog/data-management-vs.-data-governance-understanding-the-key-differences) |
| **Ответственность** | Руководство, кураторы данных, команды по соответствию нормам. | Специалисты по данным, ИТ-команды, аналитики. [```9```](https://www.adverity.com/blog/data-management-vs.-data-governance-understanding-the-key-differences) |

Data Governance можно сравнить с «блюпринтом» (проектом здания), а Data Management — с физическим строительством по этому проекту. Governance задаёт рамки и правила, а Management реализует их на практике. [```8```](https://www.informatica.com/blogs/data-governance-vs-data-management-whats-the-difference.html)

## Состав Data Management

Data Management включает в себя:
* **Data Acquisition (сбор данных)** — получение данных из различных источников и их интеграция в единый набор. [```9```](https://www.adverity.com/blog/data-management-vs.-data-governance-understanding-the-key-differences)
* **Data Storage (хранение данных)** — организация данных в базах данных и системах хранения для обеспечения доступности и безопасности. [```9```](https://www.adverity.com/blog/data-management-vs.-data-governance-understanding-the-key-differences)
* **Data Processing (обработка данных)** — преобразование данных для очистки, адаптации под конкретные нужды, подготовка к анализу или отчётности. [```9```](https://www.adverity.com/blog/data-management-vs.-data-governance-understanding-the-key-differences)
* **Data Lifecycle Management (управление жизненным циклом данных)** — контроль данных от создания до архивации или удаления, обеспечение их актуальности. [```9```](https://www.adverity.com/blog/data-management-vs.-data-governance-understanding-the-key-differences)
* **Data Backup and Recovery (резервное копирование и восстановление)** — процедуры регулярного резервного копирования данных и их восстановления при потере или повреждении. [```9```](https://www.adverity.com/blog/data-management-vs.-data-governance-understanding-the-key-differences)

## Дополнительные компоненты Data Governance

Помимо основных элементов, упомянутых в DAMA-DMBOK, в Data Governance могут включаться и другие аспекты в зависимости от специфики организации:
* **Нормативно-правовое соответствие** — обеспечение соблюдения законов и регуляторных требований (например, GDPR, ФЗ-152). [```14```](https://dataliteracy.ru/dmbok-notes-3)[```5```](https://uploads-ssl.webflow.com/5e2f2765e479669a6715b19a/5e387c3d5ca35e4311ebc6b6_DAMA-DMBOK2_fragment.pdf)
* **Управление проблемными вопросами** — выявление, эскалация и разрешение проблем, связанных с безопасностью данных, доступом, качеством, соответствием нормам и т. д.. [```14```](https://dataliteracy.ru/dmbok-notes-3)[```5```](https://uploads-ssl.webflow.com/5e2f2765e479669a6715b19a/5e387c3d5ca35e4311ebc6b6_DAMA-DMBOK2_fragment.pdf)
* **Стратегия управления данными** — определение долгосрочных целей и направлений развития управления данными в организации. [```14```](https://dataliteracy.ru/dmbok-notes-3)[```5```](https://uploads-ssl.webflow.com/5e2f2765e479669a6715b19a/5e387c3d5ca35e4311ebc6b6_DAMA-DMBOK2_fragment.pdf)
* **Бизнес-глоссарий** — централизованная система согласованных определений бизнес-терминов, связанных с данными. [```6```](https://sberanalytics.ru/blog/data-governance)[```14```](https://dataliteracy.ru/dmbok-notes-3)
* **Метрики и отчётность** — система показателей для оценки эффективности управления данными и демонстрации бизнес-ценности. [```14```](https://dataliteracy.ru/dmbok-notes-3)[```5```](https://uploads-ssl.webflow.com/5e2f2765e479669a6715b19a/5e387c3d5ca35e4311ebc6b6_DAMA-DMBOK2_fragment.pdf)
* **Культура управления данными** — формирование осознания важности данных как актива и продвижение принципов ответственного отношения к ним среди сотрудников.

Эти компоненты могут дополнять базовую модель DAMA-DMBOK, адаптируясь под конкретные потребности организации, отрасль, технологические возможности и уровень зрелости управления данными.

### 3
В рамках фреймворка DAMA-DMBOK 11 областей знаний (knowledge areas) охватывают ключевые аспекты управления данными. Каждая из них включает конкретные компоненты и практики. [```1```](https://habr.com/ru/articles/1028864/)[```11```](https://www.optimizemro.com/blog/dama-dmbok-a-comprehensive-framework-for-data-management/)[```14```](https://www.castordoc.com/data-strategy/dama-dmbok-framework-what-it-is-and-how-to-adopt-it)

## 1. Data Governance (управление данными)

**Компоненты:**
* установление политик и стандартов управления данными; [```11```](https://www.optimizemro.com/blog/dama-dmbok-a-comprehensive-framework-for-data-management/)
* определение прав на принятие решений (decision rights); [```1```](https://habr.com/ru/articles/1028864/)
* распределение ответственности (accountability) между ролями (data owners, data stewards, data custodians); [```1```](https://habr.com/ru/articles/1028864/)
* мониторинг и измерение эффективности через KPI (performance metrics); [```1```](https://habr.com/ru/articles/1028864/)
* согласование с бизнес-стратегией и регуляторными требованиями;
* управление рисками и соответствие нормам (compliance). [```14```](https://www.castordoc.com/data-strategy/dama-dmbok-framework-what-it-is-and-how-to-adopt-it)

## 2. Data Architecture (архитектура данных)

**Компоненты:**
* разработка корпоративной архитектуры данных, включающей концептуальную, логическую и физическую модели; [```2```](https://cdto.work/wp-content/uploads/2021/11/4.upravlenie-dannymi.pdf)
* определение структуры данных и процессов их управления на протяжении жизненного цикла; [```2```](https://cdto.work/wp-content/uploads/2021/11/4.upravlenie-dannymi.pdf)
* согласование с бизнес-архитектурой и ИТ-инфраструктурой; [```2```](https://cdto.work/wp-content/uploads/2021/11/4.upravlenie-dannymi.pdf)
* спецификация потоков данных (текущее, целевое и переходное состояния); [```2```](https://cdto.work/wp-content/uploads/2021/11/4.upravlenie-dannymi.pdf)
* использование стандартов и шаблонов (например, Zachman Framework, TOGAF); [```4```](https://nexalab.io/blog/what-is-data-architecture/)
* управление архитектурными решениями, инструментами и жизненным циклом. [```2```](https://cdto.work/wp-content/uploads/2021/11/4.upravlenie-dannymi.pdf)

## 3. Data Modeling and Design (моделирование и проектирование данных)

**Компоненты:**
* создание концептуальных, логических и физических моделей данных; [```6```](https://www.dama-mn.org/Data-Modeling-Design)[```8```](https://bigdataschool.ru/data-governance/data-modeling-from-design-to-implementation/)
* использование методов моделирования: Entity-Relationship (ER), объектно-ориентированное, Data Vault, Anchor Modeling и др.; [```6```](https://www.dama-mn.org/Data-Modeling-Design)[```8```](https://bigdataschool.ru/data-governance/data-modeling-from-design-to-implementation/)
* нормализация и денормализация данных; [```6```](https://www.dama-mn.org/Data-Modeling-Design)[```8```](https://bigdataschool.ru/data-governance/data-modeling-from-design-to-implementation/)
* разработка бизнес-глоссариев и стандартов именования;
* профилирование данных для валидации моделей; [```17```](https://datafinder.ru/files/books/DG/DAMA-DMBOK2-Framework-v2.pdf)
* инструменты: ER/Studio, ERwin, dbt, Lucidchart. [```6```](https://www.dama-mn.org/Data-Modeling-Design)

## 4. Data Storage and Operations (хранение и операции с данными)

**Компоненты:**
* управление физическим и виртуальным хранением данных; [```10```](https://www.dama-mn.org/Data-Storage-Operations)
* использование СУБД (DBMS), облачных и гибридных инфраструктур; [```10```](https://www.dama-mn.org/Data-Storage-Operations)
* резервное копирование и восстановление данных; [```10```](https://www.dama-mn.org/Data-Storage-Operations)
* мониторинг производительности и оптимизация; [```10```](https://www.dama-mn.org/Data-Storage-Operations)
* архивация и управление сроком хранения (data retention policies); [```10```](https://www.dama-mn.org/Data-Storage-Operations)
* инструменты: PostgreSQL, Oracle DB, MySQL, Snowflake, MongoDB. [```10```](https://www.dama-mn.org/Data-Storage-Operations)

## 5. Data Security (безопасность данных)

**Компоненты:**
* защита от несанкционированного доступа, обеспечение конфиденциальности и целостности данных; [```13```](https://damarmc.org/news/13371746)[```15```](https://dataliteracy.ru/dmbok-notes-7)
* классификация данных и определение чувствительных категорий; [```15```](https://dataliteracy.ru/dmbok-notes-7)
* внедрение доступа на основе ролей и аутентификации;
* шифрование, межсетевые экраны (firewalls), VPN; [```15```](https://dataliteracy.ru/dmbok-notes-7)
* соответствие регуляторным требованиям (GDPR, CCPA и др.); [```18```](https://www.ovaledge.com/blog/dama-dmbok-data-governance-framework)
* мониторинг и аудит доступа к данным.

## 6. Data Integration and Interoperability (интеграция и интероперабельность данных)

**Компоненты:**
* процессы ETL (Extract, Transform, Load) и ELT (Extract, Load, Transform); [```16```](https://dataliteracy.ru/dmbok-notes-8)
* использование корпоративных шин данных (ESB), серверов виртуализации данных; [```16```](https://dataliteracy.ru/dmbok-notes-8)
* мэппинг исходных структур данных на целевые; [```16```](https://dataliteracy.ru/dmbok-notes-8)
* миграция и конвертация данных;
* поддержка сложных событий и потоков данных;
* обеспечение совместимости между системами и источниками данных. [```16```](https://dataliteracy.ru/dmbok-notes-8)

## 7. Document and Content Management (управление документами и контентом)

**Компоненты:**
* управление неструктурированными данными (электронные файлы, мультимедиа, физические записи); [```17```](https://datafinder.ru/files/books/DG/DAMA-DMBOK2-Framework-v2.pdf)
* использование систем ECM (Enterprise Content Management), DMS (Document Management Systems), CMS (Content Management Systems); [```1```](https://habr.com/ru/articles/1028864/)
* классификация, тегирование, индексирование контента;
* обеспечение соответствия регуляторным требованиям (например, в области архивного хранения);
* интеграция с структурированными данными для аналитики. [```17```](https://datafinder.ru/files/books/DG/DAMA-DMBOK2-Framework-v2.pdf)

## 8. Reference and Master Data (справочные и мастер-данные)

**Компоненты:**
* управление критическими данными, которые используются в нескольких бизнес-процессах; [```1```](https://habr.com/ru/articles/1028864/)
* ведение мастер-данных (бизнес-сущности) и справочных данных (списки значений); [```1```](https://habr.com/ru/articles/1028864/)
* использование систем MDM (Master Data Management) и RDM (Reference Data Management); [```1```](https://habr.com/ru/articles/1028864/)
* определение систем/источников данных (system of record); [```17```](https://datafinder.ru/files/books/DG/DAMA-DMBOK2-Framework-v2.pdf)
* управление бизнес-правилами для согласования данных. [```17```](https://datafinder.ru/files/books/DG/DAMA-DMBOK2-Framework-v2.pdf)

## 9. Data Warehousing and Business Intelligence (хранилища данных и бизнес-аналитика)

**Компоненты:**
* проектирование и внедрение хранилищ данных (Data Warehouse); [```11```](https://www.optimizemro.com/blog/dama-dmbok-a-comprehensive-framework-for-data-management/)
* использование инструментов BI для анализа, отчётности и визуализации данных; [```11```](https://www.optimizemro.com/blog/dama-dmbok-a-comprehensive-framework-for-data-management/)
* поддержка аналитических процессов и принятия решений;
* реализация подходов Kimball (звездообразная схема) и Inmon (нормализованные модели); [```3```](https://www.dvbi.ru/portals/0/DOCUMENTS_SHARE/BOOKS/DATA%20GOVERNANCE/DAMA-DMBOK2-Framework-v2.pdf)
* интеграция с большими данными и машинным обучением.

## 10. Metadata Management (управление метаданными)

**Компоненты:**
* сбор, категоризация, поддержание и управление «данными о данных»; [```1```](https://habr.com/ru/articles/1028864/)[```11```](https://www.optimizemro.com/blog/dama-dmbok-a-comprehensive-framework-for-data-management/)
* классификация метаданных: бизнес-метаданные (бизнес-правила, расчёты), технические (структуры баз данных, ER-диаграммы), операционные (журналы обработки); [```1```](https://habr.com/ru/articles/1028864/)
* использование метаданных для управления жизненным циклом данных, интеграции, качества данных;
* инструменты для управления метаданными и каталогизации.

## 11. Data Quality Management (управление качеством данных)

**Компоненты:**
* измерение и оценка качества данных через профилирование, аудит и метрики; [```11```](https://www.optimizemro.com/blog/dama-dmbok-a-comprehensive-framework-for-data-management/)
* определение критериев качества: точность (accuracy), полнота (completeness), согласованность (consistency), своевременность (timeliness), валидность (validity), уникальность (uniqueness); [```11```](https://www.optimizemro.com/blog/dama-dmbok-a-comprehensive-framework-for-data-management/)
* выявление и устранение проблем (очистка данных, обогащение);
* установление процессов мониторинга и улучшения качества данных;
* внедрение стандартов и методик для поддержания качества данных на протяжении жизненного цикла.

Эти компоненты взаимосвязаны, и эффективное управление данными требует их согласованного применения в рамках общей стратегии организации. [```1```](https://habr.com/ru/articles/1028864/)[```7```](https://atlan.com/dama-dmbok-framework/)[```14```](https://www.castordoc.com/data-strategy/dama-dmbok-framework-what-it-is-and-how-to-adopt-it)

### 3a

Описание всех 11 областей знаний DAMA‑DMBOK с компонентами и соответствующими англоязычными терминами:

## 1. Data Governance (управление данными)

**Компоненты:**
* установление политик и стандартов управления данными — *Data Governance Policies and Standards*;
* определение прав на принятие решений — *Decision Rights*;
* распределение ответственности между ролями — *Accountability*;
* роли: владельцы данных, кураторы данных, хранители данных — *Data Owners, Data Stewards, Data Custodians*;
* мониторинг и измерение эффективности через KPI — *Performance Metrics and Key Performance Indicators (KPIs)*;
* согласование с бизнес‑стратегией и регуляторными требованиями — *Alignment with Business Strategy and Regulatory Requirements*;
* управление рисками и соответствие нормам — *Risk Management and Compliance*.

## 2. Data Architecture (архитектура данных)

**Компоненты:**
* разработка корпоративной архитектуры данных — *Enterprise Data Architecture*;
* концептуальная, логическая и физическая модели данных — *Conceptual, Logical, and Physical Data Models*;
* структура данных и процессы их управления — *Data Structure and Management Processes*;
* согласование с бизнес‑архитектурой и ИТ‑инфраструктурой — *Alignment with Business Architecture and IT Infrastructure*;
* спецификация потоков данных (текущее, целевое и переходное состояния) — *Data Flow Specification (As‑Is, To‑Be, and Transition States)*;
* стандарты и шаблоны (Zachman Framework, TOGAF) — *Standards and Frameworks (Zachman Framework, The Open Group Architecture Framework — TOGAF)*;
* управление архитектурными решениями, инструментами и жизненным циклом — *Management of Architectural Decisions, Tools, and Lifecycle*.

## 3. Data Modeling and Design (моделирование и проектирование данных)

**Компоненты:**
* концептуальные, логические и физические модели данных — *Conceptual, Logical, and Physical Data Models*;
* методы моделирования: ER, объектно‑ориентированное, Data Vault, Anchor Modeling — *Modeling Techniques: Entity‑Relationship (ER), Object‑Oriented, Data Vault, Anchor Modeling*;
* нормализация и денормализация данных — *Normalization and Denormalization*;
* бизнес‑глоссарии и стандарты именования — *Business Glossaries and Naming Standards*;
* профилирование данных для валидации моделей — *Data Profiling for Model Validation*;
* инструменты: ER/Studio, ERwin, dbt, Lucidchart — *Tools: ER/Studio, ERwin Data Modeler, dbt (data build tool), Lucidchart*.

## 4. Data Storage and Operations (хранение и операции с данными)

**Компоненты:**
* управление физическим и виртуальным хранением данных — *Physical and Virtual Data Storage Management*;
* СУБД, облачные и гибридные инфраструктуры — *Database Management Systems (DBMS), Cloud and Hybrid Infrastructures*;
* резервное копирование и восстановление данных — *Backup and Recovery*;
* мониторинг производительности и оптимизация — *Performance Monitoring and Optimization*;
* архивация и управление сроком хранения — *Archiving and Data Retention Policies*;
* инструменты: PostgreSQL, Oracle DB, MySQL, Snowflake, MongoDB — *Tools: PostgreSQL, Oracle Database, MySQL, Snowflake, MongoDB*.

## 5. Data Security (безопасность данных)

**Компоненты:**
* защита от несанкционированного доступа, обеспечение конфиденциальности и целостности данных — *Access Control, Confidentiality, and Data Integrity*;
* классификация данных и определение чувствительных категорий — *Data Classification and Sensitive Data Identification*;
* доступ на основе ролей и аутентификация — *Role‑Based Access Control (RBAC) and Authentication*;
* шифрование, межсетевые экраны, VPN — *Encryption, Firewalls, Virtual Private Networks (VPN)*;
* соответствие регуляторным требованиям (GDPR, CCPA и др.) — *Compliance with Regulations (General Data Protection Regulation — GDPR, California Consumer Privacy Act — CCPA, etc.)*;
* мониторинг и аудит доступа к данным — *Access Monitoring and Audit*.

## 6. Data Integration and Interoperability (интеграция и интероперабельность данных)

**Компоненты:**
* процессы ETL и ELT — *Extract, Transform, Load (ETL) and Extract, Load, Transform (ELT)*;
* корпоративные шины данных, серверы виртуализации данных — *Enterprise Service Buses (ESB) and Data Virtualization Servers*;
* мэппинг исходных структур данных на целевые — *Source‑to‑Target Data Mapping*;
* миграция и конвертация данных — *Data Migration and Conversion*;
* поддержка сложных событий и потоков данных — *Complex Event Processing (CEP) and Data Streams*;
* обеспечение совместимости между системами — *System Interoperability*.

## 7. Document and Content Management (управление документами и контентом)

**Компоненты:**
* управление неструктурированными данными — *Unstructured Data Management*;
* системы ECM, DMS, CMS — *Enterprise Content Management (ECM), Document Management Systems (DMS), Content Management Systems (CMS)*;
* классификация, тегирование, индексирование контента — *Classification, Tagging, and Indexing*;
* соответствие регуляторным требованиям — *Regulatory Compliance*;
* интеграция с структурированными данными для аналитики — *Integration with Structured Data for Analytics*.

## 8. Reference and Master Data (справочные и мастер‑данные)

**Компоненты:**
* управление критическими данными — *Critical Data Management*;
* мастер‑данные (бизнес‑сущности) и справочные данные (списки значений) — *Master Data (Business Entities) and Reference Data (Value Lists)*;
* системы MDM и RDM — *Master Data Management (MDM) and Reference Data Management (RDM)*;
* системы/источники данных — *Systems of Record*;
* управление бизнес‑правилами для согласования данных — *Business Rule Management for Data Reconciliation*.

## 9. Data Warehousing and Business Intelligence (хранилища данных и бизнес‑аналитика)

**Компоненты:**
* проектирование и внедрение хранилищ данных — *Data Warehouse Design and Implementation*;
* инструменты BI для анализа, отчётности и визуализации данных — *Business Intelligence (BI) Tools for Analysis, Reporting, and Visualization*;
* поддержка аналитических процессов и принятия решений — *Support for Analytical Processes and Decision Making*;
* подходы Kimball (звездообразная схема) и Inmon (нормализованные модели) — *Kimball Approach (Star Schema) and Inmon Approach (Normalized Models)*;
* интеграция с большими данными и машинным обучением — *Integration with Big Data and Machine Learning*.

## 10. Metadata Management (управление метаданными)

**Компоненты:**
* сбор, категоризация, поддержание и управление метаданными — *Metadata Collection, Categorization, Maintenance, and Management*;
* типы метаданных: бизнес‑метаданные, технические, операционные — *Metadata Types: Business Metadata, Technical Metadata, Operational Metadata*;
* использование метаданных для управления жизненным циклом данных, интеграции, качества данных — *Use of Metadata for Data Lifecycle Management, Integration, and Quality*;
* инструменты для управления метаданными и каталогизации — *Tools for Metadata Management and Cataloging*.

## 11. Data Quality Management (управление качеством данных)

**Компоненты:**
* измерение и оценка качества данных через профилирование, аудит и метрики — *Data Quality Measurement and Assessment via Profiling, Audit, and Metrics*;
* критерии качества: точность, полнота, согласованность, своевременность, валидность, уникальность — *Quality Criteria: Accuracy, Completeness, Consistency, Timeliness, Validity, Uniqueness*;
* выявление и устранение проблем (очистка данных, обогащение) — *Issue Identification and Resolution (Data Cleansing, Enrichment)*;
* процессы мониторинга и улучшения качества данных — *Processes for Monitoring and Improving Data Quality*;
* стандарты и методики для поддержания качества данных на протяжении жизненного цикла — *Standards and Methodologies for Maintaining Data Quality Across the Lifecycle*.
