import PostsListAdmin from '@/components/admin/PostsListAdmin';
import { SpinLoader } from '@/components/SpinLoader';
import { requireLoginSessionOrRedirect } from '@/lib/login/manage-login';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default async function AdminPostPage() {
  await requireLoginSessionOrRedirect();

  return (
    <Suspense fallback={<SpinLoader className='mb-16' />}>
      <PostsListAdmin />
    </Suspense>
  );
}
