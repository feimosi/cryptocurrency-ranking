import { createAction } from 'typesafe-actions';

import { FlatCurrency } from 'types/flatCurrency.type';

export const changeFlatCurrency =
  createAction('Global / Change flat currency', resolve =>
    (flatCurrency: FlatCurrency) => resolve({ flatCurrency }),
  );
