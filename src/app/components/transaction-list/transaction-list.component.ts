import {Component, OnInit} from '@angular/core';
import {OutlayService} from "../../services/outlay-service";
import {Transactions} from "../../interfaces/transactions";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transactions[] = [];
  token = '';

  constructor(private outlayService: OutlayService) {
    this.outlayService.getToken$.subscribe((token) => {
      this.token = token;
    })
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.outlayService.getTransactionsGrouped(this.token)
      .subscribe(transactions => this.transactions = transactions);
  }
}
