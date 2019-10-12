import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contatto } from '../MODEL/Contatto';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CrudContattiService {
  url: string = " http://localhost:3000/Contatto";

  insertContatti(contatto: Contatto): Observable<Contatto> {
    return this.http.post<Contatto>(this.url, contatto);

  }

  getContatti(): Observable<Contatto[]> {
    return this.http.get<Contatto[]>(this.url);


  }

  deleteContatti(contatto: Contatto): Observable<Contatto> {
    return this.http.delete<Contatto>(this.url);



  }

  updateContatti(contatto: Contatto): Observable<Contatto> {
    return this.http.patch<Contatto>(this.url, contatto);


  }

  constructor(private http: HttpClient) { }
}
