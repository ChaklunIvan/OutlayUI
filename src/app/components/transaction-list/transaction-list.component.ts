import {Component, OnInit, Input} from '@angular/core';
import {OutlayService} from "../../services/outlay-service";
import {Transactions} from "../../interfaces/transactions";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  transactions: Transactions[] = [];
  @Input() token = '';

  constructor(private outlayService: OutlayService) {
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.outlayService.getTransactionsGrouped()
      .subscribe(transactions => this.transactions = transactions);
  }

  getSortedIncomeTransactions() {
    return this.transactions
      .filter(transaction => transaction.amount != null && transaction.amount > 0)
      .sort((a, b) => {
        // Ensure both a.amount and b.amount are defined
        const amountA = a.amount ?? 0;
        const amountB = b.amount ?? 0;
        return amountB - amountA;
      });
  }
}
