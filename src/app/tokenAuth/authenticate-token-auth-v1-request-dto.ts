export class AuthenticateTokenAuthV1RequestDto {
    username: string;
    password: string;
    expireInSeconds: number;

    constructor(username: string, password: string, expireInSeconds: number) {
        this.username = username;
        this.password = password;
        this.expireInSeconds = expireInSeconds;
    }

    static create(username: string, password: string) {
        return new AuthenticateTokenAuthV1RequestDto(username, password, 100000);
    }
}
