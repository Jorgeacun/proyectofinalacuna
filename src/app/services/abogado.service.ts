import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { abogadoModel } from '../model/abogado.model';
@Injectable({
  providedIn: 'root'
})
export class AbogadoService {

  constructor(private http: HttpClient) { }

  getabogado(): Observable<any> {
    const url = "https://proyectacuna.herokuapp.com/api/abogados"
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE3NmU0NDAwMWM4NTE3OTg0NWQ1ZmIiLCJpYXQiOjE2MDY3ODUyMjAsImV4cCI6MTYwNjgyODQyMH0.8788WUt05yLlXwlqK9Q6dWKbkq83QqL2lqWqQcv4s0M'

    });

    return this.http.get(url, { headers })
    .pipe(map(data => {
      return Object.values(data);
    }));
  }

  postabogado(model: abogadoModel) : Observable<any> {
    const url = "https://proyectacuna.herokuapp.com/api/abogados"
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE3NmU0NDAwMWM4NTE3OTg0NWQ1ZmIiLCJpYXQiOjE2MDY3ODUyMjAsImV4cCI6MTYwNjgyODQyMH0.8788WUt05yLlXwlqK9Q6dWKbkq83QqL2lqWqQcv4s0M'

    });
  
    return this.http.post(url, model, { headers })
    .pipe(
      map((res:any) => {
        return Object.values(res);
      })
    );
    
  }
  putabogado(model: abogadoModel) : Observable<any> {
    const url = "https://proyectacuna.herokuapp.com/api/abogados"
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE3NmU0NDAwMWM4NTE3OTg0NWQ1ZmIiLCJpYXQiOjE2MDY3ODUyMjAsImV4cCI6MTYwNjgyODQyMH0.8788WUt05yLlXwlqK9Q6dWKbkq83QqL2lqWqQcv4s0M'

    });
    const abogadotemp = {
      ...model
    };
    delete abogadotemp._id;
    return this.http.put(`https://proyectacuna.herokuapp.com/api/abogados/${model._id}`, model, { headers });
    
  }

  Deleteabogado(id:any) : Observable<any> {
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE3NmU0NDAwMWM4NTE3OTg0NWQ1ZmIiLCJpYXQiOjE2MDY3ODUyMjAsImV4cCI6MTYwNjgyODQyMH0.8788WUt05yLlXwlqK9Q6dWKbkq83QqL2lqWqQcv4s0M'
      
    });
   
    return this.http.delete(`https://proyectacuna.herokuapp.com/api/abogados/${id}`, { headers });
    
  }
}
