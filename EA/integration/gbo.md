### GBO
GBO (Generic Business Object — Обобщенный бизнес-объект) — это каноническая (стандартизированная) модель данных, используемая в интеграционных архитектурах (например, интеграционных шинах ESB) для унификации обмена данными между различными системами. 

При использовании SOAP (Simple Object Access Protocol) GBO выступает в качестве структуры данных, передаваемой в теле (SOAP Body) сообщения, позволяя отвязать интерфейсы конкретных систем друг от друга. 

Ключевые аспекты GBO в SOAP-интеграции
Каноническая модель (ASBO -> GBO -> ASBO):
ASBO (Application Specific Business Object) — это специфичный формат данных конкретной системы.
GBO — это единый формат для всей шины.
Процесс: Система А посылает ASBO1 
 Адаптер преобразует его в GBO 
 GBO передается через SOAP 
 Адаптер получателя преобразует GBO в ASBO2.
Преимущества:
Снижение связности (Decoupling): При добавлении новой системы не нужно переписывать все интеграции, достаточно создать адаптер, преобразующий ASBO в GBO и обратно.
Унификация: Использование стандартов (например, OAGIS, GS1) для описания данных.
SOAP-адаптер:
SOAP-адаптеры в интеграционных решениях (например, IBM WebSphere Business Integration) автоматически преобразуют форматы данных систем в GBO и упаковывают их в SOAP Envelope. 

Пример структуры
В SOAP-сообщении GBO обычно представляет собой XML-структуру в блоке soapenv:Body.
```
xml
<soapenv:Envelope xmlns:soapenv="http://xmlsoap.org" xmlns:gbo="http://example.com">
   <soapenv:Header/>
   <soapenv:Body>
      <gbo:GenericOrder>
         <!-- GBO данные -->
         <gbo:OrderID>12345</gbo:OrderID>
         <gbo:Customer>Company</gbo:Customer>
      </gbo:GenericOrder>
   </soapenv:Body>
</soapenv:Envelope>
```

Использование
Применяется в интеграции корпоративных систем для синхронизации справочников, обмена заказами и статусами заявок.
Пример из Cisco: Использование BOD (Business Object Documents) версий 9.5.1+ через SOAP для работы с заказами

### ESB
- https://citforum.ru/seminars/cbd2006/websphere.pdf c32

### ЕПВВ
- https://www.cbr.ru/content/document/file/85699/instruction.pdf


  
