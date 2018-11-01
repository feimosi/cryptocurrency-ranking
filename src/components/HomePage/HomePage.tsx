import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import BaseComponent from 'common/BaseComponent';
import Button from 'common/Button';
import Spinner from 'common/Spinner';
import * as cryptocurrenciesActions from 'state/entities/cryptocurrencies/cryptocurrencies.actions';
import { getCryptocurrencies } from 'state/entities/cryptocurrencies/cryptocurrencies.selectors';
import { getCurrentFlatCurrency } from 'state/global/global.selectors';
import { RootState } from 'state/reducers';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FlatCurrency } from 'types/flatCurrency.type';

import CurrenciesTable from './CurrenciesTable';
import './HomePage.css';

interface StateProps {
  cryptocurrencies: Cryptocurrency[];
  isAllFetched: boolean;
  currentFlatCurrency: FlatCurrency;
}

interface DispatchProps {
  actions: typeof cryptocurrenciesActions;
}

type Props = StateProps & DispatchProps;

export class HomePage extends BaseComponent<Props> {
  componentDidMount() {
    const { actions, currentFlatCurrency } = this.props;

    actions.fetchTopCryptocurrencies(currentFlatCurrency);
  }

  render() {
    const { cryptocurrencies, isAllFetched, currentFlatCurrency } = this.props;

    return (
      <div className="HomePage">
        <h1>Top 100 Cryptocurrencies</h1>

        <div className="HomePage__refreshButton">
          <Button theme="primary">
            Refresh
          </Button>
        </div>

        <div className="HomePage__mainContent">
          <CurrenciesTable
            currencies={ cryptocurrencies }
            flatCurrency={ currentFlatCurrency }
          />
          { !isAllFetched && <Spinner
            color="#1200FF"
            size={ 20 }
          /> }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState): StateProps => ({
  cryptocurrencies: getCryptocurrencies(state),
  isAllFetched: state.entities.cryptocurrencies.isAllFetched,
  currentFlatCurrency: getCurrentFlatCurrency(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators(cryptocurrenciesActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
