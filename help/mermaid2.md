## 1

```mermaid
graph LR
    S0((Работает)) -->|λ| S1((Частичный отказ))
    S1 -->|μ| S0
    S1 -->|λ| S2((Полный отказ))
```

или

```mermaid
graph LR
    S0(Работает) -->|λ| S1((Частичный отказ))
    S1 -->|μ| S0
    S1 -->|λ| S2((Полный отказ))
```

или

```mermaid
graph LR
    S0 -->|λ| S1
    S1 -->|μ| S0
    S1 -->|λ| S2((S2))
```

## link
- https://habr.com/ru/articles/652867/ Рисуем диаграммы Mermaid.js в README-файлах GitHub
- https://toolact.com/ru/mermaid

## 2
- node3([Форма 3]) - отказ  
- node6((Форма 6)) - работа

