import camelcaseKeys from 'camelcase-keys';

import * as mockedListingsCNY from './mocked-listings-CNY.json';
import * as mockedListingsEUR from './mocked-listings-EUR.json';
import * as mockedListingsUSD from './mocked-listings-USD.json';
import { Cryptocurrency } from 'types/cryptocurrency.type.js';

let mappedMockedListingsCNY: Cryptocurrency[] = camelcaseKeys(mockedListingsCNY.data);
let mappedMockedListingsEUR: Cryptocurrency[] = camelcaseKeys(mockedListingsEUR.data);
let mappedMockedListingsUSD: Cryptocurrency[] = camelcaseKeys(mockedListingsUSD.data);

// NOTE: Workaround: camelcaseKeys breaks when parsing quote property
mappedMockedListingsCNY = mappedMockedListingsCNY.map((e: Cryptocurrency) => ({
  ...e,
  quote: {
    ...e.quote,
    CNY: camelcaseKeys(e.quote.CNY),
  },
}));

mappedMockedListingsEUR = mappedMockedListingsEUR.map((e: Cryptocurrency) => ({
  ...e,
  quote: {
    ...e.quote,
    EUR: camelcaseKeys(e.quote.EUR),
  },
}));

mappedMockedListingsUSD = mappedMockedListingsUSD.map((e: Cryptocurrency) => ({
  ...e,
  quote: {
    ...e.quote,
    USD: camelcaseKeys(e.quote.USD),
  },
}));

export const responseListingsCNY = mappedMockedListingsCNY;
export const responseListingsEUR = mappedMockedListingsEUR;
export const responseListingsUSD = mappedMockedListingsUSD;
