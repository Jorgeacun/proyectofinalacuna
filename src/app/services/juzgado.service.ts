import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JuzgadoModel } from '../model/juzgado.model';
@Injectable({
  providedIn: 'root'
})
export class JuzgadoService {

  constructor(private http: HttpClient) { }


  getJuzgado(): Observable<any> {
    const url = "https://proyectacuna.herokuapp.com/api/juzgados"
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE3NmU0NDAwMWM4NTE3OTg0NWQ1ZmIiLCJpYXQiOjE2MDY3ODUyMjAsImV4cCI6MTYwNjgyODQyMH0.8788WUt05yLlXwlqK9Q6dWKbkq83QqL2lqWqQcv4s0M'

    });

    return this.http.get(url, { headers })
    .pipe(map(data => {
      return Object.values(data);
    }));
  }

  postaJuzgado(model: JuzgadoModel) : Observable<any> {
    const url = "https://proyectacuna.herokuapp.com/api/juzgados"
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE3NmU0NDAwMWM4NTE3OTg0NWQ1ZmIiLCJpYXQiOjE2MDY3ODUyMjAsImV4cCI6MTYwNjgyODQyMH0.8788WUt05yLlXwlqK9Q6dWKbkq83QqL2lqWqQcv4s0M'

    });
    const juzgadoTem = {
      ...model
    };
    delete juzgadoTem._id;

    return this.http.post(url, juzgadoTem, { headers })
    .pipe(
      map((res:any) => {
          model._id = res.name;
        return model;
      })
    );
    
  }
  putJuzgado(model: JuzgadoModel) : Observable<any> {
    const url = "https://proyectacuna.herokuapp.com/api/juzgados"
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE3NmU0NDAwMWM4NTE3OTg0NWQ1ZmIiLCJpYXQiOjE2MDY3ODUyMjAsImV4cCI6MTYwNjgyODQyMH0.8788WUt05yLlXwlqK9Q6dWKbkq83QqL2lqWqQcv4s0M'

    });
    const juzgadoTem = {
      ...model
    };
    delete juzgadoTem._id;
    return this.http.put(`https://proyectacuna.herokuapp.com/api/juzgados/${model._id}`, model, { headers });
    
  }

  DeleteJuzgado(id:any) : Observable<any> {
    const headers = new HttpHeaders({
      'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI1ZmE3NmU0NDAwMWM4NTE3OTg0NWQ1ZmIiLCJpYXQiOjE2MDY3ODUyMjAsImV4cCI6MTYwNjgyODQyMH0.8788WUt05yLlXwlqK9Q6dWKbkq83QqL2lqWqQcv4s0M'
      
    });
   
    return this.http.delete(`https://proyectacuna.herokuapp.com/api/juzgados/${id}`, { headers });
    
  }
}
