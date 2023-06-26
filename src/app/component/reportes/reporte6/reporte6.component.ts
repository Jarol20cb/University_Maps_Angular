import { reporte6 } from './../../../model/reporte6';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-reporte6',
  templateUrl: './reporte6.component.html',
  styleUrls: ['./reporte6.component.css']
})
export class Reporte6Component implements OnInit{
  contador: reporte6[] = [];
  dataSource: MatTableDataSource<reporte6> = new MatTableDataSource();

  displayedColumns: string[] = ['nombreUniversidad','contadorUsuario']
  constructor(private uS: UsuarioService) { }

  ngOnInit(): void {
    this.uS.getUsuariosByUni().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getNameByUniversity(): void {
    this.uS.getUsuariosByUni()
      .subscribe((data: reporte6[]) => {
        this.contador = data;
      });
  }
}
