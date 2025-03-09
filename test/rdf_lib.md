
Из перечисленных библиотек Comunica, N3.js и RDF.js поддерживают формат TriG. Давайте разберём их подробнее:

1. Comunica
Comunica — это модульная и мощная библиотека для выполнения SPARQL-запросов над RDF-данными. Она поддерживает множество форматов, включая TriG.

Особенности:
Поддержка TriG через парсеры, такие как @rdfjs/parser-n3.

Возможность выполнения SPARQL-запросов над локальными и удалёнными данными.

Поддержка сложных запросов, включая фильтры, агрегации и модификации.

Пример использования:
javascript
Copy
const newEngine = require('@comunica/actor-init-sparql').newEngine;
const engine = newEngine();

const query = `
    PREFIX ex: <http://example.org/>
    SELECT ?s ?p ?o
    WHERE {
        ?s ?p ?o .
    }
`;

const data = `
    @prefix ex: <http://example.org/> .
    ex:subject ex:predicate ex:object .
`;

engine.query(query, { sources: [{ type: 'string', value: data, mediaType: 'application/trig' }] })
    .then(result => result.bindings().then(bindings => {
        bindings.forEach(binding => {
            console.log(`Субъект: ${binding.get('s').value}`);
            console.log(`Предикат: ${binding.get('p').value}`);
            console.log(`Объект: ${binding.get('o').value}`);
            console.log('---');
        });
    }))
    .catch(console.error);
2. N3.js
N3.js — это быстрая и простая библиотека для работы с RDF-данными. Она поддерживает чтение и запись TriG.

Особенности:
Поддержка TriG через метод N3.Parser.

Лёгкая интеграция с другими библиотеками RDF.js.

Высокая производительность.

Пример использования:
javascript
Copy
const N3 = require('n3');
const parser = new N3.Parser({ format: 'application/trig' });

const data = `
    @prefix ex: <http://example.org/> .
    ex:subject ex:predicate ex:object .
`;

parser.parse(data, (error, quad, prefixes) => {
    if (quad) {
        console.log(`Субъект: ${quad.subject.value}`);
        console.log(`Предикат: ${quad.predicate.value}`);
        console.log(`Объект: ${quad.object.value}`);
        if (quad.graph.value) {
            console.log(`Граф: ${quad.graph.value}`);
        }
        console.log('---');
    }
});
3. RDF.js
RDF.js — это низкоуровневая библиотека для работы с RDF. Она поддерживает TriG через плагины, такие как @rdfjs/parser-n3.

Особенности:
Поддержка TriG через @rdfjs/parser-n3.

Гибкость и расширяемость.

Интеграция с другими библиотеками экосистемы RDF.js.

Пример использования:
javascript
Copy
import rdf from 'rdf-ext';
import formats from '@rdfjs/formats-common';
import fs from 'fs/promises';
import path from 'path';
import { Readable } from 'stream';

async function loadTrigFile(filePath) {
    const trigData = await fs.readFile(filePath, 'utf-8');
    const store = rdf.dataset();
    const parser = formats.parsers.get('application/trig');

    const stream = Readable.from([trigData]);
    const quadStream = parser.import(stream);

    await new Promise((resolve, reject) => {
        quadStream.on('data', quad => {
            store.add(quad);
        });
        quadStream.on('end', resolve);
        quadStream.on('error', reject);
    });

    return store;
}

async function main() {
    const filePath = path.join(process.cwd(), 'vad_2_test1.trig');
    const store = await loadTrigFile(filePath);

    // Вывод содержимого store
    console.log('Содержимое store:');
    store.forEach(quad => {
        console.log(`Субъект: ${quad.subject.value}`);
        console.log(`Предикат: ${quad.predicate.value}`);
        console.log(`Объект: ${quad.object.value}`);
        if (quad.graph.value) {
            console.log(`Граф: ${quad.graph.value}`);
        }
        console.log('---');
    });

    // Вывод числа загруженных элементов
    console.log(`Число загруженных TriG элементов: ${store.size}`);
}

main().catch(console.error);
Сравнение библиотек

|Библиотека	|Поддержка TriG	|SPARQL-запросы	|Простота использования	|Производительность|  
|---|---|---|---|---|
|Comunica	|Да	|Да	|Средняя	|Высокая|

N3.js	Да	Нет	Высокая	Очень высокая
RDF.js	Да (через плагины)	Нет (требуются дополнительные библиотеки)	Низкая	Высокая
Рекомендации
Если вам нужны SPARQL-запросы:

Используйте Comunica. Она поддерживает TriG и позволяет выполнять сложные запросы.

Если вам нужно просто читать/записывать TriG:

Используйте N3.js. Она проста в использовании и очень быстра.

Если вам нужна гибкость и интеграция с другими библиотеками:

Используйте RDF.js с плагинами, такими как @rdfjs/parser-n3.
