import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFoodWinePair } from '../Interfaces/FoodWinePair';
import { IWineFoodpair } from '../Interfaces/WineFoodPar';

@Injectable({
  providedIn: 'root'
})
export class PairingServiceService {
  private wineApiUri = 'https://api.spoonacular.com/food/wine/pairing?apiKey=6ddefff27b934618bc57cbb8e05d66b4';
  private foodApiUri = 'https://api.spoonacular.com/food/wine/dishes?apiKey=6ddefff27b934618bc57cbb8e05d66b4'
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
    
   }

  

