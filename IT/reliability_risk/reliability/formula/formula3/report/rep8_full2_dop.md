Проблема в том, что GitHub Markdown некорректно отображает многострочные формулы с `\\` и `+` на новых строках внутри одного `$$...$$`. Решение — записывать всю формулу в одну строку без переносов. Ниже — исправленный фрагмент раздела 10.5 и 11.1 (остальной текст без изменений).

Замени в своем файле разделы **10.5 Нормировка** и **11.1 Формула через $\lambda$ и $\mu$ (развернутая)** на следующий текст:

***

## 10.5 Нормировка

Запишем все вероятности через $P_2$:

$$
P_1 = \frac{2\lambda}{\mu} P_2
$$

$$
P_{2tf} = \frac{2\lambda_{tr}}{\mu_{tr}} P_2
$$

$$
P_{1tf} = \frac{\lambda_{tr}}{\mu_{tr}} \cdot \frac{2\lambda}{\mu} P_2
$$

$$
P_{FO} = \frac{2\lambda\eta}{\mu_{failover}} P_2
$$

$$
P_{FB} = \frac{2\lambda}{\mu_{failback}} P_2
$$

$$
P_{L} = \frac{2\lambda(1 - \eta)}{\theta} \left(1 + \frac{\lambda}{\mu}\right) P_2
$$

$$
P_0 = \frac{2\lambda(1 - \eta)}{\mu} \left(1 + \frac{\lambda}{\mu}\right) P_2
$$

Нормировочное условие:

$$
P_2 + P_1 + P_0 + P_{2tf} + P_{1tf} + P_{L} + P_{FO} + P_{FB} = 1
$$

Подставляем все выражения через $P_2$ и выносим $P_2$:

$$
P_2 \cdot \left[ 1 + \frac{2\lambda}{\mu} + \frac{2\lambda(1 - \eta)}{\mu} \left(1 + \frac{\lambda}{\mu}\right) + \frac{2\lambda_{tr}}{\mu_{tr}} + \frac{2\lambda\lambda_{tr}}{\mu \mu_{tr}} + \frac{2\lambda(1 - \eta)}{\theta} \left(1 + \frac{\lambda}{\mu}\right) + \frac{2\lambda\eta}{\mu_{failover}} + \frac{2\lambda}{\mu_{failback}} \right] = 1
$$

Обозначим знаменатель:

$$
D = 1 + \frac{2\lambda}{\mu} + \frac{2\lambda(1 - \eta)}{\mu} \left(1 + \frac{\lambda}{\mu}\right) + \frac{2\lambda_{tr}}{\mu_{tr}} + \frac{2\lambda\lambda_{tr}}{\mu \mu_{tr}} + \frac{2\lambda(1 - \eta)}{\theta} \left(1 + \frac{\lambda}{\mu}\right) + \frac{2\lambda\eta}{\mu_{failover}} + \frac{2\lambda}{\mu_{failback}}
$$

Тогда:

$$
P_2 = \frac{1}{D}
$$

Остальные вероятности выражаются через $P_2$ по формулам выше.

***

## 11.1 Формула через $\lambda$ и $\mu$ (развернутая)

**Unicode:**

D = 1 + 2λ/μ + 2λ(1 − η)/μ · (1 + λ/μ) + 2λ_tr/μ_tr + 2λλ_tr/(μ μ_tr) + 2λ(1 − η)/θ · (1 + λ/μ) + 2λη/μ_failover + 2λ/μ_failback

Кг,ст = (1 + 2λ/μ) / D

**LaTeX:**

$$
D = 1 + \frac{2\lambda}{\mu} + \frac{2\lambda(1 - \eta)}{\mu} \left(1 + \frac{\lambda}{\mu}\right) + \frac{2\lambda_{tr}}{\mu_{tr}} + \frac{2\lambda\lambda_{tr}}{\mu \mu_{tr}} + \frac{2\lambda(1 - \eta)}{\theta} \left(1 + \frac{\lambda}{\mu}\right) + \frac{2\lambda\eta}{\mu_{failover}} + \frac{2\lambda}{\mu_{failback}}
$$

$$
K_{\mathrm{г,ст}} = \frac{1 + \frac{2\lambda}{\mu}}{D}
$$

***

В разделе **Итого** также замени формулу для $D$ на однострочную:

**LaTeX:**

$$
D = 1 + \frac{2\lambda}{\mu} + \frac{2\lambda(1 - \eta)}{\mu} \left(1 + \frac{\lambda}{\mu}\right) + \frac{2\lambda_{tr}}{\mu_{tr}} + \frac{2\lambda\lambda_{tr}}{\mu \mu_{tr}} + \frac{2\lambda(1 - \eta)}{\theta} \left(1 + \frac{\lambda}{\mu}\right) + \frac{2\lambda\eta}{\mu_{failover}} + \frac{2\lambda}{\mu_{failback}}
$$

Такая запись без переносов строк внутри `$$...$$` должна корректно отображаться в GitHub Markdown.
