import {Component, OnInit} from '@angular/core';
import {OutlayService} from "../../services/outlay-service";
import {selectCardId} from "../../store/selectors/card.selector";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import {AppState} from "../../store/state/AppState";
import { setTokenId } from '../../store/actions/token.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  value = '';
  loadList = true;
  cardId$: Observable<string>;
  cardId: string;

  constructor(private outlayService: OutlayService, private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.cardId$ = this.store.select(selectCardId);
    this.cardId$.subscribe((id) => {
      this.cardId = id;
      this.fetchLatestTransactions();
    });
  }
  fetchLatestTransactions(): void {
    this.outlayService.fetchLatestTransactions(this.cardId).subscribe(x => console.log());
  }
}

