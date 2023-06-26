import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { DestinoService } from 'src/app/service/destino.service';

@Component({
  selector: 'app-destino-dialogo',
  templateUrl: './destino-dialogo.component.html',
  styleUrls: ['./destino-dialogo.component.css']
})
export class DestinoDialogoComponent implements OnInit{
  constructor(private dS:DestinoService, private dialogRef:MatDialogRef<DestinoDialogoComponent>){}
  ngOnInit(): void {}
  confirm(estado:boolean){
    this.dS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
