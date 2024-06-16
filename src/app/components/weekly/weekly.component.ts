 import {Component} from '@angular/core';
import {OutlayService} from "../../services/outlay-service";
import {WeeklyTransaction} from "../../interfaces/weeklyTransaction";
import {WeeklyTransactionInfo} from "../../interfaces/WeeklyTransactionInfo";
import {ChartOptions, ChartType, ChartDataset} from 'chart.js';
 import {selectCardId} from "../../store/selectors/card.selector";
 import {Observable} from "rxjs";
 import {Store} from "@ngrx/store";
 import {AppState} from "../../store/state/AppState";

type Label = string | string[];

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent {

  transactions: WeeklyTransactionInfo[] = [];
  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartData: ChartDataset[] = [];
  cardId$: Observable<string>;
  cardId: string;
  constructor(private outlayService: OutlayService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.cardId$ = this.store.select(selectCardId);
    this.cardId$.subscribe((id) => {
      this.cardId = id;
      this.getWeeklyTransactions();

    });
    this.barChartData = [
      {data: this.transactions.map(info => info.amount), label: 'Weekly Transactions'}
    ];
    console.log('this.transactions' + this.transactions);
  }

  public setDefaultImage(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/Common.png'; // Set a default image path
  }

  getDayName(dayIndex: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }
  getWeeklyTransactions(): void {
    this.outlayService.getWeeklyTransactions(this.cardId)
      .subscribe(transactions => {
        this.transactions = transactions;
        console.log(this.transactions)
        this.barChartData = [
          {data: this.transactions.map(info => info.amount), label: 'Weekly Transactions'}
        ];
      })

  }
}
