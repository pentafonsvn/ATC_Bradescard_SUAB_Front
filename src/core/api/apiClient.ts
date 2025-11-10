import axios, { AxiosError } from 'axios';
import { ENV } from '@/app/config/env';
import { STORAGE_KEYS } from '@/app/config/constants';

export type ApiError = {
  code: string;
  message: string;
  details?: unknown;
  status?: number;
  traceId?: string;
};

function generateTraceId() {
  return crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`;
}

export const apiClient = axios.create({
  baseURL: ENV.API_URL,
  timeout: 20000
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem(STORAGE_KEYS.TOKEN);
  const traceId = generateTraceId();
  config.headers = config.headers || {};
  if (token) config.headers['Authorization'] = `Bearer ${token}`;
  config.headers['x-trace-id'] = traceId;
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;
    const data: any = error.response?.data;
    const apiError: ApiError = {
      code: data?.code || `HTTP_${status || 'ERR'}`,
      message: data?.message || error.message || 'Error desconocido',
      details: data?.details || error.toJSON(),
      status,
      traceId: (error.config?.headers as any)?.['x-trace-id']
    };

    if (status === 401 || status === 403) {
      // Opcional: emitir evento global, limpiar sesión, etc.
    }

    return Promise.reject(apiError);
  }
);
