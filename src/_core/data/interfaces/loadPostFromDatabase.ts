import Post from "@/src/_core/application/domain/model/post";

export interface LoadPostFromDatabase {
    load(): Promise<Post[]>;
    loadById(id: number): Promise<Post[]>;
}