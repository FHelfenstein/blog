import { PostModel } from '@/models/post-model';
import { IPostRepository } from './Ipost-repository';
import { resolve } from 'node:path';
import { readFile } from 'fs/promises';

const ROOT_DIR = process.cwd(); // retorna o caminho raiz da aplicação
const JSON_POSTS_FILE_PATH = resolve(
  ROOT_DIR,
  'src',
  'db',
  'seed',
  'posts.json',
);

const SIMULATE_WAIT_IN_MS = 0;

export class JsonPostRepository implements IPostRepository {
  // método findAll - recupera todos os posts
  async findAll(): Promise<PostModel[]> {
    await this.SimulateWait();

    const posts = await this.readFromDisk();
    return posts;
  }

  // método findById - recuperar apenas um post passando o Id como parâmetro
  async findById(id: string): Promise<PostModel> {
    await this.SimulateWait();

    const posts = await this.findAll();
    const post = posts.find(post => post.id === id);

    if (!post) throw new Error('Post não encontrado');

    return post;
  }

  // função que le o arquivo JSON , faz o parse e retorna um array de POSTS
  private async readFromDisk(): Promise<PostModel[]> {
    const jsonContent = await readFile(JSON_POSTS_FILE_PATH, 'utf-8');
    const parsedJson = JSON.parse(jsonContent);
    const { posts } = parsedJson;
    return posts;
  }

  // função para aguardar 5 segundos - para poder simular testes de Loading...
  private async SimulateWait() {
    if (SIMULATE_WAIT_IN_MS <= 0) return;

    await new Promise(resolve => setTimeout(resolve, SIMULATE_WAIT_IN_MS));
  }
}

// Instancia da classe
//export const postRepository: PostRepository = new JsonPostRepository();

/*
// Execução dos métodos implementados na classe
// 1º Exemplo para executar essa promise
//postRepository.findAll().then(jsonContent => console.log(jsonContent));

// 2º Exemplo para executar essa promisse
(async () => {

  const posts = await postRepository.findAll();
  posts.forEach(post => {
    console.log(post.id);
  });

  const post = await postRepository.findById(
    '99f8add4-7684-4c16-a316-616271db199e',
  );
  console.log(post);
})();

*/
