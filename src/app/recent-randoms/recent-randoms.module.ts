import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RandomRatingsComponent } from './random-ratings/random-ratings.component';



@NgModule({
  declarations: [
    RandomRatingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    RandomRatingsComponent
  ]
})
export class RecentRandomsModule { }
