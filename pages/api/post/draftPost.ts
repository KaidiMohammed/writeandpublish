import { NextApiRequest, NextApiResponse } from "next";

import Post from "@/pages/application/domain/model/post";
import { SavePostAsDraftUseCase } from "@/pages/application/port/in/savePostAsDraftUseCase";
import { myContainer } from "@/inversify.config";
import { POST } from "@/pages/common/Http/verb";
import { TYPES } from "@/pages/common/types/dependecies-types";
import { METHOD_NOT_ALLOWED } from "@/pages/common/errorManagement/errorCode";
import { SavePostCommand } from "@/pages/application/port/in/savePostCommand";

export default function handler({ body: { post }, ...req }: NextApiRequest, res: NextApiResponse) {
  if (req.method !== POST) {
    res.status(METHOD_NOT_ALLOWED.errorCode).json({ message: METHOD_NOT_ALLOWED.message })
  }

  try {
    let postFrom = new Post(post.title, post.content, post.author);
    const validPostCommand = new SavePostCommand(postFrom);
    const savePostAsDraftUseCase = myContainer.get<SavePostAsDraftUseCase>(TYPES.SavePostAsDraftUseCase);
    savePostAsDraftUseCase.savePostAsDraft(validPostCommand.post);
    res.status(200).json(validPostCommand);
  } catch (error: any) {
    res.status(error.status ?? 500).json({ message: error.message ?? "Internal Error" });
  }

}