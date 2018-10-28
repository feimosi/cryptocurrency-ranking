import { createSelector } from 'reselect';
import * as _ from 'lodash';

import { RootState } from 'state/reducers';

// TODO: Add getTopCryptocurrencies
export const getCryptocurrencies = (state: RootState) => _.values(state.entities.cryptocurrencies.items);

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
