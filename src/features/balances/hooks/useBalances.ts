import { useQuery } from '@tanstack/react-query';
import { getBalances } from '../api/balances.api';

export const useBalances = (clienteId: string, productoId?: string) => {
  return useQuery({
    queryKey: ['balances', clienteId, productoId],
    queryFn: () => getBalances(clienteId, productoId || ''),
    enabled: !!productoId, // Solo ejecutar si hay producto seleccionado
  });
};

export default useBalances;
