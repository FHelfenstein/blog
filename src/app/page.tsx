import { postRepository } from '@/repositories/post';

export default async function Homepage() {
  const posts = await postRepository.findAll();

  return (
    <div>
      <header className='text-6xl font-bold text-center py-8'>
        AQUI É O HEADER
      </header>
      {posts &&
        posts.map(post => {
          return <p key={post.id}>{post.title}</p>;
        })}
      <footer className='text-6xl font-bold text-center py-8'>FOOTER</footer>
    </div>
  );
}
