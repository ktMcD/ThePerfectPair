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


  ngOnInit(): void {}

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
      })
  }

  AddRecipe(newRecipe: INewRecipe) {
    console.log(newRecipe)
    this.repositoryService.AddRecipeToDb(newRecipe).subscribe(

      () => {
        this.ngOnInit();
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

  getLatestRecipe(){
    this.repositoryService.getLatestRecipe().subscribe(
      (response) => {
        this.getLatestId = response.foodId
      }
    )
  }
  
}

