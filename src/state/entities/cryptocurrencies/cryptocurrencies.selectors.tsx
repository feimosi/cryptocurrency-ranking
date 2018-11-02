import { createSelector } from 'reselect';
import * as _ from 'lodash';

import { getCurrentFlatCurrency } from 'state/global/global.selectors';
import { RootState } from 'state/reducers';

const getReduxCryptocurrencies = (state: RootState) =>
  state.entities.cryptocurrencies.items;

const getReduxTopCryptocurrencies = (state: RootState) =>
  state.entities.cryptocurrencies.top.items;

export const getTopCryptocurrenciesSelector = createSelector(
  [getReduxCryptocurrencies, getReduxTopCryptocurrencies, getCurrentFlatCurrency],
  (cryptocurrencies, topCryptocurrencies, flatCurrency) =>
    topCryptocurrencies
      .map(currencyId => cryptocurrencies[currencyId])
      .filter(currency => Boolean(currency.quote[flatCurrency])),
);

/* tslint:disable no-any */
export const makeGetCryptocurrencySelector = (getCryptocurrencyId: (state: RootState, props: any) => number) =>
  createSelector(
    [getCryptocurrencyId, getTopCryptocurrenciesSelector],
    (cryptocurrencyId, cryptocurrencies) =>
      _.values(cryptocurrencies).find(e => e.id === cryptocurrencyId),
  );
/* tslint:enable no-any */

export const getBitcoinSelector = createSelector(
  [getTopCryptocurrenciesSelector],
  cryptocurrencies =>
    _.values(cryptocurrencies).find(e => e.symbol === 'BTC'),
);
