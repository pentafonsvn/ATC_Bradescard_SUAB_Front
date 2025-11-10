import { lazy } from 'react';

export type AppRoute = {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  roles: string[];
};

export const appRoutes: AppRoute[] = [
  { path: '/balances', element: lazy(() => import('@/features/balances/pages/BalancesPage')), roles: ['admin', 'agent'] },
  { path: '/general-info', element: lazy(() => import('@/features/general-info/pages/GeneralInfoPage')), roles: ['admin', 'agent'] },
  { path: '/transactions', element: lazy(() => import('@/features/layout/pages/Placeholder')), roles: ['admin'] },
  { path: '/statements', element: lazy(() => import('@/features/layout/pages/Placeholder')), roles: ['admin'] },
  { path: '/clarifications/new', element: lazy(() => import('@/features/layout/pages/Placeholder')), roles: ['admin'] },
  { path: '/clarifications/history', element: lazy(() => import('@/features/layout/pages/Placeholder')), roles: ['admin'] },
  { path: '/cards/block-replace', element: lazy(() => import('@/features/layout/pages/Placeholder')), roles: ['admin'] },
  { path: '/nip', element: lazy(() => import('@/features/layout/pages/Placeholder')), roles: ['admin'] },
  { path: '/business-cases', element: lazy(() => import('@/features/layout/pages/Placeholder')), roles: ['admin'] },
  { path: '/business-cases/history', element: lazy(() => import('@/features/layout/pages/Placeholder')), roles: ['admin'] },
  { path: '/*', element: lazy(() => import('@/features/layout/pages/Info')), roles: ['admin'] }
];
