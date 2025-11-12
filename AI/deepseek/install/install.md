install
### link
- [DeepSeek-LLM](https://github.com/deepseek-ai/DeepSeek-LLM)
### 1 Вопрос
Есть сервер без GPU на который нужно поставить chat.deepseek (open source). 
Какие модели требуют какой конфигурации сервера? Предложи варианты и дай ссылки на скачивание соответствующих версий LLM. 
Также дай ссылки на другое ПО, которое понадобится для запуска chat.deepseek. Дай ссылку на инструкцию по установке.

#### Ответ

Отличная задача! Запуск LLM на CPU без GPU — это вполне реально, но требует правильного выбора моделей и инструментов. Вот подробный разбор.

### Ключевой момент: Формат моделей GGUF

Для работы на CPU используются модели в специальном формате **GGUF** (ранее GGML). Они квантованы (сжаты) до разных уровней, что позволяет жертвовать небольшой точностью ради значительного снижения требований к памяти и вычислительной мощности.

---

### 1. Выбор модели и требования к серверу

Рекомендую начать с одной из этих моделей. Требования к RAM указаны с запасом (система + модель).

| Модель | Рекомендация | Минимум RAM | Комфортно RAM | Ссылка для скачивания (GGUF) |
| :--- | :--- | :--- | :--- | :--- |
| **DeepSeek-Coder-V2-Lite (16B)** | Лучший баланс для кода. Достаточно умная и при этом не слишком тяжелая. | 12-16 ГБ | 32 ГБ+ | [TheBloke/DeepSeek-Coder-V2-Lite-GGUF](https://huggingface.co/TheBloke/DeepSeek-Coder-V2-Lite-GGUF) (скачать `q4_0` или `q5_0`) |
| **DeepSeek-V2-Lite-Chat (16B)** | Универсальная чат-модель, общается и решает общие задачи. | 12-16 ГБ | 32 ГБ+ | [TheBloke/DeepSeek-V2-Lite-Chat-GGUF](https://huggingface.co/TheBloke/DeepSeek-V2-Lite-Chat-GGUF) (скачать `q4_0` или `q5_0`) |
| **DeepSeek-Coder-V2 (16B)** | **Внимание:** Это блоб с 236B параметрами, активируемыми MoE. Требует ОЧЕНЬ много RAM. | ~70-80 ГБ | 128 ГБ+ | [TheBloke/DeepSeek-Coder-V2-GGUF](https://huggingface.co/TheBloke/DeepSeek-Coder-V2-GGUF) (только для мощных серверов) |
| **DeepSeek-LLM-7B-Chat** | Старая, но проверенная 7B-модель. Подойдет для слабых серверов. | 8 ГБ | 16 ГБ | [TheBloke/DeepSeek-LLM-7B-Chat-GGUF](https://huggingface.co/TheBloke/DeepSeek-LLM-7B-Chat-GGUF) |

**Как выбрать версию (q4_0, q5_0, q8_0)?**
*   **q4_0**: Хороший баланс скорость/качество. Начинайте с него.
*   **q5_0** или **q5_1**: Качество и точность выше, но модель занимает больше памяти и медленнее.
*   **q8_0**: Качество почти как у оригинальной модели, но требует много памяти. Рекомендуется только если RAM очень много.

---

### 2. Необходимое ПО для запуска

Вам не нужен оригинальный `chat.deepseek` от компании. Вместо этого используйте следующие инструменты, которые идеально подходят для CPU.

#### Вариант 1: Ollama (Настоятельно рекомендуется)
Самый простой способ. Устанавливается одной командой, сам скачает модель и предоставляет API и веб-интерфейс.

*   **Сайт и инструкция по установке:** [https://ollama.ai](https://ollama.ai)
*   **Инструкция для Linux:**
    ```bash
    curl -fsSL https://ollama.ai/install.sh | sh
    ollama serve # Запускает сервер
    ```

#### Вариант 2: llama.cpp + UI
Более гибкий, но чуть более сложный в настройке вариант. `llama.cpp` — это движок для работы с GGUF-моделями, а UI — веб-интерфейс.

1.  **llama.cpp** (движок):
    *   **GitHub:** [ggerganov/llama.cpp](https://github.com/ggerganov/llama.cpp)
    *   **Готовые билды:** Можно скачать готовый бинарник для Linux из раздела [Releases](https://github.com/ggerganov/llama.cpp/releases) (файл `llama-server`).

2.  **Веб-интерфейс (UI):**
    *   **Open WebUI (ранее Ollama-WebUI):** [open-webui.com](https://www.open-webui.com/) — Мощный и красивый интерфейс, похожий на ChatGPT. Подключается к Ollama.
    *   **text-generation-webui (Oobabooga):** [GitHub](https://github.com/oobabooga/text-generation-webui) — Очень гибкий интерфейс с кучей функций, но сложнее в установке.
    *   **llama.cpp own server:** В `llama.cpp` есть встроенный простой веб-сервер.

---

### 3. Пошаговая инструкция по запуску (Вариант с Ollama)

Это самый быстрый путь к работающему чату.

1.  **Установите Ollama** по инструкции на их сайте.
2.  **Скачайте и запустите модель** через командную строку. Ollama сам найдет нужную GGUF-сборку.
    *   *Для кода:*
        ```bash
        ollama pull deepseek-coder:6.7b # Или 16b, если хватит RAM
        ```
    *   *Для общения:*
        ```bash
        ollama pull deepseek-llm:7b
        ```
    *(На сайте Ollama в поиске можно найти все доступные версии моделей DeepSeek)*
3.  **Запустите чат:**
    ```bash
    ollama run deepseek-coder:6.7b
    ```
4.  **(Опционально) Установите Open WebUI:**
    ```bash
    # Установка через Docker (самый простой способ)
    docker run -d --network=host -v open-webui:/app/backend/data -e OLLAMA_BASE_URL=http://127.0.0.1:11434 --name open-webui --restart always ghcr.io/open-webui/open-webui:main
    ```
    После установки откройте `http://your-server-ip:3000`.

---

### 4. Инструкция по запуску (Вариант с llama.cpp вручную)

1.  **Скачайте бинарник `llama-server`** со [страницы релизов llama.cpp](https://github.com/ggerganov/llama.cpp/releases).
2.  **Скачайте модель GGUF** с Hugging Face (ссылки выше в таблице). Например, `deepseek-coder-v2-lite-16b.q4_0.gguf`.
3.  **Запустите сервер:**
    ```bash
    # Переименуйте бинарник для удобства
    mv llama-server-xxxx llama-server
    chmod +x llama-server

    # Запустите сервер с моделью
    ./llama-server -m ./deepseek-coder-v2-lite-16b.q4_0.gguf -c 4096 --host 0.0.0.0 --port 8080
    ```
    *   `-m`: путь к модели.
    *   `-c`: размер контекста.
    *   `--host 0.0.0.0`: разрешает подключения с других машин.
    *   `--port 8080`: порт.
4.  **Откройте в браузере:** `http://your-server-ip:8080`. Вы увидите простой, но функциональный чат-интерфейс.

### Полезные ссылки для ознакомления:

*   **Официальный репозиторий DeepSeek (не для CPU):** [deepseek-ai/DeepSeek-LLM](https://github.com/deepseek-ai/DeepSeek-LLM)
*   **Hugging Face страница TheBloke:** [https://huggingface.co/TheBloke](https://huggingface.co/TheBloke) (здесь он выкладывает все свои GGUF-конвертации, ваш главный источник моделей).

Начните с **Ollama** и модели **DeepSeek-Coder-V2-Lite 16B (q4_0)**. Это даст вам лучший опыт с минимальными затратами на настройку. Удачи
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
