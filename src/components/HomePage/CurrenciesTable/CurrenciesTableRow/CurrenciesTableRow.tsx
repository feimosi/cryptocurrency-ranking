import * as React from 'react';

import PureBaseComponent from 'common/PureBaseComponent';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FlatCurrency } from 'types/flatCurrency.type';

import './CurrenciesTableRow.css';

interface Props {
  index: number;
  currency: Cryptocurrency;
  flatCurrency: FlatCurrency;
  onClick(currency: Cryptocurrency): void;
}

export default class CurrenciesTableRow extends PureBaseComponent<Props> {
  handleClick = () => this.props.onClick(this.props.currency);

  render() {
    const { index, currency, flatCurrency } = this.props;

    const price = currency.quote[flatCurrency].price
      .toFixed(4)
      .toString()
      .replace(/0+$/, '');

    return (
      <tr
        className="CurrenciesTableRow"
        onClick={ this.handleClick }
        tabIndex={ 0 }
        role="button"
      >
        <td className="CurrenciesTableRow__index">
          { index + 1 }
        </td>

        <td className="CurrenciesTableRow__symbolCell">
          <div className="CurrenciesTableRow__symbol">
            { currency.symbol }
          </div>
        </td>

        <td>
          { currency.name }
        </td>

        <td>
          <div className="CurrenciesTableRow__price">
            { price } { flatCurrency }
          </div>
        </td>
      </tr>
    );
  }
}
