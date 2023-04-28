import { TipodemembresiaService } from './../../../service/tipodemembresia.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { TipoDeMembresia } from 'src/app/model/TipoDeMembresia';
import{MatDialog} from '@angular/material/dialog';
import { TipodemembresiaDialogoComponent } from './tipodemembresia-dialogo/tipodemembresia-dialogo.component';

@Component({
  selector: 'app-tipodemembresia-listar',
  templateUrl: './tipodemembresia-listar.component.html',
  styleUrls: ['./tipodemembresia-listar.component.css']
})
export class TipodemembresiaListarComponent implements OnInit{
  lista:TipoDeMembresia[]=[];
  dataSource:MatTableDataSource<TipoDeMembresia>=new MatTableDataSource();
  displayedColumns:string[]=['id','descripcionTipoDeMembresia','fechainicioTipoDeMembresia','fechafinTipoDeMembresia','edicionM','eliminarM'];
  private idMayor:number=0;
  constructor(private mS: TipodemembresiaService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.mS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
    });

    this.mS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    });
    this.mS.getConfirmDelete().subscribe(data=>{
      data==true?this.delete(this.idMayor):false;
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
}
