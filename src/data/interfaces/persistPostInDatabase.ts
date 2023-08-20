import Post from "@/src/application/domain/model/post";

export interface PersistPostInDatabase {
    persist(post: Post): Promise<boolean>;
}