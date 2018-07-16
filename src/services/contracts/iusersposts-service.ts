import User from '../../domain/entities/user';

interface IUsersPostsService {
  getUsersWithPosts(): Promise<Array<User>>
}


export default IUsersPostsService;