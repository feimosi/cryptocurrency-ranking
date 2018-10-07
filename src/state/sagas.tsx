import { fork, all } from 'redux-saga/effects';

import cryptocurrencies from './entities/cryptocurrencies/cryptocurrencies.saga';

const sagas = [
  ...cryptocurrencies,
];

function* rootSaga() {
  yield all(sagas.map(fork));
}

export default rootSaga;
