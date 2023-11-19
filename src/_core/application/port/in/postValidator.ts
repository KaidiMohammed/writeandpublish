import Post from "../../domain/model/post";
import BadRequestException from "./../../../common/errorManagement/exceptions/badRequestException";
import { BAD_REQUEST } from "./../../../common/errorManagement/errorCode";

export class PostValidator {

    public static validate({ title, content, author, ...aditionalPostInfo }: any): Post {

        const post = new Post(title, content, author, aditionalPostInfo)
        const isPostContentIsValid = post.getAuthor() && post.getTitle() && post.getContent();
        if (!isPostContentIsValid) {
            throw new BadRequestException(BAD_REQUEST.errorCode, BAD_REQUEST.message);
        }
        return post;
    }
}