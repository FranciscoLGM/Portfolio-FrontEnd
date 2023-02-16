import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { Signin } from '../models/signin';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    private authURL = `https://portfolio-backend-1u4o.onrender.com/api/v1/auth`;

    constructor(private http: HttpClient) {}

    postSignin(signIn: Signin): Observable<JwtDto> {
        return this.http.post<JwtDto>(`${this.authURL}/signin`, signIn);
    }
}
