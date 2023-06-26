import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { JwtRequest } from 'src/app/model/jwtRequest';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit{
  role:string="";
  ngOnInit(): void {
    this.role=this.ls.showRole();
  }

  constructor(public route:ActivatedRoute, private router: Router,private ls:LoginService){}
  cerrarSesion(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  showOptions = false;

  toggleOptions() {
    this.showOptions = !this.showOptions;
  }


}
