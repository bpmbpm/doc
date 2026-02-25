## Hive Mind
### habr
- https://habr.com/ru/articles/974924/comments/#comment_29338632 своим ботом-программистом использую 6 шаблонов для популярных языков программирования JavaScript/TypeScript, Rust, Python, Go, C#, Java. Это шаблоны репозиториев с заранее настроенным CI/CD, который включает проверки линтерами (что стиль кода соответствует настроенным правилам), форматтерами (что код отформатирован так, как это того ожидается в проекте, то есть в едином стиле), тесты (unit, integration, e2e и т.п.), есть настроенный флоу для changesets с возможностью мержа нескольких версий в одну, если вдруг CI/CD сфейлился.
- https://habr.com/ru/articles/984026/comments/#comment_29370414 можно ставить в докере локально или у себя на сервере и использовать свою подписку на Claude MAX $200
### hive-mind
- https://github.com/link-assistant/hive-mind ; https://github.com/link-assistant/hive-mind/blob/main/docs/BEST-PRACTICES.md
- https://github.com/link-assistant/hive-mind/blob/main/docs/FREE_MODELS.md
## agent
- https://github.com/link-assistant/agent -tool agent с бесплатной моделью Grok Code Fast 1 (OpenCode). [grok-4.1-fast](https://openrouter.ai/x-ai/grok-4.1-fast) - больше не работает, т.к. уже не бесплатный.
- https://github.com/konard/test-hello-world-019bea4f-95dc-702e-8887-c1f4975529b6/issues/1
- второй --tool agent --model opencode/big-pickle
- kimi --tool agent --model kimi-k2.5-free

### 2
- qwen coder через vscode

### issue vs PR
- Вариант 1  
HM сделал PR, я посмотрел PR, Далее: алзакрыл PR без merge. Дее
  - Закрыл PR без merge. В прежнем (не закрытом) issue дал замечания (с учетом PR), снова solve issue. Можно коментарий не в issue, а в комент к нему. Я прежний PR закрываю без  merge и корректирую исходное issue с уточнением, "как делать не нужно" (из закрытого PR).
  - PR не закрываю. Замечания добавил не в прежнем issue, а в поле comment PR дал замечания, и не делая merge в solve указываю адрес PR и запускаю solve issue. Он поймет, что есть связь с PR и нужно смотреть комментарий к .
- Вариант 2
  - solve PR. Не закрывая и не merge PR.      
  Даем коментарий к PR. "То есть открытые Pull Request наш бот может дорабатывать". Буду давать коменты к PR и далее solve PR. 

### limits
Сгорает только если мы недельный лимит не успели использовать. Зачем тогда пятичасовой? 

### Jhon-Crow
- https://github.com/Jhon-Crow/many-from-hiv-minde/tree/main/docs/case-studies/issue-1
