import { call, put, takeLatest } from 'redux-saga/effects';
import { getType, ActionType } from 'typesafe-actions';

import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FlatCurrency } from 'types/flatCurrency.type';
import { get } from 'utils/api';

import * as actions from './cryptocurrencies.actions';
import * as responseListings from './cryptocurrencies.mockedResponses';

function getCryptocurrencyListings(flatCurrency: FlatCurrency): Cryptocurrency[] {
  return flatCurrency === FlatCurrency.CNY ?
    responseListings.responseListingsCNY :
    flatCurrency === FlatCurrency.EUR ?
      responseListings.responseListingsEUR :
      flatCurrency === FlatCurrency.USD ?
        responseListings.responseListingsUSD : [];
}

function* fetchTopCryptocurrencies(action: ActionType<typeof actions.fetchTopCryptocurrencies>) {
  try {
    const { flatCurrency } = action.payload;

    // NOTE: Coinbase API requires to proxy requests through our own backend
    // For now the responses have been mocked
    // See: https://pro.coinmarketcap.com/api/v1#section/Quick-Start-Guide
    yield call(async () => get('/cryptocurrency/listings/latest?start=1&limit=100&convert=USD'));

    const response: { data: Cryptocurrency[] } = yield call(async () =>
      new Promise(resolve =>
        setTimeout(() => resolve({ data: getCryptocurrencyListings(flatCurrency) }), 300),
      ));

    yield put(actions.fetchTopCryptocurrenciesSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchTopCryptocurrenciesError(error));
  }
}

export function* watchFetchTopCryptocurrencies() {
  yield takeLatest(getType(actions.fetchTopCryptocurrencies), fetchTopCryptocurrencies);
}

function* fetchCryptocurrency(action: ActionType<typeof actions.fetchCryptocurrency>) {
  try {
    const { currencyId, flatCurrency } = action.payload;

    const response: { data: Cryptocurrency[] } = yield call(async () =>
      new Promise(resolve =>
        setTimeout(() => resolve({ data: getCryptocurrencyListings(flatCurrency) }), 300),
      ));

    yield put(actions.fetchTopCryptocurrenciesSuccess(response.data));

    const currency = response.data.find(c => c.id === currencyId);

    yield put(actions.fetchCryptocurrencySuccess(currency));
  } catch (error) {
    yield put(actions.fetchCryptocurrencyError(error));
  }
}

export function* watchFetchCryptocurrency() {
  yield takeLatest(getType(actions.fetchCryptocurrency), fetchCryptocurrency);
}

export default [
  watchFetchTopCryptocurrencies,
  watchFetchCryptocurrency,
];
