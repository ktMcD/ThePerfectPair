import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { INewRecipe, IRecipe } from 'src/app/Interfaces/RandomRecipe';
import { IRandomWine } from 'src/app/Interfaces/RandomWine';
import { IRating } from 'src/app/Interfaces/Rating';
import { RandomPairingServiceService } from '../random-pairing-service.service';

@Component({
  selector: 'app-random-pairing-list',
  templateUrl: './random-pairing-list.component.html',
  styleUrls: ['./random-pairing-list.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})

export class RandomPairingListComponent implements OnInit {

  @Input('rating') rating: number = 3;
  @Input('starCount') starCount: number = 5;
  @Input('color') color: string = 'accent';
  @Output() ratingUpdated = new EventEmitter();

  private snackBarDuration: number = 2000;
  ratingArr: any[] = [];

  constructor(private repositoryService: RandomPairingServiceService) {
  }


  ngOnInit(): void { }

  randomRecipe: any
  recipes: IRecipe[] = []
  recipeTitle: string = ""
  recipeId: number = -1
  recipeImage: string = ""
  recipeLink: string = ""
  randomFoodId: number = -1
  randomWineId: number = -1
  getLatestId: number = -1
  randomWine: any
  wineTitle: string = ""
  wineImage: string = ""

  getRandomRecipe() {
    this.repositoryService.getRandomRecipe().subscribe(
      (response) => {
        this.randomRecipe = response;
        this.recipes = response.recipes;
        this.recipeTitle = this.recipes[0].title
        this.recipeId = this.recipes[0].id
        this.recipeImage = this.recipes[0].image
        this.recipeLink = this.recipes[0].sourceUrl
        //console.log(this.recipeTitle)

        let newRecipe: INewRecipe = {
          Title: this.recipeTitle,
          spoonacular: this.recipeId,
          imageUrl: this.recipeImage,
          linkUrl: this.recipeLink
        }
        this.AddRecipe(newRecipe)

      })
  }

  getRandomWine() {
    this.repositoryService.getRandomWine().subscribe(
      (response) => {
        console.log(response);
        this.randomWine = response;
        this.wineTitle = response.name
        this.randomWineId = response.drinkId

        let newWine: IRandomWine = {
          drinkId: this.randomWineId,
          name: this.wineTitle
        }
      }
      )
      this.getRandomWinePhoto()
  }

  getRandomWinePhoto() {

    var randomNumber = Math.floor(Math.random() * 4) + 1

    if (randomNumber == 1) {
      this.wineImage = "https://cdn.i-scmp.com/sites/default/files/d8/images/canvas/2022/11/01/8c0fa913-6541-419d-8133-f08282650598_d0755b16.jpg"
    }
    else if (randomNumber == 2) {
      this.wineImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4zDcprbGNCGYBdOyeybM0P_3Xsj2jkOwzuUDuKbrr79Te98oPaJHU0qM_4zRj54v5E0gmcRAyJSU&usqp=CAU&ec=48665699"
    }
    else if (randomNumber == 3) {
      this.wineImage = "https://www.thespruceeats.com/thmb/lG4vy7EDYyn7NTKPdmOxnh6Y7xM=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/close-up-of-wine-bottles-over-white-background-609198963-5844948f5f9b5851e57ef400.jpg"
    }
    else {
      this.wineImage = "https://hips.hearstapps.com/hmg-prod/images/red-wine-1590591610.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*"
    }
  }

  AddRecipe(newRecipe: INewRecipe) {
    console.log(newRecipe)
    this.repositoryService.AddRecipeToDb(newRecipe).subscribe(

      () => {
        this.ngOnInit();
        this.getLatestRecipe();
      }
    );
  }

  AddRating(form: NgForm) {

    let newRating: IRating = {
      DrinkId: this.randomWineId,
      FoodId: this.getLatestId,
      RatingNumber: form.form.value.ratingdropdown,
      UserComments: ""
    }
    console.log(newRating)

    this.repositoryService.AddRatingToDb(newRating).subscribe(

      () => {
        this.ngOnInit();
      }
    );
  }

  getLatestRecipe() {
    this.repositoryService.getLatestRecipe().subscribe(
      (response) => {
        this.getLatestId = response.foodId
        console.log(response);
      }
    )
  }

}

