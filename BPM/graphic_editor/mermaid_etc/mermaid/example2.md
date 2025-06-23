### example2

VAD (Value Added Chain Diagram)  
``` flowchart LR
subgraph Основные процессы
    A[Процесс A] --> B[Процесс B]
end
C[Процесс C] --> A
```

``` mermaid
flowchart LR
subgraph Основные процессы
    A[Процесс A] --> B[Процесс B]
end
C[Процесс C] --> A
```

Блок-схема со стилем  https://gist.github.com/ChristopherA/bffddfdf7b1502215e44cec9fb766dfd
``` 
graph TB
    sq[Square shape] --> ci((Circle shape))

    subgraph A
        od>Odd shape]-- Two line<br/>edge comment --> ro
        di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
        di==>ro2(Rounded square shape)
    end

    %% Notice that no text in shape are added here instead that is appended further down
    e --> od3>Really long text with linebreak<br>in an Odd shape]

    %% Comments after double percent signs
    e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)

    cyr[Cyrillic]-->cyr2((Circle shape Начало));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange
```

``` mermaid
graph TB
    sq[Square shape] --> ci((Circle shape))

    subgraph A
        od>Odd shape]-- Two line<br/>edge comment --> ro
        di{Diamond with <br/> line break} -.-> ro(Rounded<br>square<br>shape)
        di==>ro2(Rounded square shape)
    end

    %% Notice that no text in shape are added here instead that is appended further down
    e --> od3>Really long text with linebreak<br>in an Odd shape]

    %% Comments after double percent signs
    e((Inner / circle<br>and some odd <br>special characters)) --> f(,.?!+-*ز)

    cyr[Cyrillic]-->cyr2((Circle shape Начало));

     classDef green fill:#9f6,stroke:#333,stroke-width:2px;
     classDef orange fill:#f96,stroke:#333,stroke-width:4px;
     class sq,e green
     class di orange
```

### подпись под фигурой
использовать subgraph или note для создания дополнительного текста.

```
flowchart LR
    A[Основной текст] --> B[Процесс]
    B --> C[Конечный процесс]
    note below B: Дополнительная информация
```

``` mermaid
flowchart LR
    A[Основной текст] --> B[Процесс]
    B --> C[Конечный процесс]
    note below B: Дополнительная информация
``` 
