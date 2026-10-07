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

## 2

# Онтологии Аристотеля и Декарта в терминологии SUMO

Вы не уточнили, чья онтология, — поэтому делаю обе: Аристотель и Декарт дают два противоположных полюса (и если Аристотель ложится на SUMO почти без остатка, то Декарт демонстрирует, где SUMO ломается). Все формулы — в юникоде, без LaTeX. Ссылки дублирую полными текстовыми строками.

---

# Часть I. Онтология Аристотеля в SUMO

## Аристотель вкратце

В «Категориях» Аристотель делит всё сущее на десять категорий: «сущность, количество, качество, отношение, место, время, положение, обладание, действие, претерпевание» (https://en.wikipedia.org/wiki/Categories_(Aristotle)). Сущность (οὐσία, усия) делится на два вида:

- **Первая сущность** — конкретная индивидуальная вещь («этот человек», «эта лошадь»), которая «не сказывается ни о каком субъекте и не находится ни в каком субъекте». Сократ — первая сущность (https://classicalliberalarts.com/trivium/logic/aristotle-categories-primary-secondary-substance/).
- **Вторая сущность** — виды и роды, к которым принадлежат первые: «человек», «животное». Они «сказываются о субъекте», но не находятся в нём (https://plato.sydney.edu.au/entries/aristotle-categories/).

Ключевая аксиома Аристотеля: если бы первые сущности не существовали, не могло бы существовать ничего другого — всё остальное либо сказывается о них, либо находится в них (2b5) (https://www.researchgate.net/publication/351229044_Substance_and_Predication_in_Aristotle's_Categories).

В зрелых работах («Физика», «Метафизика») добавляется **гилеморфизм**: всякая физическая вещь — соединение материи (ὕλη) и формы (μορφή, эйдос), причём материя — чистая возможность, а форма — действительность (https://plato.stanford.edu/entries/form-matter/). Там же — учение о **возможности (dynamis) и действительности (energeia)** и о **четырёх причинах** (материальной, движущей, формальной, целевой). Важно: в «Категориях» гилеморфизма ещё нет — там Сократ просто первая сущность; примат формы появляется в «Метафизике» (https://www.uvm.edu/~jbailly/courses/Aristotle/categoriesNotes.html).

## Тезисы Аристотеля и SUMO-интерпретация

### 1. Первая сущность = индивидуальный физический объект

**Аристотель:** первая сущность — «этот конкретный человек, эта лошадь», существующая сама по себе.

**SUMO:** это ровно экземпляр Object (Physical). Причём совпадение глубже поверхностного: SUMO, как и Аристотель, — 3D-онтология (эндурантизм): объект полностью присутствует в каждый момент своего существования, у него есть чёткие пространственно-временные границы. Формально:

```
(instance Socrates1 Human)
(instance Bucephalus Horse)
```

Сократ₁ ∈ Человек, Буцефал ∈ Лошадь, Человек ⊆ Животное ⊆ Организм ⊆ Объект.

Локализуемость первой сущности — прямое следствие определения Physical: у всякого физического объекта существуют координаты в пространстве и времени (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf):

∀X ( Physical(X) → ∃L ∃T ( located(X, L) ∧ time(X, T) ) )

Это аристотелевское «обладать собственным местом» — признак субстанции, а не акциденции.

### 2. Вторая сущность = класс; «сказываться» = instance/subclass

**Аристотель:** «человек» и «животное» — вторые сущности; вид ближе к первичной сущности, чем род («из вторых сущностей вид — более сущность, чем род», 2b10).

**SUMO:** виды и роды — это SetOrClass, а «сказываться о субъекте» — отношение instance:

Сократ₁ ∈ Человек («человек сказывается о Сократе»)
Человек ⊆ Животное («животное сказывается о человеке»)

Иерархия родов и видов Аристотеля (дерево Порфирия: субстанция → тело → живое тело → животное → человек) — это буквально цепочка `subclass`-связей (https://classicalliberalarts.com/trivium/logic/aristotle-categories-primary-secondary-substance/). Тонкое место: у Аристотеля вторая сущность — это универсалия особого рода, а не «куча предметов»; SUMO трактует классы теоретико-множественно, что философски спорно, но структурно совместимо.

### 3. Девять акцидентальных категорий → атрибуты, величины, отношения, роли

Остальные девять категорий не существуют самостоятельно — они «находятся в» первых сущностях. SUMO разводит их по разным веткам Abstract и Physical:

| Категория Аристотеля | Пример из «Категорий» | SUMO-концепт |
|---|---|---|
| Количество | «четырёхлоктенный», «пятилоктенный» | PhysicalQuantity: LengthMeasure |
| Качество | «белый», «грамматичный» | Attribute (экземпляры атрибутов) |
| Отношение | «двойной», «половина», «больший» | Relation; атрибуты-реляции |
| Место | «в Ликее», «на рынке» | located(x, Region), GeographicArea |
| Время | «вчера», «в прошлом году» | time(x, T), WhenFn, DayFn |
| Положение | «сидит», «лежит» | атрибут позы (Attribute) |
| Обладание | «вооружён», «обут» | attribute(x, …) |
| Действие | «рассекает», «прижигает» | роль agent у Process |
| Претерпевание | «быть рассечённым», «быть прижигаемым» | роль patient у Process |

Примеры из самой таблицы «Категорий» — https://en.wikipedia.org/wiki/Categories_(Aristotle).

Формально на примере Сократа, белящегося на рынке:

Сократ₁ ∈ Человек (сущность)
длина(Сократ₁) = 4 локтя (количество)
attribute(Сократ₁, Белый) (качество)
located(Сократ₁, Рынок) (место)
time(Сократ₁, Вчера) (время)
attribute(Сократ₁, Сидящий) (положение)
Действие: ∃P ( Рассекание(P) ∧ agent(P, Хирург) ∧ patient(P, Сократ₁) ) (действие/претерпевание)

Обратите внимание: пары «действие — претерпевание» и «движущая причина» в SUMO становятся двумя ролями одного процесса — Аристотель сам это отмечал, говоря, что «активное и пассивное — часто вопрос перспективы» (https://www.uvm.edu/~jbailly/courses/Aristotle/categoriesNotes.html).

### 4. Сущность (эссенция): род + видовое отличие

**Аристотель:** определение = род + видовое отличие; сущность человека — «разумное животное».

**SUMO:** определение класса через необходимые и достаточные условия:

∀x ( x ∈ Человек → ( x ∈ Животное ∧ attribute(x, Разумный) ) )

Более того, в SUMO это уже сделано: Human — подкласс CognitiveAgent (познающего агента), а не просто Animal. Рациональность в SUMO — не атрибут, а класс-признак: способность к рассуждению встроена в тип. Здесь SUMO даже «аристотелевее» самого Аристотеля в одной точке и менее аристотелев в другой: у Аристотеля разум — функциональная форма души, у SUMO — структурный признак класса.

### 5. Гилеморфизм: материя и форма → частичное соответствие

**Аристотель:** всякая природная вещь = материя (возможность, пассивное, неопределённое) + форма (действительность, активное, определяющее). Материя без формы не существует (https://www.britannica.com/topic/hylomorphism; https://plato.stanford.edu/entries/form-matter/).

**SUMO:** прямого аналога нет, и это принципиально:

- Ближайший аналог **материи** — класс Substance (субстанция-вещество: вода, глина, бронза). Но здесь ложный друг перевода: аристотелевская «первая материя» — это чистая потенция, «то, что само по себе не является ни вещью, ни количеством, ни какой-либо другой категорией» (https://en.wikipedia.org/wiki/Hylomorphism), а SUMO Substance — вполне определённое физическое вещество с собственными свойствами. Бронза статуи — это конкретный Physical, а не «неопределённый субстрат».
- Ближайший аналог **формы** — определение класса (тот самый интенсионал), плюс аксиомы о структуре частей и атрибутах. «Статуя = бронза + конфигурация» в SUMO:

Статуя1 ∈ Статуя, материал(Статуя1, Бронза), часть(Статуя1, Голова1)…

- Релятивность материи Аристотеля («глина — материя кирпича, кирпич — материя дома») передаётся отношением `material`/`part` с разной гранулярностью, но понятия «чистой материи» (prote hyle) в SUMO нет — и не может быть: у первой материи нет никаких свойств, а всякий Physical в SUMO локализован и имеет атрибуты.

Формальный итог: Вещь = Материя ⊕ Форма в SUMO распадается на два независимых описания одного Physical-объекта, но само «склеивание» возможности и действительности не моделируется.

### 6. Возможность и действительность → ModalAttribute и Capability

**Аристотель:** dynamis (способность, потенция) ↔ energeia (актуальность). Камень способен упасть; падение — актуализация этой способности.

**SUMO** имеет два механизма:

**а) Модальные атрибуты.** SUMO включает модальные операторы необходимости, возможности, деонтические операторы и модальности знания/веры/желания, интерпретируемые семантикой Крипке (https://link.springer.com/chapter/10.1007/978-3-031-43369-6_14):

```
(modalAttribute ?FORMULA Possibility)
(modalAttribute ?FORMULA Necessity)
```

Возможность(φ) ≡ modalAttribute(φ, Possibility)
Необходимость(φ) ≡ modalAttribute(φ, Necessity)
Аксиома связи: ∀φ ( modalAttribute(φ, Necessity) → modalAttribute(φ, Possibility) ) — «необходимое возможно» (https://www.researchgate.net/publication/370776102_Translating_SUMO-K_to_Higher-Order_Set_Theory).

**б) Предикат capability.** В Merge.kif есть `(capability ?PROCESS ?ROLE ?OBJ)`: объект ?OBJ может играть роль ?ROLE в процессе ?PROCESS. Для Аристотеля это почти буквально «обладание динамис»:

```
(capability Hearing patient Organism)   ; организм способен воспринимать
```

Способен(x, роль r, процесс P) — «x имеет динамис актуализировать роль r в P».

**Актуализация** — это просто выполнение: экземпляр процесса существует:

∃P ( P ∈ Падение ∧ agent(P, Камень) ∧ time(P, t₁) )

Динамис → модальная пропозиция (Abstract); актуализация → процесс (Physical). Это красивое соответствие: аристотелевская потенция не физична и не абстрактна, она «между» — SUMO решает проблему, отправив потенцию в модальную логику, т. е. в Abstract.

### 7. Четыре причины → ролевые отношения процесса

Пример: строится дом.

| Причина | Аристотель | SUMO |
|---|---|---|
| Материальная | «из чего»: кирпичи, брёвна | resource / material: ресурс процесса |
| Движущая | «от кого»: зодчий | agent + instrument |
| Формальная | «что это»: план дома | Proposition (план) + represents |
| Целевая | «ради чего»: для жилья | purpose / hasPurpose |

```
(instance Build1 Making)
(agent Build1 Architect1)
(resource Build1 Bricks1)
(result Build1 House1)
(represents Plan1 House1)
(purpose Build1 Dwelling)
```

Все четыре причины — это отношения к одному процессу. Отметим структурный сдвиг: у Аристотеля причины — свойства сущностей, у SUMO — роли процессов; целевая причина («ради чего») живёт в SUMO как атрибут интенционального процесса.

### 8. Неподвижный перводвигатель — trouble spot

Аристотелевский перводвигатель — чистая актуальность, форма без материи, которая движет мир, будучи неподвижной («предмет желания и мысли»). В SUMO любой агент — Object ⊆ Physical, значит, должен иметь пространственное положение и временную длительность. «Чистая актуальность без материи» формально противоречит определению Physical. SUMO может смоделировать перводвигателя как CognitiveAgent с нулевой протяжённостью — но это будет физический объект с экзотическими свойствами, а не метафизический принцип. Это ровно та же трещина, что мы увидим у Декарта, только в миниатюре.

### 9. Важное отличие: у Аристотеля нет категории «событие»

Десять категорий не содержат события как самостоятельной сущности: процесс для Аристотеля — это действие или претерпевание сущности, а не отдельная «вещь». SUMO же реифицирует процессы: TurningOffDevice — полноценная сущность, о которой можно утверждать время, место, агента. Это, пожалуй, самое большое расхождение: SUMO наследует не «Категории», а более позднюю традицию (Брентано, Рассел, анализ событий), где события — первоклассные объекты.

## Итоговая таблица: Аристотель → SUMO

| Тезис Аристотеля | SUMO | Точность |
|---|---|---|
| Первая сущность («этот человек») | экземпляр Object | точное |
| Вторая сущность (вид, род) | SetOrClass + subclass | структурное, с оговоркой об универсалиях |
| 9 акциденций | Attribute, PhysicalQuantity, Relation, Region, CaseRole | точное поэлементное соответствие |
| «Не существует ничего вне первых сущностей» | всё Physical локализовано; акциденции не самостоятельны | точное по духу |
| Род + видовое отличие = определение | необходимые и достаточные условия класса | точное |
| Гилеморфизм (материя + форма) | Substance + структура класса | частичное; «первая материя» непереводима |
| Потенция и акт | ModalAttribute + capability + экземпляр Process | точное по механизму |
| Четыре причины | resource, agent, Proposition, purpose | точное |
| Перводвигатель | нет корректного аналога | непереводимый остаток |
| Событие как категория | отсутствует; SUMO реифицирует процессы | расхождение в обратную сторону |

**Вывод:** SUMO — в значительной мере аристотелевская онтология: иерархия родов и видов, различение «субстанция/атрибут», ролевая структура причин. Не случайно парадигма «верхних онтологий» восходит к Аристотелю, а не к Платону: СУМО-классы — это «вторые сущности», живущие не на небе, а в аксиомах.

---

# Часть II. Онтология Декарта в SUMO

## Декарт вкратце

Картезианство характеризуется последовательным дуализмом: мир разделён на две самостоятельные субстанции — протяжённую (res extensa) и мыслящую (res cogitans), при этом проблема их взаимодействия «в принципе неразрешима в рамках учения самого Декарта» (https://ru.wikipedia.org/wiki/Картезианство; то же в https://ru.ruwiki.ru/wiki/Картезианство). Декарт в «Принципах философии» (ст. 51–52) определяет субстанцию как «вещь, не нуждающуюся ни в чём для своего существования, кроме Бога»; обе субстанции самодостаточны и могут существовать независимо друг от друга (https://philosophy.stackexchange.com/questions/28048/what-is-res-in-res-cogitans-or-res-extensa). У каждой субстанции есть главный атрибут: у материи — протяжённость, у духа — мышление; всё остальное — модусы (способы) этих атрибутов. Человек — соединение обеих субстанций; взаимодействие Декарт локализовал в шишковидной железе, что современники и потомки считали самым уязвимым местом системы (https://ru.ruwiki.ru/wiki/Картезианство).

## Тезисы Декарта и SUMO-интерпретация

### 0. Предупреждение о ложном друге

Слово «субстанция» в SUMO и у Декарта — не одно и то же. Класс SUMO Substance — это однородное вещество (вода, золото), подкласс физического объекта. Декартовская субстанция — метафизический носитель атрибутов, «то, что существует само по себе». Ниже «декартовскую субстанцию» я пишу с большой буквы (Субстанция), чтобы не путать с классом Substance.

### 1. Две Субстанции против двойного разбиения SUMO

**Декарт:** существуют ровно две сотворённые Субстанции — мыслящая и протяжённая, плюс несотворённая — Бог.

**SUMO:** верхнее разбиение тоже двойное, но критерий другой:

∀X ( X ∈ Physical ∨ X ∈ Abstract ), и Physical ∩ Abstract = ∅

Деление — по локализуемости в пространстве-времени, а не по атрибуту (протяжённость vs мышление). Уже на этом шаге видно: декартовская пара не совпадает с SUMO-парой. Res extensa попадает в Physical, а res cogitans — никуда: она не локализована (значит, не Physical), но и не абстрактна, ибо мыслит во времени, а время — координата Physical. Это первая формальная трудность, разберу её ниже (пункт 3).

### 2. Res extensa → Physical → Object

**Декарт:** протяжённая субстанция; её модусы — фигура, размер, движение; всё телесное измеримо, а сущность тела — быть протяжённым.

**SUMO:** тела — это CorpuscularObject и Substance, их модусы красиво ложатся на аппарат:

- протяжённость → измерения: length, width, depth (LengthMeasure, PhysicalQuantity);
- фигура → ShapeChange, ShapeAttribute;
- движение → Motion (Process);
- деление материи → часть-целое, Substance.

∀B ( B ∈ Тело → ∃L ∃W ∃D ( длина(B, L) ∧ ширина(B, W) ∧ глубина(B, D) ) )

Здесь соответствие почти идеальное: декартовская материя — это и есть SUMO Physical в чистом виде, без всякой «психики». Геометризация природы Декартом предвосхищает то, как SUMO и близкие к ней онтологии описывают физический мир: через координаты, величины и меры.

### 3. Res cogitans: где SUMO не может её разместить

**Декарт:** мыслящая субстанция — нематериальна, непротяжённа, но действует во времени (думает, сомневается, желает).

**SUMO:** попробуем разместить дух M. Любая сущность — Physical или Abstract. Два случая, и оба ведут к противоречию с определением Декарта.

**Случай А: M — Physical.** Тогда M — либо Object, либо Process. В SUMO все агенты — физические: (subclass Agent Object) ⊆ Physical (https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf). Значит:

M ∈ Agent → M ∈ Object → ∃L ∃T ( located(M, L) ∧ time(M, T) )

Но res cogitans по определению **непротяжённа** — у неё нет пространственного положения. Противоречие с декартовским определением.

**Случай Б: M — Abstract.** Тогда у M нет ни положения, ни времени: абстрактные сущности «не могут существовать в определённом месте и в определённое время без физической оболочки» (https://www.academia.edu/77748106/Automatic_SUMO_to_UML_translation). Но акты мышления — процессы во времени:

∃P ( Сомнение(P) ∧ agent(P, M) ∧ time(P, t₁) )

Здесь agent требует, чтобы M была Agent ⊆ Object ⊆ Physical — противоречие в другом направлении.

**Дилемма формально:**

∀M ( МыслящаяСубстанция(M) → ( M ∈ Physical → протяжённа(M) ) ∧ ( M ∈ Abstract → ¬акты_во_времени(M) ) )
Но Декарт утверждает: ¬протяжённа(M) ∧ акты_во_времени(M)
Следовательно: ¬∃M МыслящаяСубстанция(M) в онтологии SUMO

Вывод: **декартовская мыслящая субстанция непредставима в SUMO без изменения верхнего разбиения.** Требовалось бы: (partition Entity Physical Mental Abstract) — с Mental, имеющей время, но не пространство. Это не «недоработка» SUMO, а её метафизическое решение: верхняя онтология приняла физикалистски-нейтральную позицию, в которой нет места субстанции-без-протяжённости.

Есть и обходные пути, оба с потерями:

- **Физикалистское прочтение:** дух = CognitiveAgent → Human (Organism). Дуализм исчезает: мышление — процессы физического мозга (психологические процессы — ветка Process). Так часто и делают в прикладных онтологиях.
- **Функционалистское прочтение:** «дух» — не сущность, а набор способностей: capability(x, думать, P), believes(x, φ), desires(x, φ). Тогда декартовское cogito описывается без специальной субстанции — но и Декарт уже не восстановим, это скорее ответ современников Декарту.

### 4. Акты мышления → PsychologicalProcess и модальности знания

Конкретные cogitationes — «я сомневаюсь», «я утверждаю», «я воображаю» — ложатся на SUMO-процессы:

```
(instance Doubt1 PsychologicalProcess)
(agent Doubt1 Mind1)
(time Doubt1 (HourFn 3 Day1))
```

Сомнение₁ ∈ ПсихологическийПроцесс, agent(Сомнение₁, Дух₁), time(Сомнение₁, t₁)

Модальности знания и веры — в SUMO есть: knows, believes, desires (перечислены в обзоре модальностей SUMO — https://link.springer.com/chapter/10.1007/978-3-031-43369-6_14):

knows(Сократ₁, φ), где φ ∈ Proposition

Cogito ergo sum в SUMO-терминах: из того, что существует процесс мышления P с агентом «я», следует, что существует экземпляр агента:

∃P ( Мышление(P) ∧ agent(P, я) ) → ∃X ( X ∈ Агент ∧ X = я )

Заметьте: этот вывод корректен только при чтении «я» как физического CognitiveAgent. Декартовская строгость («я — мыслящая вещь, а не тело») в SUMO не выражается — см. пункт 3.

### 5. Атрибуты и модусы → Attribute

**Декарт:** у каждой Субстанции главный атрибут (протяжённость / мышление); модусы — частные проявления (форма тела; конкретные мысли души).

**SUMO:** атрибуты — экземпляры Attribute (ветка Abstract). Главные атрибуты Субстанций можно смоделировать как атрибуты второго порядка:

attribute(Тело₁, Протяжённое), attribute(Дух₁, Мыслящее) — но помните: Дух₁ разместить негде (пункт 3).

Модусы: attribute(Тело₁, Шарообразное), attribute(Дух₁, Сомневающийся) — с поправкой на ту же проблему.

Механизм соответствует (модусы — это и есть атрибуты в SUMO-смысле), но только для res extensa; для res cogitans механизм применим лишь при физикалистском прочтении духа.

### 6. Бог — бесконечная Субстанция

**Декарт:** Бог — бесконечная, несотворённая субстанция, гарант истины ясных и отчётливых идей.

**SUMO:** онтология агностична: Бога можно описать как экземпляр Agent (сущность, способная действовать):

```
(instance God Agent)
(agent Creation1 God)   ; акт творения
(result Creation1 World1)
```

Но SUMO не подтверждает и не опровергает существования такого агента — она предоставляет словарь, а не истину. Показательно, что для декартовского Бога-гаранта («не обманывает, ибо обман — несовершенство») в SUMO нет понятия вообще: совершенство, как мы видели в разборе Платона, — это NormativeAttribute, приписываемая сущностям, а не свойство, конституирующее субстанцию.

### 7. Проблема взаимодействия: камень, шишковидная железа и логика причин

**Декарт:** душа и тело взаимодействуют (я уворачиваюсь от камня; я захотел — рука поднялась), и это их взаимодействие — самое слабое место системы: как нематериальное приводит в движение материальное? (https://ru.ruwiki.ru/wiki/Картезианство).

**SUMO** фиксирует проблему формально. Причинность в SUMO связывает **процессы**:

∀A ∀B ( causes(A, B) → ( A ∈ Process ∧ B ∈ Process ) )

Теперь попробуем записать декартовское взаимодействие:

- Тело → дух (камень летит, я уворачиваюсь): ∃P ( Perception(P) ∧ patient(P, Дух₁) ∧ origin(P, Камень) ) — patient и origin требуют, чтобы Дух₁ был Physical.
- Дух → тело (захотел — поднял руку): ∃Q ( Intention(Q) ∧ agent(Q, Дух₁) ∧ result(Q, ПодъёмРуки) ) — agent требует того же.

Оба отношения требуют, чтобы Дух₁ ∈ Physical, а это (пункт 3) противоречит определению res cogitans. В SUMO взаимодействие нематериального с материальным **логически невозможно**, потому что причина и следствие — процессы, а процессы — Physical. Декартовская «шишковидная железа» была попыткой дать взаимодействию физическое место; SUMO делает проблему ещё жёстче: не «где» взаимодействие, а «каким предикатом» его вообще записать. У Декарта выход — Бог как гарант каузального соответствия; у SUMO выхода нет, есть только обход (физикалистское прочтение духа из пункта 3-А).

### 8. Врождённые идеи

**Декарт:** истины разума (идея Бога, математические истины) врождены, а не получены из опыта.

**SUMO:** врождённость — эпистемологическая характеристика, но её можно смоделировать отрицательно: пропозиция φ известна агенту без какого-либо процесса восприятия, породившего её:

∀X ∀φ ( ВрождённаяИдея(X, φ) → knows(X, φ) ∧ ¬∃P ( Perception(P) ∧ agent(P, X) ∧ represents(P, φ) ) )

Красивое следствие: пропозиция в SUMO — Abstract, она существует независимо от того, кто её знает и когда; в этом смысле «врождённость» идей в SUMO банальна — все пропозиции «вне времени». Но декартовская сильная версия (идеи даны душе изначально, а не абстрагированы из опыта) требует эпистемологии абстракции, которой в SUMO нет.

## Итоговая таблица: Декарт → SUMO

| Тезис Декарта | SUMO | Точность |
|---|---|---|
| Две сотворённые Субстанции + Бог | partition Physical / Abstract — другой критерий | структурный конфликт |
| Res extensa (протяжённость) | Physical → Object → CorpuscularObject, меры | точное |
| Модусы тел (фигура, движение) | Attribute, Motion, ShapeChange | точное |
| Res cogitans (мыслящая субстанция) | нет места в разбиении; дилемма Physical/Abstract | непредставимо |
| Акты мышления | PsychologicalProcess (только при физикалистском чтении духа) | частичное, с потерей дуализма |
| Атрибуты и модусы | Attribute | механически точное |
| Бог — бесконечная субстанция | экземпляр Agent (агностично) | частичное |
| Взаимодействие души и тела | causes требует физических процессов → противоречие | непредставимо |
| Cogito ergo sum | вывод из существования процесса мышления | точное только при физикализме |
| Врождённые идеи | knows + отсутствие Perception-источника | частичное |

## Сравнительный итог по трём онтологиям

| | Платон | Аристотель | Декарт | SUMO |
|---|---|---|---|---|
| Верхнее деление | идеи / вещи | 10 категорий | 3 Субстанции | Physical / Abstract |
| Критерий деления | подлинность бытия | «сказываться / находиться» | атрибут субстанции | локализуемость |
| Индивиды | теневые копии | первые сущности | модусы субстанций | экземпляры Physical |
| Универсалии | вне мира | вторые сущности («в» вещах) | врождённые идеи | классы Abstract |
| Форма | эйдос-образец | форма вещи (акт) | главный атрибут | класс/атрибут |
| Возможность | — | dynamis | — | ModalAttribute, capability |
| Причина | Демиург | 4 причины | Бог-гарант | роли процессов + causes |
| Совместимость с SUMO | структурная, не по духу | почти полная | неполная: res cogitans непредставима | — |

## Общий вывод

Аристотель и Декарт показывают две разные судьбы метафизики внутри инженерной онтологии. Аристотель оказался «предком» SUMO: его категории переехали в верхний уровень почти без потерь — потому что SUMO строилась как иерархия родов и видов, то есть продолжение аристотелевской логики классификации. Декарт, напротив, упирается в верхнее разбиение: его мыслящая субстанция нарушает саму ось «локализуемо / не локализуемо». Что примечательно, разрыв Декарта с SUMO — это ровно та точка, где он разошёлся и с Аристотелем: декартовский дуализм отбросил гилеморфизм, и SUMO, унаследовав аристотелевскую структуру, унаследовала вместе с ней и неспособность выразить декартовскую душу (https://mindmatters.ai/2021/08/how-did-descartes-come-to-make-such-a-mess-of-dualism/ — обсуждение того, как отказ от гилеморфизма породил проблему сознания; с осторожной подачей как мнение комментаторов). Верхняя онтология, таким образом, — не нейтральный словарь: выбирая partition, она неявно решает метафизические споры, тянущиеся от Платона через Аристотеля к Декарту.

## Ссылки (полные адреса)

**Аристотель:**
- Stanford Encyclopedia of Philosophy, «Aristotle's Categories»: https://plato.stanford.edu/entries/aristotle-categories/
- То же, зеркало: https://plato.sydney.edu.au/entries/aristotle-categories/
- Wikipedia, «Categories (Aristotle)» (перевод фрагмента о десяти категориях): https://en.wikipedia.org/wiki/Categories_(Aristotle)
- Конспект «Категорий» с четырёхзначной схемой (Вермонтский университет): https://www.uvm.edu/~jbailly/courses/Aristotle/categoriesNotes.html
- «Primary and Secondary Substance in Aristotle's Categories»: https://classicalliberalarts.com/trivium/logic/aristotle-categories-primary-secondary-substance/
- «Substance and Predication in Aristotle's Categories» (ResearchGate): https://www.researchgate.net/publication/351229044_Substance_and_Predication_in_Aristotle's_Categories
- Stanford Encyclopedia of Philosophy, «Form vs. Matter» (гилеморфизм): https://plato.stanford.edu/entries/form-matter/
- Зеркало SEP: https://seop.illc.uva.nl/entries/form-matter/
- Britannica, «Hylomorphism»: https://www.britannica.com/topic/hylomorphism
- Wikipedia, «Hylomorphism»: https://en.wikipedia.org/wiki/Hylomorphism
- Peramatzis, «Aristotle's Hylomorphism: The Causal-Explanatory Model»: https://storage.googleapis.com/jnl-up-j-m-files/journals/1/articles/2/submission/proof/2-1-49-1-10-20180521.pdf

**Декарт:**
- Википедия, «Картезианство»: https://ru.wikipedia.org/wiki/Картезианство
- РУВИКИ, «Картезианство»: https://ru.ruwiki.ru/wiki/Картезианство
- Philosophy Stack Exchange, «What is res in res cogitans or res extensa?» (с цитатой из «Принципов философии», ст. 52): https://philosophy.stackexchange.com/questions/28048/what-is-res-in-res-cogitans-or-res-extensa
- Mind Matters, обсуждение следствий дуализма Декарта: https://mindmatters.ai/2021/08/how-did-descartes-come-to-make-such-a-mess-of-dualism/
- Психологический разбор cogito (как дополнение): https://www.b17.ru/article/1001912/
- Stanford Encyclopedia of Philosophy, «Dualism»: https://plato.stanford.edu/entries/dualism/

**SUMO:**
- Нилс, Пиз — «Towards a Standard Upper Ontology»: https://static.aminer.org/pdf/PDF/000/212/663/towards_a_standard_upper_ontology.pdf
- Merge.kif (главный файл SUMO): https://www.swi-prolog.org/pack/file_details/logicmoo_base/t/KBs/Merge.kif
- «Translating SUMO-K to Higher-Order Set Theory» (модальности в SUMO): https://link.springer.com/chapter/10.1007/978-3-031-43369-6_14
- То же, свободная версия (ResearchGate): https://www.researchgate.net/publication/370776102_Translating_SUMO-K_to_Higher-Order_Set_Theory
- «Semantic Modeling with SUMO»: https://arxiv.org/pdf/2012.15835
- «Automatic SUMO to UML translation» (абстрактные сущности): https://www.academia.edu/77748106/Automatic_SUMO_to_UML_translation
- Википедия, «Suggested Upper Merged Ontology»: https://en.wikipedia.org/wiki/Suggested_Upper_Merged_Ontology
- Портал онтологии: https://www.ontologyportal.org
- Репозиторий: https://github.com/ontologyportal/sumo

Если пойдём дальше по этой линии, логичный следующий шаг — Спиноза: его монизм (одна Субстанция с атрибутами мышления и протяжённости) прямо отвечает на декартовскую проблему взаимодействия, и в SUMO он ложится интересным образом — атрибуты становятся двумя «проекциями» одной сущности, что похоже на моделирование сущности несколькими несводимыми описаниями. Скажите, если нужен и он.
