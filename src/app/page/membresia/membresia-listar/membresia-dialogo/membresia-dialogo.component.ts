import { Component, OnInit } from '@angular/core';
import { MembresiaService } from 'src/app/service/membresia.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-membresia-dialogo',
  templateUrl: './membresia-dialogo.component.html',
  styleUrls: ['./membresia-dialogo.component.css']
})
export class MembresiaDialogoComponent implements OnInit{
  constructor(private Mb: MembresiaService,
    private dialogRef: MatDialogRef<MembresiaDialogoComponent>){  }
    ngOnInit(): void { }
    confirmar(estado: boolean) {
      this.Mb.setConfirmaEliminacion(estado);
      this.dialogRef.close();
    }
}
