import IUsersRepository from '../domain/repository-contracts/iusers-repository';
import User from '../domain/entities/user';

class UsersRepository implements IUsersRepository {



  async getUsers(): Promise<Array<User>> {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    const users: Array<User> = json.map(u => new User(u.id, u.name, u.username, u.email));
    return users;
  }
}

export default UsersRepository;