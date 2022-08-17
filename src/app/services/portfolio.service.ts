import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';

@Injectable({
    providedIn: 'root',
})
export class portfolioService {
    private baseURL = `http://localhost:8080/api/v1`;

    constructor(private http: HttpClient) {}

    getPerson(): Observable<any> {
        return this.http.get(`${this.baseURL}/list/persons`);
    }

    getExpertise(): Observable<any> {
        return this.http.get(`${this.baseURL}/list/expertises`);
    }

    getEducation(): Observable<any> {
        return this.http.get(`${this.baseURL}/list/educations`);
    }

    getCertification(): Observable<any> {
        return this.http.get(`${this.baseURL}/list/certifications`);
    }

    getSkill(): Observable<any> {
        return this.http.get(`${this.baseURL}/list/skills`);
    }

    getProject(): Observable<any> {
        return this.http.get(`${this.baseURL}/list/projects`);
    }
}
