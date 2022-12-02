import { Component } from '@angular/core';
import {OutlayService} from "../../services/outlay-service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})

export class TopBarComponent {
  value = '';
  loadList = true;

  constructor(private outlayService: OutlayService) {
  }

  openMonobankApi(){
    window.open("https://api.monobank.ua/")
  }

  isDisabled(){
    return this.value.length != 44;
  }

  loadTransactionList(){
    this.loadList = true;
  }
}

