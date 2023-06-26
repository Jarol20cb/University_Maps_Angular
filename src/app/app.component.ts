import { Component } from '@angular/core';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string="";
  role:string="";
  constructor(private LoginService: LoginService) {
  }

  cerrar() {
    sessionStorage.clear();
  }

  verificar() {
    this.role=this.LoginService.showRole();
    return this.LoginService.verificar();
  }
  validarRol(){
    if(this.role=='MASTER' || this.role=='STAFF' || this.role=='USER'){
      return true;
    }else{
      return false;
    }
  }
}
