import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-destino',
  templateUrl: './destino.component.html',
  styleUrls: ['./destino.component.css']
})
export class DestinoComponent implements OnInit{
  ngOnInit(): void {}
  constructor(public route:ActivatedRoute){}
}
