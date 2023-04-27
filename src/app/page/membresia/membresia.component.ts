import { Component, OnInit } from '@angular/core'; // <-- agregamos OnInit
import { ActivatedRoute } from '@angular/router';
//import { MembresiaService } from 'src/app/service/membresia.service'



@Component({
  selector: 'app-membresia',
  templateUrl: './membresia.component.html',
  styleUrls: ['./membresia.component.css']
})
export class MembresiaComponent implements OnInit{
  ngOnInit(): void {

  }
  constructor(public route:ActivatedRoute){}
}
