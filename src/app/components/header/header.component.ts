import { ClienteService } from 'src/app/services/cliente.service';
import { Cliente } from 'src/app/models/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuarioLogado: Cliente;

  constructor(
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.findAdmin();
  }

  findAdmin(): void {
    let id = localStorage.getItem('id');
    this.clienteService.findById(id).subscribe(resposta => {
      this.usuarioLogado = resposta;
      this.usuarioLogado.nome
    })
  }

}
