import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';
import { PostCoverImage } from '@/components/PostCoverImage';
import { PostHeading } from '@/components/PostHeading';

export default async function Homepage() {
  return (
    <Container>
      <Header />
      <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
        <PostCoverImage
          linkProps={{
            href: '/post/cadastro_post',
          }}
          imageProps={{
            src: '/images/bryen_5.png',
            width: 1200,
            height: 720,
            alt: 'Título do Post Featured',
            priority: true,
          }}
        />

        <div className='flex flex-col gap-4 sm:justify-center'>
          <time
            className='text-slate-600 block text-sm/tight'
            dateTime='2026-04-20'
          >
            20/04/2026 10:00
          </time>

          <PostHeading as='h2' url='#'>
            Rerum, vel ex? Impedit ullam harum blanditiis
          </PostHeading>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In velit
            dolorem est dolor porro, doloribus neque, quidem mollitia
            doloremque, ad perspiciatis fugiat. Rerum, vel ex? Impedit ullam
            harum blanditiis mollitia?
          </p>
        </div>
      </section>

      <Suspense fallback={<SpinLoader />}>
        <PostsList />
      </Suspense>

      <Footer />
    </Container>
  );
}
