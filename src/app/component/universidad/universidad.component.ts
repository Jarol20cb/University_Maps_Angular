import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-universidad',
  templateUrl: './universidad.component.html',
  styleUrls: ['./universidad.component.css']
})
export class UniversidadComponent implements OnInit{
  ngOnInit(): void {}

  constructor(public route:ActivatedRoute){}
}
