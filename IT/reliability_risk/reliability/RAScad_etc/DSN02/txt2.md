## 1
В статье Automatic generation of availability models in RAScad Что означает состояние ServiceError и SPF (подробно расскажи). Какой reward function имеет состояние Latent1 и почему? Почему нет состояния Latent2?

В статье **Automatic Generation of Availability Models in RAScad** состояния `ServiceError`, `SPF` и `Latent1` имеют разные роли:

- `ServiceError` — ошибка в процессе диагностики или ремонта;
- `SPF` — отказ автоматического восстановления, после которого система попадает в состояние single point of failure;
- `Latent1` — скрытый постоянный отказ одного резервного компонента, при котором система ещё работает, но резерв уже фактически потерян. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/1419432341/594457a8-e0a8-47cf-abee-20e24d111586/RAScad_DSN02.pdf?AWSAccessKeyId=ASIA2F3EMEYE5VRBSLNR&Signature=ytYwyo05erbnXq4Rc%2BMw8ZuNex8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFsaCXVzLWVhc3QtMSJGMEQCIBA%2FikyCBJrC23kuB6F4qKRMNaVW%2F23Ck2CUedgBYn1GAiAb%2Ftb1z2FfaRzbYCxTblIc5CXZLc%2BJUDkZ487wcYBw2CrzBAgjEAEaDDY5OTc1MzMwOTcwNSIM%2FxAV3dB33mUeDNysKtAEKjP3%2B7Jf9osilzGMwY6OJBinh2HhwdeoWSDTVE3PHKEXWe3fxmF2KK4IFsaq4B0rhvjToIUhkhBN%2BtCTPztzB7CiZrL7ZFGVcZhTtW99fjbPiMD%2BP1iWpteWaYf%2F98mWXgjjn3i3Q8fbmWd21YjC36vkn5%2F5VpHh6ZYe9eS%2FDRO1EZYSnNvqvPbqL5%2FetCz4d8t9L1Rc96%2FNA1%2BtvNur3egF%2FHkZip1wI538nbDbCLLRuFoc%2FdolDV%2B4BHfnH9BeY2X5bXbosz8pyPYgypMuLC6FfGNqn%2FMBqiqaWdgh1cQLWtIZ9fpWLZN6P7lhteCaocrynQe7Y4Rv6FJ6QBtHS9LDwbUAhdve56wII9xTYQVI9dy1RK6VaFjMg7d39C1sT2EOTcguz8sYV%2F6c1gNdE5r1nP8TAAwcaxS1cnuE2ZZtDwrzGEV653qq2dE5fzY5jv2EphhFKJeNlGaPAH5orlN%2BEoK3pWZo5SQcutj9gsY%2FMFztPM3mj7m0BBDEj5NTX%2FxalCBJTqGPudMbWzMLJ0Ro%2B5KnPLVDJ67bWnjYY%2FkK6g9BVCKCdyVaZABP%2BTQYxRcb66NLw8aPip7qZDvNaARCbrE4edNO4pPkmWDZZo%2BLDIvlb92xiORXWQpzjE0CnVTeQjpSdF9XmTYSDxSRbrvAgHvJtMpWznwHf0eeevofnfBT%2Bx0ZWZBYz%2BB92vTzrCjWj1fPqSmuozRWD7FTSK%2FK8Um1TSSXICYdwMJ%2FpHiz2AHpnXtmRttg46VsTpqhdZxQ%2F%2FkJYbylDZegf12vwjCW2LzUBjqZAfdtljog00hSnT%2FJJGEIfoPt9V6othWwTGy%2Bx4vro89dGCplMmRkVRF78mSUXsdpHW596mgZ5tOR31%2F8vpvfOCaDLBAtcSjYhJWcwyj2pkWmBI0fSqUh3dDC2jsyAPaiAiebW2aJmyK7ET8qR%2FsJuMepYNuZjYf9k22mrMy3IhhVKpaRdcsWbD%2FMpNvRa%2BoNcfQe4Oy21MdOVg%3D%3D&Expires=1787771369)

## 1. Состояние ServiceError

### Оригинальное обозначение

В статье используется:

```text
ServiceError state
```

Перевод:

> состояние сервисной ошибки

Авторы вводят его в Type 3 после состояния `PF1`:

```text
PF1 → ServiceError
```

если диагностика и corrective action выполнены неправильно. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/1419432341/594457a8-e0a8-47cf-abee-20e24d111586/RAScad_DSN02.pdf?AWSAccessKeyId=ASIA2F3EMEYE5VRBSLNR&Signature=ytYwyo05erbnXq4Rc%2BMw8ZuNex8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFsaCXVzLWVhc3QtMSJGMEQCIBA%2FikyCBJrC23kuB6F4qKRMNaVW%2F23Ck2CUedgBYn1GAiAb%2Ftb1z2FfaRzbYCxTblIc5CXZLc%2BJUDkZ487wcYBw2CrzBAgjEAEaDDY5OTc1MzMwOTcwNSIM%2FxAV3dB33mUeDNysKtAEKjP3%2B7Jf9osilzGMwY6OJBinh2HhwdeoWSDTVE3PHKEXWe3fxmF2KK4IFsaq4B0rhvjToIUhkhBN%2BtCTPztzB7CiZrL7ZFGVcZhTtW99fjbPiMD%2BP1iWpteWaYf%2F98mWXgjjn3i3Q8fbmWd21YjC36vkn5%2F5VpHh6ZYe9eS%2FDRO1EZYSnNvqvPbqL5%2FetCz4d8t9L1Rc96%2FNA1%2BtvNur3egF%2FHkZip1wI538nbDbCLLRuFoc%2FdolDV%2B4BHfnH9BeY2X5bXbosz8pyPYgypMuLC6FfGNqn%2FMBqiqaWdgh1cQLWtIZ9fpWLZN6P7lhteCaocrynQe7Y4Rv6FJ6QBtHS9LDwbUAhdve56wII9xTYQVI9dy1RK6VaFjMg7d39C1sT2EOTcguz8sYV%2F6c1gNdE5r1nP8TAAwcaxS1cnuE2ZZtDwrzGEV653qq2dE5fzY5jv2EphhFKJeNlGaPAH5orlN%2BEoK3pWZo5SQcutj9gsY%2FMFztPM3mj7m0BBDEj5NTX%2FxalCBJTqGPudMbWzMLJ0Ro%2B5KnPLVDJ67bWnjYY%2FkK6g9BVCKCdyVaZABP%2BTQYxRcb66NLw8aPip7qZDvNaARCbrE4edNO4pPkmWDZZo%2BLDIvlb92xiORXWQpzjE0CnVTeQjpSdF9XmTYSDxSRbrvAgHvJtMpWznwHf0eeevofnfBT%2Bx0ZWZBYz%2BB92vTzrCjWj1fPqSmuozRWD7FTSK%2FK8Um1TSSXICYdwMJ%2FpHiz2AHpnXtmRttg46VsTpqhdZxQ%2F%2FkJYbylDZegf12vwjCW2LzUBjqZAfdtljog00hSnT%2FJJGEIfoPt9V6othWwTGy%2Bx4vro89dGCplMmRkVRF78mSUXsdpHW596mgZ5tOR31%2F8vpvfOCaDLBAtcSjYhJWcwyj2pkWmBI0fSqUh3dDC2jsyAPaiAiebW2aJmyK7ET8qR%2FsJuMepYNuZjYf9k22mrMy3IhhVKpaRdcsWbD%2FMpNvRa%2BoNcfQe4Oy21MdOVg%3D%3D&Expires=1787771369)

### Что такое PF1

Сначала напомним смысл `PF1`:

```text
PF1 = Permanent Fault 1
```

Перевод:

> первый постоянный отказ

Для примера:

\[
N=2,\qquad K=1.
\]

Это означает:

- имеется два однотипных компонента;
- для работоспособности требуется один;
- один компонент отказал;
- второй продолжает обслуживать систему.

Поэтому `PF1` — это не обязательно полная недоступность. Это **degraded operational state**:

\[
r(PF1)=1.
\]

Система доступна, но без нормального резерва.

### Переход PF1 → ServiceError

В `PF1` должна выполняться сервисная процедура:

1. ожидание разрешённого момента обслуживания;
2. вызов сервисной службы;
3. диагностика;
4. corrective action — замена или исправление неисправного компонента;
5. verification;
6. возврат системы в нормальное состояние `Ok`.

Если диагностика правильна и ремонт успешен:

```text
PF1 → Ok
```

Если диагностика или corrective action неправильны:

```text
PF1 → ServiceError
```

Авторы описывают это так:

> If the repair (diagnosis and corrective action) is successful, the system goes back to the normal state (`PF1 → Ok`). Otherwise, it has to go through the service error state (`PF1 → ServiceError`), which represents a longer downtime (`MTTRFID`). [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/1419432341/594457a8-e0a8-47cf-abee-20e24d111586/RAScad_DSN02.pdf?AWSAccessKeyId=ASIA2F3EMEYE5VRBSLNR&Signature=ytYwyo05erbnXq4Rc%2BMw8ZuNex8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFsaCXVzLWVhc3QtMSJGMEQCIBA%2FikyCBJrC23kuB6F4qKRMNaVW%2F23Ck2CUedgBYn1GAiAb%2Ftb1z2FfaRzbYCxTblIc5CXZLc%2BJUDkZ487wcYBw2CrzBAgjEAEaDDY5OTc1MzMwOTcwNSIM%2FxAV3dB33mUeDNysKtAEKjP3%2B7Jf9osilzGMwY6OJBinh2HhwdeoWSDTVE3PHKEXWe3fxmF2KK4IFsaq4B0rhvjToIUhkhBN%2BtCTPztzB7CiZrL7ZFGVcZhTtW99fjbPiMD%2BP1iWpteWaYf%2F98mWXgjjn3i3Q8fbmWd21YjC36vkn5%2F5VpHh6ZYe9eS%2FDRO1EZYSnNvqvPbqL5%2FetCz4d8t9L1Rc96%2FNA1%2BtvNur3egF%2FHkZip1wI538nbDbCLLRuFoc%2FdolDV%2B4BHfnH9BeY2X5bXbosz8pyPYgypMuLC6FfGNqn%2FMBqiqaWdgh1cQLWtIZ9fpWLZN6P7lhteCaocrynQe7Y4Rv6FJ6QBtHS9LDwbUAhdve56wII9xTYQVI9dy1RK6VaFjMg7d39C1sT2EOTcguz8sYV%2F6c1gNdE5r1nP8TAAwcaxS1cnuE2ZZtDwrzGEV653qq2dE5fzY5jv2EphhFKJeNlGaPAH5orlN%2BEoK3pWZo5SQcutj9gsY%2FMFztPM3mj7m0BBDEj5NTX%2FxalCBJTqGPudMbWzMLJ0Ro%2B5KnPLVDJ67bWnjYY%2FkK6g9BVCKCdyVaZABP%2BTQYxRcb66NLw8aPip7qZDvNaARCbrE4edNO4pPkmWDZZo%2BLDIvlb92xiORXWQpzjE0CnVTeQjpSdF9XmTYSDxSRbrvAgHvJtMpWznwHf0eeevofnfBT%2Bx0ZWZBYz%2BB92vTzrCjWj1fPqSmuozRWD7FTSK%2FK8Um1TSSXICYdwMJ%2FpHiz2AHpnXtmRttg46VsTpqhdZxQ%2F%2FkJYbylDZegf12vwjCW2LzUBjqZAfdtljog00hSnT%2FJJGEIfoPt9V6othWwTGy%2Bx4vro89dGCplMmRkVRF78mSUXsdpHW596mgZ5tOR31%2F8vpvfOCaDLBAtcSjYhJWcwyj2pkWmBI0fSqUh3dDC2jsyAPaiAiebW2aJmyK7ET8qR%2FsJuMepYNuZjYf9k22mrMy3IhhVKpaRdcsWbD%2FMpNvRa%2BoNcfQe4Oy21MdOVg%3D%3D&Expires=1787771369)

### Что означает ошибка

`ServiceError` может означать:

- диагностирован не тот FRU;
- заменён исправный компонент;
- неисправный компонент не заменён;
- выполнено неправильное corrective action;
- после замены причина отказа сохранилась;
- при ремонте возникла дополнительная ошибка;
- verification выявила, что система не восстановлена.

Это не обязательно отдельный физический отказ нового компонента. Это, прежде всего, **неудачный сервисный цикл**, вызванный неправильной диагностикой или неправильным ремонтным действием.

### Reward ServiceError

Для availability-модели состояние `ServiceError` имеет:

\[
r(ServiceError)=0.
\]

Причина: к этому моменту модель предполагает, что система находится в extended downtime и пользовательская функция недоступна.

Продолжительность такого состояния характеризуется параметром:

\[
MTTRFID,
\]

где:

```text
MTTRFID = Mean Time To Repair From Incorrect Diagnosis
```

Перевод:

> среднее время ремонта после неправильной диагностики.

Смысл `MTTRFID` не в том, что это обычный MTTR. Это дополнительное время, необходимое для:

- обнаружения ошибки первоначальной диагностики;
- повторного анализа;
- определения настоящей причины;
- возврата или замены ошибочно заменённого элемента;
- выполнения правильного corrective action;
- повторной проверки системы.

Упрощённая ветвь:

```text
PF1
 │
 ├── correct diagnosis and repair ──► Ok
 │
 └── incorrect diagnosis/action ────► ServiceError
                                         │
                                         │ MTTRFID
                                         ▼
                                        Ok
```

### Важная тонкость

В тексте статьи переход `ServiceError → Ok` не расписан так же подробно, как переход `PF1 → ServiceError`, но по смыслу модель должна предусматривать последующее исправление ошибки. Иначе `ServiceError` был бы поглощающим состоянием, а система уже никогда не вернулась бы в рабочее состояние.

## 2. Состояние SPF

### Оригинальное обозначение

В статье используется:

```text
SPF
```

и расшифровка:

```text
single point of failure
```

Перевод:

> единичная точка отказа

Но здесь важно не спутать два смысла:

1. архитектурный термин **single point of failure** — компонент, отказ которого может привести к потере функции;
2. состояние `SPF` в конкретной Markov-модели RAScad — состояние, в которое система попадает при неуспешном automatic recovery.

В Figure 4 `SPF` — именно состояние отказа, возникающее из ветви:

```text
AR1 → SPF
```

если automatic recovery не сработал. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/1419432341/594457a8-e0a8-47cf-abee-20e24d111586/RAScad_DSN02.pdf?AWSAccessKeyId=ASIA2F3EMEYE5VRBSLNR&Signature=ytYwyo05erbnXq4Rc%2BMw8ZuNex8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFsaCXVzLWVhc3QtMSJGMEQCIBA%2FikyCBJrC23kuB6F4qKRMNaVW%2F23Ck2CUedgBYn1GAiAb%2Ftb1z2FfaRzbYCxTblIc5CXZLc%2BJUDkZ487wcYBw2CrzBAgjEAEaDDY5OTc1MzMwOTcwNSIM%2FxAV3dB33mUeDNysKtAEKjP3%2B7Jf9osilzGMwY6OJBinh2HhwdeoWSDTVE3PHKEXWe3fxmF2KK4IFsaq4B0rhvjToIUhkhBN%2BtCTPztzB7CiZrL7ZFGVcZhTtW99fjbPiMD%2BP1iWpteWaYf%2F98mWXgjjn3i3Q8fbmWd21YjC36vkn5%2F5VpHh6ZYe9eS%2FDRO1EZYSnNvqvPbqL5%2FetCz4d8t9L1Rc96%2FNA1%2BtvNur3egF%2FHkZip1wI538nbDbCLLRuFoc%2FdolDV%2B4BHfnH9BeY2X5bXbosz8pyPYgypMuLC6FfGNqn%2FMBqiqaWdgh1cQLWtIZ9fpWLZN6P7lhteCaocrynQe7Y4Rv6FJ6QBtHS9LDwbUAhdve56wII9xTYQVI9dy1RK6VaFjMg7d39C1sT2EOTcguz8sYV%2F6c1gNdE5r1nP8TAAwcaxS1cnuE2ZZtDwrzGEV653qq2dE5fzY5jv2EphhFKJeNlGaPAH5orlN%2BEoK3pWZo5SQcutj9gsY%2FMFztPM3mj7m0BBDEj5NTX%2FxalCBJTqGPudMbWzMLJ0Ro%2B5KnPLVDJ67bWnjYY%2FkK6g9BVCKCdyVaZABP%2BTQYxRcb66NLw8aPip7qZDvNaARCbrE4edNO4pPkmWDZZo%2BLDIvlb92xiORXWQpzjE0CnVTeQjpSdF9XmTYSDxSRbrvAgHvJtMpWznwHf0eeevofnfBT%2Bx0ZWZBYz%2BB92vTzrCjWj1fPqSmuozRWD7FTSK%2FK8Um1TSSXICYdwMJ%2FpHiz2AHpnXtmRttg46VsTpqhdZxQ%2F%2FkJYbylDZegf12vwjCW2LzUBjqZAfdtljog00hSnT%2FJJGEIfoPt9V6othWwTGy%2Bx4vro89dGCplMmRkVRF78mSUXsdpHW596mgZ5tOR31%2F8vpvfOCaDLBAtcSjYhJWcwyj2pkWmBI0fSqUh3dDC2jsyAPaiAiebW2aJmyK7ET8qR%2FsJuMepYNuZjYf9k22mrMy3IhhVKpaRdcsWbD%2FMpNvRa%2BoNcfQe4Oy21MdOVg%3D%3D&Expires=1787771369)

### Как возникает SPF

Для detected permanent fault:

```text
Ok → AR1
```

Затем:

```text
AR1 → PF1
```

если recovery успешно,

либо:

```text
AR1 → SPF
```

если recovery неуспешен.

Авторы формулируют это следующим образом:

> If the AR works, the system goes into a degraded mode (`AR1 → PF1`). Otherwise, it goes into the single point of failure state (`AR1 → SPF`), where it stays for a period of time (`Tspf`) defined by the user. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/1419432341/594457a8-e0a8-47cf-abee-20e24d111586/RAScad_DSN02.pdf?AWSAccessKeyId=ASIA2F3EMEYE5VRBSLNR&Signature=ytYwyo05erbnXq4Rc%2BMw8ZuNex8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFsaCXVzLWVhc3QtMSJGMEQCIBA%2FikyCBJrC23kuB6F4qKRMNaVW%2F23Ck2CUedgBYn1GAiAb%2Ftb1z2FfaRzbYCxTblIc5CXZLc%2BJUDkZ487wcYBw2CrzBAgjEAEaDDY5OTc1MzMwOTcwNSIM%2FxAV3dB33mUeDNysKtAEKjP3%2B7Jf9osilzGMwY6OJBinh2HhwdeoWSDTVE3PHKEXWe3fxmF2KK4IFsaq4B0rhvjToIUhkhBN%2BtCTPztzB7CiZrL7ZFGVcZhTtW99fjbPiMD%2BP1iWpteWaYf%2F98mWXgjjn3i3Q8fbmWd21YjC36vkn5%2F5VpHh6ZYe9eS%2FDRO1EZYSnNvqvPbqL5%2FetCz4d8t9L1Rc96%2FNA1%2BtvNur3egF%2FHkZip1wI538nbDbCLLRuFoc%2FdolDV%2B4BHfnH9BeY2X5bXbosz8pyPYgypMuLC6FfGNqn%2FMBqiqaWdgh1cQLWtIZ9fpWLZN6P7lhteCaocrynQe7Y4Rv6FJ6QBtHS9LDwbUAhdve56wII9xTYQVI9dy1RK6VaFjMg7d39C1sT2EOTcguz8sYV%2F6c1gNdE5r1nP8TAAwcaxS1cnuE2ZZtDwrzGEV653qq2dE5fzY5jv2EphhFKJeNlGaPAH5orlN%2BEoK3pWZo5SQcutj9gsY%2FMFztPM3mj7m0BBDEj5NTX%2FxalCBJTqGPudMbWzMLJ0Ro%2B5KnPLVDJ67bWnjYY%2FkK6g9BVCKCdyVaZABP%2BTQYxRcb66NLw8aPip7qZDvNaARCbrE4edNO4pPkmWDZZo%2BLDIvlb92xiORXWQpzjE0CnVTeQjpSdF9XmTYSDxSRbrvAgHvJtMpWznwHf0eeevofnfBT%2Bx0ZWZBYz%2BB92vTzrCjWj1fPqSmuozRWD7FTSK%2FK8Um1TSSXICYdwMJ%2FpHiz2AHpnXtmRttg46VsTpqhdZxQ%2F%2FkJYbylDZegf12vwjCW2LzUBjqZAfdtljog00hSnT%2FJJGEIfoPt9V6othWwTGy%2Bx4vro89dGCplMmRkVRF78mSUXsdpHW596mgZ5tOR31%2F8vpvfOCaDLBAtcSjYhJWcwyj2pkWmBI0fSqUh3dDC2jsyAPaiAiebW2aJmyK7ET8qR%2FsJuMepYNuZjYf9k22mrMy3IhhVKpaRdcsWbD%2FMpNvRa%2BoNcfQe4Oy21MdOVg%3D%3D&Expires=1787771369)

То есть `SPF` возникает не просто от самого первого отказа. Первый отказ может быть пережит благодаря резерву. `SPF` возникает тогда, когда механизм, который должен был безопасно перераспределить функцию или перевести систему в degraded mode, не завершился успешно.

### Возможные причины перехода AR → SPF

Статья приводит пример:

> recovery may fail, for example, due to data corruption.

Перевод:

> recovery может завершиться неудачей, например из-за повреждения данных. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/1419432341/594457a8-e0a8-47cf-abee-20e24d111586/RAScad_DSN02.pdf?AWSAccessKeyId=ASIA2F3EMEYE5VRBSLNR&Signature=ytYwyo05erbnXq4Rc%2BMw8ZuNex8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFsaCXVzLWVhc3QtMSJGMEQCIBA%2FikyCBJrC23kuB6F4qKRMNaVW%2F23Ck2CUedgBYn1GAiAb%2Ftb1z2FfaRzbYCxTblIc5CXZLc%2BJUDkZ487wcYBw2CrzBAgjEAEaDDY5OTc1MzMwOTcwNSIM%2FxAV3dB33mUeDNysKtAEKjP3%2B7Jf9osilzGMwY6OJBinh2HhwdeoWSDTVE3PHKEXWe3fxmF2KK4IFsaq4B0rhvjToIUhkhBN%2BtCTPztzB7CiZrL7ZFGVcZhTtW99fjbPiMD%2BP1iWpteWaYf%2F98mWXgjjn3i3Q8fbmWd21YjC36vkn5%2F5VpHh6ZYe9eS%2FDRO1EZYSnNvqvPbqL5%2FetCz4d8t9L1Rc96%2FNA1%2BtvNur3egF%2FHkZip1wI538nbDbCLLRuFoc%2FdolDV%2B4BHfnH9BeY2X5bXbosz8pyPYgypMuLC6FfGNqn%2FMBqiqaWdgh1cQLWtIZ9fpWLZN6P7lhteCaocrynQe7Y4Rv6FJ6QBtHS9LDwbUAhdve56wII9xTYQVI9dy1RK6VaFjMg7d39C1sT2EOTcguz8sYV%2F6c1gNdE5r1nP8TAAwcaxS1cnuE2ZZtDwrzGEV653qq2dE5fzY5jv2EphhFKJeNlGaPAH5orlN%2BEoK3pWZo5SQcutj9gsY%2FMFztPM3mj7m0BBDEj5NTX%2FxalCBJTqGPudMbWzMLJ0Ro%2B5KnPLVDJ67bWnjYY%2FkK6g9BVCKCdyVaZABP%2BTQYxRcb66NLw8aPip7qZDvNaARCbrE4edNO4pPkmWDZZo%2BLDIvlb92xiORXWQpzjE0CnVTeQjpSdF9XmTYSDxSRbrvAgHvJtMpWznwHf0eeevofnfBT%2Bx0ZWZBYz%2BB92vTzrCjWj1fPqSmuozRWD7FTSK%2FK8Um1TSSXICYdwMJ%2FpHiz2AHpnXtmRttg46VsTpqhdZxQ%2F%2FkJYbylDZegf12vwjCW2LzUBjqZAfdtljog00hSnT%2FJJGEIfoPt9V6othWwTGy%2Bx4vro89dGCplMmRkVRF78mSUXsdpHW596mgZ5tOR31%2F8vpvfOCaDLBAtcSjYhJWcwyj2pkWmBI0fSqUh3dDC2jsyAPaiAiebW2aJmyK7ET8qR%2FsJuMepYNuZjYf9k22mrMy3IhhVKpaRdcsWbD%2FMpNvRa%2BoNcfQe4Oy21MdOVg%3D%3D&Expires=1787771369)

Обобщённо возможны:

- ошибка failover;
- повреждение данных;
- невозможность активировать резервный компонент;
- unsuccessful reboot;
- некорректная реконфигурация;
- отказ firmware или operating system;
- невозможность deconfigure неисправный компонент;
- несовместимость конфигурации;
- отказ второго элемента в процессе recovery;
- нарушение условий, необходимых для продолжения работы.

### Reward SPF

Для Figure 4:

\[
r(SPF)=0.
\]

Причина: система не выполняет требуемую функцию.

Это отличие от `PF1`:

\[
r(PF1)=1,
\]

\[
r(SPF)=0.
\]

Сравнение:

| Состояние | Один компонент отказал | Recovery завершён | Сервис | Reward |
|---|---:|---:|---|---:|
| `PF1` | Да | Да | Доступен в degraded mode | 1 |
| `SPF` | Да или recovery не завершён | Нет | Недоступен | 0 |

### Параметр Tspf

Время пребывания в `SPF` задаётся:

```text
Tspf: SPF State Recovery Time
```

Перевод:

> время восстановления из состояния SPF.

Это время не обязательно равно обычному repair time. Оно относится к восстановлению после неудачного automatic recovery и может включать:

- восстановление повреждённых данных;
- ручное вмешательство;
- повторную загрузку;
- повторную инициализацию;
- специальную сервисную процедуру;
- перевод системы из аварийного состояния в рабочее.

Упрощённая ветвь:

```text
AR1
 │
 └── recovery fails
       │
       ▼
      SPF
       │
       │ Tspf
       ▼
   восстановление / ремонт
       │
       ▼
      Ok
```

В более подробной инженерной модели между `SPF` и `Ok` можно было бы добавить `Repair`, `Recovery`, `Verification`, но в RAScad часть этой логики могла быть агрегирована в параметре `Tspf`.

### Роль Pspf

Вероятность перехода в `SPF` задаётся параметром:

```text
Pspf: Probability of SPF during AR
```

Перевод:

> вероятность возникновения SPF во время automatic recovery.

Для одной операции recovery можно концептуально записать:

\[
P(\text{AR succeeds})=1-P_{spf},
\]

\[
P(\text{AR fails})=P_{spf}.
\]

При этом статья не обязательно задаёт в таком виде все вероятностные переходы на рисунке; это удобная интерпретация смысла параметра `Pspf`.

## 3. Состояние Latent1

### Оригинальное обозначение

В статье:

```text
Latent1
```

Перевод:

> первый скрытый отказ

или точнее:

> состояние первого скрытого постоянного отказа.

Авторы пишут:

> An non-detected permanent fault (latent fault) changes the system to another degraded mode — the latent fault state (`Ok → Latent1`). [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/1419432341/594457a8-e0a8-47cf-abee-20e24d111586/RAScad_DSN02.pdf?AWSAccessKeyId=ASIA2F3EMEYE5VRBSLNR&Signature=ytYwyo05erbnXq4Rc%2BMw8ZuNex8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFsaCXVzLWVhc3QtMSJGMEQCIBA%2FikyCBJrC23kuB6F4qKRMNaVW%2F23Ck2CUedgBYn1GAiAb%2Ftb1z2FfaRzbYCxTblIc5CXZLc%2BJUDkZ487wcYBw2CrzBAgjEAEaDDY5OTc1MzMwOTcwNSIM%2FxAV3dB33mUeDNysKtAEKjP3%2B7Jf9osilzGMwY6OJBinh2HhwdeoWSDTVE3PHKEXWe3fxmF2KK4IFsaq4B0rhvjToIUhkhBN%2BtCTPztzB7CiZrL7ZFGVcZhTtW99fjbPiMD%2BP1iWpteWaYf%2F98mWXgjjn3i3Q8fbmWd21YjC36vkn5%2F5VpHh6ZYe9eS%2FDRO1EZYSnNvqvPbqL5%2FetCz4d8t9L1Rc96%2FNA1%2BtvNur3egF%2FHkZip1wI538nbDbCLLRuFoc%2FdolDV%2B4BHfnH9BeY2X5bXbosz8pyPYgypMuLC6FfGNqn%2FMBqiqaWdgh1cQLWtIZ9fpWLZN6P7lhteCaocrynQe7Y4Rv6FJ6QBtHS9LDwbUAhdve56wII9xTYQVI9dy1RK6VaFjMg7d39C1sT2EOTcguz8sYV%2F6c1gNdE5r1nP8TAAwcaxS1cnuE2ZZtDwrzGEV653qq2dE5fzY5jv2EphhFKJeNlGaPAH5orlN%2BEoK3pWZo5SQcutj9gsY%2FMFztPM3mj7m0BBDEj5NTX%2FxalCBJTqGPudMbWzMLJ0Ro%2B5KnPLVDJ67bWnjYY%2FkK6g9BVCKCdyVaZABP%2BTQYxRcb66NLw8aPip7qZDvNaARCbrE4edNO4pPkmWDZZo%2BLDIvlb92xiORXWQpzjE0CnVTeQjpSdF9XmTYSDxSRbrvAgHvJtMpWznwHf0eeevofnfBT%2Bx0ZWZBYz%2BB92vTzrCjWj1fPqSmuozRWD7FTSK%2FK8Um1TSSXICYdwMJ%2FpHiz2AHpnXtmRttg46VsTpqhdZxQ%2F%2FkJYbylDZegf12vwjCW2LzUBjqZAfdtljog00hSnT%2FJJGEIfoPt9V6othWwTGy%2Bx4vro89dGCplMmRkVRF78mSUXsdpHW596mgZ5tOR31%2F8vpvfOCaDLBAtcSjYhJWcwyj2pkWmBI0fSqUh3dDC2jsyAPaiAiebW2aJmyK7ET8qR%2FsJuMepYNuZjYf9k22mrMy3IhhVKpaRdcsWbD%2FMpNvRa%2BoNcfQe4Oy21MdOVg%3D%3D&Expires=1787771369)

Более грамотно по-русски:

> Необнаруженный постоянный отказ переводит систему в другой деградированный режим — состояние скрытого отказа `Latent1`.

### Почему это всё ещё доступное состояние

Для:

\[
N=2,\qquad K=1
\]

пусть компонент A отказал, но отказ не обнаружен, а компонент B продолжает работать:

```text
Component A = permanent fault, не обнаружен
Component B = работает
Service = работает
```

Пользовательская функция ещё выполняется. Поэтому:

\[
r(Latent1)=1.
\]

Но система уже находится в опасном состоянии:

\[
N_{\text{working}}=1,\qquad K=1.
\]

То есть ровно минимально необходимое число компонентов остаётся работоспособным. Запаса больше нет.

### Почему Latent1 хуже, чем PF1

С точки зрения текущей доступности оба состояния могут иметь reward 1:

\[
r(PF1)=1,
\]

\[
r(Latent1)=1.
\]

Но они различаются с точки зрения observability и service response.

| Характеристика | `PF1` | `Latent1` |
|---|---|---|
| Permanent fault существует | Да | Да |
| Отказ обнаружен | Да | Нет |
| Система доступна | Да, degraded mode | Да, degraded mode |
| Запущена сервисная процедура | Да или планируется | Нет, потому что отказ пока не обнаружен |
| Резерв фактически потерян | Да | Да |
| Опасность второго отказа | Высокая | Высокая |
| Время обнаружения | Уже произошло | MTTDLF ещё не истёк |

В `PF1` система знает, что резерв потерян, и может запланировать ремонт. В `Latent1` система не знает этого и может продолжать работу, считая себя полностью резервированной.

## 4. Почему Latent1 получает reward 1

Reward function в статье описывает не исправность каждого отдельного компонента, а **операционную пригодность состояния системы**.

Авторы объясняют, что:

- reward rate 1 означает operational/up state;
- reward rate 0 означает failure/down state. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/1419432341/594457a8-e0a8-47cf-abee-20e24d111586/RAScad_DSN02.pdf?AWSAccessKeyId=ASIA2F3EMEYE5VRBSLNR&Signature=ytYwyo05erbnXq4Rc%2BMw8ZuNex8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFsaCXVzLWVhc3QtMSJGMEQCIBA%2FikyCBJrC23kuB6F4qKRMNaVW%2F23Ck2CUedgBYn1GAiAb%2Ftb1z2FfaRzbYCxTblIc5CXZLc%2BJUDkZ487wcYBw2CrzBAgjEAEaDDY5OTc1MzMwOTcwNSIM%2FxAV3dB33mUeDNysKtAEKjP3%2B7Jf9osilzGMwY6OJBinh2HhwdeoWSDTVE3PHKEXWe3fxmF2KK4IFsaq4B0rhvjToIUhkhBN%2BtCTPztzB7CiZrL7ZFGVcZhTtW99fjbPiMD%2BP1iWpteWaYf%2F98mWXgjjn3i3Q8fbmWd21YjC36vkn5%2F5VpHh6ZYe9eS%2FDRO1EZYSnNvqvPbqL5%2FetCz4d8t9L1Rc96%2FNA1%2BtvNur3egF%2FHkZip1wI538nbDbCLLRuFoc%2FdolDV%2B4BHfnH9BeY2X5bXbosz8pyPYgypMuLC6FfGNqn%2FMBqiqaWdgh1cQLWtIZ9fpWLZN6P7lhteCaocrynQe7Y4Rv6FJ6QBtHS9LDwbUAhdve56wII9xTYQVI9dy1RK6VaFjMg7d39C1sT2EOTcguz8sYV%2F6c1gNdE5r1nP8TAAwcaxS1cnuE2ZZtDwrzGEV653qq2dE5fzY5jv2EphhFKJeNlGaPAH5orlN%2BEoK3pWZo5SQcutj9gsY%2FMFztPM3mj7m0BBDEj5NTX%2FxalCBJTqGPudMbWzMLJ0Ro%2B5KnPLVDJ67bWnjYY%2FkK6g9BVCKCdyVaZABP%2BTQYxRcb66NLw8aPip7qZDvNaARCbrE4edNO4pPkmWDZZo%2BLDIvlb92xiORXWQpzjE0CnVTeQjpSdF9XmTYSDxSRbrvAgHvJtMpWznwHf0eeevofnfBT%2Bx0ZWZBYz%2BB92vTzrCjWj1fPqSmuozRWD7FTSK%2FK8Um1TSSXICYdwMJ%2FpHiz2AHpnXtmRttg46VsTpqhdZxQ%2F%2FkJYbylDZegf12vwjCW2LzUBjqZAfdtljog00hSnT%2FJJGEIfoPt9V6othWwTGy%2Bx4vro89dGCplMmRkVRF78mSUXsdpHW596mgZ5tOR31%2F8vpvfOCaDLBAtcSjYhJWcwyj2pkWmBI0fSqUh3dDC2jsyAPaiAiebW2aJmyK7ET8qR%2FsJuMepYNuZjYf9k22mrMy3IhhVKpaRdcsWbD%2FMpNvRa%2BoNcfQe4Oy21MdOVg%3D%3D&Expires=1787771369)

В `Latent1` один компонент уже отказал, но второй компонент всё ещё обеспечивает требуемую функцию. При \(N=2,\ K=1\) условие работоспособности:

\[
N_{\text{working}}\geq K.
\]

В `Latent1`:

\[
1\geq 1.
\]

Следовательно:

\[
r(Latent1)=1.
\]

Но это не означает, что `Latent1` является нормальным состоянием. Это **операционно доступное, но рискованное деградированное состояние**.

## 5. Почему нет Latent2

Короткий ответ: в приведённом примере \(N=2,\ K=1\) после первого скрытого permanent fault второй отказ уже означает потерю функции. Поэтому отдельное длительно существующее состояние `Latent2` для этой конфигурации не нужно.

### Сценарий для N=2, K=1

```text
Ok
 │
 │ первый permanent fault не обнаружен
 ▼
Latent1
 │
 │ второй permanent fault
 ▼
PF2 / Down
```

После первого скрытого отказа:

\[
N_{\text{working}}=1.
\]

После второго permanent fault:

\[
N_{\text{working}}=0.
\]

Так как:

\[
0<K=1,
\]

система недоступна. Поэтому второй permanent fault переводит систему в `PF2`, а не в `Latent2`.

### Почему не `Latent2`

Слово `latent` означает, что отказ скрыт, но при этом система ещё сохраняет требуемую функцию. Для `Latent2` в конфигурации \(N=2,\ K=1\) нужно было бы иметь:

```text
два отказавших компонента
и одновременно продолжение работы системы.
```

Но при двух компонентах и требовании одного работающего компонента это невозможно:

\[
N=2,\quad K=1,\quad \text{два отказа}
\Rightarrow
0 \text{ работающих компонентов}.
\]

Следовательно, `Latent2` не может быть операционно доступным состоянием в этой конкретной конфигурации.

## 6. Но Latent2 возможно при большем резерве

Отсутствие `Latent2` не является универсальным законом. Оно обусловлено примером:

\[
N=2,\qquad K=1.
\]

Если взять:

\[
N=3,\qquad K=1,
\]

то возможна цепочка:

```text
Ok → Latent1 → Latent2 → PF3
```

Интерпретация:

| Состояние | Отказавшие компоненты | Работающие компоненты | Сервис |
|---|---:|---:|---|
| `Ok` | 0 | 3 | Доступен |
| `Latent1` | 1 скрытый отказ | 2 | Доступен |
| `Latent2` | 2 скрытых отказа | 1 | Доступен, но без резерва |
| `PF3` | 3 отказа | 0 | Недоступен |

Для:

\[
N=3,\qquad K=1
\]

в `Latent2`:

\[
N_{\text{working}}=1\geq K,
\]

поэтому:

\[
r(Latent2)=1.
\]

Если же:

\[
N=3,\qquad K=2,
\]

то после двух скрытых отказов останется только один работающий компонент:

\[
1<K=2.
\]

В этом случае `Latent2` уже не является доступным состоянием; система будет недоступна после второго отказа.

## 7. Почему в статье упоминается повторение состояний

Авторы указывают, что число состояний зависит от \(N\) и \(K\). При больших значениях резервирования состояния вроде `TF1`, `AR1`, `PF1` и `Latent1` повторяются для более высоких уровней отказов. [ppl-ai-file-upload.s3.amazonaws](https://ppl-ai-file-upload.s3.amazonaws.com/web/direct-files/attachments/1419432341/594457a8-e0a8-47cf-abee-20e24d111586/RAScad_DSN02.pdf?AWSAccessKeyId=ASIA2F3EMEYE5VRBSLNR&Signature=ytYwyo05erbnXq4Rc%2BMw8ZuNex8%3D&x-amz-security-token=IQoJb3JpZ2luX2VjEFsaCXVzLWVhc3QtMSJGMEQCIBA%2FikyCBJrC23kuB6F4qKRMNaVW%2F23Ck2CUedgBYn1GAiAb%2Ftb1z2FfaRzbYCxTblIc5CXZLc%2BJUDkZ487wcYBw2CrzBAgjEAEaDDY5OTc1MzMwOTcwNSIM%2FxAV3dB33mUeDNysKtAEKjP3%2B7Jf9osilzGMwY6OJBinh2HhwdeoWSDTVE3PHKEXWe3fxmF2KK4IFsaq4B0rhvjToIUhkhBN%2BtCTPztzB7CiZrL7ZFGVcZhTtW99fjbPiMD%2BP1iWpteWaYf%2F98mWXgjjn3i3Q8fbmWd21YjC36vkn5%2F5VpHh6ZYe9eS%2FDRO1EZYSnNvqvPbqL5%2FetCz4d8t9L1Rc96%2FNA1%2BtvNur3egF%2FHkZip1wI538nbDbCLLRuFoc%2FdolDV%2B4BHfnH9BeY2X5bXbosz8pyPYgypMuLC6FfGNqn%2FMBqiqaWdgh1cQLWtIZ9fpWLZN6P7lhteCaocrynQe7Y4Rv6FJ6QBtHS9LDwbUAhdve56wII9xTYQVI9dy1RK6VaFjMg7d39C1sT2EOTcguz8sYV%2F6c1gNdE5r1nP8TAAwcaxS1cnuE2ZZtDwrzGEV653qq2dE5fzY5jv2EphhFKJeNlGaPAH5orlN%2BEoK3pWZo5SQcutj9gsY%2FMFztPM3mj7m0BBDEj5NTX%2FxalCBJTqGPudMbWzMLJ0Ro%2B5KnPLVDJ67bWnjYY%2FkK6g9BVCKCdyVaZABP%2BTQYxRcb66NLw8aPip7qZDvNaARCbrE4edNO4pPkmWDZZo%2BLDIvlb92xiORXWQpzjE0CnVTeQjpSdF9XmTYSDxSRbrvAgHvJtMpWznwHf0eeevofnfBT%2Bx0ZWZBYz%2BB92vTzrCjWj1fPqSmuozRWD7FTSK%2FK8Um1TSSXICYdwMJ%2FpHiz2AHpnXtmRttg46VsTpqhdZxQ%2F%2FkJYbylDZegf12vwjCW2LzUBjqZAfdtljog00hSnT%2FJJGEIfoPt9V6othWwTGy%2Bx4vro89dGCplMmRkVRF78mSUXsdpHW596mgZ5tOR31%2F8vpvfOCaDLBAtcSjYhJWcwyj2pkWmBI0fSqUh3dDC2jsyAPaiAiebW2aJmyK7ET8qR%2FsJuMepYNuZjYf9k22mrMy3IhhVKpaRdcsWbD%2FMpNvRa%2BoNcfQe4Oy21MdOVg%3D%3D&Expires=1787771369)

Это означает, что в полной автоматически сгенерированной модели может существовать логика, аналогичная:

```text
Latent1
Latent2
Latent3
...
```

если после нескольких скрытых отказов система ещё может сохранять функцию.

Но для показательного случая:

\[
N=2,\qquad K=1
\]

максимально возможен только один скрытый отказ при сохранении доступности:

\[
N_{\text{working}}=1.
\]

После следующего permanent fault наступает отказ системы, поэтому Figure 4 содержит `Latent1`, но не `Latent2`.

## 8. Итоговая схема состояний

Для исходного примера \(N=2,\ K=1\):

```mermaid
stateDiagram-v2
    direction LR

    state "Ok: оба компонента исправны; r = 1" as Ok
    state "Latent1: один permanent fault скрыт; один компонент работает; r = 1" as Latent1
    state "AR1: automatic recovery; r = 0" as AR1
    state "PF1: первый permanent fault обнаружен; degraded mode; r = 1" as PF1
    state "ServiceError: incorrect diagnosis/repair; r = 0" as ServiceError
    state "SPF: recovery failed; service Down; r = 0" as SPF
    state "PF2: второй permanent fault; оба компонента потеряны; r = 0" as PF2

    Ok --> Latent1: permanent fault not detected
    Latent1 --> AR1: latent fault detected after MTTDLF
    Latent1 --> PF2: second permanent fault

    Ok --> AR1: detected permanent fault
    AR1 --> PF1: recovery succeeds
    AR1 --> SPF: recovery fails; Pspf

    PF1 --> Ok: successful repair
    PF1 --> ServiceError: incorrect diagnosis/corrective action
    ServiceError --> Ok: error corrected; MTTRFID

    PF1 --> PF2: second permanent fault
    PF2 --> Ok: immediate repair succeeds
    SPF --> PF2: recovery state requires repair
```

## Главное различие

Можно свести всё к трём формулам:

### ServiceError

\[
PF1
\xrightarrow{\text{incorrect diagnosis/action}}
ServiceError,
\qquad
r=0.
\]

Это ошибка **сервисного процесса**.

### SPF

\[
AR1
\xrightarrow{\text{recovery failure}}
SPF,
\qquad
r=0.
\]

Это ошибка **automatic recovery/failover**.

### Latent1

\[
Ok
\xrightarrow{\text{undetected permanent fault}}
Latent1,
\qquad
r=1
\]

для \(N=2,\ K=1\), потому что один оставшийся компонент всё ещё поддерживает требуемую функцию.

`Latent2` отсутствует в Figure 4 не потому, что скрытые вторые отказы невозможны вообще, а потому, что при \(N=2,\ K=1\) второй permanent fault уже оставляет ноль исправных компонентов и переводит систему в отказное состояние `PF2`.
