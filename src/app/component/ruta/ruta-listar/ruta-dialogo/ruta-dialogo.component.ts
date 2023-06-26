import { MatDialogRef } from '@angular/material/dialog';
import { Component } from '@angular/core';
import { RutaService } from 'src/app/service/ruta.service';

@Component({
  selector: 'app-ruta-dialogo',
  templateUrl: './ruta-dialogo.component.html',
  styleUrls: ['./ruta-dialogo.component.css']
})
export class RutaDialogoComponent {
  constructor(private rS:RutaService, private dialogRef:MatDialogRef<RutaDialogoComponent>){}
  ngOnInit(): void {}
  confirm(estado:boolean){
    this.rS.setConfirmDelete(estado);
    this.dialogRef.close();
  }
}
