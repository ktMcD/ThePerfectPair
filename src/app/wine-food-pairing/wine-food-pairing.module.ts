import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinePairingListComponent } from './wine-pairing-list/wine-pairing-list.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    WinePairingListComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    WinePairingListComponent
  ]
})
export class WineFoodPairingModule { }
