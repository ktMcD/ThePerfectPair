import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PairingServiceService } from 'src/app/food-wine-pairing/pairing-service.service';
import { IFoodWinePair } from 'src/app/Interfaces/FoodWinePair';
import { INewRecipe, IRandomRecipe, IRecipe } from 'src/app/Interfaces/RandomRecipe';
import { IRandomWine } from 'src/app/Interfaces/RandomWine';
import { IRating } from 'src/app/Interfaces/Rating';



@Component({
  selector: 'app-pairing-list',
  templateUrl: './pairing-list.component.html',
  styleUrls: ['./pairing-list.component.css']
})
export class PairingListComponent implements OnInit {
  @Input() foodInput: string = ""
  @Input() wineInput: string = ""

  constructor(private repositoryService: PairingServiceService) { }

  ngOnInit(): void {

  }

  FoodWinePair: any
  pairedWines: string[] = []
  WineFoodPair: any
  pairedFoods: string[] = []
  header: string = ""

  randomRecipe: any
  recipes: IRecipe[] = []
  recipeTitle: string = ""
  recipeId: number = -1
  recipeImage: string = ""
  recipeLink: string = ""
  randomFoodId: number = -1
  randomWineId: number = -1

  randomWine: any
  wineTitle: string = ""

  //newRecipe: IRandomRecipe | any

  getWines(form: NgForm) {
    this.foodInput = form.form.value.foodInput
    this.repositoryService.getWinePairing(this.foodInput).subscribe(
      (response) => {
        //console.log(JSON.stringify(response))
        this.FoodWinePair = response;
        this.pairedWines = response.pairedWines
      })
    this.pairedFoods = []
    form.resetForm();
    this.header = `Suggested wines for ${this.foodInput}`
      ;
  }

  getFood(form: NgForm) {
    this.wineInput = form.form.value.wineInput
    this.repositoryService.getFoodPairing(this.wineInput).subscribe(
      (response) => {
        this.WineFoodPair = response;
        this.pairedFoods = response.pairings
      })
    this.pairedWines = []
    form.resetForm();
    this.header = `Suggested foods for ${this.wineInput}`
  }

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
        this.randomWineId = response.drinkid

        let newWine: IRandomWine = {
          drinkid: this.randomWineId,
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
    console.log(form.form.value.ratingdropdown)

    let newRating: IRating = {
      DrinkId: this.randomWineId,
      FoodId: this.randomFoodId,
      RatingNumber: form.form.value.ratingdropdown,
      UserComments: ""
    }

    this.repositoryService.AddRatingToDb(newRating).subscribe(

      () => {
        this.ngOnInit();
      }
    );
  }
}
