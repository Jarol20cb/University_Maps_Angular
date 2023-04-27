import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembresiaComponent } from './page/membresia/membresia.component';
import { MembresiaCreaeditaComponent } from './page/membresia/membresia-creaedita/membresia-creaedita.component';

const routes: Routes = [
 // { path: '', redirectTo: 'https://jarol20cb.github.io/University-Maps/', pathMatch: 'full' },
  {
    path: 'membresias', component: MembresiaComponent, children: [
      {path:'MembresiaEdita',component:MembresiaCreaeditaComponent},
      { path: 'edicion/:id', component: MembresiaCreaeditaComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
