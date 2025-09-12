### workflow pattern
- http://www.workflowpatterns.com/patterns/control/

### blocking
#### Blocking Discriminator
- [Pattern 28 (Blocking Discriminator)](http://www.workflowpatterns.com/patterns/control/new/wcp28.php)
#### blocking operation
Формализация в workflow прерывания операции  
https://habr.com/ru/articles/940152/comments/#comment_28819032  
https://habr.com/ru/articles/940152/comments/#comment_28802142 Это Шаблон 28 (Блокирующий дискриминатор)  
https://habr.com/ru/articles/940152/comments/#comment_28816780 BPMN и пример со станком.   
Суть в том, что есть один вход в операцию - функцию (квадратик) и есть один выход. Но для визуализации исключений (exception) их не достаточно и идут на разные ухищрения - но их суть добавить еще один "специальный вход" (черный вход) в этот квадратик. Так видимо и в Драконе нужно добавлять одну стрелку в квадратик, но "специальную", которая и будет указывать, что все "приехали, суши весла".  
Без дополнительной связи - сложно \ невозможно подобную синхронизацию визуализировать в workflow. Конечно можно словами это оговаривать, но мы же хотим абсолютный логический формализм (хотелось бы конечно математический). 
#### ai




