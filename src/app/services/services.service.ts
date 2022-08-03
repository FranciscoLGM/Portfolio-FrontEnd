import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  getdata():Observable<any>{
    return this.http.get('./assets/data/data.json'); // get data from API
    
  }
}
