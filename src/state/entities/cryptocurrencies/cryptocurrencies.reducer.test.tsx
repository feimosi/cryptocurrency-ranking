import { getType, ActionType } from 'typesafe-actions';

import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FiatCurrency } from 'types/fiatCurrency.type';
import * as actions from './cryptocurrencies.actions';
import globalReducer, { StateType } from './cryptocurrencies.reducer';
import { getResponseListingsUSD } from './cryptocurrencies.mockedResponses';

describe('Cryptocurrencies reducer', () => {
  const defaultState: StateType = {
    items: {},
    top: {
      items: [],
      isLoading: false,
      isRefreshing: false,
    },
  };

  let exampleCryptocurrency1: Cryptocurrency;
  let exampleCryptocurrency2: Cryptocurrency;

  beforeAll(() => {
    const exampleCryptocurrencies = getResponseListingsUSD();
    exampleCryptocurrency1 = exampleCryptocurrencies[0];
    exampleCryptocurrency2 = exampleCryptocurrencies[1];
  });

  describe('Fetch top cryptocurrencies action ', () => {
    it('should set the loading flag', () => {
      const initialState: StateType = {
        ...defaultState,
        top: {
          ...defaultState.top,
          isLoading: false,
        },
      };
      const expectedState: StateType = {
        ...defaultState,
        top: {
          ...defaultState.top,
          isLoading: true,
        },
      };

      const action: ActionType<typeof actions.fetchTopCryptocurrencies> = {
        type: getType(actions.fetchTopCryptocurrencies),
        payload: { fiatCurrency: FiatCurrency.USD },
      };
      const newState = globalReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });

    it('should fetch items successfully', () => {
      const initialState: StateType = {
        ...defaultState,
        top: {
          ...defaultState.top,
          items: [],
          isLoading: true,
        },
      };
      const expectedState: StateType = {
        ...defaultState,
        items: {
          [exampleCryptocurrency1.id]: exampleCryptocurrency1,
          [exampleCryptocurrency2.id]: exampleCryptocurrency2,
        },
        top: {
          ...defaultState.top,
          items: [exampleCryptocurrency1.id, exampleCryptocurrency2.id],
          isLoading: false,
        },
      };

      const action: ActionType<typeof actions.fetchTopCryptocurrenciesSuccess> = {
        type: getType(actions.fetchTopCryptocurrenciesSuccess),
        payload: { cryptocurrencies: [exampleCryptocurrency1, exampleCryptocurrency2] },
      };
      const newState = globalReducer(initialState, action);

      expect(newState).toEqual(expectedState);
    });
  });
});
