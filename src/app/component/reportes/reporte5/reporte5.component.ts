import { MatTableDataSource } from '@angular/material/table';
import { RutaDestinoDTO } from './../../../model/RutaDestinoDTO';
import { Component, OnInit } from '@angular/core';
import { RutaService } from 'src/app/service/ruta.service';

@Component({
  selector: 'app-reporte5',
  templateUrl: './reporte5.component.html',
  styleUrls: ['./reporte5.component.css']
})
export class Reporte5Component implements OnInit{
  contador: RutaDestinoDTO[] = [];
  dataSource: MatTableDataSource<RutaDestinoDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['pabellonDestino','aulaDestino','contadorDestino']
  constructor(private rS: RutaService) { }

  ngOnInit(): void {
    this.rS.getDestinoMasSelec().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getNameByUniversity(): void {
    this.rS.getDestinoMasSelec()
      .subscribe((data: RutaDestinoDTO[]) => {
        this.contador = data;
      });
  }
}
