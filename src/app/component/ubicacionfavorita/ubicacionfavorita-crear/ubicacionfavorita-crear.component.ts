import { UbicacionfavoritaService } from './../../../service/ubicacionfavorita.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ubicacion } from 'src/app/model/Ubicacion';
import { UbicacionFavorita } from 'src/app/model/UbicacionFavorita';
import { Usuario } from 'src/app/model/Usuario';
import { UbicacionService } from 'src/app/service/ubicacion.service';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-ubicacionfavorita-crear',
  templateUrl: './ubicacionfavorita-crear.component.html',
  styleUrls: ['./ubicacionfavorita-crear.component.css']
})
export class UbicacionfavoritaCrearComponent implements OnInit{
  id:number=0;
  idUb:number=0;
  idUs:number=0;
  edicionU:boolean=false;
  form:FormGroup=new FormGroup({});
  listaUb: Ubicacion[] = [];
  listaUs: Usuario[] = [];
  ubicacionfavorita:UbicacionFavorita=new UbicacionFavorita();
  mensaje: string="";
  constructor(
    private uS:UbicacionfavoritaService,
    private router: Router,
    private route:ActivatedRoute,
    private ubS:UbicacionService,
    private usS:UsuarioService){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicionU=data['id']!=null;
      this.init();
    })
    this.ubS.list().subscribe(data => { this.listaUb = data });
    this.usS.list().subscribe(data => { this.listaUs = data });
    this.form=new FormGroup({
      id:new FormControl(),
      descripcionUbicacionFavorita:new FormControl(),
      ubicacion:new FormControl(),
      usuario:new FormControl()
    })
  }
  aceptar():void{
    this.ubicacionfavorita.idUbicacionFavorita=this.form.value['id'];
    this.ubicacionfavorita.descripcionUbicacionFavorita=this.form.value['descripcionUbicacionFavorita'];
    this.ubicacionfavorita.ubicacion.descripcionUbicacion=this.form.value['ubicacion.descripcionUbicacion'];
    this.ubicacionfavorita.usuario.nombreUsuario=this.form.value['usuario.nombreUsuario'];
    if (this.form.value['descripcionUbicacionFavorita'].length>0) {
      if (this.edicionU) {
        let ub = new Ubicacion();
        ub.idUbicacion = this.idUb;
        this.ubicacionfavorita.ubicacion=ub;
        let us = new Usuario();
        us.idUsuario = this.idUs;
        this.ubicacionfavorita.usuario=us;
        this.uS.update(this.ubicacionfavorita).subscribe(()=>{
          this.uS.list().subscribe((data)=>{
            this.uS.setList(data);
          })
        })
      }else{
        let ub = new Ubicacion();
        ub.idUbicacion = this.idUb;
        this.ubicacionfavorita.ubicacion=ub;
        let us = new Usuario();
        us.idUsuario = this.idUs;
        this.ubicacionfavorita.usuario=us;
        this.uS.insert(this.ubicacionfavorita).subscribe(data=>{
          this.uS.list().subscribe(data=>{
            this.uS.setList(data);
          })
        })
      }
      this.router.navigate(['/components/ubicacionesfavoritas']);
    }else{
      this.mensaje="Ingrese dato";
    }
  }
  init(){
    if(this.edicionU){
      this.uS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idUbicacionFavorita),
          descripcionUbicacionFavorita:new FormControl(data.descripcionUbicacionFavorita),
          ubicacion:new FormControl(data.ubicacion.descripcionUbicacion),
          usuario:new FormControl(data.usuario.nombreUsuario)
        });
      });
    }
  }
}
