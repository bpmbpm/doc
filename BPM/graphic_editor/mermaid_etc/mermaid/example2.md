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

note  
https://mermaid.live/edit#pako:eNpFj8FuhCAQhl-FzFmNICrLoZf22lNvDReyjq6JwgbHZrfGdy9q7HLiY74Z5l_g6hsEDRNZwo_edsGO6Y8wzrgpZ2n6xia-gfOELPTdjZhv2ZQbx-IhfJBx6Bq21f-9AdtD44c2-oAvDRLoQt-ApjBjAiOG0W4Iy2YboBuOaEDHa4OtnQcyYNwa2-7WfXs_np3Bz90NdGuHKdJ8b14RTsXO5L-e7noyNj358Hlk3qPHMXExDO9-dgRayP0b0As8IhVFVgolZS2KsuaVSuAZX_Mq45Wsqlypi6hzIdcEfvfF8qzkXFzKUkglY1EV6x-hs3BT

 Note только в sequenceDiagram? https://mermaid.js.org/syntax/flowchart.html 
 
