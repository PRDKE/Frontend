import {Post} from "./post";

export class UserPost {
  id!: string;
  username!: string;
  posts: Array<Post>[];

  constructor() {
    this.posts = [];
  }
}
