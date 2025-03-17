### jsTree & n3
#### 

#### first edition
см. \first
ИИ объединил jsTree (jquery) и n3 для формирования TreeView из RDF. Библиотеки вызываются из CDN.    
Полуфабоикаты см. `tr3с_n3v3svg4you2b.html` и `tr3с_n3v3svg4you2b_con.html`\
Для обображения SVG он пердложил варианты:
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
