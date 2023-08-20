import Post from "../../domain/model/post";

export interface SavePostAsDraftUseCase {
  savePostAsDraft(post: Post): Promise<boolean>;
}
