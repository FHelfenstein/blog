//import styles from './styles.module.css';
import Link from 'next/link';

// className='pb-16 text-center'
export function Footer() {
  return (
    <footer className='pb-16 text-center'>
      <p>
        <span className='text-sm/tight'>
          Copyright &copy; {new Date().getFullYear()} -{' '}
        </span>
        <Link href='/'>The Blog</Link>
      </p>
    </footer>
  );
}
