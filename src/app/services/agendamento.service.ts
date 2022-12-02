import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { Agendamento } from '../models/agendamento';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  constructor(private http: HttpClient) { }

  findById(id: any): Observable<Agendamento>{
    return this.http.get<Agendamento>(`${API_CONFIG.baseUrl}/agendamentos/${id}`)
  }

  findByCpf(cpf: string): Observable<Agendamento[]>{
    return this.http.get<Agendamento[]>(`${API_CONFIG.baseUrl}/agendamentos/cpf/${cpf}`)
  }

  findAll(): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(`${API_CONFIG.baseUrl}/agendamentos`);
  }

  create(agendamento: Agendamento): Observable<Agendamento>{
    return this.http.post<Agendamento>(`${API_CONFIG.baseUrl}/agendamentos`, agendamento);
  }

  update(agendamento: Agendamento): Observable<Agendamento>{
    return this.http.put<Agendamento>(`${API_CONFIG.baseUrl}/agendamentos/${agendamento.id}`, agendamento);
  }
}
