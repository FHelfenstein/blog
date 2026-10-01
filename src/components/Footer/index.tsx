//import styles from './styles.module.css';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className='pb-16 text-center'>
      <p>
        <span className='text-sm/tight'>
          FC2ConSistemas Copyright &copy; {new Date().getFullYear()}
        </span>
        <Link href='/'> | The Blog</Link>
      </p>
    </footer>
  );
}
