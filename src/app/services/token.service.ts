import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USERNAME_KEY = 'auth-userName';
const AUTHORITIES_KEY = 'auth-authorities';

@Injectable({
    providedIn: 'root',
})
export class TokenService {
    roles: Array<string> = [];
    constructor() {}

    public setToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY);
        window.sessionStorage.setItem(TOKEN_KEY, token);
    }

    public getToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY);
    }

    public setUserName(userName: string): void {
        window.sessionStorage.removeItem(USERNAME_KEY);
        window.sessionStorage.setItem(USERNAME_KEY, userName);
    }

    public getUsername(): string | null {
        return window.sessionStorage.getItem(USERNAME_KEY);
    }

    public setAuthorities(authorities: string[]): void {
        window.sessionStorage.removeItem(AUTHORITIES_KEY);
        window.sessionStorage.setItem(
            AUTHORITIES_KEY,
            JSON.stringify(authorities)
        );
    }

    public getAuthotities(): string[] {
        this.roles = [];
        if (sessionStorage.getItem(AUTHORITIES_KEY)) {
            JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)!).forEach(
                (authority: any) => {
                    this.roles.push(authority.authority);
                }
            );
        }
        return this.roles;
    }

    public signOut(): void {
        window.sessionStorage.clear();
    }
}
