import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-colaborador-create',
  templateUrl: './colaborador-create.component.html',
  styleUrls: ['./colaborador-create.component.css']
})
export class ColaboradorCreateComponent implements OnInit {

  colaborador: Colaborador = {
    id: '',
    nome: '',
    cpf: '',
    email: '',
    senha: '',
    perfis: [],
    dataCriacao: ''
  }

  nome: FormControl = new FormControl(null, Validators.minLength(3));
  cpf: FormControl = new FormControl(null, Validators.required);
  email: FormControl = new FormControl(null, Validators.email);
  senha: FormControl = new FormControl(null, Validators.minLength(3));

  constructor(
    private service: ColaboradorService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  create(): void {
    this.service.create(this.colaborador).subscribe(() => {
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
    return this.nome.valid && this.email.valid && this.cpf.valid && this.senha.valid
  }

  addPerfil(perfil: any): void {
    if (this.colaborador.perfis.includes(perfil)) {
      this.colaborador.perfis.splice(this.colaborador.perfis.indexOf(perfil), 1);
      console.log(this.colaborador.perfis);
    } else {
      this.colaborador.perfis.push(perfil);
      console.log(this.colaborador.perfis);
    }
  }
}
