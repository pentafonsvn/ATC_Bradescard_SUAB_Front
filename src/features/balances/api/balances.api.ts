import { ApiError } from '@/core/api/apiClient';

/**
 * Tipo para gastos por tarjetahabiente
 */
export type CardholderExpense = {
  id: string;
  tarjetahabiente: string;
  relacion: 'Titular' | 'Adicional';
  totalGastos: number;
  cantidadTransacciones: number;
};

/**
 * Tipo para el resumen de balances del producto
 * API: GET /api/v1/clientes/{clienteId}/productos/{productoId}/balances
 */
export type BalanceData = {
  productoId: string;
  productoNombre: string;
  saldoTotal: number; // Saldo total actualizado
  fechaUltimoCorte: string; // ISO date
  depositosDesdeCorte: number; // Depósitos desde último corte a hoy
  gastosDesdeCorte: number; // Gastos desde último corte a hoy
  gastosPorTarjetahabiente: CardholderExpense[]; // Desglose por tarjetahabiente
};

/**
 * Mock API - Obtener balances del producto seleccionado
 * @param clienteId ID del cliente
 * @param productoId ID del producto seleccionado
 */
export async function getBalances(
  clienteId: string,
  productoId: string
): Promise<BalanceData> {
  // Simular latencia de red
  await new Promise((r) => setTimeout(r, 800));

  // Mock data
  return {
    productoId,
    productoNombre: 'Crédito Principal',
    saldoTotal: 45230.75,
    fechaUltimoCorte: '2024-10-25T00:00:00Z',
    depositosDesdeCorte: 12500.0,
    gastosDesdeCorte: 8340.25,
    gastosPorTarjetahabiente: [
      {
        id: 'th-001',
        tarjetahabiente: 'Juan Pérez García',
        relacion: 'Titular',
        totalGastos: 5200.5,
        cantidadTransacciones: 24,
      },
      {
        id: 'th-002',
        tarjetahabiente: 'María Pérez López',
        relacion: 'Adicional',
        totalGastos: 2140.75,
        cantidadTransacciones: 12,
      },
      {
        id: 'th-003',
        tarjetahabiente: 'Carlos Pérez López',
        relacion: 'Adicional',
        totalGastos: 999.0,
        cantidadTransacciones: 8,
      },
    ],
  };
}

export type BalancesResult = BalanceData;
export type BalancesError = ApiError;
