Направление:  
RDF -> dot -> svg или RDF -> mermaid -> drawio или подобное, включая RDF -> PlantUML -> yEd (GraphML)

т.н. не наоборот парсер: графический файл (XML) -> RDF (turtle \ TriG)

[Импортироват yEd](https://media.contented.ru/glossary/yed-graph-editor/):  
Импортировать. Необязательно самостоятельно создавать диаграмму с нуля. Можно загрузить информацию из Excel-таблицы, файлов XML, GML, GraphML и GEDCOM — это специальный формат для генеалогических древ. Программа поддерживает автоматическую генерацию диаграмм из данных, которые ей задали.

Варинаты:
https://github.blog/developer-skills/github/include-diagrams-markdown-files-mermaid/
https://www.mermaidchart.com/

drawio поддерживает mermaid

Основная проблема в том, что все равно придется работать с форматом файлов самого графического редактора (yEd, drawio), т.к. любое изменение в схему уже наст расхождение исходного mermaid или dot (graphviz).

см. также: https://github.com/bpmbpm/doc/blob/main/visualization/diagramascode/README.md
