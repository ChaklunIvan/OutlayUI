import { Component } from '@angular/core';
import {OutlayService} from "../../services/outlay-service";
import {WeeklyTransaction} from "../../interfaces/weeklyTransaction";
import {WeeklyTransactionInfo} from "../../interfaces/WeeklyTransactionInfo";


@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent {

  transactions: WeeklyTransactionInfo[] = [];
  constructor(private outlayService: OutlayService) {
  }

  ngOnInit(): void {
    this.getWeeklyTransactions();
  }
  getWeeklyTransactions(): void {
    this.outlayService.getWeeklyTransactions()
      .subscribe(transactions => this.transactions = transactions);
  }
}
