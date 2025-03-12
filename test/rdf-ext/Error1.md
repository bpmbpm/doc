###  require vs import (js vs mjs)
Зупуск: https://github.com/rdf-ext/documentation?tab=readme-ov-file#create-a-triplequad

Решение:
Проблема
Ошибка, которую вы получили, связана с тем, что библиотека rdf-ext является модулем ECMAScript (ESM), а ваш код использует синтаксис CommonJS с require(). Node.js не поддерживает смешивание этих двух систем модулей без дополнительных настроек.  
Решение
Чтобы исправить эту ошибку, вы можете сделать следующее:  
1. Использовать динамический импорт: Замените require() на динамический импорт import(). Это позволит вам загружать модули ESM в вашем коде CommonJS.
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

2. Переключиться на ESM: Если вы хотите использовать синтаксис import, вам нужно изменить расширение вашего файла на .mjs или
3. добавить "type": "module" (с запятой) в ваш package.json. После этого вы сможете использовать import вместо require():  
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

Другими словами: Добавьте "type": "module"в package.json и замените все const x = require('x') на import x from 'x'. Если у вас нет/не может быть package.json (например, скрипт в /usr/bin/), измените расширение файла с .js на .mjs.

Другие проблемы см. [test](https://github.com/bpmbpm/doc/blob/main/test/README.md#%D0%BD%D0%B5%D0%BA%D0%BE%D1%82%D0%BE%D1%80%D1%8B%D0%B5-%D0%BF%D1%80%D0%BE%D0%B1%D0%BB%D0%B5%D0%BC%D1%8B)
