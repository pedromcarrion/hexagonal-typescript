import IPostsRepository from '../domain/repository-contracts/iposts-repository';
import Post from '../domain/entities/post';

class PostsRepository implements IPostsRepository {


  async getPosts(id: number): Promise<Array<Post>> {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const json = await response.json();

    return json.filter(p => p.userId == id)
      .map(p => new Post(p.id, p.title, p.body));
  }
}

export default PostsRepository;

