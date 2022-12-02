import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Servico } from '../models/servico'; 

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient) { }

  findById(id: any):Observable<Servico>{
    return this.http.get<Servico>(`${API_CONFIG.baseUrl}/servicos/${id}`);
  }

  findAll(): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${API_CONFIG.baseUrl}/servicos`);
  }
  create(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(`${API_CONFIG.baseUrl}/servicos`, servico)
  }

  update(servico: Servico): Observable<Servico>{
    return this.http.put<Servico>(`${API_CONFIG.baseUrl}/servicos/${servico.id}`, servico)
  }

  delete(id: any): Observable<Servico>{
    return this.http.delete<Servico>(`${API_CONFIG.baseUrl}/servicos/${id}`);
  }
}
