export const ENV = {
  API_URL: import.meta.env.VITE_API_URL as string,
  ENV_NAME: (import.meta.env.VITE_ENV_NAME as string) || 'development'
};
