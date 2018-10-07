import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';
import 'whatwg-fetch';
import 'intersection-observer';
import 'normalize.css';

import App from 'components/App';
import configureStore from 'state/store';
import { unregister } from './registerServiceWorker';
import './index.css';

const { persistor, store } = configureStore();

const getRootComponent = () => (
  <PersistGate persistor={ persistor }>
    <Provider store={ store }>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </PersistGate>
);

const renderApp = () => {
  ReactDOM.render(
    getRootComponent(),
    document.getElementById('root'),
  );
};

renderApp();

if (module.hot) {
  module.hot.accept('components/App', renderApp);
}

unregister();
