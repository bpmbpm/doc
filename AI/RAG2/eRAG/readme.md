### doc
- Вероятно, многие видели, но вдруг ещё не все: у [Фаулера есть неплохая статья](https://martinfowler.com/articles/gen-ai-patterns/) с описанием общего шаблона для построения продуктов на основе Generative AI. И да, RAG там является одним из шагов в цепочке. См. Embeddings, Reranker, Evals и др. https://t.me/c/3082493669/622
- На Neo4j в открытом доступе лежит книжка Essential GraphRAG. KNOWLEDGE GRAPH–ENHANCED RAG от TOMAŽ BRATANICˇ и OSKAR HANE https://go.neo4j.com/rs/710-RRC-335/images/Essential-GraphRAG.pdf
- Понравилось, что хоть и кратенько, но отмечается, что извлечение (retrieval) по (одно)векторной схожести, простой семантический поиск, не дает ожидаемого результата. По этому поводу есть замечательное 20 минутное изложение Бена Клавье (Ben Clavié) - I don’t use RAG, I just retrieve documents (https://hamel.dev/notes/llm/rag/p1-intro.html - слайды и конспект, видео: https://www.youtube.com/watch?v=Evlk9J-B_uc ) 
Тут 2 темы как минимум отлично раскрыты: 
1) Почему увеличение контекстного окна моделей не отменит RAG (распространенное заблуждение)
2) Что означает Retrieval в технологии RAG, почему не работает простой семантический поиск, и куда движутся разработки в этом направлении сегодня.
