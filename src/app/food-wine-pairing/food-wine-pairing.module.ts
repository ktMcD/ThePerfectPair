import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PairingListComponent } from './pairing-list/pairing-list.component';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    PairingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    PairingListComponent
  ]
})
export class FoodWinePairingModule { }
