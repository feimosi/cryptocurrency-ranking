import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import produce from 'immer';

import { Cryptocurrency } from 'types/cryptocurrency.type';
import * as actions from './cryptocurrencies.actions';

export type CryptocurrenciesAction = ActionType<typeof actions>;

export interface StateType {
  readonly items: { [s: number]: Cryptocurrency };
  readonly isAllFetched: boolean;
}

const initialState: StateType = {
  items: {},
  isAllFetched: false,
};

const cryptocurrenciesReducer: Reducer<StateType, CryptocurrenciesAction> =
  (state = initialState, action) => produce<StateType>(state, (draft) => {
    switch (action.type) {
      // TODO: Handle loading and error actions
      case getType(actions.fetchTopCryptocurrenciesSuccess): {
        const { cryptocurrencies } = action.payload;

        draft.items = cryptocurrencies.reduce((acc, next) => ({ ...acc, [next.id]: next }), {});
        draft.isAllFetched = true;
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
