
### Base

**metadata SVG element**
- [w3.org, 18 Metadata](https://www.w3.org/TR/SVGTiny12/metadata.html): Популярный инструмент для разработки SVG с открытым исходным кодом Inkscape ...
- [mozilla](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/metadata)

### RDF SVG github
#### OntoSVG
[OntoSVG, floresbakker](https://github.com/floresbakker/OntoSVG)  SVG2RDF, RDF2SVG (Rdflib Python)
![ris](https://github.com/floresbakker/OntoSVG/raw/main/Examples/Playground.png) 
Нам бы что-то подобное, но с картинкой VAD.  
В идеале SVG формировать в "графо-орентированной структуре", как показано в нашем "самодельном" [Вариант "SVG/connector 5a"](https://github.com/bpmbpm/doc/blob/main/test/SVG/README.md#svgconnector_5a). 
Будут сложности с координатами. Видимо придется использовать два варианты: один с координатами (в RDF задавать и координаты), второй без. В любом случае, все стили и шаблоны (начертание VAD-корабликов) нужно выносить в одтельный файл.

см. также HTML2RDF \ RDF2HTML, floresbakker
#### Другие:  
- [rhizomik/redefer-rdf2svg](https://github.com/rhizomik/redefer-rdf2svg)
Еще:
- [экспорт чертежей в формате SVG с метаданными RDF/Dublin Core/CC](https://gist.github.com/nfreear/ca0decd2c14e2bbdaf70)
- [Created with Inkscape](https://gist.github.com/emmanuelgeoffray/2986983)

На тему SVG:
- [rdf-logos](https://github.com/cygri/rdf-logos/blob/master/index.html)
- [Графическое представление различных спецификаций RDF, rdf-genealogy](https://github.com/pchampin/rdf-genealogy)

### Ранее RDF_SVG:
1. RDF_SVG из BPM/LD/  
[SVGTiny12](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/metadata.html#MetadataAttributes) SVG documents contain RDF metadata (Dublin Core)  
2. [SemanticBPM/wiki/Выбор библиотек](https://github.com/bpmbpm/SemanticBPM/wiki/%D0%92%D1%8B%D0%B1%D0%BE%D1%80-%D0%B1%D0%B8%D0%B1%D0%BB%D0%B8%D0%BE%D1%82%D0%B5%D0%BA#rdf_svg), вкл.   
https://www.npmjs.com/package/rdf-parse [TriG](https://www.w3.org/TR/trig/)   
[RDFa](https://www.w3.org/TR/2008/REC-SVGTiny12-20081222/metadata.html#MetadataAttributes) in [SVG](https://www.w3.org/TR/SVGTiny12/)/[XML](https://html.spec.whatwg.org/multipage/)

### SVG
Папка DOC/../SVG: https://github.com/bpmbpm/doc/tree/main/BPM/graphic_editor/SVG

### Также
https://semanticweb.narod.ru/2.html
