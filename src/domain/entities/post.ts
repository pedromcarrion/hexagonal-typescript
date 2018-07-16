class Post {
  private id: number;
  private title: string;
  private body: string;

  constructor(id: number, title: string, body: string) {
    this.id = id;
    this.title = title;
    this.body = body;
  }

  getTitle() {
    return this.title;
  }

  getBody() {
    return this.body;
  }

}

export default Post;