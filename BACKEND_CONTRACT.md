# Backend Contract (Placeholder)

## OpenAPI / Postman
- Enlaces a definiciones OpenAPI o colecciones Postman: [pendiente]

## Versionado
- Prefijo de API: /api/v1

## Errores
- Estructura normalizada en frontend: `ApiError { code, message, details, status, traceId }`
- Tabla de mapeo (ejemplo):

| errorCode | Mensaje UI |
|---|---|
| HTTP_401 | No autenticado. Inicia sesión. |
| HTTP_403 | No tienes permisos para acceder a este recurso. |
| HTTP_500 | Ocurrió un error en el servidor. Intenta nuevamente. |

Actualiza esta tabla con códigos reales del backend.
