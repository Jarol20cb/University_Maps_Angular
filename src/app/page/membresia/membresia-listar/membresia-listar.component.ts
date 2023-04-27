import { Component, OnInit } from '@angular/core';
import { Membresia } from 'src/app/model/membresia';
import { MatTableDataSource } from '@angular/material/table';
import { MembresiaService } from 'src/app/service/membresia.service';
//import { MatDialog } from '@angular/material/dialog'



@Component({
  selector: 'app-membresia-listar',
  templateUrl: './membresia-listar.component.html',
  styleUrls: ['./membresia-listar.component.css']
})
export class MembresiaListarComponent implements OnInit{
  
  lista :Membresia[]=[];
  dataSource: MatTableDataSource<Membresia> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'FechaInicio', 'FechaFin'] //<--muestra en la tabla

constructor(private Mb: MembresiaService){}

ngOnInit(): void {

  this.Mb.list().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
  })
  this.Mb.getLista().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
  });
}
}