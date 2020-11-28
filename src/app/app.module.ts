import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { apiService } from './services/api.service'
import { AppComponent } from './app.component';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { MemoryComponent } from './composants/memory/memory.component';
import { GameCardComponent } from './composants/memory/card/game-card/game-card.component';
import { RestartDialogComponent } from './composants/memory/restart-dialog/restart-dialog/restart-dialog.component';
import { MatCommonModule } from '@angular/material/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSliderModule} from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list'; 
import { MatBottomSheetModule, MAT_BOTTOM_SHEET_DEFAULT_OPTIONS } from '@angular/material/bottom-sheet'
import {MatListModule} from '@angular/material/list';
import { OppenedOptionComponent, OptionsComponent, NbcardsComponent } from './composants/memory/options/options.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MemoryComponent,
    GameCardComponent,
    RestartDialogComponent,
    OptionsComponent,
    OppenedOptionComponent,
    NbcardsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatCommonModule,
    MatBottomSheetModule,
    MatListModule,
    MatSliderModule,
    MatGridListModule
  ],
  entryComponents:[RestartDialogComponent],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}, 
    apiService,
    {provide: MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
