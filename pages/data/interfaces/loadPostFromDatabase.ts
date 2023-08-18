import Post from "@/pages/application/domain/model/post";

export interface LoadPostFromDatabase {
    load(): Promise<Post[]>;
}