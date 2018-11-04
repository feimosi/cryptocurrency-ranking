import * as React from 'react';

import PureBaseComponent from 'common/PureBaseComponent';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FiatCurrency } from 'types/fiatCurrency.type';

import CurrenciesTableRow from './CurrenciesTableRow';
import './CurrenciesTable.css';

interface Props {
  currencies: Cryptocurrency[];
  fiatCurrency: FiatCurrency;
}

export default class CurrenciesTable extends PureBaseComponent<Props> {
  static defaultProps = {};

  render() {
    const { currencies, fiatCurrency } = this.props;

    return (
      <table className="CurrenciesTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Symbol</th>
            <th className="CurrenciesTable__priceHeader">
              Price
            </th>
            <th className="CurrenciesTable__change24hHeader">
              Change (24h)
            </th>
          </tr>
        </thead>

        <tbody>
          { currencies
            .sort((a, b) => a.cmcRank > b.cmcRank ? 1 : -1)
            .map((currency, index) =>
              <CurrenciesTableRow
                key={ currency.id }
                index={ index }
                currency={ currency }
                fiatCurrency={ fiatCurrency }
              />,
          ) }
        </tbody>
      </table>
    );
  }
}
