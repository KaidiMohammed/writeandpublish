import Post from "@/src/application/domain/model/post";

export interface LoadPostFromDatabase {
    load(): Promise<Post[]>;
}