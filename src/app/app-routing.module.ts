import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PairingListComponent } from './food-wine-pairing/pairing-list/pairing-list.component';
import { RandomPairingListComponent } from './random-pairings/random-pairing-list/random-pairing-list.component';
import { WelcomePageComponent } from './welcome/welcome-page/welcome-page.component';
import { WinePairingListComponent } from './wine-food-pairing/wine-pairing-list/wine-pairing-list.component';

const routes: Routes = [
{path: "", component:WelcomePageComponent},
{path: 'food-wine-pairing', component:PairingListComponent},
{path: 'wine-food-pairing', component:WinePairingListComponent},
{path: 'random-pairing', component:RandomPairingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
