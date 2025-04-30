### 1 Как вставить диаграмму Mermaid в draw.io:  
Откройте draw.io и выберите опцию для вставки диаграммы.  
Перейдите в меню: Arrange > Insert > Advanced > Mermaid. Либо нажмите на иконку + в панели инструментов и выберите Advanced > Mermaid.  
Вставьте ваш текст с описанием диаграммы в открывшееся текстовое поле и нажмите Insert.  
Вы также можете редактировать Mermaid-код для внесения изменений в диаграмму, выбрав элемент и нажав Enter  

### 2 Добавление элемента к существующей диаграмме Draw.io с помощью JavaScript

Чтобы добавить элемент к существующей диаграмме в Draw.io с помощью JavaScript, вы можете использовать встроенные функции API Draw.io. Вот шаги, которые помогут вам это сделать:

1. **Открытие редактора XML**:
   - Откройте вашу диаграмму в Draw.io и перейдите в режим редактирования XML через меню **File** (Файл) > **Edit Diagram** (Редактировать диаграмму).

2. **Использование JavaScript для добавления элемента**:
   - В редакторе XML вы можете использовать JavaScript для манипуляции с существующим XML-кодом диаграммы. Например, вы можете создать функцию, которая добавляет новый элемент в нужное место в XML.

3. **Пример кода JavaScript**:
   - Вот пример кода, который добавляет новый элемент (например, прямоугольник) к существующей диаграмме:

   ```javascript
   function addElementToExistingDiagram(diagramXml) {
       const parser = new DOMParser();
       const xmlDoc = parser.parseFromString(diagramXml, "text/xml");

       // Создание нового элемента
       const newElement = xmlDoc.createElement("mxCell");
       newElement.setAttribute("id", "newId");
       newElement.setAttribute("style", "rounded=0;whiteSpace=wrap;html=1;");
       newElement.setAttribute("vertex", "1");
       newElement.setAttribute("parent", "1");

       // Установка геометрии нового элемента
       const geometry = xmlDoc.createElement("mxGeometry");
       geometry.setAttribute("x", "100"); // Позиция по оси X
       geometry.setAttribute("y", "100"); // Позиция по оси Y
       geometry.setAttribute("width", "80"); // Ширина
       geometry.setAttribute("height", "30"); // Высота
       newElement.appendChild(geometry);

       // Добавление нового элемента в родительский элемент
       const parent = xmlDoc.getElementsByTagName("mxCell")[0]; // Предполагаем, что это родитель
       parent.appendChild(newElement);

       // Возврат обновленного XML
       const serializer = new XMLSerializer();
       return serializer.serializeToString(xmlDoc);
   }
   ```

4. **Сохранение изменений**:
   - После выполнения скрипта, обновите содержимое редактора XML с новым XML-кодом, который вы получили из функции `addElementToExistingDiagram`.

#### Заключение

Используя JavaScript для редактирования XML в Draw.io, вы можете добавлять элементы к существующим диаграммам. Этот подход позволяет вам динамически изменять диаграммы, не создавая новые. Убедитесь, что вы правильно указываете атрибуты и идентификаторы, чтобы избежать конфликтов с существующими элементами.
