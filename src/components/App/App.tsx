import * as React from 'react';
import { hot } from 'react-hot-loader';

import BaseComponent from 'common/BaseComponent';
import Header from 'components/Header';
import Routes from 'routes';

import './App.css';

class App extends BaseComponent<{}> {
  render() {
    return (
      <div className="App">
        <Header />
        <Routes />
      </div>
    );
  }
}

export default hot(module)(App);
