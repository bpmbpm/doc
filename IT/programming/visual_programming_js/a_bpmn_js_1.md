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

Если нужна помощь с интеграцией bpmn-engine в ваш калькулятор или реализация кастомных обработчиков — дайте знать, подготовлю пример кода.
