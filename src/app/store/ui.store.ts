import { create } from 'zustand';

type UIState = {
  sidebarCollapsed: boolean;
  toggleSidebar: () => void;
};

export const useUIStore = create<UIState>((set, get) => ({
  sidebarCollapsed: false,
  toggleSidebar: () => set({ sidebarCollapsed: !get().sidebarCollapsed })
}));
