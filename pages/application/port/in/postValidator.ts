import Post from "../../domain/model/post";
import BadRequestException from "@/pages/common/errorManagement/exceptions/badRequestException";
import { BAD_REQUEST } from "@/pages/common/errorManagement/errorCode";

export class PostValidator {

    public static validate({ title, content, author }: any): Post {

        const post = new Post(title, content, author)
        const isPostContentIsValid = post.getAuthor() && post.getTitle() && post.getContent();
        if (!isPostContentIsValid) {
            throw new BadRequestException(BAD_REQUEST.errorCode, BAD_REQUEST.message);
        }
        return post;
    }
}