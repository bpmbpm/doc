### info
- [Управление вёрсткой в PlantUML](https://habr.com/ru/articles/865140/)
- [Построение диаграмм UML с использованием PlantUML](https://pdf.plantuml.net/PlantUML_Language_Reference_Guide_ru.pdf)
- [Architecture as Code: моделируем архитектуру предприятия в ArchiMate](https://habr.com/ru/companies/otus/articles/885594/) ; Связи между элементами создаются по шаблону:

### doc
- https://pdf.plantuml.net/PlantUML_Language_Reference_Guide_ru.pdf
- https://plantuml.com/ru-dark/sequence-diagram

### plantuml-stdlib
- https://plantuml.com/ru/stdlib ; spec: https://plantuml.com/ru/archimate-diagram
- https://github.com/plantuml/plantuml-stdlib ; https://github.com/plantuml-stdlib
- https://github.com/plantuml-stdlib/Archimate-PlantUML ; 
- https://github.com/plantuml-stdlib/C4-PlantUML ; https://github.com/plantuml-stdlib/Azure-PlantUML
- https://crashedmind.github.io/PlantUMLHitchhikersGuide/Stdlib/StdLibOverview.html 

#### example
- https://www.plantuml.com/plantuml/uml/SyfFKj2rKt3CoKnELR1Io4ZDoSa70000
- https://www.planttext.com/
- https://plantuml-editor.kkeisuke.com/
- https://plantuml.github.io/plantuml.js/ примеры работают, но 

code from https://github.com/plantuml-stdlib/Archimate-PlantUML
```
@startuml
!includeurl https://raw.githubusercontent.com/plantuml-stdlib/Archimate-PlantUML/master/Archimate.puml  
!theme archimate-standard from https://raw.githubusercontent.com/plantuml-stdlib/Archimate-PlantUML/master/themes  

title Archimate Sample - Requirement & Application Services  

'Elements'  
Motivation_Requirement(ReqPayrollStandard, "Do Payroll with a standard system")
Motivation_Requirement(ReqBudgetPlanning, "Do budget planning within the ERP system")

Application_Service(ASPayroll,"Payroll Service")
Application_Service(ASBudgetPlanning,"Budget Planning Service")
Application_Component(ACSAPFinanceAccRec, "SAP Finance - Accounts Recievables")
Application_Component(ACSAPHR, "SAP Human Resources")
Application_Component(ACSAPFin, "SAP Finance")
Application_Component(ACSAP,"SAP") 

'Relationships'  
Rel_Realization_Up(ASPayroll, ReqPayrollStandard)  
Rel_Realization_Up(ASBudgetPlanning, ReqBudgetPlanning)  
Rel_Realization_Up(ACSAPFinanceAccRec, ASBudgetPlanning)  
Rel_Realization_Up(ACSAPHR, ASPayroll)  

Rel_Composition_Up(ACSAPFin, ACSAPFinanceAccRec)  
Rel_Composition_Up(ACSAP, ACSAPHR)  
Rel_Composition_Up(ACSAP, ACSAPFin)  
@enduml
```
### markdown
- [Как использовать PlantUML с Markdown svg](https://gist.github.com/noamtamim/f11982b28602bd7e604c233fbe9d910f) : plantuml -tsvg FILENAME
