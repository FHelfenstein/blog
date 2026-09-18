import { JsonPostRepository } from './json-post-repository';
import { IPostRepository } from './Ipost-repository';

export const postRepository: IPostRepository = new JsonPostRepository();
