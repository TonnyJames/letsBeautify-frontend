import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
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

  clientes:           Cliente[] = []
  colaboradores:  Colaborador[] = []
  agendamento:    Agendamento = {

    dataAgendada:'',
    prioridade:  '',
    status:      '',
    titulo:      '',
    observacoes:   '',
    colaborador:     '',
    cliente:     '',
    nomeCliente: '',
    nomeColaborador: ''
  }

  dataAgendada: FormControl = new FormControl(null, [Validators.required])
  prioridade: FormControl = new FormControl(null, [Validators.required])
  //status:     FormControl = new FormControl(null, [Validators.required])
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
    this.findAllClientes();
    this.findAllColaboradores();
  }

  create(): void {
    let newDate: moment.Moment = moment.utc(this.agendamento.dataAgendada).local();
    this.agendamento.dataAgendada = newDate.format("YYYY-MM-DD")
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

  findAllColaboradores(): void {
    this.colaboradorService.findAll().subscribe(resposta => {
      this.colaboradores = resposta
    })
  }


  validaCampos(): boolean{
    return this.prioridade.valid
    //&& this.status.valid
    && this.dataAgendada.valid
    && this.titulo.valid

    && this.colaborador.valid
    && this.cliente.valid
  }
}
