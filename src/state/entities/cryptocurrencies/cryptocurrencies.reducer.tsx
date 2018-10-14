import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import produce from 'immer';

import * as actions from './cryptocurrencies.actions';
import { CryptocurrencyType } from 'types/cryptocurrency.type';

export type CryptocurrenciesAction = ActionType<typeof actions>;

export interface StateType {
  readonly items: { [s: number]: CryptocurrencyType };
}

const initialState: StateType = {
  items: {},
};

const cryptocurrenciesReducer: Reducer<StateType, CryptocurrenciesAction> =
  (state = initialState, action) => produce<StateType>(state, (draft) => {
    switch (action.type) {
      case getType(actions.fetchCryptocurrenciesSuccess): {
        draft.items = action.payload.cryptocurrencies.reduce((acc, next) => ({ ...acc, [next.id]: next }), {});
        break;
      }
    }
  },
);

export default cryptocurrenciesReducer;
