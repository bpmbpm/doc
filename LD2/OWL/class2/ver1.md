## 1

Owl Class Thing Individual Entity

Эти четыре понятия — **Class (класс), Thing (вещь), Individual (индивид, экземпляр), Entity (сущность)** — действительно лежат в основе OWL (языка для онтологий, который используют в Семантическом Вебе). Я коротко разберу, что каждое из них значит и как они связаны. [```1```](https://www.w3.org/TR/owl-ref/)[```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)[```16```](https://keldysh.ru/abrau/2019/theses/58.pdf)

## Class (класс)
Класс в OWL — это как шаблон или концепция в предметной области. Он описывает **множество** каких-то объектов (индивидов), которые объединены общими свойствами. Например, класс `Person` объединяет всех конкретных людей: Ивана, Марию, Петра. [```1```](https://www.w3.org/TR/owl-ref/)[```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)[```16```](https://keldysh.ru/abrau/2019/theses/58.pdf)

В коде класс обычно определяют так:
```owl
<owl:Class rdf:ID="Person">
  ...
</owl:Class>
```
А чтобы связать конкретный индивид (например, Ивана) с классом `Person`, используют свойство `rdf:type`:
```owl
<Person rdf:ID="Иван">
  rdf:type owl:Class ;
  name "Иван";
  age 30 ;
  hasFriend <Иван_Петрович> .
</Person>
```
Здесь `rdf:type` утверждает, что индивид `Иван` является экземпляром класса `Person`. [```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)[```3```](https://www.w3.org/TR/owl-guide/)

Классы можно организовывать в **иерархию** (таксономию) с помощью свойства `rdfs:subClassOf`. Например, `Student` может быть подклассом `Person` (все студенты — это люди). [```17```](https://psta.psiras.ru/read/psta2011_4_85-94.pdf)[```18```](https://studfile.net/preview/9597677/page:25/)

## Thing (вещь)
`owl:Thing` — это **встроенный** (built-in) класс в OWL. Его ключевая особенность в том, что он содержит **абсолютно всё** — любой индивид в онтологии является экземпляром `owl:Thing`. То есть это самый общий класс: всё, что существует в моделируемой области, попадает в него. [```1```](https://www.w3.org/TR/owl-ref/)[```6```](https://daselab.cs.ksu.edu/sites/default/files/06-owl.pdf)[```2```](https://cursosextensao.usp.br/pluginfile.php/970385/mod_resource/content/1/NewOWLPizzaTutorial2021.pdf)[```4```](https://sherdim.ru/pts/semantic_web/REC-owl-guide-20040210_ru.html)

Из этого следует важное следствие: **любой пользовательский класс в OWL автоматически является подклассом `owl:Thing`**. [```1```](https://www.w3.org/TR/owl-ref/)[```3```](https://www.w3.org/TR/owl-guide/)[```4```](https://sherdim.ru/pts/semantic_web/REC-owl-guide-20040210_ru.html)

Пример: если вы определили класс `Dog` (собака), то автоматически `Dog` — это подкласс `owl:Thing`. Даже если вы нигде не писали `Dog` подкласс of `owl:Thing`, система всё равно это подразумевала: всё, что является собакой, одновременно является «вещью». [```1```](https://www.w3.org/TR/owl-ref/)[```3```](https://www.w3.org/TR/owl-guide/)

## Individual (индивид, экземпляр)
Индивид — это конкретный ресурс, который является членом какого-то класса. Это уже не шаблон, а реальная сущность из предметной области: конкретный человек, собака, книга, город, число 5, строка "Hello". [```1```](https://www.w3.org/TR/owl-ref/)[```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)[```16```](https://keldysh.ru/abrau/2019/theses/58.pdf)

Индивид можно назвать: ему дают URI (например, `#Иван`), чтобы ссылаться на него в онтологии. Иногда используют анонимные индивиды (локальные узлы, похожие на blank nodes в RDF). [```6```](https://daselab.cs.ksu.edu/sites/default/files/06-owl.pdf)

Чтобы сказать, что индивид принадлежит классу, снова используют `rdf:type`. Например:
```owl
<Иван rdf:type Person />
```
Теперь Иван — экземпляр класса `Person`. [```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)[```3```](https://www.w3.org/TR/owl-guide/)

## Entity (сущность)
В контексте OWL термин **Entity** иногда используют как обобщающее понятие для всего, что можно описать в онтологии: и классы, и индивиды, и свойства, и даже данные (литералы). Но в более строгом смысле **Entity** чаще всего относится именно к **индивидам** — конкретным объектам предметной области. [```6```](https://daselab.cs.ksu.edu/sites/default/files/06-owl.pdf)[```2```](https://cursosextensao.usp.br/pluginfile.php/970385/mod_resource/content/1/NewOWLPizzaTutorial2021.pdf)

## Связь в целом
Получается такая картина:
* **Class** — шаблон, описывающий множество индивидов.
* **Individual** — конкретный элемент из этого множества.
* **`owl:Thing`** — надкласс для всех индивидов: всё, что есть в онтологии, есть и в `owl:Thing`.
* **`rdf:type`** — связывает индивид с классом, делая его экземпляром.

 [```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)[```3```](https://www.w3.org/TR/owl-guide/)

## Важное уточнение про диалекты
В разных диалектах OWL (OWL Lite, OWL DL, OWL Full) правила немного отличаются. [```1```](https://www.w3.org/TR/owl-ref/)[```3```](https://www.w3.org/TR/owl-guide/)[```4```](https://sherdim.ru/pts/semantic_web/REC-owl-guide-20040210_ru.html)
* В **OWL Lite** и **OWL DL** действует строгое разделение типов: класс не может одновременно быть индивидом, а индивид — классом. [```1```](https://www.w3.org/TR/owl-ref/)[```3```](https://www.w3.org/TR/owl-guide/)
* В **OWL Full** это ограничение снимается. Там класс можно одновременно рассматривать и как совокупность индивидов, и как индивид сам по себе. Например, можно иметь идентификатор `Fokker-100`, который выступает и как класс (множество самолётов Fokker-100), и как индивид (конкретный тип самолёта). [```1```](https://www.w3.org/TR/owl-ref/)[```3```](https://www.w3.org/TR/owl-guide/)[```4```](https://sherdim.ru/pts/semantic_web/REC-owl-guide-20040210_ru.html)

## Пример для наглядности
Допустим, мы моделируем библиотеку.
* `Book` — класс (концепция «Книга»).
* `#Война и мир` — индивид (конкретная книга, экземпляр класса `Book`).
* `rdf:type` скажет, что эта книга — экземпляр класса `Book`.
* `hasAuthor` — свойство, связывающее индивиды (книгу и автора).

## Ещё пара деталей
* В OWL есть и другой встроенный класс — `owl:Nothing`. Это **пустой класс**: у него нет ни одного экземпляра. [```6```](https://daselab.cs.ksu.edu/sites/default/files/06-owl.pdf)[```2```](https://cursosextensao.usp.br/pluginfile.php/970385/mod_resource/content/1/NewOWLPizzaTutorial2021.pdf)[```13```](https://camilothorne.altervista.org/sem_web17/OWL_Ontologies.pdf)
* Для работы с идентичностью индивидов есть специальные свойства: `owl:sameAs` (два имени ссылаются на один индивид) и `owl:differentFrom` (два имени — на разные индивиды). [```17```](https://psta.psiras.ru/read/psta2011_4_85-94.pdf)[```20```](https://studfile.net/preview/9491304/page:4/)

Если будете строить онтологию и запутаетесь, какой элемент перед вами — класс или индивид, советую задать себе вопрос: «Я описываю *тип* чего-то или *конкретный объект*?». Часто это сразу проясняет ситуацию. [```14```](https://lira.no-ip.org:8443/doc/w3-recs/html/www.w3.org/TR/2004/REC-owl-guide-20040210/index.html)

