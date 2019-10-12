

import { Contatto } from '../MODEL/Contatto';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

URL="http://localhost:3000/Contatto";

  elimina(id:number):Observable<any>{
    return this.http.delete(this.URL+'/'+id);
   


  }
  
  inserisci(contatto:Contatto):Observable<Contatto>{
    return this.http.post<Contatto>(this.URL,contatto);
  
  }
  
  aggiorna(id:number,contatto:Contatto):Observable<Contatto>{
    return this.http.patch<Contatto>(this.URL+'/'+id,contatto);

    
  
  }
  
 getContatti():Observable<Contatto[]>{
  return this.http.get<Contatto[]>("http://localhost:3000/Contatto");

    
  }


  getContatto(id):Observable<Contatto>{
    return this.http.get<Contatto>("http://localhost:3000/Contatto/"+id);
  
      
    }
  constructor(private http: HttpClient) { 
    
  }
}