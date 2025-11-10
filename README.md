# Pantalla Unica

Proyecto base enterprise para banca/contact center.

## Stack
- React 18 + TypeScript + Vite
- Ant Design (UI)
- TanStack Query (React Query) para estado de servidor
- Zustand para estado global de UI/sesión
- Axios con interceptores
- React Router v6 con lazy/Suspense
- Zod, React Hook Form, clsx

## Scripts
- pnpm dev
- pnpm build
- pnpm preview
- pnpm lint
- pnpm format

## Estructura (feature-first)
```
src/
  app/
    router/
    providers/
    store/
    config/
  core/
    api/
    hooks/
    utils/
  features/
    layout/
    balances/
  shared/
    components/
    types/
    assets/styles/
  main.tsx
  index.html
```

Reglas:
- core/ no depende de features/.
- Componentes (presentación), hooks (lógica), api/*.ts (HTTP o simulación).
- No llamar Axios desde componentes: usar features/*/api/*.api.ts

## Providers
- QueryClientProvider: cliente global de React Query.
- AntdConfigProvider: tokens de tema Ant Design (paleta Bradesco).

## Convenciones
- Alias `@` → `src/` (definido en vite.config.ts y tsconfig paths).
- Código en inglés (componentes, hooks, stores). Textos visibles en español.
- Páginas exportadas por defecto para uso con React.lazy.

## Environments
- .env.example contiene VITE_API_URL y VITE_ENV_NAME.
- Usa `ENV` desde `src/app/config/env.ts`.

## Módulo de ejemplo: Balances
- API simulada en `features/balances/api/balances.api.ts`.
- Hook `useBalances` con React Query.
- Página `BalancesPage` con Skeleton/ErrorState/Tabla.

## Inicio rápido
1) Copia `.env.example` a `.env` y ajusta VITE_API_URL.
2) Instala dependencias: `pnpm install`.
3) Arranca: `pnpm dev`.

Más detalles en:
- README.screens.md
- README.uiux.md
- README.flow.md
- BACKEND_CONTRACT.md
- PERMISSIONS.md
- CONTRIBUTING.md
