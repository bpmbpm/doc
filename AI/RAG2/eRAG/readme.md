### doc
- Вероятно, многие видели, но вдруг ещё не все: у [Фаулера есть неплохая статья](https://martinfowler.com/articles/gen-ai-patterns/) с описанием общего шаблона для построения продуктов на основе Generative AI. И да, RAG там является одним из шагов в цепочке. См. Embeddings, Reranker, Evals и др. https://t.me/c/3082493669/622
- На Neo4j в открытом доступе лежит книжка Essential GraphRAG. KNOWLEDGE GRAPH–ENHANCED RAG от TOMAŽ BRATANICˇ и OSKAR HANE https://go.neo4j.com/rs/710-RRC-335/images/Essential-GraphRAG.pdf
- Понравилось, что хоть и кратенько, но отмечается, что извлечение (retrieval) по (одно)векторной схожести, простой семантический поиск, не дает ожидаемого результата. По этому поводу есть замечательное 20 минутное изложение Бена Клавье (Ben Clavié) - I don’t use RAG, I just retrieve documents (https://hamel.dev/notes/llm/rag/p1-intro.html - слайды и конспект, видео: https://www.youtube.com/watch?v=Evlk9J-B_uc ) 
Тут 2 темы как минимум отлично раскрыты: 
1) Почему увеличение контекстного окна моделей не отменит RAG (распространенное заблуждение)
2) Что означает Retrieval в технологии RAG, почему не работает простой семантический поиск, и куда движутся разработки в этом направлении сегодня.

### info
- https://t.me/c/3082493669/862
    1. Google NotebookLM (говорят лучший сейчас персональный RAG без настроек) - исправляю - Open Notebook (https://github.com/lfnovo/open-notebook)  
Проект интересный, тем кто пишет RAG на питоне для себя в каких-либо целях, думаю, будет хорошим подспорьем, там и архитектура хорошая (слойка, DDD) и документация отличная.
   2. NotebookLM - отличный персональный инструмент (даже по сравнению с Obsidian + плагин + локальная LLM + сетап); на примере разбираемой нами книги, просто в пару кликов:  добаили книгу, кликнули создать майндмап, клик по Главе 3 на майндмапе.
   3. к разговору по теме 3й главы: 11 RAG Strategies Explained (https://www.youtube.com/watch?v=tLMViADvSNE)
с примерами кода и объяснениями - https://github.com/coleam00/ottomator-agents/blob/main/all-rag-strategies/README.md
