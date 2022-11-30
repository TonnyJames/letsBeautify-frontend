import { ServicoReadComponent } from './components/servico/servico-read/servico-read.component';
import { ServicoListComponent } from './components/servico/servico-list/servico-list.component';
import { ConsultaListComponent } from './components/api-relatorio/consulta-list/consulta-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

//componentes da aplicação
import { AgendamentoCreateComponent } from './components/agendamento/agendamento-create/agendamento-create.component'; 
import { AgendamentoListComponent } from './components/agendamento/agendamento-list/agendamento-list.component';
import { AgendamentoReadComponent } from './components/agendamento/agendamento-read/agendamento-read.component';
import { AgendamentoUpdateComponent } from './components/agendamento/agendamento-update/agendamento-update.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavComponent } from './components/nav/nav.component';
import { ColaboradorCreateComponent } from './components/colaborador/colaborador-create/colaborador-create.component';
import { ColaboradorDeleteComponent } from './components/colaborador/colaborador-delete/colaborador-delete.component';
import { ColaboradorListComponent } from './components/colaborador/colaborador-list/colaborador-list.component';
import { ColaboradorUpdateComponent } from './components/colaborador/colaborador-update/colaborador-update.component';
import { RegistrarClienteComponent } from './components/registar-button/registrar-cliente/registrar-cliente.component';
import { ServicoCreateComponent } from './components/servico/servico-create/servico-create.component';
import { ConsultaComponent } from './components/api-relatorio/consulta/consulta.component';



const routes: Routes = [


      { path: 'login', component: LoginComponent },
      { path: 'registrarcliente', component: RegistrarClienteComponent },
      { path: 'consulta', component: ConsultaComponent},
      { path: 'api/:cpf', component: ConsultaListComponent},
      { path: 'agendamento/read/:id', component: AgendamentoReadComponent },
      
      {path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },

      { path: 'colaboradores', component: ColaboradorListComponent },
      { path: 'colaboradores/create', component: ColaboradorCreateComponent },
      { path: 'colaboradores/update/:id', component: ColaboradorUpdateComponent },
      { path: 'colaboradores/delete/:id', component: ColaboradorDeleteComponent },

      { path: 'servicos', component: ServicoListComponent },
      { path: 'servicos/read/:id', component: ServicoReadComponent},
      { path: 'servicos/create', component: ServicoCreateComponent },

      { path: 'clientes', component: ClienteListComponent },
      { path: 'clientes/create', component: ClienteCreateComponent },
      { path: 'clientes/update/:id', component: ClienteUpdateComponent },
      { path: 'clientes/delete/:id', component: ClienteDeleteComponent },
      

      { path: 'agendamentos', component: AgendamentoListComponent },
      { path: 'agendamentos/create/:id', component: AgendamentoCreateComponent },
      { path: 'agendamentos/:id', component: AgendamentoUpdateComponent },
      { path: 'agendamentos/read/:id', component: AgendamentoReadComponent }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
