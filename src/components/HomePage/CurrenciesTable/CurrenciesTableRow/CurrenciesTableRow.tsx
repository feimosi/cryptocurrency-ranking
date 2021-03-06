import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router';

import PureBaseComponent from 'common/PureBaseComponent';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FiatCurrency } from 'types/fiatCurrency.type';

import './CurrenciesTableRow.css';

interface OwnProps {
  index: number;
  currency: Cryptocurrency;
  fiatCurrency: FiatCurrency;
}

type Props = OwnProps & RouteComponentProps;

export class CurrenciesTableRow extends PureBaseComponent<Props> {
  handleClick = () => {
    const { currency } = this.props;

    // NOTE: We're not using <Link> to keep semantic table layout with <tr>
    this.props.history.push(`/currency/${currency.id}/${currency.name}`);
  }

  render() {
    const { index, currency, fiatCurrency } = this.props;

    const price = currency.quote[fiatCurrency].price
      .toFixed(4)
      .toString()
      .replace(/0+$/, '');

    const percentChange24h = currency.quote[fiatCurrency].percentChange24h
      .toFixed(2);

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
          <div className="CurrenciesTableRow__price">
            { price } { fiatCurrency }
          </div>
        </td>

        <td className="CurrenciesTableRow__change24h">
          { percentChange24h }%
        </td>
      </tr>
    );
  }
}

export default withRouter(CurrenciesTableRow);
