## 2
- [Knowledge graph-based system for technical document retrieval : a deductive reasoning-focused exploration](https://theses.hal.science/tel-04778111v1/file/SESBOUE_Matthias.pdf)
- [GMEOW — Глобальная онтология метаданных и сущностей для веб-технологий](https://github.com/Blackcat-Informatics/gmeow-ontology) Поставляемый логический мост распространяется наружу.  
BFO 2020, OBO/RO, SUMO, DUL, IAO, OBI, PATO, YAMATO и OpenCyc являются явными BridgeViewсоответствиями CommitmentShiftingBridge, поэтому никакая эквивалентность не может быть создана.
IRI и метки BFO проверяются на соответствие imports/targets/bfo.ttl; целевые аксиомы BFO/OBO/SUMO остаются за пределами замыкания на уровне объектов.
OWL/RDFS — это SoundUnderApproximationдиалект компилятора, а SHACL Core/AF — это ValidationOnly.
Исходные файлы ядра (140 строк) и аддитивного кода (25 строк) — это slices/grounding/logic/mappings/grounding-bridges.ttlи slices/grounding/logic/mappings/foundation-bridges.ttl; каталог моделей процессов (37 строк) (P-Plan, PROV-O, schema.org HowTo/Recipe, OPMW, BPMN, RO-Crate Workflow-Run, Airflow/CWL/WDL/Temporal/Nextflow, openEHR Task Planning) — это slices/grounding/logic/mappings/plan-enactment-bridges.ttl; полное руководство: docs/foundational-bridging.md.
