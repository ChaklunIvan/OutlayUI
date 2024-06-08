import {Component, OnInit} from '@angular/core';
import {OutlayService} from "../../services/outlay-service";
import {TransactionsRaw} from "../../interfaces/transactionsRaw";
import {selectCardId} from "../../store/selectors/card.selector";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/state/AppState";

@Component({
  selector: 'app-transaction-viewer',
  templateUrl: './transaction-viewer.component.html',
  styleUrls: ['./transaction-viewer.component.css']
})
export class TransactionViewerComponent implements OnInit {

  transactions: TransactionsRaw[] = []; // Use a proper type instead of 'any'
  cardId$: Observable<string>;
  cardId: string;
  constructor(private outlayService: OutlayService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.cardId$ = this.store.select(selectCardId);
    this.cardId$.subscribe((id) => {
      this.cardId = id;
      this.getTransactions();
    });
  }

  getTransactions(): void {
    this.outlayService.getTransactionsRaw(this.cardId)
      .subscribe(transactions => this.transactions = transactions);
  }

  setDefaultImage(event: any) {
    event.target.src = 'assets/Common.png';
  }
}


