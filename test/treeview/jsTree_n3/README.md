### jsTree & n3
#### 

#### first edition
см. \first  
ИИ объединил [jsTree](https://www.jstree.com/) (jquery) и n3 для формирования TreeView из RDF. Метод hasParent [Alternative JSON format](https://www.jstree.com/docs/json/), т.е. для формирования дерева указывается единственный Родитель, а не множество Child.
Библиотеки вызываются из CDN.    
Полуфабрикаты см. `tr3с_n3v3svg4you2b.html` и `tr3с_n3v3svg4you2b_con.html`\
Для отображения SVG он предложил варианты:
- Вариант 3: Использовать <object> или <iframe> для загрузки SVG.  
Этот подход позволяет загружать SVG-файлы как внешние ресурсы, используя теги <object> или <iframe>.
Это должно работать даже при открытии HTML-файла локально через file://.
При выборе узла создаётся элемент <object> с атрибутом data, указывающим на SVG-файл.
`tr4v_obj__OK.html` и `tr4v_obj_onerror_OK.html`
- Вариант 4: Использовать JavaScript для загрузки SVG  
Вы можете загрузить SVG-файл с помощью JavaScript и вставить его содержимое в DOM. Это работает, если SVG-файлы находятся в той же папке, что и HTML-файл.

```
fetch('root.svg')
  .then(response => response.text())
  .then(svgContent => {
    document.getElementById('image-container').innerHTML = svgContent;
  })
  .catch(error => console.error('Ошибка загрузки SVG:', error));
```  
Вместо <object> используется <img> для загрузки SVG-файлов. <img> поддерживает событие onerror, которое срабатывает, если файл отсутствует.
`tr5v_тоя_img_onerror_OK_noArr.html` - не отображает стрелки в `ttest5a.svg`, поэтому бракуем. 

Итого: `tr4v_obj_onerror_OK.html`  
Исходный запрос:  
Создай пример js (браузерный и с источниками из CDN), который бы строил дерево (TreeView), аналогичное https://www.jstree.com/demo/ (окно с интерактивным виджетом, элементом управления), но с данными из файла, которые имеют формат turtle RDF. 
