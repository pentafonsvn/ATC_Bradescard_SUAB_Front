# Flujo de datos y patrones

## Axios + Interceptores
- `core/api/apiClient.ts` crea una instancia con `baseURL` desde `ENV.API_URL`.
- Interceptor de request: adjunta `Authorization: Bearer <token>` si existe, y `x-trace-id`.
- Interceptor de response: normaliza errores a `ApiError { code, message, details, status, traceId }`.

## React Query
- Provider global: `app/providers/QueryClientProvider.tsx`.
- Hooks por feature: `features/*/hooks/*.ts` usan `useQuery`/`useMutation`.
- Claves de caché con prefijos por dominio (e.g., ['balances']).

## Zustand (sesión/UI)
- `session.store.ts`: `{ user|null, isLoadingUser, setUser, clear }`.
- `ui.store.ts`: `{ sidebarCollapsed, toggleSidebar }`.

## Roles y routing
- `app/router/routes.tsx`: rutas con `roles: string[]` y `element` con `React.lazy`.
- `ProtectedRoute.tsx`:
  - Si `!user` → redirige a `/login`.
  - Si usuario no contiene alguno de los `roles` requeridos → `/403`.

## Lazy load y skeletons
- `Suspense` en `app/router/index.tsx` con `PageSkeleton` como fallback.
- Skeletons para páginas/tablas en `shared/components/Feedback/*`.

## Ejemplo: Balances
- API (mock): `features/balances/api/balances.api.ts`.
- Hook: `features/balances/hooks/useBalances.ts`.
- UI: `features/balances/components/BalancesTable.tsx`.
- Página: `features/balances/pages/BalancesPage.tsx`.
- Estados: loading → `TableSkeleton`, error → `ErrorState`, success → tabla.
