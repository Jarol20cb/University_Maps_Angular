import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CerrarService {

  constructor() { }
  cerrar() {
    sessionStorage.clear();
  }
}
