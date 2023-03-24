import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomPairingListComponent } from './random-pairing-list/random-pairing-list.component';



@NgModule({
  declarations: [
    RandomPairingListComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    RandomPairingListComponent
  ]
})
export class RandomPairingsModule { }
