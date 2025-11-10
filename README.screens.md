# Plan de pantallas y rutas

## Módulos y rutas
- Balances → /balances
- Transacciones → /transactions
- Estados de cuenta → /statements
- Aclaraciones (Nueva) → /clarifications/new
- Aclaraciones (Historial) → /clarifications/history
- Tarjetas (Bloqueo/Reemplazo) → /cards/block-replace
- NIP → /nip
- Casos de negocio → /business-cases
- Casos de negocio (Historial) → /business-cases/history
- Información general (layout) → /*

## Ubicación por feature
- features/balances/{api,hooks,components,pages}
- features/transactions/{api,hooks,components,pages}
- features/statements/{api,hooks,components,pages}
- features/clarifications/{api,hooks,components,pages}
- features/cards/{api,hooks,components,pages}
- features/nip/{api,hooks,components,pages}
- features/business-cases/{api,hooks,components,pages}
- features/layout/pages/Info.tsx (información general)

## Checklist para integrar un módulo (paso a paso)

Crear carpeta src/features/<modulo>/{api,hooks,components,pages}.

Crear endpoints en features/<modulo>/api/*.api.ts usando apiClient.

Crear hooks useXxx.ts con useQuery/useMutation (React Query).

Crear componentes visuales y página principal (<Modulo>Page.tsx).

Añadir ruta en app/router/routes.tsx con roles y lazy().

Confirmar carga bajo demanda: la página debe exportarse default.

Conectar skeletons: usar PageSkeleton, TableSkeleton, etc. al cargar datos.

Añadir permisos en PERMISSIONS.md (ruta ↔ roles).

Añadir mensajes de error/empty state siguiendo README.uiux.md.

Probar navegación protegida con ProtectedRoute y un usuario admin.
