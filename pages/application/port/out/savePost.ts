import Post from "./../../domain/model/post";

export interface SavePost {
  savePost(post: Post): Promise<boolean>;
}
