import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { saveState, loadState } from './local-storage';

export function localStorageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {
    const nextState = reducer(state, action);
    saveState(nextState);
    return nextState;
  };
}

export const metaReducers: MetaReducer<any>[] = [localStorageMetaReducer];
