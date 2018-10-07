import { Reducer } from 'redux';
import { ActionType, getType } from 'typesafe-actions';
import produce from 'immer';

import * as actions from './global.actions';

export type GlobalAction = ActionType<typeof actions>;

export interface StateType {
  readonly test: boolean;
}

const initialState: StateType = {
  test: false,
};

const globalReducer: Reducer<StateType, GlobalAction> = (state = initialState, action) => produce<StateType>(state, (draft) => {
  switch (action.type) {
    case getType(actions.sampleAction): {
      draft.test = false;
      break;
    }
  }
});

export default globalReducer;
