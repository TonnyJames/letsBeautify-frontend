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

    dataAgendada: '',
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
      this.agendamento.horaAgendada = this.retornaHorario(resposta.horaAgendada)
    }, ex => {
      this.toastService.error(ex.console.error.error);
    })
  }

  retornaHorario(horario: any): string {
    if (horario == 1) {
return '09:00 às 10:00'
} else if (horario == 2) {
return '10:00 às 11:00'
} else if (horario == 3) {
return '11:00 às 12:00'
} else if (horario == 4) {
return '13:00 às 14:00'
} else if (horario == 5) {
return '14:00 às 15:00'
} else  {
return '15:00 às 16:00'
}
}

  // retornaStatus(status: any): string {
  //   if (status == '0') {
  //     return 'Aberto'
  //   } else if (status == 1) {
  //     return 'Em andamento'
  //   } else {
  //     return 'Encerrado'
  //   }
  // }

  // retornaStatus(status: any): string {
  //   if (status == '0') {
  //     return 'Aberto'
  //   } else if (status == 1) {
  //     return 'Em andamento'
  //   } else {
  //     return 'Encerrado'
  //   }
  // }

  // retornaPrioridade(prioridade: any): string {
  //   if (prioridade == '0') {
  //     return 'Normal'
  //   } else {
  //     return 'Alta'
  //   }
  // }
}
