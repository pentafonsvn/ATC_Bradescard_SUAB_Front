import { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { appRoutes } from './routes';
import { ProtectedRoute } from './ProtectedRoute';
import { PageSkeleton } from '@/shared/components/Feedback/PageSkeleton';
import MainLayout from '@/features/layout/MainLayout';
import LoginPage from '@/features/layout/pages/LoginPage';
import ForbiddenPage from '@/features/layout/pages/ForbiddenPage';

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageSkeleton />}>        
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/403" element={<ForbiddenPage />} />
          <Route element={<MainLayout />}>
            {appRoutes.map(({ path, element: Element, roles }) => (
              <Route
                key={path}
                path={path}
                element={
                  <ProtectedRoute roles={roles}>
                    <Element />
                  </ProtectedRoute>
                }
              />
            ))}
            <Route index element={<Navigate to="/general-info" replace />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
