## 1
**SUMO (Suggested Upper Merged Ontology)** — это онтология верхнего уровня, созданная для формального описания базовых концептов и отношений, общих для всех предметных областей. Её разработали в рамках проекта IEEE Standard Upper Ontology (SUO) и корпорации Teknowledge. [```1```](https://www.dfki.de/fileadmin/user_upload/import/2596_resubmission-JWS-D-06-00012-1.pdf)[```6```](https://cyberleninka.ru/article/n/ontologicheskiy-podhod-k-razrabotke-adaptivnoy-modeli-kompetentsiy-i-professionalnoy-podgotovki-v-sfere-informatsionnyh-tehnologiy)[```5```](https://docs.cntd.ru/document/1303064826/titles/7E40KG)[```2```](https://new2.intuit.ru/studies/courses/1078/270/lecture/6851?page=2)

## Назначение и цели

Основная задача SUMO — служить фундаментом для компьютерных систем обработки информации. Она призвана улучшить:
* **Интероперабельность данных** — возможность разных систем «понимать» друг друга.
* **Извлечение и поиск информации**.
* **Автоматический вывод** (доказательство теорем).
* **Обработку естественного языка**.

 [```14```](https://repo.ssau.ru/jspui/bitstream/123456789/57212/1/978-5-7883-1758-8)[```2```](https://new2.intuit.ru/studies/courses/1078/270/lecture/6851?page=2)

## structure
Структура

Иерархия SUMO начинается с самого общего понятия — **Entity (Сущность)**. От него идут два главных ветви:
* **Physical (Физическое)** — всё, что имеет положение в пространстве-времени.
* **Abstract (Абстрактное)** — всё остальное (идеи, множества, утверждения и т.п.).

 [```1```](https://www.dfki.de/fileadmin/user_upload/import/2596_resubmission-JWS-D-06-00012-1.pdf)[```14```](https://repo.ssau.ru/jspui/bitstream/123456789/57212/1/978-5-7883-1758-8)

Ветвь **Physical** далее делится на два непересекающихся класса: **Object (Объект)** и **Process (Процесс)**. [```1```](https://www.dfki.de/fileadmin/user_upload/import/2596_resubmission-JWS-D-06-00012-1.pdf)[```14```](https://repo.ssau.ru/jspui/bitstream/123456789/57212/1/978-5-7883-1758-8)


[![Онтологии. Содержание онтологии - презентация онлайн](https://avatars.mds.yandex.net/i?id=9812f4babf3212c1d410c85c81060e3f_l-5282589-images-thumbs&n=13)](https://ppt-online.org/323896)

Под **Object (Объектом)** находятся, например, **ConnectedObject (СвязныйОбъект)** и **Collection (Коллекция)**. Связный объект, в свою очередь, подразделяется на непрерывные и дискретные объекты. [```14```](https://repo.ssau.ru/jspui/bitstream/123456789/57212/1/978-5-7883-1758-8)

Ветвь **Abstract** включает такие концепты, как множество, утверждение, величина, атрибут. [```14```](https://repo.ssau.ru/jspui/bitstream/123456789/57212/1/978-5-7883-1758-8)

## Состав и формализация

В SUMO около 1000 фундаментальных понятий и примерно 4000 аксиом, которые их определяют. Она включает:
* **Онтологию среднего уровня (MILO)**, интегрированную с SUMO. [```6```](https://cyberleninka.ru/article/n/ontologicheskiy-podhod-k-razrabotke-adaptivnoy-modeli-kompetentsiy-i-professionalnoy-podgotovki-v-sfere-informatsionnyh-tehnologiy)[```2```](https://new2.intuit.ru/studies/courses/1078/270/lecture/6851?page=2)
* **Отраслевые расширения** (например, для понятий «Отель» или «Организация»). [```1```](https://www.dfki.de/fileadmin/user_upload/import/2596_resubmission-JWS-D-06-00012-1.pdf)

Формально SUMO записана на языке **SUO-KIF** (упрощённый вариант KIF) и может быть транслирована в OWL Full. [```1```](https://www.dfki.de/fileadmin/user_upload/import/2596_resubmission-JWS-D-06-00012-1.pdf)

## Происхождение и источники

SUMO возникла как результат объединения различных общедоступных онтологий верхнего уровня. Среди её корней — онтология Джона Совы, модель Рассела и Норвига, аксиомы времени Джеймса Аллена, формальная теория отверстий Казати и Варци, онтология границ Барри Смита и мереотопология Николя Гуарино. [```1```](https://www.dfki.de/fileadmin/user_upload/import/2596_resubmission-JWS-D-06-00012-1.pdf)[```8```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)

## Преимущества и недостатки

**К сильным сторонам относят:**
* Ясную иерархию классов и возможность расширения. [```14```](https://repo.ssau.ru/jspui/bitstream/123456789/57212/1/978-5-7883-1758-8)[```2```](https://new2.intuit.ru/studies/courses/1078/270/lecture/6851?page=2)
* Возможность трансляции на разные языки представления знаний. [```2```](https://new2.intuit.ru/studies/courses/1078/270/lecture/6851?page=2)
* Связь с лексической базой WordNet, что упрощает работу с естественным языком. [```2```](https://new2.intuit.ru/studies/courses/1078/270/lecture/6851?page=2)[```19```](http://iitp.ru/upload/publications/6612/Ontology.pdf)
* Наличие примеров практического применения. [```2```](https://new2.intuit.ru/studies/courses/1078/270/lecture/6851?page=2)

**Среди сложностей:**
* Аксиоматизация местами страдает от смешения понятий и экземпляров, а также от представления отношений как концептов (например, BinaryRelation).
* Монолитный формат исходного кода (около 15 000 строк) усложняет работу.
* Отсутствие чёткой онтологической приверженности в некоторых частях.

 [```1```](https://www.dfki.de/fileadmin/user_upload/import/2596_resubmission-JWS-D-06-00012-1.pdf)

## Применение

SUMO используется в лингвистике, робототехнике, для интеграции данных из разных источников и в других задачах, где требуется формальное представление знаний. [```6```](https://cyberleninka.ru/article/n/ontologicheskiy-podhod-k-razrabotke-adaptivnoy-modeli-kompetentsiy-i-professionalnoy-podgotovki-v-sfere-informatsionnyh-tehnologiy)[```13```](https://zakon.ru/blog/2019/1/22/ontologii_-_osnova_yazykov_yuridicheskogo_programmirovaniya)[```5```](https://docs.cntd.ru/document/1303064826/titles/7E40KG)

Если вас интересует какой-то конкретный аспект SUMO (например, как её понятия соотносятся с DOLCE или как с ней работать), уточните — я расскажу подробнее.

## 1.1 article

С удовольствием подобрала для вас несколько ключевых статей про SUMO. Я разделила их по темам, чтобы было проще сориентироваться и выбрать то, что ближе к вашим задачам.

## О самой онтологии и её создании
* **Ian Niles, Adam Pease. «Towards a standard upper ontology»** (FOIS 2001). Это основополагающая работа — в ней авторы подробно излагают стратегию создания SUMO, обсуждают сложности и детально разбирают самые общие концепты и связи между ними. Именно с неё стоит начать, чтобы понять мотивы и архитектуру онтологии. [```8```](https://dl.acm.org/doi/10.1145/505168.505170?cookieSet=1)
* **Adam Pease, Ian Niles. «IEEE Standard Upper Ontology: A Progress Report»** (2002). Отчёт о прогрессе в разработке — полезно, чтобы отследить, как развивался проект на ранних этапах. [```14```](https://oa.upm.es/5493/1/Searching_for_a_Time_Ontology_.pdf)

## Практическое применение и интеграция
* **Robert B. Allen. «Semantic Modeling with SUMO»** (препринт). В статье на примерах показано, как использовать SUMO для семантического моделирования — в том числе для симуляций (например, переходов в моделируемом бензиновом двигателе) с применением Python. [```1```](https://www.researchgate.net/publication/7368359_Wrestling_with_SUMO_and_bio-ontologies)[```4```](https://arxiv.org/pdf/2012.15835)
* **Javier Álvez, Paqui Lucio, German Rigau. «Adimen-SUMO: Reengineering an Ontology for First-Order Reasoning»** (International Journal of Semantic Web and Information Systems, 2012). Авторы переработали часть аксиом SUMO, чтобы сделать её более удобной для систем автоматического логического вывода (например, в NLP или Semantic Web). [```5```](https://www.semanticscholar.org/paper/Adimen-SUMO%3A-Reengineering-an-Ontology-for-%C3%81lvez-Lucio/c7c7684a2fb5c9f5d194b5364671ad07296b2bba)
* **Javier Álvez, Itziar Gonzalez-Dios, German Rigau. «Applying the Closed World Assumption to SUMO-based FOL Ontologies»** (arXiv, 2018). Исследование того, как применение предположения замкнутого мира (Closed World Assumption) улучшает качество логического вывода на базе SUMO. [```10```](https://arxiv.org/pdf/1808.04620)
* **Работа о связи SUMO и WordNet**. Есть несколько публикаций о том, как лексикон WordNet сопоставляли с концептами SUMO — это важно для приложений, связанных с обработкой естественного языка. [```2```](https://arademaker.github.io/files/ontobras-2019-sumo.pdf)[```10```](https://arxiv.org/pdf/1808.04620)
* **Статья о моделировании времени в SUMO**. В ней разбирается, как в онтологии представлены временные понятия (точки, интервалы) и как они связываются с событиями. [```14```](https://oa.upm.es/5493/1/Searching_for_a_Time_Ontology_.pdf)
* **Работа о применении SUMO в геологии**. Авторы расширяли SUMO, чтобы формально описать геологическое время (на основе Международной стратиграфической шкалы), и выявили в исходной онтологии некоторые противоречия. [```2```](https://arademaker.github.io/files/ontobras-2019-sumo.pdf)
* **Исследование об интеграции SUMO с другими форматами**. Например, есть работы о трансляции SUMO (в формате SUO-KIF) в OMDoc для лучшей модульности и документирования. [```12```](https://kwarc.info/people/frabe/students/misev_bsc.pdf)
* **Работа о представлении SUMO в Grammatical Framework (GF)**. Это позволяет не только проверять консистентность онтологии с помощью системы типов, но и генерировать естественно-языковые конструкции (на английском, румынском, французском и других языках). [```3```](https://publications.lib.chalmers.se/records/fulltext/116606.pdf)

## Как искать ещё
Если захотите копнуть глубже, советую:
* Использовать **Google Scholar** и ввести «SUMO» — там собрана большая подборка цитирований основной работы и последующих исследований. [```7```](https://ontologyportal.org/Pubs.html)
* Заглянуть на **[ontologyportal.org](https://ontologyportal.org/Pubs.html)** — там есть вручную собранная подборка публикаций по теме. [```7```](https://ontologyportal.org/Pubs.html)
* Искать по ключевым словам: «SUMO integration», «SUMO reasoning», «SUMO and WordNet», «SUMO domain extension».

## 1.2
декабрь 2000
- https://en.wikipedia.org/wiki/Suggested_Upper_Merged_Ontology Первоначально SUMO была ориентирована на концепции метауровня (общие сущности, не относящиеся к конкретной предметной области), и, таким образом, естественным образом приводила к схеме категоризации для энциклопедий. Изначально Sumo разрабатывалась компанией Teknowledge Corporation.
  - https://sigma.ontologyportal.org:8080/sigma/Browse.jsp?kb=SUMO 
- https://www.wikidata.org/wiki/Q7635093

### pdf
- https://variamu.hypotheses.org/files/2014/03/SUMO-NLP-2014-03-10.pdf

### upper ontologes
- [ruwiki](https://ru.ruwiki.ru/wiki/%D0%9E%D0%BD%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%8F_%D0%B2%D1%8B%D1%81%D1%88%D0%B5%D0%B3%D0%BE_%D1%83%D1%80%D0%BE%D0%B2%D0%BD%D1%8F)
- https://trinidata.ru/files/SemanticModelDesign.pdf РУКОВОДСТВО ПО СОЗДАНИЮ И ПОДДЕРЖКЕ СЕМАНТИЧЕСКОЙ МОДЕЛИ
- https://www.isko.org/cyclo/ontologies ; https://organicdesign.nz/Foundation_ontology
- https://vcvpaiva.github.io/includes/pubs/fomi2014_7.pdf
- [ontologes in automation](https://repositum.tuwien.at/bitstream/20.500.12708/10905/2/Mueller%20Rainer%20-%202008%20-%20Ontologies%20in%20Automation.pdf)
- Некоторые проблемы широкого внедрения онтологий в IT и направления их решений. https://masters.donntu.ru/2010/fknt/bolotova/library/tez9.htm
- Best Practices of Ontology Development https://www.nist.gov/system/files/documents/2021/10/14/nist-ai-rfi-cubrc_inc_002.pdf
- lecture https://cw.fel.cvut.cz/b191/_media/courses/osw/lecture-06upperontologies-s.pdf
- r4sc-23.pdf [Deliverable D2.3: Ontologies and datasets for Energy Management System interoperability v2](https://inria.hal.science/hal-01247606/document)

### best
- https://www.ontology-of-designing.ru/article/2015_1%2815%29/5_Loukachevitch.pdf ПРОЕКТИРОВАНИЕ ЛИНГВИСТИЧЕСКИХ ОНТОЛОГИЙ ДЛЯ ИНФОРМАЦИОННЫХ СИСТЕМ В ШИРОКИХ ПРЕДМЕТНЫХ ОБЛАСТЯХ
- https://deepai.org/
- [Реализации мета-онтологических моделей](https://metatronika.wordpress.com/2017/12/12/%D1%80%D0%B5%D0%B0%D0%BB%D0%B8%D0%B7%D0%B0%D1%86%D0%B8%D0%B8-%D0%BC%D0%B5%D1%82%D0%B0-%D0%BE%D0%BD%D1%82%D0%BE%D0%BB%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D1%85-%D0%BC%D0%BE%D0%B4%D0%B5/)
