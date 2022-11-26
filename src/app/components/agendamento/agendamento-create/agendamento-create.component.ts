import { ServicoService } from './../../../services/servico.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { ToastrService } from 'ngx-toastr';
import { Agendamento } from 'src/app/models/agendamento';
import { Cliente } from 'src/app/models/cliente';
import { Colaborador } from 'src/app/models/colaborador';
import { AgendamentoService } from 'src/app/services/agendamento.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ColaboradorService } from 'src/app/services/colaborador.service';
import { Servico } from 'src/app/models/servico';

@Component({
  selector: 'app-agendamento-create',
  templateUrl: './agendamento-create.component.html',
  styleUrls: ['./agendamento-create.component.css']
})
export class AgendamentoCreateComponent implements OnInit {
  // colaboradores:  Colaborador[] = []

  idServico:      String = ''
  idCliente:      String = ''
  cliente:        Cliente
  servico:        Servico
  agendamento:    Agendamento = {
    dataAgendada:'',
    horaAgendada:'',
    // prioridade:  '',
    // status:      '',
    titulo:      '',
    observacoes:   '',
    cliente:     '',
    // colaborador:     '',
    servico: '',
    nomeCliente: '',
    nomeColaborador: '',
    nomeServico: ''
  }

  horaAgendada: FormControl = new FormControl(null, [Validators.required]);
  dataAgendada: FormControl = new FormControl(null, [Validators.required])
  // prioridade: FormControl = new FormControl(null, [Validators.required])
  // status:     FormControl = new FormControl(null, [Validators.required])
  titulo:      FormControl = new FormControl(null, [Validators.required])
  // observacoes: FormControl = new FormControl(null, [Validators.required])
  // colaborador: FormControl = new FormControl(null, [Validators.required])
  // cliente:     FormControl = new FormControl(null, [Validators.required])
  // servicos:     FormControl = new FormControl(null, [Validators.required])


  constructor(
    private agendamentoService: AgendamentoService,
    private clienteService:     ClienteService,
    // private colaboradorService: ColaboradorService,
    private servicoService:     ServicoService,
    private toastService:       ToastrService,
    private router:             Router,
    private route:              ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.idServico = this.route.snapshot.paramMap.get('id');
    this.idCliente = localStorage.getItem("id")
    // this.findAllClientes();
    this.findClienteById();
    // this.findAllColaboradores();
    this.findServicoById();
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

  // findAllClientes(): void {
  //   this.clienteService.findAll().subscribe(resposta => {
  //     this.clientes = resposta;
  //   })
  // }

  findClienteById(): void {
    this.clienteService.findById(this.idCliente).subscribe(resposta => {
      this.agendamento.cliente = resposta.id
      this.cliente = resposta
    })
  }

  // findAllColaboradores(): void {
  //   this.colaboradorService.findAll().subscribe(resposta => {
  //     this.colaboradores = resposta
  //   })
  // }

  findServicoById() {
    this.servicoService.findById(this.idServico).subscribe(resposta => {
      this.agendamento.servico = resposta.id
      this.servico = resposta
    })
  }


  validaCampos(): boolean{
    return this.dataAgendada.valid
    //&& this.status.valid
    && this.horaAgendada.valid
    && this.titulo.valid
    // && this.colaborador.valid
  }
}
