// This file is the in/web/adapter 

import { NextApiRequest, NextApiResponse } from "next";

import { SavePostAsDraftUseCase } from "@/pages/application/port/in/savePostAsDraftUseCase";
import { myContainer } from "@/inversify.config";
import { POST } from "@/pages/common/Http/verb";
import { TYPES } from "@/pages/common/types/dependecies-types";
import { METHOD_NOT_ALLOWED } from "@/pages/common/errorManagement/errorCode";
import { PostValidator } from "@/pages/application/port/in/postValidator";

export default function handler({ body: { post }, ...req }: NextApiRequest, res: NextApiResponse) {
  if (req.method !== POST) {
    res.status(METHOD_NOT_ALLOWED.errorCode).json({ message: METHOD_NOT_ALLOWED.message })
  }

  try {
    const validPost = PostValidator.validate({ ...post });
    const savePostAsDraftUseCase = myContainer.get<SavePostAsDraftUseCase>(TYPES.SavePostAsDraftUseCase);
    savePostAsDraftUseCase.savePostAsDraft(validPost);

    res.status(200).json(validPost);
  } catch (error: any) {
    res.status(error.status ?? 500).json({ message: error.message ?? "Internal Error" });
  }

}