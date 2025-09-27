### BPMN connections
- https://www.businessstudio.ru/help/docs/current/doku.php/ru/csdesign/bpmodeling/bpmn_notation
  - [Типы связей между элементами диаграммы BPMN](https://www.businessstudio.ru/help/docs/current/doku.php/ru/csdesign/bpmodeling/bpmn_notation#%D1%82%D0%B8%D0%BF%D1%8B_%D1%81%D0%B2%D1%8F%D0%B7%D0%B5%D0%B9_%D0%BC%D0%B5%D0%B6%D0%B4%D1%83_%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%B0%D0%BC%D0%B8_%D0%B4%D0%B8%D0%B0%D0%B3%D1%80%D0%B0%D0%BC%D0%BC%D1%8B_bpmn)
- https://mainthing.ru/ru/item/434/ https://mainthing.ru/ru/item/531/
- https://stormbpmn.com/bpmn/elements

### info
В BPMN существует три основных типа связей: Поток управления (Sequence Flow) для соединения элементов внутри одного процесса, Поток сообщений (Message Flow) для передачи данных между разными пулами (участниками процесса), и Ассоциация (Association) для связывания объектов данных или артефактов с элементами процесса. 
1. Поток управления (Sequence Flow) 
Назначение: Показывает порядок выполнения действий в рамках одного бизнес-процесса, соединяя последовательные элементы: задачи, шлюзы, события.
Обозначение: Сплошная стрелка.
2. Поток сообщений (Message Flow)
Назначение: Описывает обмен сообщениями или информацией между различными участниками процесса (пулами) или внешними системами. 
Обозначение: Пунктирная линия с кружком на начале. 
3. Ассоциация (Association) 
Назначение: Используется для связи артефактов (например, объектов данных) с элементами потока управления. Показывает, что объект данных используется, изменяется или передается в рамках процесса.
Обозначение: Пунктирная линия без стрелки.

https://elma365.com/ru/bpmn2/7_2/  
https://studfile.net/preview/6354105/page:11/    
Данные на диаграмме могут быть представлены любыми из следующих четырех элементов:
1. Объект данных (Data Objects)
2. Входные данные (Data Inputs)
3. Выходные данные (Data Outputs)
4. Хранилища данных (Data Stores)  

Выделяют четыре вида соединяющих Элементов потока, связывающихся друг с другом и сдругими элементами:
1. Поток операций (Sequence Flow);
2. Поток сообщений (Message Flow);
3. Ассоциация (Association);
4. Ассоциация данных (Data Associations).

Графический язык моделирования бизнес-процессов BPMN. Спецификация https://plansys.ru/download/BPMN_notation.pdf стр.83

https://www.orbussoftware.com/docs/default-source/blogs/wp0070.pdf?sfvrsn=99656985_0 стр.10 Figure 18: Data Flow, represented with Data Associations and data objects  
https://www.bpmnquickguide.com/quickguide/bpmn-quick-guide/association

Удивляет, что одно и тоже:  передача документа / сообщения показано тремя разными способами:
- ассоциация (ненаправленная) к потоку сообщений
- ассоциация (ненаправленная) к потоку управления
- ассоциация направленная
  [ris1](pic/BPMN_data_object.jpg)  
В ерс все проще.
