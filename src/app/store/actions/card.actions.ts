import { createAction, props } from '@ngrx/store';

export const setCardId = createAction(
  '[Settings Component] Set Card ID',
  props<{ id: string }>()
);
