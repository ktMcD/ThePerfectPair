import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFoodWinePair } from '../Interfaces/FoodWinePair';
import { IWineFoodpair } from '../Interfaces/WineFoodPar';
import { INewRecipe, IRandomRecipe } from '../Interfaces/RandomRecipe';

@Injectable({
  providedIn: 'root'
})
export class PairingServiceService {
  private wineApiUri = 'https://api.spoonacular.com/food/wine/pairing?apiKey=6ddefff27b934618bc57cbb8e05d66b4';
  private foodApiUri = 'https://api.spoonacular.com/food/wine/dishes?apiKey=6ddefff27b934618bc57cbb8e05d66b4'
  private randomRecipeApiUri = 'https://api.spoonacular.com/recipes/random?number=1&apiKey=6ddefff27b934618bc57cbb8e05d66b4&tags=dinner'
  private apiUri = 'https://localhost:7142/api/Food'
  apiUriFood : string = ""
  apiUriWine : string = ""
  constructor(private http: HttpClient) { }

  getWinePairing(foodInput:string){
    this.apiUriFood = `&food=${foodInput}`
    return this.http.get<IFoodWinePair>(this.wineApiUri+this.apiUriFood)
  }

  getFoodPairing(wineInput:string){
    this.apiUriWine = `&wine=${wineInput}`
    return this.http.get<IWineFoodpair>(this.foodApiUri+this.apiUriWine)
  }

  getRandomRecipe(){
    return this.http.get<IRandomRecipe>(this.randomRecipeApiUri)
  }

  AddRecipeToDb(newRecipe: INewRecipe){
    console.log(newRecipe)
    return this.http.post(`${this.apiUri}/addfood`,newRecipe);

  }

  
    
   }

  

