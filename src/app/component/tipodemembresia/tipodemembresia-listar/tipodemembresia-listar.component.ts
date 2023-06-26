import { TipodemembresiaService } from './../../../service/tipodemembresia.service';
import { Component,AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TipoDeMembresia } from 'src/app/model/TipoDeMembresia';
import{MatDialog} from '@angular/material/dialog';
import { TipodemembresiaDialogoComponent } from './tipodemembresia-dialogo/tipodemembresia-dialogo.component';

import {MatPaginator} from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-tipodemembresia-listar',
  templateUrl: './tipodemembresia-listar.component.html',
  styleUrls: ['./tipodemembresia-listar.component.css']
})
export class TipodemembresiaListarComponent implements OnInit{
  role:string="";
  lista:TipoDeMembresia[]=[];
  dataSource:MatTableDataSource<TipoDeMembresia>=new MatTableDataSource();
  displayedColumns:string[]=['id','descripcionTipoDeMembresia','fechainicioTipoDeMembresia','fechafinTipoDeMembresia','edicionM','eliminarM'];
  private idMayor:number=0;
  constructor(private mS: TipodemembresiaService, private dialog:MatDialog,private ls:LoginService){}
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.mS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.mS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
    this.mS.getConfirmDelete().subscribe(data=>{
      data==true?this.delete(this.idMayor):false;
      this.dataSource.paginator = this.paginator;
    });
  }
  confirm(id:number){
    this.idMayor=id;
    this.dialog.open(TipodemembresiaDialogoComponent);
  }
  delete(id:number){
    this.mS.delete(id).subscribe(()=>{
      this.mS.list().subscribe(data=>{
        this.mS.setList(data);
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
