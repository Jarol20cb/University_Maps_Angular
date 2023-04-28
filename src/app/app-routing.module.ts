import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SugerenciaComponent } from './component/sugerencia/sugerencia.component';
import { SugerenciaCrearComponent } from './component/sugerencia/sugerencia-crear/sugerencia-crear.component';
import { DestinoComponent } from './component/destino/destino.component';
import { DestinoCrearComponent } from './component/destino/destino-crear/destino-crear.component';
import { TipodemembresiaComponent } from './component/tipodemembresia/tipodemembresia.component';
import { TipodemembresiaCrearComponent } from './component/tipodemembresia/tipodemembresia-crear/tipodemembresia-crear.component';
import { UniversidadComponent } from './component/universidad/universidad.component';
import { UniversidadCrearComponent } from './component/universidad/universidad-crear/universidad-crear.component';
import { NavComponent } from './component/nav/nav.component';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';

const routes: Routes = [
  {
    path:'sugerencias', component:SugerenciaComponent, children:[
      {path:'sugerenciacrear',component:SugerenciaCrearComponent},
      {path:'edicionS/:id',component:SugerenciaCrearComponent},
    ]
  },
  {
    path:'destinos',component:DestinoComponent,children:[
      {path:'destinocrear',component:DestinoCrearComponent},
      {path:'edicionD/:id',component:DestinoCrearComponent},
    ]
  },
  {
    path:'membresias',component:TipodemembresiaComponent,children:[
      {path:'membresiacrear',component:TipodemembresiaCrearComponent},
      {path:'edicionM/:id',component:TipodemembresiaCrearComponent},
    ]
  },
  {
    path:'universidades',component:UniversidadComponent,children:[
      {path:'universidadcrear',component:UniversidadCrearComponent},
      {path:'edicionU/:id',component:UniversidadCrearComponent},
    ]
  },
  {path:"nav",component:NavComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
