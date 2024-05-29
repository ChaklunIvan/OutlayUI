import { Component, Input, OnInit } from '@angular/core';
import { OutlayService } from "../../services/outlay-service";
import { CardInfo, ClientInfo } from "../../interfaces/clientInfo";
import { Store } from '@ngrx/store';
import { AppState, TokenState } from '../../store/state/AppState';
import { selectTokenId, selectTokenState } from '../../store/selectors/token.selector';
import { Observable } from 'rxjs';
import { NgFor } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { setCardId } from '../../store/actions/card.actions';
import { setTokenId } from '../../store/actions/token.actions';

@Component({
  selector: 'app-choose-cards',
  templateUrl: './choose-cards.component.html',
  styleUrls: ['./choose-cards.component.css']
})
export class ChooseCardsComponent {
  private idCard: string;
  public tokenID: string;
  public tokenID$: Observable<TokenState>;
  cards: CardInfo[];
  constructor(private outlayService: OutlayService, private store: Store<AppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.tokenID$ = this.store.select(selectTokenState);
    this.tokenID$.subscribe((id) => {
      this.tokenID = id.id.toString();
    });
    this.getCardInfo();
    this.route.params.subscribe(params => {
      const cardId = params['id'];
      if (cardId) {
        this.setCard(cardId);
        this.router.navigate(['/home']);
      }
    });
  }
  getCardInfo() {
    this.outlayService.getClientCards(this.tokenID).subscribe(x => {
      this.cards = x;
    });
  }
  setCard(cardId: string): void {
    this.store.dispatch(setCardId({ id: cardId }));
  }
}
