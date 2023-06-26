import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UniversidadProfesorDTO } from 'src/app/model/UniversidadProfesorDTO';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-reporte2',
  templateUrl: './reporte2.component.html',
  styleUrls: ['./reporte2.component.css']
})
export class Reporte2Component implements OnInit{
  avr: UniversidadProfesorDTO[] = [];
  dataSource: MatTableDataSource<UniversidadProfesorDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['nombreUniversidad','promedio']
  constructor(private pS: ProfesorService) { }

  ngOnInit(): void {
    this.pS.promedioCalificacionUniversidad().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getNameByUniversity(): void {
    this.pS.promedioCalificacionUniversidad()
      .subscribe((data: UniversidadProfesorDTO[]) => {
        this.avr = data;
      });
  }
}
