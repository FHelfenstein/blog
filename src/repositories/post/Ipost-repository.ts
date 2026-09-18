import { PostModel } from '@/app/post/post-model';

export interface IPostRepository {
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}
