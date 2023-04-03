import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PairingListComponent } from './food-wine-pairing/pairing-list/pairing-list.component';
import { WinePairingListComponent } from './wine-food-pairing/wine-pairing-list/wine-pairing-list.component';

const routes: Routes = [
{path: 'food', component:PairingListComponent},
{path: 'wine-pairing-list', component:WinePairingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
