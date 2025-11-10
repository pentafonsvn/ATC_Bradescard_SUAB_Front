import { ApiError } from '@/core/api/apiClient';

export const toUserMessage = (error: ApiError): string => {
  switch (error.code) {
    case 'HTTP_401':
      return 'No autenticado. Inicia sesión.';
    case 'HTTP_403':
      return 'No tienes permisos para acceder a este recurso.';
    case 'HTTP_500':
      return 'Ocurrió un error en el servidor. Intenta nuevamente.';
    default:
      return error.message || 'Ocurrió un error.';
  }
};
