import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LieuComponent } from './composants/lieu/lieu.component';
import { Exercice1Component } from './pages/exercice1/exercice1.component';
import { Exercice2Component } from './pages/exercice2/exercice2.component';
import { Exercice3Component } from './pages/exercice3/exercice3.component';
import { Exercice4Component } from './pages/exercice4/exercice4.component';
import { Exercice5Component } from './pages/exercice5/exercice5.component';
import { Exercice6Component } from './pages/exercice6/exercice6.component';


@NgModule({
  declarations: [
    AppComponent,
    LieuComponent,
    Exercice1Component,
    Exercice2Component,
    Exercice3Component,
    Exercice4Component,
    Exercice5Component,
    Exercice6Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
