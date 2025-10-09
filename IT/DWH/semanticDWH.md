### semantic DWH
см. https://github.com/bpmbpm/doc/blob/main/LD/Semantic_Layer.md

Classic DWH + Quality Mgmt + Semantic Layer (Linked Data) = Semantic DWH \ Enterprise Knowledge Bus - EKB (BI – само собой «в комплекте», точнее semantic BI) или  
Enterprise Knowledge Management (EKM) \ Enterprise Knowledge Graph (EKG) – но только в части данных компании (не процессы и системы и т.п.)  
Т.е. не только Хранилище DWH и BI, но и шина знаний (EKB), передающая смысловые сущности в системы наподобие ESB, но уже «осмысленные» (семантически обработанные).    

### Semantic_layer info 
- https://en.wikipedia.org/wiki/Semantic_layer
- https://www.atscale.com/glossary/semantic-layer/
- https://www.oracle.com/technetwork/database/options/semantic-tech/whatsnew/oracle-6.pdf?ssSourceSiteId=otnjp
- https://datafinder.ru/products/semanticheskiy-sloy-chto-eto-takoe-i-kakim-dolzhen-byt
### Microstrategy Enterprise Semantic Graph
- [Единый семантический слой BI и что он дает на примере платформы Microstrategy](https://habr.com/ru/articles/650453/#comment_24110373) 
- https://ceo.ru.com/microstrategy-enterprise-semantic-graph

### ТГ
- https://t.me/rusontology/11981 как таковых готовых не встречал, таких где быо бы уже реализованы взаимодействия, из комплексных платформ - наверное наболее близко это сейчас развивающийся databrick untiy catalog с оговорками, различные активные каталоги данных (для документирования “прагматичных онтологий”) типа atlan, altion, Сollibta - их минус что это “Для людей” то есть мало приспособелны для автоматической оркестрации для мета-онтологии что то типа Stardog или Amazon Neptune , или более простые Neo4j / TigerGraph  
но вот единого “решения” нет - надо собирать такую архитектуру из вышеперечисленных тулзов, мы как раз из за этого работам над своим таким продуктом для “семантического уровня” но пока в бета режиме и еще некоторое время понадобится для публичной беты
- Семантический слой для Data Mesh: https://telegra.ph/Semanticheskij-sloj-dlya-Data-Mesh-10-01 перевод с английского - оригинал на https://substack.com/@cognitone/p-175032247

SAP & Oracle взяли у Бира из его VSM - Viable System Model (Модель жизнеспособной системы)

### info  
- Семантический слой — сердце любого BI инструмента, здесь происходит вся магия. Если по-простому, то семантический слой — прослойка между технически сложными вещами, такими как «база данных», «таблица», «соединение» и бизнес-объектами, с которыми будет работать пользователь.
Бизнес-объекты — непосредственно сами показатели и атрибуты, для построения отчетности. https://smartia.me/article/bitools/
