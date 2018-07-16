import Post from '../entities/post';

interface IPostsRepository {
  getPosts(id: number): Promise<Array<Post>>;
}

export default IPostsRepository;