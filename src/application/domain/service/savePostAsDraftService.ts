import "reflect-metadata";
import { SavePostAsDraftUseCase } from "../../port/in/savePostAsDraftUseCase";

import Post from "../model/post";
import { inject, injectable } from "inversify";
import type { PersistPostPort } from "../../port/out/persistPostPort";
import { TYPES } from "@/src/common/types/dependecies-types";

@injectable()
class SavePostAsDraftService implements SavePostAsDraftUseCase {

    @inject(TYPES.SavePostPort)
    private persistPostPort!: PersistPostPort;

    savePostAsDraft(post: Post): Promise<boolean> {
        this.persistPostPort.persistPost(post);
        return Promise.resolve(true);
    }
}

export { SavePostAsDraftService }