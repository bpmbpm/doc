### graphic editor
К выбору графического редактора схем процессов

В дополнение к [Способы реализации](https://github.com/bpmbpm/SemanticBPM/tree/main/implementations#readme)

1. Редактор схем процессов не является главной частью проекта (MVP). Предполагается, что схемы могут создаваться в любом редакторе, при наличии "Корпоративный семантический шаблон", см. [Базовый технологический концепт на примере VAD, arisLDconcept.md](https://github.com/bpmbpm/doc/blob/main/Project/SemanticBPM/method/arisLDconcept.md). Cейчас да, парсер [yed_based](https://github.com/bpmbpm/SemanticBPM/blob/main/implementations/yed_based_semantizer/README.md)
2. Фактически речь в первую очередь просто связать XML (drawio, yEd, visio, svg) с TriG в общем экране [GUI, читай ARIS web Publisher](https://github.com/bpmbpm/doc/blob/main/Project/SemanticBPM/design/mainGUI.md). Парсить XML (drawio, yEd, visio, svg) придется (чтобы получить TriG), но это можно делать параллельно, см. п. 9 [Тестирование yed_based_semantizer](https://github.com/bpmbpm/SemanticBPM/wiki/%D0%97%D0%B0%D0%BC%D0%B5%D1%87%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D1%82%D0%B5%D1%81%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%B0%D0%BD%D0%B8%D1%8E)
