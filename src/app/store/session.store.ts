import { create } from 'zustand';

export type User = { id: string; name: string; roles: string[] };

type SessionState = {
  user: User | null;
  isLoadingUser: boolean;
  setUser: (user: User | null) => void;
  clear: () => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  user: null,
  isLoadingUser: false,
  setUser: (user) => set({ user }),
  clear: () => set({ user: null, isLoadingUser: false })
}));
