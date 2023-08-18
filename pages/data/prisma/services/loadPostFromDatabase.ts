import Post from "@/pages/application/domain/model/post";
import { injectable } from "inversify";
import { PrismaClient } from "../client/prismaClient";
import { LoadPostFromDatabase } from "../../interfaces/loadPostFromDatabase";

@injectable()
class LoadPostsFromDatabase extends PrismaClient implements LoadPostFromDatabase {

    async load(): Promise<any> {
        const postInResult = await super.find();
        return postInResult;
    }
}

export { LoadPostsFromDatabase };