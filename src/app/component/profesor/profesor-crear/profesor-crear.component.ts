import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Profesor } from 'src/app/model/Profesor';
import { ProfesorService } from 'src/app/service/profesor.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Universidad } from 'src/app/model/Universidad';
import { UniversidadService } from 'src/app/service/universidad.service';

@Component({
  selector: 'app-profesor-crear',
  templateUrl: './profesor-crear.component.html',
  styleUrls: ['./profesor-crear.component.css']
})
export class ProfesorCrearComponent implements OnInit{
  id:number=0;
  edicionP:boolean=false;
  form:FormGroup=new FormGroup({});
  listaU: Universidad[] = [];
  profesor:Profesor=new Profesor();
  mensaje: string="";
  constructor(
    private pS:ProfesorService,
    private router: Router,
    private route:ActivatedRoute,
    private uS:UniversidadService){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicionP=data['id']!=null;
      this.init();
    })
    this.uS.list().subscribe(data => { this.listaU = data });
    this.form=new FormGroup({
      id:new FormControl(),
      nombreProfesor:new FormControl(),
      apellidoPaternoProfesor:new FormControl(),
      apellidoMaternoProfesor:new FormControl(),
      calificacionProfesor:new FormControl(),
      universidad:new FormControl(),
    })
  }
  aceptar():void{
    this.profesor.idProfesor=this.form.value['id'];
    this.profesor.nombreProfesor=this.form.value['nombreProfesor'];
    this.profesor.apellidoPaternoProfesor=this.form.value['apellidoPaternoProfesor'];
    this.profesor.apellidoMaternoProfesor=this.form.value['apellidoMaternoProfesor'];
    this.profesor.calificacionProfesor=this.form.value['calificacionProfesor'];
    this.profesor.universidad.nombreUniversidad=this.form.value['universidad.nombreUniversidad'];
    if (this.form.value['nombreProfesor'].length>0) {
      if (this.edicionP) {
        let u = new Universidad();
        u.idUniversidad = this.id;
        this.profesor.universidad=u;
        this.pS.update(this.profesor).subscribe(()=>{
          this.pS.list().subscribe((data)=>{
            this.pS.setList(data);
          })
        })
      }else{
        let u = new Universidad();
        u.idUniversidad = this.id;
        this.profesor.universidad=u;
        this.pS.insert(this.profesor).subscribe(data=>{
          this.pS.list().subscribe(data=>{
            this.pS.setList(data);
          })
        })
      }
      this.router.navigate(['/components/profesores']);
    }else{
      this.mensaje="Ingrese dato";
    }
  }
  init(){
    if(this.edicionP){
      this.pS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idProfesor),
          nombreProfesor:new FormControl(data.nombreProfesor),
          apellidoPaternoProfesor:new FormControl(data.apellidoPaternoProfesor),
          apellidoMaternoProfesor:new FormControl(data.apellidoMaternoProfesor),
          calificacionProfesor:new FormControl(data.calificacionProfesor),
          universidad:new FormControl(data.universidad.nombreUniversidad)
        });
      });
    }
  }
}
