import { useQuery } from '@tanstack/react-query';
import { fetchGeneralInfo } from '../api/generalInfo.api';

export const useGeneralInfo = () => {
  return useQuery({
    queryKey: ['general-info'],
    queryFn: fetchGeneralInfo,
    staleTime: 5 * 60 * 1000, // 5 minutos
    gcTime: 10 * 60 * 1000, // 10 minutos (antes era cacheTime)
  });
};
