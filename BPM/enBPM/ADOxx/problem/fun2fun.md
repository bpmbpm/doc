### fun2fun problem 
3.2.2 Проблема ADOxx-EPC. Печально, что такое же непонимание ЕРС и у разработчиков ADOxx - одной из немногих BPM систем на open source.   
У них нотация «как бы ЕРС» не позволяет рисовать два последовательных блока «function».  
При попытке fun-fun соединения:  
![ris](https://github.com/bpmbpm/doc/blob/main/BPM/enBPM/ADOxx/problem/pic/ToolKit_v1.png)


Выводит ошибку:  
![ris](https://github.com/bpmbpm/doc/blob/main/BPM/enBPM/ADOxx/problem/pic/Function-Function.png)

см. https://habr.com/ru/articles/810851/  
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
