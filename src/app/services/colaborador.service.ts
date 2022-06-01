import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Colaborador } from '../models/colaborador';

@Injectable({
  providedIn: 'root'
})
export class ColaboradorService {

  constructor(private http: HttpClient) { }

  findById(id: any):Observable<Colaborador>{
    return this.http.get<Colaborador>(`${API_CONFIG.baseUrl}/colaboradores/${id}`);
  }

  findAll(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(`${API_CONFIG.baseUrl}/colaboradores`);
  }
  create(colaborador: Colaborador): Observable<Colaborador> {
    return this.http.post<Colaborador>(`${API_CONFIG.baseUrl}/colaboradores`, colaborador)
  }

  update(colaborador: Colaborador): Observable<Colaborador>{
    return this.http.put<Colaborador>(`${API_CONFIG.baseUrl}/colaboradores/${colaborador.id}`, colaborador)
  }

  delete(id: any): Observable<Colaborador>{
    return this.http.delete<Colaborador>(`${API_CONFIG.baseUrl}/colaboradores/${id}`);
  }
}
