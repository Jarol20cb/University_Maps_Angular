import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/service/usuario.service';
import * as moment from 'moment';
import { Universidad } from 'src/app/model/Universidad';
import { UniversidadService } from 'src/app/service/universidad.service';

@Component({
  selector: 'app-usuario-crear',
  templateUrl: './usuario-crear.component.html',
  styleUrls: ['./usuario-crear.component.css']
})
export class UsuarioCrearComponent implements OnInit{

  id:number=0;
  edicionU:boolean=false;
  form:FormGroup=new FormGroup({});
  listaU: Universidad[] = [];
  usuario:Usuario=new Usuario();
  maxFecha: Date = moment().add(-1, 'days').toDate();
  mensaje: string="";
  constructor(
    private uS:UsuarioService,
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
      nombreUsuario:new FormControl(),
      apellidoPaternoUsuario:new FormControl(),
      apellidoMaternoUsuario:new FormControl(),
      fechaNacimientoUsuario:new FormControl(),
      telefonoUsuario:new FormControl(),
      correoUsuario:new FormControl(),
      universidad:new FormControl()
    })
  }
  aceptar():void{
    this.usuario.idUsuario=this.form.value['id'];
    this.usuario.nombreUsuario=this.form.value['nombreUsuario'];
    this.usuario.apellidoPaternoUsuario=this.form.value['apellidoPaternoUsuario'];
    this.usuario.apellidoMaternoUsuario=this.form.value['apellidoMaternoUsuario'];
    this.usuario.fechaNacimientoUsuario=this.form.value['fechaNacimientoUsuario'];
    this.usuario.telefonoUsuario=this.form.value['telefonoUsuario'];
    this.usuario.correoUsuario=this.form.value['correoUsuario'];
    this.usuario.universidad.nombreUniversidad=this.form.value['universidad.nombreUniversidad'];
    if (this.form.value['nombreUsuario'].length>0) {
      if (this.edicionU) {
        let u = new Universidad();
        u.idUniversidad = this.id;
        this.usuario.universidad=u;
        this.uS.update(this.usuario).subscribe(()=>{
          this.uS.list().subscribe((data)=>{
            this.uS.setList(data);
          })
        })
      }else{
        let u = new Universidad();
        u.idUniversidad = this.id;
        this.usuario.universidad=u;
        this.uS.insert(this.usuario).subscribe(data=>{
          this.uS.list().subscribe(data=>{
            this.uS.setList(data);
          })
        })
      }
      this.router.navigate(['/components/usuarios']);
    }else{
      this.mensaje="Ingrese dato";
    }
  }
  init(){
    if(this.edicionU){
      this.uS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idUsuario),
          nombreUsuario:new FormControl(data.nombreUsuario),
          apellidoPaternoUsuario:new FormControl(data.apellidoPaternoUsuario),
          apellidoMaternoUsuario:new FormControl(data.apellidoMaternoUsuario),
          fechaNacimientoUsuario:new FormControl(data.fechaNacimientoUsuario),
          telefonoUsuario:new FormControl(data.telefonoUsuario),
          correoUsuario:new FormControl(data.correoUsuario),
          universidad:new FormControl(data.universidad.nombreUniversidad)
        });
      });
    }
  }
}
