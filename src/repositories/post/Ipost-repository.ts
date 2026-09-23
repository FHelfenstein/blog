import { PostModel } from '@/models/post-model';

export interface IPostRepository {
  findAllPublic(): Promise<PostModel[]>;
  findById(id: string): Promise<PostModel>;
}
