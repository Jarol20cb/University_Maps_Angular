import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { reporte9 } from 'src/app/model/reporte9';
import { PagoService } from 'src/app/service/pago.service';

@Component({
  selector: 'app-reporte9',
  templateUrl: './reporte9.component.html',
  styleUrls: ['./reporte9.component.css']
})
export class Reporte9Component implements OnInit{
  suma: reporte9[] = [];
  dataSource: MatTableDataSource<reporte9> = new MatTableDataSource();

  displayedColumns: string[] = ['descripcionMembresia','suma']
  constructor(private pS: PagoService) { }

  ngOnInit(): void {
    this.pS.getSumaMontoXMembresia().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getSumaMontoXMembresia(): void {
    this.pS.getSumaMontoXMembresia()
      .subscribe((data: reporte9[]) => {
        this.suma = data;
      });
  }
}
