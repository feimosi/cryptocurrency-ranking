import * as React from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { RadioGroup, Radio } from 'react-radio-group';

import BaseComponent from 'common/BaseComponent';
import Button from 'common/Button';
import Img from 'common/Img';
import * as globalActions from 'state/global/global.actions';
import { getCurrentFlatCurrency } from 'state/global/global.selectors';
import { RootState } from 'state/reducers';
import { FlatCurrency } from 'types/flatCurrency.type';
import './SettingsPage.css';

interface StateProps {
  currentFlatCurrency: FlatCurrency;
}

interface DispatchProps {
  actions: typeof globalActions;
}

type Props = StateProps & DispatchProps;

export class SettingsPage extends BaseComponent<Props> {
  static defaultProps = {};

  handleCurrencyChange = (newCurrency: FlatCurrency) => {
    this.props.actions.changeFlatCurrency(newCurrency);
  }

  render() {
    const { currentFlatCurrency } = this.props;

    return (
      <div className="SettingsPage">
        <h1>Settings</h1>

        <h2>Flat currency</h2>

        <RadioGroup
          className="SettingsPage__flatCurrencyFieldset"
          name="flatCurrency"
          selectedValue={ currentFlatCurrency }
          onChange={ this.handleCurrencyChange }
        >
          <div className="SettingsPage__flatCurrencyOption">
            <Radio value={ FlatCurrency.USD } id={ FlatCurrency.USD } />
            <label htmlFor={ FlatCurrency.USD }>
              <Img src="/img/flags/united-states.svg" />
              USD
            </label>
          </div>

          <div className="SettingsPage__flatCurrencyOption">
            <Radio value={ FlatCurrency.EUR } id={ FlatCurrency.EUR }/>
            <label htmlFor={ FlatCurrency.EUR }>
              <Img src="/img/flags/european-union.svg" />
              EUR
            </label>
          </div>

          <div className="SettingsPage__flatCurrencyOption">
            <Radio value={ FlatCurrency.CNY } id={ FlatCurrency.CNY }/>
            <label htmlFor={ FlatCurrency.CNY }>
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
  currentFlatCurrency: getCurrentFlatCurrency(state),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: {
    ...bindActionCreators(globalActions, dispatch),
  },
});

export default connect(makeMapStateToProps, mapDispatchToProps)(SettingsPage);
