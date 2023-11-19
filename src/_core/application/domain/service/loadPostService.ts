import "reflect-metadata";
import { LoadPostUseCase } from "../../port/in/loadPostUseCase";

import { inject, injectable } from "inversify";
import { TYPES } from "@/src/_core/common/types/dependecies-types";
import type { LoadPostPort } from "../../port/out/loadPostPort";

@injectable()
class LoadPostsService implements LoadPostUseCase {

    @inject(TYPES.LoadPostFromDatabase)
    private loadPostPort!: LoadPostPort;

    loadPost(): Promise<any> {
        const posts = this.loadPostPort.loadPost();
        return Promise.resolve(posts);
    }

    loadPostById(id: number): Promise<any> {
        const posts = this.loadPostPort.loadPostById(id);
        return Promise.resolve(posts);
    }
}

export { LoadPostsService }