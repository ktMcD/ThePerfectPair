import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IWineFoodpair } from '../Interfaces/WineFoodPar';

@Injectable({
  providedIn: 'root'
})
export class WinePairingServiceService {
  private foodApiUri = 'https://api.spoonacular.com/food/wine/dishes?apiKey=6ddefff27b934618bc57cbb8e05d66b4'
  apiUriWine: string = ""
  
  constructor(private http: HttpClient) {}

  getFoodPairing(wineInput: string) {
    this.apiUriWine = `&wine=${wineInput}`
    return this.http.get<IWineFoodpair>(this.foodApiUri + this.apiUriWine)
  }
}
