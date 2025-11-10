/**
 * Formatea una fecha ISO a formato legible en español
 * @param isoDate - Fecha en formato ISO (ej: "2025-11-10T14:30:00Z")
 * @param format - Tipo de formato deseado
 * @returns Fecha formateada
 */
export const formatDate = (
  isoDate?: string,
  format: 'short' | 'long' | 'dateTime' = 'short'
): string => {
  if (!isoDate) return 'N/A';

  const date = new Date(isoDate);

  if (isNaN(date.getTime())) return 'Fecha inválida';

  const options: Intl.DateTimeFormatOptions = {
    timeZone: 'America/Mexico_City',
  };

  switch (format) {
    case 'short':
      // Ene/2020
      options.month = 'short';
      options.year = 'numeric';
      return new Intl.DateTimeFormat('es-MX', options).format(date);

    case 'long':
      // 10 de noviembre de 2025
      options.day = 'numeric';
      options.month = 'long';
      options.year = 'numeric';
      return new Intl.DateTimeFormat('es-MX', options).format(date);

    case 'dateTime':
      // 10/Nov/2025 14:30
      const day = date.getDate().toString().padStart(2, '0');
      const month = date.toLocaleDateString('es-MX', { month: 'short' });
      const year = date.getFullYear();
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${day}/${month}/${year} ${hours}:${minutes}`;

    default:
      return isoDate;
  }
};
