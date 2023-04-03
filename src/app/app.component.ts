import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}
)
export class AppComponent {
  title = 'ThePerfectPair';
  pickWineUrl = 'https://www.themillkitchenandbar.com/blog/pick-wine-for-meal';
  pairingUrl = 'https://winefolly.com/wine-pairing/getting-started-with-food-and-wine-pairing/';
 
  w3_open() {
   document.getElementById("mySidebar").style.display = "block";}
   
  w3_close() {
     document.getElementById("mySidebar").style.display = "none";
   }

   navigate_to_pick_wine_link(){
    window.location.href=`${this.pickWineUrl}`;
   }

   navigate_to_food_wine_pair(){
    window.location.href=`${this.pairingUrl}`;
   }
 }

