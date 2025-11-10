# Guía UI/UX

## Paleta y tokens
- Bradesco Red: #E60028
- Dark Red: #B3001B
- Success: #1BA548
- Warning: #FFC107
- Error: #D32F2F
- Border radius: 6
- Tipografías: Roboto, Open Sans, sans-serif

Estos tokens están aplicados en `AntdConfigProvider.tsx`.

## Spacing
- Page padding: 16px (variable CSS `--page-padding`)
- Grid y espaciados estándar de AntD

## Componentes base
- PageContainer: contenedor con padding de página
- PageHeader: título + acciones
- Feedback:
  - PageSkeleton/TableSkeleton: skeletons reutilizables
  - ErrorState/EmptyState: estados estandarizados

## Estados y mensajes
- Errores mapeados con `core/utils/errorHandler.ts` a mensajes en español.
- No mostrar stacktraces al usuario. Mantener mensajes claros y accionables.

## Accesibilidad mínima
- Contraste suficiente en botones primarios (rojo)
- Uso de `aria-label` cuando aplique
- Navegación por teclado soportada por AntD
