import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RadioGroup, Radio } from 'react-radio-group';

import BaseComponent from 'common/BaseComponent';
import Button from 'common/Button';
import Img from 'common/Img';
import * as globalActions from 'state/global/global.actions';
import { getCurrentFiatCurrency } from 'state/global/global.selectors';
import { RootState } from 'state/reducers';
import { FiatCurrency } from 'types/fiatCurrency.type';
import './SettingsPage.css';

interface StateProps {
  currentFiatCurrency: FiatCurrency;
}

interface DispatchProps {
  actions: typeof globalActions;
}

type Props = StateProps & DispatchProps;

export class SettingsPage extends BaseComponent<Props> {
  static defaultProps = {};

  handleCurrencyChange = (newCurrency: FiatCurrency) => {
    this.props.actions.changeFiatCurrency(newCurrency);
  }

  render() {
    const { currentFiatCurrency } = this.props;

    return (
      <div className="SettingsPage">
        <h1>Settings</h1>

        <h2>Fiat currency</h2>

        <RadioGroup
          className="SettingsPage__fiatCurrencyFieldset"
          name="fiatCurrency"
          selectedValue={ currentFiatCurrency }
          onChange={ this.handleCurrencyChange }
        >
          <div className="SettingsPage__fiatCurrencyOption">
            <Radio value={ FiatCurrency.USD } id={ FiatCurrency.USD } />
            <label htmlFor={ FiatCurrency.USD }>
              <Img src="/img/flags/united-states.svg" />
              USD
            </label>
          </div>

          <div className="SettingsPage__fiatCurrencyOption">
            <Radio value={ FiatCurrency.EUR } id={ FiatCurrency.EUR }/>
            <label htmlFor={ FiatCurrency.EUR }>
              <Img src="/img/flags/european-union.svg" />
              EUR
            </label>
          </div>

          <div className="SettingsPage__fiatCurrencyOption">
            <Radio value={ FiatCurrency.CNY } id={ FiatCurrency.CNY }/>
            <label htmlFor={ FiatCurrency.CNY }>
              <Img src="/img/flags/china.svg" />
              CNY
            </label>
          </div>
        </RadioGroup>

        <div className="SettingsPage__bottomBar">
          <Button to="/" theme="secondary">
            Go back
          </Button>
        </div>
      </div>
    );
  }
}

const makeMapStateToProps = (state: RootState): StateProps => ({
  currentFiatCurrency: getCurrentFiatCurrency(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators(globalActions, dispatch),
  },
});

export default connect(makeMapStateToProps, mapDispatchToProps)(SettingsPage);
