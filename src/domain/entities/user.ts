import Post from './post';

class User {
  private id: number;
  private name: string;
  private username: string;
  private email: string;
  private posts: Array<Post>

  constructor(id: number, name: string, username: string, email: string) {
    this.id = id;
    this.name = name;
    this.username = username;
    this.email = email;
    this.posts = new Array<Post>();
  }

  getId(): number {
    return this.id;
  }

  setPosts(posts: Array<Post>) {
    this.posts = posts;
  }
}

export default User;