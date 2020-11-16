import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Exercice1Component } from './pages/exercice1/exercice1.component';
import { Exercice2Component } from './pages/exercice2/exercice2.component';
import { Exercice3Component } from './pages/exercice3/exercice3.component';
import { Exercice4Component } from './pages/exercice4/exercice4.component';
import { Exercice5Component } from './pages/exercice5/exercice5.component';
import { Exercice6Component } from './pages/exercice6/exercice6.component';

const routes: Routes = [
  { path: 'exercice1', component: Exercice1Component},
  { path: 'exercice2', component: Exercice2Component},
  { path: 'exercice3', component: Exercice3Component},
  { path: 'exercice4', component: Exercice4Component},
  { path: 'exercice5', component: Exercice5Component},
  { path: 'exercice6', component: Exercice6Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
