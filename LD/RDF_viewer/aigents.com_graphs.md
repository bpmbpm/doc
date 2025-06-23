### aigents.com_graphs.html 
- https://t.me/rusontology/11068
- https://aigents.com/graphs.html  

Сам движок https://aigents.com/graphs.html  
Вот эта страничка https://github.com/aigents/aigents-web/blob/master/html/graphs.html  
А вот код https://github.com/aigents/aigents-web/blob/master/html/ui/aigents-graph.js  
https://medium.com/singularitynet/graphs-part-1-how-singularitynet-will-leverage-opencog-aigents-b21e581cf9f8

#### example dot
Нужно убрать в конце точку ...
:Turkey a sdo:Country  
:CentralAnatolia a sdo:AdministrativeArea  
:AnkaraProvince a sdo:AdministrativeArea  
:AnkaraCity a sdo:City  

[URL](https://aigents.com/graphs.html?slicing=0&layout_threshold=1&layout_balance=50&layout_directions=3&text=:Turkey%20a%20sdo:Country%3B:CentralAnatolia%20a%20sdo:AdministrativeArea%3B:AnkaraProvince%20a%20sdo:AdministrativeArea%3B:AnkaraCity%20a%20sdo:City)

### local
Для локального запуска меняем в файле graphs.html пути на (см. graphs2.html)
``` <link rel="stylesheet" href=".\ui\jquery-ui-1.11.4.custom\jquery-ui.css">
  <script src=".\ui\jquery-1.11.1.js"></script>
  <script src=".\ui\jquery-ui-1.11.4.custom\jquery-ui.js"></script>
  <script type="text/javascript" src=".\ui\aigents-al.js?20"></script>
  <script type="text/javascript" src=".\ui\aigents-graph.js?24"></script>
</head> ```
