### nocard.md
#### LLM without a video card
- [Собственный ИИ локально, бесплатно и без GPU](https://habr.com/ru/companies/ppr/articles/950226/)
- https://www.reddit.com/r/LocalLLM/comments/1mnc61x/llm_for_nongpu_machine/?tl=ru

#### CPU stand
- https://1dedic.ru/blog/articles/lokalnoe-ispolzovanie-yazykovoy-modeli-na-vydelennom-servere-chast-pervaya-deepseek-i-eyo
- [Локальное использование языковой модели на выделенном сервере. Часть первая: DeepSeek и её дистилляты на сервере без GPU](https://1dedic.ru/blog/articles/lokalnoe-ispolzovanie-yazykovoy-modeli-na-vydelennom-servere-chast-pervaya-deepseek-i-eyo) Были протестированы следующие модели:
  - deepseek-r1:70b — соответствует по параметрам DeepSeek R1 Distill Llama 70B,
  - deepseek-r1:32b — соответствует по параметрам DeepSeek R1 Distill Qwen 32B,
  - deepseek-r1:1.5b — соответствует по параметрам DeepSeek R1 Distill Qwen 1.5B.

### GPU stand
- [Локальный AI: Прагматичное руководство по запуску LLM на своем железе](https://habr.com/ru/articles/945086/) Уровень 2: "Народный вход" — Nvidia GeForce RTX 3060 12GB
  - Для кого: Энтузиасты с ограниченным бюджетом. Эта видеокарта — настоящий феномен. Несмотря на свой возраст, она остается лучшим билетом в мир локального AI благодаря своим 12 ГБ VRAM. На вторичном рынке ее можно найти в диапазоне 17-20 тысяч рублей. Этого объема достаточно для комфортной работы с моделями размером до 13 миллиардов параметров.  
  Я сам начинал с такой и, как и многие в сообществе, считаю ее более разумной покупкой для AI, чем, например, более новую RTX 5060, у которой всего 8 ГБ памяти на борту. Также, если не хочется заморачиваться с б/у вариантами, можно рассмотреть RTX 5060 с 16GB VRAM, бюджет 45-50 тысяч рублей.


### VPS
- [Установка LLM на скромном VPS](https://habr.com/ru/companies/ruvds/articles/829932/)
