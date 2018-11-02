import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import BaseComponent from 'common/BaseComponent';
import Button from 'common/Button';
import Spinner from 'common/Spinner';
import * as cryptocurrenciesActions from 'state/entities/cryptocurrencies/cryptocurrencies.actions';
import { getTopCryptocurrenciesSelector } from 'state/entities/cryptocurrencies/cryptocurrencies.selectors';
import { getCurrentFlatCurrency } from 'state/global/global.selectors';
import { RootState } from 'state/reducers';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FlatCurrency } from 'types/flatCurrency.type';

import CurrenciesTable from './CurrenciesTable';
import './HomePage.css';

interface StateProps {
  cryptocurrencies: Cryptocurrency[];
  currentFlatCurrency: FlatCurrency;
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
    const { actions, currentFlatCurrency } = this.props;

    actions.fetchTopCryptocurrencies(currentFlatCurrency);
  }

  render() {
    const {
      cryptocurrencies,
      currentFlatCurrency,
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
            flatCurrency={ currentFlatCurrency }
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
  currentFlatCurrency: getCurrentFlatCurrency(state),
  isLoading: state.entities.cryptocurrencies.top.isLoading,
  isRefreshing: state.entities.cryptocurrencies.top.isRefreshing,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators(cryptocurrenciesActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
