import IUsersPostsService from '../contracts/iusersposts-service';
import IUsersRepository from '../../domain/repository-contracts/iusers-repository';
import IPostsRepository from '../../domain/repository-contracts/iposts-repository';
import User from '../../domain/entities/user';

class UsersPostsService implements IUsersPostsService {




  private usersRepository: IUsersRepository;
  private postsRepository: IPostsRepository;

  constructor(usersRepository: IUsersRepository, postsRepository: IPostsRepository) {
    this.usersRepository = usersRepository;
    this.postsRepository = postsRepository;

  }


  async getUsersWithPosts(): Promise<User[]> {
    const users = await this.usersRepository.getUsers();
    users.forEach(async (user) => {
      const posts = await this.postsRepository.getPosts(user.getId());
      user.setPosts(posts);
    });

    return users;
  }



}


export default UsersPostsService;