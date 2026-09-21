import { format } from 'date-fns';

export function formatDateTime(rawData: string): string {
  const date = new Date(rawData).toISOString();
  return format(date, 'dd/MM/yyyy HH:mm');
}
