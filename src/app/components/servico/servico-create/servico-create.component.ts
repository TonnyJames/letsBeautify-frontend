import { Cliente } from 'src/app/models/cliente';
import { ClienteService } from '../../../services/cliente.service';
import { ServicoService } from '../../../services/servico.service';
import { Servico } from '../../../models/servico';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-servico-create',
  templateUrl: './servico-create.component.html',
  styleUrls: ['./servico-create.component.css']
})
export class ServicoCreateComponent implements OnInit {

  cliente: Cliente;

  servico: Servico = {
    id: '',
    categoria: '',
    nmNegocio: '',
    nrInsc: '', //cpf ou cnpj
    telefone: '',
    email: '',
    dataCriacao: '',
    admin: '',
    nomeAdmin: ''
  }

  categoria: FormControl = new FormControl(null, Validators.required);
  nmNegocio: FormControl = new FormControl(null, Validators.minLength(3));
  nrInsc: FormControl = new FormControl(null, Validators.required);
  telefone: FormControl = new FormControl(null, Validators.minLength(11));
  email: FormControl = new FormControl(null, Validators.email);
  admin: FormControl = new FormControl(null, Validators.required)

  constructor(
    private clienteService: ClienteService,
    private servicoService: ServicoService,
    private toast: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.findAdmin()
    // console.log()
    console.log("parametro recebido em admin é: " + this.servico.admin)
  }

  create(): void {
    this.servicoService.create(this.servico).subscribe(() => {
      if(this.cliente.perfis.length === 1){
      this.addPerfil();
      this.updateCliente();
      }
      this.toast.success('Serviço cadastrado com sucesso', 'Cadastro');
      this.router.navigate(['home'])
    }, ex => {
      if (ex.error.errors) {
        ex.error.errors.fotEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    })
  }

  validaCampos(): boolean {
    return this.categoria.valid && this.nmNegocio.valid &&
      this.email.valid && this.nrInsc.valid &&
      this.telefone.valid
  }

  findAdmin(): void {
    let id = localStorage.getItem('id');
    this.clienteService.findById(id).subscribe(resposta => {
      this.servico.admin = parseInt(resposta.id);
      this.servico.nomeAdmin = resposta.nome;
      this.cliente = resposta;
    })
  }

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe(() => {
      this.toast.success('Cliente atualizado com sucesso', 'Update');
    }), ex => {
      if (ex.error.errors) {
        ex.error.errors.fotEach(element => {
          this.toast.error(element.message);
        });
      } else {
        this.toast.error(ex.error.message);
      }
    }
  }

  addPerfil(): void {
    this.cliente.perfis = [];
    this.cliente.perfis.push('0', '1');
    console.log(this.cliente.perfis);
  }
}