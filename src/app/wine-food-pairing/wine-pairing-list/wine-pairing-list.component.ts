import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WinePairingServiceService } from '../wine-pairing-service.service';

@Component({
  selector: 'app-wine-pairing-list',
  templateUrl: './wine-pairing-list.component.html',
  styleUrls: ['./wine-pairing-list.component.css']
})
export class WinePairingListComponent implements OnInit {

  @Input() wineInput: string = ""

  constructor(private repositoryService: WinePairingServiceService) { }

  ngOnInit(): void {

  }

  WineFoodPair: any
  header: string = ""
  pairedWines: string[] = []
  pairedFoods: string[] = []
  text: string = ""
  
  
  getFood(form: NgForm) {
    this.wineInput = form.form.value.wineInput
    this.repositoryService.getFoodPairing(this.wineInput).subscribe(
      (response) => {
        if (response) {

          this.WineFoodPair = response;
          this.pairedFoods = response.pairings;
          this.text = response.text
          this.header = `~ Suggested food for ${this.wineInput} ~`;

        }
      },
      (error: HttpErrorResponse) => {
        this.pairedFoods = []
        this.text = ""
        this.header = `We couldn't find any suggested food for ${this.wineInput}.
        Perhaps you'd like to try a random recipe instead?`;
      }
      )
  }
}
