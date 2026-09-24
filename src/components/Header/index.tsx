import clsx from 'clsx';
import Link from 'next/link';

export function Header() {
  return (
    <header>
      <h1
        className={clsx(
          'text-4xl/normal font-extrabold py-8', // mobile-first
          'sm:text-5xl/normal sm:py-10', // acima de 640px até 768px
          'md:text-6xl/normal md:py-11', // acima de 768px até 1024px
          'lg:text-7xl/normal lg:py-12', // acima de 1024px
        )}
      >
        <Link href='/'>The Blog</Link>
      </h1>
    </header>
  );
}
