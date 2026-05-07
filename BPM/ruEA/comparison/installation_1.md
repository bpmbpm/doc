## 11. Инструкция по сборке из исходников
Дополнние к https://github.com/bpmbpm/doc/blob/main/BPM/ruEA/comparison/architeezy_warchi.md
### 11.1 Сборка architeezy из исходников

> **Статус**: Основная платформа architeezy имеет **закрытый исходный код** и доступна только как SaaS (architeezy.com) или self-hosted (по договорённости с командой). Из открытых источников доступны только **примеры клиентских приложений** на REST API.

#### Сборка примеров приложений (architeezy-apps)

**Требования**:
- Node.js 18+ и npm
- Bun (runtime для dev-сервера)
- Docker (опционально)
- Аккаунт на architeezy.com (для доступа к API)

**Шаги**:

```bash
# 1. Клонирование репозитория
git clone https://github.com/metamodeldev/architeezy-apps.git
cd architeezy-apps

# 2. Переход в конкретное приложение (например, graph)
cd apps/graph

# 3. Установка зависимостей (если используется npm)
npm install

# 4. Запуск dev-сервера через Bun
bun run dev

# 5. Или запуск через Docker
docker build -t architeezy-graph .
docker run -p 3000:3000 architeezy-graph

# 6. Открыть в браузере
open http://localhost:3000
```

**Конфигурация API**:
- Необходимо указать `ARCHITEEZY_API_URL` и токен OAuth в переменных окружения или конфигурационном файле
- Аутентификация через OAuth popup (Google, GitHub, Yandex, Keycloak)

**Тестирование**:
```bash
# E2E тесты через Playwright
npx playwright test
```

---

### 11.2 Сборка wArchi из исходников

**Требования системы**:
- **JDK 25** (для бэкенда)
- **Node.js** 18+ и **npm** (для фронтенда); рекомендуется использовать `.nvmrc`
- **PostgreSQL** 14+ (запущенный экземпляр)
- **Cerbos** (авторизационный сервер)
- **Git** для клонирования с GitVerse

#### Шаг 1. Клонирование репозиториев

```bash
# Создать рабочую директорию
mkdir warchi-workspace && cd warchi-workspace

# Клонировать бэкенд
git clone https://gitverse.ru/ngroznykh/arepos-server.git

# Клонировать фронтенд
git clone https://gitverse.ru/ngroznykh/warchi.git

# Клонировать библиотеку диаграмм (опционально)
git clone https://gitverse.ru/ngroznykh/papirus.git
```

#### Шаг 2. Настройка PostgreSQL

```bash
# Создать базу данных
psql -U postgres -c "CREATE DATABASE warchi;"
psql -U postgres -c "CREATE USER warchi_user WITH PASSWORD 'your_password';"
psql -U postgres -c "GRANT ALL PRIVILEGES ON DATABASE warchi TO warchi_user;"
```

#### Шаг 3. Настройка и сборка бэкенда (arepos-server)

```bash
cd arepos-server

# Проверить версию JDK (требуется 25)
java -version

# Настроить подключение к БД
# Отредактировать src/main/resources/application.yml или application.properties:
# spring.datasource.url=jdbc:postgresql://localhost:5432/warchi
# spring.datasource.username=warchi_user
# spring.datasource.password=your_password

# Настроить Cerbos (URL авторизационного сервера):
# cerbos.host=localhost
# cerbos.port=3593

# Сборка через Gradle
./gradlew build

# Запуск (dev-режим, бэкенд стартует на :8080)
./gradlew bootRun

# Альтернатива: запуск JAR
java -jar build/libs/arepos-server-*.jar
```

> **Примечание**: Liquibase автоматически применит миграции БД при первом запуске.

#### Шаг 4. Настройка Cerbos (авторизация)

```bash
# Установка Cerbos (Linux)
curl -L -o cerbos https://github.com/cerbos/cerbos/releases/latest/download/cerbos_linux_amd64
chmod +x cerbos

# Запуск с базовой конфигурацией
./cerbos server --config=.cerbos.yaml
# Cerbos слушает на :3593 (gRPC) и :3592 (HTTP)
```

#### Шаг 5. Настройка и запуск фронтенда (warchi)

```bash
cd ../warchi

# Использовать версию Node.js из .nvmrc
nvm use   # или nvm install && nvm use

# Установка зависимостей
npm install

# Настроить переменные окружения (скопировать и отредактировать):
cp .env.example .env
# VITE_API_URL=http://localhost:8080
# VITE_AUTH_URL=... (если требуется)

# Запуск dev-сервера (фронтенд на :5173)
npm run dev

# Production-сборка
npm run build
# Артефакты появятся в ./dist/
```

#### Шаг 6. Сборка Papirus (библиотека диаграмм, опционально)

```bash
cd ../papirus

# Использовать версию Node.js из .nvmrc
nvm use

# Установка зависимостей
npm install

# Сборка
npm run build

# Запуск тестов
npm run test
```

#### Шаг 7. Сборка wiki-компонентов (опционально)

```bash
# mdwiki-api (Kotlin/Spring Boot + PostgreSQL)
git clone https://gitverse.ru/ngroznykh/mdwiki-api.git
cd mdwiki-api
./gradlew bootRun   # слушает на :8081 (или настраивается)

# mdwiki-frontend (Vue/TypeScript)
git clone https://gitverse.ru/ngroznykh/mdwiki-frontend.git
cd mdwiki-frontend
npm install && npm run dev
```

#### Шаг 8. Проверка работоспособности

```bash
# Проверить бэкенд
curl -s http://localhost:8080/api/v1/models | jq

# Открыть фронтенд
open http://localhost:5173   # macOS
xdg-open http://localhost:5173   # Linux
```

#### Типичные проблемы

| Проблема | Решение |
|---|---|
| Бэкенд не запускается | Проверить, запущен ли PostgreSQL; проверить настройки подключения в application.yml |
| Ошибка миграции Liquibase | Проверить права пользователя БД; выполнить `./gradlew clean` и повторить |
| Фронтенд не видит API | Убедиться, что `VITE_API_URL` указывает на `http://localhost:8080`; проверить CORS-настройки |
| JDK версия | Установить JDK 25: `sdk install java 25-open` (через SDKMAN) |
| Порт занят | `lsof -i :8080` и `kill <PID>` |
| Cerbos не запускается | Проверить конфигурационный файл `.cerbos.yaml`; убедиться, что порты 3592/3593 свободны |

#### Production-деплой (Kubernetes)

```bash
# Сборка Docker-образов
docker build -t arepos-server:latest ./arepos-server
docker build -t warchi-frontend:latest ./warchi

# Деплой через Helm
helm install warchi ./helm/warchi \
  --set backend.image=arepos-server:latest \
  --set frontend.image=warchi-frontend:latest \
  --set postgresql.host=your-pg-host
```

---

