## 1

Чтобы переписать JS‑код в стиле функционального программирования (ФП), нужно сместить фокус с «как сделать шаг за шагом» (императив) на «что должно получиться» (декларатив), опираясь на чистые функции, неизменяемость данных и композицию.

Если ты работаешь с браузерным JS (в том числе для SVG Viewer и Mermaid-диаграмм), покажу практичные приёмы, которые реально применять в таких проектах.

---

## Ключевые принципы, которые нужно внедрить

- **Чистые функции**: одинаковый вход → одинаковый выход, без побочных эффектов.
- **Неизменяемость**: не мутируем массивы/объекты, а создаём новые.
- **Композиция**: собираем логику из маленьких функций, а не пишем большие блоки.
- **Отсутствие явных циклов**: вместо `for` — `map/filter/reduce`.
- **Явная передача зависимостей**: никаких скрытых глобальных переменных.

---

## Пример: императивный код → функциональный

Допустим, у тебя есть логика для списка SVG‑файлов, где ты собираешь имена, фильтруешь по расширению и формируешь HTML.

### Императивный вариант (как часто пишут)

```js
const files = [
  { name: 'chart.svg', size: 1200 },
  { name: 'logo.png', size: 800 },
  { name: 'diagram.svg', size: 950 },
];

const htmlList = [];
for (let i = 0; i < files.length; i++) {
  const f = files[i];
  if (f.name.endsWith('.svg')) {
    htmlList.push(`<li>${f.name} (${f.size} B)</li>`);
  }
}

document.getElementById('file-list').innerHTML = htmlList.join('');
```

### Функциональный вариант

```js
const isSvg = file => file.name.endsWith('.svg');

const fileToLi = file => `<li>${file.name} (${file.size} B)</li>`;

const renderFileList = (files, containerId) => {
  const html = files
    .filter(isSvg)
    .map(fileToLi)
    .join('');

  document.getElementById(containerId).innerHTML = html;
};

renderFileList(files, 'file-list');
```

Что здесь функционального:
- `isSvg` и `fileToLi` — чистые функции.
- `.filter/.map` не мутируют массив, а возвращают новые.
- Логика разбита на понятные маленькие функции.

---

## Практические приёмы для твоего SVG Viewer

### 1. Избегай мутаций объектов

Вместо:

```js
files.forEach(f => { f.displayed = true; });
```

Лучше:

```js
const displayedFiles = files.map(f => ({ ...f, displayed: true }));
```

Это критично, если потом будешь делать ререндеры (например, в React) или кэшировать состояния.

### 2. Выноси условия в предикаты

```js
const hasSizeAbove = minSize => file => file.size > minSize;
const isSvg = file => file.name.toLowerCase().endsWith('.svg');

const largeSvgs = files.filter(isSvg).filter(hasSizeAbove(1000));
```

Так легче тестировать и переиспользовать логику.

### 3. Композиция функций через `pipe` (или вручную)

Если логика становится сложнее, удобно собирать её в цепочку:

```js
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

const toListItem = file => `<li>${file.name}</li>`;
const filterSvg = arr => arr.filter(f => f.name.endsWith('.svg'));
const mapToHtml = arr => arr.map(toListItem).join('');

const renderSvgList = pipe(filterSvg, mapToHtml, html => {
  document.getElementById('list').innerHTML = html;
});

renderSvgList(files);
```

В реальных проектах можно использовать Ramda/lodash/fp, но даже ручной `pipe` уже сильно улучшает читаемость.

---

## Для Mermaid и диаграмм

Функциональный стиль особенно полезен, когда ты генерируешь строки диаграмм из данных.

### Императивно

```js
let mermaid = 'graph TD\n';
for (const node of nodes) {
  mermaid += `${node.id}[${node.label}]\n`;
}
for (const edge of edges) {
  mermaid += `${edge.from} --> ${edge.to}\n`;
}
```

### Функционально

```js
const nodeLine = node => `${node.id}[${node.label}]`;
const edgeLine = edge => `${edge.from} --> ${edge.to}`;

const buildMermaid = (nodes, edges) => [
  'graph TD',
  ...nodes.map(nodeLine),
  ...edges.map(edgeLine),
].join('\n');

const mermaidSource = buildMermaid(nodes, edges);
```

Теперь эту функцию легко протестировать: просто передай массивы и проверь строку.

---

## Частые ошибки и как их избегать

- **Мутация DOM внутри фильтров/мапов** — не делай этого. DOM‑манипуляции выноси в отдельные функции (как `renderFileList`).
- **Глобальные переменные** — передавай всё явно в аргументы.
- **Сложные функции** — разбивай на маленькие чистые.
- **«Магические» строки** — выноси в константы или параметры.

---

## Как адаптировать твой текущий app.js (SVG Viewer)

Учитывая твои прошлые задачи (панель лога, свойства, ресайзер), вот как можно рефакторить отдельные части:

1. **Чтение конфига**: оставь обёртку в JS (чтобы обойти CORS), но логику парсинга сделай чистой функцией:

   ```js
   const parseConfig = raw => {
     // валидация, нормализация, возврат структуры без побочных эффектов
     return { files: raw.files || [], settings: raw.settings || {} };
   };
   ```

2. **Формирование списка файлов**: вынеси в отдельную функцию, которая возвращает HTML‑строку, а не сразу пишет в DOM.

3. **Логирование**: вместо «добавить строку в лог» сделай функцию, которая принимает текущее состояние лога и новую запись, и возвращает новый массив:

   ```js
   const addLog = (logs, entry) => [...logs, entry];
   ```

   А обновление DOM — отдельной функцией.

4. **Ресайзер панели**: логику расчёта размеров можно сделать чистой функцией от ширины окна и текущего состояния:

   ```js
   const computeLayout = (windowWidth, state) => ({
     logPanelWidth: Math.max(200, windowWidth * 0.3),
     contentWidth: windowWidth - Math.max(200, windowWidth * 0.3),
   });
   ```

---

## Когда функциональный стиль не нужен

- В узких местах, где важна максимальная производительность (например, рендер тысяч элементов).
- В коде, который тесно связан с DOM‑событиями и состоянием (иногда императив понятнее).

Но даже в этих случаях можно сохранять чистоту в «ядре» логики (парсинг, фильтрация, построение данных), а императив оставить только для взаимодействия с DOM.

---

