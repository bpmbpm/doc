## 1

Напиши статью онтология Платона «Мир идей и мир вещей» в терминологии SUMO

Вначале кратко дай определение онтологии в философском смысле и кратко характеризуй онтология Платона «Мир идей и мир вещей». Потом онтологию SUMO и место ее в других онтологиях и вообще в Linked Data.

Далее построй так:  
Тезис Платона и соответствующая интерпретация в SUMO.  
Добавляй ссылки (продублированные текстом самой ссылки) на источники. 

# Онтология Платона «Мир идей и мир вещей» в терминологии SUMO

## Онтология в философском смысле

В философии онтология — это учение о бытии как таковом: о том, что вообще существует, каковы фундаментальные типы сущего (вещи, свойства, отношения, идеи) и как они между собой соотносятся. Термин ввёл в XVII веке Гоклениус и закрепил Вольф, но сам предмет — «вопрос о сущем» — старше самого слова. От онтологии как раздела метафизики стоит отличать её инженерное понимание: формальную спецификацию концептуализации, то есть явную и машинно-читаемую модель понятий некоторой предметной области. Случайно или нет, но эти два смысла встретились в одном слове не без оснований: современная онтология в информатике — прямой потомок аристотелевско-схоластической традиции деления сущего на роды и виды.

## Онтология Платона: два мира

Учение Платона о «двух мирах» — основа его системы объективного идеализма: всё бытие состоит из двух уровней — вечного, умопостигаемого бытия идей (эйдосов) и чувственного, изменчивого бытия вещей материального мира (https://cyberleninka.ru/article/n/filosofskoe-uchenie-o-dvuh-mirah-platona). Ключевые тезисы: [```4```](https://cyberleninka.ru/article/n/filosofskoe-uchenie-o-dvuh-mirah-platona)

- **Идеи первичны и вечны.** Реальные деревья погибают, начерченный треугольник можно стереть, но вечны идеи дерева и треугольника; идеи — сверхчувственные образцы вещей, указывающие на их сущность, назначение и смысл (https://kpfu.ru/staff_files/F345824154/Vvedenie__v__filosofiju__kratkij__kurs__lekcij.pdf). [```1```](https://kpfu.ru/staff_files/F345824154/Vvedenie__v__filosofiju__kratkij__kurs__lekcij.pdf)
- **Вещи причастны идеям.** Одна идея «кровати» — и бесконечное множество несовершенных, изменчивых кроватей, которые лишь «взяли часть идеи» (классический пример Рассела — у Платона это деление на «кошку вообще» и «конкретных кошек») (https://ru.ruwiki.ru/wiki/Платон). [```2```](https://ru.ruwiki.ru/wiki/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%BD)
- **Мир идей иерархичен**, и вершину пирамиды венчает идея Блага, которую Платон сравнивает с солнцем — источником и истины, и познаваемости (https://kpfu.ru/staff_files/F345824154/Vvedenie__v__filosofiju__kratkij__kurs__lekcij.pdf). [```1```](https://kpfu.ru/staff_files/F345824154/Vvedenie__v__filosofiju__kratkij__kurs__lekcij.pdf)
- **Познание** — это не чувственный опыт, а созерцание идей разумом: о чувственных вещах возможно лишь «мнение», достоверное знание — только об истинно сущих «видах» (https://kpfu.ru/staff_files/F345824154/Vvedenie__v__filosofiju__kratkij__kurs__lekcij.pdf); метафора познания — миф о пещере, где узники видят лишь тени предметов (https://ru.ruwiki.ru/wiki/Платон). [```1```](https://kpfu.ru/staff_files/F345824154/Vvedenie__v__filosofiju__kratkij__kurs__lekcij.pdf)[```2```](https://ru.ruwiki.ru/wiki/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%BD)
- В современной академической подаче: платоновские Формы — «множество неизменных и однозначных сущностей», а способность понимать их определяет философа (SEP, «Ancient Ethical Theory», раздел о «Государстве») (https://la-caverne-de-platon.github.io/Backup-Stanford-Encyclopedia-of-Philosophy/entries/ethics-ancient/index.html); систематическое изложение метафизики среднего периода — в Stanford Encyclopedia of Philosophy: https://plato.stanford.edu/entries/plato-metaphysics/ [```20```](https://la-caverne-de-platon.github.io/Backup-Stanford-Encyclopedia-of-Philosophy/entries/ethics-ancient/index.html)

## SUMO и её место среди онтологий

**SUMO (Suggested Upper Merged Ontology)** — верхняя онтология, предложенная как стартовый документ рабочей группы IEEE SUO; она даёт определения самых общих терминов и служит фундаментом для частных (доменных) онтологий (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). Её создавали не из головы, а слиянием существующих источников: онтологии сервера Ontolingua, верхнего уровня Джона Сова, онтологий ITBM-CNR и мереотопологических теорий (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). [```10```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)

Масштаб и структура: сегодня SUMO с доменными онтологиями насчитывает порядка 20 000 терминов и 70 000 аксиом (http://gerard.demelo.org/papers/yagosumo-tr.pdf); ядро — Merge.kif, написанный на языке SUO-KIF (https://en.wikipedia.org/wiki/Suggested_Upper_Merged_Ontology). Все термины происходят от корня Entity, который делится на Physical и Abstract; эту картину показывают и в учебных разборах (https://inariksit.github.io/cclaw-zettelkasten/sumo.html). [```6```](http://gerard.demelo.org/papers/yagosumo-tr.pdf)[```24```](https://en.wikipedia.org/wiki/Suggested_Upper_Merged_Ontology)[```25```](https://inariksit.github.io/cclaw-zettelkasten/sumo.html)

Место среди других систем: SUMO — одна из немногих формально аксиоматизированных верхних онтологий (в отличие от Cyc и UMBEL) и крупнейшая открытая формальная онтология, полностью отображённая на лексикон WordNet (https://en.wikipedia.org/wiki/Upper_ontology). В экосистеме Semantic Web и Linked Data она выступает «семантическим мостом»: верхние онтологии вроде SUMO, DOLCE и GFO служат эталонными моделями для выравнивания доменных онтологий и обеспечивают интероперабельность между ними (http://disi.unitn.it/~pavel/om2016/papers/om2016_proceedings.pdf). Связка SUMO ↔ WordNet задумывалась именно для семантического веба: она даёт базу для снятия лексической неоднозначности и аннотирования текстов формальными концептами (https://cdn.aaai.org/Workshops/2002/WS-02-11/WS02-11-011.pdf), а интеграция с YAGO расширила SUMO с уровня «общих понятий» до базы знаний почти в два миллиона сущностей (http://gerard.demelo.org/papers/yagosumo-tr.pdf). Исходники открыты: https://github.com/ontologyportal/sumo (https://github.com/ontologyportal/sumo); главный портал — https://www.ontologyportal.org. [```8```](https://en.wikipedia.org/wiki/Upper_ontology)[```13```](http://disi.unitn.it/~pavel/om2016/papers/om2016_proceedings.pdf)[```12```](https://cdn.aaai.org/Workshops/2002/WS-02-11/WS02-11-011.pdf)[```6```](http://gerard.demelo.org/papers/yagosumo-tr.pdf)[```27```](https://github.com/ontologyportal/sumo)

## Тезисы Платона и их SUMO-интерпретация

### 1. Двумирность: бытие делится на идеальное и материальное

**Платон:** всё сущее — два уровня, идеи и вещи (https://cyberleninka.ru/article/n/filosofskoe-uchenie-o-dvuh-mirah-platona). [```4```](https://cyberleninka.ru/article/n/filosofskoe-uchenie-o-dvuh-mirah-platona)

**SUMO:** самое радикальное верхнее решение — `(partition Entity Physical Abstract)`: любая сущность — либо физическая (имеет координаты в пространстве-времени), либо абстрактная (не имеет) (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). Разбиение непересекающееся и покрывающее — в этом смысле SUMO воспроизводит «двумирность» Платона буквально. Разница в критерии: Платон делит по онтологическому статусу (подлинно сущее vs становящееся), SUMO — по локализуемости. [```10```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)

### 2. Эйдос вечен и вневременен, вещь рождается и гибнет

**Платон:** мир идей существует вне времени и пространства; в мире вещей единичные предметы создаются и уничтожаются, идея же Красоты вечна и неизменна (https://cyberleninka.ru/article/n/filosofskoe-uchenie-o-dvuh-mirah-platona). [```4```](https://cyberleninka.ru/article/n/filosofskoe-uchenie-o-dvuh-mirah-platona)

**SUMO:** абстрактные сущности «не могут существовать в определённом месте и в определённое время без физической оболочки» — в отличие от физических (https://www.academia.edu/77748106/Automatic_SUMO_to_UML_translation). Формально: [```23```](https://www.academia.edu/77748106/Automatic_SUMO_to_UML_translation)

```
(instance Proposition Abstract)   ; пропозиция не локализована
(instance Table1 Physical)        ; конкретный стол локализован
```

### 3. Причастность: вещь «причастна» идее

**Платон:** конкретная кровать причастна (methexis) идее кровати, берёт от неё часть (https://ru.ruwiki.ru/wiki/Платон). [```2```](https://ru.ruwiki.ru/wiki/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%BD)

**SUMO:** загадочная «причастность» получает строгую формализацию — это отношение `instance`:

```
(instance thisTable Table)
```

«thisTable — экземпляр класса Table» (https://arxiv.org/pdf/2012.15835). Причём SUMO настаивает на точности: если `Table` — SetOrClass (Abstract), то конкретный стол `Table1` — Physical. Смешивать уровни нельзя — в этом «закон неперехода» строже, чем у самого Платона, у которого идея и вещь могли «передаваться» друг другу. [```22```](https://arxiv.org/pdf/2012.15835)

### 4. Идея одна — вещей много

**Платон:** идея одна, её «носителей» бесконечно много; слова «стол», «кошка» объединяют множество неодинаковых вещей под общим именем (https://portal.tpu.ru/SHARED/m/MARKGON73/educational_work/lw/Lk.%20Antycnaiy%20philos.%20(2).pdf). [```3```](https://portal.tpu.ru/SHARED/m/MARKGON73/educational_work/lw/Lk.%20Antycnaiy%20philos.%20%282%29.pdf)

**SUMO:** это стандартная семантика класса в теории множеств. Класс — одна абстрактная сущность; его объём — множество экземпляров. Дополнительно SUMO различает `subclass` (иерархию идей: стол → мебель → артефакт) и `instance` (причастность вещи идее). Иерархия идей Платона, таким образом, — это иерархия классов.

### 5. Иерархия идей и вершина — идея Блага

**Платон:** пирамиду идей венчает идея Блага, тождественная абсолютной Красоте; это высшее знание (https://cyberleninka.ru/article/n/filosofskoe-uchenie-o-dvuh-mirah-platona). [```4```](https://cyberleninka.ru/article/n/filosofskoe-uchenie-o-dvuh-mirah-platona)

**SUMO:** у пирамиды понятий тоже есть вершина — Entity, «корневой узел онтологии» (https://www.academia.edu/77748106/Automatic_SUMO_to_UML_translation). Но аналогия не полной мере: Entity — это не «высшая идея», а просто самое общее понятие, без ценностной окраски. Ближайший SUMO-эквивалент идеи Блага — атрибут, а не класс: оценки типа «хорошо/плохо» в SUMO — экземпляры NormativeAttribute, ветки Attribute в Abstract (пример того, как SUMO относит роли и оценки к атрибутам, а не к классам сущностей, разобран на примере plumber (https://inariksit.github.io/cclaw-zettelkasten/sumo.html)). Показательный контраст: у Платона Благо — сущее и источник всякого сущего; у SUMO «благо» — предикат, приписываемый сущностям. [```23```](https://www.academia.edu/77748106/Automatic_SUMO_to_UML_translation)[```25```](https://inariksit.github.io/cclaw-zettelkasten/sumo.html)

### 6. Вещи текучи, идеи неизменны

**Платон:** от Гераклита Платон унаследовал взгляд, что в чувственном мире нет ничего постоянного и через чувства знание недостижимо (https://portal.tpu.ru/SHARED/m/MARKGON73/educational_work/lw/Lk.%20Antycnaiy%20philos.%20(2).pdf). [```3```](https://portal.tpu.ru/SHARED/m/MARKGON73/educational_work/lw/Lk.%20Antycnaiy%20philos.%20%282%29.pdf)

**SUMO:** непрерывность и устойчивость разведены аксиоматически: `(disjoint Object Process)` — объект «пребывает», процесс «происходит» (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). Изменчивость вещей выражается не в том, что вещь «не существует», а в том, что её состояние — экземпляр Attribute, меняющийся во времени: [```10```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)

```
(=> (and (instance ?P TurningOffDevice) (patient ?P ?D))
    (and (holdsDuring (BeginFn (WhenFn ?P)) (attribute ?D DeviceOn))
         (holdsDuring (EndFn (WhenFn ?P))  (attribute ?D DeviceOff))))
```

Устройство было включено в начале процесса и выключено в конце — вещь осталась той же, изменились её атрибуты (https://arxiv.org/pdf/2012.15835). Это, кстати, неплохой ответ Платону: тождество вещи при изменении в SUMO обеспечивается именно разделением «объект / состояние». [```22```](https://arxiv.org/pdf/2012.15835)

### 7. Знание об идеях против мнения о вещах

**Платон:** достоверное знание — только об идеях; о чувственных вещах — лишь «мнение», ибо каждая кошка отлична от другой и любое чувственное суждение противоречиво (https://ru.ruwiki.ru/wiki/Платон). [```2```](https://ru.ruwiki.ru/wiki/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%BD)

**SUMO:** этот гносеологический тезис перекладывается на язык пропозиций и установок. Содержание знания — экземпляр Proposition (абстрактная сущность, способная быть выраженной предложением, книгой или библиотекой) (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf); отношение агента к пропозиции — `believes` или `knows`. Чувственный вход в познание — процессы Perception (Seeing, Hearing и т. д.), которые SUMO честно моделирует как процессы, порождающие субъективные репрезентации, но не гарантирующие истину. Платоновская пропасть между эпистемой и доксой в SUMO не аксиоматизирована — инженерная онтология агностична к тому, гарантирован ли путь от восприятия к знанию. [```10```](https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf)

### 8. Демиург: мир вещей сотворён по образцу идей

**Платон:** Бог, творя мир по своему подобию, упорядочил хаос; идеи — образцы, по которым устроено видимое (https://ru.ruwiki.ru/wiki/Платон). [```2```](https://ru.ruwiki.ru/wiki/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%BD)

**SUMO:** акт творения — экземпляр Creation (ветка Process):

```
(instance ?C Creation)
(agent ?C God)          ; агент творения
(result ?C World)       ; результат — мир вещей
```

Ролевые отношения `agent`, `result`, `patient` — это CaseRole, предикаты, связывающие процесс с агентом и продуктом (https://arxiv.org/pdf/2012.15835). Метафора «вещь как копия идеи» здесь отступает перед строгим отношением: между `Table1` и `Table` нет отношения копирования, есть только `instance`. SUMO не моделирует «подражание» — зато не оставляет в нём места и для мистики. [```22```](https://arxiv.org/pdf/2012.15835)

### 9. Материя как «небытие», принимающее определение идей

**Платон:** материя — беспорядочная масса, «небытие» (менон), которая получает определение от идей (https://kpfu.ru/staff_files/F345824154/Vvedenie__v__filosofiju__kratkij__kurs__lekcij.pdf). [```1```](https://kpfu.ru/staff_files/F345824154/Vvedenie__v__filosofiju__kratkij__kurs__lekcij.pdf)

**SUMO:** ближайший аналог — Substance (Субстанция): однородная субстанция, у которой любая часть обладает свойствами целого (вода, глина, золото). Но принципиальное расхождение: субстанция в SUMO — полноценный Physical, а не «небытие». SUMO вообще не имеет понятия «инертного материала, ждущего формы» — каждая физическая сущность уже конкретна и локализована. Платоновский «третий род» (хора из «Тимея») не имеет SUMO-коррелята.

## Итоговая таблица соответствий

| Тезис Платона | SUMO-концепт | Соответствие |
|---|---|---|
| Два мира: идей и вещей | `(partition Entity Physical Abstract)` | структурное совпадение, иной критерий деления |
| Вечная, вневременная идея | Abstract (Proposition, SetOrClass, Attribute) | точное соответствие |
| Изменчивая вещь | Physical: Object, Process, StateChange | точное соответствие |
| Причастность вещи идее | `instance` | формализация метафоры |
| Иерархия идей | иерархия классов (`subclass`) | формализация |
| Идея Блага на вершине | Entity как корень; NormativeAttribute для ценностей | лишь частичная аналогия |
| Знание vs мнение | Proposition + `knows`/`believes`; Perception | частичная формализация |
| Демиург творит мир по идеям | Creation + CaseRole `agent`, `result` | формализация события |
| Материя как небытие | нет прямого аналога; ближайшее — Substance | непереводимый остаток |

## Вывод

SUMO оказывается неожиданно «платонической» в структуре: деление Entity на Physical и Abstract — это формальная тень учения о двух мирах, а аппарат `instance`/`subclass` — строгая версия «причастности» и «иерархии идей». Но по духу системы противоположны: у Платона идеи — подлинное бытие, а вещи — теневая копия; в SUMO обе ветки равноправны, а вечное существует лишь как класс, пропозиция или атрибут, «овеществлённые» к тому же в аксиомах. Иными словами, SUMO даёт Платону язык первого порядка — но не даёт ему онтологического первенства идей. Это, впрочем, то, что инженерная онтология и должна делать: фиксировать структуру понятий, не решая за нас, что из неё «истиннее».

## Ссылки (полные адреса)

- Учение о двух мирах (КиберЛенинка): https://cyberleninka.ru/article/n/filosofskoe-uchenie-o-dvuh-mirah-platona
- Краткий курс лекций по философии КФУ (раздел о Платоне): https://kpfu.ru/staff_files/F345824154/Vvedenie__v__filosofiju__kratkij__kurs__lekcij.pdf
- РУВИКИ, статья «Платон»: https://ru.ruwiki.ru/wiki/Платон
- Лекция ТПУ «Античная философия» (теория идей, Гераклит): https://portal.tpu.ru/SHARED/m/MARKGON73/educational_work/lw/Lk.%20Antycnaiy%20philos.%20(2).pdf
- Stanford Encyclopedia of Philosophy, Plato's Middle Period Metaphysics and Epistemology: https://plato.stanford.edu/entries/plato-metaphysics/
- SEP, Ancient Ethical Theory (зеркало): https://la-caverne-de-platon.github.io/Backup-Stanford-Encyclopedia-of-Philosophy/entries/ethics-ancient/index.html
- Niles, Pease — «Towards a Standard Upper Ontology»: https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf
- SUMO и WordNet для семантического веба (AAAI): https://cdn.aaai.org/Workshops/2002/WS-02-11/WS02-11-011.pdf
- YAGO-SUMO: A Large-Scale Formal Ontology: http://gerard.demelo.org/papers/yagosumo-tr.pdf
- Верхние онтологии (Википедия): https://en.wikipedia.org/wiki/Upper_ontology
- SUMO (Википедия): https://en.wikipedia.org/wiki/Suggested_Upper_Merged_Ontology
- Merge.kif: https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif
- Репозиторий SUMO: https://github.com/ontologyportal/sumo
- Semantic Modeling with SUMO (arXiv): https://arxiv.org/pdf/2012.15835
- SUMO→UML (атрибуты и абстрактные сущности): https://www.academia.edu/77748106/Automatic_SUMO_to_UML_translation
- Онтологическое соответствие верхних онтологий (OM 2016): http://disi.unitn.it/~pavel/om2016/papers/om2016_proceedings.pdf
- Разбор SUMO с примерами атрибутов и экземпляров: https://inariksit.github.io/cclaw-zettelkasten/sumo.html
- Русскоязычный обзор SUMO и YAGO (КиберЛенинка): https://cyberleninka.ru/article/n/ontologicheskiy-podhod-k-razrabotke-adaptivnoy-modeli-kompetentsiy-i-professionalnoy-podgotovki-v-sfere-informatsionnyh-tehnologiy
- Портал онтологии: https://www.ontologyportal.org

Могу пойти дальше и сделать то же для Аристотеля (его «сущность» ложится на SUMO куда органичнее, чем у Платона) или для Декарса с его дуализмом субстанций — скажите, чья онтология интересует.

## 1.1

# Разбор по пунктам

## 1. Демиург: что означает это слово

Слово **демиург** — греческое δημιουργός (dēmiourgos), буквально «мастер, ремесленник, специалист» — от δῆμος «народ» и ἔργον «дело, работа». Так в классической Греции называли и ремесленников, и должностных лиц, работавших «на народ». Отсюда же слово «демагог» (вестник народа) — изначально без негативного оттенка.

Значение сильно различается по традициям:

- **У Платона** («Тимей», диалог о происхождении космоса) демиург — божественный мастер-устроитель: он не творит мир из ничего, а **взирая на вечные образцы (идеи), упорядочивает уже готовую бесформенную материю**, насколько она позволяет. Ключевая формула Платона: «Когда умозритель работает, он смотрит на вечно тождественное и вносит образец» (Тимей, 28c–29a): https://plato.stanford.edu/entries/timaeus/
- **В гностицизме** (II–III вв.) демиург — часто **низший, невежественный или даже злой** творец материального мира (в Новом Завете апологетов он фигурирует как Ялдабаоф), противопоставляемый истинному Богу.
- **В христианстве** слово «Демиург» иногда употребляется как торжественный титул Бога-Творца (в том числе в православной богослужебной и аскетической литературе — «Демиург всея твари»). Но важно, что христианский Бог **творит из ничего (ex nihilo)**, а не упорядочивает готовый материал, как платоновский мастер. Поэтому строгое употребление термина — скорее у платоников и гностиков; в христианском богословии он закрепился как почтительный синоним Творца.

Так что в моей предыдущей таблице строку «Демиург творит мир по идеям» следует читать именно в платоновском смысле: мастер, глядящий на образец. Формула творения у Платона: идея (образец) → материя (материал) → вещь (копия). В SUMO это выражается через ролевые отношения процесса: `agent` (мастер), `result` (вещь), а сам образец — Proposition или класс, по которому создаётся экземпляр.

## 2. Язык записей вида `(=> (and ...) ...)` — это SUO-KIF

Такие «скобочные» записи — не экзотика, а стандартная нотация самой SUMO: язык **SUO-KIF** (Standard Upper Ontology — Knowledge Interchange Format), диалект KIF, оформленный в стиле LISP (https://en.wikipedia.org/wiki/Knowledge_Interchange_Format). Его правила просты:

**Правило префиксной записи.** Любое выражение — это список в круглых скобках, где первый элемент — оператор или предикат, а дальше — аргументы:

- `(instance ?P TurningOffDevice)` читается как `instance(?P, TurningOffDevice)` — «?P есть экземпляр класса TurningOffDevice»;
- `(=> A B)` — импликация «если A, то B» (`=>` — стрелка);
- `(and A B)` — конъюнкция «A и B»;
- `(not A)` — отрицание.

**Переменные** всегда начинаются с `?`: `?P`, `?D`. По умолчанию каждая формула с переменными неявно универсально квантифицирована: если написано `(=> ...)` без явного `(forall ...)`, это означает «для всех значений переменных верно...».

**Разбор формулы из прошлого ответа поэлементно:**

```
(=>                                    ; импликация: если... то...
  (and                                 ; конъюнкция двух условий
    (instance ?P TurningOffDevice)     ; ?P — процесс типа «выключение устройства»
    (patient ?P ?D))                   ; ?D — пациент процесса (то, над чем он совершается)
  (and                                 ; заключение — тоже конъюнкция
    (holdsDuring (BeginFn (WhenFn ?P)) (attribute ?D DeviceOn))
                                         ; в НАЧАЛЕ процесса ?P атрибут ?D = «включено»
    (holdsDuring (EndFn (WhenFn ?P))   (attribute ?D DeviceOff))))
                                         ; в КОНЦЕ процесса ?P атрибут ?D = «выключено»
```

Справочник по операторам:

| KIF-выражение | Что означает | Математический аналог |
|---|---|---|
| `(=> A B)` | из A следует B | \(A \rightarrow B\) |
| `(and A B)` | A и B | \(A \land B\) |
| `(or A B)` | A или B | \(A \lor B\) |
| `(instance x C)` | x — экземпляр класса C | \(x \in C\) |
| `(subclass C D)` | класс C — подкласс D | \(C \subseteq D\) |
| `(patient ?P ?D)` | ?D — пациент процесса ?P | \(\mathrm{patient}(P, D)\) |
| `(attribute x A)` | у x есть атрибут A | \(\mathrm{attr}(x, A)\) |
| `(WhenFn ?P)` | функция «промежуток времени процесса» | \(W(P)\) |
| `(BeginFn W)` / `(EndFn W)` | начало / конец промежутка | \(\min W\) / \(\max W\) |
| `(holdsDuring T φ)` | формула φ истинна в течение T | \(\varphi\) на T |

Теперь то же самое в классической математической записи (логика первого порядка):

\[
\forall P\, \forall D\ \Big( \big(\mathrm{TurningOffDevice}(P) \wedge \mathrm{patient}(P, D)\big) \rightarrow \big(\mathrm{holdsDuring}\big(\mathrm{BeginFn}(W(P)),\ \mathrm{DeviceOn}(D)\big) \wedge \mathrm{holdsDuring}\big(\mathrm{EndFn}(W(P)),\ \mathrm{DeviceOff}(D)\big)\big) \Big)
\]

Читается так: «Для любого процесса \(P\) и любого устройства \(D\): если \(P\) — выключение устройства и \(D\) — его пациент, то в момент начала \(P\) устройство \(D\) включено, а в момент конца \(P\) — выключено».

Ещё два рабочих примера в обоих представлениях.

Пример 1 — определение Physical (упрощённая запись аксиомы «у всякого физического есть координаты»):

```
(=> (instance ?PHYS Physical)
    (exists (?LOC ?TIME)
      (and (located ?PHYS ?LOC) (time ?PHYS ?TIME))))
```

\[
\forall X\,\big(\mathrm{Physical}(X) \rightarrow \exists L\,\exists T\,(\mathrm{located}(X, L) \wedge \mathrm{time}(X, T))\big)
\]

Пример 2 — определение Substance («любая часть субстанции — та же субстанция»):

```
(=> (and (subclass ?TYPE Substance) (instance ?OBJ ?TYPE) (part ?PART ?OBJ))
    (instance ?PART ?TYPE))
```

\[
\forall T\,\forall O\,\forall Q\,\big((T \subseteq \mathrm{Substance} \wedge O \in T \wedge Q \sqsubseteq_{part} O) \rightarrow Q \in T\big)
\]

Здесь \(Q \sqsubseteq_{part} O\) — отношение «часть целого» (`part`), а не включение множеств — важное различие, к которому вернёмся в разделе про Collection.

## 3. Ветка Physical. Подкласс Object (Объект)

**Определение.** Object — то, что имеет границы и сохраняет тождественность во времени: объект существует «целиком» в каждый момент своей жизни, все его части сосуществуют (3D-подход, эндурантизм) (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). Пример-проверка: стол существует весь целиком прямо сейчас — и ножки, и столешница.

Четыре главные ветви под Object:

### SelfConnectedObject (Связный объект)

Части объекта связаны друг с другом (напрямую или через посредников). Стол — связный: столешница связана с ножками. Саксофон со снятой и лежащей в соседней комнате раструбом — связный объект, пока есть соединяющая трубка; коллекция разрозненных деталей — уже нет.

- **Substance (Субстанция)** — «однородное вещество», любая часть которого имеет свойства целого (https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2). Вода, золото, глина. Отрезанный кусок золота — то же золото; вычерпанная ложка супа — по-прежнему суп. Под Substance: PureSubstance → ElementalSubstance (кислород) и CompoundSubstance (вода как H₂O), Mixture (воздух, бронза).
- **CorpuscularObject (Корпускулярный объект)** — части обладают свойствами, отличными от свойств целого. Стол состоит из дерева и металла, но ни доска, ни шуруп не являются столом. Сюда попадают почти все «предметы» обыденного мира.

### Collection (Совокупность)

Части **не связаны физически**; связь задаётся отношением `member`. Классические примеры из документации: наборы инструментов, футбольные команды, отары овец (https://github.com/gruninger/colore/blob/master/ontologies/sumo/sumo-cl.clif). Две важные особенности:

- **Коллекция материальна, а не абстрактна:** она имеет положение в пространстве-времени (футбольная команда находится на поле в момент матча), в отличие от класса Dog, который не находится нигде (https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2).
- **Тождество сохраняется при смене состава:** продали двух овец, купили трёх — отара та же. У класса такого свойства нет: класс Dog не меняется от того, что собаки рождаются и умирают.
- В коллекции не бывает пустых: у любой Collection есть хотя бы один член (https://adampease.com/FOIS.pdf).

Три разных отношения, которые важно не путать:

| Отношение | Связывает | Пример |
|---|---|---|
| `instance` | вещь и класс | Рекс — экземпляр Dog |
| `member` | вещь и коллекцию | Рекс — член стаи (физически живой) |
| `element` | множество и элемент | 3 — элемент множества {3, 5} |
| `subclass` | класс и класс | Dog — подкласс Animal |

### Region (Регион)

Топографическая локализация: поверхности объектов, географические области, воображаемые места (https://github.com/gruninger/colore/blob/master/ontologies/sumo/sumo-cl.clif). Регион — единственный вид Object, который может локализоваться сам в себе; и он не является подклассом SelfConnectedObject, потому что бывают регионы с несвязанными частями — например, архипелаг (https://hal.science/hal-00012203/document). Примеры: поверхность стола (Surface), Байкал (WaterArea → Lake), Тульская область (GeographicArea), Солнечная система (AstrophysicalRegion).

### Agent (Агент)

Тот, кто может действовать: человек, организация, животное, ИИ-система. Цепочка: Agent → SentientAgent → CognitiveAgent → Human. Агент нужен ветке Process как носитель роли `agent` в интенциональных процессах — без агента не бывает, например, Buying (покупка).

## 4. Ветка Physical. Подкласс Process (Процесс)

**Определение.** Process — то, что «происходит», а не существует: у процесса есть временные стадии, он разворачивается. Кипение воды не «присутствует целиком» в момент t — есть стадия до закипания, бурление, прекращение. Прямое запрещение пересечения: `(disjoint Object Process)` (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf).

**Ролевые отношения процессов (CaseRole).** Каждый процесс может связываться с участниками через специализированные предикаты (https://arxiv.org/pdf/2012.15835):

- `agent` — деятель (кто делает);
- `patient` — пациент (над чем совершается);
- `instrument` — инструмент (чем);
- `result` — результат (что появляется в итоге);
- `origin` / `destination` — откуда и куда;
- `resource` — расходуемый ресурс.

Пример: `(agent ?P ?HUMAN)` — «исполнитель процесса ?P — человек ?HUMAN».

**Основные подклассы Process с примерами:**

| Подкласс | Определение | Примеры | Примерная аксиома |
|---|---|---|---|
| IntentionalProcess | агент действует сознательно, с целью | покупка, чтение, вождение | ∃A (\(\mathrm{agent}(P, A) \wedge \mathrm{wants}(A, \mathrm{result}(P))\)) |
| Creation / Destruction | возникновение / исчезновение объекта | постройка дома; гибель корабля | ∃X (\(\mathrm{result}(P, X)\)) — у творения есть продукт, которого не было до процесса |
| StateChange | переход состояния вещества | плавление льда, кипение, горение | \(\mathrm{attr}(X, \mathrm{Solid})\) до → \(\mathrm{attr}(X, \mathrm{Liquid})\) после |
| InternalChange | изменение внутренней структуры при сохранении тождества | выключение устройства, старение | тождество объекта X сохраняется, атрибут меняется |
| Motion | перемещение в пространстве | ходьба, полёт, течение реки | ∃D (\(\mathrm{moves}(P, D)\)) |
| Transfer | передача владения/расположения | перевозка груза, передача денег | объект меняет «владельца» или место |
| BiologicalProcess | процессы организмов | метаболизм, дыхание, рост | участник — Organism |
| Perception | восприятие органами чувств | видит, слышит | агент получает информацию о мире |
| Communication | передача информации | утверждение, вопрос, обещание | содержание — Proposition |
| WeatherProcess | погода | дождь, снегопад | природный процесс без агента |
| DualObjectProcess | двое-частный процесс | обмен, сделка | два пациента |

**Разбор примера StateChange.** Плавление льда в SUMO можно записать так:

```
(instance Melt1 Melting)
(patient Melt1 IceCube1)
(holdsDuring (BeginFn (WhenFn Melt1)) (attribute IceCube1 Solid))
(holdsDuring (EndFn   (WhenFn Melt1)) (attribute IceCube1 Liquid))
```

\[
\forall P\,\forall X\,\Big(\big(\mathrm{Melting}(P) \wedge \mathrm{patient}(P, X)\big) \rightarrow \big(\mathrm{holdsDuring}(\mathrm{BeginFn}(W(P)), \mathrm{Solid}(X)) \wedge \mathrm{holdsDuring}(\mathrm{EndFn}(W(P)), \mathrm{Liquid}(X))\big)\Big)
\]

**Разбор примера IntentionalProcess.** Покупка:

```
(instance B1 Buying)
(agent B1 Alice)
(destination B1 Store7)
(patient B1 Bread1)
```

\[
\mathrm{Buying}(B1) \wedge \mathrm{agent}(B1, \text{Alice}) \wedge \mathrm{destination}(B1, \text{Store7}) \wedge \mathrm{patient}(B1, \text{Bread1})
\]

Обратите внимание на структуру: **вещь (Bread1) остаётся Physical-объектом, а действие (B1) — процессом**; ролью покупателя обладает агент Alice. Это и есть «склейка» двух веток Physical через предикаты-роли.

**Проверка процессов во времени.** Любой процесс имеет длительность: `(=> (instance ?PROC Process) (exists (?DUR) (duration (WhenFn ?PROC) ?DUR)))`, а также стадии — SUMO позволяет разбить процесс на подпроцессы через `subProcess` (https://arxiv.org/pdf/2012.15835).

## 5. Ветка Abstract подробно

Под Abstract сидят пять непересекающихся ветвей (современная структура — https://real.mtak.hu/74043/1/Extensions_to_the_core_ontology_for_robotics_and_automation_2014_u.pdf; в классической статье Нилса и Пиза деление выглядело иначе, Set → Class → Relation — https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf).

Определяющее свойство ветки: абстрактная сущность **не существует ни в определённом месте, ни в определённое время** — в отличие от физической, которая всегда где-то и когда-то (https://www.academia.edu/77748106/Automatic_SUMO_to_UML_translation).

### Quantity (Количество)

Делится на **Number** — чистое число без привязки к системам измерения (7, π, 3,1415...) и **PhysicalQuantity** — число **вместе с единицей измерения** (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). Ключевой пример из статьи: «1 метр» и «39,37 дюйма» — это **два разных экземпляра** PhysicalQuantity (именно экземпляра, а не одного объекта с двумя описаниями). Их эквивалентность выражается не тождеством, а отдельной аксиомой пересчёта единиц. Под PhysicalQuantity — измеримые величины: LengthMeasure, MassMeasure, TemperatureMeasure, CurrencyMeasure, TimeDuration.

\[ 1\,\text{м} \ne 39{,}37\,\text{дюйма} \quad \text{как экземпляры, но} \quad \mathrm{MeasureFn}(1, \text{Meter}) = \mathrm{MeasureFn}(39{,}37, \text{Inch}) \ \text{по величине} \]

### Attribute (Атрибут)

Свойство, качество, состояние, «приписанное» объекту — но не являющееся самостоятельной вещью. Хрестоматийный пример: вместо разбиения животных на классы «самки» и «самцы» SUMO вводит атрибуты Female и Male как **экземпляры** класса BiologicalAttribute, а не как классы сущностей (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). Связь с объектом — предикат `attribute`: `(attribute Fido Female)`.

Подклассы Attribute: BiologicalAttribute, PsychologicalAttribute, NormativeAttribute (оценки «хорошо/плохо»), SubjectiveAssessmentAttribute (субъективные оценки), RelationalAttribute.

\[
\mathrm{attribute}(x, A),\ A \in \mathrm{BiologicalAttribute} \quad \text{— «у } x \text{ есть свойство } A\text{»}
\]

### SetOrClass (Множество или класс)

Теоретико-множественная ветка. Класс — абстрактная совокупность, определяемая своим содержанием (интенсионалом), а не перечислением. Именно здесь живут Relation (отношения) и Function (функции). Бинарные отношения делятся по свойствам: TransitiveRelation, SymmetricRelation, ReflexiveRelation, EquivalenceRelation, PartialOrderingRelation — а также по предметной области: SpatialRelation, TemporalRelation, ProbabilityRelation, CaseRole (https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif). Пример из разобранной выше аксиомы: отношение `subclass` — экземпляр PartialOrderingRelation, который сам — подкласс TransitiveRelation (https://adimen.ehu.eus/~rigau/publications/TR007-W06-ETL.pdf).

\[
\mathrm{subclass} \in \mathrm{PartialOrderingRelation} \subseteq \mathrm{TransitiveRelation}
\]

Пример отношения как «истинного на паре вещей»: `(subclass Dog Animal)` — это утверждение об упорядоченной паре (Dog, Animal), экземпляр отношения subclass.

### Proposition (Пропозиция)

Семантическое содержание, которое может быть выражено любым носителем — одним предложением, книгой, целой библиотекой (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). Одна пропозиция — много формулировок: «2+2=4», «два плюс два равно четырём», «quatuor» — все выражают одну и ту же Proposition. Именно пропозиции являются содержанием знаний (`knows`, `believes`), обещаний (`Promising`), утверждений (`Stating`):

\[
\mathrm{knows}(x, P) \quad \text{где } P \in \mathrm{Proposition}
\]

### Graph (Граф)

Абстрактный граф как математическая структура. Под ним GraphElement (GraphNode, GraphArc), причём GraphElement наследуется и от Graph — редкий в SUMO пример множественного наследования (https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif).

### Сводная таблица ветки Abstract

| Подкласс | Что это | Примеры экземпляров |
|---|---|---|
| Quantity | величины, числа | 7; 1 метр; 39,37 дюйма; π |
| Attribute | свойства, качества | Female, Male; DeviceOn; Solid; Liquid |
| SetOrClass | классы, множества, отношения | Dog; Relation; `subclass`; TransitiveRelation |
| Proposition | семантическое содержание | содержание теоремы Пифагора; содержание обещания |
| Graph | абстрактный граф | сетевая структура; маршрут как граф |

## 6. Наглядный пример: одно и то же во всех трёх ветках

Чтобы связать всё вместе, возьмём одну ситуацию и покажем, как она разложена по уровням SUMO:

**Ситуация:** «Алиса выключила лампу в 22:00».

```
(instance Alice Human)               ; Physical → Object → Agent
(instance Lamp1 Device)              ; Physical → Object → SelfConnectedObject → Artifact
(instance Off1 TurningOffDevice)     ; Physical → Process → InternalChange
(agent Off1 Alice)                   ; роль: кто сделал
(patient Off1 Lamp1)                 ; роль: над чем
(time Off1 (HourFn 22 Day1))         ; когда
(holdsDuring (EndFn (WhenFn Off1)) (attribute Lamp1 DeviceOff))  ; результат-состояние
```

\[
\begin{aligned}
&\mathrm{Human}(\text{Alice}) \wedge \mathrm{Device}(\text{Lamp1}) \wedge \mathrm{TurningOffDevice}(\text{Off1}) \\
&\wedge\ \mathrm{agent}(\text{Off1}, \text{Alice}) \wedge \mathrm{patient}(\text{Off1}, \text{Lamp1}) \\
&\wedge\ \mathrm{holdsDuring}\big(\mathrm{EndFn}(W(\text{Off1})),\ \mathrm{DeviceOff}(\text{Lamp1})\big)
\end{aligned}
\]

copy

$$
\begin{aligned}
&\mathrm{Human}(\text{Alice}) \wedge \mathrm{Device}(\text{Lamp1}) \wedge \mathrm{TurningOffDevice}(\text{Off1}) \\
&\wedge\ \mathrm{agent}(\text{Off1}, \text{Alice}) \wedge \mathrm{patient}(\text{Off1}, \text{Lamp1}) \\
&\wedge\ \mathrm{holdsDuring}\big(\mathrm{EndFn}(W(\text{Off1})),\ \mathrm{DeviceOff}(\text{Lamp1})\big)
\end{aligned}
$$


И вот здесь появляется ветка Abstract: классы Human, Device, TurningOffDevice, атрибут DeviceOff, а также пропозиция «лампа выключена» — всё это Abstract; в мире физических сущностей есть только Алиса, лампа и само событие выключения. Получается платоновская картина «сверху вниз»: абстрактные «идеи» (классы, атрибуты, пропозиции) — и физические «вещи» (агенты, объекты, процессы), связанные между собой предикатами `instance`, `attribute` и ролями процессов.

## Источники (полные адреса)

- Нилс, Пиз — «Towards a Standard Upper Ontology» (основной текст): https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf
- Тот же PDF на сайте автора: https://adampease.com/FOIS.pdf
- Merge.kif (главный файл SUMO): https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif
- Исходники SUMO в CLIF: https://github.com/gruninger/colore/blob/master/ontologies/sumo/sumo-cl.clif
- Лекция «ИНТУИТ» о терминологии SUMO: https://new2.intuit.ru/studies/professional_skill_improvements/1627/courses/270/lecture/6851?page=2
- Semantic Modeling with SUMO (процессы, роли, примеры): https://arxiv.org/pdf/2012.15835
- Adimen-SUMO (перевод в логику первого порядка): https://adimen.ehu.eus/~rigau/publications/TR007-W06-ETL.pdf
- SUMO→UML (атрибуты и абстрактные сущности): https://www.academia.edu/77748106/Automatic_SUMO_to_UML_translation
- Обзор SUMO с примерами: https://inariksit.github.io/cclaw-zettelkasten/sumo.html
- Википедия про KIF: https://en.wikipedia.org/wiki/Knowledge_Interchange_Format
- Платон, «Тимей» (SEP): https://plato.stanford.edu/entries/timaeus/

Могу, если интересно, разобрать детально ещё один узкий вопрос: чем SUMO отличается от DOLCE и BFO в трактовке процесса/объекта — там видны прямо противоположные философские решения, и это наглядно покажет, насколько «верхние онтологии» несут в себе метафизику, а не только инженерию.
