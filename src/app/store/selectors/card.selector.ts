import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AppState, CardState} from "../state/AppState";

export const selectCardState = createFeatureSelector<CardState>('card');

export const selectCardId = createSelector(
  selectCardState,
  (state) => state.id
);

// export const selectCardState = (state: AppState) => state.card;
//
// export const selectCardId = createSelector(
//   selectCardState,
//   (state) => state.id
// );
//
