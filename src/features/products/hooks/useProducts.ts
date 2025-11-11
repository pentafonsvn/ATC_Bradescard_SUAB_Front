import { useQuery } from '@tanstack/react-query';
import { fetchClientProducts } from '../api/products.api';

export const useProducts = (clienteId: string) => {
  return useQuery({
    queryKey: ['client-products', clienteId],
    queryFn: () => fetchClientProducts(clienteId),
    staleTime: 1000 * 60 * 5,
  });
};
