import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import { UsuarioDialogoComponent } from './usuario-dialogo/usuario-dialogo.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styleUrls: ['./usuario-listar.component.css']
})
export class UsuarioListarComponent implements OnInit,AfterViewInit{
  role:string="";
  lista:Usuario[]=[];
  dataSource:MatTableDataSource<Usuario>=new MatTableDataSource();
  displayedColumns:string[]=['id','nombreUsuario','apellidoPaternoUsuario','apellidoMaternoUsuario','fechaNacimientoUsuario','telefonoUsuario','correoUsuario','universidad','edicionU','eliminarU'];
  private idMayor:number=0;
  constructor(private uS: UsuarioService, private dialog:MatDialog,private ls:LoginService){}
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
    this.dialog.open(UsuarioDialogoComponent);
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
