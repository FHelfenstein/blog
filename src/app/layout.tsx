import type { Metadata } from 'next';
import './theme.css';
import './globals.css';
import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'The Blog - Este é um blog com Next.js',
    template: '%s | The Blog',
  },
  description: 'Aplicativo para gerenciamento de posts. ',
};

export default function RootLayout({ children }: LayoutProps<'/'>) {
  return (
    <html lang='pt-BR' className=''>
      <body>
        <Container>
          <Header />

          {children}

          <Footer />
        </Container>
      </body>
    </html>
  );
}
