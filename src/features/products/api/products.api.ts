import type { Product } from '@/app/store/product.store';

/**
 * INTEGRACIÓN CON BACKEND:
 * Endpoint: GET /api/v1/clientes/{clienteId}/productos
 * Headers: Authorization: Bearer {token}
 * Response: { productos: Product[] }
 */

export const fetchClientProducts = async (clienteId: string): Promise<Product[]> => {
  // TODO: Reemplazar con llamada real
  // const { data } = await apiClient.get(`/clientes/${clienteId}/productos`);
  // return data.productos;

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return [
    {
      id: 'prod-001',
      tipo: 'debito',
      nombre: 'Debito',
      numeroCuenta: '',
      estado: 'activo',
    },
    {
      id: 'prod-002',
      tipo: 'credito',
      nombre: 'Credito',
      numeroCuenta: '',
      estado: 'activo',
    },
    {
      id: 'prod-003',
      tipo: 'ahorro',
      nombre: 'Ahorro',
      numeroCuenta: '',
      estado: 'activo',
    },
    {
      id: 'prod-004',
      tipo: 'inversion',
      nombre: 'Inversion',
      numeroCuenta: '',
      estado: 'activo',
    },
    {
      id: 'prod-005',
      tipo: 'prestamo',
      nombre: 'Prestamo',
      numeroCuenta: '',
      estado: 'activo',
    },
  ];
};
