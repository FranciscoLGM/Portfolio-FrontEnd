import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { NewUser } from '../models/new-user';
import { Signin } from '../models/signin';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private authURL = `https://portfolio-yo-programo2.herokuapp.com/api/v1/auth`;

    constructor(private http: HttpClient) {}

    postUser(newUser: NewUser): Observable<any> {
        return this.http.post(`${this.authURL}/new/user`, newUser);
    }

    postSignin(signIn: Signin): Observable<JwtDto> {
        return this.http.post<JwtDto>(`${this.authURL}/signin`, signIn);
    }
}
