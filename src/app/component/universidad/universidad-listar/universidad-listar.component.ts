import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Universidad } from 'src/app/model/Universidad';
import { UniversidadService } from 'src/app/service/universidad.service';
import { UniversidadDialogoComponent } from './universidad-dialogo/universidad-dialogo.component';

@Component({
  selector: 'app-universidad-listar',
  templateUrl: './universidad-listar.component.html',
  styleUrls: ['./universidad-listar.component.css']
})
export class UniversidadListarComponent implements OnInit{
  lista:Universidad[]=[];
  dataSource:MatTableDataSource<Universidad>=new MatTableDataSource();
  displayedColumns:string[]=['id','nombreUniversidad','regionUniversidad','distritoUniversidad','calleUniversidad','telefonoUniversidad','edicionU','eliminarU'];
  private idMayor:number=0
  constructor(private uS: UniversidadService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.uS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
    });

    this.uS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });

    this.uS.getConfirmDelete().subscribe(data=>{
      data==true?this.delete(this.idMayor):false;
    });

  }
  confirm(id:number){
    this.idMayor=id;
    this.dialog.open(UniversidadDialogoComponent);
  }
  delete(id:number){
    this.uS.delete(id).subscribe(()=>{
      this.uS.list().subscribe(data=>{
        this.uS.setList(data);
      })
    })
  }
  filter(e:any){
    this.dataSource.filter=e.target.value.trim();
  }
}
