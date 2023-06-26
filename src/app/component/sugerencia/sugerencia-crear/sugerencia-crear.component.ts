import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { ActivatedRoute, Params, Router } from '@angular/router';
import * as moment from 'moment';
import { Sugerencia } from 'src/app/model/Sugerencia';
import { Usuario } from 'src/app/model/Usuario';
import { SugerenciaService } from 'src/app/service/sugerencia.service';
import { UsuarioService } from 'src/app/service/usuario.service';
@Component({
  selector: 'app-sugerencia-crear',
  templateUrl: './sugerencia-crear.component.html',
  styleUrls: ['./sugerencia-crear.component.css']
})
export class SugerenciaCrearComponent implements OnInit{
  id:number=0;
  edicionS:boolean=false;
  form:FormGroup=new FormGroup({});
  listaU: Usuario[] = [];
  sugerencia:Sugerencia=new Sugerencia();
  mensaje: string="";
  constructor(private sS:SugerenciaService, private router: Router,private route:ActivatedRoute,private uS:UsuarioService){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicionS=data['id']!=null;
      this.init();
    })
    this.uS.list().subscribe(data => { this.listaU = data });
    this.form=new FormGroup({
      id:new FormControl(),
      descripcionSugerencia:new FormControl(),
      usuario:new FormControl()
    })
  }

  aceptar():void{
    this.sugerencia.idSugerencia=this.form.value['id'];
    this.sugerencia.descripcionSugerencia=this.form.value['descripcionSugerencia'];
    this.sugerencia.usuario.nombreUsuario=this.form.value['usuario.nombreUsuario'];
    if (this.form.value['descripcionSugerencia'].length>0) {
      if (this.edicionS) {
        let u = new Usuario();
        u.idUsuario = this.id;
        this.sugerencia.usuario=u;
        this.sS.update(this.sugerencia).subscribe(()=>{
          this.sS.list().subscribe((data)=>{
            this.sS.setList(data);
          })
        })
      }else{
        let u = new Usuario();
        u.idUsuario = this.id;
        this.sugerencia.usuario=u;
        this.sS.insert(this.sugerencia).subscribe(data=>{
          this.sS.list().subscribe(data=>{
            this.sS.setList(data);
          })
        })
      }
      this.router.navigate(['/components/sugerencias']);
    }else{
      this.mensaje="Ingrese una descripcion";
    }
  }

  init(){
    if(this.edicionS){
      this.sS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idSugerencia),
          descripcionSugerencia:new FormControl(data.descripcionSugerencia),
          usuario:new FormControl(data.usuario),
        });
      });
    }
  }
}
