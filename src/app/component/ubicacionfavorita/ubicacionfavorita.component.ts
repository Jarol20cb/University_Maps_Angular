import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ubicacionfavorita',
  templateUrl: './ubicacionfavorita.component.html',
  styleUrls: ['./ubicacionfavorita.component.css']
})
export class UbicacionfavoritaComponent implements OnInit{
  ngOnInit(): void {}
  constructor(public route:ActivatedRoute){}
}
