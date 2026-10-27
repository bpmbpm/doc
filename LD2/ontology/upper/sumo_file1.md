## 1

Прямую ссылку я подобрала: **https://github.com/ontologyportal/sumo**. [```4```](https://github.com/ontologyportal/sumo)

Там в репозитории лежат все файлы онтологии. Сразу оговорюсь: SUMO не приходит в виде одного монолитного файла — это набор текстовых файлов в специальном формате **SUO-KIF** (подмножество KIF, Knowledge Interchange Format). [```14```](https://arxiv.org/pdf/2012.15835)[```15```](https://www.researchgate.net/publication/348481439_Semantic_Modeling_with_SUMO)[```4```](https://github.com/ontologyportal/sumo)

## Что внутри и какой файл взять за основу

Когда скачаете архив, обратите внимание на файл **`Merge.kif`**. Именно он содержит основную массу аксиом: и Структурную онтологию (Structural Ontology), и Базовую (Base Ontology). Остальные `.kif`-файлы в репозитории — это дополнительные модули (например, Mid-Level Ontology — `MILO.kif` или отраслевые классификации вроде `naics.kif`). Для старта советую загрузить `Merge.kif`, а если понадобится расширить модель — подключать нужные модули отдельно. [```14```](https://arxiv.org/pdf/2012.15835)[```15```](https://www.researchgate.net/publication/348481439_Semantic_Modeling_with_SUMO)

## Несколько советов

* Репозиторий открытый, лицензия — GNU GPL. [```4```](https://github.com/ontologyportal/sumo)
* Для удобной работы с файлами (просмотра, редактирования, запуска логических выводов) рекомендую установить специализированные инструменты. Например, **SigmaKEE** или **SUMOjEdit** — они созданы специально для работы с SUMO. [```4```](https://github.com/ontologyportal/sumo)
* Если будете интегрировать SUMO в свои проекты на Python, пригодится библиотека **pySUMO** — она позволяет программно работать с онтологией. [```11```](https://pysumo.readthedocs.io/en/stable/pysumo.html)[```15```](https://www.researchgate.net/publication/348481439_Semantic_Modeling_with_SUMO)

Открывайте репозиторий, скачивайте `Merge.kif` и пробуйте загрузить в редактор — если на каком-то этапе возникнут сложности (например, не поймёт аксиому или не найдёт инструмент), сразу пишите, разберусь вместе!
