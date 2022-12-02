import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  cliente: Cliente = {
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
    private service: ClienteService,
    private toast: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    return this.nome.valid && this.email.valid && this.cpf.valid && this.senha.valid
  }

  create(): void {
    this.service.create(this.cliente).subscribe(() => {
      this.toast.success('Você foi registrado com sucesso', 'Cadastro');
      this.router.navigate(['/login'])
    }), ex => {
      if(ex.error.errors){
        ex.error.errors.fotEach(element =>{
          this.toast.error(element.message);
        });
      }else {
        this.toast.error(ex.error.message);
      }
    }
  }

  addPerfil(perfil: any): void {
    this.cliente.perfis.push(perfil);

    if (this.cliente.perfis.includes(perfil)) {
      this.cliente.perfis.splice(this.cliente.perfis.indexOf(perfil), 1);
      console.log(this.cliente.perfis);
    } else {
      this.cliente.perfis.push(perfil);
      console.log(this.cliente.perfis);
    }
  }
}
