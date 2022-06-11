import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Agendamento } from 'src/app/models/agendamento';
import { AgendamentoService } from 'src/app/services/agendamento.service';

@Component({
  selector: 'app-agendamento-list',
  templateUrl: './agendamento-list.component.html',
  styleUrls: ['./agendamento-list.component.css']
})
export class AgendamentoListComponent implements OnInit {

  ELEMENT_DATA: Agendamento[] = []
  FILTERED_DATA: Agendamento[] = []

  displayedColumns: string[] = ['id', 'titulo', 'cliente', 'colaborador', 'dataAbertura', 'prioridade', 'status', 'acoes'];
  dataSource = new MatTableDataSource<Agendamento>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(private service: AgendamentoService) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(): void {
    this.service.findAll().subscribe(resposta => {
      this.ELEMENT_DATA = resposta;
      this.dataSource = new MatTableDataSource<Agendamento>(this.ELEMENT_DATA);
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  retornaStatus(status: any): string {
    if (status == '0') {
      return 'Aberto'
    } else if (status == 1) {
      return 'Em andamento'
    } else {
      return 'Encerrado'
    }
  } 

  retornaPrioridade(prioridade: any): string {
    if (prioridade == '0') {
      return 'Normal'
    } else {
      return 'Alta'
    }
  }

  orderByStatus(status: any): void{
    let list: Agendamento[] = []
    this.ELEMENT_DATA.forEach(element =>{
      if(element.status == status)
      list.push(element)
    });
    this.FILTERED_DATA = list;
    this.dataSource = new MatTableDataSource<Agendamento>(list);
    this.dataSource.paginator = this.paginator;
  }

}
