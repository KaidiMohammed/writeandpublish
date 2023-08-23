import Post from "../../domain/model/post";

export interface PersistPostPort {
  persistPost(post: Post): Promise<boolean>;
}
