import { PostController } from "@/pages/adapter/in/web/newPostController";
import Post from "@/pages/application/domain/model/post";
import { SavePostAsDraftService } from "@/pages/application/domain/service/savePostAsDraftService";
import { SavePostAsDraftUseCase } from "@/pages/application/port/in/savePostAsDraftUseCase";
import { Http2ServerResponse } from "http2";

export default function handler(req: Request, res: any) {
  if (req.method != "POST") {
    res.status(405).json({ "message": "method not allowed" })
  }
  else {
    const post: any = req.body;


    const savePostAsDraf: SavePostAsDraftUseCase = new SavePostAsDraftService()
    new PostController(savePostAsDraf)
    res.status(200).json(post);
  }
}
