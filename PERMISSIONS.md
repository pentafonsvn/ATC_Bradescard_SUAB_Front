# Permisos por ruta

Matriz ruta ↔ roles (hoy `admin` con acceso total; placeholders para crecimiento):

| Ruta | Roles permitidos |
|---|---|
| /balances | admin, agent |
| /transactions | admin |
| /statements | admin |
| /clarifications/new | admin |
| /clarifications/history | admin |
| /cards/block-replace | admin |
| /nip | admin |
| /business-cases | admin |
| /business-cases/history | admin |
| /* | admin |

Mantén esta tabla sincronizada con `app/router/routes.tsx`.
