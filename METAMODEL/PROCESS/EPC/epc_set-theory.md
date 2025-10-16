### set-theory
Исходное описание (словами и mermaid) см. https://github.com/bpmbpm/doc/blob/main/METAMODEL/PROCESS/EPC/epc_mermaid.md
#### set-theory info
- https://habr.com/ru/articles/457312/
- book: https://old.mccme.ru//free-books//shen/shen-logic-part1-2.pdf ; https://www.lirmm.fr/~ashen/part1.pdf ; https://ikfia.ysn.ru/wp-content/uploads/2018/01/KuratovskijMostovskij1970ru.pdf
- [ktrwbz](https://moodle.kstu.ru/pluginfile.php/632292/mod_resource/content/1/%D0%9B%D0%B5%D0%BA%D1%86%D0%B8%D1%8F%20%E2%84%961.%20%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D0%BF%D0%BE%D0%BD%D1%8F%D1%82%D0%B8%D1%8F%20%D1%82%D0%B5%D0%BE%D1%80%D0%B8%D0%B8%20%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2.pdf)
- https://neerc.ifmo.ru/wiki/index.php?title=%D0%A2%D0%B5%D0%BE%D1%80%D0%B8%D1%8F_%D0%BC%D0%BD%D0%BE%D0%B6%D0%B5%D1%81%D1%82%D0%B2

### code
## Представление процесса в формализме теории множеств

### 1. Базовые множества

**Множество типов объектов:**
```
T = {Event, Function, Document, Process}
```

**Множество всех объектов:**
```
O = {Событие1, Операция1, Документ1, Документ2, Событие2, Workflow, Docflow}
```

### 2. Множества объектов по типам

**Множество событий:**
```
E = {x ∈ O | тип(x) = Event} = {Событие1, Событие2}
```

**Множество функций:**
```
F = {x ∈ O | тип(x) = Function} = {Операция1}
```

**Множество документов:**
```
D = {x ∈ O | тип(x) = Document} = {Документ1, Документ2}
```

**Множество процессов:**
```
P = {x ∈ O | тип(x) = Process} = {Workflow, Docflow}
```

### 3. Отношения между объектами

**Отношение "вызывается":**
```
R_trigger = {(e, f) ∈ E × F | e вызывает f} = {(Событие1, Операция1)}
```

**Отношение "приводит к":**
```
R_result = {(f, e) ∈ F × E | f приводит к e} = {(Операция1, Событие2)}
```

**Отношение "является входом":**
```
R_input = {(d, f) ∈ D × F | d является входом для f} = {(Документ1, Операция1)}
```

**Отношение "является выходом":**
```
R_output = {(f, d) ∈ F × D | f производит d} = {(Операция1, Документ2)}
```

### 4. Структурные отношения

**Отношение принадлежности к Workflow:**
```
R_workflow = {(x, Workflow) | x ∈ {Событие1, Операция1, Событие2}}
           = {(Событие1, Workflow), (Операция1, Workflow), (Событие2, Workflow)}
```

**Отношение принадлежности к Docflow:**
```
R_docflow = {(x, Docflow) | x ∈ {Документ1, Операция1, Документ2}}
          = {(Документ1, Docflow), (Операция1, Docflow), (Документ2, Docflow)}
```

### 5. Функция типизации

**Функция, сопоставляющая объекту его тип:**
```
тип: O → T
тип(Событие1) = Event
тип(Операция1) = Function
тип(Документ1) = Document
тип(Документ2) = Document
тип(Событие2) = Event
тип(Workflow) = Process
тип(Docflow) = Process
```

### 6. Полная модель процесса

**Процесс как структура:**
```
Process_Model = ⟨O, T, E, F, D, P, R_trigger, R_result, R_input, R_output, R_workflow, R_docflow, тип⟩
```

Где:
- O - носитель (все объекты)
- T - множество типов
- E, F, D, P - подмножества объектов по типам
- R_* - бинарные отношения между объектами
- тип - функция типизации

Данная формализация полностью отражает структуру EPC-диаграммы в терминах теории множеств.
