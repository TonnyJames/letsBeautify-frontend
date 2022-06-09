import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Agendamento } from 'src/app/models/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-agendamento-read',
  templateUrl: './agendamento-read.component.html',
  styleUrls: ['./agendamento-read.component.css']
})
export class AgendamentoReadComponent implements OnInit {

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

  constructor(
    private agendamentoService: AgendamentoService,
    private toastService:   ToastrService,
    private route:          ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.agendamento.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.agendamentoService.findById(this.agendamento.id).subscribe(resposta => {
      this.agendamento = resposta;
    }, ex => {
      this.toastService.error(ex.console.error.error);
    })
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
