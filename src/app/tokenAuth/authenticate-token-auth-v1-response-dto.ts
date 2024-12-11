export class AuthenticateTokenAuthV1ResponseDto {
    username: string;
    bearerToken: string;
    expireInSeconds: number;

    constructor(username: string, bearerToken: string, expireInSeconds: number) {
        this.username = username;
        this.bearerToken = bearerToken;
        this.expireInSeconds = expireInSeconds;
    }

    static create(response: any) {
        return new AuthenticateTokenAuthV1ResponseDto(response.username, response.bearerToken, response.expireInSeconds);
    }
    
}
