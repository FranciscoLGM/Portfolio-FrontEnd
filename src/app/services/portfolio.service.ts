import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class portfolioService {
    private baseURL = `http://localhost:8080/api/v1`;

    constructor(private http: HttpClient) {}

    getData(): Observable<any> {
        return this.http.get('./assets/data/data.json');
    }

    // getPerson

    getPerson(): Observable<any> {
        return this.http.get(`${this.baseURL}/list/persons`);
    }
}
