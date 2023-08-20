import { inject, injectable } from "inversify";
import { LoadPostFromDatabase } from "../../interfaces/loadPostFromDatabase";
import { PrismaPostLib } from "../Libs/prismaPostLib";

@injectable()
class LoadPostsFromDatabase extends PrismaPostLib implements LoadPostFromDatabase {

    async load(): Promise<any> {
        const postInResult = await super.find();
        return postInResult;
    }
}

export { LoadPostsFromDatabase };


