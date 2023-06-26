import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { Ubicacion } from 'src/app/model/Ubicacion';
import { Universidad } from 'src/app/model/Universidad';
import { UniversidadService } from 'src/app/service/universidad.service';

@Component({
  selector: 'app-ubicacion-crear',
  templateUrl: './ubicacion-crear.component.html',
  styleUrls: ['./ubicacion-crear.component.css']
})
export class UbicacionCrearComponent implements OnInit{
  id:number=0;
  edicionU:boolean=false;
  form:FormGroup=new FormGroup({});
  listaU: Universidad[] = [];
  ubicacion:Ubicacion=new Ubicacion();
  mensaje: string="";
  constructor(
    private uS:UbicacionService,
    private router: Router,
    private route:ActivatedRoute,
    private unS:UniversidadService){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicionU=data['id']!=null;
      this.init();
    })
    this.unS.list().subscribe(data => { this.listaU = data });
    this.form=new FormGroup({
      id:new FormControl(),
      descripcionUbicacion:new FormControl(),
      universidad:new FormControl()
    })
  }
  aceptar():void{
    this.ubicacion.idUbicacion=this.form.value['id'];
    this.ubicacion.descripcionUbicacion=this.form.value['descripcionUbicacion'];
    this.ubicacion.universidad.nombreUniversidad=this.form.value['universidad.nombreUniversidad'];
    if (this.form.value['descripcionUbicacion'].length>0) {
      if (this.edicionU) {
        let u = new Universidad();
        u.idUniversidad = this.id;
        this.ubicacion.universidad=u;
        this.uS.update(this.ubicacion).subscribe(()=>{
          this.uS.list().subscribe((data)=>{
            this.uS.setList(data);
          })
        })
      }else{
        let u = new Universidad();
        u.idUniversidad = this.id;
        this.ubicacion.universidad=u;
        this.uS.insert(this.ubicacion).subscribe(data=>{
          this.uS.list().subscribe(data=>{
            this.uS.setList(data);
          })
        })
      }
      this.router.navigate(['/components/ubicaciones']);
    }else{
      this.mensaje="Ingrese dato";
    }
  }
  init(){
    if(this.edicionU){
      this.uS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idUbicacion),
          descripcionUbicacion:new FormControl(data.descripcionUbicacion),
          universidad:new FormControl(data.universidad.nombreUniversidad)
        });
      });
    }
  }
}
