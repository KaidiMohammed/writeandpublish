import { PrismaClient as PrismaClientLib } from '@prisma/client';
import Post from "@/src/application/domain/model/post";
import { injectable } from 'inversify';

@injectable()
class PrismaClient {

    protected prismaClient: PrismaClientLib;

    constructor() {
        this.prismaClient = new PrismaClientLib()
    }

    public async createPost(post: Post) {
        return await this.prismaClient.post.create({
            data: {
                title: post.getTitle(),
                content: post.getContent(),
                author: post.getAuthor(),
            },
        })
    }

    public async find() {
        const postInResult = await this.prismaClient.post.findMany();
        return postInResult;
    }
}

export { PrismaClient }