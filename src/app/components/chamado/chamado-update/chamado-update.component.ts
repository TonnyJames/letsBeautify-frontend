import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Chamado } from 'src/app/models/chamado';
import { Cliente } from 'src/app/models/cliente';
import { Colaborador } from 'src/app/models/colaborador';
import { ChamadoService } from 'src/app/services/chamado.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-chamado-update',
  templateUrl: './chamado-update.component.html',
  styleUrls: ['./chamado-update.component.css']
})
export class ChamadoUpdateComponent implements OnInit {
  clientes: Cliente[] = []
  colaboradors: Colaborador[] = []
  chamado: Chamado = {

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
    private chamadoService: ChamadoService,
    private clienteService: ClienteService,
    private colaboradorService: ColaboradorService,
    private toastService:   ToastrService,
    private route:          ActivatedRoute,
    private router:         Router
  ) { }

  ngOnInit(): void {
    this.chamado.id = this.route.snapshot.paramMap.get('id');
    this.findById();
    this.findAllClientes;
    this.findAllColaboradors;
  }

  findById(): void{
    this.chamadoService.findById(this.chamado.id).subscribe(resposta => {
      this.chamado = resposta;
    }, ex => {
      this.toastService.error(ex.console.error.error);
    })
  }

  update(): void {
    this.chamadoService.update(this.chamado).subscribe(resposta => {
      this.toastService.success('Chamado atualizado com sucesso', 'Chamado Update');
      this.router.navigate(['chamados']);
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

  retornaStatus(status: any): string {
    if (status == '0') {
      return 'Aberto'
    } else if (status == 1) {
      return 'Em andamento'
    } else {
      return 'Encerrado'
    }
  }

  retornaPrioridade(prioridade: any): string {
    if (prioridade == '0') {
      return 'Baixa'
    } else if (prioridade == 1) {
      return 'Média'
    } else {
      return 'Alta'
    }
  }
}
