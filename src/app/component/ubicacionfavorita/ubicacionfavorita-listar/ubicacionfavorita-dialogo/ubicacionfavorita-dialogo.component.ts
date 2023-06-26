import { MatDialogRef } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { UbicacionfavoritaService } from 'src/app/service/ubicacionfavorita.service';

@Component({
  selector: 'app-ubicacionfavorita-dialogo',
  templateUrl: './ubicacionfavorita-dialogo.component.html',
  styleUrls: ['./ubicacionfavorita-dialogo.component.css']
})
export class UbicacionfavoritaDialogoComponent implements OnInit{
  constructor(private uS:UbicacionfavoritaService, private dialogRef:MatDialogRef<UbicacionfavoritaDialogoComponent>){}
  ngOnInit(): void {}
  confirm(estado:boolean){
    this.uS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
