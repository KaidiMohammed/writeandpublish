import { inject, injectable } from "inversify";

import Post from "@/src/application/domain/model/post";
import { PersistPostPort } from "@/src/application/port/out/persistPostPort";
import { TYPES } from "@/src/common/types/dependecies-types";
import type { PersistPostInDatabase } from "@/src/data/interfaces/persistPostInDatabase";
import { LoadPostPort } from "@/src/application/port/out/loadPostPort";
import type { LoadPostFromDatabase } from "@/src/data/interfaces/loadPostFromDatabase";

@injectable()
class PostPersistenceAdapter implements PersistPostPort, LoadPostPort {

    @inject(TYPES.PersistPostInDatabase)
    private persistPostInDatabase!: PersistPostInDatabase;

    @inject(TYPES.LoadPostFromDatabase)
    private loadPostFromDatabase!: LoadPostFromDatabase;

    persistPost(post: Post): Promise<boolean> {
        return this.persistPostInDatabase.persist(post);
    }

    async loadPost(): Promise<any> {
        const posts = await this.loadPostFromDatabase.load()
        return posts;
    }

}

export { PostPersistenceAdapter }