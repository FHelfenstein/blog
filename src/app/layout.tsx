import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'The Blog - Este é um blog com NextJS',
  description: 'Criado por FC2Con - Sistemas ',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='pt-BR' className=''>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
