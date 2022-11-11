import { ConsultaService } from './../../../services/consulta.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {



  cpf: string = '';

  cpfControl = new FormControl(null, Validators.required)

  constructor(
    private router: Router,
    private service: ConsultaService
  ) { }

  ngOnInit(): void {
  }

  consultar() {
    this.router.navigate(['/api/'+ this.cpf])
  }
  

  validaCampos(): boolean {
    return this.cpfControl.valid
  }

}
