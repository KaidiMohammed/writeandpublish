import { inject, injectable } from "inversify";
import { LoadPostFromDatabase } from "../../interfaces/loadPostFromDatabase";
import { PrismaPostLib } from "../Libs/prismaPostLib";
import Post from "@/src/_core/application/domain/model/post";

@injectable()
class LoadPostsFromDatabase extends PrismaPostLib implements LoadPostFromDatabase {

    async load(): Promise<any> {
        const postInResult = await super.find();
        return postInResult;
    }

    async loadById(id: number): Promise<any> {
        const postInResult = await super.findById(id);
        return postInResult;
    }

}

export { LoadPostsFromDatabase };


