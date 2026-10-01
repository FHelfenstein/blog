import { formatHour } from '@/utils/format-DateTime';

export const dynamic = 'force-dynamic';

export default async function ExemploPage() {
  const hour = formatHour(new Date());

  return (
    <main className='min-h-150 text-4xl font-bold'>
      <div>Hora: {hour}</div>
    </main>
  );
}
