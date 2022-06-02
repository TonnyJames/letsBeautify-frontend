import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Colaborador } from 'src/app/models/colaborador';
import { ColaboradorService } from 'src/app/services/colaborador.service';

@Component({
  selector: 'app-colaborador-update',
  templateUrl: './colaborador-update.component.html',
  styleUrls: ['./colaborador-update.component.css']
})
export class ColaboradorUpdateComponent implements OnInit {

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
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.colaborador.id = this.route.snapshot.paramMap.get('id');
    this.findById();
  }

  validaCampos(): boolean {
    return this.nome.valid && this.email.valid && this.cpf.valid && this.senha.valid
  }
  findById(): void{
    this.service.findById(this.colaborador.id).subscribe(resposta =>{
      resposta.perfis = []
      this.colaborador =  resposta;
    })
  }

  update(): void {
    this.service.update(this.colaborador).subscribe(() => {
      this.toast.success('Cadastro atualizado com sucesso', 'Atualização');
      this.router.navigate(['colaboradores'])
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
    if (this.colaborador.perfis.includes(perfil)) {
      this.colaborador.perfis.splice(this.colaborador.perfis.indexOf(perfil), 1);
      console.log(this.colaborador.perfis);
    } else {
      this.colaborador.perfis.push(perfil);
      console.log(this.colaborador.perfis);
    }
  }
}
