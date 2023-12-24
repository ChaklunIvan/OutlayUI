import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from "../../store/state/AppState";
import {selectCardId} from "../../store/selectors/card.selector";
import {setCardId} from "../../store/actions/card.actions";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  cardId$ = this.store.select(selectCardId);
  apiUrl: string = '';
  constructor(private store: Store<AppState>) {
  }

  submitSettings() {
    this.updateCardId(this.apiUrl);
    console.log(this.cardId$);
  }

  updateCardId(newId: string) {
    console.log(newId);
    this.store.dispatch(setCardId({ id: newId }));
  }
}
