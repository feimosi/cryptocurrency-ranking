import { persistCombineReducers, PersistConfig } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { StateType } from 'typesafe-actions';

import entities from './entities';
import global from './global/global.reducer';

const config: PersistConfig = {
  storage,
  key: 'root',
  transforms: [],
  whitelist: [],
};

const reducers = {
  entities,
  global,
};

const rootReducer = persistCombineReducers(config, reducers);

export default rootReducer;

export type RootState = StateType<typeof reducers>;
