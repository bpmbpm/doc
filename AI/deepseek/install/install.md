install
### 1 Вопрос
Есть сервер без GPU на который нужно поставить chat.deepseek (open source). 
Какие модели требуют какой конфигурации сервера? Предложи варианты и дай ссылки на скачивание соответствующих версий LLM. 
Также дай ссылки на другое ПО, которое понадобится для запуска chat.deepseek. Дай ссылку на инструкцию по установке.


#### Мысли:
Мы рассматриваем запуск модели DeepSeek на сервере без GPU. Это означает, что мы будем использовать только CPU. Однако, стоит отметить, что модели больших размеров требуют значительных объемов оперативной памяти и могут работать очень медленно на CPU.

DeepSeek предоставляет несколько моделей, включая DeepSeek-Coder и DeepSeek-LLM. Поскольку мы говорим о chat.deepseek, вероятно, нас интересует модель для чата, например, DeepSeek-LLM-7B-Chat или DeepSeek-Coder-6.7B-Instruct.

Для запуска на CPU нам понадобится:

Модель в формате, который можно запустить на CPU (обычно это GGUF формат, который оптимизирован для CPU через llama.cpp).

Программное обеспечение для запуска модели, например, llama.cpp или Ollama.

Поскольку официальный репозиторий deepseek не обязательно предоставляет GGUF версии, мы можем поискать их в сообществе. Часто модели конвертируют в GGUF и выкладывают на Hugging Face.

Предположим, мы хотим запустить модель DeepSeek-LLM-7B-Chat. Нам понадобится ее GGUF версия. Я нашел несколько вариантов на Hugging Face, например:

DeepSeek-LLM-7B-Chat-GGUF

Аналогично, для DeepSeek-Coder-6.7B-Instruct:

DeepSeek-Coder-6.7B-Instruct-GGUF

Теперь, какая конфигурация сервера потребуется?

Для модели 7B в формате GGUF, как правило, требуется около 4-8 ГБ оперативной памяти (в зависимости от квантования). Чем ниже квантование (например, Q4_0, Q5_0), тем меньше памяти требуется, но тем менее точной становится модель.

Рекомендации по памяти для моделей 7B:

Q4_0: ~4 ГБ

Q5_0: ~5 ГБ

Q8_0: ~8 ГБ

Для моделей 67B (если бы мы захотели) потребовалось бы намного больше памяти (например, 40+ ГБ для Q4_0). Но на сервере без GPU, вероятно, мы ограничимся моделями 7B.

Другое ПО, которое понадобится:

llama.cpp - для запуска модели в формате GGUF.

Или Ollama - которая использует под капотом llama.cpp и предоставляет более простой интерфейс.

Инструкция по установке:

Вариант 1: Использование llama.cpp

Скачайте llama.cpp с GitHub: https://github.com/ggerganov/llama.cpp

Соберите проект (make).

Скачайте GGUF модель с Hugging Face (например, deepseek-llm-7b-chat.Q4_0.gguf).

Запустите модель с помощью: ./main -m path/to/model.gguf -p "Ваш запрос" -n 2048

Вариант 2: Использование Ollama

Установите Ollama: https://ollama.ai/download

Скачайте модель (если она есть в списке поддерживаемых) или создайте свой Modelfile.
В настоящее время Ollama имеет в своей библиотеке модель deepseek-coder: https://ollama.ai/library/deepseek-coder
Но для deepseek-llm, возможно, придется создать свой Modelfile.

Например, для deepseek-llm-7b-chat:

Создайте файл Modelfile:

text
FROM /path/to/deepseek-llm-7b-chat.Q4_0.gguf
Затем выполните:

text
ollama create deepseek-llm-7b-chat -f Modelfile
ollama run deepseek-llm-7b-chat
Однако, на момент написания, Ollama может не иметь встроенной поддержки deepseek-llm, но она поддерживает модели в формате GGUF через Modelfile.

Инструкция по установке llama.cpp:

Для Linux:

text
git clone https://github.com/ggerganov/llama.cpp
cd llama.cpp
make
Затем скачайте модель, например:

text
wget https://huggingface.co/TheBloke/DeepSeek-LLM-7B-Chat-GGUF/resolve/main/deepseek-llm-7b-chat.Q4_0.gguf
Запуск:

text
./main -m deepseek-llm-7b-chat.Q4_0.gguf -p "Какой твой любимый язык программирования?" -n 512
Для Ollama установка проще (смотрите официальный сайт для инструкций по установке на Linux).

Ссылки:

llama.cpp: https://github.com/ggerganov/llama.cpp

Ollama: https://ollama.ai/

Модель DeepSeek-LLM-7B-Chat GGUF: https://huggingface.co/TheBloke/DeepSeek-LLM-7B-Chat-GGUF

Модель DeepSeek-Coder-6.7B-Instruct GGUF: https://huggingface.co/TheBloke/DeepSeek-Coder-6.7B-Instruct-GGUF

Примечание: Всегда проверяйте актуальность ссылок и наличие последних версий моделей.

Если вы хотите использовать именно chat.deepseek (веб-интерфейс), то вам может понадобиться дополнительное ПО, например, веб-интерфейс для llama.cpp, такой как llama.cpp server или другие фронтенды.

Для запуска веб-интерфейса можно использовать llama.cpp server:

text
./server -m deepseek-llm-7b-chat.Q4_0.gguf -c 2048
Затем открыть в браузере http://localhost:8080.

Также есть другие проекты, например, text-generation-webui, который поддерживает GGUF модели.

Вот инструкция по установке text-generation-webui: https://github.com/oobabooga/text-generation-webui

Внутри text-generation-webui можно загружать GGUF модели.

Резюме:

Выберите модель (7B или 6.7B) в формате GGUF в зависимости от задач (общая или кодовая).

Убедитесь, что на сервере достаточно оперативной памяти (как минимум 8 ГБ для 7B модели с Q4_0, но лучше с запасом).

Установите либо llama.cpp, либо Ollama, либо text-generation-webui для запуска модели.

Следуйте инструкциям по установке выбранного программного обеспечения.
