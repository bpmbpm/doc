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
