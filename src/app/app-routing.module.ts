import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PairingListComponent } from './food-wine-pairing/pairing-list/pairing-list.component';

const routes: Routes = [
{path: 'food-wine-pair',component:PairingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
