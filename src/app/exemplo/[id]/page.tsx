import { formatHour, getCurrentTimestamp } from '@/utils/format-DateTime';
import { revalidateExampleAction } from '@/actions/revalidate-example';
//import { formatHourCached } from '@/utils/format-DateTime';

// export const dynamic = 'force-static';
// export const revalidate = 30;
// export const dynamicParams = true;
// export async function generateStaticParams() {
//   return [{ id: '1' }, { id: '2' }];
// }

export default async function ExemploDynamicPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const timestampMs = getCurrentTimestamp();
  const hour = formatHour(timestampMs);
  // const response = await fetch('https://randomuser.me/api/?results=1', {
  //   next: {
  //     tags: ['randomuser'],
  //     revalidate: 30,
  //   },
  // }).then(response => response.json());
  // const name = response.results[0].name.first;

  //const hour = await formatHourCached();

  return (
    <main className='min-h-150 text-4xl font-bold'>
      <div>
        {/* Name: {name} | Hora: {hour} | (ID: {id}) */}
        Hora: {hour} | (ID: {id})
      </div>

      <form action={revalidateExampleAction} className='py-16'>
        <input type='hidden' name='path' defaultValue={`/exemplo/${id}`} />

        <button
          className='bg-amber-500 text-white p-2 rounded hover:bg-amber-600 transition cursor-pointer'
          type='submit'
        >
          REVALIDATE
        </button>
      </form>
    </main>
  );
}
