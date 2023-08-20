import Post from "../../domain/model/post";

export interface PublishPostUseCase {
  publishPost(post: Post): Promise<boolean>;
}
