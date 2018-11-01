import { createSelector } from 'reselect';
import * as _ from 'lodash';

import { getCurrentFlatCurrency } from 'state/global/global.selectors';
import { RootState } from 'state/reducers';
import { Cryptocurrency } from 'types/cryptocurrency.type';

const getCryptocurrenciesSelector = (state: RootState): Cryptocurrency[] =>
  _.values(state.entities.cryptocurrencies.items);

export const getTopCryptocurrenciesSelector = createSelector(
  [getCryptocurrenciesSelector, getCurrentFlatCurrency],
  (cryptocurrencies, flatCurrency) =>
    _.values(cryptocurrencies).every(e => Boolean(e.quote[flatCurrency])) ? cryptocurrencies : [],
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
