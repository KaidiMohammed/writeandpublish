import { SavePostAsDraftUseCase } from "../../port/in/savePostAsDraftUseCase";
import "reflect-metadata";

import Post from "../model/post";
import { injectable } from "inversify";

@injectable()
class SavePostAsDraftService implements SavePostAsDraftUseCase {

    savePostAsDraft(post: Post): Promise<boolean> {
        return Promise.resolve(true);
    }

}

export { SavePostAsDraftService }