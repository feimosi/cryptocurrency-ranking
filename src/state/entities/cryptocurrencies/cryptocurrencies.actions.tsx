import { createAction } from 'typesafe-actions';
import { CryptocurrencyType } from 'types/cryptocurrency.type';

export const fetchCryptocurrencies =
  createAction('Cryptocurrencies / Fetch cryptocurrencies / Loading', resolve =>
    () => resolve(),
  );

export const fetchCryptocurrenciesSuccess =
  createAction('Cryptocurrencies / Fetch cryptocurrencies / Success', resolve =>
    (cryptocurrencies: CryptocurrencyType[]) => resolve({ cryptocurrencies }),
  );

export const fetchCryptocurrenciesError =
  createAction('Cryptocurrencies / Fetch cryptocurrencies / Error', resolve =>
    error => resolve({ error }),
  );
