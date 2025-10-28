### RAG doc
- [Как сделать RAG для своей компании](https://habr.com/ru/articles/905076/) 
- [RAG на практике: чат-бот для корпоративной вики](https://habr.com/ru/companies/banki/articles/917642/)

### RAG
- [RAG (Retrieval Augmented Generation) — простое и понятное объяснение](https://habr.com/ru/articles/779526/) 
- [Прокачиваем RAG: тестируем техники и считаем их эффективность. Часть 1](https://habr.com/ru/articles/946888/)

### RAG ARC
- [Не просто RAG: Строим MCP-сервер на Node.js, чтобы дать LLM «архитектурное зрение»](https://habr.com/ru/articles/948002/)

### Enterprise RAG
- https://t.me/c/3082493669/372
- поиск по библиотеке знаний рекламного агентства:
  + постановка на github (https://github.com/airndlab/hackathon-hacks-ai-mediawise-qna/blob/main/docs/media-wise.pdf)
  + разбор на youtube (https://youtu.be/oAfcJk73cRY?si=tLw1QD7EZ2xZHbI5) 

- поиск по нормативным документам для РЖД:
  + постановка на github (https://github.com/airndlab/hackathon-hacks-ai-rzd-qna/blob/main/docs/case/rzd.pdf) 
  + разбор на youtube (https://youtu.be/9Xrz_tvTsnY?si=1QL19b9-hQkvo7RQ)  
Причем мы начали участвовать пару лет назад и в первый раз наше решение было без RAG, дальше изучили решения конкурентов и познакомились с RAG.
- [Как я построил RAG-систему за вечер с помощью 5 open source-инструментов](https://habr.com/ru/articles/955798/)
### tools
- [От LangChain к LangGraph: детально разбираемся с фреймворками и всей Lang-экосистемой](https://habr.com/ru/articles/956940/)

### book
- На Neo4j в открытом доступе лежит книжка Essential GraphRAG. KNOWLEDGE GRAPH–ENHANCED RAG от TOMAŽ BRATANICˇ и OSKAR HANE https://go.neo4j.com/rs/710-RRC-335/images/Essential-GraphRAG.pdf
отмечается, что извлечение (retrieval) по (одно)векторной схожести, простой семантический поиск, не дает ожидаемого результата. По этому поводу есть замечательное 20 минутное изложение Бена Клавье (Ben Clavié) - I don’t use RAG, I just retrieve documents (https://hamel.dev/notes/llm/rag/p1-intro.html - слайды и конспект, видео: https://www.youtube.com/watch?v=Evlk9J-B_uc ) 
Тут 2 темы как минимум отлично раскрыты: 
1) Почему увеличение контекстного окна моделей не отменит RAG (распространенное заблуждение)
2) Что означает Retrieval в технологии RAG, почему не работает простой семантический поиск, и куда движутся разработки в этом направлении сегодня.
- у Фаулера есть [неплохая статья](https://martinfowler.com/articles/gen-ai-patterns/) с описанием общего шаблона для построения продуктов на основе Generative AI. И да, RAG там является одним из шагов в цепочке.

### semantic search
-  семантический поиск [Представляем развитие проекта
MCP-сервера для поиска метаданных 1С для программирования с LLM](https://infostart.ru/marketplace/2460659/?utm_source=telegram&utm_medium=bloger&utm_campaign=mp_vebinar_vibecoding_v_1C)

### Type
- [СРАВНИТЕЛЬНЫЙ АНАЛИЗ МЕТОДОВ RAG](https://cyberleninka.ru/article/n/sravnitelnyy-analiz-metodov-rag-dlya-postroeniya-russkoyazychnyh-intellektualnyh-servisov) рассмотрены несколько базовых методов RAG, включая наивный RAG, HyDE и BM25. В RAG поиск осуществляется путем вычисления сходства между эмбеддингами запросов и фрагментов документов, при этом ключевую роль играет способность моделей эмбеддингов к семантическому представлению. Наиболее популярные модели эмбеддингов - BERT
**Описание метрик оценки RAG-систем** Mean Average Precision (MAP) - это метрика, используемая для оценки качества систем поиска информации, таких как системы поиска текста.

### Eval RAG
оценка качества ответов RAG
- [Пример использования RAG](https://help.cleanlab.ai/tlm/use-cases/tlm_rag/) ваша система RAG получает запрос пользователя и извлекает соответствующий контекст из базы знаний, форматирует запрос LLM на основе запроса и контекста и генерирует ответ, используя этот запрос.
