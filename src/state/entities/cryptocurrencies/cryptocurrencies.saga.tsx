import { call, put, takeLatest } from 'redux-saga/effects';
import { getType } from 'typesafe-actions';

import * as actions from './cryptocurrencies.actions';

function* sampleAction() {
  try {
    yield call(async () => new Promise(resolve =>
      setTimeout(() => resolve({ data: [] }), 300),
    ));

    yield put(actions.sampleAction());
  } catch (error) {
    yield put(actions.sampleAction());
  }
}

export function* watchSampleAction() {
  yield takeLatest(getType(actions.sampleAction), sampleAction);
}

export default [
  watchSampleAction,
];
