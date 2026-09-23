## rete1
https://github.com/caviri/rete

Ниже — пошаговая инструкция по развёртыванию примера с Rete на GitHub Pages (без использования bash/CLI).  
Всё делается через веб-интерфейс GitHub и онлайн-плейграунд Rete.

---

## Общая идея

Rete позволяет упаковать RDF-граф в **один иммутабельный файл** `.rete`. Этот файл можно положить на GitHub Pages, а браузер пользователя будет выполнять **настоящие SPARQL-запросы** к нему напрямую, подгружая только нужные байты через HTTP range requests. Никакого сервера, никакой базы данных — только статика.

---

## Шаг 1. Создание репозитория на GitHub

---

## Шаг 2. Получение файла `.rete` через онлайн-плейграунд

Это ключевой шаг, который заменяет CLI. Rete предоставляет **браузерный плейграунд**, где можно вставить RDF-данные и собрать `.rete` файл прямо в браузере.

1. Откройте в браузере: **https://caviri.github.io/rete/playground.html**
2. Найдите секцию **Building** — там есть текстовое поле с подписью «Paste N-Triples here (or open a file), pick the format, then Build».
3. Вставьте туда тестовый RDF-граф. Например, на языке Turtle:

```turtle
@prefix schema: <http://schema.org/> .
@prefix skos:   <http://www.w3.org/2004/02/skos/core#> .
@prefix ex:     <https://example.org/notes/> .

ex:Note1 a skos:Concept ;
    skos:prefLabel "Семантический Zettelkasten"@ru ;
    schema:description "Заметка о построении Zettelkasten на RDF" ;
    skos:related ex:Note2 .

ex:Note2 a skos:Concept ;
    skos:prefLabel "SPARQL на GitHub Pages"@ru ;
    schema:description "Как выполнять SPARQL-запросы без сервера" .
```

4. В выпадающем списке выберите формат **`.ttl` (Turtle)**.
5. Нажмите кнопку **Build**.
6. После сборки появится возможность **скачать** полученный файл `.rete`. Сохраните его на компьютер под именем `graph.rete`.

> **Примечание:** если в плейграунде не отображается кнопка скачивания, можно использовать любой другой способ генерации `.rete` (например, через GitHub Codespaces, но это уже выходит за рамки «без CLI»). В большинстве случаев плейграунд позволяет скачать файл.

---

## Шаг 3. Создание файла `index.html`

В репозитории `bpmbpm/rete_test` создайте файл `index.html`. Это единственная страница, которая будет выполнять SPARQL-запросы к вашему `.rete` файлу.

1. В репозитории нажмите **Add file → Create new file**.
2. В поле имени файла введите `index.html`.
3. Вставьте следующий код:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>rete_test — семантический Zettelkasten</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 800px; margin: 2rem auto; padding: 0 1rem; }
    h1 { color: #2c3e50; }
    .note { border-left: 3px solid #3498db; padding-left: 1rem; margin: 1rem 0; }
    .note strong { color: #3498db; }
    #loading { color: #888; font-style: italic; }
    #error { color: #c0392b; }
  </style>
</head>
<body>
  <h1>📚 Мой семантический Zettelkasten</h1>
  <p>Заметки, хранящиеся в RDF-графе. SPARQL-запрос выполняется прямо в браузере.</p>

  <div id="loading">Загрузка графа знаний…</div>
  <div id="error"></div>
  <div id="results"></div>

  <script type="module">
    import { query } from 'https://cdn.jsdelivr.net/npm/rete-graph/+esm';

    // SPARQL-запрос: получаем все заметки с их метками и описаниями
    const sparql = `
      PREFIX skos: <http://www.w3.org/2004/02/skos/core#>
      PREFIX schema: <http://schema.org/>

      SELECT ?label ?description WHERE {
        ?note a skos:Concept ;
              skos:prefLabel ?label ;
              schema:description ?description .
      }
      ORDER BY ?label
    `;

    // Путь к файлу .rete (лежит в корне репозитория)
    const reteFileUrl = './graph.rete';

    try {
      const results = await query(reteFileUrl, sparql);
      document.getElementById('loading').style.display = 'none';

      const container = document.getElementById('results');
      if (results.length === 0) {
        container.innerHTML = '<p>Заметок пока нет.</p>';
      } else {
        container.innerHTML = results
          .map(r => `
            <div class="note">
              <strong>${r.label.value}</strong>
              <p>${r.description.value}</p>
            </div>
          `)
          .join('');
      }
    } catch (err) {
      document.getElementById('loading').style.display = 'none';
      document.getElementById('error').textContent = 'Ошибка при загрузке графа: ' + err.message;
    }
  </script>
</body>
</html>
```

4. Нажмите **Commit new file**.

---

## Шаг 4. Загрузка файла `graph.rete`

1. В репозитории нажмите **Add file → Upload files**.
2. Перетащите скачанный на шаге 2 файл `graph.rete` в окно загрузки.
3. Нажмите **Commit changes**.

> **Важно:** файл `.rete` должен лежать в **корне** репозитория, рядом с `index.html`, чтобы путь `./graph.rete` работал корректно.

---

## Шаг 5. Создание файла `README.md`

Создайте в репозитории файл `README.md` со следующим содержимым:

```markdown
# rete_test — семантический Zettelkasten на GitHub Pages

Демонстрационный проект, показывающий, как развернуть **семантический Zettelkasten** на GitHub Pages с использованием [Rete](https://github.com/caviri/rete) — однофайлового формата для RDF-графов.

## Что это?

Rete упаковывает весь RDF-граф в **один иммутабельный файл** `.rete`. Этот файл кладётся на GitHub Pages, а браузер пользователя выполняет **настоящие SPARQL-запросы** к нему напрямую — без сервера, без базы данных, без бэкенда.

## Как это работает

1. **RDF-данные** (заметки) описываются в формате Turtle.
2. **Файл `.rete`** создаётся через [онлайн-плейграунд Rete](https://caviri.github.io/rete/playground.html).
3. **`index.html`** загружает `.rete` файл и выполняет SPARQL-запрос через JavaScript-клиент [`rete-graph`](https://www.npmjs.com/package/rete-graph).
4. **GitHub Pages** раздаёт статику — никакого серверного кода.

## Структура репозитория

```
rete_test/
├── index.html      # HTML-страница с клиентским SPARQL
├── graph.rete      # RDF-граф в формате Rete
└── README.md       # Этот файл
```

## Тестовые данные

В `graph.rete` упакованы две заметки:

- **Семантический Zettelkasten** — заметка о построении Zettelkasten на RDF.
- **SPARQL на GitHub Pages** — заметка о выполнении SPARQL-запросов без сервера.

Связь между заметками: `skos:related`.

## Как воспроизвести

1. Откройте [плейграунд Rete](https://caviri.github.io/rete/playground.html).
2. Вставьте RDF-данные в формате Turtle.
3. Нажмите **Build** и скачайте `.rete` файл.
4. Создайте репозиторий на GitHub.
5. Загрузите `graph.rete` и `index.html`.
6. Включите GitHub Pages (Settings → Pages → Branch: `main` → Save).
7. Откройте сайт: `https://bpmbpm.github.io/rete_test/`.

## Ссылки

- [Rete — официальный репозиторий](https://github.com/caviri/rete)
- [Rete — документация](https://caviri.github.io/rete/)
- [Rete Playground](https://caviri.github.io/rete/playground.html)
- [rete-graph на npm](https://www.npmjs.com/package/rete-graph)
- [SPARQL 1.1 Query Language (W3C)](https://www.w3.org/TR/sparql11-query/)
```

Нажмите **Commit new file**.

---

## Шаг 6. Включение GitHub Pages

1. Перейдите в настройки репозитория: **Settings**.
2. В левом меню выберите **Pages**.
3. В разделе **Branch** выберите `main` и папку `/ (root)`.
4. Нажмите **Save**.
5. Через 1–2 минуты сайт будет доступен по адресу: **`https://bpmbpm.github.io/rete_test/`**.

---

## Что вы увидите

Откройте `https://bpmbpm.github.io/rete_test/` — страница загрузит `graph.rete` и выполнит SPARQL-запрос. На экране появятся две заметки с заголовками и описаниями. **Весь SPARQL выполняется в браузере** — Rete подгружает только те байты `.rete` файла, которые нужны для ответа на запрос.

---

## Ссылки на использованные инструменты

- Rete — https://github.com/caviri/rete
- Rete Playground — https://caviri.github.io/rete/playground.html
- rete-graph (npm) — https://www.npmjs.com/package/rete-graph
- Документация Rete — https://caviri.github.io/rete/
- SPARQL 1.1 (W3C) — https://www.w3.org/TR/sparql11-query/

Если плейграунд по какой-то причине не позволит скачать `.rete` файл, альтернативный вариант — использовать GitHub Codespaces (бесплатно для публичных репозиториев), где можно выполнить одну команду `rete build` в терминале, но это уже выходит за рамки «без CLI».
