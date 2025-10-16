### Другие формализмы
Исходное описание (словами и mermaid) см. https://github.com/bpmbpm/doc/blob/main/METAMODEL/PROCESS/EPC/epc_mermaid.md  

Рассматриваемый пример бизнес-процесса можно описать множеством различных формализмов. Вот основные из них:

## 1. **BPMN (Business Process Model and Notation)**
```mermaid
bpmn-graph
    startEvent([Событие1])
    task[Операция1]
    dataObject1[(Документ1)]
    dataObject2[(Документ2)]
    endEvent([Событие2])
    
    startEvent --> task
    task --> endEvent
    dataObject1 --> task
    task --> dataObject2
```

## 2. **Petri Nets**
```
P = {Событие1, Операция1_активна, Событие2, Документ1_доступен, Документ2_создан}
T = {Запуск_процесса, Завершение_операции}
F = {(Событие1, Запуск_процесса), 
     (Запуск_процесса, Операция1_активна),
     (Документ1_доступен, Запуск_процесса),
     (Операция1_активна, Завершение_операции),
     (Завершение_операции, Событие2),
     (Завершение_операции, Документ2_создан)}
M₀ = {Событие1, Документ1_доступен}
```

## 3. **UML Activity Diagrams**
```mermaid
graph TD
    start((•)) --> event1[Событие1]
    event1 --> operation1[Операция1]
    operation1 --> event2[Событие2]
    event2 --> end((•))
    
    document1[/Документ1/] --> operation1
    operation1 --> document2[/Документ2/]
```

## 4. **Формальные грамматики**
```
Процесс → Событие Функция Событие
Функция → Операция Документ_вход Документ_выход
Событие → "Событие1" | "Событие2"
Операция → "Операция1"
Документ_вход → "Документ1"
Документ_выход → "Документ2"
```

## 5. **Алгебра процессов (Process Algebra)**
```
Process = Событие1 · (Операция1 | Документ1) · Событие2 · Документ2
где:
  · - последовательная композиция
  | - параллельная композиция
```

## 6. **Z-спецификация**
```
[EVENT, FUNCTION, DOCUMENT]

Process_____
  events: P EVENT
  functions: P FUNCTION  
  documents: P DOCUMENT
  workflow: seq EVENT × FUNCTION × EVENT
  docflow: DOCUMENT × FUNCTION × DOCUMENT
  
  events = {Событие1, Событие2}
  functions = {Операция1}
  documents = {Документ1, Документ2}
  workflow = ⟨Событие1, Операция1, Событие2⟩
  docflow = ⟨Документ1, Операция1, Документ2⟩
```

## 7. **Логические формализмы**

**Исчисление предикатов:**
```
∀x (Function(x) ∧ hasInput(x, Документ1) ∧ hasOutput(x, Документ2) → 
    ∃y,z (Event(y) ∧ Event(z) ∧ triggeredBy(x,y) ∧ resultsIn(x,z)))
```

**Временная логика (LTL):**
```
◇(Событие1 ∧ ◯(Операция1 ∧ ◯(Событие2))) ∧
□(Операция1 → (Документ1 ∧ ◯Документ2))
```

## 8. **Графовые формализмы**

**Ориентированный граф:**
```
G = (V, E)
V = {v₁, v₂, v₃, v₄, v₅} где:
  v₁: Событие1, v₂: Операция1, v₃: Событие2, v₄: Документ1, v₅: Документ2
  
E = {(v₁, v₂), (v₂, v₃), (v₄, v₂), (v₂, v₅)}
```

## 9. **Реляционная модель**
```
Таблица ПРОЦЕССЫ:
ID | Название    | Тип
1  | Workflow    | Процесс
2  | Docflow     | Процесс

Таблица ЭЛЕМЕНТЫ:
ID | Название    | Тип        | Процесс_ID
1  | Событие1    | Event      | 1
2  | Операция1   | Function   | 1,2
3  | Событие2    | Event      | 1
4  | Документ1   | Document   | 2
5  | Документ2   | Document   | 2

Таблица СВЯЗИ:
От_Элемента | К_Элементу | Тип_Связи
1           | 2          | triggers
2           | 3          | produces
4           | 2          | input
2           | 5          | output
```

## 10. **Функциональное программирование**
```haskell
data ProcessElement = Event String | Function String | Document String

workflow :: [ProcessElement]
workflow = [Event "Событие1", Function "Операция1", Event "Событие2"]

docflow :: [ProcessElement] 
docflow = [Document "Документ1", Function "Операция1", Document "Документ2"]

-- Функция преобразования
transform :: Document -> Function -> Document
transform doc1 func = doc2
  where doc2 = Document "Документ2"
```

## 11. **State Machines**
```
Состояния: {Idle, Processing, Completed}
События: {Start, Process, Finish}

Transition Function:
  Idle + Start(Событие1) → Processing
  Processing + Process(Операция1) → Processing (с преобразованием Документ1→Документ2)
  Processing + Finish(Событие2) → Completed
```

Каждый формализм подчеркивает разные аспекты процесса:
- **BPMN/Petri Nets** - исполняемость и анализ
- **Логические формализмы** - верификация свойств  
- **Алгебраические подходы** - композиционность
- **Графовые модели** - структурный анализ
- **Реляционные модели** - хранение и запросы

Выбор формализма зависит от целей моделирования: анализ, исполнение, верификация или документация.
