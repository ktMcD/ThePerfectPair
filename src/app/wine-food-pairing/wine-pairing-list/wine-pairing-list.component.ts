import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { WinePairingServiceService } from '../wine-pairing-service.service';

@Component({
  selector: 'app-wine-pairing-list',
  templateUrl: './wine-pairing-list.component.html',
  styleUrls: ['./wine-pairing-list.component.css']
})
export class WinePairingListComponent implements OnInit{

  @Input() wineInput: string = ""

  constructor(private repositoryService: WinePairingServiceService) { }

  ngOnInit(): void {

  }

  WineFoodPair: any
  header: string = ""
  pairedWines: string[] = []
  pairedFoods: string[] = []


  getFood(form: NgForm) {
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
