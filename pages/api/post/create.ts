// This file is the in/web/adapter 

import { NextApiRequest, NextApiResponse } from "next";

import { SavePostAsDraftUseCase } from "@/src/application/port/in/savePostAsDraftUseCase";
import { myContainer } from "@/inversify.config";
import { POST } from "@/src/common/Http/verb";
import { TYPES } from "@/src/common/types/dependecies-types";
import { METHOD_NOT_ALLOWED } from "@/src/common/errorManagement/errorCode";
import { PostValidator } from "@/src/application/port/in/postValidator";

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