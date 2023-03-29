import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFoodWinePair } from '../Interfaces/FoodWinePair';
import { IWineFoodpair } from '../Interfaces/WineFoodPar';
import { INewRecipe, IRandomRecipe, IRecipe } from '../Interfaces/RandomRecipe';
import { IRandomWine } from '../Interfaces/RandomWine';
import { IRating } from '../Interfaces/Rating';
import { ILatestRecipe } from '../Interfaces/LatestRecipe';

@Injectable({
  providedIn: 'root'
})
export class PairingServiceService {
  private wineApiUri = 'https://api.spoonacular.com/food/wine/pairing?apiKey=6ddefff27b934618bc57cbb8e05d66b4';
  private foodApiUri = 'https://api.spoonacular.com/food/wine/dishes?apiKey=6ddefff27b934618bc57cbb8e05d66b4'
  private randomRecipeApiUri = 'https://api.spoonacular.com/recipes/random?number=1&apiKey=6ddefff27b934618bc57cbb8e05d66b4&tags=dinner'
  private apiUri = 'https://localhost:7142/api'
  apiUriFood: string = ""
  apiUriWine: string = ""
  constructor(private http: HttpClient) { }

  getWinePairing(foodInput: string) {
    this.apiUriFood = `&food=${foodInput}`
    return this.http.get<IFoodWinePair>(this.wineApiUri + this.apiUriFood)
  }

  getFoodPairing(wineInput: string) {
    this.apiUriWine = `&wine=${wineInput}`
    return this.http.get<IWineFoodpair>(this.foodApiUri + this.apiUriWine)
  }

  getRandomRecipe() {
    return this.http.get<IRandomRecipe>(this.randomRecipeApiUri)
  }

  getLatestRecipe(){
    return this.http.get<ILatestRecipe>(`${this.apiUri}/Food/getMostRecentFood`);
  }

  getRandomWine() {
    return this.http.get<IRandomWine>(`${this.apiUri}/Wine`);
  }

  AddRecipeToDb(newRecipe: INewRecipe) {
    return this.http.post(`${this.apiUri}/Food/addfood`, newRecipe);
  }

  AddRatingToDb(newRating: IRating) {
    console.log(newRating)
    return this.http.post(`${this.apiUri}/Ratings/addrating`, newRating);
  }
}



