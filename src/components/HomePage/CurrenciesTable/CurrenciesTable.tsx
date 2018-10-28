import * as React from 'react';

import PureBaseComponent from 'common/PureBaseComponent';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FlatCurrency } from 'types/flatCurrency.type';

import CurrenciesTableRow from './CurrenciesTableRow';
import './CurrenciesTable.css';

interface Props {
  currencies: Cryptocurrency[];
  flatCurrency: FlatCurrency;
}

export default class CurrenciesTable extends PureBaseComponent<Props> {
  static defaultProps = {};

  render() {
    const { currencies, flatCurrency } = this.props;

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
          { currencies.map((currency, index) =>
              <CurrenciesTableRow
                key={ currency.id }
                index={ index }
                currency={ currency }
                flatCurrency={ flatCurrency }
              />,
          ) }
        </tbody>
      </table>
    );
  }
}
