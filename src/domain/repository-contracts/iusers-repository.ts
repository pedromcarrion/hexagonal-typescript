import User from '../entities/user';


interface IUsersRepository {
  getUsers(): Promise<Array<User>>

}

export default IUsersRepository;