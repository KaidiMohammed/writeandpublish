import BadRequestException from "@/pages/common/errorManagement/exceptions/badRequestException";
import { BAD_REQUEST } from "@/pages/common/errorManagement/errorCode";
import Post from "../../domain/model/post";


export class SavePostCommand {

    public post: Post;
    constructor(post: Post) {
        const isPostContentIsValid = post.getAuthor() && post?.getTitle() && post?.getContent();
        if (!isPostContentIsValid) {
            throw new BadRequestException(BAD_REQUEST.errorCode, BAD_REQUEST.message);
        }
        this.post = post;
    }
}