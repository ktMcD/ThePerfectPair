import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {

  ngOnInit(): void {
    this.carousel();
  }

  pickWineUrl = 'https://www.themillkitchenandbar.com/blog/pick-wine-for-meal';
  pairingUrl = 'https://winefolly.com/wine-pairing/getting-started-with-food-and-wine-pairing/';

  navigate_to_pick_wine_link() {
    window.location.href = `${this.pickWineUrl}`;
  }

  navigate_to_food_wine_pair() {
    window.location.href = `${this.pairingUrl}`;
  }

  carousel() {
    var myIndex = 0;
    var i;
    var x = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    myIndex++;

    if (myIndex > x.length) { myIndex = 1 }
    x[myIndex - 1].style.display = "block";
    setTimeout(this.carousel, 2000); // Change image every 2 seconds
  }

}
