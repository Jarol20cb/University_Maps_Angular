import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Pago } from 'src/app/model/Pago';
import { PagoService } from 'src/app/service/pago.service';
import { PagoDialogoComponent } from './pago-dialogo/pago-dialogo.component';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-pago-listar',
  templateUrl: './pago-listar.component.html',
  styleUrls: ['./pago-listar.component.css']
})
export class PagoListarComponent implements OnInit,AfterViewInit{
  role:string="";
  lista:Pago[]=[];
  dataSource:MatTableDataSource<Pago>=new MatTableDataSource();
  displayedColumns:string[]=['id','descripcionPago','montoPago','metodoPago','tipodemembresia','usuario','edicionP','eliminarP'];
  private idMayor:number=0;
  constructor(private pS: PagoService, private dialog:MatDialog,private ls:LoginService){}
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
    this.dialog.open(PagoDialogoComponent);
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
