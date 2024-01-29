import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bolsista } from '../model/Bolsista';

@Injectable({
  providedIn: 'root'
})
export class BolsistasService {
  private url = "http://localhost:8080"

  constructor(private api: HttpClient) {
  }

  listarBolsistas():Observable<Bolsista[]>{
    return this.api.get<Bolsista[]>(`${this.url}/bolsista`)
  }

  deleteBolsista(id: string):Observable<any>{
    let options = {
      responseType: 'text',

    };

   return this.api.delete<any>(`${this.url}/bolsista/${id}`, {
    responseType: 'text' as 'json',
  })
  }
}
