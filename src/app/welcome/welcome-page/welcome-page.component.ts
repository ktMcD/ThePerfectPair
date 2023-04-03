import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent {
  slidesIndex = 0;
  @ViewChildren("slides") slides: QueryList<ElementRef>;
  @ViewChildren("dot") dots: QueryList<ElementRef>;
  slider$;

  ngAfterViewInit() {
    this.showSlides();
  }

  pickWineUrl = 'https://www.themillkitchenandbar.com/blog/pick-wine-for-meal';
  pairingUrl = 'https://winefolly.com/wine-pairing/getting-started-with-food-and-wine-pairing/';

  navigate_to_pick_wine_link() {
    window.location.href = `${this.pickWineUrl}`;
  }

  navigate_to_food_wine_pair() {
    window.location.href = `${this.pairingUrl}`;
  }

  showSlides() {
    this.slides.forEach(
      (slidesDiv: ElementRef) =>
        (slidesDiv.nativeElement.style.display = "none")
    );
    this.slidesIndex += 1;

    if (this.slidesIndex > this.slides.length) {
      this.slidesIndex = 1;
    }
    this.dots.forEach(
      dotsDiv =>
      (dotsDiv.nativeElement.className = dotsDiv.nativeElement.className.replace(
        " active",
        ""
      ))
    );
    this.slides.toArray()[this.slidesIndex - 1].nativeElement.style.display =
      "block";
    this.dots.toArray()[this.slidesIndex - 1].nativeElement.className +=
      " active";
    setTimeout(() => {
      this.showSlides();
    }, 4000); // Change image every 2 seconds
  }
}
