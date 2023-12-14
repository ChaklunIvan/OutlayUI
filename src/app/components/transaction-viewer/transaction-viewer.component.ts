import { Component } from '@angular/core';
import {OutlayService} from "../../services/outlay-service";
import {TransactionsRaw} from "../../interfaces/transactionsRaw";

@Component({
  selector: 'app-transaction-viewer',
  templateUrl: './transaction-viewer.component.html',
  styleUrls: ['./transaction-viewer.component.css']
})
export class TransactionViewerComponent {

  transactions: TransactionsRaw[] = []; // Use a proper type instead of 'any'

  constructor(private outlayService: OutlayService) {
  }

  ngOnInit(): void {
    this.getTransactions();
  }

  getTransactions(): void {
    this.outlayService.getTransactionsRaw()
      .subscribe(transactions => this.transactions = transactions);
  }
}


