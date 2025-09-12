### fun2fun problem 
см. https://habr.com/ru/articles/810851/
Пункт 3.2.2 Проблема ADOxx-EPC. Печально, что такое же непонимание ЕРС и у разработчиков ADOxx - одной из немногих BPM систем на open source.   
У них нотация «как бы ЕРС» не позволяет рисовать два последовательных блока «function».  
При попытке fun-fun соединения:  
![ris](https://github.com/bpmbpm/doc/blob/main/BPM/enBPM/ADOxx/problem/pic/ToolKit_v1.png)

Выводит ошибку:  
![ris](https://github.com/bpmbpm/doc/blob/main/BPM/enBPM/ADOxx/problem/pic/Function-Function.png)

Предложение:  
https://habr.com/ru/articles/810851/#comment_28783706   
![ris](https://habrastorage.org/r/w1560/getpro/habr/upload_files/49c/da9/209/49cda92099fa2542b0e35e42f22ab730.png)

#### Делал
Общий экран Library Management:  
![ris](https://github.com/bpmbpm/doc/blob/main/BPM/enBPM/ADOxx/problem/pic/Function-Function_3.png)

Добавил:  
![ris](https://github.com/bpmbpm/doc/blob/main/BPM/enBPM/ADOxx/problem/pic/new_rel_1.png)

Полагаю, что как то нужно редактировать subSequent (его source \ target) или добавлять отдельную "стрелку" (отношение). 
#### Смотрел
- https://www.adoxx.org/documentation/01_getting_started/05_hello_world.html
- https://www.adoxx.at/documentation/70_adoxx_components/20_Library_Management/Settings.html
- https://adoxx.org/documentation/10_modelling_language/#meta-model-concepts-in-adoxx
- https://bee-up.omilab.org/home/docs/Bee-Up_Handbook_1.6.pdf

### Спросил у bee-up@omilab.org
#### Использование стандартной библиотеки
По умолчанию ADOxx поставляется с начальной библиотекой OMiLAB (https://www.adoxx.org/documentation/80_special_cases/adoxx_libraries.html#omilab-starting-library), которая не содержит никаких языков моделирования и вместо этого используется в качестве отправной точки для реализации вашего собственного инструментария моделирования. Другие библиотеки в ADOxx являются примерами или альтернативными отправными точками для создания вашей собственной библиотеки и не являются стандартной библиотекой.

Если используете не Bee-Up, а какую-то другую библиотеку, то классы связей могут быть настроены таким образом, чтобы предотвратить такое соединение, например, указав разные исходные и целевые классы или указав мощность классов и применяя их после каждого действия моделирования в атрибуте библиотеки "Настройки по умолчанию":
![ris](https://github.com/bpmbpm/doc/blob/main/BPM/enBPM/ADOxx/problem/pic/ado2.png)

Вы можете найти более подробную информацию об атрибутах библиотеки и мощности классов в документации ADOxx: https://www.adoxx.org/documentation/10_modelling_language/01_application_library.html#library-attributes
https://www.adoxx.org/documentation/10_modelling_language/23_special_attributes.html#class-cardinality
 
Если у вас возникли проблемы с ADOxx, пожалуйста, свяжитесь с нами info@adoxx.org 

#### Использовать библиотеку Bee-Up
В Bee-Up 1.7 вы можете подключить две функции в EPC с последующим подключением:
![ris](https://github.com/bpmbpm/doc/blob/main/BPM/enBPM/ADOxx/problem/pic/be1.png)

Типа: купите библиотеку Bee-Up 1.7 (10 евро) и там уже будет "все хорошо" (исправлена грубость по запрету в EPC соединения fun-fun).  
Страница загрузки Bee-Up: https://bee-up.omilab.org/activities/bee-up/#download
