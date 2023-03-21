import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodWinePairingModule } from './food-wine-pairing/food-wine-pairing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FoodWinePairingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
