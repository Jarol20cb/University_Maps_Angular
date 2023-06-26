import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { PagoService } from 'src/app/service/pago.service';

@Component({
  selector: 'app-pago-dialogo',
  templateUrl: './pago-dialogo.component.html',
  styleUrls: ['./pago-dialogo.component.css']
})
export class PagoDialogoComponent implements OnInit{
  constructor(private pS:PagoService, private dialogRef:MatDialogRef<PagoDialogoComponent>){}
  ngOnInit(): void {}
  confirm(estado:boolean){
    this.pS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
