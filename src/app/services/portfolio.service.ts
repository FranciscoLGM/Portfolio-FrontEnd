import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification } from '../models/certification';
import { Education } from '../models/education';
import { Expertise } from '../models/expertise';
import { Project } from '../models/project';
import { Skill } from '../models/skill';

@Injectable({
    providedIn: 'root',
})
export class portfolioService {
    private baseURL = `http://localhost:8080/api/v1`;

    constructor(private http: HttpClient) {}

    // Metodos para crear un nuevo registro

    postSkill(skill: Skill): Observable<any> {
        return this.http.post(`${this.baseURL}/new/skill`, skill);
    }

    postExpertise(expertise: Expertise): Observable<any> {
        return this.http.post(`${this.baseURL}/new/expertise`, expertise);
    }

    postEducation(education: Education): Observable<any> {
        return this.http.post(`${this.baseURL}/new/education`, education);
    }

    postCertification(certification: Certification): Observable<any> {
        return this.http.post(
            `${this.baseURL}/new/certification`,
            certification
        );
    }

    postProject(project: Project): Observable<any> {
        return this.http.post(`${this.baseURL}/new/project`, project);
    }

    // Metodos para listar todos los registros

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
