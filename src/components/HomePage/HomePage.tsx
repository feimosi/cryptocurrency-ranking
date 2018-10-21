import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import BaseComponent from 'common/BaseComponent';
import Spinner from 'common/Spinner/Spinner';
import * as cryptocurrenciesActions from 'state/entities/cryptocurrencies/cryptocurrencies.actions';
import { getCryptocurrencies } from 'state/entities/cryptocurrencies/cryptocurrencies.selectors';
import { RootState } from 'state/reducers';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import { FlatCurrency } from 'types/flatCurrency.type';

import CurrenciesTable from './CurrenciesTable';
import './HomePage.css';

interface StateProps {
  cryptocurrencies: Cryptocurrency[];
  isAllFetched: boolean;
}

interface DispatchProps {
  actions: typeof cryptocurrenciesActions;
}

type Props = StateProps & DispatchProps;

export class HomePage extends BaseComponent<Props> {
  componentDidMount() {
    this.props.actions.fetchTopCryptocurrencies();
  }

  render() {
    const { cryptocurrencies, isAllFetched } = this.props;

    return (
      <div className="HomePage">
        <h1>Top 100 Cryptocurrencies</h1>

        <div className="HomePage__mainContent">
          <CurrenciesTable
            currencies={ cryptocurrencies }
            flatCurrency={ FlatCurrency.EUR }
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

const mapStateToProps = (state: RootState) => ({
  cryptocurrencies: getCryptocurrencies(state),
  isAllFetched: state.entities.cryptocurrencies.isAllFetched,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators(cryptocurrenciesActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
