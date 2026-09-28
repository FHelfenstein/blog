import { findAllPublicPostsCached } from '@/lib/post/queries';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import { createImageSrc } from '@/utils/create-image-src';

export async function PostFeatured() {
  const posts = await findAllPublicPostsCached();
  const post = posts[0]; // retorna o primeiro post
  const postLink = `/post/${post.slug}`;

  return (
    <section className='grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group'>
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          src: createImageSrc(post.coverImageUrl),
          width: 1200,
          height: 720,
          alt: post.title,
          priority: true,
        }}
      />

      <PostSummary
        postHeading='h1'
        postLink={postLink}
        createdAt={post.createdAt}
        title={post.title}
        excerpt={post.excerpt}
      />
    </section>
  );
}
