import { formatHour } from '@/utils/format-DateTime';
import { revalidateExampleAction } from '@/actions/revalidate-example';

export const dynamic = 'force-static';
// export const revalidate = 10;

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
  const hour = formatHour(new Date());

  return (
    <main className='min-h-150 text-4xl font-bold'>
      <div>
        Hora: {hour} (ID: {id})
      </div>

      <form action={revalidateExampleAction} className='py-16'>
        <input type='hidden' name='path' defaultValue={`/exemplo/${id}`} />

        <input
          type='hidden'
          name='name'
          defaultValue={'Fernando José Helfenstein'}
        />

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
