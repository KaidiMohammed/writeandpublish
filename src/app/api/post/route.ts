// This file is the in/web/adapter 
import { myContainer } from "@/inversify.config";
import { TYPES } from "@/src/_core/common/types/dependecies-types";
import { LoadPostUseCase } from "@/src/_core/application/port/in/loadPostUseCase";
import { NextRequest, NextResponse } from "next/server";
import { PostValidator } from "@/src/_core/application/port/in/postValidator";
import { SavePostAsDraftUseCase } from "@/src/_core/application/port/in/savePostAsDraftUseCase";

export async function GET() {
    try {
        const loadPostUseCase = myContainer.get<LoadPostUseCase>(TYPES.LoadPostPort);
        const posts = await loadPostUseCase.loadPost();
        return NextResponse.json(posts);
    } catch (error: any) {
        return NextResponse.json({ message: error.message ?? "Internal Error", success: false });
    }
}

export async function POST(request: NextRequest) {
    try {
        const { post } = await request.json();
        const validPost = PostValidator.validate({ ...post });
        const savePostAsDraftUseCase = myContainer.get<SavePostAsDraftUseCase>(TYPES.SavePostAsDraftUseCase);
        const postCreated = savePostAsDraftUseCase.savePostAsDraft(validPost);
        return NextResponse.json({ success: postCreated });
    } catch (error: any) {
        return NextResponse.json({ message: error.message ?? "Internal Error", success: false });
    }
}