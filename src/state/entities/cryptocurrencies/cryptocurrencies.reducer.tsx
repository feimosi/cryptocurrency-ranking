import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import produce from 'immer';

import { Cryptocurrency } from 'types/cryptocurrency.type';
import * as actions from './cryptocurrencies.actions';

export type CryptocurrenciesAction = ActionType<typeof actions>;

export interface StateType {
  readonly items: { [s: number]: Cryptocurrency };
  readonly top: {
    readonly items: number[];
    readonly isLoading: boolean;
    readonly isRefreshing: boolean;
  };
}

const initialState: StateType = {
  items: {},
  top: {
    items: [],
    isLoading: false,
    isRefreshing: false,
  },
};

const cryptocurrenciesReducer: Reducer<StateType, CryptocurrenciesAction> =
  (state = initialState, action) => produce<StateType>(state, (draft) => {
    switch (action.type) {
      case getType(actions.fetchTopCryptocurrencies): {
        draft.top.isLoading = true;
        draft.top.isRefreshing = state.top.items.length > 0;
        break;
      }
      case getType(actions.fetchTopCryptocurrenciesSuccess): {
        const { cryptocurrencies } = action.payload;

        draft.items = cryptocurrencies.reduce((acc, next) => ({ ...acc, [next.id]: next }), {});
        draft.top.items = cryptocurrencies.map(c => c.id);
        draft.top.isLoading = false;
        draft.top.isRefreshing = false;
        break;
      }
      case getType(actions.fetchCryptocurrencySuccess): {
        const { cryptocurrency } = action.payload;

        draft.items[cryptocurrency.id] = cryptocurrency;
        break;
      }
    }
  },
);

export default cryptocurrenciesReducer;
