import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { SugerenciaService } from 'src/app/service/sugerencia.service';

@Component({
  selector: 'app-sugerencia-dialogo',
  templateUrl: './sugerencia-dialogo.component.html',
  styleUrls: ['./sugerencia-dialogo.component.css']
})
export class SugerenciaDialogoComponent implements OnInit{
  constructor(private sS:SugerenciaService, private dialogRef:MatDialogRef<SugerenciaDialogoComponent>){}
  ngOnInit(): void {}
    confirm(estado:boolean){
      this.sS.setConfirmDelete(estado);
      this.dialogRef.close();
    }

}
