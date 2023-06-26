import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { HttpClientModule } from '@angular/common/http';
import { SugerenciaComponent } from './sugerencia/sugerencia.component';
import { SugerenciaListarComponent } from './sugerencia/sugerencia-listar/sugerencia-listar.component';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { SugerenciaCrearComponent } from './sugerencia/sugerencia-crear/sugerencia-crear.component';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { UniversidadComponent } from '../component/universidad/universidad.component';
import { DestinoComponent } from '../component/destino/destino.component';
import { TipodemembresiaComponent } from '../component/tipodemembresia/tipodemembresia.component';
import { DestinoListarComponent } from '../component/destino/destino-listar/destino-listar.component';
import { DestinoCrearComponent } from '../component/destino/destino-crear/destino-crear.component';
import { TipodemembresiaListarComponent } from '../component/tipodemembresia/tipodemembresia-listar/tipodemembresia-listar.component';
import { TipodemembresiaCrearComponent } from '../component/tipodemembresia/tipodemembresia-crear/tipodemembresia-crear.component';
import { UniversidadListarComponent } from '../component/universidad/universidad-listar/universidad-listar.component';
import { UniversidadCrearComponent } from '../component/universidad/universidad-crear/universidad-crear.component';
import { NavComponent } from '../component/nav/nav.component';
import{MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { SugerenciaDialogoComponent } from '../component/sugerencia/sugerencia-listar/sugerencia-dialogo/sugerencia-dialogo.component';
import { DestinoDialogoComponent } from '../component/destino/destino-listar/destino-dialogo/destino-dialogo.component';
import { TipodemembresiaDialogoComponent } from '../component/tipodemembresia/tipodemembresia-listar/tipodemembresia-dialogo/tipodemembresia-dialogo.component';
import { UniversidadDialogoComponent } from '../component/universidad/universidad-listar/universidad-dialogo/universidad-dialogo.component';
import { WelcomePageComponent } from '../component/welcome-page/welcome-page.component';
import { VistaComponent } from '../component/welcome-page/vista/vista.component';
import { NgxPaginationModule } from 'ngx-pagination';  //esta libreria es para la paginacion ----> npm install ngx-pagination --save
import {MatPaginatorModule} from '@angular/material/paginator';
import { PagoComponent } from '../component/pago/pago.component';
import { ProfesorComponent } from '../component/profesor/profesor.component';
import { RutaComponent } from '../component/ruta/ruta.component';
import { UbicacionComponent } from '../component/ubicacion/ubicacion.component';
import { UbicacionfavoritaComponent } from '../component/ubicacionfavorita/ubicacionfavorita.component';
import { UsuarioComponent } from '../component/usuario/usuario.component';
import { PagoListarComponent } from '../component/pago/pago-listar/pago-listar.component';
import { PagoCrearComponent } from '../component/pago/pago-crear/pago-crear.component';
import { PagoDialogoComponent } from '../component/pago/pago-listar/pago-dialogo/pago-dialogo.component';
import { ProfesorListarComponent } from '../component/profesor/profesor-listar/profesor-listar.component';
import { ProfesorDialogoComponent } from '../component/profesor/profesor-listar/profesor-dialogo/profesor-dialogo.component';
import { RutaListarComponent } from '../component/ruta/ruta-listar/ruta-listar.component';
import { RutaDialogoComponent } from '../component/ruta/ruta-listar/ruta-dialogo/ruta-dialogo.component';
import { ProfesorCrearComponent } from '../component/profesor/profesor-crear/profesor-crear.component';
import { RutaCrearComponent } from '../component/ruta/ruta-crear/ruta-crear.component';
import { UbicacionListarComponent } from '../component/ubicacion/ubicacion-listar/ubicacion-listar.component';
import { UbicacionDialogoComponent } from '../component/ubicacion/ubicacion-listar/ubicacion-dialogo/ubicacion-dialogo.component';
import { UbicacionCrearComponent } from '../component/ubicacion/ubicacion-crear/ubicacion-crear.component';
import { UbicacionfavoritaListarComponent } from '../component/ubicacionfavorita/ubicacionfavorita-listar/ubicacionfavorita-listar.component';
import { UbicacionfavoritaDialogoComponent } from '../component/ubicacionfavorita/ubicacionfavorita-listar/ubicacionfavorita-dialogo/ubicacionfavorita-dialogo.component';
import { UbicacionfavoritaCrearComponent } from '../component/ubicacionfavorita/ubicacionfavorita-crear/ubicacionfavorita-crear.component';
import { UsuarioListarComponent } from '../component/usuario/usuario-listar/usuario-listar.component';
import { UsuarioDialogoComponent } from '../component/usuario/usuario-listar/usuario-dialogo/usuario-dialogo.component';
import { UsuarioCrearComponent } from '../component/usuario/usuario-crear/usuario-crear.component';
import { ComponentRoutingModule } from './component-routing.module';
import { NuevoUserComponent } from './nuevo-user/nuevo-user.component';
import { Error404Component } from './error404/error404.component';
import { ReportesComponent } from './reportes/reportes.component';
import { Reporte1Component } from './reportes/reporte1/reporte1.component';
import { Reporte2Component } from './reportes/reporte2/reporte2.component';
import { Reporte3Component } from './reportes/reporte3/reporte3.component';
import { Reporte4Component } from './reportes/reporte4/reporte4.component';
import { Reporte5Component } from './reportes/reporte5/reporte5.component';
import { Reporte6Component } from './reportes/reporte6/reporte6.component';
import { Reporte7Component } from './reportes/reporte7/reporte7.component';
import { Reporte8Component } from './reportes/reporte8/reporte8.component';
import { Reporte9Component } from './reportes/reporte9/reporte9.component';


@NgModule({
  declarations: [
    SugerenciaComponent,
    SugerenciaListarComponent,
    SugerenciaCrearComponent,
    UniversidadComponent,
    DestinoComponent,
    TipodemembresiaComponent,
    DestinoListarComponent,
    DestinoCrearComponent,
    TipodemembresiaListarComponent,
    TipodemembresiaCrearComponent,
    UniversidadListarComponent,
    UniversidadCrearComponent,
    NavComponent,
    SugerenciaDialogoComponent,
    DestinoDialogoComponent,
    TipodemembresiaDialogoComponent,
    UniversidadDialogoComponent,
    WelcomePageComponent,
    VistaComponent,
    PagoComponent,
    ProfesorComponent,
    RutaComponent,
    UbicacionComponent,
    UbicacionfavoritaComponent,
    UsuarioComponent,
    PagoListarComponent,
    PagoCrearComponent,
    PagoDialogoComponent,
    ProfesorListarComponent,
    ProfesorDialogoComponent,
    RutaListarComponent,
    RutaDialogoComponent,
    ProfesorCrearComponent,
    RutaCrearComponent,
    UbicacionListarComponent,
    UbicacionDialogoComponent,
    UbicacionCrearComponent,
    UbicacionfavoritaListarComponent,
    UbicacionfavoritaDialogoComponent,
    UbicacionfavoritaCrearComponent,
    UsuarioListarComponent,
    UsuarioDialogoComponent,
    UsuarioCrearComponent,
    NuevoUserComponent,
    Error404Component,
    ReportesComponent,
    Reporte1Component,
    Reporte2Component,
    Reporte3Component,
    Reporte4Component,
    Reporte5Component,
    Reporte6Component,
    Reporte7Component,
    Reporte8Component,
    Reporte9Component
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatSelectModule,
    MatDatepickerModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    NgxPaginationModule, // Agregar aquí la librería para la paginacion
    MatPaginatorModule,
  ]
})
export class ComponentModule { }
