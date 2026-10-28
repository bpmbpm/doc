## 1
**SUMO (Suggested Upper Merged Ontology)** — это онтология верхнего уровня, созданная для формального описания базовых концептов и отношений, общих для всех предметных областей. Её разработали в рамках проекта IEEE Standard Upper Ontology (SUO) и корпорации Teknowledge. [```1```](https://www.dfki.de/fileadmin/user_upload/import/2596_resubmission-JWS-D-06-00012-1.pdf)[```6```](https://cyberleninka.ru/article/n/ontologicheskiy-podhod-k-razrabotke-adaptivnoy-modeli-kompetentsiy-i-professionalnoy-podgotovki-v-sfere-informatsionnyh-tehnologiy)[```5```](https://docs.cntd.ru/document/1303064826/titles/7E40KG)[```2```](https://new2.intuit.ru/studies/courses/1078/270/lecture/6851?page=2)

## Назначение и цели

Основная задача SUMO — служить фундаментом для компьютерных систем обработки информации. Она призвана улучшить:
* **Интероперабельность данных** — возможность разных систем «понимать» друг друга.
* **Извлечение и поиск информации**.
* **Автоматический вывод** (доказательство теорем).
* **Обработку естественного языка**.

 [```14```](https://repo.ssau.ru/jspui/bitstream/123456789/57212/1/978-5-7883-1758-8)[```2```](https://new2.intuit.ru/studies/courses/1078/270/lecture/6851?page=2)

## Структура

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
