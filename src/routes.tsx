import * as React from 'react';
import { Switch, Route } from 'react-router-dom';

import Loadable from 'common/Loadable';

// TODO: Temp solution to avoid FOUC
import 'components/HomePage/HomePage.css';

/* tslint:disable space-in-parens promise-function-async */
const AsyncHomePage = Loadable({
  loader: () => import(/* webpackChunkName: "homePage" */ 'components/HomePage'),
});
const AsyncCryptocurrencyDetailsPage = Loadable({
  loader: () => import(/* webpackChunkName: "homePage" */ 'components/CryptocurrencyDetailsPage'),
});
/* tslint:enable space-in-parens promise-function-async */

export default function routes() {
  return (
    <Switch>
      <Route path="/" exact component={ AsyncHomePage } />
      <Route path="/currency/:currencyId/:currency" exact component={ AsyncCryptocurrencyDetailsPage } />
    </Switch>
  );
}
