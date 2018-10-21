import { createSelector } from 'reselect';
import * as _ from 'lodash';

import { RootState } from 'state/reducers';

export const getCryptocurrencies = (state: RootState) => _.values(state.entities.cryptocurrencies.items);

/* tslint:disable no-any */
export const makeGetCryptocurrency = (getCryptocurrencyId: (state: RootState, props: any) => number) =>
  createSelector(
    [getCryptocurrencyId, getCryptocurrencies],
    (cryptocurrencyId, cryptocurrencies) =>
      _.values(cryptocurrencies).find(e => e.id === cryptocurrencyId),
  );
/* tslint:enable no-any */
