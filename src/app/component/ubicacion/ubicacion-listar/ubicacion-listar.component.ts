import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Ubicacion } from 'src/app/model/Ubicacion';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { UbicacionDialogoComponent } from './ubicacion-dialogo/ubicacion-dialogo.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-ubicacion-listar',
  templateUrl: './ubicacion-listar.component.html',
  styleUrls: ['./ubicacion-listar.component.css']
})
export class UbicacionListarComponent implements OnInit,AfterViewInit{
  role:string="";
  lista:Ubicacion[]=[];
  dataSource:MatTableDataSource<Ubicacion>=new MatTableDataSource();
  displayedColumns:string[]=['id','descripcionUbicacion','universidad','edicionU','eliminarU'];
  private idMayor:number=0;
  constructor(private uS: UbicacionService, private dialog:MatDialog,private ls:LoginService){}
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
    })
    this.uS.getConfirmDelete().subscribe(data=>{
      data==true?this.delete(this.idMayor):false;
      this.dataSource.paginator = this.paginator;
    });
  }
  confirm(id:number){
    this.idMayor=id;
    this.dialog.open(UbicacionDialogoComponent);
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
