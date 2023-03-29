import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ILatestRecipe } from '../Interfaces/LatestRecipe';
import { INewRecipe, IRandomRecipe } from '../Interfaces/RandomRecipe';
import { IRandomWine } from '../Interfaces/RandomWine';
import { IRating } from '../Interfaces/Rating';

@Injectable({
  providedIn: 'root'
})
export class RandomPairingServiceService {

  private randomRecipeApiUri = 'https://api.spoonacular.com/recipes/random?number=1&apiKey=6ddefff27b934618bc57cbb8e05d66b4&tags=dinner'
  private apiUri = 'https://localhost:7142/api'

  constructor(private http: HttpClient) { }

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
