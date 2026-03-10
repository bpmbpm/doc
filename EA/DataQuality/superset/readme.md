### Apache Superset
#### https://datafinder.ru/products/apache-superset-vvedenie
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

#### install
- [Поднимаем Apache Superset — необходимый и достаточный гайд](https://habr.com/ru/articles/661159/)
