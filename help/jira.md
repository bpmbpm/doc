## jira

### jira vs github 
сопоставление статусов задач

Сопоставление статусов задач между Jira и GitHub (Issues/Projects) на базовом цикле разработки: To Do (К выполнению), In Progress (В работе) и Done (Готово). При интеграции GitHub for Atlassian, статусы в Jira (например, Open, Backlog) автоматически сопоставляются с открытыми Issues/PR, а Closed — с закрытыми. 

| Jira Status | GitHub Status/Column | Описание |
| --- | --- | --- |
| Backlog / To Do | Open (Issue/PR) | Задача создана, в очереди, не начата. |
| In Progress | Open (с активным PR) | Разработчик работает над веткой/кодом. |
| Under Review | Open (Review Required) | PR создан, ожидается проверка. |
| Done / Closed | Closed (Merged) | Задача выполнена, PR влит. |

В Jira статусы можно настроить более детально (например, QA, UAT), тогда как в GitHub основной фокус на открытых/закрытых задачах.

| Событие в GitHub | Изменение статуса в Jira |
| --- | --- |
| Создание ветки с именем, связанным с задачей Jira (например, `feature/JIRA‑123`) | Задача в Jira переходит из «To Do» в «In Progress» |
| Создание pull request | Задача в Jira переходит из «In Progress» в «Under Code Review» |
| Слияние pull request | Задача в Jira переходит из «Under Code Review» в «Ready for Testing» |
| Закрытие issue в GitHub | Задача в Jira закрывается (например, устанавливается статус «Done») |

