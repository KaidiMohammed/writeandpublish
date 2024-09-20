import PostAdditionalInfo from "./postAdditionalInfo";

export default class Post {
  private id: string;
  private title: string;
  private content: string;
  private author: string;
  private additionalInfo: PostAdditionalInfo;

  constructor(title: string, content: string, author: string, additionalInfo: PostAdditionalInfo) {
    this.title = title;
    this.content = content;
    this.author = author;
    this.id = "";
    this.additionalInfo = additionalInfo;
  }

  public getId() {
    return this.id;
  }
  public setId(id: string) {
    this.id = id;
  }
  public getTitle() {
    return this.title;
  }
  public setTitle(title: string) {
    this.title = title;
  }
  public getContent() {
    return this.content;
  }
  public setContent(content: string) {
    this.content = content;
  }
  public getAuthor() {
    return this.author;
  }
  public setAuthor(author: string) {
    this.author = author;
  }
  public getAdditionalInfo() {
    return this.additionalInfo;
  }
  public setAdditionalInfor(additionalInfo: PostAdditionalInfo) {
    this.additionalInfo = additionalInfo;
  }
}
