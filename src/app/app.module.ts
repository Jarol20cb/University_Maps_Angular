import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatTableModule } from '@angular/material/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MembresiaComponent } from './page/membresia/membresia.component';
import { MembresiaListarComponent } from './page/membresia/membresia-listar/membresia-listar.component';// <-- Agregar HttpClientModule aquí

@NgModule({
  declarations: [
    AppComponent,
    MembresiaComponent,
    MembresiaListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // <-- Agregar HttpClientModule aquí
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
