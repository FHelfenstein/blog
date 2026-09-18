import { SpinLoader } from '@/components/SpinLoader';
import clsx from 'clsx';

export default async function Homepage() {
  return (
    <div>
      <SpinLoader containerClasses={clsx('min-h-[500px]')} />
    </div>
  );
}
