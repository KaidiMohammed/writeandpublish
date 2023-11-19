import Post from "../../domain/model/post";

export interface LoadPostUseCase {
    loadPost(): Promise<any>;
    loadPostById(id: number): Promise<any>;
}
