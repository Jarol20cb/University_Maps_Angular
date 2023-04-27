import { Component, OnInit } from '@angular/core';
//imports agregados
import { FormGroup, FormControl } from '@angular/forms'
import { Membresia } from 'src/app/model/membresia';
import { MembresiaService } from 'src/app/service/membresia.service';
import * as moment from 'moment';
import { ActivatedRoute, Params, Router } from '@angular/router';



//imports agregados

@Component({
  selector: 'app-membresia-creaedita',
  templateUrl: './membresia-creaedita.component.html',
  styleUrls: ['./membresia-creaedita.component.css'],
 
})
export class MembresiaCreaeditaComponent implements OnInit  {
  //codigo agregado
    id=0;
    edicion=false;
    form: FormGroup = new FormGroup({});
    membresia: Membresia = new Membresia()
    mensaje = ""
    maxFecha: Date = moment().add(-1, 'days').toDate();

    constructor(private Mb: MembresiaService, private router: Router, private route:ActivatedRoute) {}
  
    ngOnInit(): void {
      this.route.params.subscribe((data:Params)=>{
        
        this.id=data['id'];
        this.edicion=data['id']!=null;
        this.init();
      
      })
      this.form=new FormGroup({
        id:new FormControl(),
      FechaInicio:new FormControl(),
      FechaFin:new FormControl(),
      })      
      }




    aceptar(): void {
      this.membresia.id = this.form.value['id'];
      this.membresia.FechaInicio = this.form.value['FechaInicio'];
      this.membresia.FechaFin = this.form.value['FechaFin'];

      //agregar esta validacion
      if (this.edicion) {
        this.Mb.update(this.membresia).subscribe(() => {
          this.router.navigate(['/membresias']);
        });
      } else {
        this.Mb.insert(this.membresia).subscribe(() => {
          this.router.navigate(['/membresias']);
        });
      }
    }
    
    init()
    {
      if(this.edicion)
      {
        this.Mb.listId(this.id).subscribe(data=>
          {
            this.form=new FormGroup({
              id:new FormControl(data.id),
              FechaInicio: new FormControl (data.FechaInicio),
              FechaFin:new FormControl(data.FechaFin),
    
            })
          })
      }
    }
}

