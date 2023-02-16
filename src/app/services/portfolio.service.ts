import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Certification } from '../models/certification';
import { Education } from '../models/education';
import { Expertise } from '../models/expertise';
import { Person } from '../models/person';
import { Project } from '../models/project';
import { Skill } from '../models/skill';

@Injectable({
    providedIn: 'root',
})
export class portfolioService {
    private baseURL = `https://portfolio-backend-1u4o.onrender.com/api/v1`;

    constructor(private http: HttpClient) {}

    // Metodos para crear un nuevo registro

    postPerson(person: Person): Observable<any> {
        return this.http.post(`${this.baseURL}/new/person`, person);
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

    postSkill(skill: Skill): Observable<any> {
        return this.http.post(`${this.baseURL}/new/skill`, skill);
    }

    postProject(project: Project): Observable<any> {
        return this.http.post(`${this.baseURL}/new/project`, project);
    }

    // Metodos para obtener todos los registros

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

    // Metodos para obtener un registro por id

    getPersonById(id: string): Observable<any> {
        return this.http.get(`${this.baseURL}/find/person/${id}`);
    }

    getExpertiseById(id: string): Observable<any> {
        return this.http.get(`${this.baseURL}/find/expertise/${id}`);
    }

    getEducationById(id: string): Observable<any> {
        return this.http.get(`${this.baseURL}/find/education/${id}`);
    }

    getCertificationById(id: string): Observable<any> {
        return this.http.get(`${this.baseURL}/find/certification/${id}`);
    }

    getSkillById(id: string): Observable<any> {
        return this.http.get(`${this.baseURL}/find/skill/${id}`);
    }

    getProjectById(id: string): Observable<any> {
        return this.http.get(`${this.baseURL}/find/project/${id}`);
    }

    // Metodos para actualizar un registro

    putPerson(person: Person): Observable<any> {
        return this.http.put(`${this.baseURL}/update/person`, person);
    }

    putExpertise(expertise: Expertise): Observable<any> {
        return this.http.put(`${this.baseURL}/update/expertise`, expertise);
    }

    putEducation(education: Education): Observable<any> {
        return this.http.put(`${this.baseURL}/update/education`, education);
    }

    putCertification(certification: Certification): Observable<any> {
        return this.http.put(
            `${this.baseURL}/update/certification`,
            certification
        );
    }

    putSkill(skill: Skill): Observable<any> {
        return this.http.put(`${this.baseURL}/update/skill`, skill);
    }

    putProject(project: Project): Observable<any> {
        return this.http.put(`${this.baseURL}/update/project`, project);
    }

    // Metodos para eliminar un registro

    deletePerson(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}/delete/person/${id}`);
    }

    deleteExpertise(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}/delete/expertise/${id}`);
    }

    deleteEducation(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}/delete/education/${id}`);
    }

    deleteCertification(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}/delete/certification/${id}`);
    }

    deleteSkill(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}/delete/skill/${id}`);
    }

    deleteProject(id: string): Observable<any> {
        return this.http.delete(`${this.baseURL}/delete/project/${id}`);
    }
}
