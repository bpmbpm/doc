# Схема взаимодействия ИТ-систем банка: операции с вкладами ФЛ

## Используемые системы

| Аббревиатура | Полное название | Роль |
|---|---|---|
| **АБС main** | Автоматизированная банковская система (главная книга) | Ведение счетов вклада 423, бухгалтерский учёт, договоры вклада |
| **АБС card** | Карточный бэк-офис | Ведение карточных счетов 40817, авторизационные лимиты |
| **Процессинг** | Lekton Classic (https://lekton.io/classic/) | Авторизация карточных операций, маршрутизация транзакций ATM/POS |
| **Anyway** | Anyway (https://finstream.ru/reshenija-dlja-bankov/anyway.html) | Front-end процессинг ATM: управление сценариями, интерфейс банкоматов |
| **ДБО ФЛ** | Интернет/мобильный банк (BSS, https://bssys.com/) | Клиентский канал для дистанционного обслуживания физлиц |
| **РМ НСПК** | Рабочее место НСПК | Обмен клиринговыми реестрами с НСПК (MasterCard/Visa/МИР) |
| **HSM/Auth** | Сервер авторизации / HSM | Криптографическая защита PIN, генерация сессионных ключей |
| **Notify** | Сервис уведомлений (SMS/Push) | Информирование клиента о транзакциях |
| **AML/Scoring** | Система ПОД/ФТ и скоринга | Проверка клиента при открытии вклада |

---

## Процесс 1. Открытие вклада через ДБО ФЛ

### Схема взаимодействия

```mermaid
sequenceDiagram
    actor Клиент
    participant ДБО as ДБО ФЛ (BSS)
    participant АБС_М as АБС main
    participant АМЛ as AML/Scoring
    participant Notify as Сервис уведомлений

    Клиент->>ДБО: Выбор продукта «Открыть вклад»,\nввод суммы и срока
    ДБО->>АБС_М: Запрос условий (тарифы, ставки,\nдоступные продукты)
    АБС_М-->>ДБО: Список продуктов: наименование,\nставка, мин/макс сумма, срок, условия пролонгации
    ДБО->>АМЛ: Проверка клиента (ФИО, ИНН/паспорт,\nсумма, признак ПОД/ФТ)
    АМЛ-->>ДБО: Результат проверки: ОК / блокировка / запрос документов
    ДБО->>АБС_М: Команда открыть вклад:\n clientId, productCode, amount, currency,\n termDays, autoRenew, interestAccount (40817 или 423)
    АБС_М->>АБС_М: Создание договора вклада,\nоткрытие счёта 423хх,\nпроводка дебет источника / кредит 423хх
    АБС_М-->>ДБО: depositId, accountNo (423хх),\nrate, maturityDate, status=OPEN
    ДБО->>Notify: Событие: вклад открыт,\ndepositId, сумма, ставка, дата окончания
    Notify-->>Клиент: SMS/Push: «Вклад открыт. Счёт 423хх,\nсумма X руб., ставка Y%, срок до DD.MM.YYYY»
    ДБО-->>Клиент: Экран подтверждения:\nномер счёта, ставка, срок, условия
```

### Вариант 1А — источник средств: текущий счёт / карта внутри банка
*(описан выше — списание с карточного счёта 40817 или текущего счёта клиента в АБС main)*

### Вариант 1Б — источник средств: перевод из стороннего банка через СБП
```mermaid
sequenceDiagram
    actor Клиент
    participant ДБО as ДБО ФЛ (BSS)
    participant АБС_М as АБС main
    participant СБП as Шлюз СБП

    Клиент->>ДБО: Выбор источника пополнения «Другой банк (СБП)»
    ДБО->>СБП: Запрос на входящий C2C/C2B перевод:\nphone, amount, depositAccount (423хх), paymentPurpose
    СБП-->>ДБО: paymentId, статус «В обработке»
    Note over СБП,АБС_М: Деньги от стороннего банка поступают\nна корсчёт, зачисляются на транзитный счёт
    СБП->>АБС_М: Коллбэк: зачисление средств,\nsbpTxId, amount, depositAccount
    АБС_М->>АБС_М: Проводка транзитный счёт → 423хх
    АБС_М-->>ДБО: Уведомление: баланс вклада пополнен
```

### Таблица информационных потоков — Процесс 1

| № | Направление | Данные | Цель |
|---|---|---|---|
| 1.1 | Клиент → ДБО | Параметры вклада: тип продукта, сумма, срок, счёт списания | Инициирование заявки |
| 1.2 | ДБО → АБС main | Запрос условий: clientId, productCode | Получение актуальных тарифов |
| 1.3 | АБС main → ДБО | Список продуктов: name, rate, minAmount, maxAmount, termDays, autoRenew | Отображение предложений клиенту |
| 1.4 | ДБО → AML | clientId, docSeries/docNo, INN, amount, operationType=DEPOSIT_OPEN | Проверка ПОД/ФТ |
| 1.5 | AML → ДБО | verdict: OK/BLOCK/REQUEST_DOCS, riskScore | Разрешение или блокировка операции |
| 1.6 | ДБО → АБС main | clientId, productCode, amount, currency, termDays, sourceAccount, interestAccount, autoRenew | Команда открытия вклада |
| 1.7 | АБС main → АБС main | Внутренние проводки: Дт sourceAccount — Кт 423хх | Бухгалтерское отражение |
| 1.8 | АБС main → ДБО | depositId, accountNo(423хх), rate, maturityDate, status=OPEN | Подтверждение открытия |
| 1.9 | ДБО → Notify | depositId, clientPhone, amount, rate, maturityDate | Триггер уведомления |
| 1.10 | Notify → Клиент | SMS/Push: реквизиты вклада | Информирование клиента |

---

## Процесс 2. Открытие вклада через банкомат

### Схема взаимодействия

```mermaid
sequenceDiagram
    actor Клиент
    participant ATM as Банкомат
    participant Anyway as Anyway (ATM front-end)
    participant Proc as Процессинг (Lekton)
    participant HSM as HSM/Auth
    participant АБС_К as АБС card
    participant АБС_М as АБС main
    participant Notify as Сервис уведомлений

    Клиент->>ATM: Вставка карты + ввод PIN
    ATM->>Anyway: PIN-блок (зашифрован), cardNo (track2), terminalId
    Anyway->>Proc: ISO 8583 Authorization Request:\npan, track2, pinBlock, terminalId, txnType=BALANCE
    Proc->>HSM: Запрос верификации PIN:\npinBlock, PVK, cardNo
    HSM-->>Proc: Результат проверки PIN: ОК / FAIL
    Proc->>АБС_К: Проверка статуса карты: active/blocked,\nдоступный баланс, cardHolderId
    АБС_К-->>Proc: cardStatus, availableBalance, accountNo(40817)
    Proc-->>Anyway: Авторизация ОК, доступные операции
    Anyway-->>ATM: Меню: список доступных операций
    Клиент->>ATM: Выбор «Открыть вклад», ввод суммы и срока
    ATM->>Anyway: txnType=DEPOSIT_OPEN, cardNo, amount, termCode
    Anyway->>Proc: Запрос на открытие вклада:\npan, amount, termCode, merchantId
    Proc->>АБС_К: Проверка и резервирование суммы\nна карточном счёте 40817
    АБС_К-->>Proc: reserveId, availableAfter
    Proc->>АБС_М: Команда открытия вклада:\nclientId (по cardHolderId), productCode, amount,\ncurrency, termDays, sourceAccount(40817)
    АБС_М->>АБС_М: Открытие счёта 423хх, договор вклада,\nпроводка Дт 40817 — Кт 423хх
    АБС_М-->>Proc: depositId, accountNo(423хх), rate, maturityDate
    Proc-->>Anyway: Операция выполнена: depositId, accountNo, rate
    Anyway-->>ATM: Экран успеха: счёт вклада, ставка, срок
    ATM-->>Клиент: Чек: depositId, accountNo(423хх),\nсумма, ставка, дата окончания
    Proc->>Notify: Событие: вклад открыт через ATM,\ndepositId, amount, maturityDate
    Notify-->>Клиент: SMS: «Открыт вклад, счёт 423хх, сумма X руб.»
```

### Таблица информационных потоков — Процесс 2

| № | Направление | Данные | Цель |
|---|---|---|---|
| 2.1 | ATM → Anyway | track2, pinBlock (зашифр. DES/3DES), terminalId, txnType=AUTH | Передача данных карты и PIN для авторизации |
| 2.2 | Anyway → Процессинг | ISO 8583: pan, track2, pinBlock, stan, terminalId, txnType | Маршрутизация авторизационного запроса |
| 2.3 | Процессинг → HSM | pinBlock, PVK (PIN Verification Key), cardNo | Верификация PIN без раскрытия значения |
| 2.4 | HSM → Процессинг | verifyResult: OK/FAIL | Результат криптопроверки |
| 2.5 | Процессинг → АБС card | cardNo, requestType=STATUS_BALANCE | Проверка карты и баланса |
| 2.6 | АБС card → Процессинг | cardStatus, availableBalance, accountNo(40817), cardHolderId | Данные для решения об авторизации |
| 2.7 | ATM → Anyway | txnType=DEPOSIT_OPEN, amount, termCode, cardNo | Параметры открытия вклада от клиента |
| 2.8 | Процессинг → АБС card | cardNo, amount, action=RESERVE | Блокировка средств под операцию |
| 2.9 | Процессинг → АБС main | clientId, productCode, amount, currency, termDays, sourceAccount(40817) | Создание договора вклада |
| 2.10 | АБС main → Процессинг | depositId, accountNo(423хх), rate, maturityDate, status=OPEN | Подтверждение открытия |
| 2.11 | Процессинг → Notify | clientPhone, depositId, amount, rate, maturityDate | Отправка уведомления |
| 2.12 | ATM → Клиент | Чековая лента: depositId, accountNo, сумма, ставка, дата окончания | Документальное подтверждение для клиента |

---

## Процесс 3. Пополнение вклада через банкомат картой своего банка

### Схема взаимодействия

```mermaid
sequenceDiagram
    actor Клиент
    participant ATM as Банкомат
    participant Anyway as Anyway (ATM front-end)
    participant Proc as Процессинг (Lekton)
    participant HSM as HSM/Auth
    participant АБС_К as АБС card
    participant АБС_М as АБС main
    participant Notify as Сервис уведомлений

    Клиент->>ATM: Карта + PIN
    ATM->>Anyway: track2, pinBlock, terminalId
    Anyway->>Proc: ISO 8583 Auth Request
    Proc->>HSM: Верификация PIN
    HSM-->>Proc: OK
    Proc->>АБС_К: Проверка карты и баланса
    АБС_К-->>Proc: cardStatus=ACTIVE, availableBalance, accountNo(40817)
    Proc-->>Anyway: Авторизация ОК
    Клиент->>ATM: «Пополнить вклад», ввод номера счёта\nвклада 423хх и суммы
    ATM->>Anyway: txnType=DEPOSIT_TOPUP, srcCard, depositAccountNo(423хх), amount
    Anyway->>Proc: Запрос пополнения:\npan, depositAccountNo, amount, terminalId
    Proc->>АБС_К: Проверка достаточности средств\nна карточном счёте 40817
    АБС_К-->>Proc: sufficiencyResult: OK, newAvailableBalance
    Proc->>АБС_М: Команда пополнения вклада:\ntxnType=DEPOSIT_TOPUP, depositAccountNo(423хх),\namount, srcAccount(40817), authCode
    АБС_М->>АБС_М: Проводка: Дт 40817 — Кт 423хх,\nувеличение тела вклада
    АБС_М-->>Proc: txnId, depositBalance (новый), status=SUCCESS
    Proc->>АБС_К: Списание суммы с карточного счёта\n(финальное урегулирование)
    Proc-->>Anyway: txnId, newDepositBalance, status=SUCCESS
    Anyway-->>ATM: Экран успеха
    ATM-->>Клиент: Чек: списано X руб. с карты, зачислено на 423хх,\nновый остаток вклада
    Proc->>Notify: Событие DEPOSIT_TOPUP, amount, depositBalance
    Notify-->>Клиент: SMS/Push об операции
```

### Таблица информационных потоков — Процесс 3

| № | Направление | Данные | Цель |
|---|---|---|---|
| 3.1 | ATM → Anyway | track2, pinBlock, terminalId | Авторизация держателя карты |
| 3.2 | Процессинг → HSM | pinBlock, PVK | Верификация PIN |
| 3.3 | Процессинг → АБС card | cardNo, requestType=BALANCE | Проверка баланса источника |
| 3.4 | ATM → Anyway | txnType=DEPOSIT_TOPUP, srcCardNo, depositAccountNo(423хх), amount | Параметры пополнения |
| 3.5 | Процессинг → АБС card | cardNo, amount, action=CHECK_SUFFICIENCY | Проверка достаточности средств |
| 3.6 | Процессинг → АБС main | txnType=DEPOSIT_TOPUP, depositAccountNo(423хх), amount, srcAccount(40817), authCode, txnRef | Команда зачисления на вклад |
| 3.7 | АБС main → Процессинг | txnId, newDepositBalance, valueDate, status=SUCCESS | Подтверждение зачисления |
| 3.8 | Процессинг → АБС card | authCode, amount, action=DEBIT_FINAL | Окончательное списание с карты |
| 3.9 | ATM → Клиент | Чек: сумма списания с карты, новый остаток вклада, txnId | Подтверждение операции |

---

## Процесс 4. Пополнение вклада через банкомат картой чужого банка

### Схема взаимодействия

```mermaid
sequenceDiagram
    actor Клиент
    participant ATM as Банкомат
    participant Anyway as Anyway (ATM front-end)
    participant Proc as Процессинг (Lekton)
    participant HSM as HSM/Auth
    participant НСПК as РМ НСПК / Платёжная система\n(МИР/Visa/MC)
    participant БанкЭ as Банк-эмитент (чужой)
    participant АБС_М as АБС main
    participant Notify as Сервис уведомлений

    Клиент->>ATM: Карта чужого банка + PIN
    ATM->>Anyway: track2, pinBlock, terminalId, BIN чужого банка
    Anyway->>Proc: ISO 8583 Auth Request:\npan, track2, pinBlock, terminalId, txnType=CASH_IN
    Note over Proc: BIN анализ: карта стороннего банка —\nзапрос уходит во внешнюю сеть
    Proc->>HSM: Генерация сеансового ключа для\nшифрования PIN в межбанковском запросе
    HSM-->>Proc: sessionKey (ZPK)
    Proc->>НСПК: ISO 8583 Authorization Request (межбанк):\npan, pinBlock (перешифрован ZPK), amount,\nterminalId, acqBankId, txnType=PURCHASE/CASH
    НСПК->>БанкЭ: Авторизационный запрос:\npan, amount, txnType
    БанкЭ-->>НСПК: Авторизационный ответ:\nauthCode или rejectCode (недостаток средств, блок и т.д.)
    НСПК-->>Proc: authCode, responseCode
    Proc-->>Anyway: Авторизация ОК / отказ
    Anyway-->>ATM: Разрешение операции или сообщение об ошибке

    alt Авторизация прошла успешно
        Клиент->>ATM: «Пополнить вклад», depositAccountNo(423хх), amount
        ATM->>Anyway: txnType=DEPOSIT_TOPUP_INTERBANK, depositAccountNo, amount, authCode
        Anyway->>Proc: Команда пополнения: depositAccountNo(423хх), amount, authCode, srcBankBIN
        Proc->>АБС_М: Зачисление на вклад:\ndepositAccountNo(423хх), amount, authCode,\nsrcType=INTERBANK_CARD, interimAccount
        АБС_М->>АБС_М: Проводка: Дт межбанковский транзитный счёт — Кт 423хх
        АБС_М-->>Proc: txnId, newDepositBalance, status=SUCCESS
        Proc-->>Anyway: SUCCESS
        Anyway-->>ATM: Экран успеха
        ATM-->>Клиент: Чек: списано с карты стороннего банка X руб.,\nзачислено на вклад 423хх, баланс вклада
        Proc->>НСПК: Financial Advice (финансовое подтверждение):\nauthCode, amount, stan
        Note over НСПК,БанкЭ: Клиринговый реестр формируется\nдля расчётов между банками
        Notify->>Клиент: SMS/Push: «Вклад пополнен на X руб.»
    end
```

### Вариант 4А — международная карта (Visa/MasterCard)
Аналогично, но вместо НСПК используется международная сеть. После санкций 2022 года для клиентов с картами Visa/MC иностранных банков — операция недоступна в большинстве российских банков. Актуально для карт МИР или UnionPay.

### Вариант 4Б — карта МИР стороннего банка
*(отображён на основной схеме — наиболее актуальный вариант)*

### Таблица информационных потоков — Процесс 4

| № | Направление | Данные | Цель |
|---|---|---|---|
| 4.1 | ATM → Anyway | track2, pinBlock, terminalId, BIN эмитента | Идентификация карты стороннего банка |
| 4.2 | Процессинг → HSM | pinBlock, ZPK | Перешифрование PIN для межбанковской передачи |
| 4.3 | Процессинг → НСПК | ISO 8583: pan, pinBlock(ZPK), amount, terminalId, acqBankId, txnType | Запрос авторизации в банке-эмитенте |
| 4.4 | НСПК → Банк-эмитент | pan, amount, txnType, acqBankId | Маршрутизация авторизации |
| 4.5 | Банк-эмитент → НСПК | authCode / rejectCode, availableBalance | Решение по авторизации |
| 4.6 | НСПК → Процессинг | authCode, responseCode | Результат межбанковской авторизации |
| 4.7 | Процессинг → АБС main | depositAccountNo(423хх), amount, authCode, srcType=INTERBANK_CARD, interimTransitAccount | Зачисление средств на вклад |
| 4.8 | АБС main → Процессинг | txnId, newDepositBalance, status=SUCCESS | Подтверждение зачисления |
| 4.9 | Процессинг → НСПК | Financial Advice: authCode, stan, amount | Финансовое подтверждение (клиринг) |
| 4.10 | НСПК → РМ НСПК (реестры) | Клиринговый реестр: список транзакций за день, суммы, банки | Межбанковские расчёты |
| 4.11 | ATM → Клиент | Чек: сумма, счёт вклада 423хх, баланс, txnId | Документальное подтверждение |

---

## Процесс 5. Закрытие вклада через ДБО с зачислением на карту

### Схема взаимодействия

```mermaid
sequenceDiagram
    actor Клиент
    participant ДБО as ДБО ФЛ (BSS)
    participant АБС_М as АБС main
    participant АБС_К as АБС card
    participant Proc as Процессинг (Lekton)
    participant Notify as Сервис уведомлений

    Клиент->>ДБО: «Закрыть вклад», выбор вклада,\nуказание карты для зачисления
    ДБО->>АБС_М: Запрос данных вклада:\ndepositId → depositBalance, accruedInterest,\nmaturityDate, penaltyConditions
    АБС_М-->>ДБО: depositBalance, accruedInterest,\nearlyClosurePenalty (если досрочно),\nnetAmount (к выплате), status
    ДБО-->>Клиент: Предварительный расчёт:\nосновной долг, начисленные проценты,\nштраф за досрочное закрытие, итого к выдаче
    Клиент->>ДБО: Подтверждение закрытия (ПЭП / SMS-OTP)
    ДБО->>АБС_М: Команда закрытия вклада:\ndepositId, targetAccount(40817), confirmCode
    АБС_М->>АБС_М: Расчёт итоговых процентов (в т.ч. доначисление\nза последний период), применение штрафа\nза досрочное закрытие (если применимо)
    АБС_М->>АБС_М: Проводки:\nДт 423хх (основной долг) — Кт 40817\nДт Счёт начисл. процентов — Кт 40817\nДт 40817 (штраф, если есть) — Кт Доходы банка\nЗакрытие счёта 423хх
    АБС_М->>АБС_К: Запрос на зачисление суммы на карточный счёт:\ntargetAccount(40817), netAmount, txnRef
    АБС_К-->>АБС_М: Подтверждение зачисления: txnId, newCardBalance
    АБС_М-->>ДБО: depositStatus=CLOSED, netAmount,\ntxnId, newCardBalance
    ДБО->>Notify: Событие: вклад закрыт, netAmount, cardAccount
    Notify-->>Клиент: SMS/Push: «Вклад закрыт. Зачислено X руб. на карту *1234»
    ДБО-->>Клиент: Экран: вклад закрыт, сумма зачисления,\nновый баланс карты
```

### Вариант 5А — закрытие в срок (maturityDate = сегодня)
Штраф за досрочное закрытие не применяется. Проценты начислены в полном объёме.

### Вариант 5Б — досрочное закрытие
Применяется пересчёт процентов по ставке «до востребования» или по условиям договора. Разница вычитается (штраф).

### Вариант 5В — закрытие с выводом через СБП на счёт в другом банке
```mermaid
sequenceDiagram
    participant АБС_М as АБС main
    participant ДБО as ДБО ФЛ (BSS)
    participant СБП as Шлюз СБП

    АБС_М-->>ДБО: netAmount подтверждён
    ДБО->>СБП: P2P-запрос: phone (получатель),\nextBankId, netAmount, purpose=«Закрытие вклада»
    СБП-->>ДБО: transferId, status=IN_PROGRESS
    СБП-->>ДБО: Коллбэк: status=SUCCESS, sbpTxId
    ДБО-->>АБС_М: Вклад закрыт, средства выведены через СБП
```

### Таблица информационных потоков — Процесс 5

| № | Направление | Данные | Цель |
|---|---|---|---|
| 5.1 | Клиент → ДБО | depositId, targetCardAccount(40817), confirmType | Инициирование закрытия |
| 5.2 | ДБО → АБС main | depositId, requestType=CLOSE_PREVIEW | Предварительный расчёт суммы к выплате |
| 5.3 | АБС main → ДБО | depositBalance, accruedInterest, earlyClosurePenalty, netAmount | Данные для согласования с клиентом |
| 5.4 | Клиент → ДБО | OTP-код подтверждения (SMS/Push) | Верификация намерения клиента |
| 5.5 | ДБО → АБС main | depositId, action=CLOSE, targetAccount(40817), confirmCode | Команда закрытия |
| 5.6 | АБС main → АБС main | Внутренние проводки: закрытие 423хх, начисление % | Бухгалтерское урегулирование |
| 5.7 | АБС main → АБС card | targetAccount(40817), netAmount, txnRef=depositClosure | Зачисление средств на карту |
| 5.8 | АБС card → АБС main | txnId, newCardBalance | Подтверждение зачисления |
| 5.9 | АБС main → ДБО | depositStatus=CLOSED, netAmount, txnId, newCardBalance | Итоговый статус операции |
| 5.10 | ДБО → Notify | clientPhone, netAmount, cardLastDigits, closureDate | Триггер уведомления |
| 5.11 | Notify → Клиент | SMS/Push: сумма зачисления, карта, дата | Информирование |

---

## Процесс 6. Частичное снятие со вклада через банкомат с зачислением на карту

### Схема взаимодействия

```mermaid
sequenceDiagram
    actor Клиент
    participant ATM as Банкомат
    participant Anyway as Anyway (ATM front-end)
    participant Proc as Процессинг (Lekton)
    participant HSM as HSM/Auth
    participant АБС_К as АБС card
    participant АБС_М as АБС main
    participant Notify as Сервис уведомлений

    Клиент->>ATM: Карта + PIN
    ATM->>Anyway: track2, pinBlock, terminalId
    Anyway->>Proc: ISO 8583 Auth Request
    Proc->>HSM: Верификация PIN
    HSM-->>Proc: OK
    Proc->>АБС_К: Проверка статуса карты
    АБС_К-->>Proc: cardStatus=ACTIVE, accountNo(40817)
    Proc-->>Anyway: Авторизация ОК
    Anyway-->>ATM: Главное меню
    Клиент->>ATM: «Операции с вкладом» → «Частичное снятие»,\nввод номера вклада 423хх и суммы снятия
    ATM->>Anyway: txnType=DEPOSIT_PARTIAL_WITHDRAW,\ndepositAccountNo(423хх), withdrawAmount, targetCard(40817)
    Anyway->>Proc: Запрос частичного снятия:\ndepositAccountNo, withdrawAmount, targetCardAccount
    Proc->>АБС_М: Проверка условий частичного снятия:\ndepositAccountNo(423хх), withdrawAmount
    АБС_М-->>Proc: isPartialAllowed: true/false,\nminRemainBalance (неснижаемый остаток),\ncurrentBalance, maxWithdrawAmount
    alt Снятие разрешено условиями вклада
        Proc->>АБС_М: Команда частичного снятия:\ndepositAccountNo(423хх), withdrawAmount,\ntargetAccount(40817), authCode
        АБС_М->>АБС_М: Проверка: остаток после снятия ≥ minRemainBalance\nПересчёт процентов (если условия меняются)\nПроводка: Дт 423хх — Кт 40817
        АБС_М->>АБС_К: Зачисление на карточный счёт:\ntargetAccount(40817), withdrawAmount, txnRef
        АБС_К-->>АБС_М: Подтверждение: txnId, newCardBalance
        АБС_М-->>Proc: txnId, newDepositBalance, newCardBalance, status=SUCCESS
        Proc-->>Anyway: SUCCESS
        Anyway-->>ATM: Экран успеха
        ATM-->>Клиент: Чек: снято X руб. с вклада 423хх,\nзачислено на карту *1234,\nостаток вклада после операции
        Proc->>Notify: DEPOSIT_PARTIAL_WITHDRAW: withdrawAmount,\nnewDepositBalance, cardLastDigits
        Notify-->>Клиент: SMS/Push: «Снято X руб. со вклада. Новый остаток Y руб.»
    else Снятие запрещено (неснижаемый остаток, нет частичного снятия)
        Proc-->>Anyway: ERROR: WITHDRAWAL_NOT_ALLOWED, reason
        Anyway-->>ATM: Экран отказа с причиной
        ATM-->>Клиент: «Операция недоступна. [Причина]»
    end
```

### Вариант 6А — вклад с возможностью частичного снятия
*(описан выше — стандартный вклад типа «Накопительный» с неснижаемым остатком)*

### Вариант 6Б — выдача наличными через банкомат (если вклад позволяет наличные выплаты)
```mermaid
sequenceDiagram
    participant ATM as Банкомат
    participant Anyway as Anyway (ATM front-end)
    participant Proc as Процессинг (Lekton)
    participant АБС_М as АБС main

    ATM->>Anyway: txnType=DEPOSIT_CASH_WITHDRAW,\ndepositAccountNo(423хх), amount
    Anyway->>Proc: Запрос наличной выдачи с вклада
    Proc->>АБС_М: Списание с 423хх, проводка на счёт кассы ATM
    АБС_М-->>Proc: txnId, newDepositBalance
    Proc-->>Anyway: Команда диспенсеру выдать купюры
    Anyway-->>ATM: Выдача наличных
    Note over ATM: Диспенсер выдаёт купюры клиенту
```

### Таблица информационных потоков — Процесс 6

| № | Направление | Данные | Цель |
|---|---|---|---|
| 6.1 | ATM → Anyway | track2, pinBlock, terminalId | Авторизация держателя карты |
| 6.2 | Процессинг → HSM | pinBlock, PVK | Верификация PIN |
| 6.3 | Процессинг → АБС card | cardNo, requestType=STATUS | Проверка статуса карты |
| 6.4 | ATM → Anyway | txnType=DEPOSIT_PARTIAL_WITHDRAW, depositAccountNo(423хх), withdrawAmount, targetCardAccount(40817) | Параметры частичного снятия |
| 6.5 | Процессинг → АБС main | depositAccountNo(423хх), requestType=CHECK_PARTIAL_WITHDRAW, withdrawAmount | Проверка допустимости операции |
| 6.6 | АБС main → Процессинг | isPartialAllowed, minRemainBalance, currentBalance, maxWithdrawAmount | Условия частичного снятия по договору |
| 6.7 | Процессинг → АБС main | txnType=DEPOSIT_PARTIAL_WITHDRAW, depositAccountNo(423хх), withdrawAmount, targetAccount(40817), authCode | Команда списания с вклада |
| 6.8 | АБС main → АБС card | targetAccount(40817), withdrawAmount, txnRef | Зачисление на карту |
| 6.9 | АБС card → АБС main | txnId, newCardBalance | Подтверждение зачисления |
| 6.10 | АБС main → Процессинг | txnId, newDepositBalance, newCardBalance, status=SUCCESS | Итоговый статус операции |
| 6.11 | ATM → Клиент | Чек: снятая сумма, остаток вклада, новый баланс карты | Документальное подтверждение |
| 6.12 | Процессинг → Notify | withdrawAmount, newDepositBalance, cardLastDigits | Триггер уведомления |

---

## Сводная таблица систем и их роли в процессах

| Система | П1 (откр. ДБО) | П2 (откр. ATM) | П3 (попол. ATM своя карта) | П4 (попол. ATM чужая карта) | П5 (закр. ДБО) | П6 (снят. ATM) |
|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **ДБО ФЛ (BSS)** | ✅ | — | — | — | ✅ | — |
| **АБС main** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **АБС card** | ✅ | ✅ | ✅ | — | ✅ | ✅ |
| **Процессинг (Lekton)** | — | ✅ | ✅ | ✅ | — | ✅ |
| **Anyway** | — | ✅ | ✅ | ✅ | — | ✅ |
| **HSM/Auth** | — | ✅ | ✅ | ✅ | — | ✅ |
| **РМ НСПК** | — | — | — | ✅ | — | — |
| **Сервис уведомлений** | ✅ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **AML/Scoring** | ✅ | — | — | — | — | — |
| **Шлюз СБП** | опц. | — | — | — | опц. | — |

> **Примечание.** В процессах с банкоматом система **Anyway** выступает как front-end процессор (управляет сценариями ATM и диспенсером), а **Процессинг (Lekton)** — как авторизационный движок, выполняющий маршрутизацию ISO 8583 запросов и взаимодействие с банками-корреспондентами. Оба компонента вместе образуют ATM-канал обслуживания.
