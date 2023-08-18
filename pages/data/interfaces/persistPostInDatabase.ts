import Post from "@/pages/application/domain/model/post";

export interface PersistPostInDatabase {
    persist(post: Post): Promise<boolean>;
}