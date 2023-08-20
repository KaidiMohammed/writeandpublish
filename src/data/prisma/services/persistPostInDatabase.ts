import Post from "@/src/application/domain/model/post";
import { PersistPostInDatabase } from "../../interfaces/persistPostInDatabase";
import { injectable } from "inversify";
import { PrismaPostLib } from "../Libs/prismaPostLib";

@injectable()
class PersistPostinDatabase extends PrismaPostLib implements PersistPostInDatabase {

    async persist(post: Post): Promise<boolean> {
        const postInResult = await super.create(post);
        return postInResult !== null;
    }

}

export { PersistPostinDatabase };