 import {Component} from '@angular/core';
import {OutlayService} from "../../services/outlay-service";
import {WeeklyTransaction} from "../../interfaces/weeklyTransaction";
import {WeeklyTransactionInfo} from "../../interfaces/WeeklyTransactionInfo";
import {ChartOptions, ChartType, ChartDataset} from 'chart.js';

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

  constructor(private outlayService: OutlayService) {
  }

  ngOnInit(): void {
    this.getWeeklyTransactions();
    this.barChartData = [
      {data: this.transactions.map(info => info.amount), label: 'Weekly Transactions'}
    ];
    console.log('this.transactions' + this.transactions);
  }

  getWeeklyTransactions(): void {
    this.outlayService.getWeeklyTransactions()
      .subscribe(transactions => {
        this.transactions = transactions;
        this.barChartData = [
          {data: this.transactions.map(info => info.amount), label: 'Weekly Transactions'}
        ];
      })

  }
}
