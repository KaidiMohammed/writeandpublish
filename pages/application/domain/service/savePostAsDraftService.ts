import { SavePostAsDraftUseCase } from "../../port/in/savePostAsDraftUseCase";
import "reflect-metadata";

import Post from "../model/post";

class SavePostAsDraftService implements SavePostAsDraftUseCase {

    savePostAsDraft(post: Post): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}

export { SavePostAsDraftService }