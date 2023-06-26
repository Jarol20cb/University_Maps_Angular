import { MatTableDataSource } from '@angular/material/table';
import { Component } from '@angular/core';
import { PagoService } from 'src/app/service/pago.service';
import { reporte7 } from 'src/app/model/reporte7';

@Component({
  selector: 'app-reporte7',
  templateUrl: './reporte7.component.html',
  styleUrls: ['./reporte7.component.css']
})
export class Reporte7Component {
  suma: reporte7[] = [];
  dataSource: MatTableDataSource<reporte7> = new MatTableDataSource();

  displayedColumns: string[] = ['metodoPago','suma']
  constructor(private pS: PagoService) { }

  ngOnInit(): void {
    this.pS.getSumaMontoXMetodo().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getNameByUniversity(): void {
    this.pS.getSumaMontoXMetodo()
      .subscribe((data: reporte7[]) => {
        this.suma = data;
      });
  }
}
