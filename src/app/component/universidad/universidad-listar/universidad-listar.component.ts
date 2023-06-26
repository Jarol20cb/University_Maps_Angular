import { MatDialog } from '@angular/material/dialog';
import { Component,AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Universidad } from 'src/app/model/Universidad';
import { UniversidadService } from 'src/app/service/universidad.service';
import { UniversidadDialogoComponent } from './universidad-dialogo/universidad-dialogo.component';
import {MatPaginator} from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';


@Component({
  selector: 'app-universidad-listar',
  templateUrl: './universidad-listar.component.html',
  styleUrls: ['./universidad-listar.component.css']
})
export class UniversidadListarComponent implements OnInit,  AfterViewInit{
  role:string="";
  lista:Universidad[]=[];
  dataSource:MatTableDataSource<Universidad>=new MatTableDataSource();
  displayedColumns:string[]=['id','nombreUniversidad','regionUniversidad','distritoUniversidad','calleUniversidad','telefonoUniversidad','edicionU','eliminarU'];
  private idMayor:number=0
  constructor(private uS: UniversidadService, private dialog:MatDialog,private ls:LoginService){}
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.uS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.uS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;

    });

    this.uS.getConfirmDelete().subscribe(data=>{
      data==true?this.delete(this.idMayor):false;
      this.dataSource.paginator = this.paginator;
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

  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
