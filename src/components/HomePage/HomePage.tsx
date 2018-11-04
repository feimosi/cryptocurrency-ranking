import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import BaseComponent from 'common/BaseComponent';
import Button from 'common/Button';
import Spinner from 'common/Spinner';
import * as cryptocurrenciesActions from 'state/entities/cryptocurrencies/cryptocurrencies.actions';
import { getTopCryptocurrenciesSelector } from 'state/entities/cryptocurrencies/cryptocurrencies.selectors';
import { getCurrentFiatCurrency } from 'state/global/global.selectors';
import { RootState } from 'state/reducers';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FiatCurrency } from 'types/fiatCurrency.type';

import CurrenciesTable from './CurrenciesTable';
import './HomePage.css';

interface StateProps {
  cryptocurrencies: Cryptocurrency[];
  currentFiatCurrency: FiatCurrency;
  isLoading: boolean;
  isRefreshing: boolean;
}

interface DispatchProps {
  actions: typeof cryptocurrenciesActions;
}

type Props = StateProps & DispatchProps;

export class HomePage extends BaseComponent<Props> {
  componentDidMount() {
    this.refreshData();
  }

  refreshData = () => {
    const { actions, currentFiatCurrency } = this.props;

    actions.fetchTopCryptocurrencies(currentFiatCurrency);
  }

  render() {
    const {
      cryptocurrencies,
      currentFiatCurrency,
      isLoading,
      isRefreshing,
   } = this.props;

    return (
      <div className="HomePage">
        <h1>Top 100 Cryptocurrencies</h1>

        <div className="HomePage__refreshButton">
          <Button
            theme="primary"
            onClick={ this.refreshData }
            disabled={ isRefreshing }
            loading={ isRefreshing }
          >
            Refresh
          </Button>
        </div>

        <div className="HomePage__mainContent">
          <CurrenciesTable
            currencies={ cryptocurrencies }
            fiatCurrency={ currentFiatCurrency }
          />
          { isLoading && <Spinner
            color="#1200FF"
            size={ 20 }
          /> }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  cryptocurrencies: getTopCryptocurrenciesSelector(state),
  currentFiatCurrency: getCurrentFiatCurrency(state),
  isLoading: state.entities.cryptocurrencies.top.isLoading,
  isRefreshing: state.entities.cryptocurrencies.top.isRefreshing,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators(cryptocurrenciesActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
