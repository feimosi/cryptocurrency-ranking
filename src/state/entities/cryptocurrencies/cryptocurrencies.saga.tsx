import { call, put, takeLatest } from 'redux-saga/effects';
import { getType, ActionType } from 'typesafe-actions';

import { Cryptocurrency } from 'types/cryptocurrency.type';
import * as actions from './cryptocurrencies.actions';
import * as mockedResponse from './cryptocurrencies.mockedResponse.json';

function* fetchTopCryptocurrencies() {
  try {
    const response: { data: Cryptocurrency[] } = yield call(async () =>
      new Promise(resolve =>
        setTimeout(() => resolve({ data: mockedResponse.data }), 300),
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
    const { currencyId } = action.payload;

    const response: { data: Cryptocurrency } = yield call(async () =>
      new Promise(resolve =>
        setTimeout(() => resolve({ data: mockedResponse.data.find(c => c.id === currencyId) }), 300),
      ));

    yield put(actions.fetchCryptocurrencySuccess(response.data));
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
