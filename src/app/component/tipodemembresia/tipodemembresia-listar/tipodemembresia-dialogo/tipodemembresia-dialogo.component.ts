import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { TipodemembresiaService } from 'src/app/service/tipodemembresia.service';

@Component({
  selector: 'app-tipodemembresia-dialogo',
  templateUrl: './tipodemembresia-dialogo.component.html',
  styleUrls: ['./tipodemembresia-dialogo.component.css']
})
export class TipodemembresiaDialogoComponent implements OnInit{
  constructor(private mS:TipodemembresiaService, private dialogRef:MatDialogRef<TipodemembresiaDialogoComponent>){}
  ngOnInit(): void {}
  confirm(estado:boolean){
    this.mS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
