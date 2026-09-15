## 1

Ниже — построчный перевод исходного отчёта. Слева оригинал, справа перевод. Сокращения пояснены в примечании после таблицы.

| Оригинал | Перевод |
|---|---|
| The following is your SE M8000 system configuration: | Ниже представлена конфигурация вашей системы SE M8000: |
| **HARDWARE:** | **АППАРАТНОЕ ОБЕСПЕЧЕНИЕ:** |
| `========` | `========` |
| `Part Number					    Quantity` | `Номер детали					    Количество` |
| `---------------------------------------------------------------` | `---------------------------------------------------------------` |
| `CMU Board						4` | `Плата CMU						4` |
| `IOU Board						4` | `Плата IOU						4` |
| `IOU Device Card						4` | `Карта устройства IOU						4` |
| `CPU						16` | `Процессор						16` |
| `MEM(4GB)(Chipkill)					128` | `Память (4 ГБ) (Chipkill)					128` |
| `*Redundant* Internal Disk Drives:` | `*Резервированные* внутренние дисковые накопители:` |
| `DiskDrive(73GB)						8` | `Дисковый накопитель (73 ГБ)						8` |
| `PCI Cards:` | `Карты PCI:` |
| `(501-7606-03) <ASSY,ATLAS,X8PCIE,4X1GBE,> Redundant Hotplug2` | `(501-7606-03) <Сборка, ATLAS, x8 PCIe, 4×1GbE,> Резервируемая горячая замена, 2` |
| `(371-4325-01) <PCA,2P,FC,PCIE HBA 8G> Redundant Hotplug	4` | `(371-4325-01) <PCA, 2 порта, FC, PCIe HBA 8G> Резервируемая горячая замена	4` |
| `No External Storage Arrays in this configuration.` | `Внешние дисковые массивы в данной конфигурации отсутствуют.` |
| **SOFTWARE:** | **ПРОГРАММНОЕ ОБЕСПЕЧЕНИЕ:** |
| `========` | `========` |
| `Software is not included in this configuration` | `Программное обеспечение не включено в данную конфигурацию` |
| **OTHER ATTRIBUTES:** | **ДРУГИЕ АТРИБУТЫ:** |
| `================` | `================` |
| `Service Response Time:		2 hours` | `Время реакции сервисной службы:		2 часа` |
| `Restriction Time:		8.0 hours` | `Время ограничения:		8,0 часов` |
| `System Reboot Time:	20.0 minutes` | `Время перезагрузки системы:	20,0 минут` |
| `Domain Quantity:			1` | `Количество доменов:			1` |
| `===================================================================================` | `===================================================================================` |
| `The simulation result for the above SE M8000 system configuration is as follows:` | `Результат симуляции для указанной выше конфигурации SE M8000 следующий:` |
| `*****SYSTEM RAS SIMULATION RESULTS*****` | `*****РЕЗУЛЬТАТЫ СИМУЛЯЦИИ RAS СИСТЕМЫ*****` |
| `*****System Reliability*****` | `*****Надёжность системы*****` |
| `System Unscheduled MTBSI:	95091.36(hours)` | `Среднее время между незапланированными системными инцидентами (MTBSI):	95091,36 (часов)` |
| `*****System Availability*****` | `*****Доступность системы*****` |
| `Total system downtime per year:	0.070 hour(s)` | `Общее время простоя системы в год:	0,070 часа(ов)` |
| `System availability:	0.99999195 ( 99.9992% of time )` | `Доступность системы:	0,99999195 ( 99,9992% времени )` |
| `*****System Serviceability*****` | `*****Обслуживаемость системы*****` |
| `System Mean Time To Repair:	3.182 hour(s)` | `Среднее время до восстановления системы (MTTR):	3,182 часа(ов)` |
| `System MTBS(Mean Time Between Services):	13478.995(hours)` | `Среднее время между обслуживаниями системы (MTBS):	13478,995 (часов)` |
| `Probability of 0 repair in one year = 	52.21%` | `Вероятность 0 ремонтов за один год = 	52,21%` |
| `Probability of 1 repair in one year = 	33.93%` | `Вероятность 1 ремонта за один год = 	33,93%` |
| `Probability of 2 or more repairs in one year = 	13.86%` | `Вероятность 2 или более ремонтов за один год = 	13,86%` |

### Примечания к сокращениям

- **CMU** — CPU Memory Unit, модуль процессора и памяти.
- **IOU** — I/O Unit, модуль ввода-вывода.
- **CPU** — Central Processing Unit, центральный процессор.
- **MEM** — Memory, память.
- **Chipkill** — технология коррекции ошибок памяти.
- **PCI** — Peripheral Component Interconnect.
- **ASSY** — Assembly, сборка.
- **ATLAS** — обозначение аппаратной платформы/сборки.
- **X8PCIE** — x8 PCI Express.
- **4X1GBE** — 4 порта 1 Gigabit Ethernet.
- **PCA** — Printed Circuit Assembly, печатная сборка.
- **2P** — 2 ports, 2 порта.
- **FC** — Fibre Channel.
- **HBA** — Host Bus Adapter, адаптер шины хранения.
- **8G** — 8 Gigabit.
- **MTBSI** — Mean Time Between System Incidents, среднее время между системными инцидентами.
- **MTBS** — Mean Time Between Services, среднее время между обслуживаниями.
- **MTTR** — Mean Time To Repair, среднее время до восстановления.
- **RAS** — Reliability, Availability, Serviceability, надёжность, доступность, обслуживаемость.
- 
