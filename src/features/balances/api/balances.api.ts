import { ApiError } from '@/core/api/apiClient';

export type Balance = {
  id: string;
  account: string;
  amount: number;
  updatedAt: string;
};

// Simulación local (sin llamadas de red)
export async function getBalances(): Promise<Balance[]> {
  await new Promise((r) => setTimeout(r, 800));
  return [
    { id: '1', account: '123-001', amount: 12500.45, updatedAt: new Date().toISOString() },
    { id: '2', account: '123-002', amount: 2200.0, updatedAt: new Date().toISOString() }
  ];
}

export type BalancesResult = Balance[];
export type BalancesError = ApiError;
