export default class Post {
  private id: string;
  private title: string;
  private content: string;
  private author: string;

  constructor(title: string, content: string, author: string) {
    this.title = title;
    this.content = content;
    this.author = author;
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
}
