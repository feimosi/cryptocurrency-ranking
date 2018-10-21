import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router';

import BaseComponent from 'common/BaseComponent';
import PageLoadingBar from 'common/PageLoadingBar';
import * as cryptocurrenciesActions from 'state/entities/cryptocurrencies/cryptocurrencies.actions';
import { makeGetCryptocurrency } from 'state/entities/cryptocurrencies/cryptocurrencies.selectors';
import { RootState } from 'state/reducers';
import { Cryptocurrency } from 'types/cryptocurrency.type';

import './CryptocurrencyDetailsPage.css';

interface StateProps {
  cryptocurrency: Cryptocurrency;
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
    const { cryptocurrency } = this.props;

    if (!cryptocurrency) {
      return <PageLoadingBar />;
    }

    return (
      <div className="CryptocurrencyDetailsPage">
        { cryptocurrency.symbol }
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
  });
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators(cryptocurrenciesActions, dispatch),
  },
});

export default withRouter(connect(makeMapStateToProps, mapDispatchToProps)(CryptocurrencyDetailsPage));
