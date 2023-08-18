import { inject, injectable } from "inversify";

import Post from "@/pages/application/domain/model/post";
import { PersistPostPort } from "@/pages/application/port/out/persistPostPort";
import { TYPES } from "@/pages/common/types/dependecies-types";
import type { PersistPostInDatabase } from "@/pages/data/interfaces/persistPostInDatabase";
import { LoadPostPort } from "@/pages/application/port/out/loadPostPort";
import type { LoadPostFromDatabase } from "@/pages/data/interfaces/loadPostFromDatabase";

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