export function Footer() {
  return (
    <footer>
      <p className='text-sm[8px] text-slate-600 font-semibold text-center py-8'>
        <strong>The Blog - FC2ConSistemas</strong> &copy;{' '}
        {new Date().getFullYear()} - Todos os direitos reservados.
      </p>
    </footer>
  );
}
