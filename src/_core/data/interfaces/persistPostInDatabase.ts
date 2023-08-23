import Post from "@/src/_core/application/domain/model/post";

export interface PersistPostInDatabase {
    persist(post: Post): Promise<boolean>;
}