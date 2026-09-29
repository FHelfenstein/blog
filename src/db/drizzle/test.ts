import { drizzleDb } from './';
import { postsTable } from './schemas';

(async () => {
  const posts = await drizzleDb.select().from(postsTable);

  //console.log(posts);
  console.log();
  console.log('Listagem de posts');
  posts.forEach(post => {
    console.log(post.title);
  });
})();
