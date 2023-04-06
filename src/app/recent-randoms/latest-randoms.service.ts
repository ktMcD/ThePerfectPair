import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { INewRecipe, IRandomRecipe } from '../Interfaces/RandomRecipe';
import { IRandomWine } from '../Interfaces/RandomWine';
import { IRating } from '../Interfaces/Rating';

@Injectable({
  providedIn: 'root'
})
export class LatestRandomsService {

  constructor(private http: HttpClient) { }

  apiUri: string = 'https://localhost:7142/api'

  getLast10Ratings() {
    return this.http.get<IRating>(`${this.apiUri}/Ratings/lastTenRatings`)
  }

  getRatingByValue(value: number) {
    return this.http.get<IRating>(`${this.apiUri}/Ratings/ratingByValue`)
  }

  getDrinkById(value: number) {
    return this.http.get(`${this.apiUri}/Ratings/drinkById`)
  }

  getFoodById(value: number) {
    return this.http.get(`${this.apiUri}/Ratings/foodById`)
  }
}
