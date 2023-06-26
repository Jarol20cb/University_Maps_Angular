import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-profesor-dialogo',
  templateUrl: './profesor-dialogo.component.html',
  styleUrls: ['./profesor-dialogo.component.css']
})
export class ProfesorDialogoComponent implements OnInit{
  constructor(private pS:ProfesorService, private dialogRef:MatDialogRef<ProfesorDialogoComponent>){}
  ngOnInit(): void {}
  confirm(estado:boolean){
    this.pS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
