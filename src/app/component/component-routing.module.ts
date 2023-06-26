import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SugerenciaComponent } from '../component/sugerencia/sugerencia.component';
import { SugerenciaCrearComponent } from '../component/sugerencia/sugerencia-crear/sugerencia-crear.component';
import { DestinoComponent } from '../component/destino/destino.component';
import { DestinoCrearComponent } from '../component/destino/destino-crear/destino-crear.component';
import { TipodemembresiaComponent } from '../component/tipodemembresia/tipodemembresia.component';
import { TipodemembresiaCrearComponent } from '../component/tipodemembresia/tipodemembresia-crear/tipodemembresia-crear.component';
import { UniversidadComponent } from '../component/universidad/universidad.component';
import { UniversidadCrearComponent } from '../component/universidad/universidad-crear/universidad-crear.component';
import { NavComponent } from '../component/nav/nav.component';
import { WelcomePageComponent } from '../component/welcome-page/welcome-page.component';
import { PagoComponent } from '../component/pago/pago.component';
import { PagoCrearComponent } from '../component/pago/pago-crear/pago-crear.component';
import { ProfesorComponent } from '../component/profesor/profesor.component';
import { ProfesorCrearComponent } from '../component/profesor/profesor-crear/profesor-crear.component';
import { RutaComponent } from '../component/ruta/ruta.component';
import { RutaCrearComponent } from '../component/ruta/ruta-crear/ruta-crear.component';
import { UbicacionCrearComponent } from '../component/ubicacion/ubicacion-crear/ubicacion-crear.component';
import { UbicacionComponent } from '../component/ubicacion/ubicacion.component';
import { UbicacionfavoritaCrearComponent } from '../component/ubicacionfavorita/ubicacionfavorita-crear/ubicacionfavorita-crear.component';
import { UsuarioCrearComponent } from '../component/usuario/usuario-crear/usuario-crear.component';
import { UbicacionfavoritaComponent } from '../component/ubicacionfavorita/ubicacionfavorita.component';
import { UsuarioComponent } from '../component/usuario/usuario.component';
import { GuardService } from '../service/guard.service';
import { NuevoUserComponent } from './nuevo-user/nuevo-user.component';
import { Error404Component } from './error404/error404.component';
import { ReportesComponent } from './reportes/reportes.component';
import { Reporte1Component } from './reportes/reporte1/reporte1.component';

const routes: Routes = [
  {
    path:'sugerencias', component:SugerenciaComponent, children:[
      {path:'sugerenciacrear',component:SugerenciaCrearComponent},
      {path:'edicionS/:id',component:SugerenciaCrearComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'destinos',component:DestinoComponent,children:[
      {path:'destinocrear',component:DestinoCrearComponent},
      {path:'edicionD/:id',component:DestinoCrearComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'membresias',component:TipodemembresiaComponent,children:[
      {path:'membresiacrear',component:TipodemembresiaCrearComponent},
      {path:'edicionM/:id',component:TipodemembresiaCrearComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'universidades',component:UniversidadComponent,children:[
      {path:'universidadcrear',component:UniversidadCrearComponent},
      {path:'edicionU/:id',component:UniversidadCrearComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'pagos', component:PagoComponent, children:[
      {path:'pagocrear',component:PagoCrearComponent},
      {path:'edicionP/:id',component:PagoCrearComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'profesores',component:ProfesorComponent,children:[
      {path:'profesorcrear',component:ProfesorCrearComponent},
      {path:'edicionP/:id',component:ProfesorCrearComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'rutas',component:RutaComponent,children:[
      {path:'rutacrear',component:RutaCrearComponent},
      {path:'edicionR/:id',component:RutaCrearComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'ubicaciones',component:UbicacionComponent,children:[
      {path:'ubicacioncrear',component:UbicacionCrearComponent},
      {path:'edicionU/:id',component:UbicacionCrearComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'ubicacionesfavoritas',component:UbicacionfavoritaComponent,children:[
      {path:'ubicacionfavoritacrear',component:UbicacionfavoritaCrearComponent},
      {path:'edicionU/:id',component:UbicacionfavoritaCrearComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'usuarios',component:UsuarioComponent,children:[
      {path:'usuariocrear',component:UsuarioCrearComponent},
      {path:'edicionU/:id',component:UsuarioCrearComponent},
    ],canActivate:[GuardService]
  },
  {
    path:'reportes',component:ReportesComponent,children:[
      {path:'reporte1',component:Reporte1Component}
    ],canActivate:[GuardService]
  },
  {path:"nav",component:NavComponent,canActivate:[GuardService]},
  {path: "bienvenida", component:WelcomePageComponent, canActivate:[GuardService]},
  {path: "nuevito", component:NuevoUserComponent, canActivate:[GuardService]},
  {path: "error", component:Error404Component, canActivate:[GuardService]},


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
