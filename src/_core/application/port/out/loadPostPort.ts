import Post from "../../domain/model/post";

export interface LoadPostPort {
  loadPost(): Promise<any>;
}
