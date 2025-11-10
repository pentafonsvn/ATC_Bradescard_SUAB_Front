import { useQuery } from '@tanstack/react-query';
import { getBalances } from '../api/balances.api';

export const useBalances = () => {
  return useQuery({
    queryKey: ['balances'],
    queryFn: getBalances
  });
};

export default useBalances;
