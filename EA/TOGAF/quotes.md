### Content Metamodel 
#### core metamodel entities
[v9.2: 30.2 Content Metamodel Vision and Concepts](https://pubs.opengroup.org/architecture/togaf92-doc/arch/chap30.html) 

Некоторые из ключевых концепций отношений, связанных с основными сущностями метамодели, описаны ниже:  
-	Процесс обычно следует использовать для описания потока
    -	Процесс — это поток взаимодействий между функциями и службами, который не может быть физически развернут. Все процессы должны описывать поток выполнения функции, и поэтому развертывание процесса осуществляется через функцию, которую он поддерживает; т. е. приложение реализует функцию, которая имеет процесс, а не приложение реализует процесс.
-	Функция описывает единицы бизнес-возможностей на всех уровнях детализации.
    -	Термин «функция» используется для описания единицы бизнес-возможностей на всех уровнях детализации, охватывая такие термины, как цепочка создания стоимости, область процесса, возможность, бизнес-функция и т. д. Любая ограниченная единица бизнес-функции должна быть описана как функция.
-	Бизнес-сервисы поддерживают организационные цели и определяются на уровне детализации, соответствующем необходимому уровню управления.
    -	Бизнес-сервис действует как граница для одной или нескольких функций. Степень детализации бизнес-сервисов зависит от фокуса и акцента бизнеса (что отражается в его драйверах, целях и задачах). Сервис в терминологии сервисно-ориентированной архитектуры (SOA) (т. е. развертываемая единица функциональности приложения) на самом деле гораздо ближе к сервису приложения, компоненту приложения или технологическому компоненту, которые могут реализовывать или поддерживать бизнес-сервис.
- Бизнес-сервисы развертываются на компонентах приложений

