import Post from "@/pages/application/domain/model/post";
import type { SavePostAsDraftUseCase } from "@/pages/application/port/in/savePostAsDraftUseCase";
import { TYPES } from "@/pages/common/types/dependecies-types";
import { injectable, inject } from 'inversify';
import "reflect-metadata";

@injectable()
class PostController {

    savePostAsDraftUseCase: SavePostAsDraftUseCase;

    constructor(@inject(TYPES.SavePostAsDraftUseCase) private savePostAsDraft: SavePostAsDraftUseCase) {
        this.savePostAsDraftUseCase = savePostAsDraft;
    }

    public createNewPost(post: Post) {
        this.savePostAsDraftUseCase.savePostAsDraft(post)
    }
}

export { PostController }