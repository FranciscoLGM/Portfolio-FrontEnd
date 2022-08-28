export class NewUser {
    userName: string;
    email: string;
    password: string;
    authorities: string[];

    constructor(
        userName: string,
        email: string,
        password: string,
        authorities: string[]
    ) {
        this.userName = userName;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    }
}
