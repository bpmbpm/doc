test
### Текущий вариант 
Вариант "SVG/connector 5a" (условно)  
Связанная ссылка [SVG/connector](https://github.com/bpmbpm/SemanticBPM/tree/main/implementations/SVG/connector#svg_createconnector)  

Файл ttest5a.svg показывает, как легко можно вводить данные по VAD - процессу. См. конец файла:  
`<use id="box1" href="#VAD1" x="10" y="10" />` \
`addInnerLabel('box1', 'Закупка заготовок');`\
`createDirectedConnector('box1', 'box2');` \
`addLabel('box1', 'Блок 1');` \
Таким образом мы указали id (subject), надпись к нему, далее отношение vad:hasNext (как функция createDirectedConnector) и подпись внизу элемента (это будет "роль \ исполнитель").  
[файл ttest5a.svg на Pages](https://bpmbpm.github.io/doc/test/SVG/ttest5a.svg)  
Можно далее дополнять функциональностью: выделить шаблоны (синтаксис) в отдельный блок (см. ниже Архив 1), перенос слов, изгибающиеся линии, линии огибания фигур и т.п. В итоге получим формат близкий к drawio (jgraph) или yEd (.graphml). Однако на начальном этапе достаточно упрощенных возможностей, но в рамках SVG, для которого viewer -ом является браузер (не нужен специализированный viewer). 

В итоге: в SVG/connector 5a задали: имя узлов (id например через имя с заменой пробелов подчеркиванием), label узлов (имя с пробелами), ребро узлов (как функция узел А - узел В) и дополнительно подпись к узлу.


### Архив 1. Вызов элементов из библиотеки, реализуемой в отдельном (первом) svg
[sec_file_http.svg](https://bpmbpm.github.io/doc/test/SVG/sec_file_http.svg) клонирует элементы из first_file_http.svg  
Два файла first_file.svg и sec_file.svg при скачивании не сработают, т.к. будет ошибка безопасности (CORS): URLs are treated as unique security origins.

Основной файл остается ttest2.svg  
Попытка определеить шаблоны в блоке def, см. ttest3no.svg - не успешны, т.к. не отрисовываются корректно стрелки. Потому что:  
1. "В вашем коде есть ошибка, из-за которой стрелка не выходит из правой стороны прямоугольника. Проблема заключается в том, что вы используете box1.width.baseVal.value и box1.height.baseVal.value для получения ширины и высоты прямоугольника, но эти значения не доступны для элемента <use>, так как он не имеет свойств width и height. Вместо этого вам нужно использовать значения, определенные в <defs>".
2.  Объяснение изменений
- Ширина и высота: Я добавил переменные box1Width, box1Height, box2Width, и box2Height, чтобы явно указать размеры прямоугольников, так как элементы <use> не имеют этих свойств.
- Использование переменных: Теперь при вычислении координат для соединительных линий используются эти переменные, что позволяет правильно определить правую сторону первого прямоугольника.  

Теперь стрелка должна корректно выходить из правой стороны прямоугольника.

Результат см. ttest4no.svg. Однако определение высоты и ширины объекта (rect) в коде js не верно:   
`const box1Width = 50; // Ширина прямоугольника VAD1`  
Их нужно определять в def или в крайнем случае в <style>. 

### Материалы
Best:
- https://habr.com/ru/articles/320504/
- https://www.w3.org/TR/SVG2/struct.html#MetadataElement		
Метаданные, включаемые в содержимое SVG, должны быть указаны в элементах ' metadata ' .
Вот пример того, как метаданные могут быть включены в документ SVG. В примере используется схема Dublin Core версии 1.1.

Ссылки:
- [Перевод книги Pocket Guide to Writing SVG, c разрешения автора — Джони Трайтел](https://css-live.ru/articles/karmannoe-rukovodstvo-po-napisaniyu-svg-glava-1-organizaciya-dokumenta.html), Элемент defs
- [SVG в вебе. Практическое руководство](https://svgontheweb.com/ru/)
- [Структура SVG-файла](https://webmaster.alexanderklimov.ru/html/svg/structure.php)
- [Библиотека js по изменению форм в SVG элементах](https://ru.stackoverflow.com/questions/616315/%d0%91%d0%b8%d0%b1%d0%bb%d0%b8%d0%be%d1%82%d0%b5%d0%ba%d0%b0-js-%d0%bf%d0%be-%d0%b8%d0%b7%d0%bc%d0%b5%d0%bd%d0%b5%d0%bd%d0%b8%d1%8e-%d1%84%d0%be%d1%80%d0%bc-%d0%b2-svg-%d1%8d%d0%bb%d0%b5%d0%bc%d0%b5%d0%bd%d1%82%d0%b0%d1%85)
- [svg-art](https://svg-art.ru/?page_id=1047)
- [mozilla: Element/use](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/use)
- [Как нарисовать прямоугольник на SVG движением мыши](https://ru.stackoverflow.com/questions/1335194/%D0%A0%D0%B8%D1%81%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D0%B5-svg-%D0%B2-%D0%B1%D1%80%D0%B0%D1%83%D0%B7%D0%B5%D1%80%D0%B5-%D0%92%D0%BE%D0%B7%D0%BC%D0%BE%D0%B6%D0%BD%D0%BE-%D0%BB%D0%B8)
- https://ru.hexlet.io/blog/posts/kak-rabotat-s-formatom-svg-rukovodstvo-dlya-nachinayuschih-veb-razrabotchikov
- https://serganbus.github.io/d3tutorials/svg_primer.html
- https://serganbus.github.io/d3tutorials/index.html
