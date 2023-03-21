import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PairingServiceService } from 'src/app/food-wine-pairing/pairing-service.service';
import { IFoodWinePair } from 'src/app/Interfaces/FoodWinePair';



@Component({
  selector: 'app-pairing-list',
  templateUrl: './pairing-list.component.html',
  styleUrls: ['./pairing-list.component.css']
})
export class PairingListComponent implements OnInit {
@Input() foodInput: string = ""
@Input() wineInput: string = ""

constructor(private repositoryService: PairingServiceService) {}

  ngOnInit(): void {

  }

FoodWinePair: any
pairedWines: string[] = []
WineFoodPair: any
pairedFoods: string[] = []
header:string = ""

getWines(form: NgForm){
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

getFood(form: NgForm){
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

}
