import { call, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';

import { Cryptocurrency } from 'types/cryptocurrency.type';
import * as actions from './cryptocurrencies.actions';
import * as mockedResponse from './cryptocurrencies.mockedResponse.json';

function* sampleAction() {
  try {
    const response: { data: Cryptocurrency[] } = yield call(async () =>
      new Promise(resolve =>
        setTimeout(() => resolve({ data: mockedResponse.data }), 300),
      ));

    yield put(actions.fetchCryptocurrenciesSuccess(response.data));
  } catch (error) {
    yield put(actions.fetchCryptocurrenciesError(error));
  }
}

export function* watchSampleAction() {
  yield takeLatest(getType(actions.fetchCryptocurrencies), sampleAction);
}

export default [
  watchSampleAction,
];
