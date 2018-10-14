import * as _ from 'lodash';

import { RootState } from 'state/reducers';

export const getCryptocurrencies = (state: RootState) => _.values(state.entities.cryptocurrencies.items);
