import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RutaService } from 'src/app/service/ruta.service';
import { Ruta } from 'src/app/model/Ruta';
import { Usuario } from 'src/app/model/Usuario';
import { Destino } from 'src/app/model/Destino';
import { UsuarioService } from 'src/app/service/usuario.service';
import { DestinoService } from 'src/app/service/destino.service';

@Component({
  selector: 'app-ruta-crear',
  templateUrl: './ruta-crear.component.html',
  styleUrls: ['./ruta-crear.component.css']
})
export class RutaCrearComponent implements OnInit{
  id:number=0;
  idU:number=0;
  idD:number=0;
  edicionR:boolean=false;
  form:FormGroup=new FormGroup({});
  listaU: Usuario[] = [];
  listaD: Destino[] = [];
  ruta:Ruta=new Ruta();
  mensaje: string="";
  constructor(
    private rS:RutaService,
    private router: Router,
    private route:ActivatedRoute,
    private uS:UsuarioService,
    private dS:DestinoService){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicionR=data['id']!=null;
      this.init();
    })
    this.uS.list().subscribe(data => { this.listaU = data });
    this.dS.list().subscribe(data => { this.listaD = data });
    this.form=new FormGroup({
      id:new FormControl(),
      usuario:new FormControl(),
      destino:new FormControl()
    })
  }
  aceptar():void{
    this.ruta.idRuta=this.form.value['id'];
    this.ruta.usuario.nombreUsuario=this.form.value['usuario.nombreUsuario'];
    this.ruta.destino.aulaDestino=this.form.value['destino.aulaDestino'];
    //if (this.form.value['usuario.nombreUsuario'].length>0) {
    if (this.idD && this.idU>0) {
      if (this.edicionR) {
        let u = new Usuario();
        u.idUsuario = this.idU;
        this.ruta.usuario=u;
        let d = new Destino();
        d.idDestino = this.idD;
        this.ruta.destino=d;
        this.rS.update(this.ruta).subscribe(()=>{
          this.rS.list().subscribe((data)=>{
            this.rS.setList(data);
          })
        })
      }else{
        let u = new Usuario();
        u.idUsuario = this.idU;
        this.ruta.usuario=u;
        let d = new Destino();
        d.idDestino = this.idD;
        this.ruta.destino=d;
        this.rS.insert(this.ruta).subscribe(data=>{
          this.rS.list().subscribe(data=>{
            this.rS.setList(data);
          })
        })
      }
      this.router.navigate(['/components/rutas']);
    }else{
      this.mensaje="Ingrese dato";
    }
  }
  init(){
    if(this.edicionR){
      this.rS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idRuta),
          usuario:new FormControl(data.usuario.nombreUsuario),
          destino:new FormControl(data.destino.aulaDestino)
        });
      });
    }
  }
}
