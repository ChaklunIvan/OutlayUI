import {Component, OnInit, Input} from '@angular/core';
import {OutlayService} from "../../services/outlay-service";
import {Transactions} from "../../interfaces/transactions";
import {HttpParams} from "@angular/common/http";
import {StatsByDescription} from "../../interfaces/stats-by-description";
import {ActivatedRoute, Route} from "@angular/router";
import {map} from "rxjs";

@Component({
  selector: 'app-stats-by-description',
  templateUrl: './stats-by-description.component.html',
  styleUrls: ['./stats-by-description.component.css']
})
export class StatsByDescriptionComponent implements OnInit {
  statistics: StatsByDescription[] = [];
  icon = '';
  category = '';
  constructor(private outlayService: OutlayService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.paramMap
      .pipe(map(() => window.history.state)).subscribe(transaction=>{
      this.icon = transaction.icon;
      this.category = transaction.category;
        this.outlayService.getStatsByDescription(transaction.name).subscribe(c => {
          this.statistics = c;
        })
    })

    // this.route.paramMap.subscribe(params => {
    //   // this.icon = params.get('icon')!;
    //   this.outlayService.getStatsByDescription(params.get('description')!).subscribe(c => {
    //     this.statistics = c;
    //   })
    // });
  }

  // getStats(): void {
  //   this.outlayService.getStatsByDescription("")
  //     .subscribe(stats => this.statistics = stats);
  // }
}
