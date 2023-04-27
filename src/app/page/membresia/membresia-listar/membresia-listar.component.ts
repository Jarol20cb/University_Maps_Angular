import { Component, OnInit } from '@angular/core';
import { Membresia } from 'src/app/model/membresia';
import { MatTableDataSource } from '@angular/material/table';
import { MembresiaService } from 'src/app/service/membresia.service';
import { MatDialog } from '@angular/material/dialog'
import { MembresiaDialogoComponent } from './membresia-dialogo/membresia-dialogo.component';



@Component({
  selector: 'app-membresia-listar',
  templateUrl: './membresia-listar.component.html',
  styleUrls: ['./membresia-listar.component.css']
})
export class MembresiaListarComponent implements OnInit{
  
  lista :Membresia[]=[];
  dataSource: MatTableDataSource<Membresia> = new MatTableDataSource();
  displayedColumns: string[] = ['id', 'FechaInicio', 'FechaFin','acciones'] //<--muestra en la tabla
  private idMayor = 0;



constructor(private Mb: MembresiaService, private dialog: MatDialog){}

ngOnInit(): void {

  this.Mb.list().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
  })
  this.Mb.getLista().subscribe(data => {
    this.dataSource = new MatTableDataSource(data);
  });
  
}

confirmar(id: number) {
  this.idMayor = id;
  this.dialog.open(MembresiaDialogoComponent);
}
eliminar(id: number) {
  this.Mb.eliminar(id).subscribe(() => {
    this.Mb.list().subscribe(data => {
      this.Mb.setList(data);/* se ejecuta la línea 27 */
    });
  });
}


}