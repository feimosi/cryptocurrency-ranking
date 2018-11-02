import camelcaseKeys from 'camelcase-keys';

import * as mockedListingsCNY from './mocked-listings-CNY.json';
import * as mockedListingsEUR from './mocked-listings-EUR.json';
import * as mockedListingsUSD from './mocked-listings-USD.json';
import { Cryptocurrency } from 'types/cryptocurrency.type.js';

const responseListingsCNY: Cryptocurrency[] = camelcaseKeys(mockedListingsCNY.data);
const responseListingsEUR: Cryptocurrency[] = camelcaseKeys(mockedListingsEUR.data);
const responseListingsUSD: Cryptocurrency[] = camelcaseKeys(mockedListingsUSD.data);

const randomizePrice = (price: number) =>
  price * ((Math.random() - Math.random()) / 10 + 1);

// NOTE: Workaround: camelcaseKeys breaks when parsing 'quote' property
export const getResponseListingsCNY = (): Cryptocurrency[] => responseListingsCNY.map((e: Cryptocurrency) => ({
  ...e,
  quote: {
    ...e.quote,
    CNY: {
      ...camelcaseKeys(e.quote.CNY),
      price: randomizePrice(e.quote.CNY.price),
    },
  },
}));

export const getResponseListingsEUR = (): Cryptocurrency[] => responseListingsEUR.map((e: Cryptocurrency) => ({
  ...e,
  quote: {
    ...e.quote,
    EUR: {
      ...camelcaseKeys(e.quote.EUR),
      price: randomizePrice(e.quote.EUR.price),
    },
  },
}));

export const getResponseListingsUSD = (): Cryptocurrency[] => responseListingsUSD.map((e: Cryptocurrency) => ({
  ...e,
  quote: {
    ...e.quote,
    USD: {
      ...camelcaseKeys(e.quote.USD),
      price: randomizePrice(e.quote.USD.price),
    },
  },
}));
