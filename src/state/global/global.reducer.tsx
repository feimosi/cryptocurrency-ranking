import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import produce from 'immer';

import { FlatCurrency } from 'types/flatCurrency.type';
import * as actions from './global.actions';

export type GlobalAction = ActionType<typeof actions>;

export interface StateType {
  readonly currentFlatCurrency: FlatCurrency;
}

const initialState: StateType = {
  currentFlatCurrency: FlatCurrency.EUR,
};

const globalReducer: Reducer<StateType, GlobalAction> =
  (state = initialState, action) => produce<StateType>(state, (draft) => {
    switch (action.type) {
      case getType(actions.changeFlatCurrency): {
        draft.currentFlatCurrency = action.payload.flatCurrency;
        break;
      }
    }
  },
);

export default globalReducer;
