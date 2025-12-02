### EPC 
- Event-Driven Process Chain - событийная цепочка процессов. Более точно: цепочка (последовательность) процессов (функций, операций, задач), управляемая событиями
- [нотация](https://www.businessstudio.ru/help/docs/current/doku.php/ru/csdesign/bpmodeling/epc_notation) см. "Типы связей между элементами диаграммы EPC" функция - функция 

### mermaid
- [Рисуем диаграммы Mermaid.js в README-файлах GitHub](https://habr.com/ru/articles/652867)
- https://yamadharma.github.io/ru/post/2021/01/03/diagrams-mermaid/
### Example1
#### verbal description
Дано:
- типы объектов:
  - Событие1	имеет тип	Event. 
  - Операция1	имеет тип	Function.
  - Документ1	имеет тип	Document.
  - Документ2	имеет тип	Document.
  - Событие2	имеет тип	Event.
- workflow: Событие1 -> Операция1 -> Событие2.
- docflow: Документ1 является входящим для Операция1, а Документ2 – исходящим.

#### mermaid diagram 
``` mermaid
flowchart TB
    subgraph workflow [Workflow]
        direction TB
        Event1{{Событие1}} --> Function1[Операция1] --> Event2{{Событие2}}
    end
    
    subgraph docflow [Docflow]
        direction TB
        Document1[/Документ1/]
        Document2[/Документ2/]
    end
    
    docflow ~~~ Function1
    
    Document1 -.->|входящий| Function1
    Function1 -.->|исходящий| Document2

    class Event1,Event2 event;
    class Document1,Document2 document;
    class Function1 function;
    
    classDef event fill:#ffcccc,stroke:#d6b656,stroke-width:2px;
    classDef function fill:#e1f5e1,stroke:#4caf50,stroke-width:2px,rx:8,ry:8;
    classDef document fill:#cccccc,stroke:#555,stroke-width:2px;
```
code:
```
flowchart TB
    subgraph workflow [Workflow]
        direction TB
        Event1{{Событие1}} --> Function1[Операция1] --> Event2{{Событие2}}
    end
    
    subgraph docflow [Docflow]
        direction TB
        Document1[/Документ1/]
        Document2[/Документ2/]
    end
    
    docflow ~~~ Function1
    
    Document1 -.->|входящий| Function1
    Function1 -.->|исходящий| Document2

    class Event1,Event2 event;
    class Document1,Document2 document;
    class Function1 function;
    
    classDef event fill:#ffcccc,stroke:#d6b656,stroke-width:2px;
    classDef function fill:#e1f5e1,stroke:#4caf50,stroke-width:2px,rx:8,ry:8;
    classDef document fill:#cccccc,stroke:#555,stroke-width:2px;
```
- [online mermaid.live](https://mermaid.live/edit#pako:eNqFU8tu00AU_ZXRdOukftuZSF1AYMcOCYk4C9ceJ1ZtTzQZk5TUERSBhFh0w7pS_wAQkQLi8Qszf8T4ETd1FtyN7_Wcc-6581jDgIQYIghAlJBlMPMpA88feRmQscjPp9Sfz8CS0ItyGYxfNNmkRpQRxhQHLCZZyyvjySucMW295nf8D_8qPolrvuNbrShAr3cGnuZZRdHG_Jb_5Vvxhn8RH_hO3GiTClDR9S5dL4q6A87COukYDUlQ-xzVyX9tSlyelk7Hp_yzbPVTvOO_-Jb_Ftfa6eQYpx_j9D2uY2rvZbPZ3M97CGh7g16_d3bFv4n3Uvm7uBEf5bA_rrqstmzwO_G2y2htelnNCRJ_sWgOQ6k3FeDyMzxcb50orUBpv8oeAO8tRE02PJyoAo1wVLcAUZwk6CSKAhnKglFygdFJaJ_blt2UvWUcshnS56thR2Gv34hgLbKw1oqYgR9Z6pGIQlfIVeglcrty-2kauSB44MmyrGNDUIFTGocQMZpjBaaYpn5ZwnWp7UE2wyn2IJJpiCM_T5gHvayQtLmfvSQk3TMpyacziCI_Wcgqn4c-w6PYlzc2bf9SeXkwfUzyjEGkOYNKBKI1XEGkG3bfNnTXdAaqaTiqbSrwUqIMtz9wXMc2VUN19IFVKPB11Vbt26Zhu6btWrqh6palKRCHMSP0Wf3Yqzdf_APIGXD7)

#### full EPC
- Вкл. русурсы исполнители \ роли и инструменты \ системы 

``` mermaid

flowchart TB
    subgraph workflow [Workflow]
        direction TB
        Event1{{Событие1 <br> start}} --> Function1[Операция1] --> Event2{{Событие2 <br> finish}}
    end
    
    subgraph docflow [Docflow]
        direction TB
        Document1[/Документ1/]
        Document2[/Документ2/]
    end
    
     subgraph role [Role & Tool]
        direction TB
        Role1([Исполнитель1])
        System1[[ИТ-система1]]
       
     end
    docflow ~~~ Function1
    workflow ~~~ role
    
    Document1 -.->|входящий doc <br> заготовка| Function1
    Function1 -.->|исходящий doc <br> продукт| Document2
    Function1 -.-> |исполняется| Role1
    Function1 -.-> |с помощью инструмента| System1
    class Event1,Event2 event;
    class Document1,Document2 document;
    class Function1 function;
    
    classDef event fill:#ffcccc,stroke:#d6b656,stroke-width:2px;
    classDef function fill:#e1f5e1,stroke:#4caf50,stroke-width:2px,rx:8,ry:8;
    classDef document fill:#cccccc,stroke:#555,stroke-width:2px;
```

[online mermaid.live](https://mermaid.live/edit#pako:eNqFVN1u0zAYfRXLkxBISVdnSdplaBcwuOOGTUKi7UWWOGu0_FROwjbaTFsnkCYmesMFV0jwBGUwMfbTvYL9RthJmmzt0HyRfI7Pd77j48_pQyu0MTQgAI4X7lhdk8Rg41k7AHxEyeYWMXtdsBOSbbEMWm-KqJMjxLBdgq3YDYMyT4wX73AQo36ffqcT-pN9YkN6Ts8QeLpJVkEU8zJpCmR5FbxMgiwbteg3ekPP2AEds4_0nI1QJwNkTMosk5IzOW7gRt00zQvjwM6DGf12aOXy1_LgQfUcl_hiA61F-oWXvWBH9Iqe0Ws2RIudeZwyj1OmuBlRlSoSehi0XovnI7ARht6DsgQWPW7Rr-yQWzWhl_SaGzXkBS_ZCeo8qZDre1GMfdTiWPpD5vBzdpgBr-gYdapCRVBqnDq1v79fnUy-VDaBWBPab--qNAzINXl1QE_ZB67vNxuxY35afwVvfmD0Dx3TX3TCxUzoKb2g48FsoXJacAnp_2O74e0iVo649cNBdR73MYGMamocG_FeG3Lq0SD39f4UdgiyjCsu-ZidsM-AK7gWZrKD6rDFLgrLcxrLM6OouARS3sEAi9fK7fXSNakULvaWRXeAlSqniFZuu5-B1rCTl-CXwvOMBcex-JCimITb2Fiw9U1d04upvOPacddQersrMwxT_oIEI0fDqCRRLdPR6nMkEtk1mhLZM5qzdNPdFHSWdUeTpmnzgqAEt4hrQyMmCZagj4lviinsC-42jLvYx21o8NDGjpl4cRu2g5Sn9czgbRj600wSJltdaDimF_FZ0rPNGK-5Jr98fvmV8M7H5HmYBDE0UF3VMxZo9OEuNGTUrC0v641mA6nKkqJpdUWCexynaLUGUviHJX1JadZVJZXg-6xyvdZE9YbeQEhFuqKqGpIgtt04JK_y_2z2u03_ARckGcA)

Отношения (предикаты) к объекту Операция (function, task, activity etc.):
- docflow
  - :Операция :ИмеетВходящийДокумент :Документ .
  - :Операция :ИмеетИсходящийДокумент :Документ .
- workflow
  - :Операция :ИмеетВходящийСобытие Событие .
  - :Операция :ИмеетИсходящийСобытие Событие .
- Role & Tool (resources)
  - :Операция :ИмеетИсполнителя Роль .
  - :Операция :ИмеетИнструментарий Система (инструмент) .
