## bot
«Matrix» — это не просто отдельное приложение, а открытый децентрализованный протокол для безопасного обмена сообщениями, звонков и передачи файлов. Термин Matrix bot обычно относится к программам-помощникам, работающим внутри этой экосистемы. [1, 2] 
Что такое Matrix

* Децентрализация: Сеть Matrix состоит из множества независимых серверов (домашних серверов), которые могут общаться друг с другом («федерация»), как электронная почта.
* Безопасность: Поддерживает сквозное шифрование (E2EE) по умолчанию для личных чатов, что делает переписку недоступной даже для администраторов серверов.
* Мосты (Bridges): Позволяет объединять чаты из разных мессенджеров (Telegram, WhatsApp, Signal, Discord, Slack) в одном приложении.
* Основной клиент: Самым популярным приложением для работы с Matrix является Element (ранее Riot). [1, 2, 3, 4, 5, 6, 7] 

Что умеют боты в Matrix
Боты в Matrix — это аккаунты, управляемые программами, которые автоматизируют задачи в комнатах. Основные типы ботов: [8] 

* Бридж-боты: Связывают комнаты Matrix с другими платформами (например, mautrix-telegram или mautrix-whatsapp).
* Модераторы: Автоматически удаляют спам, предупреждают за нарушения или блокируют пользователей (например, Mjolnir или Draupnir).
* Интеграции: Боты для уведомлений из GitHub, GitLab, Jira, Trello или для мониторинга серверов.
* Утилиты: Боты для голосования, создания превью ссылок, перевода голоса в текст (STT) или интеграции с ИИ (ChatGPT). [1, 3, 9, 10, 11, 12] 

Как создать своего бота
Разработка ботов для Matrix ведется с использованием различных SDK: [13] 

* Python: Библиотеки matrix-nio и simple-matrix-bot-lib.
* TypeScript/JavaScript: matrix-bot-sdk.
* Go: Фреймворк maubot для создания плагинов. [9, 13, 14, 15, 16] 

Бот обычно работает как обычный пользователь: ему нужно создать аккаунт на сервере и получить access_token для авторизации через API. [13, 17] 
Вы хотите подключить готового бота к своему чату или планируете написать собственного?

[1] [https://ru.wikipedia.org](https://ru.wikipedia.org/wiki/Matrix)
[2] [https://linagora.com](https://linagora.com/ru/topics/lapplication-matrix-est-elle-sure)
[3] [https://habr.com](https://habr.com/ru/articles/837904/)
[4] [https://linagora.com](https://linagora.com/ru/topics/quest-ce-que-le-serveur-matrix)
[5] [https://ruitunion.org](https://ruitunion.org/posts/2022-05-14-matrix/)
[6] [https://trueconf.ru](https://trueconf.ru/analog-element.html)
[7] [https://matrix.org](https://matrix.org/ecosystem/bridges/)
[8] [https://linagora.com](https://linagora.com/ru/topics/quoi-sert-le-logiciel-matrix)
[9] [https://matrix.org](https://matrix.org/ecosystem/integrations/)
[10] [https://habr.com](https://habr.com/ru/articles/1002728/)
[11] [https://github.com](https://github.com/matrixgpt/matrix-chatgpt-bot)
[12] [https://github.com](https://github.com/hibobmaster/matrix-stt-bot)
[13] [https://matrix.org](https://matrix.org/docs/older/matrix-bot-sdk-intro/)
[14] [https://github.com](https://github.com/rgomez90/matrix-bot)
[15] [https://vc.ru](https://vc.ru/life/2798848-kak-razvernut-korporativnyj-messendzher-s-ii-botom-za-3-dnya)
[16] [https://github.com](https://github.com/topics/matrix-bot?l=go&o=asc&s=stars)
[17] [https://github.com](https://github.com/progserega/MatrixVkBot#:~:text=%D0%91%D0%BE%D1%82%20%D0%BD%D0%B5%20%D1%82%D1%80%D0%B5%D0%B1%D1%83%D0%B5%D1%82%20%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D1%8F%20%D1%81%D0%BE%D0%B1%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B3%D0%BE%20Matrix%2D%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80%D0%B0%2C%20%D0%BE%D0%BD,%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B9%20%D0%BF%D0%BE%D0%BB%D1%8C%D0%B7%D0%BE%D0%B2%D0%B0%D1%82%D0%B5%D0%BB%D1%8F%20%D0%B4%D0%BB%D1%8F%20%D0%B1%D0%BE%D0%BB%D1%8C%D1%88%D0%B8%D0%BD%D1%81%D1%82%D0%B2%D0%B0%20%D0%B2%D0%BD%D0%BE%D0%B2%D1%8C%20%D1%81%D0%BE%D0%B7%D0%B4%D0%B0%D0%BD%D0%BD%D1%8B%D1%85%20%D0%BF%D1%80%D0%B8%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B9.)
