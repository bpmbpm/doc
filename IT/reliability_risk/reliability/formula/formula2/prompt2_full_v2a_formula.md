
## Исправленный фрагмент обозначений

Состояния:

- S₀ — оба узла работоспособны;
- S<sub>failover</sub> — выполняется failover;
- S₁ — один узел работоспособен;
- S<sub>2fail</sub> — оба узла отказали;
- S<sub>failback</sub> — выполняется failback.

Вероятности:

- P₀ — вероятность состояния S₀;
- P<sub>failover</sub> — вероятность состояния S<sub>failover</sub>;
- P₁ — вероятность состояния S₁;
- P₂ — вероятность состояния S<sub>2fail</sub>;
- P<sub>failback</sub> — вероятность состояния S<sub>failback</sub>.

Интенсивности:

- μ<sub>failover</sub> — интенсивность завершения failover;
- μ — интенсивность восстановления;
- μ<sub>failback</sub> — интенсивность завершения failback.

## Линейный Unicode-вариант формулы

Кг,ст =
    μ² μ<sub>failover</sub>(μ<sub>failback</sub> + 2λ)
    /
    D

где:

D =
    2λ² μ<sub>failback</sub> μ<sub>failover</sub>
    + 2λ μ² μ<sub>failback</sub>
    + 2λ μ² μ<sub>failover</sub>
    + 2λ μ μ<sub>failback</sub> μ<sub>failover</sub>
    + μ² μ<sub>failback</sub> μ<sub>failover</sub>

## Вариант формулы в LaTeX-обертке

```markdown
$$
K_{\mathrm{г,ст}} =
\frac{
\mu^2 \mu_{\mathrm{failover}}
\left(\mu_{\mathrm{failback}} + 2\lambda\right)
}{
2\lambda^2 \mu_{\mathrm{failback}}\mu_{\mathrm{failover}}
+ 2\lambda\mu^2\mu_{\mathrm{failback}}
+ 2\lambda\mu^2\mu_{\mathrm{failover}}
+ 2\lambda\mu\mu_{\mathrm{failback}}\mu_{\mathrm{failover}}
+ \mu^2\mu_{\mathrm{failback}}\mu_{\mathrm{failover}}
}
$$
```

В отображаемом виде:

$$
K_{\mathrm{г,ст}} =
\frac{
\mu^2 \mu_{\mathrm{failover}}
\left(\mu_{\mathrm{failback}} + 2\lambda\right)
}{
2\lambda^2 \mu_{\mathrm{failback}}\mu_{\mathrm{failover}}
+ 2\lambda\mu^2\mu_{\mathrm{failback}}
+ 2\lambda\mu^2\mu_{\mathrm{failover}}
+ 2\lambda\mu\mu_{\mathrm{failback}}\mu_{\mathrm{failover}}
+ \mu^2\mu_{\mathrm{failback}}\mu_{\mathrm{failover}}
}
$$

## Исправленный численный результат

При:

- MTBF = 30000 часов;
- MTTR = 24 часа;
- T<sub>failover</sub> = 30 секунд;
- T<sub>failback</sub> = 90 секунд;

получаем:

λ = 1 / 108000000 1/с

μ = 1 / 86400 1/с

μ<sub>failover</sub> = 1 / 30 1/с

μ<sub>failback</sub> = 1 / 90 1/с

Стационарный коэффициент готовности:

Кг,ст ≈ 0,998400729

В процентах:

Кг,ст ≈ 99,8400729%

