import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';

export function PostFeatured() {
  const slug = '';
  const postLink = `/post/${slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          src: '/images/bryen_5.png',
          width: 1200,
          height: 720,
          alt: 'Título do Post Featured',
          priority: true,
        }}
      />

      <PostSummary
        postHeading='h1'
        postLink={postLink}
        createdAt={'2026-04-08T00:24:38.616Z'}
        title={'Rotina matinal de pessoas altamente eficazes'}
        excerpt={
          '"O Next.js também é uma boa escolha para quem quer se preocupar com performance e SEO.'
        }
      />
    </section>
  );
}
