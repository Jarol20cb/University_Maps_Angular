import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { MembresiaComponent } from './page/membresia/membresia.component';
import { MembresiaListarComponent } from './page/membresia/membresia-listar/membresia-listar.component';
import { MembresiaCreaeditaComponent } from './page/membresia/membresia-creaedita/membresia-creaedita.component';// <-- Agregar HttpClientModule aquí


import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import{FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule}from '@angular/material/select';
import{MatDatepickerModule} from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MembresiaDialogoComponent } from './page/membresia/membresia-listar/membresia-dialogo/membresia-dialogo.component';


@NgModule({
  declarations: [
    AppComponent,
    MembresiaComponent,
    MembresiaListarComponent,
    MembresiaCreaeditaComponent,
    MembresiaDialogoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
