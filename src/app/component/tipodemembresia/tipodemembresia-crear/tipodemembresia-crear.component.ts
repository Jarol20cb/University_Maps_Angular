import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { TipoDeMembresia } from 'src/app/model/TipoDeMembresia';
import { TipodemembresiaService } from 'src/app/service/tipodemembresia.service';

@Component({
  selector: 'app-tipodemembresia-crear',
  templateUrl: './tipodemembresia-crear.component.html',
  styleUrls: ['./tipodemembresia-crear.component.css']
})
export class TipodemembresiaCrearComponent implements OnInit{
  id:number=0;
  edicionM:boolean=false;
  form:FormGroup=new FormGroup({});
  membresia:TipoDeMembresia=new TipoDeMembresia();
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje: string="";
  constructor(private mS:TipodemembresiaService, private router: Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicionM=data['id']!=null;
      this.init();
    })
    this.form=new FormGroup({
      id:new FormControl(),
      fechainicioTipoDeMembresia:new FormControl(),
      fechafinTipoDeMembresia:new FormControl(),
      descripcionTipoDeMembresia:new FormControl(),
    })
  }

  aceptar():void{
    this.membresia.idTipoDeMembresia=this.form.value['id'];
    this.membresia.descripcionTipoDeMembresia=this.form.value['descripcionTipoDeMembresia'];
    this.membresia.fechainicioTipoDeMembresia=this.form.value['fechainicioTipoDeMembresia'];
    this.membresia.fechafinTipoDeMembresia=this.form.value['fechafinTipoDeMembresia'];
    if (this.form.value['descripcionTipoDeMembresia'].length>0) {
      if (this.edicionM) {
        this.mS.update(this.membresia).subscribe(()=>{
          this.mS.list().subscribe((data)=>{
            this.mS.setList(data);
          })
        })
      }else{
        this.mS.insert(this.membresia).subscribe(data=>{
          this.mS.list().subscribe(data=>{
            this.mS.setList(data);
          })
        })
      }
      this.router.navigate(['/components/membresias']);
    }else{
      this.mensaje="Ingrese dato";
    }
  }

  init(){
    if(this.edicionM){
      this.mS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idTipoDeMembresia),
          fechainicioTipoDeMembresia:new FormControl(data.fechainicioTipoDeMembresia),
          fechafinTipoDeMembresia:new FormControl(data.fechafinTipoDeMembresia),
          descripcionTipoDeMembresia:new FormControl(data.descripcionTipoDeMembresia),
        });
      });
    }
  }
}
