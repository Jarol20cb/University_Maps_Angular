import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { reporte8 } from 'src/app/model/reporte8';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-reporte8',
  templateUrl: './reporte8.component.html',
  styleUrls: ['./reporte8.component.css']
})
export class Reporte8Component implements OnInit{
  contador: reporte8[] = [];
  dataSource: MatTableDataSource<reporte8> = new MatTableDataSource();

  displayedColumns: string[] = ['nombreUsuario','contadorUsuario']
  constructor(private uS: UsuarioService) { }

  ngOnInit(): void {
    this.uS.getNameUsuUbiFav().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getNameByUniversity(): void {
    this.uS.getNameUsuUbiFav()
      .subscribe((data: reporte8[]) => {
        this.contador = data;
      });
  }
}
