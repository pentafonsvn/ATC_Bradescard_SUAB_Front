import { useCallback } from 'react';
import { useSessionStore } from '@/app/store/session.store';
import { STORAGE_KEYS } from '@/app/config/constants';

export const useAuth = () => {
  const { setUser, clear } = useSessionStore();

  const login = useCallback(async (username: string, password: string) => {
    // Simulación: asigna token y usuario admin
    localStorage.setItem(STORAGE_KEYS.TOKEN, 'dev-token');
    setUser({ id: '1', name: 'Admin', roles: ['admin'] });
    return true;
  }, [setUser]);

  const logout = useCallback(async () => {
    localStorage.removeItem(STORAGE_KEYS.TOKEN);
    clear();
  }, [clear]);

  const fetchMe = useCallback(async () => {
    const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
    if (token) {
      setUser({ id: '1', name: 'Admin', roles: ['admin'] });
    }
  }, [setUser]);

  return { login, logout, fetchMe };
};
