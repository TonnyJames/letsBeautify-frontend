import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ServicoService } from './../../../services/servico.service';
import { Servico } from 'src/app/models/servico';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-read',
  templateUrl: './servico-read.component.html',
  styleUrls: ['./servico-read.component.css']
})
export class ServicoReadComponent implements OnInit {

  servico: Servico = {

    id: '',
    categoria: '',
    nmNegocio: '',
    nrInsc: '', //cpf ou cnpj
    telefone: '',
    email: '',
    dataCriacao: '',
    admin: '',
    nomeAdmin: '',
  }

  constructor(
    private servicoService: ServicoService,
    private toastService:   ToastrService,
    private route:          ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.servico.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  findById(): void{
    this.servicoService.findById(this.servico.id).subscribe(resposta => {
      this.servico = resposta;
    }, ex => {
      this.toastService.error(ex.console.error.error);
    })
  }

}
