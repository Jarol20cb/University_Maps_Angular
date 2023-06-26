import { Component,AfterViewInit, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Destino } from 'src/app/model/Destino';
import { DestinoService } from 'src/app/service/destino.service';
import{MatDialog} from '@angular/material/dialog';
import { DestinoDialogoComponent } from './destino-dialogo/destino-dialogo.component';
import {MatPaginator} from '@angular/material/paginator';
import { LoginService } from 'src/app/service/login.service';




@Component({
  selector: 'app-destino-listar',
  templateUrl: './destino-listar.component.html',
  styleUrls: ['./destino-listar.component.css']
})
export class DestinoListarComponent implements OnInit, AfterViewInit{
  role:string="";
  lista:Destino[]=[];
  dataSource:MatTableDataSource<Destino>=new MatTableDataSource();
  displayedColumns:string[]=['id','aulaDestino','pabellonDestino','facultadDestino','edicionD','eliminarD'];
  private idMayor:number=0;
  constructor(private dS: DestinoService, private dialog:MatDialog,private ls:LoginService){}
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.dS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.dS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.dS.getConfirmDelete().subscribe(data=>{
      data==true?this.delete(this.idMayor):false;
      this.dataSource.paginator = this.paginator;
    });
  }
  confirm(id:number){
    this.idMayor=id;
    this.dialog.open(DestinoDialogoComponent);
  }
  delete(id:number){
    this.dS.delete(id).subscribe(()=>{
      this.dS.list().subscribe(data=>{
        this.dS.setList(data);
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
