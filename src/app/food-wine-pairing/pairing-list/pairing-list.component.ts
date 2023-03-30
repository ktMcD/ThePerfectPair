import { NgFor } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PairingServiceService } from 'src/app/food-wine-pairing/pairing-service.service';



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
  header: string = ""
  ResponseStatus: string = ""

  //newRecipe: IRandomRecipe | any

  getWines(form: NgForm) {
    this.foodInput = form.form.value.foodInput
    this.repositoryService.getWinePairing(this.foodInput).subscribe(
      (response) => {
        console.log(response)
        this.FoodWinePair = response;
        this.pairedWines = response.pairedWines
        this.ResponseStatus = response.status
        form.resetForm();

        if (this.pairedWines != null) {
          this.header = `Suggested wines for ${this.foodInput}`;
        }
        else {
          this.header = `We couldn't find any suggested wines for ${this.foodInput}`;
        }
      })
  }
}
