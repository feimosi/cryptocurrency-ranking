import * as React from 'react';

import PureBaseComponent from 'common/PureBaseComponent';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FlatCurrency } from 'types/flatCurrency.type';

import CurrenciesTableRow from './CurrenciesTableRow';
import './CurrenciesTable.css';

interface Props {
  currencies: Cryptocurrency[];
  flatCurrency: FlatCurrency;
  onClick(currency: Cryptocurrency): void;
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
            <th>Name</th>
            <th className="CurrenciesTable__priceHeader">
              Price
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
                onClick={ this.props.onClick }
              />,
          ) }
        </tbody>
      </table>
    );
  }
}
