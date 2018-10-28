import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';

import BaseComponent from 'common/BaseComponent';
import Button from 'common/Button';
import PageLoadingBar from 'common/PageLoadingBar';
import * as cryptocurrenciesActions from 'state/entities/cryptocurrencies/cryptocurrencies.actions';
import { makeGetCryptocurrency, getBitcoin } from 'state/entities/cryptocurrencies/cryptocurrencies.selectors';
import { RootState } from 'state/reducers';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FlatCurrency } from 'types/flatCurrency.type';

import './CryptocurrencyDetailsPage.css';

interface StateProps {
  cryptocurrency: Cryptocurrency;
  bitcoin: Cryptocurrency;
}

interface DispatchProps {
  actions: typeof cryptocurrenciesActions;
}

type Props = StateProps & DispatchProps & RouteComponentProps<{ currencyId: string }>;

export class CryptocurrencyDetailsPage extends BaseComponent<Props> {
  componentDidMount() {
    const { match } = this.props;
    const currencyId = Number.parseInt(match.params.currencyId, 10);

    this.props.actions.fetchCryptocurrency(currencyId);
  }

  render() {
    const { cryptocurrency, bitcoin } = this.props;

    if (!cryptocurrency) {
      return <PageLoadingBar />;
    }

    const quote = cryptocurrency.quote[FlatCurrency.EUR];
    const price = +quote.price.toFixed(2);

    return (
      <div className="CryptocurrencyDetailsPage">
        <h1>
          <span className="CryptocurrencyDetailsPage__name">
            { cryptocurrency.name }
          </span>
          &nbsp;
          <span className="CryptocurrencyDetailsPage__symbol">
            ({ cryptocurrency.symbol })
          </span>
        </h1>

        <div className="CryptocurrencyDetailsPage__stats">
          <div>
            <strong>Rank: </strong>
            { cryptocurrency.cmcRank }
          </div>
          <div>
            <strong>Price: </strong>
            { price.toLocaleString() } { FlatCurrency.EUR }
          </div>
          <div>
            <strong>Volume (24h): </strong>
            { quote.volume24h.toLocaleString() } { FlatCurrency.EUR }
          </div>
          <div>
            <strong>Market Cap: </strong>
            { quote.marketCap.toLocaleString() } { FlatCurrency.EUR }
          </div>

          { bitcoin &&
            <div>
              <strong>Price in Bitcoin: </strong>
              { cryptocurrency.quote[FlatCurrency.EUR].price / bitcoin.quote[FlatCurrency.EUR].price } BTC
            </div>
          }

          <div>
            <strong>1h Change: </strong>
            { quote.percentChange1h.toFixed(2) }%
          </div>
          <div>
            <strong>24h Change: </strong>
            { quote.percentChange24h.toFixed(2) }%
          </div>
          <div>
            <strong>7d Change: </strong>
            { quote.percentChange7d.toFixed(2) }%
          </div>

          <div>
            <strong>Available supply: </strong>
            { cryptocurrency.circulatingSupply.toLocaleString() } { cryptocurrency.symbol }
          </div>

          <div>
            <strong>Total Supply: </strong>
            { cryptocurrency.totalSupply.toLocaleString() } { cryptocurrency.symbol }
          </div>

          <div>
            <Button theme="primary">
              Refresh
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const getCryptocurrencyId = (_state: RootState, props: Props) =>
    Number.parseInt(props.match.params.currencyId, 10);
  const getCryptocurrency = makeGetCryptocurrency(getCryptocurrencyId);

  return (state: RootState, props: RouteComponentProps<{ currencyId: string }>): StateProps => ({
    cryptocurrency: getCryptocurrency(state, props),
    bitcoin: getBitcoin(state),
  });
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators(cryptocurrenciesActions, dispatch),
  },
});

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(CryptocurrencyDetailsPage));
