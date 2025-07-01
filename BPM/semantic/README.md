### Подборка ссылок про "BPM+Семантика", т.е. направление semantic BPM
Папка проекта [SemanticBPM](https://github.com/bpmbpm/doc/tree/main/Project/SemanticBPM)
#### Иллюстрации
Обсуждения, habr \ boldachev:  
[Информация, как много в этом слове…](https://habr.com/ru/articles/713376/#comment_25205654):  
<img src="https://habrastorage.org/getpro/habr/upload_files/be5/d18/761/be5d18761cda6b1df57c678963b61fc1.png" width="500" /> 

[Акты, классы и семантический сахар](https://habr.com/ru/articles/708026/#comment_25053928):  
<img src="https://habrastorage.org/r/w1560/getpro/habr/upload_files/67d/a0e/052/67da0e0528da47729c53664448d66709.png" width="500" /> 

### Моделирование данных в "сторону" семантики
### Eclipse
- [Разработка метамодели с помощью Eclipse Modeling Framework (и немного про моделирование данных)](https://habr.com/ru/companies/cit/articles/266433/)
- [Введение в моделирование MDD-UML-EMF в Eclipse](https://docs.google.com/document/d/1JRmE-auqJO8zb-skbooUOW1_GLdzNzne0zsUfFwShjc/edit?tab=t.0#heading=h.3rdcrjn) Introduction to Model-Driven Development, UML-EMF Modeling in Eclipse IDE , см. Сводная таблица функциональности

Eclipse - популярная free open source IDE для разработки софта на Java. Альтернативы: IntelliJ IDEA, Android Studio (based on IntelliJ IDEA), Oracle NetBeans. В этой статье рассказывается об особенностях Model-Driven Development в Eclipse.
Model-Driven Development/Engineering/Architecture (MDD/MDE/MDA) или CASE/UML - все эти термины относятся к Rapid/Agile Development (быстрая разработка кода) и обозначают процесс разработки софта, при кот. программист-архитектор в специальном CASE/UML tool/framework сначала создает архитектуру системы, описывает ее структуру (модель данных из классов с основными атрибутами и методами, взаимосвязи между ними) и поведение / behavior (process flow, activity, sequence, use cases сценарии работы пользователей). Затем генерится код на указанном языке и под нужную платформу уже с UI, auto-validation и шаблонами методов. После этого в код и исходную модель можно продолжать вносить изменения и генерить новый код с их сохранением после каждой итерации. 

В MDD различают модели: Platform-Independent (PIM, бизнес-логика системы), Platform-Specific (PSM, конкретная реализация PIM для данной OS, данного языка программирования, заданного UI renderer и с учетом др. ограничений) и Code model (сгенеренный по PSM код). Весь сгенеренный код еще называют implementation artifacts, т.к. кроме executable кода могут генериться XML/Database Schema/XSD с данными/стилями. Ключевое понятие MDD - MetaObject Facility (MOF) - спецификация для meta modeling languages, кот. гарантирует сохранение семантики UML structural/behavioral models, CWM data models при импорте/экспорте через XMI и обработке разными генераторами кода. 

Желаемый тип редактора и особенности задачи уже диктуют выбор тула. Редактор диаграмм имеет смысл когда множество данных модели конечно - манипулировать тысячами элементов в Visio будет неудобно. В этом случае скорее подойдет treeview/forms редактор, но, поскольку все данные модели редактор хранит в XML, нативная работа с большой database в виде XML скорее будет медленной и неэффективной.

Преимущества MDD:

multi-platform, multi-language - нет привязки модели к конкретному языку/платформе/IDE. Модели реализуют спецификацию UML2/BPNM, данные хранятся в XML формате XMI, кот. поддерживается многими modeling tools. Весь код под нужную платформу генерит platform-specific renderer MDD tool.
