import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Universidad } from 'src/app/model/Universidad';
import { UniversidadService } from 'src/app/service/universidad.service';

@Component({
  selector: 'app-universidad-crear',
  templateUrl: './universidad-crear.component.html',
  styleUrls: ['./universidad-crear.component.css']
})
export class UniversidadCrearComponent implements OnInit{
  id:number=0;
  edicionU:boolean=false;
  form:FormGroup=new FormGroup({});
  lista: Universidad[] = [];
  universidad:Universidad=new Universidad();
  mensaje: string="";
  constructor(private uS:UniversidadService, private router: Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicionU=data['id']!=null;
      this.init();
    })
    this.form=new FormGroup({
      id:new FormControl(),
      nombreUniversidad:new FormControl(),
      regionUniversidad:new FormControl(),
      distritoUniversidad:new FormControl(),
      calleUniversidad:new FormControl(),
      telefonoUniversidad:new FormControl(),
    })
  }

  aceptar():void{
    this.universidad.idUniversidad=this.form.value['id'];
    this.universidad.nombreUniversidad=this.form.value['nombreUniversidad'];
    this.universidad.regionUniversidad=this.form.value['regionUniversidad'];
    this.universidad.distritoUniversidad=this.form.value['distritoUniversidad'];
    this.universidad.calleUniversidad=this.form.value['calleUniversidad'];
    this.universidad.telefonoUniversidad=this.form.value['telefonoUniversidad'];
    if (this.form.value['nombreUniversidad'].length>0) {
      if (this.edicionU) {
        this.uS.update(this.universidad).subscribe(()=>{
          this.uS.list().subscribe((data)=>{
            this.uS.setList(data);
          })
        })
      }else{
        this.uS.insert(this.universidad).subscribe(data=>{
          this.uS.list().subscribe(data=>{
            this.uS.setList(data);
          })
        })
      }
      this.router.navigate(['/components/universidades']);
    }else{
      this.mensaje="Ingrese dato";
    }
  }

  init(){
    if(this.edicionU){
      this.uS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idUniversidad),
          nombreUniversidad:new FormControl(data.nombreUniversidad),
          regionUniversidad:new FormControl(data.regionUniversidad),
          distritoUniversidad:new FormControl(data.distritoUniversidad),
          calleUniversidad:new FormControl(data.calleUniversidad),
          telefonoUniversidad:new FormControl(data.telefonoUniversidad),
        });
      });
    }
  }
}
