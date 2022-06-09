import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Agendamento } from 'src/app/models/agendamento';
import { Cliente } from 'src/app/models/cliente';
import { Colaborador } from 'src/app/models/colaborador';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-agendamento-create',
  templateUrl: './agendamento-create.component.html',
  styleUrls: ['./agendamento-create.component.css']
})
export class AgendamentoCreateComponent implements OnInit {

  clientes: Cliente[] = []
  colaboradors: Colaborador[] = []
  agendamento: Agendamento = {

    prioridade:  '',
    status:      '',
    titulo:      '',
    observacoes:   '',
    colaborador:     '',
    cliente:     '',
    nomeCliente: '',
    nomeColaborador: ''
  }


  prioridade: FormControl = new FormControl(null, [Validators.required])
  status:     FormControl = new FormControl(null, [Validators.required])
  titulo:     FormControl = new FormControl(null, [Validators.required])
  observacoes:  FormControl = new FormControl(null, [Validators.required])
  colaborador:    FormControl = new FormControl(null, [Validators.required])
  cliente:    FormControl = new FormControl(null, [Validators.required])


  constructor(
    private agendamentoService: AgendamentoService,
    private clienteService: ClienteService,
    private colaboradorService: ColaboradorService,
    private toastService:   ToastrService,
    private router:  Router
  ) { }

  ngOnInit(): void {
    this.findAllClientes;
    this.findAllColaboradors;
  }

  create(): void {
    this.agendamentoService.create(this.agendamento).subscribe(resposta => {
      this.toastService.success('Agendamento cadastrado com sucesso', 'Novo Agendamento');
      this.router.navigate(['agendamentos']);
    }, ex =>{
      this.toastService.error(ex.error.error);
    })
  }

  findAllClientes(): void {
    this.clienteService.findAll().subscribe(resposta => {
      this.clientes = resposta;
    })
  }

  findAllColaboradors(): void {
    this.colaboradorService.findAll().subscribe(resposta => {
      this.colaboradors = resposta
    })
  }


  validaCampos(): boolean{
    return this.prioridade.valid
    && this.status.valid
    && this.titulo.valid
    && this.observacoes.valid
    && this.colaborador.valid
    && this.cliente.valid
  }
}
