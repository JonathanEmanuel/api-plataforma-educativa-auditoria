# API de plataforma educativa — actividad de auditoría

Este proyecto está preparado para una actividad de la materia **Seguridad e Integridad**.

## Objetivo

Auditar una API que funciona, pero que contiene malas prácticas introducidas deliberadamente. El propósito es identificar hallazgos, justificar riesgos, proponer correcciones y definir cómo verificar esas correcciones.

> **Importante:** el proyecto contiene ejemplos inseguros con fines exclusivamente educativos. No desplegarlo en Internet, no utilizar credenciales reales y no conectarlo a bases de datos con información real.

## Requisitos

- Node.js 18 o superior.
- npm.
- MongoDB local es opcional para la actividad; los endpoints de ejemplo usan datos en memoria.

## Instalación

```bash
npm install
npm start
```

La API escucha en `http://localhost:3000`.

## Endpoints de ejemplo

- `GET /health`
- `GET /api/users`
- `GET /api/grades/student/1`
- `GET /api/grades/student/2`

Los endpoints están diseñados para facilitar la inspección durante la actividad. No contienen autenticación real.

## Inspección de dependencias

```bash
npm audit
npm outdated
```

La salida puede variar según la fecha, el árbol instalado y las fuentes de avisos. No se debe afirmar que un paquete es vulnerable solo porque esté desactualizado.

## Alcance

La actividad principal aborda:
- secretos y credenciales;
- configuración;
- errores y registros;
- exposición de datos;
- control de acceso y mínimo privilegio;
- revisión de dependencias.

SQL Injection y XSS no son el foco de esta versión. Se pueden tratar en la clase siguiente.

## Seguridad del entorno

- Usar exclusivamente datos ficticios.
- No publicar esta API.
- No introducir secretos reales.
- Si se ejecuta en un equipo compartido, detener el proceso al finalizar.
