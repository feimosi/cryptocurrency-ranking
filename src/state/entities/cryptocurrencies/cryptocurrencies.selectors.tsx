import { createSelector } from 'reselect';
import * as _ from 'lodash';

import { getCurrentFlatCurrency } from 'state/global/global.selectors';
import { RootState } from 'state/reducers';
import { Cryptocurrency } from 'types/cryptocurrency.type';

// TODO: Add getTopCryptocurrencies
export const getCryptocurrencies = createSelector([
  (state: RootState): Cryptocurrency[] => _.values(state.entities.cryptocurrencies.items),
  getCurrentFlatCurrency,
], (cryptocurrencies, flatCurrency) =>
  _.values(cryptocurrencies).every(e => Boolean(e.quote[flatCurrency])) ? cryptocurrencies : [],
);

/* tslint:disable no-any */
export const makeGetCryptocurrency = (getCryptocurrencyId: (state: RootState, props: any) => number) =>
  createSelector(
    [getCryptocurrencyId, getCryptocurrencies],
    (cryptocurrencyId, cryptocurrencies) =>
      _.values(cryptocurrencies).find(e => e.id === cryptocurrencyId),
  );
/* tslint:enable no-any */

export const getBitcoin = createSelector(
  [getCryptocurrencies],
  cryptocurrencies =>
    _.values(cryptocurrencies).find(e => e.symbol === 'BTC'),
);
