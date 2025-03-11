## TEST comunica 
[сравнения rdfLib](https://github.com/bpmbpm/doc/blob/main/test/rdf_lib.md)
### @comunica/query-sparql-file
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




