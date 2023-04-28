import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tipodemembresia',
  templateUrl: './tipodemembresia.component.html',
  styleUrls: ['./tipodemembresia.component.css']
})
export class TipodemembresiaComponent implements OnInit{
  ngOnInit(): void {}

  constructor(public route:ActivatedRoute){}
}
