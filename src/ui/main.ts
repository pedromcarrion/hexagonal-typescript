import IUsersPostsService from '../services/contracts/iusersposts-service';
import UsersPostsService from '../services/implementations/usersposts-service';
import IUsersRepository from '../domain/repository-contracts/iusers-repository';
import IPostsRepository from '../domain/repository-contracts/iposts-repository';
import UsersRepository from '../repositories/UsersRepository';
import PostsRepository from '../repositories/PostsRepository';


class MainUI {

  private usersPostsService: IUsersPostsService

  constructor(usersPostsService: IUsersPostsService) {
    this.usersPostsService = userPostService;
    this.renderUsers();
  }

  async renderUsers(): Promise<void> {
    const users = await this.usersPostsService.getUsersWithPosts();
    console.log('Usuarios con posts:', users);
  }


}

//Dependency injection
const usersRepository: IUsersRepository = new UsersRepository();
const postsRepository: IPostsRepository = new PostsRepository();
const userPostService = new UsersPostsService(usersRepository, postsRepository);
new MainUI(userPostService);