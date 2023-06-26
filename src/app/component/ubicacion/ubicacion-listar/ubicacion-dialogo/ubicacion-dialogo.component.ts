import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { UbicacionService } from 'src/app/service/ubicacion.service';

@Component({
  selector: 'app-ubicacion-dialogo',
  templateUrl: './ubicacion-dialogo.component.html',
  styleUrls: ['./ubicacion-dialogo.component.css']
})
export class UbicacionDialogoComponent implements OnInit{
  constructor(private uS:UbicacionService, private dialogRef:MatDialogRef<UbicacionDialogoComponent>){}
  ngOnInit(): void {}
  confirm(estado:boolean){
    this.uS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
