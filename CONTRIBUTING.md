# Contribución

## Estilo
- ESLint + Prettier obligatorios (`npm run lint`, `npm run format`).
- Nombres en inglés (componentes, hooks, stores). Textos visibles en español.

## Ramas y commits
- main: estable.
- feature/<modulo>/<breve-descripcion>
- Convención de commits: tipo(scope): mensaje (e.g., feat(balances): tabla inicial)

## PRs
- Incluir descripción clara, screenshots si aplica.
- Checklist de integración de módulo en README.screens.md.

## Arquitectura
- Feature-first. `core/` no depende de `features/`.
- HTTP solo en `features/*/api/*.api.ts` usando `apiClient`.
- Páginas export default para `React.lazy`.

## QA
- Validar rutas protegidas (usuario admin simulado).
- Verificar estados: loading, error, empty.
- Sin URLs hardcodeadas: usar `ENV`.
