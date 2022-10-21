import { ServicoService } from './../../../services/servico.service';
import { Servico } from './../../../models/servico';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registrar-servico',
  templateUrl: './registrar-servico.component.html',
  styleUrls: ['./registrar-servico.component.css']
})
export class RegistrarServicoComponent implements OnInit {

  servico: Servico = {
    id: '',
    categoria: '',
    nmNegocio: '',
    nrInsc: '', //cpf ou cnpj
    telefone: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: '',
    responsavel: null 
  }

  categoria: FormControl = new FormControl(null, Validators.required);
  nmNegocio: FormControl = new FormControl(null, Validators.minLength(3));
  nrInsc: FormControl = new FormControl(null, Validators.required);
  telefone: FormControl = new FormControl(null, Validators.minLength(11));
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: ServicoService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.servico).subscribe(() => {
      this.toast.success('Colaborador cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['colaboradores'])
    }, ex => {
      if(ex.error.errors){
        ex.error.errors.fotEach(element => {
          this.toast.error(element.message);
        });
      }else {
        this.toast.error(ex.error.message);
      }
    })
  }

  validaCampos(): boolean {
    return this.categoria.valid && this.nmNegocio.valid &&
     this.email.valid && this.nrInsc.valid && 
     this.telefone.valid && this.senha.valid
  }

  addPerfil(perfil: any): void {
    if (this.servico.perfis.includes(perfil)) {
      this.servico.perfis.splice(this.servico.perfis.indexOf(perfil), 1);
      console.log(this.servico.perfis);
    } else {
      this.servico.perfis.push(perfil);
      console.log(this.servico.perfis);
    }
  }
}