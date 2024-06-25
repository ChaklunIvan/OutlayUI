import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { WeeklyTransactionInfo } from '../../interfaces/WeeklyTransactionInfo';
import { OutlayService } from '../../services/outlay-service';
import { AppState } from '../../store/state/AppState';
import { selectCardId } from '../../store/selectors/card.selector';

type Label = string | string[];


@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.css']
})
export class WeeklyComponent implements OnInit {

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

  constructor(private outlayService: OutlayService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.cardId$ = this.store.select(selectCardId);

    this.cardId$.pipe(
      switchMap(id => {
        this.cardId = id;
        return this.getWeeklyTransactions();
      })
    ).subscribe(transactions => {
      this.transactions = transactions;
      this.updateChartData();
      console.log('this.transactions', this.transactions);
    });
  }

  public setDefaultImage(event: Event): void {
    (event.target as HTMLImageElement).src = 'assets/Common.png'; // Set a default image path
  }

  getDayName(dayIndex: number): string {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[dayIndex];
  }

  getWeeklyTransactions(): Observable<WeeklyTransactionInfo[]> {
    return this.outlayService.getWeeklyTransactions(this.cardId);
  }

  updateChartData(): void {
    this.barChartData = [
      { data: this.transactions.map(info => info.amount), label: 'Weekly Transactions' }
    ];
  }
}
