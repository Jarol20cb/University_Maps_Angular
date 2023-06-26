import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { UniversidadService } from 'src/app/service/universidad.service';

@Component({
  selector: 'app-universidad-dialogo',
  templateUrl: './universidad-dialogo.component.html',
  styleUrls: ['./universidad-dialogo.component.css']
})
export class UniversidadDialogoComponent implements OnInit{
  constructor(private uS:UniversidadService, private dialogRef:MatDialogRef<UniversidadDialogoComponent>){}
  ngOnInit(): void {}
  confirm(estado:boolean){
    this.uS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
