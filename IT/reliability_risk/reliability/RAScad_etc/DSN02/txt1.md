## 1

Статья Tang, Zhu и Andrada описывает RAScad как ранний вариант model-driven engineering для RAM/RAS: инженер собирает параметризованную архитектурную модель системы, а инструмент автоматически компилирует её в RBD и цепи Маркова для расчёта доступности и надёжности. Ниже — содержательный пересказ и подборка наиболее близких работ, включая несколько открыто доступных полных текстов. 

## Суть статьи

Авторы решают практическую проблему: проектировщики серверов знают архитектуру, резервирование, MTBF/MTTR, сценарии восстановления и обслуживания, но обычно не владеют Markov/Semi-Markov моделированием на уровне, достаточном для ручного построения моделей. Ручная подготовка цепей Маркова при наличии резервирования, диагностики, логистики, неполного восстановления и повторных отказов трудоёмка и легко приводит к ошибкам. 

RAScad — внутренний web-based инструмент Sun Microsystems для моделирования **reliability, availability and serviceability** на стадии проектирования серверных и систем хранения. В его составе были два модуля:

- **Model Generator (MG)** — специализированный генератор моделей для инженера-проектировщика. Он принимает описание RAS-архитектуры на инженерном языке и автоматически создаёт математические модели
- **Graphical Model Builder (GMB)** — графический редактор для эксперта по надёжности, позволяющий вручную строить RBD, Markov и semi-Markov модели
- Оба типа моделей можно комбинировать в одной расчётной схеме. 
Главная идея MG: не заставлять пользователя непосредственно задавать состояния и переходы CTMC, а предоставить промежуточный предметно-ориентированный слой описания системы.

## Как работает RAScad

### Входная модель

Пользователь строит иерархию diagram/block:

- **diagram** представляет систему или подсистему;
- **block** представляет компонент или FRU — например CPU module, power supply, system board, RAID, boot drive;
- блок может содержать поддиаграмму, поэтому вся модель имеет древовидную структуру.

Для каждого блока задаются инженерные параметры, в частности:

- количество экземпляров \(N\) и минимально требуемое количество \(K\);
- MTBF для постоянных отказов;
- интенсивность transient failures;
- времена диагностики, corrective action и verification;
- время реакции сервисной службы \(T_{resp}\);
- вероятность правильной диагностики \(P_{cd}\);
- вероятность скрытого отказа \(P_{lf}\) и время его выявления MTTDLF;
- время автоматического восстановления/failover;
- вероятность возникновения single point of failure в процессе recovery;
- параметры service restriction, логистики, ремонта и reintegration. 
Это важно: RAScad моделирует не только «компонент отказал — компонент починили», а полный операционный путь отказа: обнаружение, автоматическое восстановление, деградацию, вызов сервиса, ожидание, замену, ошибочную диагностику, повторное восстановление и возврат компонента в систему.

### Генерация математической модели

Преобразование устроено так:

1. Каждый diagram переводится в **последовательную RBD** из входящих блоков.
2. Каждый block переводится в **Markov chain**.
3. Если block содержит subdiagram, его Markov-модель соединяется с подчинённой RBD.
4. Итоговая модель образует иерархию RBD и Markov chains. 
При допущении независимости разных типов компонентов доступность диаграммы вычисляется как:

$$
\[
A_{system} = \prod_{i=1}^{n} A_i
\]
$$

где \(A_i\) — доступность блока. Однако сам \(A_i\) в общем случае не сводится к простой формуле: он берётся из автоматически сгенерированной Markov-модели, учитывающей отказ, восстановление, резервирование и сервисные сценарии.

### Типы генерируемых Markov-моделей

Для нерезервированного блока, когда \(N = K\), строится базовая **Markov Model Type 0**.

Для резервированного блока, когда \(N > K\), выбор Markov-модели определяется двумя свойствами:

| Recovery после отказа | Repair/reintegration | Генерируемый тип |
|---|---|---|
| Transparent | Transparent | Type 1 |
| Transparent | Nontransparent | Type 2 |
| Nontransparent | Transparent | Type 3 |
| Nontransparent | Nontransparent | Type 4 |

Под *transparent* авторы понимают операцию без недоступности для пользователя. Например, отказ одного из \(N+1\) блоков питания при power sharing может быть transparent. Перезагрузка сервера для deconfigure отказавшего CPU — пример nontransparent recovery. Замена hot-plug компонента с dynamic reconfiguration может быть transparent repair; замена, требующая выключения или перезагрузки, — nontransparent. 

## Что именно учитывается

В наиболее содержательной модели Type 3 — nontransparent recovery и transparent repair — присутствуют состояния:

- нормальная работа `Ok`;
- transient fault;
- permanent fault в деградированном режиме;
- latent fault;
- automatic recovery;
- single-point-of-failure state;
- service error при неправильной диагностике либо некорректном corrective action;
- состояния второго отказа в режиме деградации.

Тем самым доступность зависит не только от &\(\lambda\)& и \(\mu\), но и от реальной логики эксплуатации: как быстро выявляется скрытый отказ, есть ли риск неудачного failover, когда инициируется сервис, сколько длится доставка/реакция, насколько ремонт достоверен и требуется ли останов системы для reintegration. 
RAScad выдаёт:

- стационарную availability;
- failure and recovery rates;
- интервальные показатели для \((0,T)\);
- MTTF;
- reliability at mission time \(T\);
- interval failure rate;
- hazard rate. 

Авторы подчёркивают, что MG предназначен для сравнительной оценки проектных архитектур, а не для буквального предсказания полевой доступности. Они сообщают о валидации против SHARPE, MEADEP и данных двух серверов Sun Enterprise 10000 за 15 месяцев; для приведённых MG-моделей относительная ошибка годового downtime была менее 0,2%. 

## Ограничения и значение

Ключевые ограничения подхода:

- разные типы компонентов предполагаются независимыми;
- однотипные резервные компоненты считаются симметричными, то есть функционально эквивалентными и с одинаковой интенсивностью отказов;
- уровень детализации — FRU;

С современной точки зрения RAScad интересен как предшественник связки:

$$
\[
\text{Architecture / engineering DSL}
\rightarrow
\text{formal dependability model}
\rightarrow
\text{numerical assessment}
\]
$$

То есть это не просто RBD/CTMC-редактор, а ранняя цепочка model transformation. Для вашей линии Semantic-OpEx особенно ценна идея отделить семантическую инженерную модель — компонент, FRU, резервирование, recovery, repair, logistics — от вычислительного представления CTMC/RBD. В современной реализации этот слой естественно развивать как онтологию RAS-архитектуры с трассировкой «требование → архитектурный элемент → сценарий отказа → формальная модель → KPI availability».

## Похожие статьи

| Работа | Сходство с RAScad | Открытый доступ |
|---|---|---|
| [Liceaga & Siewiorek, “Towards Automatic Markov Reliability Modeling of Computer Architectures” (1986)](https://ntrs.nasa.gov/citations/19860021844) | Самая близкая ранняя предшествующая работа. Программа NASA ARM принимает описание Processor–Memory–Switch архитектуры, поведения компонентов, fault-tolerance strategies и operational requirements, после чего строит Markov-модель reliability/availability. Та же цель: убрать ручное построение состояний и переходов, сделать анализ доступным не только специалистам по Марковским моделям | Полный PDF открыт на NASA NTRS; это работа правительства США, допускающая публичное использование.  [ntrs.nasa](https://ntrs.nasa.gov/citations/19860021844) |
| [Sally A. Musick, “Automated Generation of Reliability Models”](https://ieeexplore.ieee.org/document/196407/) | Более ранняя линия rule-based генерации semi-Markov моделей. В инструменте ASSIST пользователь задаёт правила поведения/переходов, после чего программа рекурсивно строит модель. В отличие от RAScad, входная абстракция ближе к правилам переходов, а не к GUI-описанию RAS-архитектуры через FRU, MTBF, MTTR, recovery и repair | Есть запись IEEE; открытая легальная авторская копия не подтверждена.  [ieeexplore.ieee](https://ieeexplore.ieee.org/iel2/721/5034/00196407.pdf) |
| [Guo & Yang, “Automatic Creation of Markov Models for Reliability Assessment of Safety Instrumented Systems” (2008)](https://www.sciencedirect.com/science/article/abs/pii/S0951832007001238) | Прямой отраслевой аналог для safety instrumented systems. Общая идея — автоматизировать формирование Markov-модели для ремонтируемой, динамической системы; отличие — акцент на functional safety/SIS, а не на серверной RAS-архитектуре | В сети доступна страница издателя с аннотацией; полный текст зависит от доступа к журналу.  [sciencedirect](https://www.sciencedirect.com/science/article/abs/pii/S0951832007001238) |
| [Brameret, Rauzy & Roussel, “Automated Generation of Partial Markov Chain from High Level Descriptions” (2015)](https://www.altarica-association.org/Documentation/pdf/BrameretRauzyRoussel2015-GenerationPartialMarkovChains.pdf) | Современное развитие главной идеи RAScad: высокоуровневая модель AltaRica автоматически превращается в CTMC. Основная добавленная проблема — state-space explosion. Авторы строят не всю цепь, а релевантную частичную CTMC, используя вариант алгоритма Дейкстры и вероятностную меру релевантности состояний | Полный PDF доступен открыто.  [altarica-association](https://www.altarica-association.org/Documentation/pdf/BrameretRauzyRoussel2015-GenerationPartialMarkovChains.pdf) |
| [Kaukewitsch, Papist, Zeller & Rothfelder, “Automatic Generation of RAMS Analyses from Model-based Functional Descriptions using UML State Machines” (2020)](https://arxiv.org/abs/2005.01993) | Ближайший современный MBSE-аналог. Поведение компонентов, включая корректное и отказное, задаётся UML state machines; на этой основе автоматически формируются dependability artifacts и fault trees. Отличие от RAScad: основной результат — fault-tree-oriented анализ, а не параметризованные availability CTMC/RBD для FRU | Полный текст свободно доступен на arXiv; статья также связана с публикацией RAMS 2020.  [web3.arxiv](https://web3.arxiv.org/abs/2005.01993) |

## С чего начать чтение

Если ваша цель — построить современный метод автоматической генерации моделей доступности, я бы расположил работы в таком порядке:

1. **Tang, Zhu, Andrada (2002)** — предметная RAS-семантика: FRU, redundancy, latent fault, recovery, logistics, reintegration, imperfect repair.
2. **Liceaga & Siewiorek (1986)** — ранняя фундаментальная постановка автоматического построения availability/reliability Markov models из архитектуры и стратегий fault tolerance. [ntrs.nasa](https://ntrs.nasa.gov/citations/19860021844)
3. **Brameret, Rauzy & Roussel (2015)** — решение ключевого практического барьера: взрыва пространства состояний при генерации CTMC из высокоуровневой модели. [altarica-association](https://www.altarica-association.org/Documentation/pdf/BrameretRauzyRoussel2015-GenerationPartialMarkovChains.pdf)
4. **Kaukewitsch et al. (2020)** — путь интеграции dependability analysis с SysML/UML и MBSE-процессом. [web3.arxiv](https://web3.arxiv.org/abs/2005.01993)
5. **Guo & Yang (2008)** — перенос идеи в контекст SIS, где особенно важны диагностика, тестирование, proof tests и safety integrity. [sciencedirect](https://www.sciencedirect.com/science/article/abs/pii/S0951832007001238)

Для дальнейшего развития RAScad-подхода наиболее перспективна связка: онтология компонентов и RAS-механизмов → DSL/knowledge graph конфигурации → генератор GSPN/CTMC/RBD → расчёт availability, downtime, risk importance и чувствительности параметров.
