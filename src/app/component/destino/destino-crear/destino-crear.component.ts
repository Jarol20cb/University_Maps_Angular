import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Destino } from 'src/app/model/Destino';
import { DestinoService } from 'src/app/service/destino.service';

@Component({
  selector: 'app-destino-crear',
  templateUrl: './destino-crear.component.html',
  styleUrls: ['./destino-crear.component.css']
})
export class DestinoCrearComponent implements OnInit{
  id:number=0;
  edicionD:boolean=false;
  form:FormGroup=new FormGroup({});
  destino:Destino=new Destino();
  mensaje: string="";
  constructor(
    private dS:DestinoService,
    private router: Router,
    private route:ActivatedRoute){}
  ngOnInit(): void {
    this.route.params.subscribe((data:Params)=>{
      this.id=data['id'];
      this.edicionD=data['id']!=null;
      this.init();
    })
    this.form=new FormGroup({
      id:new FormControl(),
      aulaDestino:new FormControl(),
      pabellonDestino:new FormControl(),
      facultadDestino:new FormControl(),
    })
  }

  aceptar():void{
    this.destino.idDestino=this.form.value['id'];
    this.destino.aulaDestino=this.form.value['aulaDestino'];
    this.destino.pabellonDestino=this.form.value['pabellonDestino'];
    this.destino.facultadDestino=this.form.value['facultadDestino'];
    if (this.form.value['aulaDestino'].length>0) {
      if (this.edicionD) {
        this.dS.update(this.destino).subscribe(()=>{
          this.dS.list().subscribe((data)=>{
            this.dS.setList(data);
          })
        })
      }else{
        this.dS.insert(this.destino).subscribe(data=>{
          this.dS.list().subscribe(data=>{
            this.dS.setList(data);
          })
        })
      }
      this.router.navigate(['/components/destinos']);
    }else{
      this.mensaje="Ingrese dato";
    }
  }

  init(){
    if(this.edicionD){
      this.dS.listId(this.id).subscribe((data)=>{
        this.form=new FormGroup({
          id:new FormControl(data.idDestino),
          aulaDestino:new FormControl(data.aulaDestino),
          pabellonDestino:new FormControl(data.pabellonDestino),
          facultadDestino:new FormControl(data.facultadDestino),
        });
      });
    }
  }
}
