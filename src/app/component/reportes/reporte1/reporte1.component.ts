import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioUniversidadDTO } from 'src/app/model/UsuarioUniversidadDTO';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-reporte1',
  templateUrl: './reporte1.component.html',
  styleUrls: ['./reporte1.component.css']
})
export class Reporte1Component implements OnInit{
  names: UsuarioUniversidadDTO[] = [];
  dataSource: MatTableDataSource<UsuarioUniversidadDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['nombreUsuario','nombreUniversidad']

  constructor(private uS: UsuarioService) { }

  ngOnInit(): void {
    this.uS.getNameByUniversity().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getNameByUniversity(): void {
    this.uS.getNameByUniversity()
      .subscribe((data: UsuarioUniversidadDTO[]) => {
        this.names = data;
      });
  }
}
