export default class PostAdditionalInfo {
    private publishDate: Date;
    private updateDate: Date;
    private authorProfilePicture: string;

    constructor(publishDate: Date, updateDate: Date, authorProfilePicture: string) {
        this.publishDate = publishDate;
        this.updateDate = updateDate;
        this.authorProfilePicture = authorProfilePicture;
    }

    public getPublishDate() {
        return this.publishDate;
    }
    public setPublishDate(publishDate: Date) {
        this.publishDate = publishDate;
    }
    public getUpdateDate() {
        return this.updateDate;
    }
    public setUpdateDate(updateDate: Date) {
        this.updateDate = updateDate;
    }
    public getAuthorProfilePicture() {
        return this.authorProfilePicture;
    }
    public setAuthorProfilePicture(authorProfilePicture: string) {
        this.authorProfilePicture = authorProfilePicture;
    }
}
