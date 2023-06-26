import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Profesor } from 'src/app/model/Profesor';
import { ProfesorService } from 'src/app/service/profesor.service';
import { ProfesorDialogoComponent } from './profesor-dialogo/profesor-dialogo.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-profesor-listar',
  templateUrl: './profesor-listar.component.html',
  styleUrls: ['./profesor-listar.component.css']
})
export class ProfesorListarComponent implements OnInit,AfterViewInit{
  role:string="";
  lista:Profesor[]=[];
  dataSource:MatTableDataSource<Profesor>=new MatTableDataSource();
  displayedColumns:string[]=['id','nombreProfesor','apellidoPaternoProfesor','apellidoMaternoProfesor','calificacionProfesor','universidad','edicionP','eliminarP'];
  private idMayor:number=0;
  constructor(private pS: ProfesorService, private dialog:MatDialog,private ls:LoginService){}
  ngOnInit(): void {
    this.role=this.ls.showRole();
    console.log(this.role);
    this.pS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });

    this.pS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    })
    this.pS.getConfirmDelete().subscribe(data=>{
      data==true?this.delete(this.idMayor):false;
      this.dataSource.paginator = this.paginator;
    });
  }
  confirm(id:number){
    this.idMayor=id;
    this.dialog.open(ProfesorDialogoComponent);
  }
  delete(id:number){
    this.pS.delete(id).subscribe(()=>{
      this.pS.list().subscribe(data=>{
        this.pS.setList(data);
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
