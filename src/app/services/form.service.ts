import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from '../models/contact';

@Injectable({
    providedIn: 'root',
})
export class FormService {
    private formURL = `https://formsubmit.co/ajax/5c8c47e90c490c56d8cd72090fb45171`;

    constructor(private http: HttpClient) {}

    // Metodo para el envío de los mensajes del form de contacto

    postForm(message: Contact): Observable<any> {
        return this.http.post(`${this.formURL}`, message);
    }
}
