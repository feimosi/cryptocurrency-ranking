import { createStore, applyMiddleware, compose, StoreEnhancer } from 'redux';
import { persistStore } from 'redux-persist';
import sagaMiddlewareFactory from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__(enhancer: StoreEnhancer<{ dispatch: {} }>): StoreEnhancer;
  }
}

const configureStore = (initialState = {}) => {
  /* tslint:disable-next-line no-unbound-method */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const sagaMiddleware = sagaMiddlewareFactory();

  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
    ),
  );
  const persistor = persistStore(store);

  sagaMiddleware.run(rootSaga);

  if (process.env.NODE_ENV !== 'production') {
    if (module.hot) {
      module.hot.accept('./reducers', () => {
        store.replaceReducer(rootReducer);
      });
    }
  }

  return { persistor, store };
};

export default configureStore;
