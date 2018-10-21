import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import BaseComponent from 'common/BaseComponent';
import * as cryptocurrenciesActions from 'state/entities/cryptocurrencies/cryptocurrencies.actions';
import { getCryptocurrencies } from 'state/entities/cryptocurrencies/cryptocurrencies.selectors';
import { RootState } from 'state/reducers';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import './HomePage.css';
import CurrenciesTable from './CurrenciesTable/CurrenciesTable';
import { FlatCurrency } from 'types/flatCurrency.type';

interface StateProps {
  cryptocurrencies: Cryptocurrency[];
}

interface DispatchProps {
  actions: typeof cryptocurrenciesActions;
}

type Props = StateProps & DispatchProps;

export class HomePage extends BaseComponent<Props> {
  componentDidMount() {
    this.props.actions.fetchCryptocurrencies();
  }

  handleCurrencyClick = () => {
    /* TODO: */
  }

  render() {
    const { cryptocurrencies } = this.props;

    return (
      <div className="HomePage">
        <h1>Top 100 Cryptocurrencies</h1>

        <div>
          <CurrenciesTable
            currencies={ cryptocurrencies }
            flatCurrency={ FlatCurrency.EUR }
            onClick={ this.handleCurrencyClick }
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  cryptocurrencies: getCryptocurrencies(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators(cryptocurrenciesActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
