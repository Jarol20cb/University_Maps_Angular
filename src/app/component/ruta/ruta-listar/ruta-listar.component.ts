import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Ruta } from 'src/app/model/Ruta';
import { RutaService } from 'src/app/service/ruta.service';
import { RutaDialogoComponent } from './ruta-dialogo/ruta-dialogo.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-ruta-listar',
  templateUrl: './ruta-listar.component.html',
  styleUrls: ['./ruta-listar.component.css']
})
export class RutaListarComponent implements OnInit,AfterViewInit{
  role:string="";
  lista:Ruta[]=[];
  dataSource:MatTableDataSource<Ruta>=new MatTableDataSource();
  displayedColumns:string[]=['id','usuario','destino','edicionR','eliminarR'];
  private idMayor:number=0;
  constructor(private rS: RutaService, private dialog:MatDialog,private ls:LoginService){}
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.rS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.rS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.rS.getConfirmDelete().subscribe(data=>{
      data==true?this.delete(this.idMayor):false;
      this.dataSource.paginator = this.paginator;
    });
  }
  confirm(id:number){
    this.idMayor=id;
    this.dialog.open(RutaDialogoComponent);
  }
  delete(id:number){
    this.rS.delete(id).subscribe(()=>{
      this.rS.list().subscribe(data=>{
        this.rS.setList(data);
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
