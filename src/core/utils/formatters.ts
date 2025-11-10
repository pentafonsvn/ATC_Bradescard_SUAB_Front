export const currency = (value: number, currency = 'MXN') =>
  new Intl.NumberFormat('es-MX', { style: 'currency', currency }).format(value);

export const dateTime = (value: string | number | Date) =>
  new Intl.DateTimeFormat('es-MX', { dateStyle: 'medium', timeStyle: 'short' }).format(
    new Date(value)
  );
