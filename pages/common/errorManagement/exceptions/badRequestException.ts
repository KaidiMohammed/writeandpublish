export default class BadRequestException extends Error {
    public status: number;
    public message: string;

    constructor(status: number, message: string) {
        super(message);
        Object.setPrototypeOf(this, BadRequestException.prototype);
        this.message = message;
        this.status = status;
    }
}