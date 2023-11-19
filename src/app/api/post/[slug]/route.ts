// This file is the in/web/adapter 
import { myContainer } from "@/inversify.config";
import { TYPES } from "@/src/_core/common/types/dependecies-types";
import { LoadPostUseCase } from "@/src/_core/application/port/in/loadPostUseCase";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
    try {
        const loadPostUseCase = myContainer.get<LoadPostUseCase>(TYPES.LoadPostPort);
        const posts = await loadPostUseCase.loadPost();
        return NextResponse.json(posts);
    } catch (error: any) {
        return NextResponse.json({ message: error.message ?? "Internal Error", success: false });
    }
}
