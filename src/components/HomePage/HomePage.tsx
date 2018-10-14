import * as React from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import * as _ from 'lodash';

import BaseComponent from 'common/BaseComponent';
import * as cryptocurrenciesActions from 'state/entities/cryptocurrencies/cryptocurrencies.actions';
import { RootState } from 'state/reducers';
import { Cryptocurrency } from 'types/cryptocurrency.type';
import './HomePage.css';

interface StateProps {
  cryptocurrencies: Cryptocurrency[];
}

interface DispatchProps {
  actions: typeof cryptocurrenciesActions;
}

type Props = StateProps & DispatchProps;

export class HomePage extends BaseComponent<Props> {
  componentDidMount = () => {
    this.props.actions.fetchCryptocurrencies();
  }

  render() {
    const { cryptocurrencies } = this.props;

    return (
      <div className="HomePage">
        <h1>HomePage</h1>

        <div>
          { cryptocurrencies.map(currency => (
            <div key={ currency.id }>
              { currency.name }
            </div>
          )) }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  cryptocurrencies: _.values(state.entities.cryptocurrencies.items),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators(cryptocurrenciesActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
