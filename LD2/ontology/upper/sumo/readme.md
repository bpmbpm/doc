## 1
https://www.perplexity.ai/  
https://github.com/ontologyportal/sumo  
Дай подробную инструкцию как ее можно смотреть онлайн, т.е. есть ли онлайн вьювер. 

Да, у меня основной сайт `https://www.ontologyportal.org/` тоже не открылся напрямую при попытке загрузить страницу (таймаут). Но **сам SUMO смотреть онлайн можно** — главный онлайн-инструмент это **Sigma Knowledge Base Browser**, и он доступен по отдельному адресу `sigma.ontologyportal.org`. [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO)

## Главный онлайн-вьювер: Sigma

Открывайте:

- **Основной браузер онтологии:** [https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO) [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO)
- **Упрощённый поиск терминов:** [https://sigma.ontologyportal.org/sigma/SimpleBrowse.jsp](https://sigma.ontologyportal.org/sigma/SimpleBrowse.jsp) [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/SimpleBrowse.jsp)
- **Граф / визуализация отношений:** http://sigma.ontologyportal.org:8080/sigma/Graph.jsp [sigma.ontologyportal](http://sigma.ontologyportal.org:8080/sigma/Graph.jsp)
- **Проверка SUO-KIF кода:** [https://ontology.nps.edu/sigma/CheckKifFile.jsp](https://ontology.nps.edu/sigma/CheckKifFile.jsp) [ontology.nps](https://ontology.nps.edu/sigma/CheckKifFile.jsp)

В Sigma можно искать термин, смотреть его определение, аксиомы, `subclass`/`instance`-иерархию, связанные формулы и граф. В интерфейсе доступны представления SUO-KIF, OWL, TPTP и traditional logic; для просмотра иерархии используйте вкладку/ссылку **Inheritance Tree**. [sigma.ontologyportal](http://sigma.ontologyportal.org:8080/sigma/Graph.jsp)

Практический порядок:

1. Откройте `Browse.jsp?kb=SUMO`.
2. В поле поиска введите английский термин или SUMO-константу, например `Process`, `Artifact`, `Reliability` (если термин существует).
3. На странице термина смотрите:
   - **Documentation** — текстовое описание;
   - **Relations** — `subclass`, `instance`, `part`, `located` и др.;
   - **Axioms / Formulas** — формальные утверждения в SUO-KIF;
   - **Graph** — локальный фрагмент онтологии;
   - **Inheritance Tree** — позицию понятия в таксономии.
4. Если нужен именно граф, откройте `Graph.jsp`, выберите KB `SUMO`, отношение `subclass` и интересующий термин. [sigma.ontologyportal](http://sigma.ontologyportal.org:8080/sigma/Graph.jsp)

## Какой файл главный

Основной файл репозитория — **[`Merge.kif`](https://github.com/ontologyportal/sumo/blob/master/Merge.kif)**. Это ядро SUMO в формате SUO-KIF; остальные `.kif`-файлы — преимущественно доменные расширения: `Engineering.kif`, `Transportation.kif`, `Medicine.kif`, `FinancialOntology.kif` и т. д. [github](https://github.com/ontologyportal/sumo)

Для первого чтения в GitHub:

- **Ядро:** [`Merge.kif`](https://github.com/ontologyportal/sumo/blob/master/Merge.kif) [github](https://github.com/ontologyportal/sumo/blob/master/Merge.kif)
- **Средний уровень / более предметные базовые понятия:** [`Mid-level-ontology.kif`](https://github.com/ontologyportal/sumo/blob/master/Mid-level-ontology.kif)
- **Инженерия:** [`engineering.kif`](https://github.com/ontologyportal/sumo/blob/master/engineering.kif)
- **Транспорт:** [`Transportation.kif`](https://github.com/ontologyportal/sumo/blob/master/Transportation.kif)
- **Экспериментальные/незрелые модули:** каталог `development/` — по README туда помещают новые и ещё не устоявшиеся знания. [github](https://github.com/ontologyportal/sumo)

Не начинайте с `Translations/`, `WordNetMappings/` или `mappings/`: это вспомогательные файлы для лексических привязок, переводов и WordNet, а не основная онтология. README репозитория прямо указывает, что файлы KB написаны в SUO-KIF, а переводы и WordNet-данные вынесены в отдельные каталоги. [github](https://github.com/ontologyportal/sumo)

## Альтернативные способы онлайн-просмотра

| Вариант | Что даёт | Ссылка |
|---|---|---|
| **Sigma KB Browser** | Лучший вариант: поиск, аксиомы, иерархия, граф, несколько формализмов | [https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO)  [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO) |
| **Sigma Simple Browse** | Быстрый поиск термина без сложного интерфейса | [https://sigma.ontologyportal.org/sigma/SimpleBrowse.jsp](https://sigma.ontologyportal.org/sigma/SimpleBrowse.jsp)  [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/SimpleBrowse.jsp) |
| **Sigma Graph** | Визуальный просмотр отношений и таксономии | http://sigma.ontologyportal.org:8080/sigma/Graph.jsp  [sigma.ontologyportal](http://sigma.ontologyportal.org:8080/sigma/Graph.jsp) |
| **GitHub-просмотр** | Чтение исходного SUO-KIF, поиск по репозиторию, история изменений | [https://github.com/ontologyportal/sumo](https://github.com/ontologyportal/sumo)  [github](https://github.com/ontologyportal/sumo) |
| **Raw GitHub** | Быстрое чтение/скачивание конкретного `.kif` без интерфейса GitHub | [https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif)  [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/master/Merge.kif) |
| **KIF Browser / Translations index** | Навигация по спискам понятий и дереву наследования из подготовленных HTML-файлов | [https://raw.githubusercontent.com/ontologyportal/sumo/refs/heads/master/Translations/index-en.html](https://raw.githubusercontent.com/ontologyportal/sumo/refs/heads/master/Translations/index-en.html)  [raw.githubusercontent](https://raw.githubusercontent.com/ontologyportal/sumo/refs/heads/master/Translations/index-en.html) |

## Если `ontologyportal.org` не открывается

Таймаут означает, что запрос ушёл, но сервер или промежуточная сеть не ответили вовремя; это не обязательно означает, что SUMO недоступен целиком. [domain-monitor](https://domain-monitor.io/blog/connection-timed-out-error-fix/)

Попробуйте в таком порядке:

1. **Сразу используйте Sigma напрямую:** `sigma.ontologyportal.org`, а не стартовую страницу `www.ontologyportal.org`. [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO)
2. Откройте `http://sigma.ontologyportal.org:8080/sigma/Graph.jsp` — иногда нестандартный порт работает, когда основной HTTPS-хост недоступен. [sigma.ontologyportal](http://sigma.ontologyportal.org:8080/sigma/Graph.jsp)
3. Проверьте сайт с другого устройства или через мобильную сеть, отключите VPN/прокси и попробуйте другой DNS, например `1.1.1.1` или `8.8.8.8`; такие меры помогают отделить локальную сетевую проблему от недоступности сервера. [domain-monitor](https://domain-monitor.io/blog/connection-timed-out-error-fix/)
4. Если нужен только исходник, используйте GitHub или raw-ссылку на `Merge.kif` — они не зависят от основного сайта. [github](https://github.com/ontologyportal/sumo)

## Рекомендация

Для систематического изучения SUMO начните с **Sigma KB Browser** и ищите термины там; для чтения и анализа аксиом открывайте параллельно **`Merge.kif` в GitHub**. Для вашей задачи с надежностью и отказоустойчивостью наиболее полезны будут `Merge.kif` как базовая модель и `engineering.kif` как точка входа в инженерную доменную часть. [sigma.ontologyportal](https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO)
