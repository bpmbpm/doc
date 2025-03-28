### Case1 VADtoTreeView
Упражнение по формированию TreeView по VAD диаграммам  
Раз разговор о генераторе кода (вспоминается Rational Rose), то предлагается Технологический практикум «VAD -> исполняемый код -> TreeView». Состав:
1. Набор схем процессов в VAD
2. TreeView – дерево процессов и подпроцессов
3. Метамодель VAD
4. Код для формирования элемента TreeView. Если не генерация кода, то хотя бы некую к нему конструкцию, которую можно просто перевести в код (в идеале node.js)

Подробнее:
1. Пример VAD:  
![ VAD ](https://github.com/bpmbpm/SemanticBPM/blob/main/docs/vad_2.png)
Более полный набор элементов (такой использую на практике) см. рис. 3 на [Repo MetaModel,  TriG](https://github.com/bpmbpm/SemanticBPM/wiki/%D0%9C%D0%B5%D1%82%D0%B0%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D0%B2). Общая папка проекта по [VAD](https://github.com/bpmbpm/SemanticBPM/tree/main/docs/VAD)
2. TreeView – типовой элемент управления (Control) в разных библиотеках и frameworks.  
В ARIS подобных системах он расположен в левом верхнем углу основного экрана, см. [mainGUI.md](https://github.com/bpmbpm/doc/blob/main/Project/SemanticBPM/design/mainGUI.md) 
В него (TreeView) нам нужно упаковать иерархию процессов, т.е. получить иерархический контейнер процессов. Именно иерархия контейнеров, а не иерархическая матрёшка (единственный вложенный элемент). В этой иерархии: иерархия процессов (ветки) и их конечные (не декомпозируемые) подпроцессы (листья). 
3. Метамодель VAD разобрана в [Repo MetaModel,  TriG](https://github.com/bpmbpm/SemanticBPM/wiki/%D0%9C%D0%B5%D1%82%D0%B0%D0%BC%D0%BE%D0%B4%D0%B5%D0%BB%D1%8C-%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D0%B2), включая алгоритм преобразования в RDF \ TriG.  
Парсинг в TriG (ранее и в RDF turtle) из yED формата показан в [Парсер graphml диаграмм](https://github.com/bpmbpm/SemanticBPM/tree/main/implementations/yed_based_semantizer)
Как это будет подобное выглядеть в MOF \ Sirius? Полагаю, что там нет готового компонента для подобного. 
4. В настоящее время нам в рамках проекта Semantic BPM нужно создать программу генерации TreeView из набора (например, 20 шт.) TriG файлов. Возможны варианты:
- Вариант 1: Кодом, например, js, анализировать TriG и через найденный предикат :hasParent строить дерево TreeView (не рассматриваем);
- Вариант 2: Делать подобное через SPARQL запросы к triple store. Кто-нибудь может примеры набросать, желательно прямо под реальный компонент TreeView (желательно какой-либо js-библиотеки)? 

В этом простейшем примере мы рассмотрели мылый кусочек VAD (без ролей и т.п.), достаточный для формирования дерева процессов и подпроцессов. Как иллюстрация, но реальной задачи обработки схем процессов.  
Мы говорим о MOF \ Sirius – как генераторе кода. Как это хотя бы в общих чертах будет в конечном итоге сделано в коде? На js (node.js) получится? Или приведите аналогичный простой пример типа hello world, но где конечная точка – это исполняемый код.  
В целом задача – сделать конвейер: на входе набор файлов с VAD в каком-либо формате векторной графики (XML), а на выходе дерево процессов с подпроцессами – как собранный TreeView.  
Фактически аналог WFE-engine типа Camunda, ELMA, [Runa WFE](https://habr.com/ru/articles/866822/), только на входе не BPMN, а VAD, а на выходе не исполнение процесса, а собранный TreeView. Как бы: через визуальное программирование и мета-моделирование генерация компонентов (TreeView) исполняемой программы (ARIS-подобной системы).

[В начало / реализация Semantic BPM на Sirius](https://github.com/bpmbpm/doc/blob/main/METAMODEL/SIRIUS/SIRIUSBPM.md)  
[Форум openmetamodel.org](https://forum.openmetamodel.org/?language=ru)
