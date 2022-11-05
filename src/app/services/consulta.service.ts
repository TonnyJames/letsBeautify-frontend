import { API_CONFIG } from './../config/api.config';
import { Observable } from 'rxjs';
import { Agendamento } from './../models/agendamento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConsultaService {

  constructor(private http: HttpClient) { }

  findByCpf(cpf: string): Observable<Agendamento[]>{
    return this.http.get<Agendamento[]>(`${API_CONFIG.baseUrl}/agendamentos/cpf/${cpf}`)
  }
}
