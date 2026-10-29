## 1
- https://sigma.ontologyportal.org/sigma/Browse.jsp?kb=SUMO
- Sigma — это открытая среда для разработки формальных онтологий, в первую очередь она оптимизирована для работы с SUMO (Suggested Upper Merged Ontology). https://en.wikipedia.org/wiki/Sigma_knowledge_engineering_environment
### Human
- https://sigma.ontologyportal.org/sigma/Graph.jsp?relation=subclass&term=Hominid&up=9&down=2&limit=&inst=inst&fileRestrict=&columns=direct-children&columns=documentation&columns=graph&scrWidth=1266&kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&view=text&submit=submit
- https://sigma.ontologyportal.org/sigma/Graph.jsp?relation=subclass&term=Human&up=5&down=1&limit=&inst=inst&fileRestrict=&columns=direct-children&columns=documentation&columns=graph&scrWidth=1266&kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&view=text&submit=submit

Human находится в разных ветках, но все они в Physical:
- одна ветка - суперкласс = CognitiveAgent
  - (subclass Human CognitiveAgent) 	Merge.kif 15074-15074
- вторая ветка - суперкласс =  Hominid  
  - (subclass Human Hominid) 	Merge.kif 15073-15073  

т.е. оба все равно создают физический экземпляр. Не понятно (instance Alice Human) на какую ветку ссылается? Разве не должно быть однозначности?
Если есть Human в ветке Abstract - укажи точно положение.

Приведи примеры, когда Merge.kif содержит ABox. Или твое утверждение ошибочно: "Merge.kif содержит TBox, RBox, фрагменты ABox-подобных классификаций абстрактных индивидов, аксиомы/правила и аннотации."

В ветке SetOrClass нет и не может быть Human. См. https://sigma.ontologyportal.org/sigma/Graph.jsp?relation=subclass&term=SetOrClass&up=5&down=6&limit=&inst=inst&fileRestrict=&columns=direct-children&columns=documentation&columns=graph&scrWidth=1266&kb=SUMO&flang=SUO-KIF&lang=EnglishLanguage&view=text&submit=submit
