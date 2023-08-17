import Post from "./../../domain/model/post";

export interface LoadPost {
  loadPost(post: Post): Promise<Post[]>;
}
