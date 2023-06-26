import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Pago } from 'src/app/model/Pago';
import { PagoService } from 'src/app/service/pago.service';
import { Usuario } from 'src/app/model/Usuario';
import { TipoDeMembresia } from 'src/app/model/TipoDeMembresia';
import { UsuarioService } from 'src/app/service/usuario.service';
import { TipodemembresiaService } from 'src/app/service/tipodemembresia.service';

@Component({
  selector: 'app-pago-crear',
  templateUrl: './pago-crear.component.html',
  styleUrls: ['./pago-crear.component.css']
})
export class PagoCrearComponent implements OnInit{
  id:number=0;
  idU:number=0;
  idM:number=0;
  edicionP:boolean=false;
  form:FormGroup=new FormGroup({});
  pago:Pago=new Pago();
  listaM: TipoDeMembresia[] = [];
  listaU: Usuario[] = [];
  mensaje: string="";
  constructor(
    private pS:PagoService,
    private router: Router,
    private route:ActivatedRoute,
    private uS:UsuarioService,
    private mS:TipodemembresiaService){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicionP=data['id']!=null;
      this.init();
    })
    this.uS.list().subscribe(data => { this.listaU = data });
    this.mS.list().subscribe(data => { this.listaM = data });
    this.form=new FormGroup({
      id:new FormControl(),
      descripcionPago:new FormControl(),
      montoPago:new FormControl(),
      metodoPago:new FormControl(),
      tipodemembresia:new FormControl(),
      usuario:new FormControl()
    })
  }

  aceptar():void{
    this.pago.idPago=this.form.value['id'];
    this.pago.descripcionPago=this.form.value['descripcionPago'];
    this.pago.montoPago=this.form.value['montoPago'];
    this.pago.metodoPago=this.form.value['metodoPago'];
    this.pago.tipodemembresia.descripcionTipoDeMembresia=this.form.value['tipodemembresia.descripcionTipoDeMembresia'];
    this.pago.usuario.nombreUsuario=this.form.value['usuario.nombreUsuario'];
    if (this.form.value['descripcionPago'].length>0) {
      if (this.edicionP) {
        let m = new TipoDeMembresia();
        m.idTipoDeMembresia = this.idM;
        this.pago.tipodemembresia=m;
        let u = new Usuario();
        u.idUsuario = this.idU;
        this.pago.usuario=u;
        this.pS.update(this.pago).subscribe(()=>{
          this.pS.list().subscribe((data)=>{
            this.pS.setList(data);
          })
        })
      }else{
        let m = new TipoDeMembresia();
        m.idTipoDeMembresia = this.idM;
        this.pago.tipodemembresia=m;
        let u = new Usuario();
        u.idUsuario = this.idU;
        this.pago.usuario=u;
        this.pS.insert(this.pago).subscribe(data=>{
          this.pS.list().subscribe(data=>{
            this.pS.setList(data);
          })
        })
      }
      this.router.navigate(['/components/pagos']);
    }else{
      this.mensaje="Ingrese dato";
    }
  }

  init(){
    if(this.edicionP){
      this.pS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idPago),
          descripcionPago:new FormControl(data.descripcionPago),
          montoPago:new FormControl(data.montoPago),
          metodoPago:new FormControl(data.metodoPago),
          tipodemembresia:new FormControl(data.tipodemembresia.descripcionTipoDeMembresia),
          usuario:new FormControl(data.usuario.nombreUsuario)
        });
      });
    }
  }
}
