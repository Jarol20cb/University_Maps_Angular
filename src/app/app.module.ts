import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { SugerenciaComponent } from './component/sugerencia/sugerencia.component';
import { SugerenciaListarComponent } from './component/sugerencia/sugerencia-listar/sugerencia-listar.component';
import { MatTableModule } from '@angular/material/table'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { SugerenciaCrearComponent } from "./component/sugerencia/sugerencia-crear/sugerencia-crear.component";
import { MatNativeDateModule } from '@angular/material/core'
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatButtonModule } from '@angular/material/button';
import { UniversidadComponent } from './component/universidad/universidad.component';
import { DestinoComponent } from './component/destino/destino.component';
import { TipodemembresiaComponent } from './component/tipodemembresia/tipodemembresia.component';
import { DestinoListarComponent } from './component/destino/destino-listar/destino-listar.component';
import { DestinoCrearComponent } from './component/destino/destino-crear/destino-crear.component';
import { TipodemembresiaListarComponent } from './component/tipodemembresia/tipodemembresia-listar/tipodemembresia-listar.component';
import { TipodemembresiaCrearComponent } from './component/tipodemembresia/tipodemembresia-crear/tipodemembresia-crear.component';
import { UniversidadListarComponent } from './component/universidad/universidad-listar/universidad-listar.component';
import { UniversidadCrearComponent } from './component/universidad/universidad-crear/universidad-crear.component';
import { NavComponent } from './component/nav/nav.component';
import{MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { SugerenciaDialogoComponent } from './component/sugerencia/sugerencia-listar/sugerencia-dialogo/sugerencia-dialogo.component';
import { DestinoDialogoComponent } from './component/destino/destino-listar/destino-dialogo/destino-dialogo.component';
import { TipodemembresiaDialogoComponent } from './component/tipodemembresia/tipodemembresia-listar/tipodemembresia-dialogo/tipodemembresia-dialogo.component';
import { UniversidadDialogoComponent } from './component/universidad/universidad-listar/universidad-dialogo/universidad-dialogo.component';
import { WelcomePageComponent } from './component/welcome-page/welcome-page.component';
import { VistaComponent } from './component/welcome-page/vista/vista.component';

@NgModule({
  declarations: [
    AppComponent,
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
    VistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
