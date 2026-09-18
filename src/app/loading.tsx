import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';

export default async function LoadingRoot() {
  return <SpinLoader className={clsx('min-h-screen')} />;
}
