###  require vs import
Зупуск: https://github.com/rdf-ext/documentation?tab=readme-ov-file#create-a-triplequad

Решение:
Проблема
Ошибка, которую вы получили, связана с тем, что библиотека rdf-ext является модулем ECMAScript (ESM), а ваш код использует синтаксис CommonJS с require(). Node.js не поддерживает смешивание этих двух систем модулей без дополнительных настроек.
Решение
Чтобы исправить эту ошибку, вы можете сделать следующее:
Использовать динамический импорт: Замените require() на динамический импорт import(). Это позволит вам загружать модули ESM в вашем коде CommonJS.
Вот как это можно сделать:
javascript

(async () => {
    const rdf = await import('rdf-ext');

    let subject = rdf.namedNode('http://example.org/subject'); 
    let predicate = rdf.namedNode('http://example.org/predicate');
    let object = rdf.literal('object');

    let quad = rdf.quad(subject, predicate, object);

    // log the triples to console with toString()
    console.log(quad.toString());
})();

Переключиться на ESM: Если вы хотите использовать синтаксис import, вам нужно изменить расширение вашего файла на .mjs или добавить "type": "module" в ваш package.json. После этого вы сможете использовать import вместо require():  
javascript  

import rdf from 'rdf-ext';

let subject = rdf.namedNode('http://example.org/subject'); 
let predicate = rdf.namedNode('http://example.org/predicate');
let object = rdf.literal('object');

let quad = rdf.quad(subject, predicate, object);

// log the triples to console with toString()
console.log(quad.toString());

Заключение
Выберите один из предложенных способов, чтобы исправить ошибку. Если вы планируете использовать современные возможности JavaScript, рекомендуется перейти на ESM.
