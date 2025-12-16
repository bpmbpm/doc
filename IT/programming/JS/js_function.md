## js_function
### str
#### 1. На js в строке пробелы замени на символ подчеркавания

В JavaScript заменить пробелы на подчеркивания в строке можно несколькими способами:

## 1. Метод `replace()` с глобальным флагом:
```javascript
// Замена всех пробелов
let str = "hello world example";
let result = str.replace(/ /g, "_");
console.log(result); // "hello_world_example"

// Или с использованием replaceAll() (ES2021)
let result2 = str.replaceAll(" ", "_");
console.log(result2); // "hello_world_example"
```

## 2. Замена всех пробельных символов (пробелы, табуляции, переносы строк):
```javascript
let text = "hello world\tnew\nline";
let result = text.replace(/\s+/g, "_");
console.log(result); // "hello_world_new_line"
```

## 3. С использованием split и join:
```javascript
let str = "hello world example";
let result = str.split(" ").join("_");
console.log(result); // "hello_world_example"
```

## 4. Замена только первого пробела:
```javascript
let str = "hello world example";
let result = str.replace(" ", "_");
console.log(result); // "hello_world example"
```

## Практический пример:
```javascript
// Функция для создания slug из заголовка
function createSlug(title) {
  return title
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // удаляем спецсимволы
    .trim() // удаляем пробелы по краям
    .replace(/\s+/g, '_'); // заменяем пробелы на подчеркивания
}

console.log(createSlug("Hello World Example!")); // "hello_world_example"
console.log(createSlug("  Some  Text   Here  ")); // "some_text_here"
```

**Совет:** Для замены всех пробелов используйте метод `replace()` с глобальным регулярным выражением `/ /g` или метод `replaceAll()`, если поддерживается версия ES2021+.
