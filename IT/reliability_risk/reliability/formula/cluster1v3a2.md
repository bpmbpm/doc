## 2

Ошибка вызвана строками легенды в `stateDiagram-v2`:

```mermaid
L1[Работоспособное состояние]:::working
L2[Отказ: состояние 0]:::failed
```

Синтаксис `:::class` после узлов поддерживается в `flowchart`, но не поддерживается таким образом в `stateDiagram-v2`. Поэтому парсер воспринимает `:::` как неожиданный разделитель стиля.

Используйте `flowchart`, где окружности, классы стилей и легенда поддерживаются надежнее.

```mermaid
flowchart LR
    S2(("2<br/>Оба узла работают"))
    S1(("1<br/>Один узел работает<br/>второй отказал"))
    S0(("0<br/>Оба узла отказали"))

    S2 -->|λ₂₁| S1
    S1 -->|μ₁₂| S2
    S1 -->|λ₁₀| S0
    S0 -->|μ₀₁| S1

    subgraph LEGEND["Легенда"]
        L1(("Работоспособное состояние"))
        L2(("Отказ: состояние 0"))
    end

    classDef working fill:#ffffff,stroke:#333333,stroke-width:1px,color:#000000
    classDef failed fill:#ffffff,stroke:#d62728,stroke-width:3px,color:#000000

    class S2,S1,L1 working
    class S0,L2 failed
```

Если GitHub располагает легенду не снизу, а сбоку, используйте более надежный вариант с двумя Mermaid-блоками.

### Основной граф

```mermaid
flowchart LR
    S2(("2<br/>Оба узла работают"))
    S1(("1<br/>Один узел работает<br/>второй отказал"))
    S0(("0<br/>Оба узла отказали"))

    S2 -->|λ₂₁| S1
    S1 -->|μ₁₂| S2
    S1 -->|λ₁₀| S0
    S0 -->|μ₀₁| S1

    classDef working fill:#ffffff,stroke:#333333,stroke-width:1px,color:#000000
    classDef failed fill:#ffffff,stroke:#d62728,stroke-width:3px,color:#000000

    class S2,S1 working
    class S0 failed
```

### Легенда

```mermaid
flowchart LR
    L1(("Работоспособное состояние"))
    L2(("Отказ: состояние 0"))

    L1 --- L2

    classDef working fill:#ffffff,stroke:#333333,stroke-width:1px,color:#000000
    classDef failed fill:#ffffff,stroke:#d62728,stroke-width:3px,color:#000000

    class L1 working
    class L2 failed

    linkStyle 0 stroke:transparent,fill:none
```

В этом варианте:

- основной граф направлен слева направо;
- узлы расположены в порядке `2 → 1 → 0`;
- все состояния имеют форму окружности;
- состояния 1 и 2 имеют обычный контур;
- состояние 0 имеет красный контур;
- легенда не использует `stateDiagram-v2`;
- синтаксис `:::` не применяется, поэтому ошибка `STYLE_SEPARATOR` не возникает.
