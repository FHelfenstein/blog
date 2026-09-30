import { PostModel } from '@/models/post-model';
import { IPostRepository } from './Ipost-repository';
import { drizzleDb } from '@/db/drizzle';

export class DrizzlePostRepository implements IPostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    console.log('\n', 'D findAllPublic', '\n');

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    console.log('\n', 'D findBySlugPublic', '\n');

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { and, eq }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error('Post não encontrado para slug');

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    console.log('\n', 'D findAll', '\n');

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    console.log('\n', 'D findBy', '\n');

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post não encontrado para ID');

    return post;
  }
}

(async () => {
  const repo = new DrizzlePostRepository();
  const posts = await repo.findAll();

  posts.forEach(post =>
    console.log(post.id, ' : ', post.title, ' - ', post.published),
  );
})();
