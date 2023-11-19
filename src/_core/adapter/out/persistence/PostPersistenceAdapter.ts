import { inject, injectable } from "inversify";

import Post from "@/src/_core/application/domain/model/post";
import { PersistPostPort } from "@/src/_core/application/port/out/persistPostPort";
import { TYPES } from "@/src/_core/common/types/dependecies-types";
import type { PersistPostInDatabase } from "@/src/_core/data/interfaces/persistPostInDatabase";
import { LoadPostPort } from "@/src/_core/application/port/out/loadPostPort";
import type { LoadPostFromDatabase } from "@/src/_core/data/interfaces/loadPostFromDatabase";

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

    async loadPostById(id: number): Promise<any> {
        const posts = await this.loadPostFromDatabase.loadById(id)
        return posts;
    }

}

export { PostPersistenceAdapter }