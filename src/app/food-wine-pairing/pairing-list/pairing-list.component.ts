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
  pairingText = ""

  getWines(form: NgForm) {
    this.foodInput = form.form.value.foodInput
    this.repositoryService.getWinePairing(this.foodInput).subscribe(
      (response) => {
        this.FoodWinePair = response;
        this.pairedWines = response.pairedWines;
        this.pairingText = response.pairingText;
        form.resetForm();

        if (this.pairedWines != null) {
          if (this.pairedWines.length > 0) {
            this.header = `~ Suggested wines for ${this.foodInput} ~`;
          }
          else if (this.pairingText == "" && this.pairedWines.length == 0) {
            this.header = `We couldn't find any suggested wines for ${this.foodInput}.
          Perhaps you'd like to try a random wine choice instead?`;
          }
          else {
            this.header = ""
          }
        }
        else {
          this.header = `We couldn't find any suggested wines for ${this.foodInput}.
          Perhaps you'd like to try a random wine choice instead?`;
        }
      })
  }
}
