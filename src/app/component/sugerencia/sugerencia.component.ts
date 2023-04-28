import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sugerencia',
  templateUrl: './sugerencia.component.html',
  styleUrls: ['./sugerencia.component.css']
})
export class SugerenciaComponent implements OnInit {
  ngOnInit(): void {}

  constructor(public route:ActivatedRoute){}
}
