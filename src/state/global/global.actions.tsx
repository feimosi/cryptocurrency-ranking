import { createAction } from 'typesafe-actions';

import { FiatCurrency } from 'types/fiatCurrency.type';

export const changeFiatCurrency =
  createAction('Global / Change fiat currency', resolve =>
    (fiatCurrency: FiatCurrency) => resolve({ fiatCurrency }),
  );
