import { create } from 'zustand';

export type AccountStatus = 'activa' | 'inactiva' | 'bloqueada' | 'suspendida';

export type CurrentAccount = {
  accountNumber: string;
  status: AccountStatus;
  clientName: string;
  lastContact?: string;
  phone?: string;
};

type AccountState = {
  currentAccount: CurrentAccount | null;
  setAccount: (account: CurrentAccount | null) => void;
  updateStatus: (status: AccountStatus) => void;
  clear: () => void;
};

export const useAccountStore = create<AccountState>((set) => ({
  currentAccount: null,
  setAccount: (account) => set({ currentAccount: account }),
  updateStatus: (status) =>
    set((state) =>
      state.currentAccount
        ? { currentAccount: { ...state.currentAccount, status } }
        : state
    ),
  clear: () => set({ currentAccount: null }),
}));
