import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FoodWinePairingModule } from './food-wine-pairing/food-wine-pairing.module';
import { RandomPairingsModule } from './random-pairings/random-pairings.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FoodWinePairingModule,
    RandomPairingsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
