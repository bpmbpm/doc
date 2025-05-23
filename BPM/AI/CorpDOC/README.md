
Лаборатории интеллектуальных систем ВятГУ

Для таких задач используют модели семейства Qwen, Llama и с недавних пор gemma. Размер LLM и глубину квантования можно посоветовать только исходя из понимания имеющейся видеокарты. Вариант - покупать токены у провайдеров опенсорсных LLM, но в таком случае это будет только демо вариант, т.к. выход за контур предприятия и потенциально ИБ может не пропустить. Далее. Обучение LLM на документах никто не делает - есть много исследований, которые ссылаться к тому, что это только портит модель. Грамотно обучить LLM мало кто в РФ может, а железные ресурсы для этого нужны впечатляющие. 

Вариант: отдаем вам нашу базовую RAG-систему бесплатно по соглашению, разрешающему ее неограниченное распространение и использование внутри организации, но с запретом на передачу другим юрлицам и на модификацию и использование кода или его частей. Она из коробки хорошо работает с документами, за исключением поиска по сложным таблицам, схемам и графикам. У нас скоро выйдет мультимодальный поиск, который уже умеет.  
задача сравнения и актуализации документов

Про НД
- [Как сделать RAG для своей компании](https://habr.com/ru/articles/905076/#comment_28236148)
- [RAG-технология в действии: как создать интеллектуальную систему поиска по нормативным документам]


### RAG
- [Архитектура RAG: полный гайд](https://habr.com/ru/companies/raft/articles/791034/) ; [Архитектура RAG: часть вторая — Advanced RAG](https://habr.com/ru/companies/raft/articles/818781/)
- [Обзор техник RAG: Retrieval Augmented Generation](https://habr.com/ru/articles/904032/)
- [Что такое RAG?](https://aws.amazon.com/ru/what-is/retrieval-augmented-generation/)
- Основная проблема RAG-подхода, на которой многие спотыкаются - это сегментация [(чанкинг)](https://towardsdatascience.com/rag-101-chunking-strategies-fdc6f6c2aaec/).
- [Создание решения RAG - Azure AI Search](https://learn.microsoft.com/ru-ru/azure/search/tutorial-rag-build-solution)
другое
- [Как мы челленджим бизнес в GenAI: от простых Naive RAG до workflow-агентских систем](https://habr.com/ru/companies/redmadrobot/articles/905628/)
- [Часть 3. Обзор технологий RAG для LLM: оптимизация извлеченных данных](https://habr.com/ru/articles/904232/)
- [RAG (Retrieval Augmented Generation) — простое и понятное объяснение](https://habr.com/ru/articles/779526/)
 
еще
- [Retrieval-Augmented Generation (RAG): Виды, Типы и Примеры](https://nerdit.ru/retrieval-augmented-generation-rag-vidy-tipy-i-primiery/)
- [6.4 Продвинутые техники RAG](https://courses.sberuniversity.ru/llm-gigachat/2/6/4)
- [Graph RAG: как RAG, только c графом знаний](https://blogs.epsilonmetrics.ru/graph-rag-kak-rag-tolko-c-grafom-znanij/)
