// This file is the in/web/adapter 

import { NextApiRequest, NextApiResponse } from "next";

import { myContainer } from "@/inversify.config";
import { GET } from "@/pages/common/Http/verb";
import { TYPES } from "@/pages/common/types/dependecies-types";
import { METHOD_NOT_ALLOWED } from "@/pages/common/errorManagement/errorCode";
import { LoadPostUseCase } from "@/pages/application/port/in/loadPostUseCase";

export default async function handler({ body: { post }, ...req }: NextApiRequest, res: NextApiResponse) {
    if (req.method !== GET) {
        res.status(METHOD_NOT_ALLOWED.errorCode).json({ message: METHOD_NOT_ALLOWED.message })
    }

    try {
        const loadPostUseCase = myContainer.get<LoadPostUseCase>(TYPES.LoadPostPort);
        const posts = await loadPostUseCase.loadPost();
        res.status(200).json(posts);
    } catch (error: any) {
        res.status(error.status ?? 500).json({ message: error.message ?? "Internal Error" });
    }

}