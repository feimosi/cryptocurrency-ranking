import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import produce from 'immer';

import { FiatCurrency } from 'types/fiatCurrency.type';
import * as actions from './global.actions';

export type GlobalAction = ActionType<typeof actions>;

export interface StateType {
  readonly currentFiatCurrency: FiatCurrency;
}

const initialState: StateType = {
  currentFiatCurrency: FiatCurrency.EUR,
};

const globalReducer: Reducer<StateType, GlobalAction> =
  (state = initialState, action) => produce<StateType>(state, (draft) => {
    switch (action.type) {
      case getType(actions.changeFiatCurrency): {
        draft.currentFiatCurrency = action.payload.fiatCurrency;
        break;
      }
    }
  },
);

export default globalReducer;
