import styles from './styles.module.css';

export function Footer() {
  return (
    <footer>
      <a href='#' className={styles.footer}>
        The Blog - FC2ConSistemas &copy; {new Date().getFullYear()} - Todos os
        direitos reservados.
      </a>
    </footer>
  );
}

/*className='text-sm[8px] text-slate-600 font-semibold text-center py-8'*/
