import { Component, OnInit } from '@angular/core';
import { reporte3 } from 'src/app/model/reporte3';
import { MatTableDataSource } from '@angular/material/table';
import { UniversidadService } from 'src/app/service/universidad.service';

@Component({
  selector: 'app-reporte3',
  templateUrl: './reporte3.component.html',
  styleUrls: ['./reporte3.component.css']
})
export class Reporte3Component implements OnInit{
  report: reporte3[] = [];
  dataSource: MatTableDataSource<reporte3> = new MatTableDataSource();

  displayedColumns: string[] = ['universityName','idUniversity']
  constructor(private uS: UniversidadService) { }

  ngOnInit(): void {
    this.uS.getUniversityLima().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
    })
  }

  getReportUniversity():void{
    this.uS.getUniversityLima().subscribe((data: reporte3[]) => {
      this.report=data;
    });
  }
}
