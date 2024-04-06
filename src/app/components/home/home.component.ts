import {Component, OnInit} from '@angular/core';
import {OutlayService} from "../../services/outlay-service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  value = '';
  loadList = true;

  constructor(private outlayService: OutlayService) {
  }

  ngOnInit(): void {
    this.fetchLatestTransactions();
  }

  fetchLatestTransactions(): void {
    this.outlayService.fetchLatestTransactions().subscribe(x => console.log());
  }

  openMonobankApi() {
    window.open("https://api.monobank.ua/")
  }

  isDisabled() {
    return this.value.length != 44;
  }

  loadTransactionList() {
    this.loadList = true;
  }
}

