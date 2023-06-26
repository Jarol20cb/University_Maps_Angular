import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Component, ViewChild } from '@angular/core';
import { UbicacionFavorita } from 'src/app/model/UbicacionFavorita';
import { UbicacionfavoritaService } from 'src/app/service/ubicacionfavorita.service';
import { UbicacionfavoritaDialogoComponent } from './ubicacionfavorita-dialogo/ubicacionfavorita-dialogo.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-ubicacionfavorita-listar',
  templateUrl: './ubicacionfavorita-listar.component.html',
  styleUrls: ['./ubicacionfavorita-listar.component.css']
})
export class UbicacionfavoritaListarComponent {
  role:string="";
  lista:UbicacionFavorita[]=[];
  dataSource:MatTableDataSource<UbicacionFavorita>=new MatTableDataSource();
  displayedColumns:string[]=['id','descripcionUbicacionFavorita','ubicacion','usuario','edicionU','eliminarU'];
  private idMayor:number=0;
  constructor(private uS: UbicacionfavoritaService, private dialog:MatDialog,private ls:LoginService){}
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
    this.dialog.open(UbicacionfavoritaDialogoComponent);
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
