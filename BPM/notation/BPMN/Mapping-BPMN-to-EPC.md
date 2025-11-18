### Mapping BPMN to EPC
#### info
- https://www.businessstudio.ru/help/docs/current/doku.php/ru/csdesign/bpmodeling/bpmn_notation
- https://www.businessstudio.ru/help/docs/current/doku.php/ru/csdesign/bpmodeling/epc_notation

### Ответ 1
# Маппинг шлюзов BPMN в нотацию EPC

## 1. Exclusive Gateway (XOR) → Оператор XOR в EPC

### Разделяющий XOR (Exclusive Decision)
**BPMN**: 
```
[ ]→〈X〉→{A}
      →{B}
```

**EPC**:
```
(Event1)→[Function]→(Event2)─XOR─→[Function A]→...
                          └─→[Function B]→...
```

**Комментарий**: В EPC оператор XOR после события указывает на исключающее ИЛИ - будет выполнена только одна из последующих функций. Условия выбора пути указываются в виде событий или текстовых аннотаций.

### Сходящийся XOR (Exclusive Merge)
**BPMN**:
```
{A}→〈X〉→[ ]
{B}→   ↗
```

**EPC**:
```
...→[Function A]→(Event1)─XOR─→[Next Function]→...
...→[Function B]→(Event2)─┘
```

**Комментарий**: Сходящийся XOR объединяет альтернативные пути. В EPC это реализуется через оператор XOR, который ожидает одно из возможных предыдущих событий.

## 2. Parallel Gateway (AND) → Оператор AND в EPC

### Разделяющий AND (Parallel Fork)
**BPMN**:
```
[ ]→〈+〉→{A}
      →{B}
```

**EPC**:
```
(Event)→[Function]→(Event2)─AND─→[Function A]→...
                         └─→[Function B]→...
```

**Комментарий**: Оператор AND в EPC активирует все исходящие пути одновременно, что соответствует параллельному выполнению в BPMN.

### Сходящийся AND (Parallel Join)
**BPMN**:
```
{A}→〈+〉→[ ]
{B}→   ↗
```

**EPC**:
```
...→[Function A]→(Event1)─AND─→[Next Function]→...
...→[Function B]→(Event2)─┘
```

**Комментарий**: Сходящийся AND требует завершения всех входящих потоков перед продолжением процесса.

## 3. Inclusive Gateway (OR) → Комбинация операторов в EPC

### Разделяющий OR (Inclusive Decision)
**BPMN**:
```
[ ]→〈O〉→{A}
      →{B}
      →{C}
```

**EPC**:
```
(Event)→[Function]→(Gateway Event)─OR─→[Function A]→...
                                ├─→[Function B]→...
                                └─→[Function C]→...
```

**Комментарий**: В EPC нет нативного оператора OR, поэтому используются комбинации XOR и AND, либо расширенные нотации с явным указанием условий.

### Сходящийся OR (Inclusive Merge)
**BPMN**:
```
{A}→〈O〉→[ ]
{B}→   ↗
{C}→   ↗
```

**EPC**:
```
...→[Function A]→(Event1)─\
...→[Function B]→(Event2)─OR─→[Next Function]→...
...→[Function C]→(Event3)─/
```

**Комментарий**: Сложность маппинга заключается в том, что EPC не имеет прямого аналога сходящегося OR. Часто используется комбинация событий и условий.

## 4. Event-Based Gateway → Комбинация событий в EPC

**BPMN**:
```
[ ]→〈◇〉→⚡Timer→{A}
        →✉Message→{B}
```

**EPC**:
```
(Start Event)→(Wait State)─XOR─→(Timer Event)→[Function A]→...
                         └─→(Message Event)→[Function B]→...
```

**Комментарий**: Event-Based Gateway отображается через ожидающее событие с последующим оператором XOR, где каждое исходящее событие представляет триггер.

## 5. Complex Gateway → Пользовательские правила в EPC

**BPMN**:
```
{A}→〈*〉→[ ]
{B}→   ↗
{C}→   ↗
```

**EPC**:
```
...→[Function A]→(Event1)─\
...→[Function B]→(Event2)─[Complex Rule Function]→[Next Function]→...
...→[Function C]→(Event3)─/
```

**Комментарий**: Для Complex Gateway в EPC создается специальная функция, которая инкапсулирует сложную логику объединения потоков.

## Ключевые ограничения маппинга:

1. **Семантические различия**: EPC ориентирована на события, а BPMN - на потоки управления
2. **Отсутствие прямых аналогов**: Не все шлюзы BPMN имеют точные соответствия в EPC
3. **Визуальное представление**: EPC использует операторы как отдельные элементы, а не узлы соединения
4. **Условные переходы**: В EPC условия часто привязаны к событиям, а не к операторам

Маппинг требует адаптации модели с учетом бизнес-логики и конкретных требований процесса.
