## 1
Мы провели долгий эксперимент с созданием BPMN-редактора, а теперь задача — найти способы превратить BPMN-диаграмму в исполняемый JavaScript-код. Нужно исследовать существующие инструменты.

Поиск даёт несколько ключевых результатов. Один из них — PR в репозитории Apache KIE Tools , где созданы новые маршаллеры для BPMN на TypeScript, работающие в браузере и Node.js. Это позволяет парсить XML в JSON и обратно, что является основой для исполнения.

Другой важный инструмент — bpmn-engine , который представляет собой JavaScript-движок выполнения BPMN 2.0. Он поддерживает основные элементы BPMN, использует bpmn-moddle для чтения XML и может быть расширен. Его популярность — ~2500 загрузок в неделю, лицензия MIT, активная поддержка.

Также есть ProcessEngine Core , который делится на Model (парсинг XML в JSON) и Runtime (выполнение процессов). Он более модульный и структурированный.

Важно: bpmn-js  — это библиотека для визуализации и редактирования диаграмм, но она не выполняет процессы. Однако для исполнения нужны модули для чтения (bpmn-moddle) и выполнения (bpmn-engine).

Также есть упоминание о проекте eagle-flow  — «чисто фронтенд реализация xml генерации», но это скорее редактор.

JointJS+  — это коммерческий продукт для создания BPMN-редакторов, но он не предназначен для выполнения процессов.

LinkedIn-обсуждение  даёт контекст о современном использовании BPMN, но не техническую информацию о трансляции в код.

## 1.1
## 🔍 Трансляция BPMN XML в исполняемый JavaScript-код

### Что это такое

Трансляция BPMN XML в исполняемый JavaScript-код — это процесс, при котором BPMN-диаграмма (стандартный XML-файл) преобразуется в программную логику, которую может выполнять JavaScript-движок. Это позволяет автоматизировать бизнес-процессы, описанные в BPMN, непосредственно в браузере или на сервере Node.js.

---

## 📦 Основные инструменты для трансляции

### 1. **bpmn-moddle** (низкоуровневое чтение/запись BPMN)

Это не исполнитель, а библиотека для чтения и записи BPMN 2.0 XML в браузере и Node.js .

**Особенности:**
- Преобразует BPMN XML в JavaScript-объекты и обратно
- Работает на основе метаданных, сгенерированных из XSD-схем
- Является основой для всех инструментов экосистемы bpmn.io

**Использование:**
```javascript
import { BpmnModdle } from 'bpmn-moddle';

const moddle = new BpmnModdle();
const { rootElement } = await moddle.fromXML(bpmnXML);
// rootElement — это JavaScript-объект, представляющий BPMN-диаграмму
```

---

### 2. **bpmn-engine** — полноценный JavaScript-движок выполнения

**npm:** [bpmn-engine](https://www.npmjs.com/package/bpmn-engine)  
**GitHub:** [paed01/bpmn-engine](https://github.com/paed01/bpmn-engine)  
**Лицензия:** MIT  
**Статистика:** ~2450 загрузок в неделю, 892 звезды на GitHub 

Это **единственный зрелый open-source BPMN-движок на JavaScript**, который может выполнять BPMN-процессы .

**Архитектура:**
- Использует `bpmn-moddle` для парсинга XML
- Поддерживает основные элементы BPMN 2.0: задачи, шлюзы, события, потоки
- Расширяется через кастомные обработчики

**Пример использования:**
```javascript
const Engine = require('bpmn-engine');

const engine = new Engine({
    source: 'process.bpmn'  // или XML-строка
});

engine.execute((err, instance) => {
    instance.on('activity.wait', (activity) => {
        console.log('Ожидание выполнения:', activity.id);
    });
});
```

**Поддерживаемые элементы:**
- Start/End Events
- User Tasks, Service Tasks, Script Tasks
- Exclusive/Parallel/Inclusive Gateways
- Subprocesses
- Sequence Flows

---

### 3. **@process-engine/process_engine_core** — модульная архитектура

**npm:** [@process-engine/process_engine_core](https://www.npmjs.com/package/@process-engine/process_engine_core)  
**Лицензия:** MIT

Более структурированный движок, разделяющий **парсинг** и **выполнение** процессов .

**Два основных модуля:**
- **Model** — `BpmnModelParser` — парсинг XML в JSON
- **Runtime** — `ExecuteProcessService` — управление выполнением

**Архитектура:**
- `FlowNodeHandler` — базовый класс для обработчиков разных типов узлов
- `ProcessTokenFacade` — управление состоянием процесса (токены)
- Поддержка Boundary Events, параллельных ветвей

**Пример:**
```javascript
const { BpmnModelParser } = require('@process-engine/process_engine_core').Model;
const { ExecuteProcessService } = require('@process-engine/process_engine_core').Runtime;

const parser = new BpmnModelParser();
const model = parser.parse(bpmnXML);

const executionService = new ExecuteProcessService();
executionService.start(model);
```

---

### 4. **bpmn-marshaller** (от Apache KIE Tools)

**GitHub:** [apache/incubator-kie-tools](https://github.com/apache/incubator-kie-tools/pull/1854)  
**Лицензия:** Apache 2.0

Современный TypeScript-инструмент для парсинга BPMN, DMN и SceSim, созданный в рамках экосистемы KIE .

**Особенности:**
- Написан на TypeScript
- Работает в браузере и Node.js
- Генерирует строго типизированные JSON-объекты
- Основан на `xml-parser-ts` — собственном парсере с генерацией метаданных из XSD

**Преимущества:**
- Полная типобезопасность
- Поддержка BPMN 2.0.2
- Является частью экосистемы Red Hat / IBM

---

## 🆚 Сравнение инструментов

| Критерий | **bpmn-engine** | **ProcessEngine Core** | **bpmn-moddle** | **bpmn-marshaller** |
|----------|-----------------|------------------------|-----------------|---------------------|
| **Назначение** | Полноценный движок выполнения | Модульный движок | Парсинг XML ↔ JSON | Парсинг с типами |
| **Выполнение процессов** | ✅ Да | ✅ Да | ❌ Только парсинг | ❌ Только парсинг |
| **Поддержка BPMN 2.0** | Базовая (расширяется) | Полная | Полная (через XSD) | BPMN 2.0.2 |
| **Язык** | JavaScript | JavaScript | JavaScript | TypeScript |
| **Лицензия** | MIT | MIT | MIT | Apache 2.0 |
| **Активность** | Активная (последний релиз 1 месяц назад) | Стабильная | Активная | Активная |
| **Node.js** | ✅ Да | ✅ Да | ✅ Да | ✅ Да |
| **Браузер** | ❌ Нет (требуется Node.js) | ❌ Нет | ✅ Да | ✅ Да |
| **Сложность интеграции** | Средняя | Средняя | Низкая | Средняя |
| **Расширяемость** | Кастомные обработчики | Через FlowNodeHandler | — | — |

---

## 🏗️ Как это работает на практике

### Типичная архитектура BPMN-движка:

```
1. BPMN XML → парсер → внутреннее представление (JSON)
                ↓
2. Внутреннее представление → построение графа выполнения
                ↓
3. Граф выполнения → интерпретатор (движок)
                ↓
4. Результат выполнения (токены, состояние)
```

### Пример полного цикла с bpmn-engine:

```javascript
const Engine = require('bpmn-engine');

// 1. XML диаграммы
const bpmnXml = `<?xml version="1.0" encoding="UTF-8"?>
<definitions ...>
  <process id="CalculatorProcess">
    <startEvent id="Start" />
    <serviceTask id="CalculateTask" name="Вычислить" />
    <endEvent id="End" />
    <sequenceFlow sourceRef="Start" targetRef="CalculateTask" />
    <sequenceFlow sourceRef="CalculateTask" targetRef="End" />
  </process>
</definitions>`;

// 2. Создание и запуск движка
const engine = new Engine({
    source: bpmnXml,
    services: {
        // Кастомный обработчик для ServiceTask
        CalculateTask: async (context) => {
            const { num1, num2, operation } = context.environment.variables;
            // Выполнение логики калькулятора
            return result;
        }
    }
});

// 3. Запуск процесса
engine.execute((err, instance) => {
    instance.on('end', () => {
        console.log('Процесс завершён');
    });
});
```

---

## 🎯 Выбор инструмента

### Выберите **bpmn-engine**, если:
- Нужен **готовый движок выполнения** процессов
- Работаете в Node.js-среде
- Нужна базовая поддержка BPMN 2.0 с возможностью расширения

### Выберите **ProcessEngine Core**, если:
- Нужна более модульная архитектура
- Планируете сложную обработку Boundary Events
- Нужно разделить парсинг и выполнение

### Выберите **bpmn-moddle**, если:
- Нужен **только парсинг и генерация XML**
- Работаете в браузере
- Строите свой собственный движок

### Выберите **bpmn-marshaller**, если:
- Используете TypeScript
- Нужна строгая типизация
- Работаете в экосистеме KIE / Red Hat

---

## 💡 Рекомендация для вашего BPMN-калькулятора

Для вашего калькулятора на основе BPMN (который мы создали ранее), оптимальный подход:

1. **Оставьте bpmn-js для визуального редактирования** (пользователь создаёт диаграмму)
2. **Добавьте bpmn-engine на серверную часть** (или в Web Worker, если нужно в браузере)
3. **Свяжите интерфейс с движком**: при изменении диаграммы экспортируйте XML, отправляйте на сервер (или в Worker), где bpmn-engine выполнит процесс с переданными числами

Пример гибридного подхода:
```javascript
// В браузере: получаем XML из редактора
const xml = await modeler.saveXML();

// Отправляем на сервер или в Worker
const result = await fetch('/api/execute', {
    method: 'POST',
    body: JSON.stringify({ xml, variables: { num1, num2, operation } })
});
```

---

## 🔗 Полезные ссылки

- [bpmn-engine на npm](https://www.npmjs.com/package/bpmn-engine)
- [bpmn-moddle документация](https://github.com/bpmn-io/bpmn-moddle)
- [Apache KIE Tools](https://github.com/apache/incubator-kie-tools)
- [bpmn.io — экосистема инструментов](https://bpmn.io)

Share: https://chat.deepseek.com/a/chat/s/e841c3c8-0070-4a6b-ac9b-6ec56ee56fc9

## 2
## 📐 Подробные примеры реализации калькулятора для каждого инструмента трансляции BPMN в JavaScript

Ниже приведены детальные примеры использования каждого из четырёх инструментов для реализации калькулятора: два поля ввода чисел, выбор операции (+, -, *, /) и поле результата.

---

## 1. **bpmn-engine** (полноценный движок выполнения, Node.js)

### Описание
`bpmn-engine` — JavaScript-движок для выполнения BPMN-процессов в Node.js. Позволяет загружать BPMN XML, задавать переменные и обрабатывать задачи через кастомные сервисы.

### BPMN XML (calculator.bpmn)
```xml
<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"
             xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
             xmlns:dc="http://www.omg.org/spec/DD/20100524/DC"
             targetNamespace="http://bpmn.io/schema/bpmn">
  <process id="CalculatorProcess" isExecutable="true">
    <startEvent id="StartEvent" />
    <serviceTask id="CalculateTask" name="Вычислить результат" />
    <endEvent id="EndEvent" />
    <sequenceFlow id="flow1" sourceRef="StartEvent" targetRef="CalculateTask" />
    <sequenceFlow id="flow2" sourceRef="CalculateTask" targetRef="EndEvent" />
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="CalculatorProcess">
      <bpmndi:BPMNShape id="StartEvent_di" bpmnElement="StartEvent">
        <dc:Bounds x="80" y="150" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="CalculateTask_di" bpmnElement="CalculateTask">
        <dc:Bounds x="180" y="130" width="120" height="80" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="EndEvent_di" bpmnElement="EndEvent">
        <dc:Bounds x="350" y="150" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="flow1_di" bpmnElement="flow1">
        <di:waypoint x="116" y="168" />
        <di:waypoint x="180" y="170" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="flow2_di" bpmnElement="flow2">
        <di:waypoint x="300" y="170" />
        <di:waypoint x="350" y="168" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>
```

### Код Node.js (calculator-engine.js)
```javascript
const Engine = require('bpmn-engine');
const fs = require('fs');

// Читаем BPMN XML (или используем строку)
const bpmnXml = fs.readFileSync('./calculator.bpmn', 'utf8');

// Создаём движок с кастомным сервисом для задачи CalculateTask
const engine = new Engine({
    source: bpmnXml,
    services: {
        // Имя задачи должно совпадать с id в BPMN
        CalculateTask: async (context) => {
            // Получаем переменные из контекста процесса
            const { num1, num2, operation } = context.environment.variables;
            
            // Выполняем вычисление
            let result;
            switch (operation) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/': result = num2 === 0 ? 'Ошибка: деление на ноль' : num1 / num2; break;
                default: result = 'Ошибка: неизвестная операция';
            }
            
            // Сохраняем результат в переменные процесса
            context.environment.variables.result = result;
            return result;
        }
    }
});

// Запускаем процесс с входными переменными
engine.execute((err, instance) => {
    if (err) {
        console.error('Ошибка выполнения:', err);
        return;
    }
    
    // Устанавливаем переменные перед началом
    instance.environment.setVariable('num1', 10);
    instance.environment.setVariable('num2', 5);
    instance.environment.setVariable('operation', '+');
    
    // Слушаем окончание процесса
    instance.on('end', () => {
        const result = instance.environment.getVariable('result');
        console.log(`Результат: ${result}`);
    });
});
```

### Пояснение
- **Движок** загружает BPMN XML и регистрирует обработчик для `CalculateTask`.
- Входные данные передаются как переменные окружения.
- После выполнения задачи результат сохраняется в переменную `result`.
- В конце процесса мы получаем результат.

---

## 2. **@process-engine/process_engine_core** (модульный движок, Node.js)

### Описание
Более модульный движок, разделяющий парсинг и выполнение. Позволяет гибко настраивать обработчики для разных типов узлов.

### Установка
```bash
npm install @process-engine/process_engine_core
```

### Код Node.js (calculator-process-engine.js)
```javascript
const { BpmnModelParser } = require('@process-engine/process_engine_core').Model;
const { ExecuteProcessService } = require('@process-engine/process_engine_core').Runtime;
const fs = require('fs');

// 1. Парсим BPMN XML в модель
const bpmnXml = fs.readFileSync('./calculator.bpmn', 'utf8');
const parser = new BpmnModelParser();
const model = parser.parse(bpmnXml); // модель процесса

// 2. Создаём экземпляр сервиса выполнения
const executionService = new ExecuteProcessService();

// 3. Регистрируем кастомный обработчик для ServiceTask
const flowNodeHandlers = {
    serviceTask: {
        async onEnter(flowNode, context) {
            if (flowNode.id === 'CalculateTask') {
                // Получаем переменные процесса
                const variables = context.executionContext.getVariables();
                const num1 = variables.num1;
                const num2 = variables.num2;
                const operation = variables.operation;
                
                // Вычисляем
                let result;
                switch (operation) {
                    case '+': result = num1 + num2; break;
                    case '-': result = num1 - num2; break;
                    case '*': result = num1 * num2; break;
                    case '/': result = num2 === 0 ? 'Ошибка: деление на ноль' : num1 / num2; break;
                    default: result = 'Ошибка: неизвестная операция';
                }
                
                // Сохраняем результат
                context.executionContext.setVariable('result', result);
                return; // завершаем задачу
            }
        }
    }
};

// 4. Запускаем процесс с входными переменными
const variables = {
    num1: 10,
    num2: 5,
    operation: '+'
};

executionService.start(model, variables, flowNodeHandlers)
    .then((executionContext) => {
        // Процесс завершён
        const result = executionContext.getVariable('result');
        console.log(`Результат: ${result}`);
    })
    .catch((err) => console.error('Ошибка выполнения:', err));
```

### Пояснение
- **Парсер** превращает XML в объектную модель.
- **Сервис выполнения** запускает процесс, передавая ему переменные и хендлеры.
- Для узла `CalculateTask` мы определяем `onEnter`, который выполняет вычисление и сохраняет результат.
- Процесс завершается автоматически после выполнения всех узлов.

---

## 3. **bpmn-moddle** (парсинг XML ↔ JSON, браузер / Node.js)

### Описание
`bpmn-moddle` не выполняет процессы, а только парсит BPMN XML в JavaScript-объекты и обратно. Мы можем использовать его для чтения BPMN и последующей ручной интерпретации.

### Код (браузерный пример)
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>BPMN Moddle Calculator</title>
</head>
<body>
    <input type="number" id="num1" value="10">
    <input type="number" id="num2" value="5">
    <select id="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
    </select>
    <button id="calculate">Вычислить</button>
    <div id="result">Результат: </div>

    <script type="module">
        import { BpmnModdle } from 'https://esm.sh/bpmn-moddle@8.1.0';

        // BPMN XML (тот же, что и выше)
        const bpmnXml = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"
             xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
             targetNamespace="http://bpmn.io/schema/bpmn">
  <process id="CalculatorProcess" isExecutable="true">
    <startEvent id="StartEvent" />
    <serviceTask id="CalculateTask" name="Вычислить результат" />
    <endEvent id="EndEvent" />
    <sequenceFlow id="flow1" sourceRef="StartEvent" targetRef="CalculateTask" />
    <sequenceFlow id="flow2" sourceRef="CalculateTask" targetRef="EndEvent" />
  </process>
</definitions>`;

        // Создаём экземпляр моддла
        const moddle = new BpmnModdle();

        // Парсим XML
        moddle.fromXML(bpmnXml, (err, definitions) => {
            if (err) {
                console.error('Ошибка парсинга:', err);
                return;
            }
            // Извлекаем процесс и его элементы
            const process = definitions.rootElements.find(el => el.$type === 'bpmn:Process');
            const tasks = process.flowElements.filter(el => el.$type === 'bpmn:ServiceTask');
            console.log('Найдено задач:', tasks.length);
            // Здесь можно проанализировать структуру процесса
        });

        // Логика калькулятора (исполнение не связано с BPMN, просто демонстрация)
        document.getElementById('calculate').addEventListener('click', () => {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const op = document.getElementById('operation').value;
            
            let result;
            switch (op) {
                case '+': result = num1 + num2; break;
                case '-': result = num1 - num2; break;
                case '*': result = num1 * num2; break;
                case '/': result = num2 === 0 ? 'Ошибка: деление на ноль' : num1 / num2; break;
                default: result = 'Ошибка: неизвестная операция';
            }
            document.getElementById('result').innerText = `Результат: ${result}`;
        });
    </script>
</body>
</html>
```

### Пояснение
- `BpmnModdle` парсит XML в объектную модель.
- В примере мы парсим диаграмму, а затем используем отдельную JavaScript-функцию для вычислений.
- **bpmn-moddle** не выполняет процесс; мы сами должны интерпретировать модель и вызывать нужные обработчики.

---

## 4. **bpmn-marshaller** (от Apache KIE Tools, TypeScript, браузер)

### Описание
`bpmn-marshaller` — современный TypeScript-инструмент для парсинга BPMN XML в строго типизированные JavaScript-объекты. Он также не выполняет процессы, но даёт удобный доступ к данным модели.

### Установка
```bash
npm install @kie-tools/bpmn-marshaller
```

### Код (TypeScript / браузер)
```typescript
import { Bpmn2Marshaller } from '@kie-tools/bpmn-marshaller';
import { XmlParser } from '@kie-tools/xml-parser-ts';

// BPMN XML
const bpmnXml = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL"
             xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI"
             targetNamespace="http://bpmn.io/schema/bpmn">
  <process id="CalculatorProcess" isExecutable="true">
    <startEvent id="StartEvent" />
    <serviceTask id="CalculateTask" name="Вычислить результат" />
    <endEvent id="EndEvent" />
    <sequenceFlow id="flow1" sourceRef="StartEvent" targetRef="CalculateTask" />
    <sequenceFlow id="flow2" sourceRef="CalculateTask" targetRef="EndEvent" />
  </process>
</definitions>`;

// Создаём парсер XML
const xmlParser = new XmlParser();

// Используем маршаллер
const marshaller = new Bpmn2Marshaller();
const model = marshaller.unmarshal(xmlParser.parse(bpmnXml));
// model — строго типизированный объект, описывающий BPMN-диаграмму

// Находим задачу
const definitions = model.definitions;
const process = definitions.rootElements?.find(el => el.$type === 'bpmn:Process');
const serviceTasks = process?.flowElements?.filter(el => el.$type === 'bpmn:ServiceTask');
console.log('Задачи:', serviceTasks?.map(t => t.id));

// Логика калькулятора (отдельно)
// ...
```

### Пояснение
- `bpmn-marshaller` даёт **строго типизированное** представление BPMN.
- Можно легко навигировать по модели, получать информацию о задачах, шлюзах и т.д.
- Выполнение процесса нужно реализовывать самостоятельно, используя полученную модель.

---

## 📊 Сравнение подходов в контексте калькулятора

| Инструмент | Где выполняется | Сложность реализации | Особенности |
|------------|----------------|----------------------|-------------|
| **bpmn-engine** | Node.js | Низкая | Готовый движок, кастомные сервисы. Не работает в браузере. |
| **ProcessEngine Core** | Node.js | Средняя | Модульный, гибкие обработчики. Требует больше кода. |
| **bpmn-moddle** | Браузер/Node.js | Низкая (парсинг) | Только парсинг. Выполнение нужно писать самому. |
| **bpmn-marshaller** | Браузер/Node.js | Низкая (парсинг) | TypeScript, строгая типизация. Выполнение ручное. |

### Рекомендация для вашего приложения
Если вы создаёте веб-приложение (как в вашем предыдущем коде с bpmn-js) и хотите выполнять BPMN-процессы прямо в браузере:
- **bpmn-moddle** или **bpmn-marshaller** позволят разобрать XML, а логику вычислений реализовать вручную (как вы уже сделали).
- Если вам нужен полноценный исполняемый движок в браузере, можно рассмотреть портирование `bpmn-engine` в Web Worker, но это сложнее.

Для серверной части (Node.js) лучше использовать **bpmn-engine** или **ProcessEngine Core**, так как они предоставляют готовое выполнение процессов.

Если нужен пример интеграции **bpmn-engine** с вашим веб-интерфейсом (через API), дайте знать – подготовлю дополнительный пример.

## 3
> bpmn-moddle или bpmn-marshaller позволят разобрать XML, а логику вычислений реализовать вручную (как вы уже сделали).

Подробно поясни с примером

Мы понимаем, что в предыдущих обсуждениях мы много раз пытались настроить отображение палитры BPMN-редактора и в итоге получили работающую схему, но палитра (stencil) так и не появилась. Затем пользователь попросил подробно пояснить, как использовать bpmn-moddle или bpmn-marshaller для парсинга XML и ручной реализации логики калькулятора, а не выполнения процесса движком. Он хочет понять, как можно, имея BPMN-диаграмму, извлечь из неё информацию (например, идентификаторы задач, параметры) и на основе этого строить логику калькулятора. Мы дадим подробный пример использования bpmn-moddle (проще для понимания) в браузере для парсинга XML, извлечения информации о процессе и затем связывания с интерфейсом калькулятора.

Также учтём, что ранее мы создавали полноценный BPMN-редактор с bpmn-js, где уже есть визуальное редактирование. Теперь нужно показать, как можно загрузить XML из этого редактора, распарсить его с помощью bpmn-moddle и использовать для выполнения кастомной логики (например, вычисления). Это будет демонстрация того, как можно расширить функциональность, чтобы "транслировать" BPMN-модель в исполняемую логику.

## 🔄 Трансляция BPMN XML в исполняемую логику с помощью bpmn-moddle

### Зачем это нужно
Когда у вас есть BPMN-диаграмма, созданная в редакторе (например, bpmn-js), и вы хотите, чтобы она не просто визуально отображалась, но и **управляла выполнением** какой-то бизнес-логики (в нашем случае – калькулятора), вам необходимо:
1. **Загрузить XML** диаграммы.
2. **Распарсить его** в объектную модель (JavaScript-объекты).
3. **Извлечь структуру** процесса: начальные события, задачи, шлюзы, последовательности.
4. **Интерпретировать эту структуру**, т.е. пройти по потоку управления и для каждого узла (ServiceTask) вызвать соответствующую функцию.

Именно этим занимаются **bpmn-moddle** и **bpmn-marshaller**. Они не выполняют процесс автоматически, но дают вам **удобный доступ к данным модели**, чтобы вы сами могли реализовать выполнение.

Ниже приведён подробный пример использования **bpmn-moddle** (более простой и хорошо документированный) для:
- Парсинга BPMN XML, загруженного из редактора.
- Построения графа последовательности выполнения.
- Исполнения логики калькулятора для задачи `CalculateTask`.

### Установка и подключение
В браузере bpmn-moddle можно подключить через CDN как ES-модуль:

```html
<script type="importmap">
  {
    "imports": {
      "bpmn-moddle": "https://esm.sh/bpmn-moddle@8.1.0",
      "min-dash": "https://esm.sh/min-dash@4.2.1"
    }
  }
</script>
<script type="module">
  import { BpmnModdle } from 'bpmn-moddle';
  // ... ваш код
</script>
```

### Шаг 1: Парсинг BPMN XML
Допустим, у вас есть XML, полученный из редактора (например, через вызов `modeler.saveXML()`). Создаём экземпляр `BpmnModdle` и вызываем `fromXML`:

```javascript
const moddle = new BpmnModdle();
moddle.fromXML(bpmnXml, (err, definitions) => {
  if (err) {
    console.error('Ошибка парсинга:', err);
    return;
  }
  // definitions — корневой объект BPMN
  // Далее извлекаем процесс и его элементы
});
```

### Шаг 2: Извлечение структуры процесса
Объектная модель, возвращаемая `moddle`, соответствует BPMN 2.0. Вам нужно найти:
- Элемент `<process>` (он лежит в `definitions.rootElements`).
- Все элементы потока: `startEvent`, `endEvent`, `serviceTask`, `sequenceFlow` и т.д.
- Построить карту последовательностей, чтобы определить порядок выполнения.

Вот пример функции, которая строит граф процесса:

```javascript
function buildProcessGraph(process) {
  const elements = {};
  const flows = [];
  const startEvents = [];

  // Собираем все элементы потока
  process.flowElements.forEach(el => {
    elements[el.id] = el;
    if (el.$type === 'bpmn:StartEvent') {
      startEvents.push(el);
    }
    if (el.$type === 'bpmn:SequenceFlow') {
      flows.push(el);
    }
  });

  // Строим карту исходящих рёбер для каждого узла
  const outgoing = {};
  flows.forEach(flow => {
    if (!outgoing[flow.sourceRef]) outgoing[flow.sourceRef] = [];
    outgoing[flow.sourceRef].push(flow.targetRef);
  });

  return { elements, outgoing, startEvents };
}
```

### Шаг 3: Интерпретатор процесса
Теперь нам нужно «пройти» по процессу, начиная со стартового события, и для каждой встреченной задачи выполнить соответствующую логику. Простейший интерпретатор может быть рекурсивным:

```javascript
async function executeNode(nodeId, variables, outgoing, elements, handlers) {
  const node = elements[nodeId];
  if (!node) return;

  switch (node.$type) {
    case 'bpmn:StartEvent':
      // Просто идём дальше по исходящим потокам
      const nextIds = outgoing[nodeId] || [];
      for (const nextId of nextIds) {
        await executeNode(nextId, variables, outgoing, elements, handlers);
      }
      break;

    case 'bpmn:ServiceTask':
      // Вызываем зарегистрированный обработчик для этой задачи
      const handler = handlers[node.id];
      if (handler) {
        await handler(variables);
      }
      // После выполнения идём по исходящим потокам
      const next = outgoing[nodeId] || [];
      for (const n of next) {
        await executeNode(n, variables, outgoing, elements, handlers);
      }
      break;

    case 'bpmn:EndEvent':
      // Конец, ничего не делаем
      break;

    default:
      // Можно добавить обработку других типов узлов (шлюзов и т.п.)
      break;
  }
}
```

### Шаг 4: Регистрация обработчиков задач
Для каждой `serviceTask` мы можем задать свою функцию. В нашем калькуляторе у нас есть задача с id `CalculateTask`. Регистрируем обработчик:

```javascript
const handlers = {
  CalculateTask: async (variables) => {
    const { num1, num2, operation } = variables;
    let result;
    switch (operation) {
      case '+': result = num1 + num2; break;
      case '-': result = num1 - num2; break;
      case '*': result = num1 * num2; break;
      case '/': result = num2 === 0 ? 'Ошибка: деление на ноль' : num1 / num2; break;
      default: result = 'Ошибка: неизвестная операция';
    }
    variables.result = result;
  }
};
```

### Шаг 5: Запуск процесса с входными данными
Входные данные (числа, операция) передаются через объект `variables`. После завершения интерпретации результат будет лежать в `variables.result`.

```javascript
async function runProcess(bpmnXml, inputVariables) {
  return new Promise((resolve, reject) => {
    const moddle = new BpmnModdle();
    moddle.fromXML(bpmnXml, async (err, definitions) => {
      if (err) reject(err);
      // Находим первый процесс (можно выбрать по id)
      const process = definitions.rootElements.find(el => el.$type === 'bpmn:Process');
      if (!process) reject('Нет процесса');

      const { elements, outgoing, startEvents } = buildProcessGraph(process);
      if (startEvents.length === 0) reject('Нет стартового события');

      const variables = { ...inputVariables };
      const handlers = {
        CalculateTask: async (vars) => {
          // реализация из п.4
        }
      };

      // Запускаем со стартового события
      await executeNode(startEvents[0].id, variables, outgoing, elements, handlers);
      resolve(variables.result);
    });
  });
}
```

### Полный пример интеграции с bpmn-js
Теперь соединим всё вместе. Предположим, у нас есть HTML-страница с bpmn-js редактором и калькулятором, как мы разрабатывали ранее. Мы добавим кнопку «Выполнить процесс», которая:
1. Получает текущий XML из редактора.
2. Берёт значения из полей ввода.
3. Запускает интерпретатор.
4. Отображает результат.

```html
<!-- Добавим кнопку в панель калькулятора -->
<button id="executeProcessBtn">▶ Выполнить BPMN процесс</button>
```

```javascript
// В коде, где у нас есть modeler (экземпляр BpmnModeler)
document.getElementById('executeProcessBtn').addEventListener('click', async () => {
  try {
    // 1. Получаем XML из редактора
    const { xml } = await modeler.saveXML({ format: true });
    
    // 2. Получаем входные данные из формы
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
    
    // 3. Запускаем интерпретатор (описан выше)
    const result = await runProcess(xml, { num1, num2, operation });
    
    // 4. Отображаем результат
    document.getElementById('result').textContent = 
      typeof result === 'number' ? result.toFixed(4) : result;
  } catch (err) {
    console.error(err);
    document.getElementById('result').textContent = 'Ошибка выполнения процесса';
  }
});
```

### Что происходит внутри
- **Парсинг**: `moddle.fromXML` превращает XML в объектную модель.
- **Построение графа**: мы извлекаем все элементы и последовательности, строим карту исходящих рёбер.
- **Интерпретация**: `executeNode` рекурсивно проходит по узлам в порядке, определяемом `sequenceFlow`. При достижении `serviceTask` вызывается зарегистрированный обработчик.
- **Обработчик** выполняет вычисление и сохраняет результат в объекте `variables`.
- После завершения процесса (когда дойдём до `endEvent`) возвращаем результат.

### Преимущества такого подхода
- **Гибкость**: вы сами контролируете, как интерпретировать каждый тип узла.
- **Независимость от движка**: не нужно поднимать Node.js-сервер, всё работает в браузере.
- **Легковесность**: bpmn-moddle – небольшая библиотека, не требующая тяжёлых зависимостей.
- **Расширяемость**: вы можете добавить поддержку шлюзов, параллельных ветвей, подпроцессов и т.д.

### Расширение: обработка условий, шлюзов
Для простоты мы пропустили шлюзы и условия. Если в вашем процессе есть exclusive gateway, вам нужно анализировать `conditionExpression` на исходящих потоках. Пример проверки условия:

```javascript
// Для узла типа bpmn:ExclusiveGateway
const outgoingFlows = outgoing[nodeId];
for (const flowId of outgoingFlows) {
  const flow = elements[flowId];
  if (flow.conditionExpression) {
    // Вычисляем условие (можно выполнить как JavaScript-код)
    const condition = flow.conditionExpression.body; // например, "${num1 > 0}"
    // Нужно безопасно вычислить выражение с переменными
    if (evaluateCondition(condition, variables)) {
      await executeNode(flow.targetRef, ...);
      break; // выбираем только один путь
    }
  }
}
```

Для вычисления условий можно использовать `new Function('variables', 'return ' + condition.replace(/\$\{([^}]+)\}/g, 'variables.$1'))` (но осторожно с безопасностью).

### Заключение
Используя **bpmn-moddle**, вы получаете полный контроль над процессом выполнения BPMN-диаграммы. Вы сами определяете, как обрабатывать задачи, условия и потоки. Это идеальное решение для no‑code/low‑code систем, где нужно связывать визуальные модели с бизнес-логикой, написанной на JavaScript.

Весь код, описанный выше, можно добавить в ваш существующий проект с bpmn-js. После этого калькулятор будет не просто отдельным компонентом, а будет **исполнять BPMN-процесс**, который пользователь может редактировать визуально. Таким образом, вы получите полноценный **транслятор BPMN XML в исполняемый код**.

Если вам нужен более подробный пример с обработкой шлюзов или интеграцией с серверной частью, дайте знать.
