import Post from "@/pages/application/domain/model/post";
import { PersistPostInDatabase } from "../../interfaces/persistPostInDatabase";
import { injectable } from "inversify";
import { PrismaClient } from "../client/prismaClient";

@injectable()
class PersistPostinDatabase extends PrismaClient implements PersistPostInDatabase {

    async persist(post: Post): Promise<boolean> {
        const postInResult = await super.createPost(post);
        return postInResult !== null;
    }

}

export { PersistPostinDatabase };