import { PostModel } from '@/models/post-model';

export interface IPostRepository {
  findAll(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}
