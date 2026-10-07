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

