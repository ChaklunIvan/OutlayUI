import { Component } from '@angular/core';
import {OutlayService} from "../../services/outlay-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
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

