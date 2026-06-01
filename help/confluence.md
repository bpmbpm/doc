confluence

### info
- https://atlassian.engexp.ru/docs/confluence/prostranstva/pro-prostranstva-v-confluence/ Как правило, пространство называется так же как и проект в Jira.
- https://www.atlassian.com/ru/software/confluence/resources/guides/get-started/overview#key-terms ;
- https://motivityy.atlassian.net/wiki/spaces/Documentation/pages/5734679/TinyMCE

### mermaid
#### ermaid Chart for Confluence
Официальное приложение Mermaid, разработанное создателями Mermaid.js. 
- Особенности: Включает встроенный визуальный редактор, генерацию диаграмм на основе искусственного интеллекта, подсветку синтаксиса и синхронизацию с облаком.
- Как использовать: Во время редактирования страницы введите текст /mermaid, чтобы открыть редактор, затем напишите, вставьте или сгенерируйте свой код Mermaid

#### Draw.io 
Если вы уже используете draw.io в Confluence, вам не нужно устанавливать отдельное приложение Mermaid.
- Способ применения:Напишите текст /drawна своей странице и создайте диаграмму в Draw.io.В редакторе перейдите в верхнее меню и выберите + (символ плюса) или Упорядочить > Вставить > Русалка .
- Вставьте свой код Mermaid в диалоговое окно и нажмите «Вставить»
```
graph TD
    A[Start] --> B{Choose Tool}
    B -->|Mermaid Chart| C[Use Official App]
    B -->|Draw.io| D[Use draw.io Macro]
    C --> E[Render Diagram]
    D --> E[Render Diagram]
    E --> F[Publish Page]
```
