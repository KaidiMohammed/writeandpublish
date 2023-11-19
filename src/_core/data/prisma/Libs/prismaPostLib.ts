import Post from "@/src/_core/application/domain/model/post";
import { PrismaClienSingleton } from "../generic/client/prismaClient";
import { PrismaClient } from "@prisma/client";
import { injectable } from "inversify";
import { PrismaDataAccess } from "../generic/Libs/interfaces/prismaDataAccess";

@injectable()
class PrismaPostLib implements PrismaDataAccess<Post> {

    private prismaClient: PrismaClient;
    constructor() {
        this.prismaClient = PrismaClienSingleton.getInstance().prismaClient;
    }

    public async create(post: Post) {
        return await this.prismaClient.post.create({
            data: {
                title: post.getTitle(),
                content: post.getContent(),
                author: post.getAuthor(),
                //@ts-ignore
                additionalInfo: post.getAdditionalInfo()
            },
        })
    }

    public async find() {
        const postInResult = await this.prismaClient.post.findMany();
        return postInResult;
    }
}

export { PrismaPostLib }