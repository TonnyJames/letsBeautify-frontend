import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Para trabalhar com formulários no Angular 12
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Para realizar requisições HTTP
import { HttpClientModule } from '@angular/common/http';

// Imports para componentes do Angular Material
import {MatNativeDateModule} from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatTooltipModule} from '@angular/material/tooltip';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptorProvider } from './interceptors/auth.interceptor';
import { NgxMaskModule } from 'ngx-mask';
import { MatDialogModule } from '@angular/material/dialog';

//imports da propria aplicação
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ColaboradorListComponent } from './components/colaborador/colaborador-list/colaborador-list.component';
import { LoginComponent} from './components/login/login.component';
import { ColaboradorCreateComponent } from './components/colaborador/colaborador-create/colaborador-create.component';
import { ColaboradorUpdateComponent } from './components/colaborador/colaborador-update/colaborador-update.component';
import { ColaboradorDeleteComponent } from './components/colaborador/colaborador-delete/colaborador-delete.component';
import { ClienteCreateComponent } from './components/cliente/cliente-create/cliente-create.component';
import { ClienteDeleteComponent } from './components/cliente/cliente-delete/cliente-delete.component';
import { ClienteListComponent } from './components/cliente/cliente-list/cliente-list.component';
import { ClienteUpdateComponent } from './components/cliente/cliente-update/cliente-update.component';
import { AgendamentoListComponent } from './components/agendamento/agendamento-list/agendamento-list.component';
import { AgendamentoCreateComponent } from './components/agendamento/agendamento-create/agendamento-create.component';
import { AgendamentoUpdateComponent } from './components/agendamento/agendamento-update/agendamento-update.component';
import { AgendamentoReadComponent } from './components/agendamento/agendamento-read/agendamento-read.component';
import { RegistrarClienteComponent } from './components/registar-button/registrar-cliente/registrar-cliente.component';
import { ServicoCreateComponent} from './components/servico/servico-create/servico-create.component';
import { RegisterDialogComponent } from './components/login/register-dialog/register-dialog.component';
import { ConsultaComponent } from './components/api-relatorio/consulta/consulta.component';
import { ConsultaListComponent } from './components/api-relatorio/consulta-list/consulta-list.component';
import { ServicoListComponent } from './components/servico/servico-list/servico-list.component';



//guardas de rotas
import { AuthGuard } from './auth/auth.guard';
import { ServicoReadComponent } from './components/servico/servico-read/servico-read.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    HeaderComponent,
    ColaboradorListComponent,
    LoginComponent,
    ColaboradorCreateComponent,
    ColaboradorUpdateComponent,
    ColaboradorDeleteComponent,
    ClienteCreateComponent,
    ClienteDeleteComponent,
    ClienteListComponent,
    ClienteUpdateComponent,
    AgendamentoCreateComponent,
    AgendamentoListComponent,
    AgendamentoReadComponent,
    AgendamentoUpdateComponent,
    RegistrarClienteComponent,
    RegisterDialogComponent,
    ServicoCreateComponent,
    ConsultaComponent,
    ConsultaListComponent,
    ServicoListComponent,
    ServicoReadComponent
  ],
  imports: [
    MatDialogModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
        // Forms
        FormsModule,
        ReactiveFormsModule,
        // Requisições http
        HttpClientModule,
        // Angular Material
        MatFormFieldModule,
        MatPaginatorModule,
        MatCheckboxModule,
        MatSnackBarModule,
        MatToolbarModule,
        MatSidenavModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        MatRadioModule,
        MatTableModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        MatTooltipModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ToastrModule.forRoot({
          timeOut: 4000,
          closeButton: true,
          progressBar: true
        }),
        NgxMaskModule.forRoot()
  ],
  providers: [AuthInterceptorProvider, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
