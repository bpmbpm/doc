## 1

```mermaid
stateDiagram-v2
    direction LR

    state "2: оба узла работают" as S2
    state "1: один узел работает,\nвторой отказал" as S1
    state "0: оба узла отказали" as S0

    S2 --> S1: λ₂₁
    S1 --> S2: μ₁₂
    S1 --> S0: λ₁₀
    S0 --> S1: μ₀₁

    classDef working fill:#ffffff,stroke:#333333,stroke-width:1px
    classDef failed fill:#ffffff,stroke:#d62728,stroke-width:3px,color:#000000

    class S2,S1 working
    class S0 failed

    legend
        L1[Работоспособное состояние]:::working
        L2[Отказ: состояние 0]:::failed
```

Однако `stateDiagram-v2` не всегда корректно поддерживает отдельный блок легенды и применение `classDef` к элементам легенды в GitHub Mermaid. Поэтому для более надежного отображения в GitHub лучше использовать `flowchart`.

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
        L1(("Работоспособное"))
        L2(("Отказ<br/>узел 0"))
    end

    classDef working fill:#ffffff,stroke:#333333,stroke-width:1px,color:#000000
    classDef failed fill:#ffffff,stroke:#d62728,stroke-width:3px,color:#000000

    class S2,S1,L1 working
    class S0,L2 failed
```

В этой версии:

- состояния расположены слева направо в порядке `2 → 1 → 0`;
- каждое состояние представлено окружностью;
- состояния 2 и 1 имеют обычный контур;
- состояние 0 имеет красный контур;
- внизу размещена легенда;
- легенда показывает, что обычный контур означает работоспособное состояние, а красный контур — отказ.
