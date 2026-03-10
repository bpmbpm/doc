### Apache Superset
https://github.com/apache/superset ; 
#### about
https://datafinder.ru/products/apache-superset-vvedenie  
Основные элементы Apache Superset:
Apache Superset написан на языках Python и [react](https://github.com/bpmbpm/doc/blob/main/IT/programming/JS/React.md).   
Для работы с данными в бэкенде он использует модули python (pandas). В целом платформа состоит из следующих компонентов:
- Веб-сервер (Gunicorn, Nginx, Apache);
- Метаданные БД (MySQL, Postgres, MariaDB);
- Очередь сообщений для асинхронной обработки запросов (Redis, RabbitMQ, SQS);
- Кэш (Memcached, Redis);
- Бэкенд результатов (S3, Redis, Memcached)

Альтернативы:  
Tableau | PowerBI | Looker | Metabase | QuickSight | Redash

Логические составляющие Superset:
- источники — источники информации;
- дашборды;

Apache Superset использует Flask, который является фреймворком для создания веб-приложений на Python, а также SQLAlchemy в качестве ORM.  
Для создания динамических отчетов и визуализаций Superset использует шаблоны Jinja.  
Superset предоставляет Вам возможность пользоваться инструментом SQL Lab, с помощью которого Вы можете писать и выполнять интерактивные SQL-запросы к источникам данных. 
#### also
Ключевые особенности работы с данными:  
- Нет хранения данных: Данные остаются во внешнй БД (PostgreSQL, ClickHouse, Snowflake и др.).
- «Тонкий слой»: Superset только отправляет SQL-запросы, а результаты визуализирует.
- Метаданные: В своей внутренней базе (например, PostgreSQL) Superset хранит только структуру датасетов, права доступа и настройки графиков.
- Виртуальные датасеты: Можно создавать виртуальные датасеты, которые представляют собой сохраненные SQL-запросы, а не физические таблицы. 

- Примечателен тот факт, что на сегодня создатель SuperSet Максим Башмин основал компанию Preset, которая представляет облачное решение SuperSet для компаний, у которых нет ресурсов на развертывание и поддержку системы.
  
#### install
- [Поднимаем Apache Superset — необходимый и достаточный гайд](https://habr.com/ru/articles/661159/)

### clone
- https://xn--e1aa2afcdic.xn--p1ai/ Суперсет ТА 
- https://preset.io/ cloude
### analogue
- https://blog.karpov.courses/apache-superset-chto-eto-takoe-opisanie-platformy-dlya-vizualizaczii-dannyh-i-analitiki/ Tableau, Pentaho, Google Data Studio, MS Power BI, Looker, Metabase 

### apache superset vs visiology
- https://yolva-it.ru/2024/02/12/bi-reshenie-visiology/
