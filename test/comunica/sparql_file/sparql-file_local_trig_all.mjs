// const QueryEngine = require('@comunica/query-sparql-file').QueryEngine;
import { QueryEngine } from '@comunica/query-sparql-file';
const myEngine = new QueryEngine();

const bindingsStream = await myEngine.queryBindings(`
  SELECT ?s ?p ?o ?g
    WHERE {
    GRAPH ?g {        
 
      ?s ?p ?o
      
    } 
  } LIMIT 7`, {
  sources: ['proc1.trig'], 
});

//   ?s ?p <http://example.org/p1.3>.
//   ?s ?p <http://example.org/object3>.

//   ?s ?p ?o .
//   FILTER(?o = <http://example.org/object3>)

// sources: ['file.ttl', 'file2.ttl'], // sources: ['file.ttl'], Добавлен второй файл file2.ttl
//    ?s ?p ?o
//    ?s ?p <http://dbpedia.org/resource/Belgium>. 

// Consume results as a stream (best performance)
bindingsStream.on('data', (binding) => {
    console.log(binding.toString()); // Quick way to print bindings for testing

    console.log(binding.has('s')); // Will be true

    // Obtaining values
    console.log(binding.get('s').value);
    console.log(binding.get('s').termType);
    console.log(binding.get('p').value);
    console.log(binding.get('o').value); // Теперь это будет работать
    console.log(binding.get('g').value); // Для TriG
});
bindingsStream.on('end', () => {
    // The data-listener will not be called anymore once we get here.
});
bindingsStream.on('error', (error) => {
    console.error(error);
});

// Consume results as async iterable (easier)
for await (const binding of bindingsStream) {
  console.log(binding.toString());
}

/*
// Consume results as an array (easier)
//  console.log(bindings[0].get('s').value);
// TypeError: Cannot read properties of undefined (reading 'get')
 const bindings = await bindingsStream.toArray();
 console.log(bindings[0].get('s').value);
 console.log(bindings[0].get('s').termType);
 */
 
 /*
 const bindingsStream = await myEngine.queryBindings(`
  SELECT ?s ?p ?o 
    WHERE {
    GRAPH ?g {        
 
      ?s ?p ?o
      
    } 
  } LIMIT 7`, {
  sources: ['proc1.trig'], 
});
*/
