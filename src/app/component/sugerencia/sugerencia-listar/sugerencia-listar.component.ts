import { Component, OnInit } from '@angular/core';
import { Sugerencia } from 'src/app/model/Sugerencia';
import { MatTableDataSource } from '@angular/material/table';
import { SugerenciaService } from 'src/app/service/sugerencia.service';
import{MatDialog} from '@angular/material/dialog';
import { SugerenciaDialogoComponent } from './sugerencia-dialogo/sugerencia-dialogo.component';

@Component({
  selector: 'app-sugerencia-listar',
  templateUrl: './sugerencia-listar.component.html',
  styleUrls: ['./sugerencia-listar.component.css']
})
export class SugerenciaListarComponent implements OnInit {
  lista:Sugerencia[]=[];
  dataSource:MatTableDataSource<Sugerencia>=new MatTableDataSource();
  displayedColumns:string[]=['id','descripcionSugerencia','edicionS','eliminarS'];
  private idMayor:number=0;
  constructor(private sS: SugerenciaService, private dialog:MatDialog){}
  ngOnInit(): void {
    this.sS.list().subscribe((data)=>{
      this.dataSource=new MatTableDataSource(data);
    });

    this.sS.getList().subscribe(data=>{
      this.dataSource=new MatTableDataSource(data);
    })

    this.sS.getConfirmDelete().subscribe(data=>{
      data==true?this.delete(this.idMayor):false;
    });
  }
  confirm(id:number){
    this.idMayor=id;
    this.dialog.open(SugerenciaDialogoComponent);
  }
  delete(id:number){
    this.sS.delete(id).subscribe(()=>{
      this.sS.list().subscribe(data=>{
        this.sS.setList(data);
      })
    })
  }
  filter(e:any){
    this.dataSource.filter=e.target.value.trim();
  }
}
