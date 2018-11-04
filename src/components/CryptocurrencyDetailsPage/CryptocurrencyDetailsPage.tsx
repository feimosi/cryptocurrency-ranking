import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';

import BaseComponent from 'common/BaseComponent';
import Button from 'common/Button';
import PageLoadingBar from 'common/PageLoadingBar';
import * as cryptocurrenciesActions from 'state/entities/cryptocurrencies/cryptocurrencies.actions';
import { makeGetCryptocurrencySelector, getBitcoinSelector } from 'state/entities/cryptocurrencies/cryptocurrencies.selectors';
import { getCurrentFiatCurrency } from 'state/global/global.selectors';
import { RootState } from 'state/reducers';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FiatCurrency } from 'types/fiatCurrency.type';

import './CryptocurrencyDetailsPage.css';

interface StateProps {
  cryptocurrency: Cryptocurrency;
  bitcoin: Cryptocurrency;
  currentFiatCurrency: FiatCurrency;
}

interface DispatchProps {
  actions: typeof cryptocurrenciesActions;
}

type Props = StateProps & DispatchProps & RouteComponentProps<{ currencyId: string }>;

export class CryptocurrencyDetailsPage extends BaseComponent<Props> {
  componentDidMount() {
    const { cryptocurrency } = this.props;

    if (!cryptocurrency) {
      this.refreshData();
    }
  }

  refreshData = () => {
    const { match, currentFiatCurrency } = this.props;
    const currencyId = Number.parseInt(match.params.currencyId, 10);

    this.props.actions.fetchCryptocurrency(currencyId, currentFiatCurrency);
  }

  render() {
    const { cryptocurrency, bitcoin, currentFiatCurrency } = this.props;

    if (!cryptocurrency) {
      return <PageLoadingBar />;
    }

    const quote = cryptocurrency.quote[currentFiatCurrency];
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
            { price.toLocaleString() } { currentFiatCurrency }
          </div>
          <div>
            <strong>Volume (24h): </strong>
            { quote.volume24h.toLocaleString() } { currentFiatCurrency }
          </div>
          <div>
            <strong>Market Cap: </strong>
            { quote.marketCap.toLocaleString() } { currentFiatCurrency }
          </div>

          { bitcoin &&
            <div>
              <strong>Price in Bitcoin: </strong>
              { cryptocurrency.quote[currentFiatCurrency].price / bitcoin.quote[currentFiatCurrency].price } BTC
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
        </div>

        <div className="CryptocurrencyDetailsPage__buttonsBar">
          <Button
            theme="primary"
            onClick={ this.refreshData }
          >
            Refresh
          </Button>

          <Button to="/" theme="secondary">
            Go back
          </Button>
        </div>
      </div>
    );
  }
}

const makeMapStateToProps = () => {
  const getCryptocurrencyId = (_state: RootState, props: Props) =>
    Number.parseInt(props.match.params.currencyId, 10);
  const getCryptocurrency = makeGetCryptocurrencySelector(getCryptocurrencyId);

  return (state: RootState, props: RouteComponentProps<{ currencyId: string }>): StateProps => ({
    cryptocurrency: getCryptocurrency(state, props),
    bitcoin: getBitcoinSelector(state),
    currentFiatCurrency: getCurrentFiatCurrency(state),
  });
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators(cryptocurrenciesActions, dispatch),
  },
});

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(CryptocurrencyDetailsPage));
