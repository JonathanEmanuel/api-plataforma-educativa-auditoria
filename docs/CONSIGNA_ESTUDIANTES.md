# Trabajo práctico — Auditoría de desarrollo seguro

**Materia:** Seguridad e Integridad  
**Modalidad:** Trabajo en grupos  
**Producto:** Checklist completado + informe de hallazgos

## Situación

Una institución educativa utiliza una API para consultar información de usuarios y calificaciones. El equipo de desarrollo solicita una revisión antes de avanzar hacia una versión de producción.

Se entrega el código fuente de una API funcional que contiene malas prácticas deliberadas. El objetivo no es atacar sistemas reales, sino revisar el código y los comportamientos observables en un entorno local.

## Objetivos

- Identificar malas prácticas de desarrollo seguro.
- Relacionar cada hallazgo con un riesgo concreto.
- Proponer una corrección técnicamente adecuada.
- Definir evidencia o pruebas que permitan verificar la corrección.
- Priorizar los problemas según su impacto y contexto.

## Parte A — Inspección

1. Lean el `README.md`.
2. Revisen `server.js`, `controllers/userController.js`, `routes/grades.js`, `package.json` y `.gitignore`.
3. Ejecuten la API únicamente en un entorno local con datos ficticios.
4. Consulten los endpoints de ejemplo y observen qué información entregan.
5. Si el entorno lo permite, ejecuten `npm audit` y `npm outdated`. Registren la salida sin asumir que toda actualización pendiente equivale a una vulnerabilidad.

No intenten acceder a sistemas externos ni utilicen credenciales reales.

## Parte B — Checklist

Para cada control, marquen una opción:

- **Cumple**
- **Cumple parcialmente**
- **No cumple**
- **No verificable / No aplica**

Incluyan una observación o evidencia. No asignen “Cumple” solamente porque no hayan encontrado un problema: indiquen qué revisaron.

| # | Control a verificar | Estado | Evidencia / observación |
|---:|---|---|---|
| 1 | ¿Los secretos están fuera del código fuente? | | |
| 2 | ¿Los archivos con secretos están excluidos del repositorio? | | |
| 3 | ¿La configuración distingue desarrollo de producción? | | |
| 4 | ¿Los logs evitan registrar secretos y datos sensibles? | | |
| 5 | ¿Los errores públicos evitan revelar detalles internos? | | |
| 6 | ¿Los endpoints limitan la información devuelta a la necesaria? | | |
| 7 | ¿Se comprueba la identidad y autorización antes de acceder a recursos privados? | | |
| 8 | ¿Los permisos de cada usuario o servicio están limitados a lo necesario? | | |
| 9 | ¿Las dependencias se revisan y sus avisos se evalúan? | | |
| 10 | ¿Se documentan las correcciones y cómo se verificarán? | | |

## Parte C — Informe de hallazgos

Documenten **al menos cuatro hallazgos**. Para cada uno completen:

| Campo | Respuesta del grupo |
|---|---|
| Hallazgo | |
| Archivo o endpoint afectado | |
| Evidencia observada | |
| Activo afectado | |
| Riesgo / posible consecuencia | |
| Corrección propuesta | |
| Cómo verificar la corrección | |
| Prioridad y justificación | |

## Parte D — Priorización

Seleccionen los **tres hallazgos prioritarios** y expliquen por qué deberían resolverse antes que los demás. Consideren el impacto, la probabilidad, el alcance de la exposición y el contexto de uso.

## Entrega

1. Checklist completo.
2. Informe de al menos cuatro hallazgos.
3. Priorización de tres hallazgos.
4. Una conclusión breve: ¿la API debería desplegarse tal como está? Justifiquen la respuesta.

## Criterios de evaluación

- Identificación precisa de malas prácticas.
- Relación correcta entre evidencia y riesgo.
- Correcciones viables y técnicamente adecuadas.
- Verificaciones concretas, no solo afirmaciones.
- Priorización razonada y claridad del informe.
