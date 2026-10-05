import { findAllPostAdmin } from '@/lib/post/queries/admin';

export default async function PostsListAdmin() {
  const posts = await findAllPostAdmin();

  return (
    <div className='py-16 text-sm/tight font-semibold'>
      {posts.map(post => {
        return <p key={post.id}>{post.title}</p>;
      })}
    </div>
  );
}
