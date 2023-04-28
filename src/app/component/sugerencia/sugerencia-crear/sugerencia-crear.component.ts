import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Sugerencia } from 'src/app/model/Sugerencia';
import { SugerenciaService } from 'src/app/service/sugerencia.service';
@Component({
  selector: 'app-sugerencia-crear',
  templateUrl: './sugerencia-crear.component.html',
  styleUrls: ['./sugerencia-crear.component.css']
})
export class SugerenciaCrearComponent implements OnInit{
  id:number=0;
  edicionS:boolean=false;
  form:FormGroup=new FormGroup({});
  sugerencia:Sugerencia=new Sugerencia();
  mensaje: string="";
  constructor(private sS:SugerenciaService, private router: Router,private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicionS=data['id']!=null;
      this.init();
    })
    this.form=new FormGroup({
      id:new FormControl(),
      descripcionSugerencia:new FormControl(),
    })
  }

  aceptar():void{
    this.sugerencia.id=this.form.value['id'];
    this.sugerencia.descripcionSugerencia=this.form.value['descripcionSugerencia'];
    if (this.form.value['descripcionSugerencia'].length>0) {
      if (this.edicionS) {
        this.sS.update(this.sugerencia).subscribe(()=>{
          this.sS.list().subscribe((data)=>{
            this.sS.setList(data);
          })
        })
      }else{
        this.sS.insert(this.sugerencia).subscribe(data=>{
          this.sS.list().subscribe(data=>{
            this.sS.setList(data);
          })
        })
      }
      this.router.navigate(['sugerencias']);
    }else{
      this.mensaje="Ingrese una descripcion";
    }
  }

  init(){
    if(this.edicionS){
      this.sS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.id),
          descripcionSugerencia:new FormControl(data.descripcionSugerencia),
        });
      });
    }
  }
}
