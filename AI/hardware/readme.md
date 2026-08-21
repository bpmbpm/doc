### info
- [Зачем вашему процессору нейронный блок, если есть RTX 4090?](https://habr.com/ru/articles/971820/)
- [Корпоративный мозг на одной видеокарте: что на самом деле умеет локальная модель](https://habr.com/ru/articles/1072746/)
### DeepSeek Hardware

- [Требования к GPU и VRAM](https://habr.com/ru/articles/876320/)
- [Поднимаем DeepSeek llm локально](https://habr.com/ru/articles/878836)

#### 1 Какую версию chat.deepseek (open source) можно запустить на CPU (без GPU) и какие требования к hardware?

Если вы хотите запустить **open-source версию DeepSeek Chat** на CPU (без GPU), вам подойдут **квантованные (уменьшенные) модели**, так как полные версии требуют значительных ресурсов. Вот доступные варианты и требования к железу:

---

### **1. Доступные open-source модели DeepSeek**
DeepSeek выложил в открытый доступ несколько моделей, включая:
- **DeepSeek LLM (7B, 67B)** – базовая языковая модель.
- **DeepSeek Coder (1.3B, 6.7B, 33B)** – оптимизирована для программирования.
- **DeepSeek Math (7B)** – для математических задач.

#### **Какие версии можно запустить на CPU?**
- **7B-модели (например, `deepseek-llm-7b`)** – работают на CPU, но медленно.
- **1.3B–6.7B (например, `deepseek-coder-6.7b`)** – более быстрые, но менее мощные.
- **Квантованные версии (GGUF/Q4/Q5)** – оптимальны для CPU (например, через `llama.cpp`).

---

### **2. Требования к железу**
| Модель          | ОЗУ (RAM) | Диск  | CPU (минимально) | CPU (рекомендуется) |
|----------------|----------|-------|------------------|---------------------|
| **DeepSeek-LLM 7B (FP16)** | 16+ GB   | 15+ GB | 4+ ядер          | 8+ ядер (AVX2)      |
| **DeepSeek-Coder 6.7B (Q4)** | 8+ GB    | 5+ GB  | 4+ ядер          | 8+ ядер             |
| **DeepSeek-Math 7B (GGUF Q5)** | 12+ GB   | 7+ GB  | 4+ ядер          | 8+ ядер (AVX/AVX2)  |

#### **Оптимальные настройки для CPU:**
- **Формат модели:** `GGUF` (для llama.cpp) или `Q4_K_M` (4-битная квантованная).  
- **Библиотеки:**  
  - `llama.cpp` (лучше всего для CPU)  
  - `transformers` + `bitsandbytes` (8-битная загрузка)  
- **Пример запуска в `llama.cpp`:**
  ```bash
  ./main -m deepseek-7b-Q4_K.gguf -p "Привет! Как дела?"
  ```

---

### **3. Какую модель выбрать?**
- **Для чата/общения:** `DeepSeek-LLM-7B-Q4` (хороший баланс скорости и качества).  
- **Для программирования:** `DeepSeek-Coder-6.7B-Q4` (быстрее, но менее мощная, чем 7B).  
- **Для математики:** `DeepSeek-Math-7B-Q5` (лучше справляется с вычислениями).  

---

### **4. Где скачать?**
- Официальный Hugging Face:  
  → [DeepSeek-LLM](https://huggingface.co/deepseek-ai)  
  → [DeepSeek-Coder](https://huggingface.co/deepseek-ai/deepseek-coder)  
- Квантованные GGUF-версии:  
  → [TheBloke (DeepSeek GGUF)](https://huggingface.co/TheBloke)  

---

### **Вывод**  
**Лучший вариант для CPU:**  
`DeepSeek-LLM-7B` в **4-битном квантованном формате (GGUF)** через `llama.cpp`.  
**Минимальные требования:**  
- **8+ GB ОЗУ**, **4+ ядер CPU** (лучше 8+), **SSD** для быстрой загрузки.  

Хотите подробную инструкцию по установке? 😊

#### 2 Приведи пример задержек (примерное время ожидания ответа) ответов DeepSeek LLM (7B, 67B) с использованием GPU (несколько моделей GPU разного ценового диапазона) и указанного CPU для DeepSeek-LLM-7B-Q4 (квантованная LLM)? Результат сравнения выведи таблицей.

Вот сравнение задержек ответа для **DeepSeek LLM** на разных GPU и CPU (квантованная версия **7B-Q4**):  

### **Сравнение времени ответа (примерное)**  
*(Тест: генерация ~20-30 слов, контекст 512 токенов, без оптимизаций вроде vLLM)*  

| **Оборудование**               | **Модель**            | **VRAM/ОЗУ** | **Время ответа** | **Скорость (токен/с)** | **Примечания**                     |
|-------------------------------|----------------------|-------------|------------------|----------------------|-----------------------------------|
| **CPU (Intel i7-12700K)**     | DeepSeek-LLM-7B-Q4   | 12-16 GB RAM | 3–8 сек.         | 2–5 токен/с         | Зависит от оптимизации GGUF.      |
| **GPU (RTX 3060, 12GB)**      | DeepSeek-LLM-7B      | 12 GB VRAM  | 0.5–1.5 сек.     | 15–25 токен/с       | FP16, хороший бюджетный вариант.  |
| **GPU (RTX 4090, 24GB)**      | DeepSeek-LLM-7B      | 24 GB VRAM  | 0.2–0.8 сек.     | 30–50 токен/с       | Макс. скорость для 7B.            |
| **GPU (A100 40GB, PCIe)**     | DeepSeek-LLM-67B     | 40 GB VRAM  | 1–3 сек.         | 20–40 токен/с       | Требует квантования для 67B.      |
| **GPU (H100 80GB, SXM5)**     | DeepSeek-LLM-67B     | 80 GB VRAM  | 0.5–1.5 сек.     | 50–80 токен/с       | Оптимально для больших моделей.  |

---

### **Ключевые выводы:**  
1. **CPU (7B-Q4):**  
   - Работает, но медленно (**2–5 токен/с**). Подходит для тестирования, но не для продакшена.  
   - Лучше использовать **llama.cpp** с AVX2.  

2. **GPU (7B):**  
   - **RTX 3060/4060** – дёшево, но приемлемая скорость (**15–25 токен/с**).  
   - **RTX 4090** – почти мгновенные ответы (**30–50 токен/с**).  

3. **GPU (67B):**  
   - Требует **A100/H100** или квантования. На **A100** – **1–3 сек.** на ответ.  

4. **Оптимизации:**  
   - Для GPU: **vLLM** или **TensorRT-LLM** ускоряют генерацию в 2–3 раза.  
   - Для CPU: **GGUF + llama.cpp** с Q4/Q5 дают лучшую производительность.  

---

### **Пример кода для теста**  
```python
# Для GPU (7B, через transformers)
from transformers import AutoModelForCausalLM, AutoTokenizer
model = AutoModelForCausalLM.from_pretrained("deepseek-ai/deepseek-llm-7b", device_map="auto")
tokenizer = AutoTokenizer.from_pretrained("deepseek-ai/deepseek-llm-7b")
input_text = "Как настроить LLM на CPU?"
inputs = tokenizer(input_text, return_tensors="pt").to("cuda")
outputs = model.generate(**inputs, max_new_tokens=30)
print(tokenizer.decode(outputs[0], skip_special_tokens=True))
```

Для CPU через `llama.cpp`:  
```bash
./main -m deepseek-7b-Q4_K.gguf -p "Как настроить LLM на CPU?" -n 30
```

Если нужно подробнее про конкретную настройку — спрашивайте! 😊

### 3 Разное
- [Обзор методов квантования языковых моделей: GPTQ, GGUF, QLoRA](https://matakov.com/obzor-metodov-kvantovaniya-yazykovyx-modelej-gptq-gguf-qlora/#:~:text=GGUF%20%E2%80%94%20%D1%8D%D1%82%D0%BE%20%D1%81%D0%BF%D0%B5%D1%86%D0%B8%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9%20%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%2C%20%D1%80%D0%B0%D0%B7%D1%80%D0%B0%D0%B1%D0%BE%D1%82%D0%B0%D0%BD%D0%BD%D1%8B%D0%B9,MacBook%2C%20ARM%2C%20Raspberry%20Pi))
- [llama.cpp - это все, что вам нужно](https://www.reddit.com/r/LocalLLaMA/comments/1j417qh/llamacpp_is_all_you_need/?tl=ru)
- [Всё, что я узнал о запуске локальных языковых моделей](https://habr.com/ru/companies/ncloudtech/articles/878096/)

### ТГ
- https://t.me/agitopics/50983/53246 какой примерно вычислительный ресурс (параметры сервера : CPU, память и GPU) требуется, чтобы комфортно работала модель Qwen 3? Для начала версия  - 32B , а потом (в идеале) - 235B.

### nvidia
#### rtx-3060
- 12 Gb = 30 000: https://www.dns-shop.ru/catalog/recipe/312b2b5f7f5bafe0/rtx-3060/ ; https://www.ozon.ru/category/videokarty-geforce-rtx3060/
