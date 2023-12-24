import { createReducer, on } from '@ngrx/store';
import {setCardId} from "../actions/card.actions";

export const initialState  = {
  id: ''
};

export const cardReducer = createReducer(
  initialState,
  on(setCardId, (state, { id }) => ({ ...state, id }))
);
