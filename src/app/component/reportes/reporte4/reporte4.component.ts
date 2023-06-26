import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit } from '@angular/core';
import { PagoMembresiaDTO } from 'src/app/model/PagoMembresiaDTO';
import { PagoService } from 'src/app/service/pago.service';

@Component({
  selector: 'app-reporte4',
  templateUrl: './reporte4.component.html',
  styleUrls: ['./reporte4.component.css']
})
export class Reporte4Component implements OnInit{
  contador: PagoMembresiaDTO[] = [];
  dataSource: MatTableDataSource<PagoMembresiaDTO> = new MatTableDataSource();

  displayedColumns: string[] = ['descripcionMembresia','contador']
  constructor(private pS: PagoService) { }

  ngOnInit(): void {
    this.pS.getCantUsuarioXMmebresia().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getNameByUniversity(): void {
    this.pS.getCantUsuarioXMmebresia()
      .subscribe((data: PagoMembresiaDTO[]) => {
        this.contador = data;
      });
  }
}
