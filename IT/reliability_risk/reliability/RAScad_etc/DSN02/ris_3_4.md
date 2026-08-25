## 1 ris

Рисунок 3 показывает базовую модель **Type 0** для нерезервированного компонента $\(N=K\)$. Рисунок 4 показывает более богатую модель **Type 3** для резервированной пары \(N=2,\ K=1\): recovery вызывает interruption, но штатный repair/reintegration после перехода в деградированный режим не должен останавливать сервис.

Сразу важное разграничение: **Figure 4 — это не Type 4, а Type 3**. В нём `AR1` имеет reward $\(0\)$, потому что recovery nontransparent, но `PF1` — состояние доступного деградированного режима с reward \(1\); сервис продолжает работать во время ожидания и штатного ремонта первого отказавшего компонента.

## Как читать рисунки

В RAScad состояние Markov-цепи имеет reward:

$$
\[
r_s =
\begin{cases}
1, & \text{пользовательская функция доступна};\\
0, & \text{пользовательская функция недоступна}.
\end{cases}
\]
$$

Для Type 0:

$$
\[
N=K,
\]
$$

то есть потеря компонента означает потерю требуемой функции.

Для Figure 4 / Type 3:

$$
\[
N=2,\qquad K=1.
\]
$$

Следовательно:

- пока работает хотя бы один из двух компонентов, функция может быть доступна;
- после первого permanent fault система переходит в `PF1` — работает в degraded mode;
- после второго permanent fault возникает `PF2` — требование \(K=1\) больше не выполняется, сервис недоступен;
- recovery nontransparent, поэтому состояния automatic recovery вносят вклад в downtime;
- repair transparent, поэтому сам штатный ремонт первого отказавшего компонента не обязан создавать downtime.

## Рисунок 3: Type 0

### Смысл Figure 3

Figure 3 в статье — это Markov Model Type 0 для блока без резерва. В отличие от Type 3 здесь нет:

- `PF1` как доступного degraded state;
- `Latent1` как состояния скрытой потери резерва;
- второго отказа как отдельного события потери последнего работающего экземпляра;
- логики $\(N\)$-out-of-$\(K\)$.

Отказ единственного обязательного компонента переводит систему в ветвь восстановления или ремонта с reward $\(0\)$.

Ниже — структурная перерисовка Figure 3 в Mermaid. Она передаёт логику модели: normal operation, permanent fault, transient fault, recovery и service error. Названия состояний даны в более читаемом виде, чем в оригинальной диаграмме.

```mermaid
stateDiagram-v2
    direction LR

    [*] --> Ok

    state "Ok: компонент исправен; r = 1" as Ok
    state "TF: transient fault; r = 0" as TF
    state "AR: automatic recovery / restart; r = 0" as AR
    state "PF: permanent fault; ремонт требуется; r = 0" as PF
    state "SE: service error; неверная диагностика или repair; r = 0" as SE

    Ok --> TF: transient failure rate
    TF --> AR: запуск recovery
    AR --> Ok: recovery успешен
    AR --> PF: recovery не устранил отказ

    Ok --> PF: permanent fault; MTBF
    PF --> Ok: correct diagnosis, corrective action, verification
    PF --> SE: incorrect diagnosis or corrective action
    SE --> Ok: повторный repair; MTTRFID
```

### Интерпретация переходов Type 0

#### Нормальная работа

```text
Ok, r = 1
```

Компонент функционирует. Для блока без резерва это единственное штатное доступное состояние.

#### Permanent fault

```text
Ok → PF
```

Возникает hard failure, требующий физического ремонта либо замены FRU. Так как $\(N=K\)$, исправного резервного экземпляра нет. Следовательно, пока компонент не восстановлен, пользовательская функция недоступна.

#### Transient fault

```text
Ok → TF → AR → Ok
```

Transient fault может быть вызван, например, software defect, power surge, environmental factor либо иной временной ошибкой. Если automatic recovery успешно — система возвращается в `Ok`; если нет, transient path превращается в более тяжёлый отказной путь, требующий ремонта.

#### Service error

```text
PF → SE → Ok
```

Repair не всегда завершается успехом с первого раза. В статье это учитывается через probability of correct diagnosis $\(P_{cd}\)$ и среднее время устранения последствий неправильной диагностики \(MTTRFID\).

Идея Type 0 проста:

$$
\[
\text{failure}
\Rightarrow
\text{service unavailable until recovery or repair}.
\]
$$

## Рисунок 4: Type 3

### Назначение Figure 4

Figure 4 — это **Markov Model Type 3** для случая:

$$
\[
N=2,\qquad K=1,
\]
$$

при комбинации:

$$
\[
\text{nontransparent recovery}
+
\text{transparent repair}.
\]
$$

То есть:

- при отказе recovery/failover временно нарушает пользовательскую доступность;
- после успешного recovery система работает на одном экземпляре;
- ремонт и reintegration первого отказавшего компонента в штатном случае происходят без дополнительного interruption;
- доступность сохраняется, но отказоустойчивость временно снижена.

### Состояния Figure 4

| Состояние | Смысл | Reward |
|---|---|---:|
| `Ok` | Оба компонента исправны, нормальный режим | 1 |
| `AR1` | Automatic recovery после первого обнаруженного отказа | 0 |
| `PF1` | Один permanent fault; второй компонент обеспечивает работу | 1 |
| `Latent1` | Один permanent fault не обнаружен; резерв скрыто утрачен | 1 |
| `TF1` | Первый transient fault | 0 в течение recovery-path |
| `SPF` | Recovery неуспешен, возникло single-point failure condition | 0 |
| `PF2` | Второй permanent fault при уже деградированной системе | 0 |
| `TF2` | Transient fault, возникший при уже имеющемся permanent fault | 0 в течение recovery-path |
| `ServiceError` | Неправильная диагностика/замена; extended downtime | 0 |

### Mermaid-перерисовка Figure 4

```mermaid
stateDiagram-v2
    direction LR

    [*] --> Ok

    state "Ok: два исправных компонента; r = 1" as Ok
    state "AR1: recovery после первого обнаруженного отказа; r = 0" as AR1
    state "PF1: один permanent fault; degraded mode; r = 1" as PF1
    state "Latent1: скрытый permanent fault; r = 1" as Latent1
    state "TF1: первый transient fault; r = 0" as TF1
    state "AR2: recovery при transient fault в degraded mode; r = 0" as AR2
    state "PF2: второй permanent fault; r = 0" as PF2
    state "TF2: transient fault при уже имеющемся permanent fault; r = 0" as TF2
    state "SPF: automatic recovery неуспешен; r = 0" as SPF
    state "ServiceError: incorrect diagnosis or repair; r = 0" as ServiceError

    Ok --> AR1: detected permanent fault
    Ok --> Latent1: undetected permanent fault
    Ok --> TF1: first transient fault

    Latent1 --> AR1: latent fault detected after MTTDLF

    TF1 --> AR1: automatic recovery begins

    AR1 --> PF1: recovery succeeds
    AR1 --> SPF: recovery fails; Pspf

    PF1 --> Ok: successful repair after MTTM + Tresp
    PF1 --> ServiceError: incorrect diagnosis or corrective action
    ServiceError --> Ok: repeat repair; MTTRFID

    PF1 --> PF2: second permanent fault
    PF1 --> TF2: transient fault on remaining component

    Latent1 --> PF2: second permanent fault
    Latent1 --> TF2: transient fault on remaining component

    TF2 --> AR2: automatic recovery begins
    AR2 --> PF1: recovery succeeds
    AR2 --> SPF: recovery fails

    SPF --> PF2: service remains unavailable; repair required
    PF2 --> Ok: immediate service action and successful repair
```

Mermaid поддерживает state diagrams через `stateDiagram-v2`, состояния с алиасами и подписи переходов после двоеточия — поэтому этот код можно использовать в GitHub Markdown или Mermaid Live Editor. [mermaid](https://mermaid.ai/open-source/syntax/stateDiagram.html)

## Основные траектории Figure 4

### Обнаруженный permanent fault

```text
Ok → AR1 → PF1 → Ok
```

Развёрнуто:

```text
Ok
 │
 │ detected permanent fault
 ▼
AR1
 │
 ├── automatic recovery succeeded
 ▼
PF1
 │
 │ repair after logistics delay
 │ MTTM + Tresp
 ▼
Ok
```

Здесь важна семантика `AR1` и `PF1`.

```text
AR1: r = 0
PF1: r = 1
```

То есть пользователь замечает interruption во время automatic recovery. Но после успешного recovery сервис снова доступен, хотя работает с единственным оставшимся исправным компонентом.

Если это двухузловой кластер, путь можно интерпретировать так:

```text
Node A отказал
   │
   ▼
Failover / restart / reconfiguration
   │
   ▼
Node B обслуживает приложение
   │
   ▼
Node A ремонтируется и возвращается в конфигурацию
```

### Необнаруженный permanent fault

```text
Ok → Latent1 → AR1 → PF1
```

```text
Ok
 │
 │ permanent fault remains undetected
 ▼
Latent1
 │
 │ elapsed time: MTTDLF
 ▼
AR1
 │
 ▼
PF1
```

`Latent1` опасно тем, что пользовательский сервис ещё доступен, но резерв уже потерян. Снаружи система выглядит работоспособной:

$$
\[
r_{\text{Latent1}}=1.
\]
$$

Однако фактическое состояние отказоустойчивости уже изменилось:

$$
\[
N_{\text{working}}=1,\qquad K=1.
\]
$$

Следующий отказ может сразу привести к полной недоступности.

### Первый transient fault

```text
Ok → TF1 → AR1 → Ok
```

Если recovery проходит успешно, permanent repair не требуется:

```text
Ok
 │
 │ transient fault
 ▼
TF1
 │
 │ automatic recovery
 ▼
AR1
 │
 └── successful recovery
       │
       ▼
      Ok
```

Но Type 3 означает nontransparent recovery, поэтому даже успешно устранённый transient fault создаёт downtime на время restart, recovery или failover.

### Второй permanent fault

```text
PF1 → PF2
```

или:

```text
Latent1 → PF2
```

В обоих случаях условие работоспособности нарушено:

$$
\[
N_{\text{working}}=0 < K=1.
\]
$$

Поэтому `PF2` имеет reward \(0\). В статье подчёркивается, что в `PF2` сервисный вызов инициируется немедленно: ждать планового окна \(MTTM\) нельзя, поскольку система уже недоступна.

### Transient fault в degraded mode

```text
PF1 → TF2 → AR2 → PF1
```

Это важнейший сценарий для оценки degraded risk.

```text
PF1
 │
 │ transient fault единственного оставшегося узла
 ▼
TF2
 │
 │ automatic recovery
 ▼
AR2
 │
 ├── successful recovery
 ▼
PF1

AR2
 │
 └── recovery failure
       ▼
      SPF
```

Даже если второй сбой transient и успешно устраняется, услуга временно недоступна, потому что работает только один оставшийся компонент, а recovery nontransparent.

### Неуспешный automatic recovery

```text
AR1 → SPF
```

или:

```text
AR2 → SPF.
```

В статье вероятность этого сценария задаётся параметром probability of SPF during AR:

$$
\[
P_{spf}.
\]
$$

Смысл: automatic recovery может не вернуть систему в ожидаемый degraded operational state. Например, возможно повреждение данных, неуспешный reboot, некорректное failover состояние либо другой сценарий, после которого требуется более тяжёлое восстановление.

### Ошибочный ремонт

```text
PF1 → ServiceError → Ok
```

В штатном Type 3 маршруте система из `PF1` должна вернуться в `Ok` после ремонта. Но если диагностика неверна либо corrective action не устранила исходную проблему, модель переводит систему в `ServiceError`.

Параметры:

$$
\[
P_{cd}
=
\Pr(\text{correct diagnosis and correction}),
\]
$$

$$
\[
MTTRFID
=
\text{mean time to repair after incorrect diagnosis}.
\]
$$

Именно этот путь отражает важную эксплуатационную реальность: downtime и длительность восстановления часто определяются не только ремонтопригодностью FRU, но и качеством диагностики, процедурой troubleshooting и корректностью сервисного действия.

## Как из Figure 4 получить Type 4

Figure 4 описывает Type 3, поэтому после `PF1` штатный ремонт не вводит отдельного состояния downtime. Для преобразования в **Type 4** нужно добавить между `PF1` и `Ok` состояние nontransparent repair/reintegration:

```mermaid
stateDiagram-v2
    direction LR

    state "PF1: degraded mode; service Up; r = 1" as PF1
    state "M1: repair/reintegration interruption; r = 0" as M1
    state "Ok: оба компонента исправны; r = 1" as Ok
    state "ServiceError: extended repair downtime; r = 0" as ServiceError

    PF1 --> M1: repair/reintegration requires outage
    M1 --> Ok: correct diagnosis, repair and reintegration
    M1 --> ServiceError: incorrect diagnosis or corrective action
    ServiceError --> M1: repeated maintenance action
```

Это изменение означает:

$$
\[
\text{Type 3}
=
\text{nontransparent recovery}
+
\text{transparent repair},
\]
$$

$$
\[
\text{Type 4}
=
\text{nontransparent recovery}
+
\text{nontransparent repair}.
\]
$$

В Type 4 после успешного failover пользователь может сначала наблюдать downtime из-за `AR1`, затем сервис работает в `PF1`, а позднее появляется второй downtime, когда начинается `M1`.

Однако `M1` не обязан включать весь календарный период ремонта. Его длительность определяется тем, какие части maintenance lifecycle действительно требуют остановки пользовательской функции:

- при hot-plug без dynamic reconfiguration — возможно, только restart и reintegration;
- при non-hot-pluggable component — shutdown, physical replacement, boot, verification и reintegration;
- при cluster-wide reconfiguration — период, в который невозможно сохранить active service на оставшемся узле.
