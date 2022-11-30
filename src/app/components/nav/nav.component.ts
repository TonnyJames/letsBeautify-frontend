import { ClienteService } from './../../services/cliente.service';
import { Cliente } from './../../models/cliente';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  usuarioLogado: Cliente
  nmUsuario: string = ''

  constructor(private router: Router,
    private authService: AuthService,
    private clienteService: ClienteService,
    private toast: ToastrService) { }

  ngOnInit(): void {
    this.router.navigate(['home'])
    this.findAdmin();
  }

  findAdmin(): void {
    let id = localStorage.getItem('id');
    this.clienteService.findById(id).subscribe(resposta => {
      this.usuarioLogado = resposta;
      this.nmUsuario = resposta.nome;
    })
  }

  logout() {
    this.router.navigate(['login'])
    this.authService.logout();
    this.toast.info('Logout Realizado', 'Logout', {timeOut: 3000})
  }
}
