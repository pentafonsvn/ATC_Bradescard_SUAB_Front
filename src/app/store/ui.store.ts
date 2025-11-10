import { create } from 'zustand';

type UIState = {
  // Futuro: agregar estados de UI como modals, drawers, notifications, etc.
};

export const useUIStore = create<UIState>(() => ({}));
