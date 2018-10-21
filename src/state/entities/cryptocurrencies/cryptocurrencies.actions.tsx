import { createAction } from 'typesafe-actions';
import { Cryptocurrency } from 'types/cryptocurrency.type';

/* Fetch top cryptocurrencies */

export const fetchTopCryptocurrencies =
  createAction('Cryptocurrencies / Fetch top cryptocurrencies / Loading', resolve =>
    () => resolve(),
  );

export const fetchTopCryptocurrenciesSuccess =
  createAction('Cryptocurrencies / Fetch top cryptocurrencies / Success', resolve =>
    (cryptocurrencies: Cryptocurrency[]) => resolve({ cryptocurrencies }),
  );

export const fetchTopCryptocurrenciesError =
  createAction('Cryptocurrencies / Fetch top cryptocurrencies / Error', resolve =>
    error => resolve({ error }),
  );

/* Fetch cryptocurrency */

export const fetchCryptocurrency =
  createAction('Cryptocurrencies / Fetch cryptocurrency / Loading', resolve =>
    (currencyId: number) => resolve({ currencyId }),
  );

export const fetchCryptocurrencySuccess =
  createAction('Cryptocurrencies / Fetch cryptocurrency / Success', resolve =>
    (cryptocurrency: Cryptocurrency) => resolve({ cryptocurrency }),
  );

export const fetchCryptocurrencyError =
  createAction('Cryptocurrencies / Fetch cryptocurrency / Error', resolve =>
    error => resolve({ error }),
  );
