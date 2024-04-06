import {Component, OnInit, Input, ViewEncapsulation, ViewChild, ElementRef} from '@angular/core';
import {OutlayService} from "../../services/outlay-service";
import {Transactions} from "../../interfaces/transactions";
import {Store} from '@ngrx/store';
import {AppState} from "../../store/state/AppState";
import {selectCardId} from "../../store/selectors/card.selector";
import {Observable} from "rxjs";

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class TransactionListComponent implements OnInit {
  @ViewChild('dateRangeModal') modalRef!: ElementRef;
  dateRange: { dateFrom: Date, dateTo: Date };
  dateRangeDisplay = '1 month';
  cardId$: Observable<string>;
  cardId: string;
  transactions: Transactions[] = [];
  @Input() token = '';

  constructor(private outlayService: OutlayService, private store: Store<AppState>) {
    const currentDate = new Date();
    const oneMonthAgo = new Date(currentDate);

    oneMonthAgo.setMonth(currentDate.getMonth() - 1);

    this.dateRange = {
      dateFrom: oneMonthAgo,
      dateTo: currentDate
    };
  }

  submitDateRange() {
    this.updateDateRangeDisplay();
    this.getTransactions();
  }

  updateDateRangeDisplay() {
    const {dateFrom, dateTo} = this.dateRange;
    if (dateFrom && dateTo) {
      const diffTime = Math.abs(dateTo.getTime() - dateFrom.getTime());
      const diffDays = diffTime / (1000 * 3600 * 24);
      const diffMonths = diffDays / 30;
      const diffYears = diffDays / 365;

      if (diffDays <= 30) {
        this.dateRangeDisplay = `${Math.round(diffDays)} day${Math.round(diffDays) === 1 ? '' : 's'}`;
      } else if (diffMonths <= 12) {
        this.dateRangeDisplay = `${Math.round(diffMonths)} month${Math.round(diffMonths) === 1 ? '' : 's'}`;
      } else {
        this.dateRangeDisplay = `${Math.round(diffYears)} year${Math.round(diffYears) === 1 ? '' : 's'}`;
      }
    } else {
      this.dateRangeDisplay = '';
    }
  }

  ngOnInit(): void {
    this.cardId$ = this.store.select(selectCardId);
    this.cardId$.subscribe((id) => {
      this.cardId = id;
      this.getTransactions();
    });
  }

  getTransactions(): void {
    this.outlayService.getTransactionsGrouped(this.cardId, this.dateRange.dateFrom, this.dateRange.dateTo)
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

  setDefaultImage(event: any) {
    event.target.src = 'assets/Common.png';
  }

  getTotalIncome(): number {
    return this.transactions
      .filter(transaction => transaction.amount !== undefined && transaction.amount > 0)
      .reduce((acc, transaction) => acc + (transaction.amount || 0), 0);
  }

  getTotalExpenses(): number {
    return this.transactions
      .filter(transaction => transaction.amount !== undefined && transaction.amount < 0)
      .reduce((acc, transaction) => acc + Math.abs(transaction.amount || 0), 0);
  }
}
