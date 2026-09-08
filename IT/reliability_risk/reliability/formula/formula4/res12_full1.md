Выполнение промпта для модели 12/3

### 1. Формулировка модели

Рассматривается восстанавливаемый отказоустойчивый трёхузловой кластер с нагруженным резервированием, одной ремонтной бригадой, временными сбоями, скрытыми отказами и операциями failover/failback.

Модель имеет 12 состояний:
- Работоспособные: $S_3$, $S_2$, $S_1$;
- Неработоспособные: $S_{0\_fail}$, $S_{3\_tf}$, $S_{2\_tf}$, $S_{1\_tf}$, $S_{latent}$, $S_{3\_failover}$, $S_{2\_failover}$, $S_{2\_failback}$, $S_{1\_failback}$.

***

### 2. Граф состояний

```mermaid
flowchart LR
    S3((S3))
    S2((S2))
    S1((S1))
    S0_fail([S0_fail])
    
    S3_tf([S3_tf])
    S2_tf([S2_tf])
    S1_tf([S1_tf])
    
    S_latent([S_latent])
    
    S3_failover([S3_failover])
    S2_failover([S2_failover])
    
    S2_failback([S2_failback])
    S1_failback([S1_failback])

    S3 -->|"3λ_tr"| S3_tf
    S3_tf -->|"μ_tr"| S3

    S3 -->|"3λη"| S3_failover
    S3 -->|"3λ(1 − η)"| S_latent
    S3_failover -->|"μ_failover"| S2
    S_latent -->|"θ"| S0_fail

    S2 -->|"2λ_tr"| S2_tf
    S2_tf -->|"μ_tr"| S2

    S2 -->|"2λη"| S2_failover
    S2 -->|"2λ(1 − η)"| S_latent
    S2 -->|"μ"| S2_failback
    S2_failover -->|"μ_failover"| S1
    S2_failback -->|"μ_failback"| S3

    S1 -->|"λ_tr"| S1_tf
    S1_tf -->|"μ_tr"| S1

    S1 -->|"λ(1 − η)"| S_latent
    S1 -->|"λη"| S0_fail
    S1 -->|"μ"| S1_failback
    S1_failback -->|"μ_failback"| S2

    S0_fail -->|"μ"| S1
```

***

### 3. Группы состояний

| Группа | Состояния |
|---|---|
| Работоспособные | $S_3$, $S_2$, $S_1$ |
| Неработоспособные | $S_{0\_fail}$, $S_{3\_tf}$, $S_{2\_tf}$, $S_{1\_tf}$, $S_{latent}$, $S_{3\_failover}$, $S_{2\_failover}$, $S_{2\_failback}$, $S_{1\_failback}$ |

***

### 4. Стационарный коэффициент готовности

**Unicode:**

Кг,ст = P3 + P2 + P1

**LaTeX:**

$$
K_{\mathrm{г,ст}} = P_3 + P_2 + P_1
$$

После решения системы уравнений баланса получаем:

$$
P_2 = \frac{3\lambda}{\mu + 2\lambda\eta} P_3
$$

$$
P_1 = \frac{3\lambda^2}{(\mu + 2\lambda\eta)(\mu + \lambda\eta)} P_3
$$

$$
K_{\mathrm{г,ст}} = P_3 \left(1 + \frac{3\lambda}{\mu + 2\lambda\eta} + \frac{3\lambda^2}{(\mu + 2\lambda\eta)(\mu + \lambda\eta)}\right)
$$

Знаменатель $D$:

$$
D = 1 + \frac{3\lambda}{\mu + 2\lambda\eta} + \frac{3\lambda^2}{(\mu + 2\lambda\eta)(\mu + \lambda\eta)} + \frac{3\lambda_{tr}}{\mu_{tr}} + \frac{6\lambda\lambda_{tr}}{\mu_{tr}(\mu + 2\lambda\eta)} + \frac{3\lambda^2\lambda_{tr}}{\mu_{tr}(\mu + 2\lambda\eta)(\mu + \lambda\eta)} + \frac{3\lambda\eta}{\mu_{failover}} + \frac{6\lambda^2\eta}{\mu_{failover}(\mu + 2\lambda\eta)} + \frac{3\lambda}{\mu_{failback}} \cdot \frac{3\lambda}{\mu + 2\lambda\eta} + \frac{3\lambda^2}{\mu_{failback}(\mu + 2\lambda\eta)(\mu + \lambda\eta)} \cdot \mu + \frac{3\lambda(1-\eta)}{\theta} \left(1 + \frac{3\lambda}{\mu + 2\lambda\eta} + \frac{3\lambda^2}{(\mu + 2\lambda\eta)(\mu + \lambda\eta)}\right) + \frac{3\lambda(1-\eta)}{\mu} \left(1 + \frac{3\lambda}{\mu + 2\lambda\eta} + \frac{3\lambda^2}{(\mu + 2\lambda\eta)(\mu + \lambda\eta)}\right)
$$

Тогда:

$$
P_3 = \frac{1}{D}
$$

$$
K_{\mathrm{г,ст}} = \frac{1 + \frac{3\lambda}{\mu + 2\lambda\eta} + \frac{3\lambda^2}{(\mu + 2\lambda\eta)(\mu + \lambda\eta)}}{D}
$$

***

### 5. Численный расчет

**Исходные данные:**

| Параметр | Значение | Единицы |
|---|---|---|
| $MTBF$ | 30000 | ч |
| $MTTR$ | 24 | ч |
| $T_{failover}$ | 30 | с |
| $T_{failback}$ | 90 | с |
| $T_{tr}$ | 180 | с |
| $\eta$ | 0.99 | — |
| $T_{detect}$ | 8 | ч |
| $MTBF_{tr}$ | 8760 | ч |

**Интенсивности:**

**Unicode:**

λ = 3.3333333333e-05 ч⁻¹

μ = 0.04166666667 ч⁻¹

λ_tr = 1.1415525114e-04 ч⁻¹

μ_tr = 20 ч⁻¹

μ_failover = 120 ч⁻¹

μ_failback = 40 ч⁻¹

θ = 0.125 ч⁻¹

η = 0.99

**LaTeX:**

$$
\lambda = 3.3333333333 \times 10^{-5}\ \text{ч}^{-1}
$$

$$
\mu = 0.04166666667\ \text{ч}^{-1}
$$

$$
\lambda_{tr} = 1.1415525114 \times 10^{-4}\ \text{ч}^{-1}
$$

$$
\mu_{tr} = 20\ \text{ч}^{-1}
$$

$$
\mu_{failover} = 120\ \text{ч}^{-1}
$$

$$
\mu_{failback} = 40\ \text{ч}^{-1}
$$

$$
\theta = 0.125\ \text{ч}^{-1}
$$

$$
\eta = 0.99
$$

**Промежуточные отношения:**

$$
\frac{\lambda}{\mu + 2\lambda\eta} = 7.99949333 \times 10^{-4}
$$

$$
\frac{\lambda}{\mu + \lambda\eta} = 7.99974667 \times 10^{-4}
$$

$$
\frac{3\lambda}{\mu + 2\lambda\eta} = 0.0023998480
$$

$$
\frac{3\lambda^2}{(\mu + 2\lambda\eta)(\mu + \lambda\eta)} = 1.91987840 \times 10^{-6}
$$

**Слагаемые D:**

| Слагаемое | Значение |
|---|---:|
| 1 | 1.0000000000 |
| $3\lambda/(\mu + 2\lambda\eta)$ | 2.39984800e-03 |
| $3\lambda^2/[(\mu + 2\lambda\eta)(\mu + \lambda\eta)]$ | 1.91987840e-06 |
| $3\lambda_{tr}/\mu_{tr}$ | 1.71232877e-05 |
| $6\lambda\lambda_{tr}/[\mu_{tr}(\mu + 2\lambda\eta)]$ | 2.73972603e-08 |
| $3\lambda^2\lambda_{tr}/[\mu_{tr}(\mu + 2\lambda\eta)(\mu + \lambda\eta)]$ | 2.19178082e-11 |
| $3\lambda\eta/\mu_{failover}$ | 8.24999999e-07 |
| $6\lambda^2\eta/[\mu_{failover}(\mu + 2\lambda\eta)]$ | 1.32323232e-09 |
| $(3\lambda/\mu_{failback}) \cdot (3\lambda/(\mu + 2\lambda\eta))$ | 1.79988600e-07 |
| $(3\lambda^2/\mu_{failback}(\mu + 2\lambda\eta)(\mu + \lambda\eta)) \cdot \mu$ | 1.43990880e-10 |
| $3\lambda(1-\eta)/\theta \cdot (1 + 3\lambda/(\mu + 2\lambda\eta) + 3\lambda^2/[(\mu + 2\lambda\eta)(\mu + \lambda\eta)])$ | 8.00799999e-06 |
| $3\lambda(1-\eta)/\mu \cdot (1 + 3\lambda/(\mu + 2\lambda\eta) + 3\lambda^2/[(\mu + 2\lambda\eta)(\mu + \lambda\eta)])$ | 2.40239999e-05 |

**Сумма D:**

$$
D = 1.0024768096
$$

**Стационарные вероятности:**

$$
P_3 = \frac{1}{D} = 0.9975257180
$$

$$
P_2 = \frac{3\lambda}{\mu + 2\lambda\eta} \cdot P_3 = 0.0023940617
$$

$$
P_1 = \frac{3\lambda^2}{(\mu + 2\lambda\eta)(\mu + \lambda\eta)} \cdot P_3 = 2.77711160 \times 10^{-5}
$$

**Коэффициент готовности:**

**Unicode:**

Кг,ст = P3 + P2 + P1 = 0.9975257180 + 0.0023940617 + 0.0000277711 = 0.9999475504

**LaTeX:**

$$
K_{\mathrm{г,ст}} = 0.9999475504
$$

**Неготовность:**

$$
U_{\mathrm{ст}} = 1 - K_{\mathrm{г,ст}} = 5.24496 \times 10^{-5}
$$

**Ожидаемый простой за год:**

$$
T_{\mathrm{простой}} = 8760 \cdot 5.24496 \times 10^{-5} = 0.4595\ \text{ч} \approx 27.6\ \text{мин}
$$

***

### 6. Ограничения модели

- Экспоненциальные распределения времён до событий.
- Независимость отказов узлов (нет общих причин).
- Скрытый отказ агрегирован в одно состояние $S_{latent}$.
- Failover/failback — отдельные транзитные неработоспособные состояния.
- Одна ремонтная бригада.
- Стационарный режим, без переходных процессов.
- Модель на уровне узлов, без деталей ПО, данных, сети.

***

## Итого

### Граф состояний

```mermaid
flowchart LR
    S3((S3))
    S2((S2))
    S1((S1))
    S0_fail([S0_fail])
    
    S3_tf([S3_tf])
    S2_tf([S2_tf])
    S1_tf([S1_tf])
    
    S_latent([S_latent])
    
    S3_failover([S3_failover])
    S2_failover([S2_failover])
    
    S2_failback([S2_failback])
    S1_failback([S1_failback])

    S3 -->|"3λ_tr"| S3_tf
    S3_tf -->|"μ_tr"| S3

    S3 -->|"3λη"| S3_failover
    S3 -->|"3λ(1 − η)"| S_latent
    S3_failover -->|"μ_failover"| S2
    S_latent -->|"θ"| S0_fail

    S2 -->|"2λ_tr"| S2_tf
    S2_tf -->|"μ_tr"| S2

    S2 -->|"2λη"| S2_failover
    S2 -->|"2λ(1 − η)"| S_latent
    S2 -->|"μ"| S2_failback
    S2_failover -->|"μ_failover"| S1
    S2_failback -->|"μ_failback"| S3

    S1 -->|"λ_tr"| S1_tf
    S1_tf -->|"μ_tr"| S1

    S1 -->|"λ(1 − η)"| S_latent
    S1 -->|"λη"| S0_fail
    S1 -->|"μ"| S1_failback
    S1_failback -->|"μ_failback"| S2

    S0_fail -->|"μ"| S1
```

### Легенда состояний

| Состояние | Смысл |
|---|---|
| $S_3$ | Три узла работоспособны |
| $S_2$ | Два узла работоспособны |
| $S_1$ | Один узел работоспособен |
| $S_{0\_fail}$ | Все три узла отказали |
| $S_{3\_tf}$, $S_{2\_tf}$, $S_{1\_tf}$ | Временные сбои |
| $S_{latent}$ | Скрытый отказ |
| $S_{3\_failover}$, $S_{2\_failover}$ | Failover |
| $S_{2\_failback}$, $S_{1\_failback}$ | Failback |

### Формулы

**Unicode:**

Кг,ст = P3 + P2 + P1

P2 = (3λ/(μ + 2λη)) · P3

P1 = (3λ²/[(μ + 2λη)(μ + λη)]) · P3

Кг,ст = (1 + 3λ/(μ + 2λη) + 3λ²/[(μ + 2λη)(μ + λη)]) / D

**LaTeX:**

$$
K_{\mathrm{г,ст}} = P_3 + P_2 + P_1
$$

$$
P_2 = \frac{3\lambda}{\mu + 2\lambda\eta} P_3
$$

$$
P_1 = \frac{3\lambda^2}{(\mu + 2\lambda\eta)(\mu + \lambda\eta)} P_3
$$

$$
K_{\mathrm{г,ст}} = \frac{1 + \frac{3\lambda}{\mu + 2\lambda\eta} + \frac{3\lambda^2}{(\mu + 2\lambda\eta)(\mu + \lambda\eta)}}{D}
$$

### Численный результат

| Показатель | Значение |
|---|---:|
| $K_{\mathrm{г,ст}}$ | 0.9999475504 |
| $U_{\mathrm{ст}}$ | 5.24496 × 10⁻⁵ |
| Ожидаемый простой за 8760 ч | около 27.6 мин |

### Ограничения модели

Модель не учитывает общие причины отказов, зависимости инфраструктуры и ПО, неэкспоненциальные распределения, задержки диагностики, переходную готовность и детали реализации кластеризации на уровне ПО.

***

