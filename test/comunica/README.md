## TEST comunica 
[сравнения rdfLib](https://github.com/bpmbpm/doc/blob/main/test/rdf_lib.md)  
https://github.com/comunica/comunica/ github.io: https://comunica.github.io/comunica/
### Base docs
Базовые из comunica.dev:
- [DOC /query_app](https://comunica.dev/docs/query/getting_started/query_app/)
- [Comunica Browser](https://rdf.js.org/comunica-browser/)
- [Версия 2.0.0](https://comunica.dev/blog/2022-03-03-release_2_0/) , отличия от 1.0 
### @comunica/query-sparql-file
обратный отсчет
#### 4) Trig
То же самое, что в п.3 только не turtle, а TriG (файл proc1.trig), т.е. фактически меняем запрос `sparql-file_local_trig.mjs`: 
```
 SELECT ?s ?p ?o ?g  
    WHERE {  
    GRAPH ?g {         
      ?s ?p <http://example.org/p1.3>.  
      ?s ?p ?o  
    }  
  }
```  
В `sparql-file_local_trig_all.mjs` вывод всего содержимого TriG.  
Также см. приемер с graph (quad): https://github.com/comunica/comunica/issues/1223		
#### 3) JS query-sparql-file (local file)
`sparql-file_local.mjs` делает SPARQL запрос к `file.ttl` (file2.ttl и т.д.) и выводит результат:  
```
{  
  "s": "http://example.org/subject3",
  "p": "http://example.org/predicate3",
  "o": "http://example.org/object3"
}
true
http://example.org/subject3
NamedNode
http://example.org/predicate3
http://example.org/object3
``` 
Без `FILTER(?o = <http://example.org/object3>)` выдавало ошибку: TypeError: Cannot read properties of undefined (reading 'value'), потому что (ИИ):  
- В SPARQL-запросе вы ищете триплеты, где объект (?o) равен <h ttp://example.org/object3>. Однако в коде вы пытаетесь вывести значение ?o с помощью binding.get('o').value, хотя ?o в данном случае является константой (не переменной) и не будет присутствовать в результирующих привязках (bindings).
SPARQL-запрос возвращает только переменные, указанные в SELECT. В вашем случае это ?s и ?p, так как ?o заменён на конкретное значение <h ttp://example.org/object3>.
- Когда вы вызываете binding.get('o'), вы пытаетесь получить значение переменной ?o, которой нет в результатах, потому что она была заменена на константу. Это приводит к ошибке, так как binding.get('o') возвращает undefined, и попытка обратиться к свойству value у undefined вызывает ошибку.
- Если вы хотите вывести значение объекта, которое вы ищете (в данном случае <h ttp://example.org/object3>), вам нужно либо явно указать его в коде (вывести вручную), либо изменить запрос, чтобы ?o оставался переменной.
Вручную, это так:
```
bindingsStream.on('data', (binding) => {
    console.log(binding.toString()); // Quick way to print bindings for testing

    console.log(binding.has('s')); // Will be true

    // Obtaining values
    console.log(binding.get('s').value);
    console.log(binding.get('s').termType);
    console.log(binding.get('p').value);
    console.log('http://example.org/object3'); // Выводим объект вручную
});
```  
Второй вариант - ИИ предложил через FILTER, см `sparql-file_local.mjs`    
Третий вариант, см. `sparql-file_local1.mjs`\
В исходном примере comunica добавляет вниз запроса `?s ?p ?o` видимо чтобы как раз и дать значение перемененой:  
      `?s ?p <http://example.org/object3>.`\
      `?s ?p ?o`
#### 2) JS query-sparql-file (SPARQL endpoint)
https://www.npmjs.com/package/@comunica/query-sparql-file (Usage within application)   
Не заработал, см. исходный файл `/sparql_file/sparql-file1_no.js`\
Поправил:  
1. Ругается на await , пишут, что нужно переписать в ESM. Переписал см. [require-vs-import](https://github.com/bpmbpm/doc/blob/main/test/rdf-ext/Error1.md#require-vs-import-js-vs-mjs)
2. Хоть @comunica/query-sparql-file был установлен глобально (см. Установку **CLI query-sparql-file** ниже), но заработало только после:  
`npm install @comunica/query-sparql-file`
3. Весь нижний блок `// Consume results as an array (easier)` закоментировал, т.к. на `bindings[0].get` тоже ошибка.  
В итоге  `/sparql_file/sparql-file1.mjs` ошибок не выдает, но и результата тоже (нужно далее разбираться). 

#### 1) CLI query-sparql-file
https://github.com/comunica/comunica/tree/master/engines/query-sparql-file#readme  
https://comunica.dev/docs/query/getting_started/query_cli_file/  
https://www.npmjs.com/package/@comunica/query-sparql-file 

`cd C:\Temp1\comunica\` \
`npm install -g @comunica/query-sparql-file` \
*отступление*  
вообще, `npm install -g`  можно из любой папки (global).  
Т.е. установить пакет в глобальную общую папку node_modules (там, где находится node). Это позволит получить доступ к модулю из командной строки, поскольку папка bin имеет ссылку в PATH:   
`Users\user\AppData\Roaming\npm`\
`C:\Users\user\AppData\Roaming\npm\comunica-sparql-file-http.cmd`\
`C:\Users\user\AppData\Roaming\npm\node_modules\@comunica\query-sparql-file\`\
Сам node `C:\Program Files\nodejs\node.exe` \
*продолжение*    
Для использования  --query ;  --file см.: `comunica-sparql-file --help`\
test 
1. remote FOAF profile   
`comunica-sparql-file https://ruben.verborgh.org/profile/#me "CONSTRUCT WHERE { ?s ?p ?o } LIMIT 100"`\
(из любой папки)
2. remote RDF file, наш SemanticBPM/samples/vad_1/vad_1.ttl  
`comunica-sparql-file https://bpmbpm.github.io/SemanticBPM/samples/vad_1/vad_1.ttl "CONSTRUCT WHERE { ?s ?p ?o } LIMIT 100"`\
Не путать с `comunica-sparql-file https://github.com/bpmbpm/SemanticBPM/blob/main/samples/vad_1/vad_1.ttl "CONSTRUCT WHERE { ?s ?p ?o } LIMIT 100"`\
(node:18208) MaxListenersExceededWarning: обнаружена возможная утечка памяти EventEmitter.   
т.е. нужен Github Pages `https://bpmbpm.github.io/SemanticBPM/samples/vad_1/vad_1.ttl`  
3. local RDF file, тот же, но сохраняем файл vad_1.ttl в локальную папку:  
`comunica-sparql-file vad_1.ttl "CONSTRUCT WHERE { ?s ?p ?o } LIMIT 100"`  

**Дополнительно:**
### Comunica N3 RDF Serialize Actor
An RDF Serialize actor that handles Turtle, TriG, N-Quads, N-Triples and N3 using N3.js.
https://www.npmjs.com/package/@comunica/actor-rdf-serialize-n3?activeTab=readme

### [FAQ](https://comunica.dev/docs/query/faq/)
#### local file system
Как выполнить запрос к RDF-файлу в локальной файловой системе?  
Вместо использования Comunica SPARQL вы можете использовать Comunica SPARQL File для запроса файлов в локальной файловой системе.  
Comunica SPARQL по умолчанию не позволяет выполнять запросы к локальному файлу из соображений безопасности.
#### bindingsStreamи quadStream
const quadStream = await myEngine.queryQuads(`CONSTRUCT ...`, {...});
#### Подробнее
- [Объекты Bindings](https://comunica.dev/docs/query/advanced/bindings/)
- [5.1 quadStream](https://comunica.dev/docs/query/getting_started/query_app/)  
### Другое
[Data Flow схема](https://comunica.readthedocs.io/en/latest/tutorials/sparql/)
### [Продолжение](https://github.com/bpmbpm/SemanticBPM/blob/main/samples/vad_3_comunica/) 
