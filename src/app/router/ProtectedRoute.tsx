import { Navigate, useLocation } from 'react-router-dom';
import { useSessionStore } from '@/app/store/session.store';

export const ProtectedRoute = ({ roles, children }: { roles: string[]; children: JSX.Element }) => {
  const location = useLocation();
  const user = useSessionStore((s) => s.user);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const hasRole = roles.length === 0 || roles.some((r) => user.roles.includes(r));
  if (!hasRole) {
    return <Navigate to="/403" replace />;
  }

  return children;
};
