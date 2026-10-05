import { PostModel } from '@/models/post-model';
import { IPostRepository } from './Ipost-repository';
import { drizzleDb } from '@/db/drizzle';
import { logColor } from '@/utils/log-color';
import { asyncDelay } from '@/utils/async-delay';
import { SIMULATE_WAIT_IN_MS } from '@/lib/constants';

export class DrizzlePostRepository implements IPostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('findAllPublic', Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('findBySlugPublic', Date.now());

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { and, eq }) =>
        and(eq(posts.published, true), eq(posts.slug, slug)),
    });

    if (!post) throw new Error(`Post não encontrado para slug ${slug}`);

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('findAll', Date.now());

    const posts = await drizzleDb.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }

  async findById(id: string): Promise<PostModel> {
    //console.log('\n', 'Drizzle findById', '\n');
    await asyncDelay(SIMULATE_WAIT_IN_MS, true);
    logColor('findById', Date.now());

    const post = await drizzleDb.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error(`Post não encontrado para ID ${id}`);

    return post;
  }
}

// (async () => {
//   const repo = new DrizzlePostRepository();
//   const posts = await repo.findAll();

//   posts.forEach(post =>
//     console.log(post.id, ' : ', post.title, ' - ', post.published),
//   );
// })();
