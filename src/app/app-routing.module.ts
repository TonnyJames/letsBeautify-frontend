import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
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

const routes: Routes = [


      { path: 'login', component: LoginComponent },
      
      {path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      { path: 'home', component: HomeComponent },

      { path: 'colaboradores', component: ColaboradorListComponent },
      { path: 'colaboradores/create', component: ColaboradorCreateComponent },
      { path: 'colaboradores/update/:id', component: ColaboradorUpdateComponent },
      { path: 'colaboradores/delete/:id', component: ColaboradorDeleteComponent },

      { path: 'clientes', component: ClienteListComponent },
      { path: 'clientes/create', component: ClienteCreateComponent },
      { path: 'clientes/update/:id', component: ClienteUpdateComponent },
      { path: 'clientes/delete/:id', component: ClienteDeleteComponent },

      { path: 'Agendamentos', component: AgendamentoListComponent },
      { path: 'Agendamentos/create', component: AgendamentoCreateComponent },
      { path: 'Agendamentos/:id', component: AgendamentoUpdateComponent },
      { path: 'Agendamentos/read/:id', component: AgendamentoReadComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
